import { RaidBuffs } from '/wotlk/core/proto/common.js';
import { PartyBuffs } from '/wotlk/core/proto/common.js';
import { IndividualBuffs } from '/wotlk/core/proto/common.js';
import { Debuffs } from '/wotlk/core/proto/common.js';
import { Stat } from '/wotlk/core/proto/common.js';
import { TristateEffect } from '/wotlk/core/proto/common.js';
import { Stats } from '/wotlk/core/proto_utils/stats.js';
import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
import { TotemsSection } from '/wotlk/core/components/totem_inputs.js';
import { Alchohol } from '/wotlk/core/proto/common.js';
import { BattleElixir } from '/wotlk/core/proto/common.js';
import { Flask } from '/wotlk/core/proto/common.js';
import { Food } from '/wotlk/core/proto/common.js';
import { GuardianElixir } from '/wotlk/core/proto/common.js';
import { Conjured } from '/wotlk/core/proto/common.js';
import { Potions } from '/wotlk/core/proto/common.js';
import { WeaponImbue } from '/wotlk/core/proto/common.js';
import * as IconInputs from '/wotlk/core/components/icon_inputs.js';
import * as OtherInputs from '/wotlk/core/components/other_inputs.js';
import * as ShamanInputs from './inputs.js';
import * as Presets from './presets.js';
export class EnhancementShamanSimUI extends IndividualSimUI {
    constructor(parentElem, player) {
        super(parentElem, player, {
            cssClass: 'enhancement-shaman-sim-ui',
            // List any known bugs / issues here and they'll be shown on the site.
            knownIssues: [],
            // All stats for which EP should be calculated.
            epStats: [
                Stat.StatIntellect,
                Stat.StatAgility,
                Stat.StatStrength,
                Stat.StatAttackPower,
                Stat.StatMeleeHit,
                Stat.StatMeleeCrit,
                Stat.StatMeleeHaste,
                Stat.StatArmorPenetration,
                Stat.StatExpertise,
                Stat.StatSpellPower,
                Stat.StatSpellCrit,
                Stat.StatSpellHit,
            ],
            // Reference stat against which to calculate EP. I think all classes use either spell power or attack power.
            epReferenceStat: Stat.StatAttackPower,
            // Which stats to display in the Character Stats section, at the bottom of the left-hand sidebar.
            displayStats: [
                Stat.StatHealth,
                Stat.StatStamina,
                Stat.StatStrength,
                Stat.StatAgility,
                Stat.StatIntellect,
                Stat.StatAttackPower,
                Stat.StatMeleeHit,
                Stat.StatMeleeCrit,
                Stat.StatMeleeHaste,
                Stat.StatExpertise,
                Stat.StatArmorPenetration,
                Stat.StatSpellPower,
                Stat.StatNatureSpellPower,
                Stat.StatSpellHit,
                Stat.StatSpellCrit,
                Stat.StatSpellHaste,
            ],
            defaults: {
                // Default equipped gear.
                gear: Presets.P1_PRESET.gear,
                // Default EP weights for sorting gear in the gear picker.
                epWeights: Stats.fromMap({
                    [Stat.StatIntellect]: 0.078,
                    [Stat.StatAgility]: 1.317,
                    [Stat.StatStrength]: 2.2,
                    [Stat.StatSpellPower]: 0.433,
                    [Stat.StatNatureSpellPower]: 0.216,
                    [Stat.StatAttackPower]: 1.0,
                    [Stat.StatMeleeHit]: 1.665,
                    [Stat.StatMeleeCrit]: 1.357,
                    [Stat.StatMeleeHaste]: 1.944,
                    [Stat.StatArmorPenetration]: 0.283,
                    [Stat.StatExpertise]: 2.871,
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
                    battleShout: TristateEffect.TristateEffectImproved,
                    leaderOfThePack: TristateEffect.TristateEffectImproved,
                }),
                partyBuffs: PartyBuffs.create({}),
                individualBuffs: IndividualBuffs.create({
                    blessingOfKings: true,
                    blessingOfWisdom: TristateEffect.TristateEffectImproved,
                    blessingOfMight: TristateEffect.TristateEffectImproved,
                }),
                debuffs: Debuffs.create({
                    bloodFrenzy: true,
                    sunderArmor: true,
                    curseOfWeakness: TristateEffect.TristateEffectRegular,
                    curseOfElements: true,
                    faerieFire: TristateEffect.TristateEffectImproved,
                    judgementOfWisdom: true,
                    misery: true,
                    huntersMark: TristateEffect.TristateEffectImproved,
                }),
            },
            // IconInputs to include in the 'Self Buffs' section on the settings tab.
            selfBuffInputs: [
                ShamanInputs.IconWaterShield,
                ShamanInputs.IconLightningShield,
                ShamanInputs.IconBloodlust,
            ],
            // IconInputs to include in the 'Other Buffs' section on the settings tab.
            raidBuffInputs: [
                IconInputs.ArcaneBrilliance,
                IconInputs.GiftOfTheWild,
                IconInputs.Bloodlust,
                IconInputs.ManaSpringTotem,
                IconInputs.WrathOfAirTotem,
                IconInputs.TotemOfWrath,
                IconInputs.BattleShout,
                IconInputs.LeaderOfThePack,
                IconInputs.MoonkinAura,
                IconInputs.TrueshotAura,
            ],
            partyBuffInputs: [
                IconInputs.BraidedEterniumChain,
                IconInputs.EyeOfTheNight,
                IconInputs.ChainOfTheTwilightOwl,
            ],
            playerBuffInputs: [
                IconInputs.BlessingOfKings,
                IconInputs.BlessingOfWisdom,
                IconInputs.BlessingOfMight,
            ],
            // IconInputs to include in the 'Debuffs' section on the settings tab.
            debuffInputs: [
                IconInputs.BloodFrenzy,
                IconInputs.JudgementOfWisdom,
                IconInputs.HuntersMark,
                IconInputs.FaerieFire,
                IconInputs.SunderArmor,
                IconInputs.ExposeArmor,
                IconInputs.CurseOfWeakness,
                IconInputs.CurseOfElements,
                IconInputs.Misery,
                IconInputs.ImprovedScorch,
                IconInputs.WintersChill,
                IconInputs.GiftOfArthas,
            ],
            // Which options are selectable in the 'Consumes' section.
            consumeOptions: {
                potions: [
                    Potions.HastePotion,
                    Potions.SuperManaPotion,
                    Potions.DestructionPotion,
                ],
                conjured: [
                    Conjured.ConjuredDarkRune,
                    Conjured.ConjuredFlameCap,
                ],
                flasks: [
                    Flask.FlaskOfRelentlessAssault,
                    Flask.FlaskOfSupremePower,
                    Flask.FlaskOfBlindingLight,
                ],
                battleElixirs: [
                    BattleElixir.ElixirOfDemonslaying,
                    BattleElixir.FelStrengthElixir,
                    BattleElixir.ElixirOfMajorStrength,
                    BattleElixir.ElixirOfMajorAgility,
                    BattleElixir.ElixirOfTheMongoose,
                ],
                guardianElixirs: [
                    GuardianElixir.ElixirOfDraenicWisdom,
                    GuardianElixir.ElixirOfMajorMageblood,
                ],
                food: [
                    Food.FoodRoastedClefthoof,
                    Food.FoodGrilledMudfish,
                    Food.FoodSpicyHotTalbuk,
                    Food.FoodBlackenedBasilisk,
                ],
                alcohol: [
                    Alchohol.AlchoholKreegsStoutBeatdown,
                ],
                weaponImbues: [
                    WeaponImbue.WeaponImbueShamanWindfury,
                    WeaponImbue.WeaponImbueShamanFlametongue,
                    WeaponImbue.WeaponImbueShamanFrostbrand,
                    WeaponImbue.WeaponImbueShamanRockbiter,
                    WeaponImbue.WeaponImbueRighteousWeaponCoating,
                ],
                other: [
                    IconInputs.ScrollOfStrengthV,
                    IconInputs.ScrollOfAgilityV,
                ],
            },
            // Inputs to include in the 'Rotation' section on the settings tab.
            rotationInputs: ShamanInputs.EnhancementShamanRotationConfig,
            // Inputs to include in the 'Other' section on the settings tab.
            otherInputs: {
                inputs: [
                    ShamanInputs.DelayOffhandSwings,
                    OtherInputs.PrepopPotion,
                    OtherInputs.TankAssignment,
                    OtherInputs.InFrontOfTarget,
                ],
            },
            customSections: [
                TotemsSection,
            ],
            encounterPicker: {
                // Target stats to show for 'Simple' encounters.
                simpleTargetStats: [
                    Stat.StatArmor,
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
                    Presets.RestoSubspecTalents,
                ],
                // Preset gear configurations that the user can quickly select.
                gear: [
                    Presets.P1_PRESET,
                    Presets.P2_PRESET,
                    Presets.P3_PRESET,
                    Presets.P4_PRESET,
                    Presets.P5_PRESET,
                ],
            },
        });
    }
}