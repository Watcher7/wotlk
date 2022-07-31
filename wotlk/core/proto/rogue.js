import { WireType } from '/wotlk/protobuf-ts/index.js';
import { UnknownFieldHandler } from '/wotlk/protobuf-ts/index.js';
import { reflectionMergePartial } from '/wotlk/protobuf-ts/index.js';
import { MESSAGE_TYPE } from '/wotlk/protobuf-ts/index.js';
import { MessageType } from '/wotlk/protobuf-ts/index.js';
import { RaidTarget } from './common.js';
/**
 * @generated from protobuf enum proto.Rogue.Rotation.Builder
 */
export var Rogue_Rotation_Builder;
(function (Rogue_Rotation_Builder) {
    /**
     * @generated from protobuf enum value: Unknown = 0;
     */
    Rogue_Rotation_Builder[Rogue_Rotation_Builder["Unknown"] = 0] = "Unknown";
    /**
     * @generated from protobuf enum value: Auto = 1;
     */
    Rogue_Rotation_Builder[Rogue_Rotation_Builder["Auto"] = 1] = "Auto";
    /**
     * @generated from protobuf enum value: SinisterStrike = 2;
     */
    Rogue_Rotation_Builder[Rogue_Rotation_Builder["SinisterStrike"] = 2] = "SinisterStrike";
    /**
     * @generated from protobuf enum value: Backstab = 3;
     */
    Rogue_Rotation_Builder[Rogue_Rotation_Builder["Backstab"] = 3] = "Backstab";
    /**
     * @generated from protobuf enum value: Hemorrhage = 4;
     */
    Rogue_Rotation_Builder[Rogue_Rotation_Builder["Hemorrhage"] = 4] = "Hemorrhage";
    /**
     * @generated from protobuf enum value: Mutilate = 5;
     */
    Rogue_Rotation_Builder[Rogue_Rotation_Builder["Mutilate"] = 5] = "Mutilate";
})(Rogue_Rotation_Builder || (Rogue_Rotation_Builder = {}));
/**
 * @generated from protobuf enum proto.RogueMajorGlyph
 */
export var RogueMajorGlyph;
(function (RogueMajorGlyph) {
    /**
     * @generated from protobuf enum value: RogueMajorGlyphNone = 0;
     */
    RogueMajorGlyph[RogueMajorGlyph["RogueMajorGlyphNone"] = 0] = "RogueMajorGlyphNone";
    /**
     * @generated from protobuf enum value: GlyphOfAdrenalineRush = 42954;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfAdrenalineRush"] = 42954] = "GlyphOfAdrenalineRush";
    /**
     * @generated from protobuf enum value: GlyphOfAmbush = 42955;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfAmbush"] = 42955] = "GlyphOfAmbush";
    /**
     * @generated from protobuf enum value: GlyphOfBackstab = 42956;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfBackstab"] = 42956] = "GlyphOfBackstab";
    /**
     * @generated from protobuf enum value: GlyphOfBladeFlurry = 42957;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfBladeFlurry"] = 42957] = "GlyphOfBladeFlurry";
    /**
     * @generated from protobuf enum value: GlyphOfCloakOfShadows = 45769;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfCloakOfShadows"] = 45769] = "GlyphOfCloakOfShadows";
    /**
     * @generated from protobuf enum value: GlyphOfCripplingPoison = 42958;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfCripplingPoison"] = 42958] = "GlyphOfCripplingPoison";
    /**
     * @generated from protobuf enum value: GlyphOfDeadlyThrow = 42959;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfDeadlyThrow"] = 42959] = "GlyphOfDeadlyThrow";
    /**
     * @generated from protobuf enum value: GlyphOfEvasion = 42960;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfEvasion"] = 42960] = "GlyphOfEvasion";
    /**
     * @generated from protobuf enum value: GlyphOfEviscerate = 42961;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfEviscerate"] = 42961] = "GlyphOfEviscerate";
    /**
     * @generated from protobuf enum value: GlyphOfExposeArmor = 42962;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfExposeArmor"] = 42962] = "GlyphOfExposeArmor";
    /**
     * @generated from protobuf enum value: GlyphOfFanOfKnives = 45766;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfFanOfKnives"] = 45766] = "GlyphOfFanOfKnives";
    /**
     * @generated from protobuf enum value: GlyphOfFeint = 42963;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfFeint"] = 42963] = "GlyphOfFeint";
    /**
     * @generated from protobuf enum value: GlyphOfGarrote = 42964;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfGarrote"] = 42964] = "GlyphOfGarrote";
    /**
     * @generated from protobuf enum value: GlyphOfGhostlyStrike = 42965;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfGhostlyStrike"] = 42965] = "GlyphOfGhostlyStrike";
    /**
     * @generated from protobuf enum value: GlyphOfGouge = 42966;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfGouge"] = 42966] = "GlyphOfGouge";
    /**
     * @generated from protobuf enum value: GlyphOfHemorrhage = 42967;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfHemorrhage"] = 42967] = "GlyphOfHemorrhage";
    /**
     * @generated from protobuf enum value: GlyphOfHungerForBlood = 45761;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfHungerForBlood"] = 45761] = "GlyphOfHungerForBlood";
    /**
     * @generated from protobuf enum value: GlyphOfKillingSpree = 45762;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfKillingSpree"] = 45762] = "GlyphOfKillingSpree";
    /**
     * @generated from protobuf enum value: GlyphOfMutilate = 45768;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfMutilate"] = 45768] = "GlyphOfMutilate";
    /**
     * @generated from protobuf enum value: GlyphOfPreparation = 42968;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfPreparation"] = 42968] = "GlyphOfPreparation";
    /**
     * @generated from protobuf enum value: GlyphOfRupture = 42969;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfRupture"] = 42969] = "GlyphOfRupture";
    /**
     * @generated from protobuf enum value: GlyphOfSap = 42970;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfSap"] = 42970] = "GlyphOfSap";
    /**
     * @generated from protobuf enum value: GlyphOfShadowDance = 45764;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfShadowDance"] = 45764] = "GlyphOfShadowDance";
    /**
     * @generated from protobuf enum value: GlyphOfSinisterStrike = 42972;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfSinisterStrike"] = 42972] = "GlyphOfSinisterStrike";
    /**
     * @generated from protobuf enum value: GlyphOfSliceAndDice = 42973;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfSliceAndDice"] = 42973] = "GlyphOfSliceAndDice";
    /**
     * @generated from protobuf enum value: GlyphOfSprint = 42974;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfSprint"] = 42974] = "GlyphOfSprint";
    /**
     * @generated from protobuf enum value: GlyphOfTricksOfTheTrade = 45767;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfTricksOfTheTrade"] = 45767] = "GlyphOfTricksOfTheTrade";
    /**
     * @generated from protobuf enum value: GlyphOfVigor = 42971;
     */
    RogueMajorGlyph[RogueMajorGlyph["GlyphOfVigor"] = 42971] = "GlyphOfVigor";
})(RogueMajorGlyph || (RogueMajorGlyph = {}));
/**
 * @generated from protobuf enum proto.RogueMinorGlyph
 */
