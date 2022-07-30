import { Faction } from '/wotlk/core/proto/common.js';
import { Item } from '/wotlk/core/proto/common.js';
import { Profession } from '/wotlk/core/proto/common.js';
import { RaidTarget } from '/wotlk/core/proto/common.js';
import { ComputeStatsRequest } from '/wotlk/core/proto/api.js';
import { GearListRequest } from '/wotlk/core/proto/api.js';
import { RaidSimRequest } from '/wotlk/core/proto/api.js';
import { SimOptions } from '/wotlk/core/proto/api.js';
import { StatWeightsRequest, StatWeightsResult } from '/wotlk/core/proto/api.js';
import { SimSettings as SimSettingsProto } from '/wotlk/core/proto/ui.js';
import { EquippedItem } from '/wotlk/core/proto_utils/equipped_item.js';
import { Gear } from '/wotlk/core/proto_utils/gear.js';
import { SimResult } from '/wotlk/core/proto_utils/sim_result.js';
import { gemEligibleForSocket } from '/wotlk/core/proto_utils/gems.js';
import { gemMatchesSocket } from '/wotlk/core/proto_utils/gems.js';
import { getEligibleItemSlots } from '/wotlk/core/proto_utils/utils.js';
import { getEligibleEnchantSlots } from '/wotlk/core/proto_utils/utils.js';
import { Encounter } from './encounter.js';
import { Raid } from './raid.js';
import { TypedEvent } from './typed_event.js';
import { WorkerPool } from './worker_pool.js';
import * as OtherConstants from '/wotlk/core/constants/other.js';
// Core Sim module which deals only with api types, no UI-related stuff.
export class Sim {
    constructor() {
        this.iterations = 3000;
        this.phase = OtherConstants.CURRENT_PHASE;
        this.faction = Faction.Alliance;
        this.fixedRngSeed = 0;
        this.show1hWeapons = true;
        this.show2hWeapons = true;
        this.showMatchingGems = true;
        this.showThreatMetrics = false;
        this.showExperimental = false;
        // Database
        this.items = {};
        this.enchants = [];
        this.gems = {};
        this.presetEncounters = {};
        this.presetTargets = {};
        this.iterationsChangeEmitter = new TypedEvent();
        this.phaseChangeEmitter = new TypedEvent();
        this.factionChangeEmitter = new TypedEvent();
        this.fixedRngSeedChangeEmitter = new TypedEvent();
        this.lastUsedRngSeedChangeEmitter = new TypedEvent();
        this.show1hWeaponsChangeEmitter = new TypedEvent();
        this.show2hWeaponsChangeEmitter = new TypedEvent();
        this.showMatchingGemsChangeEmitter = new TypedEvent();
        this.showThreatMetricsChangeEmitter = new TypedEvent();
        this.showExperimentalChangeEmitter = new TypedEvent();
        this.crashEmitter = new TypedEvent();
        // Fires when a raid sim API call completes.
        this.simResultEmitter = new TypedEvent();
        this.lastUsedRngSeed = 0;
        // These callbacks are needed so we can apply BuffBot modifications automatically before sending requests.
        this.modifyRaidProto = () => { };
        this.workerPool = new WorkerPool(3);
        this._initPromise = this.workerPool.getGearList(GearListRequest.create()).then(result => {
            result.items.forEach(item => this.items[item.id] = item);
            // result.enchants.forEach(enchant => this.enchants[enchant.id] = enchant);
            this.enchants = result.enchants;
            result.gems.forEach(gem => this.gems[gem.id] = gem);
            result.encounters.forEach(encounter => this.presetEncounters[encounter.path] = encounter);
            result.encounters.map(e => e.targets).flat().forEach(target => this.presetTargets[target.path] = target);
        });
        this.raid = new Raid(this);
        this.encounter = new Encounter(this);
        this.settingsChangeEmitter = TypedEvent.onAny([
            this.iterationsChangeEmitter,
            this.phaseChangeEmitter,
            this.fixedRngSeedChangeEmitter,
            this.show1hWeaponsChangeEmitter,
            this.show2hWeaponsChangeEmitter,
            this.showMatchingGemsChangeEmitter,
            this.showThreatMetricsChangeEmitter,
            this.showExperimentalChangeEmitter,
        ]);
        this.changeEmitter = TypedEvent.onAny([
            this.settingsChangeEmitter,
            this.raid.changeEmitter,
            this.encounter.changeEmitter,
        ]);
        this.raid.changeEmitter.on(eventID => this.updateCharacterStats(eventID));
    }
    waitForInit() {
        return this._initPromise;
    }
    setModifyRaidProto(newModFn) {
        this.modifyRaidProto = newModFn;
    }
    getModifiedRaidProto() {
        const raidProto = this.raid.toProto();
        this.modifyRaidProto(raidProto);
        // Remove any inactive meta gems, since the backend doesn't have its own validation.
        raidProto.parties.forEach(party => {
            party.players.forEach(player => {
                if (!player.equipment) {
                    return;
                }
                let gear = this.lookupEquipmentSpec(player.equipment);
                let gearChanged = false;
                // Disable meta gem if inactive.
                if (gear.hasInactiveMetaGem()) {
                    gear = gear.withoutMetaGem();
                    gearChanged = true;
                }
                // Remove bonus sockets if not blacksmith.
                const isBlacksmith = [player.profession1, player.profession2].includes(Profession.Blacksmithing);
                if (!isBlacksmith) {
                    gear = gear.withoutBlacksmithSockets();
                    gearChanged = true;
                }
                if (gearChanged) {
                    player.equipment = gear.asSpec();
                }
            });
        });
        return raidProto;
    }
    makeRaidSimRequest(debug) {
        const raid = this.getModifiedRaidProto();
        const encounter = this.encounter.toProto();
        // TODO: remove any replenishment from sim request here? probably makes more sense to do it inside the sim to protect against accidents
        return RaidSimRequest.create({
            raid: raid,
            encounter: encounter,
            simOptions: SimOptions.create({
                iterations: debug ? 1 : this.getIterations(),
                randomSeed: BigInt(this.nextRngSeed()),
                debugFirstIteration: true,
            }),
        });
    }
    async runRaidSim(eventID, onProgress) {
        if (this.raid.isEmpty()) {
            throw new Error('Raid is empty! Try adding some players first.');
        }
        else if (this.encounter.getNumTargets() < 1) {
            throw new Error('Encounter has no targets! Try adding some targets first.');
        }
        await this.waitForInit();
        const request = this.makeRaidSimRequest(false);
        var result = await this.workerPool.raidSimAsync(request, onProgress);
        if (result.errorResult != "") {
            throw new SimError(result.errorResult);
        }
        const simResult = await SimResult.makeNew(request, result);
        this.simResultEmitter.emit(eventID, simResult);
    }
    async runRaidSimWithLogs(eventID) {
        if (this.raid.isEmpty()) {
            throw new Error('Raid is empty! Try adding some players first.');
        }
        else if (this.encounter.getNumTargets() < 1) {
            throw new Error('Encounter has no targets! Try adding some targets first.');
        }
        await this.waitForInit();
        const request = this.makeRaidSimRequest(true);
        const result = await this.workerPool.raidSimAsync(request, () => { });
        if (result.errorResult != "") {
            throw new SimError(result.errorResult);
        }
        const simResult = await SimResult.makeNew(request, result);
        this.simResultEmitter.emit(eventID, simResult);
        return simResult;
    }
    // This should be invoked internally whenever stats might have changed.
    async updateCharacterStats(eventID) {
        if (eventID == 0) {
            // Skip the first event ID because it interferes with the loaded stats.
            return;
        }
        eventID = TypedEvent.nextEventID();
        await this.waitForInit();
        // Capture the current players so we avoid issues if something changes while
        // request is in-flight.
        const players = this.raid.getPlayers();
        const req = ComputeStatsRequest.create({ raid: this.getModifiedRaidProto() });
        const result = await this.workerPool.computeStats(req);
        if (result.errorResult != "") {
            this.crashEmitter.emit(eventID, new SimError(result.errorResult));
            return;
        }
        TypedEvent.freezeAllAndDo(() => {
            result.raidStats.parties
                .forEach((partyStats, partyIndex) => partyStats.players.forEach((playerStats, playerIndex) => players[partyIndex * 5 + playerIndex]?.setCurrentStats(eventID, playerStats)));
        });
    }
    async statWeights(player, epStats, epReferenceStat, onProgress) {
        if (this.raid.isEmpty()) {
            throw new Error('Raid is empty! Try adding some players first.');
        }
        else if (this.encounter.getNumTargets() < 1) {
            throw new Error('Encounter has no targets! Try adding some targets first.');
        }
        await this.waitForInit();
        if (player.getParty() == null) {
            console.warn('Trying to get stat weights without a party!');
            return StatWeightsResult.create();
        }
        else {
            const tanks = this.raid.getTanks().map(tank => tank.targetIndex).includes(player.getRaidIndex())
                ? [RaidTarget.create({ targetIndex: 0 })]
                : [];
            const request = StatWeightsRequest.create({
                player: player.toProto(),
                raidBuffs: this.raid.getBuffs(),
                partyBuffs: player.getParty().getBuffs(),
                debuffs: this.raid.getDebuffs(),
                encounter: this.encounter.toProto(),
                simOptions: SimOptions.create({
                    iterations: this.getIterations(),
                    randomSeed: BigInt(this.nextRngSeed()),
                    debug: false,
                }),
                tanks: tanks,
                statsToWeigh: epStats,
                epReferenceStat: epReferenceStat,
            });
            var result = await this.workerPool.statWeightsAsync(request, onProgress);
            return result;
        }
    }
    getItems(slot) {
        let items = Object.values(this.items);
        if (slot != undefined) {
            items = items.filter(item => getEligibleItemSlots(item).includes(slot));
        }
        return items;
    }
    getEnchants(slot) {
        let enchants = Object.values(this.enchants);
        if (slot != undefined) {
            enchants = enchants.filter(enchant => getEligibleEnchantSlots(enchant).includes(slot));
        }
        return enchants;
    }
    // ID can be the formula ID OR the effect ID.
    getEnchantFlexible(id) {
        return Object.values(this.enchants).find(enchant => enchant.id == id || enchant.effectId == id) || null;
    }
    getGems(socketColor) {
        let gems = Object.values(this.gems);
        if (socketColor) {
            gems = gems.filter(gem => gemEligibleForSocket(gem, socketColor));
        }
        return gems;
    }
    getMatchingGems(socketColor) {
        return Object.values(this.gems).filter(gem => gemMatchesSocket(gem, socketColor));
    }
    getPresetEncounter(path) {
        return this.presetEncounters[path] || null;
    }
    getPresetTarget(path) {
        return this.presetTargets[path] || null;
    }
    getAllPresetEncounters() {
        return Object.values(this.presetEncounters);
    }
    getAllPresetTargets() {
        return Object.values(this.presetTargets);
    }
    getPhase() {
        return this.phase;
    }
    setPhase(eventID, newPhase) {
        if (newPhase != this.phase && newPhase > 0) {
            this.phase = newPhase;
            this.phaseChangeEmitter.emit(eventID);
        }
    }
    getFaction() {
        return this.faction;
    }
    setFaction(eventID, newFaction) {
        if (newFaction != this.faction && !!newFaction) {
            this.faction = newFaction;
            this.factionChangeEmitter.emit(eventID);
        }
    }
    getFixedRngSeed() {
        return this.fixedRngSeed;
    }
    setFixedRngSeed(eventID, newFixedRngSeed) {
        if (newFixedRngSeed != this.fixedRngSeed) {
            this.fixedRngSeed = newFixedRngSeed;
            this.fixedRngSeedChangeEmitter.emit(eventID);
        }
    }
    nextRngSeed() {
        let rngSeed = 0;
        if (this.fixedRngSeed) {
            rngSeed = this.fixedRngSeed;
        }
        else {
            rngSeed = Math.floor(Math.random() * Sim.MAX_RNG_SEED);
        }
        this.lastUsedRngSeed = rngSeed;
        this.lastUsedRngSeedChangeEmitter.emit(TypedEvent.nextEventID());
        return rngSeed;
    }
    getLastUsedRngSeed() {
        return this.lastUsedRngSeed;
    }
    getShow1hWeapons() {
        return this.show1hWeapons;
    }
    setShow1hWeapons(eventID, newShow1hWeapons) {
        if (newShow1hWeapons != this.show1hWeapons) {
            this.show1hWeapons = newShow1hWeapons;
            this.show1hWeaponsChangeEmitter.emit(eventID);
        }
    }
    getShow2hWeapons() {
        return this.show2hWeapons;
    }
    setShow2hWeapons(eventID, newShow2hWeapons) {
        if (newShow2hWeapons != this.show2hWeapons) {
            this.show2hWeapons = newShow2hWeapons;
            this.show2hWeaponsChangeEmitter.emit(eventID);
        }
    }
    getShowMatchingGems() {
        return this.showMatchingGems;
    }
    setShowMatchingGems(eventID, newShowMatchingGems) {
        if (newShowMatchingGems != this.showMatchingGems) {
            this.showMatchingGems = newShowMatchingGems;
            this.showMatchingGemsChangeEmitter.emit(eventID);
        }
    }
    getShowThreatMetrics() {
        return this.showThreatMetrics;
    }
    setShowThreatMetrics(eventID, newShowThreatMetrics) {
        if (newShowThreatMetrics != this.showThreatMetrics) {
            this.showThreatMetrics = newShowThreatMetrics;
            this.showThreatMetricsChangeEmitter.emit(eventID);
        }
    }
    getShowExperimental() {
        return this.showExperimental;
    }
    setShowExperimental(eventID, newShowExperimental) {
        if (newShowExperimental != this.showExperimental) {
            this.showExperimental = newShowExperimental;
            this.showExperimentalChangeEmitter.emit(eventID);
        }
    }
    getIterations() {
        return this.iterations;
    }
    setIterations(eventID, newIterations) {
        if (newIterations != this.iterations) {
            this.iterations = newIterations;
            this.iterationsChangeEmitter.emit(eventID);
        }
    }
    lookupItemSpec(itemSpec) {
        const item = this.items[itemSpec.id];
        if (!item)
            return null;
        const enchant = itemSpec.enchant > 0 ? this.enchants.find(e => (e.id == itemSpec.enchant && e.type == item.type)) : null;
        const gems = itemSpec.gems.map(gemId => this.gems[gemId] || null);
        return new EquippedItem(item, enchant, gems);
    }
    lookupEquipmentSpec(equipSpec) {
        // EquipmentSpec is supposed to be indexed by slot, but here we assume
        // it isn't just in case.
        const gearMap = {};
        equipSpec.items.forEach(itemSpec => {
            const item = this.lookupItemSpec(itemSpec);
            if (!item)
                return;
            const itemSlots = getEligibleItemSlots(item.item);
            const assignedSlot = itemSlots.find(slot => !gearMap[slot]);
            if (assignedSlot == null)
                throw new Error('No slots left to equip ' + Item.toJsonString(item.item));
            gearMap[assignedSlot] = item;
        });
        return new Gear(gearMap);
    }
    toProto() {
        return SimSettingsProto.create({
            iterations: this.getIterations(),
            phase: this.getPhase(),
            fixedRngSeed: BigInt(this.getFixedRngSeed()),
            showThreatMetrics: this.getShowThreatMetrics(),
            showExperimental: this.getShowExperimental(),
            faction: this.getFaction(),
        });
    }
    fromProto(eventID, proto) {
        TypedEvent.freezeAllAndDo(() => {
            this.setIterations(eventID, proto.iterations || 3000);
            this.setPhase(eventID, proto.phase || OtherConstants.CURRENT_PHASE);
            this.setFixedRngSeed(eventID, Number(proto.fixedRngSeed));
            this.setShowThreatMetrics(eventID, proto.showThreatMetrics);
            this.setShowExperimental(eventID, proto.showExperimental);
            this.setFaction(eventID, proto.faction || Faction.Alliance);
        });
    }
    applyDefaults(eventID, isTankSim) {
        this.fromProto(eventID, SimSettingsProto.create({
            iterations: 3000,
            phase: OtherConstants.CURRENT_PHASE,
            faction: Faction.Alliance,
            showThreatMetrics: isTankSim,
        }));
    }
}
Sim.MAX_RNG_SEED = Math.pow(2, 32) - 1;
export class SimError extends Error {
    constructor(errorStr) {
        super(errorStr);
        this.errorStr = errorStr;
    }
}
