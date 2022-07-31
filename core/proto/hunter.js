import { WireType } from '/wotlk/protobuf-ts/index.js';
import { UnknownFieldHandler } from '/wotlk/protobuf-ts/index.js';
import { reflectionMergePartial } from '/wotlk/protobuf-ts/index.js';
import { MESSAGE_TYPE } from '/wotlk/protobuf-ts/index.js';
import { MessageType } from '/wotlk/protobuf-ts/index.js';
/**
 * @generated from protobuf enum proto.Hunter.Rotation.StingType
 */
export var Hunter_Rotation_StingType;
(function (Hunter_Rotation_StingType) {
    /**
     * @generated from protobuf enum value: NoSting = 0;
     */
    Hunter_Rotation_StingType[Hunter_Rotation_StingType["NoSting"] = 0] = "NoSting";
    /**
     * @generated from protobuf enum value: ScorpidSting = 1;
     */
    Hunter_Rotation_StingType[Hunter_Rotation_StingType["ScorpidSting"] = 1] = "ScorpidSting";
    /**
     * @generated from protobuf enum value: SerpentSting = 2;
     */
    Hunter_Rotation_StingType[Hunter_Rotation_StingType["SerpentSting"] = 2] = "SerpentSting";
})(Hunter_Rotation_StingType || (Hunter_Rotation_StingType = {}));
/**
 * @generated from protobuf enum proto.Hunter.Options.Ammo
 */
export var Hunter_Options_Ammo;
(function (Hunter_Options_Ammo) {
    /**
     * @generated from protobuf enum value: AmmoNone = 0;
     */
    Hunter_Options_Ammo[Hunter_Options_Ammo["AmmoNone"] = 0] = "AmmoNone";
    /**
     * @generated from protobuf enum value: IcebladeArrow = 1;
     */
    Hunter_Options_Ammo[Hunter_Options_Ammo["IcebladeArrow"] = 1] = "IcebladeArrow";
    /**
     * @generated from protobuf enum value: SaroniteRazorheads = 2;
     */
    Hunter_Options_Ammo[Hunter_Options_Ammo["SaroniteRazorheads"] = 2] = "SaroniteRazorheads";
    /**
     * @generated from protobuf enum value: TerrorshaftArrow = 3;
     */
    Hunter_Options_Ammo[Hunter_Options_Ammo["TerrorshaftArrow"] = 3] = "TerrorshaftArrow";
    /**
     * @generated from protobuf enum value: TimelessArrow = 4;
     */
    Hunter_Options_Ammo[Hunter_Options_Ammo["TimelessArrow"] = 4] = "TimelessArrow";
    /**
     * @generated from protobuf enum value: MysteriousArrow = 5;
     */
    Hunter_Options_Ammo[Hunter_Options_Ammo["MysteriousArrow"] = 5] = "MysteriousArrow";
    /**
     * @generated from protobuf enum value: AdamantiteStinger = 6;
     */
    Hunter_Options_Ammo[Hunter_Options_Ammo["AdamantiteStinger"] = 6] = "AdamantiteStinger";
    /**
     * @generated from protobuf enum value: BlackflightArrow = 7;
     */
    Hunter_Options_Ammo[Hunter_Options_Ammo["BlackflightArrow"] = 7] = "BlackflightArrow";
})(Hunter_Options_Ammo || (Hunter_Options_Ammo = {}));
/**
 * @generated from protobuf enum proto.Hunter.Options.PetType
 */