export var RogueMinorGlyph;
(function (RogueMinorGlyph) {
    /**
     * @generated from protobuf enum value: RogueMinorGlyphNone = 0;
     */
    RogueMinorGlyph[RogueMinorGlyph["RogueMinorGlyphNone"] = 0] = "RogueMinorGlyphNone";
    /**
     * @generated from protobuf enum value: GlyphOfBlurredSpeed = 43379;
     */
    RogueMinorGlyph[RogueMinorGlyph["GlyphOfBlurredSpeed"] = 43379] = "GlyphOfBlurredSpeed";
    /**
     * @generated from protobuf enum value: GlyphOfDistract = 43376;
     */
    RogueMinorGlyph[RogueMinorGlyph["GlyphOfDistract"] = 43376] = "GlyphOfDistract";
    /**
     * @generated from protobuf enum value: GlyphOfPickLock = 43377;
     */
    RogueMinorGlyph[RogueMinorGlyph["GlyphOfPickLock"] = 43377] = "GlyphOfPickLock";
    /**
     * @generated from protobuf enum value: GlyphOfPickPocket = 43343;
     */
    RogueMinorGlyph[RogueMinorGlyph["GlyphOfPickPocket"] = 43343] = "GlyphOfPickPocket";
    /**
     * @generated from protobuf enum value: GlyphOfSafeFall = 43378;
     */
    RogueMinorGlyph[RogueMinorGlyph["GlyphOfSafeFall"] = 43378] = "GlyphOfSafeFall";
    /**
     * @generated from protobuf enum value: GlyphOfVanish = 43380;
     */
    RogueMinorGlyph[RogueMinorGlyph["GlyphOfVanish"] = 43380] = "GlyphOfVanish";
})(RogueMinorGlyph || (RogueMinorGlyph = {}));
// @generated message type with reflection information, may provide speed optimized methods
class RogueTalents$Type extends MessageType {
    constructor() {
        super("proto.RogueTalents", [
            { no: 1, name: "improved_eviscerate", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "remorseless_attacks", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "malice", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "ruthlessness", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "blood_spatter", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "puncturing_wounds", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "vigor", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "improved_expose_armor", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "lethality", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "vile_poisons", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "improved_poisons", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "fleet_footed", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "cold_blood", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "improved_kidney_shot", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "quick_recovery", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 16, name: "seal_fate", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 17, name: "murder", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 18, name: "deadly_brew", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 19, name: "overkill", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 20, name: "deadened_nerves", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 21, name: "focused_attacks", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 22, name: "find_weakness", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 23, name: "master_poisoner", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 24, name: "mutilate", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 25, name: "turn_the_tables", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 26, name: "cut_to_the_chase", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 27, name: "hunger_for_blood", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 28, name: "improved_gouge", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 29, name: "improved_sinister_strike", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 30, name: "dual_wield_specialization", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 31, name: "improved_slice_and_dice", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 32, name: "deflection", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 33, name: "precision", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 34, name: "endurance", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 35, name: "riposte", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 36, name: "close_quarters_combat", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 37, name: "improved_kick", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 38, name: "improved_sprint", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 39, name: "lightning_reflexes", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 40, name: "aggression", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 41, name: "mace_specialization", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 42, name: "blade_flurry", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 43, name: "hack_and_slash", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 44, name: "weapon_expertise", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 45, name: "blade_twisting", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 46, name: "vitality", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 47, name: "adrenaline_rush", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 48, name: "nerves_of_steel", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 49, name: "throwing_specialization", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 50, name: "combat_potency", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 51, name: "unfair_advantage", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 52, name: "surprise_attacks", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 53, name: "savage_combat", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 54, name: "prey_on_the_weak", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 55, name: "killing_spree", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 56, name: "relentless_strikes", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 57, name: "master_of_deception", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 58, name: "opportunity", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 59, name: "sleight_of_hand", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 60, name: "dirty_tricks", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 61, name: "camouflage", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 62, name: "elusiveness", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 63, name: "ghostly_strike", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 64, name: "serrated_blades", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 65, name: "setup", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 66, name: "initiative", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 67, name: "improved_ambush", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 68, name: "heightened_senses", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 69, name: "preparation", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 70, name: "dirty_deeds", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 71, name: "hemorrhage", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 72, name: "master_of_subtlety", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 73, name: "deadliness", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 74, name: "enveloping_shadows", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 75, name: "premeditation", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 76, name: "cheat_death", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 77, name: "sinister_calling", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 78, name: "waylay", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 79, name: "honor_among_thieves", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 80, name: "shadowstep", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 81, name: "filthy_tricks", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 82, name: "slaughter_from_the_shadows", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 83, name: "shadow_dance", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { improvedEviscerate: 0, remorselessAttacks: 0, malice: 0, ruthlessness: 0, bloodSpatter: 0, puncturingWounds: 0, vigor: false, improvedExposeArmor: 0, lethality: 0, vilePoisons: 0, improvedPoisons: 0, fleetFooted: 0, coldBlood: false, improvedKidneyShot: 0, quickRecovery: 0, sealFate: 0, murder: 0, deadlyBrew: 0, overkill: false, deadenedNerves: 0, focusedAttacks: 0, findWeakness: 0, masterPoisoner: 0, mutilate: false, turnTheTables: 0, cutToTheChase: 0, hungerForBlood: false, improvedGouge: 0, improvedSinisterStrike: 0, dualWieldSpecialization: 0, improvedSliceAndDice: 0, deflection: 0, precision: 0, endurance: 0, riposte: false, closeQuartersCombat: 0, improvedKick: 0, improvedSprint: 0, lightningReflexes: 0, aggression: 0, maceSpecialization: 0, bladeFlurry: false, hackAndSlash: 0, weaponExpertise: 0, bladeTwisting: 0, vitality: 0, adrenalineRush: false, nervesOfSteel: 0, throwingSpecialization: 0, combatPotency: 0, unfairAdvantage: 0, surpriseAttacks: false, savageCombat: 0, preyOnTheWeak: 0, killingSpree: false, relentlessStrikes: 0, masterOfDeception: 0, opportunity: 0, sleightOfHand: 0, dirtyTricks: 0, camouflage: 0, elusiveness: 0, ghostlyStrike: false, serratedBlades: 0, setup: 0, initiative: 0, improvedAmbush: 0, heightenedSenses: 0, preparation: false, dirtyDeeds: 0, hemorrhage: false, masterOfSubtlety: 0, deadliness: 0, envelopingShadows: 0, premeditation: false, cheatDeath: 0, sinisterCalling: 0, waylay: 0, honorAmongThieves: 0, shadowstep: false, filthyTricks: 0, slaughterFromTheShadows: 0, shadowDance: false };
        Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 improved_eviscerate */ 1:
                    message.improvedEviscerate = reader.int32();
                    break;
                case /* int32 remorseless_attacks */ 2:
                    message.remorselessAttacks = reader.int32();
                    break;
                case /* int32 malice */ 3:
                    message.malice = reader.int32();
                    break;
                case /* int32 ruthlessness */ 4:
                    message.ruthlessness = reader.int32();
                    break;
                case /* int32 blood_spatter */ 5:
                    message.bloodSpatter = reader.int32();
                    break;
                case /* int32 puncturing_wounds */ 6:
                    message.puncturingWounds = reader.int32();
                    break;
                case /* bool vigor */ 7:
                    message.vigor = reader.bool();
                    break;
                case /* int32 improved_expose_armor */ 8:
                    message.improvedExposeArmor = reader.int32();
                    break;
                case /* int32 lethality */ 9:
                    message.lethality = reader.int32();
                    break;
                case /* int32 vile_poisons */ 10:
                    message.vilePoisons = reader.int32();
                    break;
                case /* int32 improved_poisons */ 11:
                    message.improvedPoisons = reader.int32();
                    break;
                case /* int32 fleet_footed */ 12:
                    message.fleetFooted = reader.int32();
                    break;
                case /* bool cold_blood */ 13:
                    message.coldBlood = reader.bool();
                    break;
                case /* int32 improved_kidney_shot */ 14:
                    message.improvedKidneyShot = reader.int32();
                    break;
                case /* int32 quick_recovery */ 15:
                    message.quickRecovery = reader.int32();
                    break;
                case /* int32 seal_fate */ 16:
                    message.sealFate = reader.int32();
                    break;
                case /* int32 murder */ 17:
                    message.murder = reader.int32();
                    break;
                case /* int32 deadly_brew */ 18:
                    message.deadlyBrew = reader.int32();
                    break;
                case /* bool overkill */ 19:
                    message.overkill = reader.bool();
                    break;
                case /* int32 deadened_nerves */ 20:
                    message.deadenedNerves = reader.int32();
                    break;
                case /* int32 focused_attacks */ 21:
                    message.focusedAttacks = reader.int32();
                    break;
                case /* int32 find_weakness */ 22:
                    message.findWeakness = reader.int32();
                    break;
                case /* int32 master_poisoner */ 23:
                    message.masterPoisoner = reader.int32();
                    break;
                case /* bool mutilate */ 24:
                    message.mutilate = reader.bool();
                    break;
                case /* int32 turn_the_tables */ 25:
                    message.turnTheTables = reader.int32();
                    break;
                case /* int32 cut_to_the_chase */ 26:
                    message.cutToTheChase = reader.int32();
                    break;
                case /* bool hunger_for_blood */ 27:
                    message.hungerForBlood = reader.bool();
                    break;
                case /* int32 improved_gouge */ 28:
                    message.improvedGouge = reader.int32();
                    break;
                case /* int32 improved_sinister_strike */ 29:
                    message.improvedSinisterStrike = reader.int32();
                    break;
                case /* int32 dual_wield_specialization */ 30:
                    message.dualWieldSpecialization = reader.int32();
                    break;
                case /* int32 improved_slice_and_dice */ 31:
                    message.improvedSliceAndDice = reader.int32();
                    break;
                case /* int32 deflection */ 32:
                    message.deflection = reader.int32();
                    break;
                case /* int32 precision */ 33:
                    message.precision = reader.int32();
                    break;
                case /* int32 endurance */ 34:
                    message.endurance = reader.int32();
                    break;
                case /* bool riposte */ 35:
                    message.riposte = reader.bool();
                    break;
                case /* int32 close_quarters_combat */ 36:
                    message.closeQuartersCombat = reader.int32();
                    break;
                case /* int32 improved_kick */ 37:
                    message.improvedKick = reader.int32();
                    break;
                case /* int32 improved_sprint */ 38:
                    message.improvedSprint = reader.int32();
                    break;
                case /* int32 lightning_reflexes */ 39:
                    message.lightningReflexes = reader.int32();
                    break;
                case /* int32 aggression */ 40:
                    message.aggression = reader.int32();
                    break;
                case /* int32 mace_specialization */ 41:
                    message.maceSpecialization = reader.int32();
                    break;
                case /* bool blade_flurry */ 42:
                    message.bladeFlurry = reader.bool();
                    break;
                case /* int32 hack_and_slash */ 43:
                    message.hackAndSlash = reader.int32();
                    break;
                case /* int32 weapon_expertise */ 44:
                    message.weaponExpertise = reader.int32();
                    break;
                case /* int32 blade_twisting */ 45:
                    message.bladeTwisting = reader.int32();
                    break;
                case /* int32 vitality */ 46:
                    message.vitality = reader.int32();
                    break;
                case /* bool adrenaline_rush */ 47:
                    message.adrenalineRush = reader.bool();
                    break;
                case /* int32 nerves_of_steel */ 48:
                    message.nervesOfSteel = reader.int32();
                    break;
                case /* int32 throwing_specialization */ 49:
                    message.throwingSpecialization = reader.int32();
                    break;
                case /* int32 combat_potency */ 50:
                    message.combatPotency = reader.int32();
                    break;
                case /* int32 unfair_advantage */ 51:
                    message.unfairAdvantage = reader.int32();
                    break;
                case /* bool surprise_attacks */ 52:
                    message.surpriseAttacks = reader.bool();
                    break;
                case /* int32 savage_combat */ 53:
                    message.savageCombat = reader.int32();
                    break;
                case /* int32 prey_on_the_weak */ 54:
                    message.preyOnTheWeak = reader.int32();
                    break;
                case /* bool killing_spree */ 55:
                    message.killingSpree = reader.bool();
                    break;
                case /* int32 relentless_strikes */ 56:
                    message.relentlessStrikes = reader.int32();
                    break;
                case /* int32 master_of_deception */ 57:
                    message.masterOfDeception = reader.int32();
                    break;
                case /* int32 opportunity */ 58:
                    message.opportunity = reader.int32();
                    break;
                case /* int32 sleight_of_hand */ 59:
                    message.sleightOfHand = reader.int32();
                    break;
                case /* int32 dirty_tricks */ 60:
                    message.dirtyTricks = reader.int32();
                    break;
                case /* int32 camouflage */ 61:
                    message.camouflage = reader.int32();
                    break;
                case /* int32 elusiveness */ 62:
                    message.elusiveness = reader.int32();
                    break;
                case /* bool ghostly_strike */ 63:
                    message.ghostlyStrike = reader.bool();
                    break;
                case /* int32 serrated_blades */ 64:
                    message.serratedBlades = reader.int32();
                    break;
                case /* int32 setup */ 65:
                    message.setup = reader.int32();
                    break;
                case /* int32 initiative */ 66:
                    message.initiative = reader.int32();
                    break;
                case /* int32 improved_ambush */ 67:
                    message.improvedAmbush = reader.int32();
                    break;
                case /* int32 heightened_senses */ 68:
                    message.heightenedSenses = reader.int32();
                    break;
                case /* bool preparation */ 69:
                    message.preparation = reader.bool();
                    break;
                case /* int32 dirty_deeds */ 70:
                    message.dirtyDeeds = reader.int32();
                    break;
                case /* bool hemorrhage */ 71:
                    message.hemorrhage = reader.bool();
                    break;
                case /* int32 master_of_subtlety */ 72:
                    message.masterOfSubtlety = reader.int32();
                    break;
                case /* int32 deadliness */ 73:
                    message.deadliness = reader.int32();
                    break;
                case /* int32 enveloping_shadows */ 74:
                    message.envelopingShadows = reader.int32();
                    break;
                case /* bool premeditation */ 75:
                    message.premeditation = reader.bool();
                    break;
                case /* int32 cheat_death */ 76:
                    message.cheatDeath = reader.int32();
                    break;
                case /* int32 sinister_calling */ 77:
                    message.sinisterCalling = reader.int32();
                    break;
                case /* int32 waylay */ 78:
                    message.waylay = reader.int32();
                    break;
                case /* int32 honor_among_thieves */ 79:
                    message.honorAmongThieves = reader.int32();
                    break;
                case /* bool shadowstep */ 80:
                    message.shadowstep = reader.bool();
                    break;
                case /* int32 filthy_tricks */ 81:
                    message.filthyTricks = reader.int32();
                    break;
                case /* int32 slaughter_from_the_shadows */ 82:
                    message.slaughterFromTheShadows = reader.int32();
                    break;
                case /* bool shadow_dance */ 83:
                    message.shadowDance = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 improved_eviscerate = 1; */
        if (message.improvedEviscerate !== 0)
            writer.tag(1, WireType.Varint).int32(message.improvedEviscerate);
        /* int32 remorseless_attacks = 2; */
        if (message.remorselessAttacks !== 0)
            writer.tag(2, WireType.Varint).int32(message.remorselessAttacks);
        /* int32 malice = 3; */
        if (message.malice !== 0)
            writer.tag(3, WireType.Varint).int32(message.malice);
        /* int32 ruthlessness = 4; */
        if (message.ruthlessness !== 0)
            writer.tag(4, WireType.Varint).int32(message.ruthlessness);
        /* int32 blood_spatter = 5; */
        if (message.bloodSpatter !== 0)
            writer.tag(5, WireType.Varint).int32(message.bloodSpatter);
        /* int32 puncturing_wounds = 6; */
        if (message.puncturingWounds !== 0)
            writer.tag(6, WireType.Varint).int32(message.puncturingWounds);
        /* bool vigor = 7; */
        if (message.vigor !== false)
            writer.tag(7, WireType.Varint).bool(message.vigor);
        /* int32 improved_expose_armor = 8; */
        if (message.improvedExposeArmor !== 0)
            writer.tag(8, WireType.Varint).int32(message.improvedExposeArmor);
        /* int32 lethality = 9; */
        if (message.lethality !== 0)
            writer.tag(9, WireType.Varint).int32(message.lethality);
        /* int32 vile_poisons = 10; */
        if (message.vilePoisons !== 0)
            writer.tag(10, WireType.Varint).int32(message.vilePoisons);
        /* int32 improved_poisons = 11; */
        if (message.improvedPoisons !== 0)
            writer.tag(11, WireType.Varint).int32(message.improvedPoisons);
        /* int32 fleet_footed = 12; */
        if (message.fleetFooted !== 0)
            writer.tag(12, WireType.Varint).int32(message.fleetFooted);
        /* bool cold_blood = 13; */
        if (message.coldBlood !== false)
            writer.tag(13, WireType.Varint).bool(message.coldBlood);
        /* int32 improved_kidney_shot = 14; */
        if (message.improvedKidneyShot !== 0)
            writer.tag(14, WireType.Varint).int32(message.improvedKidneyShot);
        /* int32 quick_recovery = 15; */
        if (message.quickRecovery !== 0)
            writer.tag(15, WireType.Varint).int32(message.quickRecovery);
        /* int32 seal_fate = 16; */
        if (message.sealFate !== 0)
            writer.tag(16, WireType.Varint).int32(message.sealFate);
        /* int32 murder = 17; */
        if (message.murder !== 0)
            writer.tag(17, WireType.Varint).int32(message.murder);
        /* int32 deadly_brew = 18; */
        if (message.deadlyBrew !== 0)
            writer.tag(18, WireType.Varint).int32(message.deadlyBrew);
        /* bool overkill = 19; */
        if (message.overkill !== false)
            writer.tag(19, WireType.Varint).bool(message.overkill);
        /* int32 deadened_nerves = 20; */
        if (message.deadenedNerves !== 0)
            writer.tag(20, WireType.Varint).int32(message.deadenedNerves);
        /* int32 focused_attacks = 21; */
        if (message.focusedAttacks !== 0)
            writer.tag(21, WireType.Varint).int32(message.focusedAttacks);
        /* int32 find_weakness = 22; */
        if (message.findWeakness !== 0)
            writer.tag(22, WireType.Varint).int32(message.findWeakness);
        /* int32 master_poisoner = 23; */
        if (message.masterPoisoner !== 0)
            writer.tag(23, WireType.Varint).int32(message.masterPoisoner);
        /* bool mutilate = 24; */
        if (message.mutilate !== false)
            writer.tag(24, WireType.Varint).bool(message.mutilate);
        /* int32 turn_the_tables = 25; */
        if (message.turnTheTables !== 0)
            writer.tag(25, WireType.Varint).int32(message.turnTheTables);
        /* int32 cut_to_the_chase = 26; */
        if (message.cutToTheChase !== 0)
            writer.tag(26, WireType.Varint).int32(message.cutToTheChase);
        /* bool hunger_for_blood = 27; */
        if (message.hungerForBlood !== false)
            writer.tag(27, WireType.Varint).bool(message.hungerForBlood);
        /* int32 improved_gouge = 28; */
        if (message.improvedGouge !== 0)
            writer.tag(28, WireType.Varint).int32(message.improvedGouge);
        /* int32 improved_sinister_strike = 29; */
        if (message.improvedSinisterStrike !== 0)
            writer.tag(29, WireType.Varint).int32(message.improvedSinisterStrike);
        /* int32 dual_wield_specialization = 30; */
        if (message.dualWieldSpecialization !== 0)
            writer.tag(30, WireType.Varint).int32(message.dualWieldSpecialization);
        /* int32 improved_slice_and_dice = 31; */
        if (message.improvedSliceAndDice !== 0)
            writer.tag(31, WireType.Varint).int32(message.improvedSliceAndDice);
        /* int32 deflection = 32; */
        if (message.deflection !== 0)
            writer.tag(32, WireType.Varint).int32(message.deflection);
        /* int32 precision = 33; */
        if (message.precision !== 0)
            writer.tag(33, WireType.Varint).int32(message.precision);
        /* int32 endurance = 34; */
        if (message.endurance !== 0)
            writer.tag(34, WireType.Varint).int32(message.endurance);
        /* bool riposte = 35; */
        if (message.riposte !== false)
            writer.tag(35, WireType.Varint).bool(message.riposte);
        /* int32 close_quarters_combat = 36; */
        if (message.closeQuartersCombat !== 0)
            writer.tag(36, WireType.Varint).int32(message.closeQuartersCombat);
        /* int32 improved_kick = 37; */
        if (message.improvedKick !== 0)
            writer.tag(37, WireType.Varint).int32(message.improvedKick);
        /* int32 improved_sprint = 38; */
        if (message.improvedSprint !== 0)
            writer.tag(38, WireType.Varint).int32(message.improvedSprint);
        /* int32 lightning_reflexes = 39; */
        if (message.lightningReflexes !== 0)
            writer.tag(39, WireType.Varint).int32(message.lightningReflexes);
        /* int32 aggression = 40; */
        if (message.aggression !== 0)
            writer.tag(40, WireType.Varint).int32(message.aggression);
        /* int32 mace_specialization = 41; */
        if (message.maceSpecialization !== 0)
            writer.tag(41, WireType.Varint).int32(message.maceSpecialization);
        /* bool blade_flurry = 42; */
        if (message.bladeFlurry !== false)
            writer.tag(42, WireType.Varint).bool(message.bladeFlurry);
        /* int32 hack_and_slash = 43; */
        if (message.hackAndSlash !== 0)
            writer.tag(43, WireType.Varint).int32(message.hackAndSlash);
        /* int32 weapon_expertise = 44; */
        if (message.weaponExpertise !== 0)
            writer.tag(44, WireType.Varint).int32(message.weaponExpertise);
        /* int32 blade_twisting = 45; */
        if (message.bladeTwisting !== 0)
            writer.tag(45, WireType.Varint).int32(message.bladeTwisting);
        /* int32 vitality = 46; */
        if (message.vitality !== 0)
            writer.tag(46, WireType.Varint).int32(message.vitality);
        /* bool adrenaline_rush = 47; */
        if (message.adrenalineRush !== false)
            writer.tag(47, WireType.Varint).bool(message.adrenalineRush);
        /* int32 nerves_of_steel = 48; */
        if (message.nervesOfSteel !== 0)
            writer.tag(48, WireType.Varint).int32(message.nervesOfSteel);
        /* int32 throwing_specialization = 49; */
        if (message.throwingSpecialization !== 0)
            writer.tag(49, WireType.Varint).int32(message.throwingSpecialization);
        /* int32 combat_potency = 50; */
        if (message.combatPotency !== 0)
            writer.tag(50, WireType.Varint).int32(message.combatPotency);
        /* int32 unfair_advantage = 51; */
        if (message.unfairAdvantage !== 0)
            writer.tag(51, WireType.Varint).int32(message.unfairAdvantage);
        /* bool surprise_attacks = 52; */
        if (message.surpriseAttacks !== false)
            writer.tag(52, WireType.Varint).bool(message.surpriseAttacks);
        /* int32 savage_combat = 53; */
        if (message.savageCombat !== 0)
            writer.tag(53, WireType.Varint).int32(message.savageCombat);
        /* int32 prey_on_the_weak = 54; */
        if (message.preyOnTheWeak !== 0)
            writer.tag(54, WireType.Varint).int32(message.preyOnTheWeak);
        /* bool killing_spree = 55; */
        if (message.killingSpree !== false)
            writer.tag(55, WireType.Varint).bool(message.killingSpree);
        /* int32 relentless_strikes = 56; */
        if (message.relentlessStrikes !== 0)
            writer.tag(56, WireType.Varint).int32(message.relentlessStrikes);
        /* int32 master_of_deception = 57; */
        if (message.masterOfDeception !== 0)
            writer.tag(57, WireType.Varint).int32(message.masterOfDeception);
        /* int32 opportunity = 58; */
        if (message.opportunity !== 0)
            writer.tag(58, WireType.Varint).int32(message.opportunity);
        /* int32 sleight_of_hand = 59; */
        if (message.sleightOfHand !== 0)
            writer.tag(59, WireType.Varint).int32(message.sleightOfHand);
        /* int32 dirty_tricks = 60; */
        if (message.dirtyTricks !== 0)
            writer.tag(60, WireType.Varint).int32(message.dirtyTricks);
        /* int32 camouflage = 61; */
        if (message.camouflage !== 0)
            writer.tag(61, WireType.Varint).int32(message.camouflage);
        /* int32 elusiveness = 62; */
        if (message.elusiveness !== 0)
            writer.tag(62, WireType.Varint).int32(message.elusiveness);
        /* bool ghostly_strike = 63; */
        if (message.ghostlyStrike !== false)
            writer.tag(63, WireType.Varint).bool(message.ghostlyStrike);
        /* int32 serrated_blades = 64; */
        if (message.serratedBlades !== 0)
            writer.tag(64, WireType.Varint).int32(message.serratedBlades);
        /* int32 setup = 65; */
        if (message.setup !== 0)
            writer.tag(65, WireType.Varint).int32(message.setup);
        /* int32 initiative = 66; */
        if (message.initiative !== 0)
            writer.tag(66, WireType.Varint).int32(message.initiative);
        /* int32 improved_ambush = 67; */
        if (message.improvedAmbush !== 0)
            writer.tag(67, WireType.Varint).int32(message.improvedAmbush);
        /* int32 heightened_senses = 68; */
        if (message.heightenedSenses !== 0)
            writer.tag(68, WireType.Varint).int32(message.heightenedSenses);
        /* bool preparation = 69; */
        if (message.preparation !== false)
            writer.tag(69, WireType.Varint).bool(message.preparation);
        /* int32 dirty_deeds = 70; */
        if (message.dirtyDeeds !== 0)
            writer.tag(70, WireType.Varint).int32(message.dirtyDeeds);
        /* bool hemorrhage = 71; */
        if (message.hemorrhage !== false)
            writer.tag(71, WireType.Varint).bool(message.hemorrhage);
        /* int32 master_of_subtlety = 72; */
        if (message.masterOfSubtlety !== 0)
            writer.tag(72, WireType.Varint).int32(message.masterOfSubtlety);
        /* int32 deadliness = 73; */
        if (message.deadliness !== 0)
            writer.tag(73, WireType.Varint).int32(message.deadliness);
        /* int32 enveloping_shadows = 74; */
        if (message.envelopingShadows !== 0)
            writer.tag(74, WireType.Varint).int32(message.envelopingShadows);
        /* bool premeditation = 75; */
        if (message.premeditation !== false)
            writer.tag(75, WireType.Varint).bool(message.premeditation);
        /* int32 cheat_death = 76; */
        if (message.cheatDeath !== 0)
            writer.tag(76, WireType.Varint).int32(message.cheatDeath);
        /* int32 sinister_calling = 77; */
        if (message.sinisterCalling !== 0)
            writer.tag(77, WireType.Varint).int32(message.sinisterCalling);
        /* int32 waylay = 78; */
        if (message.waylay !== 0)
            writer.tag(78, WireType.Varint).int32(message.waylay);
        /* int32 honor_among_thieves = 79; */
        if (message.honorAmongThieves !== 0)
            writer.tag(79, WireType.Varint).int32(message.honorAmongThieves);
        /* bool shadowstep = 80; */
        if (message.shadowstep !== false)
            writer.tag(80, WireType.Varint).bool(message.shadowstep);
        /* int32 filthy_tricks = 81; */
        if (message.filthyTricks !== 0)
            writer.tag(81, WireType.Varint).int32(message.filthyTricks);
        /* int32 slaughter_from_the_shadows = 82; */
        if (message.slaughterFromTheShadows !== 0)
            writer.tag(82, WireType.Varint).int32(message.slaughterFromTheShadows);
        /* bool shadow_dance = 83; */
        if (message.shadowDance !== false)
            writer.tag(83, WireType.Varint).bool(message.shadowDance);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.RogueTalents
 */
export const RogueTalents = new RogueTalents$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Rogue$Type extends MessageType {
    constructor() {
        super("proto.Rogue", [
            { no: 1, name: "rotation", kind: "message", T: () => Rogue_Rotation },
            { no: 2, name: "talents", kind: "message", T: () => RogueTalents },
            { no: 3, name: "options", kind: "message", T: () => Rogue_Options }
        ]);
    }
    create(value) {
        const message = {};
        Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* proto.Rogue.Rotation rotation */ 1:
                    message.rotation = Rogue_Rotation.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* proto.RogueTalents talents */ 2:
                    message.talents = RogueTalents.internalBinaryRead(reader, reader.uint32(), options, message.talents);
                    break;
                case /* proto.Rogue.Options options */ 3:
                    message.options = Rogue_Options.internalBinaryRead(reader, reader.uint32(), options, message.options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* proto.Rogue.Rotation rotation = 1; */
        if (message.rotation)
            Rogue_Rotation.internalBinaryWrite(message.rotation, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* proto.RogueTalents talents = 2; */
        if (message.talents)
            RogueTalents.internalBinaryWrite(message.talents, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* proto.Rogue.Options options = 3; */
        if (message.options)
            Rogue_Options.internalBinaryWrite(message.options, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Rogue
 */
export const Rogue = new Rogue$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Rogue_Rotation$Type extends MessageType {
    constructor() {
        super("proto.Rogue.Rotation", [
            { no: 3, name: "builder", kind: "enum", T: () => ["proto.Rogue.Rotation.Builder", Rogue_Rotation_Builder] },
            { no: 1, name: "maintain_expose_armor", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "use_rupture", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "use_shiv", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "min_combo_points_for_damage_finisher", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { builder: 0, maintainExposeArmor: false, useRupture: false, useShiv: false, minComboPointsForDamageFinisher: 0 };
        Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* proto.Rogue.Rotation.Builder builder */ 3:
                    message.builder = reader.int32();
                    break;
                case /* bool maintain_expose_armor */ 1:
                    message.maintainExposeArmor = reader.bool();
                    break;
                case /* bool use_rupture */ 2:
                    message.useRupture = reader.bool();
                    break;
                case /* bool use_shiv */ 5:
                    message.useShiv = reader.bool();
                    break;
                case /* int32 min_combo_points_for_damage_finisher */ 4:
                    message.minComboPointsForDamageFinisher = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* proto.Rogue.Rotation.Builder builder = 3; */
        if (message.builder !== 0)
            writer.tag(3, WireType.Varint).int32(message.builder);
        /* bool maintain_expose_armor = 1; */
        if (message.maintainExposeArmor !== false)
            writer.tag(1, WireType.Varint).bool(message.maintainExposeArmor);
        /* bool use_rupture = 2; */
        if (message.useRupture !== false)
            writer.tag(2, WireType.Varint).bool(message.useRupture);
        /* bool use_shiv = 5; */
        if (message.useShiv !== false)
            writer.tag(5, WireType.Varint).bool(message.useShiv);
        /* int32 min_combo_points_for_damage_finisher = 4; */
        if (message.minComboPointsForDamageFinisher !== 0)
            writer.tag(4, WireType.Varint).int32(message.minComboPointsForDamageFinisher);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Rogue.Rotation
 */
export const Rogue_Rotation = new Rogue_Rotation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Rogue_Options$Type extends MessageType {
    constructor() {
        super("proto.Rogue.Options", [
            { no: 1, name: "tricks_of_the_trade_target", kind: "message", T: () => RaidTarget }
        ]);
    }
    create(value) {
        const message = {};
        Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* proto.RaidTarget tricks_of_the_trade_target */ 1:
                    message.tricksOfTheTradeTarget = RaidTarget.internalBinaryRead(reader, reader.uint32(), options, message.tricksOfTheTradeTarget);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* proto.RaidTarget tricks_of_the_trade_target = 1; */
        if (message.tricksOfTheTradeTarget)
            RaidTarget.internalBinaryWrite(message.tricksOfTheTradeTarget, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Rogue.Options
 */
export const Rogue_Options = new Rogue_Options$Type();
