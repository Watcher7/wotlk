import { BooleanPicker } from '/wotlk/core/components/boolean_picker.js';
import { EnumPicker } from '/wotlk/core/components/enum_picker.js';
import { Conjured } from '/wotlk/core/proto/common.js';
import { Potions } from '/wotlk/core/proto/common.js';
import { RaidTarget } from '/wotlk/core/proto/common.js';
import { emptyRaidTarget } from '/wotlk/core/proto_utils/utils.js';
export function makeShow1hWeaponsSelector(parent, sim) {
    return new BooleanPicker(parent, sim, {
        extraCssClasses: [
            'show-1h-weapons-selector',
        ],
        label: '1H',
        changedEvent: (sim) => sim.show1hWeaponsChangeEmitter,
        getValue: (sim) => sim.getShow1hWeapons(),
        setValue: (eventID, sim, newValue) => {
            sim.setShow1hWeapons(eventID, newValue);
        },
    });
}
export function makeShow2hWeaponsSelector(parent, sim) {
    return new BooleanPicker(parent, sim, {
        extraCssClasses: [
            'show-2h-weapons-selector',
        ],
        label: '2H',
        changedEvent: (sim) => sim.show2hWeaponsChangeEmitter,
        getValue: (sim) => sim.getShow2hWeapons(),
        setValue: (eventID, sim, newValue) => {
            sim.setShow2hWeapons(eventID, newValue);
        },
    });
}
export function makeShowMatchingGemsSelector(parent, sim) {
    return new BooleanPicker(parent, sim, {
        extraCssClasses: [
            'show-matching-gems-selector',
        ],
        label: 'Match Socket',
        changedEvent: (sim) => sim.showMatchingGemsChangeEmitter,
        getValue: (sim) => sim.getShowMatchingGems(),
        setValue: (eventID, sim, newValue) => {
            sim.setShowMatchingGems(eventID, newValue);
        },
    });
}
export function makePhaseSelector(parent, sim) {
    return new EnumPicker(parent, sim, {
        extraCssClasses: [
            'phase-selector',
        ],
        values: [
            { name: 'Phase 1', value: 1 },
            { name: 'Phase 2', value: 2 },
            { name: 'Phase 3', value: 3 },
            { name: 'Phase 4', value: 4 },
            { name: 'Phase 5', value: 5 },
        ],
        changedEvent: (sim) => sim.phaseChangeEmitter,
        getValue: (sim) => sim.getPhase(),
        setValue: (eventID, sim, newValue) => {
            sim.setPhase(eventID, newValue);
        },
    });
}
export const PrepopPotion = {
    type: 'enum',
    label: 'Prepop Potion',
    labelTooltip: 'If set, this potion will be used 1s before combat starts.',
    values: [
        { name: 'None', value: Potions.UnknownPotion },
        { name: 'Speed', value: Potions.PotionOfSpeed },
        { name: 'Wild Magic', value: Potions.PotionOfWildMagic },
        { name: 'Indestructible Potion', value: Potions.IndestructiblePotion },
    ],
    changedEvent: (player) => player.consumesChangeEmitter,
    getValue: (player) => player.getConsumes().prepopPotion,
    setValue: (eventID, player, newValue) => {
        const newConsumes = player.getConsumes();
        newConsumes.prepopPotion = newValue;
        player.setConsumes(eventID, newConsumes);
    },
};
export const StartingConjured = {
    type: 'enum',
    label: 'Starting Conjured',
    labelTooltip: 'If set, this conjured will be used instead of the default conjured for the first few uses.',
    values: [
        { name: 'None', value: Conjured.ConjuredUnknown },
        { name: 'Dark Rune', value: Conjured.ConjuredDarkRune },
        { name: 'Flame Cap', value: Conjured.ConjuredFlameCap },
        { name: 'Mana Gem', value: Conjured.ConjuredMageManaEmerald },
        { name: 'Thistle Tea', value: Conjured.ConjuredRogueThistleTea },
    ],
    changedEvent: (player) => player.consumesChangeEmitter,
    getValue: (player) => player.getConsumes().startingConjured,
    setValue: (eventID, player, newValue) => {
        const newConsumes = player.getConsumes();
        newConsumes.startingConjured = newValue;
        player.setConsumes(eventID, newConsumes);
    },
};
export const NumStartingConjured = {
    type: 'number',
    label: '# to use',
    labelTooltip: 'The number of starting conjured items to use before going back to the default conjured.',
    changedEvent: (player) => player.consumesChangeEmitter,
    getValue: (player) => player.getConsumes().numStartingConjured,
    setValue: (eventID, player, newValue) => {
        const newConsumes = player.getConsumes();
        newConsumes.numStartingConjured = newValue;
        player.setConsumes(eventID, newConsumes);
    },
    enableWhen: (player) => player.getConsumes().startingConjured != Conjured.ConjuredUnknown,
};
export const InFrontOfTarget = {
    type: 'boolean',
    label: 'In Front of Target',
    labelTooltip: 'Stand in front of the target, causing Blocks and Parries to be included in the attack table.',
    changedEvent: (player) => player.inFrontOfTargetChangeEmitter,
    getValue: (player) => player.getInFrontOfTarget(),
    setValue: (eventID, player, newValue) => {
        player.setInFrontOfTarget(eventID, newValue);
    },
};
export const TankAssignment = {
    type: 'enum',
    extraCssClasses: [
        'tank-selector',
        'threat-metrics',
        'within-raid-sim-hide',
    ],
    label: 'Tank Assignment',
    labelTooltip: 'Determines which mobs will be tanked. Most mobs default to targeting the Main Tank, but in preset multi-target encounters this is not always true.',
    values: [
        { name: 'None', value: -1 },
        { name: 'Main Tank', value: 0 },
        { name: 'Tank 2', value: 1 },
        { name: 'Tank 3', value: 2 },
        { name: 'Tank 4', value: 3 },
    ],
    changedEvent: (player) => player.getRaid().tanksChangeEmitter,
    getValue: (player) => player.getRaid().getTanks().findIndex(tank => RaidTarget.equals(tank, player.makeRaidTarget())),
    setValue: (eventID, player, newValue) => {
        const newTanks = [];
        if (newValue != -1) {
            for (let i = 0; i < newValue; i++) {
                newTanks.push(emptyRaidTarget());
            }
            newTanks.push(player.makeRaidTarget());
        }
        player.getRaid().setTanks(eventID, newTanks);
    },
};
export const IncomingHps = {
    type: 'number',
    label: 'Incoming HPS',
    labelTooltip: `
		<p>Average amount of healing received per second. Used for calculating chance of death.</p>
		<p>If set to 0, defaults to 125% of DTPS.</p>
	`,
    changedEvent: (player) => player.getRaid().changeEmitter,
    getValue: (player) => player.getHealingModel().hps,
    setValue: (eventID, player, newValue) => {
        const healingModel = player.getHealingModel();
        healingModel.hps = newValue;
        player.setHealingModel(eventID, healingModel);
    },
    enableWhen: (player) => player.getRaid().getTanks().find(tank => RaidTarget.equals(tank, player.makeRaidTarget())) != null,
};
export const HealingCadence = {
    type: 'number',
    float: true,
    label: 'Healing Cadence',
    labelTooltip: `
		<p>How often the incoming heal 'ticks', in seconds. Generally, longer durations favor Effective Hit Points (EHP) for minimizing Chance of Death, while shorter durations favor avoidance.</p>
		<p>Example: if Incoming HPS is set to 1000 and this is set to 1s, then every 1s a heal will be received for 1000. If this is instead set to 2s, then every 2s a heal will be recieved for 2000.</p>
		<p>If set to 0, defaults to 2.5 seconds.</p>
	`,
    changedEvent: (player) => player.getRaid().changeEmitter,
    getValue: (player) => player.getHealingModel().cadenceSeconds,
    setValue: (eventID, player, newValue) => {
        const healingModel = player.getHealingModel();
        healingModel.cadenceSeconds = newValue;
        player.setHealingModel(eventID, healingModel);
    },
    enableWhen: (player) => player.getRaid().getTanks().find(tank => RaidTarget.equals(tank, player.makeRaidTarget())) != null,
};
export const HpPercentForDefensives = {
    type: 'number',
    float: true,
    label: 'HP % for Defensive CDs',
    labelTooltip: `
		<p>% of Maximum Health, below which defensive cooldowns are allowed to be used.</p>
		<p>If set to 0, this restriction is disabled.</p>
	`,
    changedEvent: (player) => player.cooldownsChangeEmitter,
    getValue: (player) => player.getCooldowns().hpPercentForDefensives * 100,
    setValue: (eventID, player, newValue) => {
        const cooldowns = player.getCooldowns();
        cooldowns.hpPercentForDefensives = newValue / 100;
        player.setCooldowns(eventID, cooldowns);
    },
};
