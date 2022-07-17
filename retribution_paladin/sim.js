import { RaidBuffs } from '/wotlk/core/proto/common.js';
import { PartyBuffs } from '/wotlk/core/proto/common.js';
import { IndividualBuffs } from '/wotlk/core/proto/common.js';
import { Debuffs } from '/wotlk/core/proto/common.js';
import { Stat } from '/wotlk/core/proto/common.js';
import { TristateEffect } from '/wotlk/core/proto/common.js';
import { Stats } from '/wotlk/core/proto_utils/stats.js';
import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
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
import * as RetributionPaladinInputs from './inputs.js';
import * as Presets from './presets.js';
export class RetributionPaladinSimUI extends IndividualSimUI {
    constructor(parentElem, player) {
        super(parentElem, player, {
            cssClass: 'retribution-paladin-sim-ui',
            // List any known bugs / issues here and they'll be shown on the site.
            knownIssues: [
                "<p>Rotation logic can be optimized to use Judgement of Blood more frequently.</p>\
				<p>Including fillers in rotation sometimes causes seal twists to be prevented at high haste values.</p>\
				<p>Seal of Command aura will log at expiring at a longer duration than 400ms when changing seals.\
				However, the 400ms duration is correctly calculated internally for determining procs and damage.</p>"
            ],
            // All stats for which EP should be calculated.
            epStats: [
                Stat.StatStrength,
                Stat.StatAgility,
                Stat.StatIntellect,
                Stat.StatAttackPower,
                Stat.StatMeleeHit,
                Stat.StatMeleeCrit,
                Stat.StatExpertise,
                Stat.StatMeleeHaste,
                Stat.StatArmorPenetration,
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
                Stat.StatMP5,
                Stat.StatAttackPower,
                Stat.StatMeleeHit,
                Stat.StatMeleeCrit,
                Stat.StatMeleeHaste,
                Stat.StatExpertise,
                Stat.StatArmorPenetration,
                Stat.StatSpellPower,
                Stat.StatHolySpellPower,
                Stat.StatSpellHit,
                Stat.StatSpellCrit,
                Stat.StatSpellHaste,
            ],
            defaults: {
                // Default equipped gear.
                gear: Presets.P4_PRESET.gear,
                // Default EP weights for sorting gear in the gear picker.
                epWeights: Stats.fromMap({
                    [Stat.StatStrength]: 2.42,
                    [Stat.StatAgility]: 1.88,
                    [Stat.StatIntellect]: 0,
                    [Stat.StatAttackPower]: 1,
                    [Stat.StatMeleeCrit]: 1.98,
                    [Stat.StatExpertise]: 4.70,
                    [Stat.StatMeleeHaste]: 3.27,
                    [Stat.StatArmorPenetration]: 0.24,
                    [Stat.StatSpellPower]: 0.35,
                    [Stat.StatSpellCrit]: 0,
                    [Stat.StatSpellHit]: 0,
                }),
                // Default consumes settings.
                consumes: Presets.DefaultConsumes,
                // Default rotation settings.
                rotation: Presets.DefaultRotation,
                // Default talents.
                talents: Presets.RetKingsPaladinTalents.data,
                // Default spec-specific settings.
                specOptions: Presets.DefaultOptions,
                // Default raid/party buffs settings.
                raidBuffs: RaidBuffs.create({
                    arcaneBrilliance: true,
                    divineSpirit: true,
                    giftOfTheWild: TristateEffect.TristateEffectImproved,
                    bloodlust: true,
                    manaSpringTotem: TristateEffect.TristateEffectRegular,
                    strengthOfEarthTotem: TristateEffect.TristateEffectImproved,
                    windfuryTotem: TristateEffect.TristateEffectImproved,
                    battleShout: TristateEffect.TristateEffectImproved,
                    unleashedRage: true,
                }),
                partyBuffs: PartyBuffs.create({}),
                individualBuffs: IndividualBuffs.create({
                    blessingOfKings: true,
                    blessingOfMight: TristateEffect.TristateEffectImproved,
                }),
                debuffs: Debuffs.create({
                    judgementOfWisdom: true,
                    misery: true,
                    curseOfElements: true,
                    bloodFrenzy: true,
                    exposeArmor: TristateEffect.TristateEffectImproved,
                    sunderArmor: true,
                    faerieFire: TristateEffect.TristateEffectImproved,
                    curseOfWeakness: TristateEffect.TristateEffectRegular,
                    huntersMark: TristateEffect.TristateEffectImproved,
                }),
            },
            // IconInputs to include in the 'Self Buffs' section on the settings tab.
            selfBuffInputs: [],
            // IconInputs to include in the 'Other Buffs' section on the settings tab.
            raidBuffInputs: [
                IconInputs.ArcaneBrilliance,
                IconInputs.GiftOfTheWild,
                IconInputs.DivineSpirit,
                IconInputs.Bloodlust,
                IconInputs.ManaSpringTotem,
                IconInputs.WindfuryTotem,
                IconInputs.StrengthOfEarthTotem,
                IconInputs.BattleShout,
                IconInputs.LeaderOfThePack,
                IconInputs.TrueshotAura,
                IconInputs.UnleashedRage,
            ],
            partyBuffInputs: [
                IconInputs.HeroicPresence,
                IconInputs.BraidedEterniumChain,
            ],
            playerBuffInputs: [
                IconInputs.BlessingOfKings,
                IconInputs.BlessingOfWisdom,
                IconInputs.BlessingOfMight,
            ],
            // IconInputs to include in the 'Debuffs' section on the settings tab.
            debuffInputs: [
                IconInputs.JudgementOfWisdom,
                IconInputs.ExposeArmor,
                IconInputs.SunderArmor,
                IconInputs.BloodFrenzy,
                IconInputs.HuntersMark,
                IconInputs.FaerieFire,
                IconInputs.CurseOfWeakness,
                IconInputs.CurseOfElements,
                IconInputs.Misery,
                IconInputs.GiftOfArthas,
            ],
            // Which options are selectable in the 'Consumes' section.
            consumeOptions: {
                potions: [
                    Potions.HastePotion,
                    Potions.SuperManaPotion,
                ],
                conjured: [
                    Conjured.ConjuredDarkRune,
                    Conjured.ConjuredFlameCap,
                ],
                flasks: [
                    Flask.FlaskOfRelentlessAssault,
                ],
                battleElixirs: [
                    BattleElixir.ElixirOfDemonslaying,
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
                    WeaponImbue.WeaponImbueAdamantiteSharpeningStone,
                    WeaponImbue.WeaponImbueAdamantiteWeightstone,
                    WeaponImbue.WeaponImbueBrilliantWizardOil,
                    WeaponImbue.WeaponImbueSuperiorWizardOil,
                    WeaponImbue.WeaponImbueRighteousWeaponCoating,
                ],
                other: [
                    IconInputs.ScrollOfStrengthV,
                    IconInputs.ScrollOfAgilityV,
                ],
            },
            // Inputs to include in the 'Rotation' section on the settings tab.
            rotationInputs: RetributionPaladinInputs.RetributionPaladinRotationConfig,
            // Inputs to include in the 'Other' section on the settings tab.
            otherInputs: {
                inputs: [
                    RetributionPaladinInputs.AuraSelection,
                    RetributionPaladinInputs.JudgementSelection,
                    RetributionPaladinInputs.CrusaderStrikeDelayMS,
                    RetributionPaladinInputs.DamgeTakenPerSecond,
                    OtherInputs.TankAssignment,
                    OtherInputs.InFrontOfTarget,
                ],
            },
            encounterPicker: {
                // Target stats to show for 'Simple' encounters.
                simpleTargetStats: [
                    Stat.StatArmor,
                ],
                // Whether to include 'Execute Duration (%)' in the 'Encounter' section of the settings tab.
                showExecuteProportion: false,
            },
            presets: {
                // Preset talents that the user can quickly select.
                talents: [
                    Presets.RetKingsPaladinTalents,
                    Presets.RetNoKingsPaladinTalents,
                ],
                // Preset gear configurations that the user can quickly select.
                gear: [
                    Presets.PRE_RAID_PRESET,
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
