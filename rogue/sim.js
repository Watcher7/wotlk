import { RaidBuffs } from '/wotlk/core/proto/common.js';
import { PartyBuffs } from '/wotlk/core/proto/common.js';
import { IndividualBuffs } from '/wotlk/core/proto/common.js';
import { Debuffs } from '/wotlk/core/proto/common.js';
import { Stat } from '/wotlk/core/proto/common.js';
import { TristateEffect } from '/wotlk/core/proto/common.js';
import { Stats } from '/wotlk/core/proto_utils/stats.js';
import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
import * as OtherInputs from '/wotlk/core/components/other_inputs.js';
import * as RogueInputs from './inputs.js';
import * as Presets from './presets.js';
export class RogueSimUI extends IndividualSimUI {
    constructor(parentElem, player) {
        super(parentElem, player, {
            cssClass: 'rogue-sim-ui',
            // List any known bugs / issues here and they'll be shown on the site.
            knownIssues: [
                'Rotations are not fully optimized, especially for non-standard setups.',
            ],
            warnings: [
                (simUI) => {
                    return {
                        updateOn: simUI.player.changeEmitter,
                        getContent: () => {
                            if (simUI.player.getRotation().maintainExposeArmor && simUI.player.getTalents().improvedExposeArmor < 2) {
                                return '\'Maintain Expose Armor\' selected, but missing points in Improved Expose Armor!';
                            }
                            else {
                                return '';
                            }
                        },
                    };
                },
            ],
            // All stats for which EP should be calculated.
            epStats: [
                Stat.StatAgility,
                Stat.StatStrength,
                Stat.StatAttackPower,
                Stat.StatMeleeHit,
                Stat.StatMeleeCrit,
                Stat.StatMeleeHaste,
                Stat.StatArmorPenetration,
                Stat.StatExpertise,
            ],
            // Reference stat against which to calculate EP.
            epReferenceStat: Stat.StatAttackPower,
            // Which stats to display in the Character Stats section, at the bottom of the left-hand sidebar.
            displayStats: [
                Stat.StatHealth,
                Stat.StatStamina,
                Stat.StatAgility,
                Stat.StatStrength,
                Stat.StatAttackPower,
                Stat.StatMeleeHit,
                Stat.StatMeleeCrit,
                Stat.StatMeleeHaste,
                Stat.StatArmorPenetration,
                Stat.StatExpertise,
            ],
            defaults: {
                // Default equipped gear.
                gear: Presets.P1_PRESET.gear,
                // Default EP weights for sorting gear in the gear picker.
                epWeights: Stats.fromMap({
                    [Stat.StatAgility]: 2.214,
                    [Stat.StatStrength]: 1.1,
                    [Stat.StatAttackPower]: 1,
                    [Stat.StatMeleeHit]: 2.852,
                    [Stat.StatMeleeCrit]: 1.763,
                    [Stat.StatMeleeHaste]: 2.311,
                    [Stat.StatArmorPenetration]: 0.44,
                    [Stat.StatExpertise]: 3.107,
                }),
                // Default consumes settings.
                consumes: Presets.DefaultConsumes,
                // Default rotation settings.
                rotation: Presets.DefaultRotation,
                // Default talents.
                talents: Presets.CombatTalents.data,
                // Default spec-specific settings.
                specOptions: Presets.DefaultOptions,
                // Default raid/party buffs settings.
                raidBuffs: RaidBuffs.create({
                    giftOfTheWild: TristateEffect.TristateEffectImproved,
                    bloodlust: true,
                    strengthOfEarthTotem: TristateEffect.TristateEffectImproved,
                    icyTalons: true,
                    battleShout: TristateEffect.TristateEffectImproved,
                    leaderOfThePack: TristateEffect.TristateEffectImproved,
                }),
                partyBuffs: PartyBuffs.create({}),
                individualBuffs: IndividualBuffs.create({
                    blessingOfKings: true,
                    blessingOfMight: TristateEffect.TristateEffectImproved,
                }),
                debuffs: Debuffs.create({
                    mangle: true,
                    sunderArmor: true,
                    curseOfWeakness: TristateEffect.TristateEffectMissing,
                    faerieFire: TristateEffect.TristateEffectImproved,
                    misery: true,
                    savageCombat: false,
                }),
            },
            // IconInputs to include in the 'Player' section on the settings tab.
            playerIconInputs: [],
            //	weaponImbues: [
            //		WeaponImbue.WeaponImbueRogueDeadlyPoison,
            //		WeaponImbue.WeaponImbueRogueInstantPoison,
            //	],
            // Inputs to include in the 'Rotation' section on the settings tab.
            rotationInputs: RogueInputs.RogueRotationConfig,
            // Buff and Debuff inputs to include/exclude, overriding the EP-based defaults.
            includeBuffDebuffInputs: [],
            excludeBuffDebuffInputs: [],
            // Inputs to include in the 'Other' section on the settings tab.
            otherInputs: {
                inputs: [
                    OtherInputs.StartingConjured,
                    OtherInputs.NumStartingConjured,
                    OtherInputs.TankAssignment,
                    OtherInputs.InFrontOfTarget,
                ],
            },
            additionalIconSections: {},
            encounterPicker: {
                // Whether to include 'Execute Duration (%)' in the 'Encounter' section of the settings tab.
                showExecuteProportion: false,
            },
            presets: {
                // Preset talents that the user can quickly select.
                talents: [
                    Presets.CombatTalents,
                ],
                // Preset gear configurations that the user can quickly select.
                gear: [
                    Presets.P1_PRESET,
                ],
            },
        });
    }
}
