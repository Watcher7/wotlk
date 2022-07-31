import { RaidBuffs } from '/wotlk/core/proto/common.js';
import { PartyBuffs } from '/wotlk/core/proto/common.js';
import { IndividualBuffs } from '/wotlk/core/proto/common.js';
import { Debuffs } from '/wotlk/core/proto/common.js';
import { Stat } from '/wotlk/core/proto/common.js';
import { TristateEffect } from '/wotlk/core/proto/common.js';
import { Stats } from '/wotlk/core/proto_utils/stats.js';
import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
import * as OtherInputs from '/wotlk/core/components/other_inputs.js';
import * as Mechanics from '/wotlk/core/constants/mechanics.js';
import * as SmitePriestInputs from './inputs.js';
import * as Presets from './presets.js';
export class SmitePriestSimUI extends IndividualSimUI {
    constructor(parentElem, player) {
        super(parentElem, player, {
            cssClass: 'smite-priest-sim-ui',
            // List any known bugs / issues here and they'll be shown on the site.
            knownIssues: [],
            // All stats for which EP should be calculated.
            epStats: [
                Stat.StatIntellect,
                Stat.StatSpirit,
                Stat.StatSpellPower,
                Stat.StatSpellHit,
                Stat.StatSpellCrit,
                Stat.StatSpellHaste,
                Stat.StatMP5,
            ],
            // Reference stat against which to calculate EP. I think all classes use either spell power or attack power.
            epReferenceStat: Stat.StatSpellPower,
            // Which stats to display in the Character Stats section, at the bottom of the left-hand sidebar.
            displayStats: [
                Stat.StatHealth,
                Stat.StatStamina,
                Stat.StatIntellect,
                Stat.StatSpirit,
                Stat.StatSpellPower,
                Stat.StatShadowSpellPower,
                Stat.StatHolySpellPower,
                Stat.StatSpellHit,
                Stat.StatSpellCrit,
                Stat.StatSpellHaste,
                Stat.StatMP5,
            ],
            modifyDisplayStats: (player) => {
                let stats = new Stats();
                stats = stats.addStat(Stat.StatSpellHit, player.getTalents().shadowFocus * 2 * Mechanics.SPELL_HIT_RATING_PER_HIT_CHANCE +
                    player.getTalents().focusedPower * 2 * Mechanics.SPELL_HIT_RATING_PER_HIT_CHANCE);
                return {
                    talents: stats,
                };
            },
            defaults: {
                // Default equipped gear.
                gear: Presets.P1_PRESET.gear,
                // Default EP weights for sorting gear in the gear picker.
                epWeights: Stats.fromMap({
                    [Stat.StatIntellect]: 1.38,
                    [Stat.StatSpirit]: 1.18,
                    [Stat.StatSpellPower]: 1,
                    [Stat.StatSpellHit]: 2.57,
                    [Stat.StatShadowSpellPower]: 0.05,
                    [Stat.StatHolySpellPower]: 0.95,
                    [Stat.StatSpellCrit]: 0.44,
                    [Stat.StatSpellHaste]: 0.28,
                    [Stat.StatMP5]: 2.05,
                }),
                // Default consumes settings.
                consumes: Presets.DefaultConsumes,
                // Default rotation settings.
                rotation: Presets.DefaultRotation,
                // Default talents.
                talents: Presets.StandardTalents.data,
                // Default spec-specific settings.
                specOptions: Presets.DefaultOptions,
                // Default raid/party buffs settings.
                raidBuffs: RaidBuffs.create({
                    arcaneBrilliance: true,
                    divineSpirit: true,
                    giftOfTheWild: TristateEffect.TristateEffectImproved,
                    bloodlust: true,
                    manaSpringTotem: TristateEffect.TristateEffectRegular,
                    wrathOfAirTotem: true,
                }),
                partyBuffs: PartyBuffs.create({}),
                individualBuffs: IndividualBuffs.create({
                    blessingOfKings: true,
                    blessingOfWisdom: 2,
                }),
                debuffs: Debuffs.create({
                    judgementOfWisdom: true,
                    misery: true,
                    curseOfElements: true,
                }),
            },
            // IconInputs to include in the 'Player' section on the settings tab.
            playerIconInputs: [
                SmitePriestInputs.SelfPowerInfusion,
            ],
            // Inputs to include in the 'Rotation' section on the settings tab.
            rotationInputs: SmitePriestInputs.SmitePriestRotationConfig,
            // Buff and Debuff inputs to include/exclude, overriding the EP-based defaults.
            includeBuffDebuffInputs: [],
            excludeBuffDebuffInputs: [],
            // Inputs to include in the 'Other' section on the settings tab.
            otherInputs: {
                inputs: [
                    OtherInputs.PrepopPotion,
                    OtherInputs.TankAssignment,
                ],
            },
            encounterPicker: {
                // Whether to include 'Execute Duration (%)' in the 'Encounter' section of the settings tab.
                showExecuteProportion: false,
            },
            presets: {
                // Preset talents that the user can quickly select.
                talents: [
                    Presets.StandardTalents,
                    Presets.HolyTalents,
                ],
                // Preset gear configurations that the user can quickly select.
                gear: [
                    Presets.P1_PRESET,
                ],
            },
        });
    }
}