export var Hunter_Options_PetType;
(function (Hunter_Options_PetType) {
    /**
     * @generated from protobuf enum value: PetNone = 0;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["PetNone"] = 0] = "PetNone";
    /**
     * @generated from protobuf enum value: Bat = 1;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Bat"] = 1] = "Bat";
    /**
     * @generated from protobuf enum value: Bear = 2;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Bear"] = 2] = "Bear";
    /**
     * @generated from protobuf enum value: BirdOfPrey = 3;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["BirdOfPrey"] = 3] = "BirdOfPrey";
    /**
     * @generated from protobuf enum value: Boar = 4;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Boar"] = 4] = "Boar";
    /**
     * @generated from protobuf enum value: CarrionBird = 5;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["CarrionBird"] = 5] = "CarrionBird";
    /**
     * @generated from protobuf enum value: Cat = 6;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Cat"] = 6] = "Cat";
    /**
     * @generated from protobuf enum value: Chimaera = 7;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Chimaera"] = 7] = "Chimaera";
    /**
     * @generated from protobuf enum value: CoreHound = 8;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["CoreHound"] = 8] = "CoreHound";
    /**
     * @generated from protobuf enum value: Crab = 9;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Crab"] = 9] = "Crab";
    /**
     * @generated from protobuf enum value: Crocolisk = 10;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Crocolisk"] = 10] = "Crocolisk";
    /**
     * @generated from protobuf enum value: Devilsaur = 11;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Devilsaur"] = 11] = "Devilsaur";
    /**
     * @generated from protobuf enum value: Dragonhawk = 12;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Dragonhawk"] = 12] = "Dragonhawk";
    /**
     * @generated from protobuf enum value: Gorilla = 13;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Gorilla"] = 13] = "Gorilla";
    /**
     * @generated from protobuf enum value: Hyena = 14;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Hyena"] = 14] = "Hyena";
    /**
     * @generated from protobuf enum value: Moth = 15;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Moth"] = 15] = "Moth";
    /**
     * @generated from protobuf enum value: NetherRay = 16;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["NetherRay"] = 16] = "NetherRay";
    /**
     * @generated from protobuf enum value: Raptor = 17;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Raptor"] = 17] = "Raptor";
    /**
     * @generated from protobuf enum value: Ravager = 18;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Ravager"] = 18] = "Ravager";
    /**
     * @generated from protobuf enum value: Rhino = 19;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Rhino"] = 19] = "Rhino";
    /**
     * @generated from protobuf enum value: Scorpid = 20;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Scorpid"] = 20] = "Scorpid";
    /**
     * @generated from protobuf enum value: Serpent = 21;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Serpent"] = 21] = "Serpent";
    /**
     * @generated from protobuf enum value: Silithid = 22;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Silithid"] = 22] = "Silithid";
    /**
     * @generated from protobuf enum value: Spider = 23;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Spider"] = 23] = "Spider";
    /**
     * @generated from protobuf enum value: SpiritBeast = 24;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["SpiritBeast"] = 24] = "SpiritBeast";
    /**
     * @generated from protobuf enum value: SporeBat = 25;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["SporeBat"] = 25] = "SporeBat";
    /**
     * @generated from protobuf enum value: Tallstrider = 26;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Tallstrider"] = 26] = "Tallstrider";
    /**
     * @generated from protobuf enum value: Turtle = 27;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Turtle"] = 27] = "Turtle";
    /**
     * @generated from protobuf enum value: WarpStalker = 28;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["WarpStalker"] = 28] = "WarpStalker";
    /**
     * @generated from protobuf enum value: Wasp = 29;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Wasp"] = 29] = "Wasp";
    /**
     * @generated from protobuf enum value: WindSerpent = 30;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["WindSerpent"] = 30] = "WindSerpent";
    /**
     * @generated from protobuf enum value: Wolf = 31;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Wolf"] = 31] = "Wolf";
    /**
     * @generated from protobuf enum value: Worm = 32;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Worm"] = 32] = "Worm";
})(Hunter_Options_PetType || (Hunter_Options_PetType = {}));
/**
 * @generated from protobuf enum proto.HunterMajorGlyph
 */
export var HunterMajorGlyph;
(function (HunterMajorGlyph) {
    /**
     * @generated from protobuf enum value: HunterMajorGlyphNone = 0;
     */
    HunterMajorGlyph[HunterMajorGlyph["HunterMajorGlyphNone"] = 0] = "HunterMajorGlyphNone";
    /**
     * @generated from protobuf enum value: GlyphOfAimedShot = 42897;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfAimedShot"] = 42897] = "GlyphOfAimedShot";
    /**
     * @generated from protobuf enum value: GlyphOfArcaneShot = 42898;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfArcaneShot"] = 42898] = "GlyphOfArcaneShot";
    /**
     * @generated from protobuf enum value: GlyphOfAspectOfTheViper = 42901;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfAspectOfTheViper"] = 42901] = "GlyphOfAspectOfTheViper";
    /**
     * @generated from protobuf enum value: GlyphOfBestialWrath = 42902;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfBestialWrath"] = 42902] = "GlyphOfBestialWrath";
    /**
     * @generated from protobuf enum value: GlyphOfChimeraShot = 45625;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfChimeraShot"] = 45625] = "GlyphOfChimeraShot";
    /**
     * @generated from protobuf enum value: GlyphOfDeterrence = 42903;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfDeterrence"] = 42903] = "GlyphOfDeterrence";
    /**
     * @generated from protobuf enum value: GlyphOfDisengage = 42904;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfDisengage"] = 42904] = "GlyphOfDisengage";
    /**
     * @generated from protobuf enum value: GlyphOfExplosiveShot = 45731;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfExplosiveShot"] = 45731] = "GlyphOfExplosiveShot";
    /**
     * @generated from protobuf enum value: GlyphOfExplosiveTrap = 45733;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfExplosiveTrap"] = 45733] = "GlyphOfExplosiveTrap";
    /**
     * @generated from protobuf enum value: GlyphOfFreezingTrap = 42905;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfFreezingTrap"] = 42905] = "GlyphOfFreezingTrap";
    /**
     * @generated from protobuf enum value: GlyphOfFrostTrap = 42906;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfFrostTrap"] = 42906] = "GlyphOfFrostTrap";
    /**
     * @generated from protobuf enum value: GlyphOfHuntersMark = 42907;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfHuntersMark"] = 42907] = "GlyphOfHuntersMark";
    /**
     * @generated from protobuf enum value: GlyphOfImmolationTrap = 42908;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfImmolationTrap"] = 42908] = "GlyphOfImmolationTrap";
    /**
     * @generated from protobuf enum value: GlyphOfKillShot = 45732;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfKillShot"] = 45732] = "GlyphOfKillShot";
    /**
     * @generated from protobuf enum value: GlyphOfMending = 42900;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfMending"] = 42900] = "GlyphOfMending";
    /**
     * @generated from protobuf enum value: GlyphOfMultiShot = 42910;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfMultiShot"] = 42910] = "GlyphOfMultiShot";
    /**
     * @generated from protobuf enum value: GlyphOfRapidFire = 42911;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfRapidFire"] = 42911] = "GlyphOfRapidFire";
    /**
     * @generated from protobuf enum value: GlyphOfRaptorStrike = 45735;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfRaptorStrike"] = 45735] = "GlyphOfRaptorStrike";
    /**
     * @generated from protobuf enum value: GlyphOfScatterShot = 45734;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfScatterShot"] = 45734] = "GlyphOfScatterShot";
    /**
     * @generated from protobuf enum value: GlyphOfSerpentSting = 42912;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfSerpentSting"] = 42912] = "GlyphOfSerpentSting";
    /**
     * @generated from protobuf enum value: GlyphOfSnakeTrap = 42913;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfSnakeTrap"] = 42913] = "GlyphOfSnakeTrap";
    /**
     * @generated from protobuf enum value: GlyphOfSteadyShot = 42914;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfSteadyShot"] = 42914] = "GlyphOfSteadyShot";
    /**
     * @generated from protobuf enum value: GlyphOfTheBeast = 42899;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfTheBeast"] = 42899] = "GlyphOfTheBeast";
    /**
     * @generated from protobuf enum value: GlyphOfTheHawk = 42909;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfTheHawk"] = 42909] = "GlyphOfTheHawk";
    /**
     * @generated from protobuf enum value: GlyphOfTrueshotAura = 42915;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfTrueshotAura"] = 42915] = "GlyphOfTrueshotAura";
    /**
     * @generated from protobuf enum value: GlyphOfVolley = 42916;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfVolley"] = 42916] = "GlyphOfVolley";
    /**
     * @generated from protobuf enum value: GlyphOfWyvernSting = 42917;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfWyvernSting"] = 42917] = "GlyphOfWyvernSting";
})(HunterMajorGlyph || (HunterMajorGlyph = {}));
/**
 * @generated from protobuf enum proto.HunterMinorGlyph
 */
export var HunterMinorGlyph;
(function (HunterMinorGlyph) {
    /**
     * @generated from protobuf enum value: HunterMinorGlyphNone = 0;
     */
    HunterMinorGlyph[HunterMinorGlyph["HunterMinorGlyphNone"] = 0] = "HunterMinorGlyphNone";
    /**
     * @generated from protobuf enum value: GlyphOfFeignDeath = 43351;
     */
    HunterMinorGlyph[HunterMinorGlyph["GlyphOfFeignDeath"] = 43351] = "GlyphOfFeignDeath";
    /**
     * @generated from protobuf enum value: GlyphOfMendPet = 43350;
     */
    HunterMinorGlyph[HunterMinorGlyph["GlyphOfMendPet"] = 43350] = "GlyphOfMendPet";
    /**
     * @generated from protobuf enum value: GlyphOfPossessedStrength = 43354;
     */
    HunterMinorGlyph[HunterMinorGlyph["GlyphOfPossessedStrength"] = 43354] = "GlyphOfPossessedStrength";
    /**
     * @generated from protobuf enum value: GlyphOfRevivePet = 43338;
     */
    HunterMinorGlyph[HunterMinorGlyph["GlyphOfRevivePet"] = 43338] = "GlyphOfRevivePet";
    /**
     * @generated from protobuf enum value: GlyphOfScareBeast = 43356;
     */
    HunterMinorGlyph[HunterMinorGlyph["GlyphOfScareBeast"] = 43356] = "GlyphOfScareBeast";
    /**
     * @generated from protobuf enum value: GlyphOfThePack = 43355;
     */
    HunterMinorGlyph[HunterMinorGlyph["GlyphOfThePack"] = 43355] = "GlyphOfThePack";
})(HunterMinorGlyph || (HunterMinorGlyph = {}));
// @generated message type with reflection information, may provide speed optimized methods
class HunterTalents$Type extends MessageType {
    constructor() {
        super("proto.HunterTalents", [
            { no: 1, name: "improved_aspect_of_the_hawk", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "endurance_training", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "focused_fire", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "improved_aspect_of_the_monkey", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "thick_hide", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "improved_revive_pet", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "pathfinding", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "aspect_mastery", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "unleashed_fury", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "improved_mend_pet", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "ferocity", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "spirit_bond", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "intimidation", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "bestial_discipline", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "animal_handler", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 16, name: "frenzy", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 17, name: "ferocious_inspiration", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 18, name: "bestial_wrath", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 19, name: "catlike_reflexes", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 20, name: "invigoration", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 21, name: "serpents_swiftness", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 22, name: "longevity", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 23, name: "the_beast_within", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 24, name: "cobra_strikes", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 25, name: "kindred_spirits", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 26, name: "beast_mastery", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 27, name: "improved_concussive_shot", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 28, name: "focused_aim", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 29, name: "lethal_shots", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 30, name: "careful_aim", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 31, name: "improved_hunters_mark", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 32, name: "mortal_shots", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 33, name: "go_for_the_throat", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 34, name: "improved_arcane_shot", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 35, name: "aimed_shot", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 36, name: "rapid_killing", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 37, name: "improved_stings", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 38, name: "efficiency", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 39, name: "concussive_barrage", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 40, name: "readiness", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 41, name: "barrage", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 42, name: "combat_experience", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 43, name: "ranged_weapon_specialization", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 44, name: "piercing_shots", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 45, name: "trueshot_aura", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 46, name: "improved_barrage", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 47, name: "master_marksman", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 48, name: "rapid_recuperation", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 49, name: "wild_quiver", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 50, name: "silencing_shot", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 51, name: "improved_steady_shot", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 52, name: "marked_for_death", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 53, name: "chimera_shot", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 54, name: "improved_tracking", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 55, name: "hawk_eye", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 56, name: "savage_strikes", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 57, name: "surefooted", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 58, name: "entrapment", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 59, name: "trap_mastery", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 60, name: "survival_instincts", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 61, name: "survivalist", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 62, name: "scatter_shot", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 63, name: "deflection", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 64, name: "survival_tactics", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 65, name: "t_n_t", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 66, name: "lock_and_load", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 67, name: "hunter_vs_wild", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 68, name: "killer_instinct", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 69, name: "counterattack", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 70, name: "lightning_reflexes", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 71, name: "resourcefulness", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 72, name: "expose_weakness", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 73, name: "wyvern_sting", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 74, name: "thrill_of_the_hunt", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 75, name: "master_tactician", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 76, name: "noxious_stings", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 77, name: "point_of_no_escape", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 78, name: "black_arrow", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 79, name: "sniper_training", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 80, name: "hunting_party", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 81, name: "explosive_shot", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { improvedAspectOfTheHawk: 0, enduranceTraining: 0, focusedFire: 0, improvedAspectOfTheMonkey: 0, thickHide: 0, improvedRevivePet: 0, pathfinding: 0, aspectMastery: false, unleashedFury: 0, improvedMendPet: 0, ferocity: 0, spiritBond: 0, intimidation: false, bestialDiscipline: 0, animalHandler: 0, frenzy: 0, ferociousInspiration: 0, bestialWrath: false, catlikeReflexes: 0, invigoration: 0, serpentsSwiftness: 0, longevity: 0, theBeastWithin: false, cobraStrikes: 0, kindredSpirits: 0, beastMastery: false, improvedConcussiveShot: 0, focusedAim: 0, lethalShots: 0, carefulAim: 0, improvedHuntersMark: 0, mortalShots: 0, goForTheThroat: 0, improvedArcaneShot: 0, aimedShot: false, rapidKilling: 0, improvedStings: 0, efficiency: 0, concussiveBarrage: 0, readiness: false, barrage: 0, combatExperience: 0, rangedWeaponSpecialization: 0, piercingShots: 0, trueshotAura: false, improvedBarrage: 0, masterMarksman: 0, rapidRecuperation: 0, wildQuiver: 0, silencingShot: false, improvedSteadyShot: 0, markedForDeath: 0, chimeraShot: false, improvedTracking: 0, hawkEye: 0, savageStrikes: 0, surefooted: 0, entrapment: 0, trapMastery: 0, survivalInstincts: 0, survivalist: 0, scatterShot: false, deflection: 0, survivalTactics: 0, tNT: 0, lockAndLoad: 0, hunterVsWild: 0, killerInstinct: 0, counterattack: false, lightningReflexes: 0, resourcefulness: 0, exposeWeakness: 0, wyvernSting: false, thrillOfTheHunt: 0, masterTactician: 0, noxiousStings: 0, pointOfNoEscape: 0, blackArrow: false, sniperTraining: 0, huntingParty: 0, explosiveShot: false };
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
                case /* int32 improved_aspect_of_the_hawk */ 1:
                    message.improvedAspectOfTheHawk = reader.int32();
                    break;
                case /* int32 endurance_training */ 2:
                    message.enduranceTraining = reader.int32();
                    break;
                case /* int32 focused_fire */ 3:
                    message.focusedFire = reader.int32();
                    break;
                case /* int32 improved_aspect_of_the_monkey */ 4:
                    message.improvedAspectOfTheMonkey = reader.int32();
                    break;
                case /* int32 thick_hide */ 5:
                    message.thickHide = reader.int32();
                    break;
                case /* int32 improved_revive_pet */ 6:
                    message.improvedRevivePet = reader.int32();
                    break;
                case /* int32 pathfinding */ 7:
                    message.pathfinding = reader.int32();
                    break;
                case /* bool aspect_mastery */ 8:
                    message.aspectMastery = reader.bool();
                    break;
                case /* int32 unleashed_fury */ 9:
                    message.unleashedFury = reader.int32();
                    break;
                case /* int32 improved_mend_pet */ 10:
                    message.improvedMendPet = reader.int32();
                    break;
                case /* int32 ferocity */ 11:
                    message.ferocity = reader.int32();
                    break;
                case /* int32 spirit_bond */ 12:
                    message.spiritBond = reader.int32();
                    break;
                case /* bool intimidation */ 13:
                    message.intimidation = reader.bool();
                    break;
                case /* int32 bestial_discipline */ 14:
                    message.bestialDiscipline = reader.int32();
                    break;
                case /* int32 animal_handler */ 15:
                    message.animalHandler = reader.int32();
                    break;
                case /* int32 frenzy */ 16:
                    message.frenzy = reader.int32();
                    break;
                case /* int32 ferocious_inspiration */ 17:
                    message.ferociousInspiration = reader.int32();
                    break;
                case /* bool bestial_wrath */ 18:
                    message.bestialWrath = reader.bool();
                    break;
                case /* int32 catlike_reflexes */ 19:
                    message.catlikeReflexes = reader.int32();
                    break;
                case /* int32 invigoration */ 20:
                    message.invigoration = reader.int32();
                    break;
                case /* int32 serpents_swiftness */ 21:
                    message.serpentsSwiftness = reader.int32();
                    break;
                case /* int32 longevity */ 22:
                    message.longevity = reader.int32();
                    break;
                case /* bool the_beast_within */ 23:
                    message.theBeastWithin = reader.bool();
                    break;
                case /* int32 cobra_strikes */ 24:
                    message.cobraStrikes = reader.int32();
                    break;
                case /* int32 kindred_spirits */ 25:
                    message.kindredSpirits = reader.int32();
                    break;
                case /* bool beast_mastery */ 26:
                    message.beastMastery = reader.bool();
                    break;
                case /* int32 improved_concussive_shot */ 27:
                    message.improvedConcussiveShot = reader.int32();
                    break;
                case /* int32 focused_aim */ 28:
                    message.focusedAim = reader.int32();
                    break;
                case /* int32 lethal_shots */ 29:
                    message.lethalShots = reader.int32();
                    break;
                case /* int32 careful_aim */ 30:
                    message.carefulAim = reader.int32();
                    break;
                case /* int32 improved_hunters_mark */ 31:
                    message.improvedHuntersMark = reader.int32();
                    break;
                case /* int32 mortal_shots */ 32:
                    message.mortalShots = reader.int32();
                    break;
                case /* int32 go_for_the_throat */ 33:
                    message.goForTheThroat = reader.int32();
                    break;
                case /* int32 improved_arcane_shot */ 34:
                    message.improvedArcaneShot = reader.int32();
                    break;
                case /* bool aimed_shot */ 35:
                    message.aimedShot = reader.bool();
                    break;
                case /* int32 rapid_killing */ 36:
                    message.rapidKilling = reader.int32();
                    break;
                case /* int32 improved_stings */ 37:
                    message.improvedStings = reader.int32();
                    break;
                case /* int32 efficiency */ 38:
                    message.efficiency = reader.int32();
                    break;
                case /* int32 concussive_barrage */ 39:
                    message.concussiveBarrage = reader.int32();
                    break;
                case /* bool readiness */ 40:
                    message.readiness = reader.bool();
                    break;
                case /* int32 barrage */ 41:
                    message.barrage = reader.int32();
                    break;
                case /* int32 combat_experience */ 42:
                    message.combatExperience = reader.int32();
                    break;
                case /* int32 ranged_weapon_specialization */ 43:
                    message.rangedWeaponSpecialization = reader.int32();
                    break;
                case /* int32 piercing_shots */ 44:
                    message.piercingShots = reader.int32();
                    break;
                case /* bool trueshot_aura */ 45:
                    message.trueshotAura = reader.bool();
                    break;
                case /* int32 improved_barrage */ 46:
                    message.improvedBarrage = reader.int32();
                    break;
                case /* int32 master_marksman */ 47:
                    message.masterMarksman = reader.int32();
                    break;
                case /* int32 rapid_recuperation */ 48:
                    message.rapidRecuperation = reader.int32();
                    break;
                case /* int32 wild_quiver */ 49:
                    message.wildQuiver = reader.int32();
                    break;
                case /* bool silencing_shot */ 50:
                    message.silencingShot = reader.bool();
                    break;
                case /* int32 improved_steady_shot */ 51:
                    message.improvedSteadyShot = reader.int32();
                    break;
                case /* int32 marked_for_death */ 52:
                    message.markedForDeath = reader.int32();
                    break;
                case /* bool chimera_shot */ 53:
                    message.chimeraShot = reader.bool();
                    break;
                case /* int32 improved_tracking */ 54:
                    message.improvedTracking = reader.int32();
                    break;
                case /* int32 hawk_eye */ 55:
                    message.hawkEye = reader.int32();
                    break;
                case /* int32 savage_strikes */ 56:
                    message.savageStrikes = reader.int32();
                    break;
                case /* int32 surefooted */ 57:
                    message.surefooted = reader.int32();
                    break;
                case /* int32 entrapment */ 58:
                    message.entrapment = reader.int32();
                    break;
                case /* int32 trap_mastery */ 59:
                    message.trapMastery = reader.int32();
                    break;
                case /* int32 survival_instincts */ 60:
                    message.survivalInstincts = reader.int32();
                    break;
                case /* int32 survivalist */ 61:
                    message.survivalist = reader.int32();
                    break;
                case /* bool scatter_shot */ 62:
                    message.scatterShot = reader.bool();
                    break;
                case /* int32 deflection */ 63:
                    message.deflection = reader.int32();
                    break;
                case /* int32 survival_tactics */ 64:
                    message.survivalTactics = reader.int32();
                    break;
                case /* int32 t_n_t */ 65:
                    message.tNT = reader.int32();
                    break;
                case /* int32 lock_and_load */ 66:
                    message.lockAndLoad = reader.int32();
                    break;
                case /* int32 hunter_vs_wild */ 67:
                    message.hunterVsWild = reader.int32();
                    break;
                case /* int32 killer_instinct */ 68:
                    message.killerInstinct = reader.int32();
                    break;
                case /* bool counterattack */ 69:
                    message.counterattack = reader.bool();
                    break;
                case /* int32 lightning_reflexes */ 70:
                    message.lightningReflexes = reader.int32();
                    break;
                case /* int32 resourcefulness */ 71:
                    message.resourcefulness = reader.int32();
                    break;
                case /* int32 expose_weakness */ 72:
                    message.exposeWeakness = reader.int32();
                    break;
                case /* bool wyvern_sting */ 73:
                    message.wyvernSting = reader.bool();
                    break;
                case /* int32 thrill_of_the_hunt */ 74:
                    message.thrillOfTheHunt = reader.int32();
                    break;
                case /* int32 master_tactician */ 75:
                    message.masterTactician = reader.int32();
                    break;
                case /* int32 noxious_stings */ 76:
                    message.noxiousStings = reader.int32();
                    break;
                case /* int32 point_of_no_escape */ 77:
                    message.pointOfNoEscape = reader.int32();
                    break;
                case /* bool black_arrow */ 78:
                    message.blackArrow = reader.bool();
                    break;
                case /* int32 sniper_training */ 79:
                    message.sniperTraining = reader.int32();
                    break;
                case /* int32 hunting_party */ 80:
                    message.huntingParty = reader.int32();
                    break;
                case /* bool explosive_shot */ 81:
                    message.explosiveShot = reader.bool();
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
        /* int32 improved_aspect_of_the_hawk = 1; */
        if (message.improvedAspectOfTheHawk !== 0)
            writer.tag(1, WireType.Varint).int32(message.improvedAspectOfTheHawk);
        /* int32 endurance_training = 2; */
        if (message.enduranceTraining !== 0)
            writer.tag(2, WireType.Varint).int32(message.enduranceTraining);
        /* int32 focused_fire = 3; */
        if (message.focusedFire !== 0)
            writer.tag(3, WireType.Varint).int32(message.focusedFire);
        /* int32 improved_aspect_of_the_monkey = 4; */
        if (message.improvedAspectOfTheMonkey !== 0)
            writer.tag(4, WireType.Varint).int32(message.improvedAspectOfTheMonkey);
        /* int32 thick_hide = 5; */
        if (message.thickHide !== 0)
            writer.tag(5, WireType.Varint).int32(message.thickHide);
        /* int32 improved_revive_pet = 6; */
        if (message.improvedRevivePet !== 0)
            writer.tag(6, WireType.Varint).int32(message.improvedRevivePet);
        /* int32 pathfinding = 7; */
        if (message.pathfinding !== 0)
            writer.tag(7, WireType.Varint).int32(message.pathfinding);
        /* bool aspect_mastery = 8; */
        if (message.aspectMastery !== false)
            writer.tag(8, WireType.Varint).bool(message.aspectMastery);
        /* int32 unleashed_fury = 9; */
        if (message.unleashedFury !== 0)
            writer.tag(9, WireType.Varint).int32(message.unleashedFury);
        /* int32 improved_mend_pet = 10; */
        if (message.improvedMendPet !== 0)
            writer.tag(10, WireType.Varint).int32(message.improvedMendPet);
        /* int32 ferocity = 11; */
        if (message.ferocity !== 0)
            writer.tag(11, WireType.Varint).int32(message.ferocity);
        /* int32 spirit_bond = 12; */
        if (message.spiritBond !== 0)
            writer.tag(12, WireType.Varint).int32(message.spiritBond);
        /* bool intimidation = 13; */
        if (message.intimidation !== false)
            writer.tag(13, WireType.Varint).bool(message.intimidation);
        /* int32 bestial_discipline = 14; */
        if (message.bestialDiscipline !== 0)
            writer.tag(14, WireType.Varint).int32(message.bestialDiscipline);
        /* int32 animal_handler = 15; */
        if (message.animalHandler !== 0)
            writer.tag(15, WireType.Varint).int32(message.animalHandler);
        /* int32 frenzy = 16; */
        if (message.frenzy !== 0)
            writer.tag(16, WireType.Varint).int32(message.frenzy);
        /* int32 ferocious_inspiration = 17; */
        if (message.ferociousInspiration !== 0)
            writer.tag(17, WireType.Varint).int32(message.ferociousInspiration);
        /* bool bestial_wrath = 18; */
        if (message.bestialWrath !== false)
            writer.tag(18, WireType.Varint).bool(message.bestialWrath);
        /* int32 catlike_reflexes = 19; */
        if (message.catlikeReflexes !== 0)
            writer.tag(19, WireType.Varint).int32(message.catlikeReflexes);
        /* int32 invigoration = 20; */
        if (message.invigoration !== 0)
            writer.tag(20, WireType.Varint).int32(message.invigoration);
        /* int32 serpents_swiftness = 21; */
        if (message.serpentsSwiftness !== 0)
            writer.tag(21, WireType.Varint).int32(message.serpentsSwiftness);
        /* int32 longevity = 22; */
        if (message.longevity !== 0)
            writer.tag(22, WireType.Varint).int32(message.longevity);
        /* bool the_beast_within = 23; */
        if (message.theBeastWithin !== false)
            writer.tag(23, WireType.Varint).bool(message.theBeastWithin);
        /* int32 cobra_strikes = 24; */
        if (message.cobraStrikes !== 0)
            writer.tag(24, WireType.Varint).int32(message.cobraStrikes);
        /* int32 kindred_spirits = 25; */
        if (message.kindredSpirits !== 0)
            writer.tag(25, WireType.Varint).int32(message.kindredSpirits);
        /* bool beast_mastery = 26; */
        if (message.beastMastery !== false)
            writer.tag(26, WireType.Varint).bool(message.beastMastery);
        /* int32 improved_concussive_shot = 27; */
        if (message.improvedConcussiveShot !== 0)
            writer.tag(27, WireType.Varint).int32(message.improvedConcussiveShot);
        /* int32 focused_aim = 28; */
        if (message.focusedAim !== 0)
            writer.tag(28, WireType.Varint).int32(message.focusedAim);
        /* int32 lethal_shots = 29; */
        if (message.lethalShots !== 0)
            writer.tag(29, WireType.Varint).int32(message.lethalShots);
        /* int32 careful_aim = 30; */
        if (message.carefulAim !== 0)
            writer.tag(30, WireType.Varint).int32(message.carefulAim);
        /* int32 improved_hunters_mark = 31; */
        if (message.improvedHuntersMark !== 0)
            writer.tag(31, WireType.Varint).int32(message.improvedHuntersMark);
        /* int32 mortal_shots = 32; */
        if (message.mortalShots !== 0)
            writer.tag(32, WireType.Varint).int32(message.mortalShots);
        /* int32 go_for_the_throat = 33; */
        if (message.goForTheThroat !== 0)
            writer.tag(33, WireType.Varint).int32(message.goForTheThroat);
        /* int32 improved_arcane_shot = 34; */
        if (message.improvedArcaneShot !== 0)
            writer.tag(34, WireType.Varint).int32(message.improvedArcaneShot);
        /* bool aimed_shot = 35; */
        if (message.aimedShot !== false)
            writer.tag(35, WireType.Varint).bool(message.aimedShot);
        /* int32 rapid_killing = 36; */
        if (message.rapidKilling !== 0)
            writer.tag(36, WireType.Varint).int32(message.rapidKilling);
        /* int32 improved_stings = 37; */
        if (message.improvedStings !== 0)
            writer.tag(37, WireType.Varint).int32(message.improvedStings);
        /* int32 efficiency = 38; */
        if (message.efficiency !== 0)
            writer.tag(38, WireType.Varint).int32(message.efficiency);
        /* int32 concussive_barrage = 39; */
        if (message.concussiveBarrage !== 0)
            writer.tag(39, WireType.Varint).int32(message.concussiveBarrage);
        /* bool readiness = 40; */
        if (message.readiness !== false)
            writer.tag(40, WireType.Varint).bool(message.readiness);
        /* int32 barrage = 41; */
        if (message.barrage !== 0)
            writer.tag(41, WireType.Varint).int32(message.barrage);
        /* int32 combat_experience = 42; */
        if (message.combatExperience !== 0)
            writer.tag(42, WireType.Varint).int32(message.combatExperience);
        /* int32 ranged_weapon_specialization = 43; */
        if (message.rangedWeaponSpecialization !== 0)
            writer.tag(43, WireType.Varint).int32(message.rangedWeaponSpecialization);
        /* int32 piercing_shots = 44; */
        if (message.piercingShots !== 0)
            writer.tag(44, WireType.Varint).int32(message.piercingShots);
        /* bool trueshot_aura = 45; */
        if (message.trueshotAura !== false)
            writer.tag(45, WireType.Varint).bool(message.trueshotAura);
        /* int32 improved_barrage = 46; */
        if (message.improvedBarrage !== 0)
            writer.tag(46, WireType.Varint).int32(message.improvedBarrage);
        /* int32 master_marksman = 47; */
        if (message.masterMarksman !== 0)
            writer.tag(47, WireType.Varint).int32(message.masterMarksman);
        /* int32 rapid_recuperation = 48; */
        if (message.rapidRecuperation !== 0)
            writer.tag(48, WireType.Varint).int32(message.rapidRecuperation);
        /* int32 wild_quiver = 49; */
        if (message.wildQuiver !== 0)
            writer.tag(49, WireType.Varint).int32(message.wildQuiver);
        /* bool silencing_shot = 50; */
        if (message.silencingShot !== false)
            writer.tag(50, WireType.Varint).bool(message.silencingShot);
        /* int32 improved_steady_shot = 51; */
        if (message.improvedSteadyShot !== 0)
            writer.tag(51, WireType.Varint).int32(message.improvedSteadyShot);
        /* int32 marked_for_death = 52; */
        if (message.markedForDeath !== 0)
            writer.tag(52, WireType.Varint).int32(message.markedForDeath);
        /* bool chimera_shot = 53; */
        if (message.chimeraShot !== false)
            writer.tag(53, WireType.Varint).bool(message.chimeraShot);
        /* int32 improved_tracking = 54; */
        if (message.improvedTracking !== 0)
            writer.tag(54, WireType.Varint).int32(message.improvedTracking);
        /* int32 hawk_eye = 55; */
        if (message.hawkEye !== 0)
            writer.tag(55, WireType.Varint).int32(message.hawkEye);
        /* int32 savage_strikes = 56; */
        if (message.savageStrikes !== 0)
            writer.tag(56, WireType.Varint).int32(message.savageStrikes);
        /* int32 surefooted = 57; */
        if (message.surefooted !== 0)
            writer.tag(57, WireType.Varint).int32(message.surefooted);
        /* int32 entrapment = 58; */
        if (message.entrapment !== 0)
            writer.tag(58, WireType.Varint).int32(message.entrapment);
        /* int32 trap_mastery = 59; */
        if (message.trapMastery !== 0)
            writer.tag(59, WireType.Varint).int32(message.trapMastery);
        /* int32 survival_instincts = 60; */
        if (message.survivalInstincts !== 0)
            writer.tag(60, WireType.Varint).int32(message.survivalInstincts);
        /* int32 survivalist = 61; */
        if (message.survivalist !== 0)
            writer.tag(61, WireType.Varint).int32(message.survivalist);
        /* bool scatter_shot = 62; */
        if (message.scatterShot !== false)
            writer.tag(62, WireType.Varint).bool(message.scatterShot);
        /* int32 deflection = 63; */
        if (message.deflection !== 0)
            writer.tag(63, WireType.Varint).int32(message.deflection);
        /* int32 survival_tactics = 64; */
        if (message.survivalTactics !== 0)
            writer.tag(64, WireType.Varint).int32(message.survivalTactics);
        /* int32 t_n_t = 65; */
        if (message.tNT !== 0)
            writer.tag(65, WireType.Varint).int32(message.tNT);
        /* int32 lock_and_load = 66; */
        if (message.lockAndLoad !== 0)
            writer.tag(66, WireType.Varint).int32(message.lockAndLoad);
        /* int32 hunter_vs_wild = 67; */
        if (message.hunterVsWild !== 0)
            writer.tag(67, WireType.Varint).int32(message.hunterVsWild);
        /* int32 killer_instinct = 68; */
        if (message.killerInstinct !== 0)
            writer.tag(68, WireType.Varint).int32(message.killerInstinct);
        /* bool counterattack = 69; */
        if (message.counterattack !== false)
            writer.tag(69, WireType.Varint).bool(message.counterattack);
        /* int32 lightning_reflexes = 70; */
        if (message.lightningReflexes !== 0)
            writer.tag(70, WireType.Varint).int32(message.lightningReflexes);
        /* int32 resourcefulness = 71; */
        if (message.resourcefulness !== 0)
            writer.tag(71, WireType.Varint).int32(message.resourcefulness);
        /* int32 expose_weakness = 72; */
        if (message.exposeWeakness !== 0)
            writer.tag(72, WireType.Varint).int32(message.exposeWeakness);
        /* bool wyvern_sting = 73; */
        if (message.wyvernSting !== false)
            writer.tag(73, WireType.Varint).bool(message.wyvernSting);
        /* int32 thrill_of_the_hunt = 74; */
        if (message.thrillOfTheHunt !== 0)
            writer.tag(74, WireType.Varint).int32(message.thrillOfTheHunt);
        /* int32 master_tactician = 75; */
        if (message.masterTactician !== 0)
            writer.tag(75, WireType.Varint).int32(message.masterTactician);
        /* int32 noxious_stings = 76; */
        if (message.noxiousStings !== 0)
            writer.tag(76, WireType.Varint).int32(message.noxiousStings);
        /* int32 point_of_no_escape = 77; */
        if (message.pointOfNoEscape !== 0)
            writer.tag(77, WireType.Varint).int32(message.pointOfNoEscape);
        /* bool black_arrow = 78; */
        if (message.blackArrow !== false)
            writer.tag(78, WireType.Varint).bool(message.blackArrow);
        /* int32 sniper_training = 79; */
        if (message.sniperTraining !== 0)
            writer.tag(79, WireType.Varint).int32(message.sniperTraining);
        /* int32 hunting_party = 80; */
        if (message.huntingParty !== 0)
            writer.tag(80, WireType.Varint).int32(message.huntingParty);
        /* bool explosive_shot = 81; */
        if (message.explosiveShot !== false)
            writer.tag(81, WireType.Varint).bool(message.explosiveShot);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.HunterTalents
 */
export const HunterTalents = new HunterTalents$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HunterPetTalents$Type extends MessageType {
    constructor() {
        super("proto.HunterPetTalents", [
            { no: 1, name: "cobra_reflexes", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "dive", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "great_stamina", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "natural_armor", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "boars_speed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "mobility", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "owls_focus", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "spiked_collar", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "culling_the_herd", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "lionhearted", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "carrion_feeder", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "great_resistance", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "cornered", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "feeding_frenzy", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "wolverine_bite", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 16, name: "roar_of_recovery", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 17, name: "bullheaded", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 18, name: "grace_of_the_mantis", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 19, name: "wild_hunt", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 20, name: "roar_of_sacrifice", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 21, name: "improved_cower", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 22, name: "bloodthirsty", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 23, name: "heart_of_the_pheonix", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 24, name: "spiders_bite", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 25, name: "rabid", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 26, name: "lick_your_wounds", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 27, name: "call_of_the_wild", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 28, name: "shark_attack", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 29, name: "charge", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 30, name: "blood_of_the_rhino", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 31, name: "pet_barding", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 32, name: "guard_dog", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 33, name: "thunderstomp", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 34, name: "last_stand", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 35, name: "taunt", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 36, name: "intervene", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 37, name: "silverback", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { cobraReflexes: 0, dive: false, greatStamina: 0, naturalArmor: 0, boarsSpeed: false, mobility: 0, owlsFocus: 0, spikedCollar: 0, cullingTheHerd: 0, lionhearted: 0, carrionFeeder: false, greatResistance: 0, cornered: 0, feedingFrenzy: 0, wolverineBite: false, roarOfRecovery: false, bullheaded: false, graceOfTheMantis: 0, wildHunt: 0, roarOfSacrifice: false, improvedCower: 0, bloodthirsty: 0, heartOfThePheonix: false, spidersBite: 0, rabid: false, lickYourWounds: false, callOfTheWild: false, sharkAttack: 0, charge: false, bloodOfTheRhino: 0, petBarding: 0, guardDog: 0, thunderstomp: false, lastStand: false, taunt: false, intervene: false, silverback: 0 };
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
                case /* int32 cobra_reflexes */ 1:
                    message.cobraReflexes = reader.int32();
                    break;
                case /* bool dive */ 2:
                    message.dive = reader.bool();
                    break;
                case /* int32 great_stamina */ 3:
                    message.greatStamina = reader.int32();
                    break;
                case /* int32 natural_armor */ 4:
                    message.naturalArmor = reader.int32();
                    break;
                case /* bool boars_speed */ 5:
                    message.boarsSpeed = reader.bool();
                    break;
                case /* int32 mobility */ 6:
                    message.mobility = reader.int32();
                    break;
                case /* int32 owls_focus */ 7:
                    message.owlsFocus = reader.int32();
                    break;
                case /* int32 spiked_collar */ 8:
                    message.spikedCollar = reader.int32();
                    break;
                case /* int32 culling_the_herd */ 9:
                    message.cullingTheHerd = reader.int32();
                    break;
                case /* int32 lionhearted */ 10:
                    message.lionhearted = reader.int32();
                    break;
                case /* bool carrion_feeder */ 11:
                    message.carrionFeeder = reader.bool();
                    break;
                case /* int32 great_resistance */ 12:
                    message.greatResistance = reader.int32();
                    break;
                case /* int32 cornered */ 13:
                    message.cornered = reader.int32();
                    break;
                case /* int32 feeding_frenzy */ 14:
                    message.feedingFrenzy = reader.int32();
                    break;
                case /* bool wolverine_bite */ 15:
                    message.wolverineBite = reader.bool();
                    break;
                case /* bool roar_of_recovery */ 16:
                    message.roarOfRecovery = reader.bool();
                    break;
                case /* bool bullheaded */ 17:
                    message.bullheaded = reader.bool();
                    break;
                case /* int32 grace_of_the_mantis */ 18:
                    message.graceOfTheMantis = reader.int32();
                    break;
                case /* int32 wild_hunt */ 19:
                    message.wildHunt = reader.int32();
                    break;
                case /* bool roar_of_sacrifice */ 20:
                    message.roarOfSacrifice = reader.bool();
                    break;
                case /* int32 improved_cower */ 21:
                    message.improvedCower = reader.int32();
                    break;
                case /* int32 bloodthirsty */ 22:
                    message.bloodthirsty = reader.int32();
                    break;
                case /* bool heart_of_the_pheonix */ 23:
                    message.heartOfThePheonix = reader.bool();
                    break;
                case /* int32 spiders_bite */ 24:
                    message.spidersBite = reader.int32();
                    break;
                case /* bool rabid */ 25:
                    message.rabid = reader.bool();
                    break;
                case /* bool lick_your_wounds */ 26:
                    message.lickYourWounds = reader.bool();
                    break;
                case /* bool call_of_the_wild */ 27:
                    message.callOfTheWild = reader.bool();
                    break;
                case /* int32 shark_attack */ 28:
                    message.sharkAttack = reader.int32();
                    break;
                case /* bool charge */ 29:
                    message.charge = reader.bool();
                    break;
                case /* int32 blood_of_the_rhino */ 30:
                    message.bloodOfTheRhino = reader.int32();
                    break;
                case /* int32 pet_barding */ 31:
                    message.petBarding = reader.int32();
                    break;
                case /* int32 guard_dog */ 32:
                    message.guardDog = reader.int32();
                    break;
                case /* bool thunderstomp */ 33:
                    message.thunderstomp = reader.bool();
                    break;
                case /* bool last_stand */ 34:
                    message.lastStand = reader.bool();
                    break;
                case /* bool taunt */ 35:
                    message.taunt = reader.bool();
                    break;
                case /* bool intervene */ 36:
                    message.intervene = reader.bool();
                    break;
                case /* int32 silverback */ 37:
                    message.silverback = reader.int32();
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
        /* int32 cobra_reflexes = 1; */
        if (message.cobraReflexes !== 0)
            writer.tag(1, WireType.Varint).int32(message.cobraReflexes);
        /* bool dive = 2; */
        if (message.dive !== false)
            writer.tag(2, WireType.Varint).bool(message.dive);
        /* int32 great_stamina = 3; */
        if (message.greatStamina !== 0)
            writer.tag(3, WireType.Varint).int32(message.greatStamina);
        /* int32 natural_armor = 4; */
        if (message.naturalArmor !== 0)
            writer.tag(4, WireType.Varint).int32(message.naturalArmor);
        /* bool boars_speed = 5; */
        if (message.boarsSpeed !== false)
            writer.tag(5, WireType.Varint).bool(message.boarsSpeed);
        /* int32 mobility = 6; */
        if (message.mobility !== 0)
            writer.tag(6, WireType.Varint).int32(message.mobility);
        /* int32 owls_focus = 7; */
        if (message.owlsFocus !== 0)
            writer.tag(7, WireType.Varint).int32(message.owlsFocus);
        /* int32 spiked_collar = 8; */
        if (message.spikedCollar !== 0)
            writer.tag(8, WireType.Varint).int32(message.spikedCollar);
        /* int32 culling_the_herd = 9; */
        if (message.cullingTheHerd !== 0)
            writer.tag(9, WireType.Varint).int32(message.cullingTheHerd);
        /* int32 lionhearted = 10; */
        if (message.lionhearted !== 0)
            writer.tag(10, WireType.Varint).int32(message.lionhearted);
        /* bool carrion_feeder = 11; */
        if (message.carrionFeeder !== false)
            writer.tag(11, WireType.Varint).bool(message.carrionFeeder);
        /* int32 great_resistance = 12; */
        if (message.greatResistance !== 0)
            writer.tag(12, WireType.Varint).int32(message.greatResistance);
        /* int32 cornered = 13; */
        if (message.cornered !== 0)
            writer.tag(13, WireType.Varint).int32(message.cornered);
        /* int32 feeding_frenzy = 14; */
        if (message.feedingFrenzy !== 0)
            writer.tag(14, WireType.Varint).int32(message.feedingFrenzy);
        /* bool wolverine_bite = 15; */
        if (message.wolverineBite !== false)
            writer.tag(15, WireType.Varint).bool(message.wolverineBite);
        /* bool roar_of_recovery = 16; */
        if (message.roarOfRecovery !== false)
            writer.tag(16, WireType.Varint).bool(message.roarOfRecovery);
        /* bool bullheaded = 17; */
        if (message.bullheaded !== false)
            writer.tag(17, WireType.Varint).bool(message.bullheaded);
        /* int32 grace_of_the_mantis = 18; */
        if (message.graceOfTheMantis !== 0)
            writer.tag(18, WireType.Varint).int32(message.graceOfTheMantis);
        /* int32 wild_hunt = 19; */
        if (message.wildHunt !== 0)
            writer.tag(19, WireType.Varint).int32(message.wildHunt);
        /* bool roar_of_sacrifice = 20; */
        if (message.roarOfSacrifice !== false)
            writer.tag(20, WireType.Varint).bool(message.roarOfSacrifice);
        /* int32 improved_cower = 21; */
        if (message.improvedCower !== 0)
            writer.tag(21, WireType.Varint).int32(message.improvedCower);
        /* int32 bloodthirsty = 22; */
        if (message.bloodthirsty !== 0)
            writer.tag(22, WireType.Varint).int32(message.bloodthirsty);
        /* bool heart_of_the_pheonix = 23; */
        if (message.heartOfThePheonix !== false)
            writer.tag(23, WireType.Varint).bool(message.heartOfThePheonix);
        /* int32 spiders_bite = 24; */
        if (message.spidersBite !== 0)
            writer.tag(24, WireType.Varint).int32(message.spidersBite);
        /* bool rabid = 25; */
        if (message.rabid !== false)
            writer.tag(25, WireType.Varint).bool(message.rabid);
        /* bool lick_your_wounds = 26; */
        if (message.lickYourWounds !== false)
            writer.tag(26, WireType.Varint).bool(message.lickYourWounds);
        /* bool call_of_the_wild = 27; */
        if (message.callOfTheWild !== false)
            writer.tag(27, WireType.Varint).bool(message.callOfTheWild);
        /* int32 shark_attack = 28; */
        if (message.sharkAttack !== 0)
            writer.tag(28, WireType.Varint).int32(message.sharkAttack);
        /* bool charge = 29; */
        if (message.charge !== false)
            writer.tag(29, WireType.Varint).bool(message.charge);
        /* int32 blood_of_the_rhino = 30; */
        if (message.bloodOfTheRhino !== 0)
            writer.tag(30, WireType.Varint).int32(message.bloodOfTheRhino);
        /* int32 pet_barding = 31; */
        if (message.petBarding !== 0)
            writer.tag(31, WireType.Varint).int32(message.petBarding);
        /* int32 guard_dog = 32; */
        if (message.guardDog !== 0)
            writer.tag(32, WireType.Varint).int32(message.guardDog);
        /* bool thunderstomp = 33; */
        if (message.thunderstomp !== false)
            writer.tag(33, WireType.Varint).bool(message.thunderstomp);
        /* bool last_stand = 34; */
        if (message.lastStand !== false)
            writer.tag(34, WireType.Varint).bool(message.lastStand);
        /* bool taunt = 35; */
        if (message.taunt !== false)
            writer.tag(35, WireType.Varint).bool(message.taunt);
        /* bool intervene = 36; */
        if (message.intervene !== false)
            writer.tag(36, WireType.Varint).bool(message.intervene);
        /* int32 silverback = 37; */
        if (message.silverback !== 0)
            writer.tag(37, WireType.Varint).int32(message.silverback);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.HunterPetTalents
 */
export const HunterPetTalents = new HunterPetTalents$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Hunter$Type extends MessageType {
    constructor() {
        super("proto.Hunter", [
            { no: 1, name: "rotation", kind: "message", T: () => Hunter_Rotation },
            { no: 2, name: "talents", kind: "message", T: () => HunterTalents },
            { no: 3, name: "options", kind: "message", T: () => Hunter_Options }
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
                case /* proto.Hunter.Rotation rotation */ 1:
                    message.rotation = Hunter_Rotation.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* proto.HunterTalents talents */ 2:
                    message.talents = HunterTalents.internalBinaryRead(reader, reader.uint32(), options, message.talents);
                    break;
                case /* proto.Hunter.Options options */ 3:
                    message.options = Hunter_Options.internalBinaryRead(reader, reader.uint32(), options, message.options);
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
        /* proto.Hunter.Rotation rotation = 1; */
        if (message.rotation)
            Hunter_Rotation.internalBinaryWrite(message.rotation, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* proto.HunterTalents talents = 2; */
        if (message.talents)
            HunterTalents.internalBinaryWrite(message.talents, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* proto.Hunter.Options options = 3; */
        if (message.options)
            Hunter_Options.internalBinaryWrite(message.options, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Hunter
 */
export const Hunter = new Hunter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Hunter_Rotation$Type extends MessageType {
    constructor() {
        super("proto.Hunter.Rotation", [
            { no: 5, name: "sting", kind: "enum", T: () => ["proto.Hunter.Rotation.StingType", Hunter_Rotation_StingType] },
            { no: 6, name: "viper_start_mana_percent", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 7, name: "viper_stop_mana_percent", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value) {
        const message = { sting: 0, viperStartManaPercent: 0, viperStopManaPercent: 0 };
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
                case /* proto.Hunter.Rotation.StingType sting */ 5:
                    message.sting = reader.int32();
                    break;
                case /* double viper_start_mana_percent */ 6:
                    message.viperStartManaPercent = reader.double();
                    break;
                case /* double viper_stop_mana_percent */ 7:
                    message.viperStopManaPercent = reader.double();
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
        /* proto.Hunter.Rotation.StingType sting = 5; */
        if (message.sting !== 0)
            writer.tag(5, WireType.Varint).int32(message.sting);
        /* double viper_start_mana_percent = 6; */
        if (message.viperStartManaPercent !== 0)
            writer.tag(6, WireType.Bit64).double(message.viperStartManaPercent);
        /* double viper_stop_mana_percent = 7; */
        if (message.viperStopManaPercent !== 0)
            writer.tag(7, WireType.Bit64).double(message.viperStopManaPercent);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Hunter.Rotation
 */
export const Hunter_Rotation = new Hunter_Rotation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Hunter_Options$Type extends MessageType {
    constructor() {
        super("proto.Hunter.Options", [
            { no: 1, name: "ammo", kind: "enum", T: () => ["proto.Hunter.Options.Ammo", Hunter_Options_Ammo] },
            { no: 2, name: "pet_type", kind: "enum", T: () => ["proto.Hunter.Options.PetType", Hunter_Options_PetType] },
            { no: 3, name: "pet_talents", kind: "message", T: () => HunterPetTalents },
            { no: 4, name: "pet_uptime", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 6, name: "latency_ms", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "sniper_training_uptime", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 8, name: "remove_randomness", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { ammo: 0, petType: 0, petUptime: 0, latencyMs: 0, sniperTrainingUptime: 0, removeRandomness: false };
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
                case /* proto.Hunter.Options.Ammo ammo */ 1:
                    message.ammo = reader.int32();
                    break;
                case /* proto.Hunter.Options.PetType pet_type */ 2:
                    message.petType = reader.int32();
                    break;
                case /* proto.HunterPetTalents pet_talents */ 3:
                    message.petTalents = HunterPetTalents.internalBinaryRead(reader, reader.uint32(), options, message.petTalents);
                    break;
                case /* double pet_uptime */ 4:
                    message.petUptime = reader.double();
                    break;
                case /* int32 latency_ms */ 6:
                    message.latencyMs = reader.int32();
                    break;
                case /* double sniper_training_uptime */ 7:
                    message.sniperTrainingUptime = reader.double();
                    break;
                case /* bool remove_randomness */ 8:
                    message.removeRandomness = reader.bool();
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
        /* proto.Hunter.Options.Ammo ammo = 1; */
        if (message.ammo !== 0)
            writer.tag(1, WireType.Varint).int32(message.ammo);
        /* proto.Hunter.Options.PetType pet_type = 2; */
        if (message.petType !== 0)
            writer.tag(2, WireType.Varint).int32(message.petType);
        /* proto.HunterPetTalents pet_talents = 3; */
        if (message.petTalents)
            HunterPetTalents.internalBinaryWrite(message.petTalents, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* double pet_uptime = 4; */
        if (message.petUptime !== 0)
            writer.tag(4, WireType.Bit64).double(message.petUptime);
        /* int32 latency_ms = 6; */
        if (message.latencyMs !== 0)
            writer.tag(6, WireType.Varint).int32(message.latencyMs);
        /* double sniper_training_uptime = 7; */
        if (message.sniperTrainingUptime !== 0)
            writer.tag(7, WireType.Bit64).double(message.sniperTrainingUptime);
        /* bool remove_randomness = 8; */
        if (message.removeRandomness !== false)
            writer.tag(8, WireType.Varint).bool(message.removeRandomness);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Hunter.Options
 */
export const Hunter_Options = new Hunter_Options$Type();
