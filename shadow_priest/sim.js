import { RaidBuffs } from '/wotlk/core/proto/common.js';
import { PartyBuffs } from '/wotlk/core/proto/common.js';
import { IndividualBuffs } from '/wotlk/core/proto/common.js';
import { Debuffs } from '/wotlk/core/proto/common.js';
import { Stat } from '/wotlk/core/proto/common.js';
import { TristateEffect } from '/wotlk/core/proto/common.js';
import { Stats } from '/wotlk/core/proto_utils/stats.js';
import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
import { BattleElixir } from '/wotlk/core/proto/common.js';
import { Flask } from '/wotlk/core/proto/common.js';
import { Food } from '/wotlk/core/proto/common.js';
import { GuardianElixir } from '/wotlk/core/proto/common.js';
import { Potions } from '/wotlk/core/proto/common.js';
import * as IconInputs from '/wotlk/core/components/icon_inputs.js';
import * as OtherInputs from '/wotlk/core/components/other_inputs.js';
import * as Mechanics from '/wotlk/core/constants/mechanics.js';
import * as ShadowPriestInputs from './inputs.js';
import * as Presets from './presets.js';
export class ShadowPriestSimUI extends IndividualSimUI {
    constructor(parentElem, player) {
        super(parentElem, player, {
            cssClass: 'shadow-priest-sim-ui',
            // List any known bugs / issues here and they'll be shown on the site.
            knownIssues: [],
            // All stats for which EP should be calculated.
            epStats: [
                Stat.StatIntellect,
                Stat.StatSpirit,
                Stat.StatSpellPower,
                Stat.StatShadowSpellPower,
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
                Stat.StatSpellHit,
                Stat.StatSpellCrit,
                Stat.StatSpellHaste,
                Stat.StatMP5,
            ],
            modifyDisplayStats: (player) => {
                let stats = new Stats();
                stats = stats.addStat(Stat.StatSpellHit, player.getTalents().shadowFocus * 2 * Mechanics.SPELL_HIT_RATING_PER_HIT_CHANCE);
                return {
                    talents: stats,
                };
            },
            defaults: {
                // Default equipped gear.
                gear: Presets.P1_PRESET.gear,
                // Default EP weights for sorting gear in the gear picker.
                epWeights: Stats.fromMap({
                    [Stat.StatIntellect]: 0.05,
                    [Stat.StatSpirit]: 0.11,
                    [Stat.StatSpellPower]: 1,
                    [Stat.StatShadowSpellPower]: 1,
                    [Stat.StatSpellCrit]: 0.163,
                    [Stat.StatSpellHaste]: 1.0,
                    [Stat.StatMP5]: 0.00,
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
                    totemOfWrath: true,
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
                    curseOfElements: TristateEffect.TristateEffectRegular,
                }),
            },
            // IconInputs to include in the 'Self Buffs' section on the settings tab.
            selfBuffInputs: [],
            // IconInputs to include in the 'Other Buffs' section on the settings tab.
            raidBuffInputs: [
                IconInputs.ArcaneBrilliance,
                IconInputs.DivineSpirit,
                IconInputs.GiftOfTheWild,
                IconInputs.MoonkinAura,
                IconInputs.Bloodlust,
                IconInputs.WrathOfAirTotem,
                IconInputs.TotemOfWrath,
                IconInputs.ManaSpringTotem,
            ],
            partyBuffInputs: [
                IconInputs.ManaTideTotem,
                IconInputs.HeroicPresence,
            ],
            playerBuffInputs: [
                IconInputs.BlessingOfKings,
                IconInputs.BlessingOfWisdom,
                IconInputs.Innervate,
                IconInputs.PowerInfusion,
            ],
            // IconInputs to include in the 'Debuffs' section on the settings tab.
            debuffInputs: [
                IconInputs.JudgementOfWisdom,
                IconInputs.CurseOfElements,
            ],
            // Which options are selectable in the 'Consumes' section.
            consumeOptions: {
                potions: [
                    Potions.PotionOfSpeed,
                    Potions.PotionOfWildMagic,
                    Potions.RunicManaPotion,
                ],
                conjured: [],
                flasks: [
                    Flask.FlaskOfTheFrostWyrm,
                ],
                battleElixirs: [
                    BattleElixir.SpellpowerElixir,
                ],
                guardianElixirs: [
                    GuardianElixir.ElixirOfSpirit,
                    GuardianElixir.ElixirOfMightyThoughts,
                    GuardianElixir.ElixirOfMightyMageblood,
                ],
                food: [
                    Food.FoodFishFeast,
                    Food.FoodSkullfishSoup,
                ],
                alcohol: [],
                weaponImbues: [],
                other: [],
            },
            // Inputs to include in the 'Rotation' section on the settings tab.
            rotationInputs: ShadowPriestInputs.ShadowPriestRotationConfig,
            // Inputs to include in the 'Other' section on the settings tab.
            otherInputs: {
                inputs: [
                    OtherInputs.PrepopPotion,
                    OtherInputs.TankAssignment,
                ],
            },
            encounterPicker: {
                // Target stats to show for 'Simple' encounters.
                simpleTargetStats: [
                    Stat.StatShadowResistance,
                ],
                // Whether to include 'Execute Duration (%)' in the 'Encounter' section of the settings tab.
                showExecuteProportion: false,
            },
            // If true, the talents on the talents tab will not be individually modifiable by the user.
            // Note that the use can still pick between preset talents, if there is more than 1.
            freezeTalents: false,
            presets: {
                // Preset talents that the user can quickly select.
                talents: [
                    Presets.StandardTalents,
                ],
                // Preset gear configurations that the user can quickly select.
                gear: [
                    Presets.P1_PRESET,
                ],
            },
        });
    }
}
