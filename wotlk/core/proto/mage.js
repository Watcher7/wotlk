import { WireType } from '/wotlk/protobuf-ts/index.js';
import { UnknownFieldHandler } from '/wotlk/protobuf-ts/index.js';
import { reflectionMergePartial } from '/wotlk/protobuf-ts/index.js';
import { MESSAGE_TYPE } from '/wotlk/protobuf-ts/index.js';
import { MessageType } from '/wotlk/protobuf-ts/index.js';
/**
 * @generated from protobuf enum proto.Mage.Rotation.ArcaneRotation.Filler
 */
export var Mage_Rotation_ArcaneRotation_Filler;
(function (Mage_Rotation_ArcaneRotation_Filler) {
    /**
     * @generated from protobuf enum value: Frostbolt = 0;
     */
    Mage_Rotation_ArcaneRotation_Filler[Mage_Rotation_ArcaneRotation_Filler["Frostbolt"] = 0] = "Frostbolt";
    /**
     * @generated from protobuf enum value: ArcaneMissiles = 1;
     */
    Mage_Rotation_ArcaneRotation_Filler[Mage_Rotation_ArcaneRotation_Filler["ArcaneMissiles"] = 1] = "ArcaneMissiles";
    /**
     * @generated from protobuf enum value: Scorch = 2;
     */
    Mage_Rotation_ArcaneRotation_Filler[Mage_Rotation_ArcaneRotation_Filler["Scorch"] = 2] = "Scorch";
    /**
     * @generated from protobuf enum value: Fireball = 3;
     */
    Mage_Rotation_ArcaneRotation_Filler[Mage_Rotation_ArcaneRotation_Filler["Fireball"] = 3] = "Fireball";
    /**
     * @generated from protobuf enum value: ArcaneMissilesFrostbolt = 4;
     */
    Mage_Rotation_ArcaneRotation_Filler[Mage_Rotation_ArcaneRotation_Filler["ArcaneMissilesFrostbolt"] = 4] = "ArcaneMissilesFrostbolt";
    /**
     * @generated from protobuf enum value: ArcaneMissilesScorch = 5;
     */
    Mage_Rotation_ArcaneRotation_Filler[Mage_Rotation_ArcaneRotation_Filler["ArcaneMissilesScorch"] = 5] = "ArcaneMissilesScorch";
    /**
     * @generated from protobuf enum value: ScorchTwoFireball = 6;
     */
    Mage_Rotation_ArcaneRotation_Filler[Mage_Rotation_ArcaneRotation_Filler["ScorchTwoFireball"] = 6] = "ScorchTwoFireball";
})(Mage_Rotation_ArcaneRotation_Filler || (Mage_Rotation_ArcaneRotation_Filler = {}));
/**
 * @generated from protobuf enum proto.Mage.Rotation.FireRotation.PrimarySpell
 */
export var Mage_Rotation_FireRotation_PrimarySpell;
(function (Mage_Rotation_FireRotation_PrimarySpell) {
    /**
     * @generated from protobuf enum value: Fireball = 0;
     */
    Mage_Rotation_FireRotation_PrimarySpell[Mage_Rotation_FireRotation_PrimarySpell["Fireball"] = 0] = "Fireball";
    /**
     * @generated from protobuf enum value: Scorch = 1;
     */
    Mage_Rotation_FireRotation_PrimarySpell[Mage_Rotation_FireRotation_PrimarySpell["Scorch"] = 1] = "Scorch";
})(Mage_Rotation_FireRotation_PrimarySpell || (Mage_Rotation_FireRotation_PrimarySpell = {}));
/**
 * @generated from protobuf enum proto.Mage.Rotation.AoeRotation.Rotation
 */
export var Mage_Rotation_AoeRotation_Rotation;
(function (Mage_Rotation_AoeRotation_Rotation) {
    /**
     * @generated from protobuf enum value: ArcaneExplosion = 0;
     */
    Mage_Rotation_AoeRotation_Rotation[Mage_Rotation_AoeRotation_Rotation["ArcaneExplosion"] = 0] = "ArcaneExplosion";
    /**
     * @generated from protobuf enum value: Flamestrike = 1;
     */
    Mage_Rotation_AoeRotation_Rotation[Mage_Rotation_AoeRotation_Rotation["Flamestrike"] = 1] = "Flamestrike";
    /**
     * @generated from protobuf enum value: Blizzard = 2;
     */
    Mage_Rotation_AoeRotation_Rotation[Mage_Rotation_AoeRotation_Rotation["Blizzard"] = 2] = "Blizzard";
})(Mage_Rotation_AoeRotation_Rotation || (Mage_Rotation_AoeRotation_Rotation = {}));
/**
 * Just used for controlling which options are displayed in the UI. Is not
 * used by the sim.
 *
 * @generated from protobuf enum proto.Mage.Rotation.Type
 */
export var Mage_Rotation_Type;
(function (Mage_Rotation_Type) {
    /**
     * @generated from protobuf enum value: Arcane = 0;
     */
    Mage_Rotation_Type[Mage_Rotation_Type["Arcane"] = 0] = "Arcane";
    /**
     * @generated from protobuf enum value: Fire = 1;
     */
    Mage_Rotation_Type[Mage_Rotation_Type["Fire"] = 1] = "Fire";
    /**
     * @generated from protobuf enum value: Frost = 2;
     */
    Mage_Rotation_Type[Mage_Rotation_Type["Frost"] = 2] = "Frost";
})(Mage_Rotation_Type || (Mage_Rotation_Type = {}));
/**
 * @generated from protobuf enum proto.Mage.Options.ArmorType
 */
export var Mage_Options_ArmorType;
(function (Mage_Options_ArmorType) {
    /**
     * @generated from protobuf enum value: NoArmor = 0;
     */
    Mage_Options_ArmorType[Mage_Options_ArmorType["NoArmor"] = 0] = "NoArmor";
    /**
     * @generated from protobuf enum value: MageArmor = 1;
     */
    Mage_Options_ArmorType[Mage_Options_ArmorType["MageArmor"] = 1] = "MageArmor";
    /**
     * @generated from protobuf enum value: MoltenArmor = 2;
     */
    Mage_Options_ArmorType[Mage_Options_ArmorType["MoltenArmor"] = 2] = "MoltenArmor";
})(Mage_Options_ArmorType || (Mage_Options_ArmorType = {}));
/**
 * @generated from protobuf enum proto.MageMajorGlyph
 */
export var MageMajorGlyph;
(function (MageMajorGlyph) {
    /**
     * @generated from protobuf enum value: MageMajorGlyphNone = 0;
     */
    MageMajorGlyph[MageMajorGlyph["MageMajorGlyphNone"] = 0] = "MageMajorGlyphNone";
    /**
     * @generated from protobuf enum value: GlyphOfArcaneBarrage = 45738;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfArcaneBarrage"] = 45738] = "GlyphOfArcaneBarrage";
    /**
     * @generated from protobuf enum value: GlyphOfArcaneBlast = 44955;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfArcaneBlast"] = 44955] = "GlyphOfArcaneBlast";
    /**
     * @generated from protobuf enum value: GlyphOfArcaneExplosion = 42734;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfArcaneExplosion"] = 42734] = "GlyphOfArcaneExplosion";
    /**
     * @generated from protobuf enum value: GlyphOfArcaneMissiles = 42735;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfArcaneMissiles"] = 42735] = "GlyphOfArcaneMissiles";
    /**
     * @generated from protobuf enum value: GlyphOfArcanePower = 42736;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfArcanePower"] = 42736] = "GlyphOfArcanePower";
    /**
     * @generated from protobuf enum value: GlyphOfBlink = 42737;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfBlink"] = 42737] = "GlyphOfBlink";
    /**
     * @generated from protobuf enum value: GlyphOfDeepFreeze = 45736;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfDeepFreeze"] = 45736] = "GlyphOfDeepFreeze";
    /**
     * @generated from protobuf enum value: GlyphOfEternalWater = 50045;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfEternalWater"] = 50045] = "GlyphOfEternalWater";
    /**
     * @generated from protobuf enum value: GlyphOfEvocation = 42738;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfEvocation"] = 42738] = "GlyphOfEvocation";
    /**
     * @generated from protobuf enum value: GlyphOfFireBlast = 42740;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfFireBlast"] = 42740] = "GlyphOfFireBlast";
    /**
     * @generated from protobuf enum value: GlyphOfFireball = 42739;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfFireball"] = 42739] = "GlyphOfFireball";
    /**
     * @generated from protobuf enum value: GlyphOfFrostNova = 42741;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfFrostNova"] = 42741] = "GlyphOfFrostNova";
    /**
     * @generated from protobuf enum value: GlyphOfFrostbolt = 42742;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfFrostbolt"] = 42742] = "GlyphOfFrostbolt";
    /**
     * @generated from protobuf enum value: GlyphOfFrostfire = 44684;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfFrostfire"] = 44684] = "GlyphOfFrostfire";
    /**
     * @generated from protobuf enum value: GlyphOfIceArmor = 42743;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfIceArmor"] = 42743] = "GlyphOfIceArmor";
    /**
     * @generated from protobuf enum value: GlyphOfIceBarrier = 45740;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfIceBarrier"] = 45740] = "GlyphOfIceBarrier";
    /**
     * @generated from protobuf enum value: GlyphOfIceBlock = 42744;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfIceBlock"] = 42744] = "GlyphOfIceBlock";
    /**
     * @generated from protobuf enum value: GlyphOfIceLance = 42745;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfIceLance"] = 42745] = "GlyphOfIceLance";
    /**
     * @generated from protobuf enum value: GlyphOfIcyVeins = 42746;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfIcyVeins"] = 42746] = "GlyphOfIcyVeins";
    /**
     * @generated from protobuf enum value: GlyphOfInvisibility = 42748;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfInvisibility"] = 42748] = "GlyphOfInvisibility";
    /**
     * @generated from protobuf enum value: GlyphOfLivingBomb = 45737;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfLivingBomb"] = 45737] = "GlyphOfLivingBomb";
    /**
     * @generated from protobuf enum value: GlyphOfMageArmor = 42749;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfMageArmor"] = 42749] = "GlyphOfMageArmor";
    /**
     * @generated from protobuf enum value: GlyphOfManaGem = 42750;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfManaGem"] = 42750] = "GlyphOfManaGem";
    /**
     * @generated from protobuf enum value: GlyphOfMirrorImage = 45739;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfMirrorImage"] = 45739] = "GlyphOfMirrorImage";
    /**
     * @generated from protobuf enum value: GlyphOfMoltenArmor = 42751;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfMoltenArmor"] = 42751] = "GlyphOfMoltenArmor";
    /**
     * @generated from protobuf enum value: GlyphOfPolymorph = 42752;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfPolymorph"] = 42752] = "GlyphOfPolymorph";
    /**
     * @generated from protobuf enum value: GlyphOfRemoveCurse = 42753;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfRemoveCurse"] = 42753] = "GlyphOfRemoveCurse";
    /**
     * @generated from protobuf enum value: GlyphOfScorch = 42747;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfScorch"] = 42747] = "GlyphOfScorch";
    /**
     * @generated from protobuf enum value: GlyphOfWaterElemental = 42754;
     */
    MageMajorGlyph[MageMajorGlyph["GlyphOfWaterElemental"] = 42754] = "GlyphOfWaterElemental";
})(MageMajorGlyph || (MageMajorGlyph = {}));
/**
 * @generated from protobuf enum proto.MageMinorGlyph
 */
export var MageMinorGlyph;
(function (MageMinorGlyph) {
    /**
     * @generated from protobuf enum value: MageMinorGlyphNone = 0;
     */
    MageMinorGlyph[MageMinorGlyph["MageMinorGlyphNone"] = 0] = "MageMinorGlyphNone";
    /**
     * @generated from protobuf enum value: GlyphOfArcaneIntellect = 43339;
     */
    MageMinorGlyph[MageMinorGlyph["GlyphOfArcaneIntellect"] = 43339] = "GlyphOfArcaneIntellect";
    /**
     * @generated from protobuf enum value: GlyphOfBlastWave = 44920;
     */
    MageMinorGlyph[MageMinorGlyph["GlyphOfBlastWave"] = 44920] = "GlyphOfBlastWave";
    /**
     * @generated from protobuf enum value: GlyphOfFireWard = 43357;
     */
    MageMinorGlyph[MageMinorGlyph["GlyphOfFireWard"] = 43357] = "GlyphOfFireWard";
    /**
     * @generated from protobuf enum value: GlyphOfFrostArmor = 43359;
     */
    MageMinorGlyph[MageMinorGlyph["GlyphOfFrostArmor"] = 43359] = "GlyphOfFrostArmor";
    /**
     * @generated from protobuf enum value: GlyphOfFrostWard = 43360;
     */
    MageMinorGlyph[MageMinorGlyph["GlyphOfFrostWard"] = 43360] = "GlyphOfFrostWard";
    /**
     * @generated from protobuf enum value: GlyphOfSlowFall = 43364;
     */
    MageMinorGlyph[MageMinorGlyph["GlyphOfSlowFall"] = 43364] = "GlyphOfSlowFall";
    /**
     * @generated from protobuf enum value: GlyphOfThePenguin = 43361;
     */
    MageMinorGlyph[MageMinorGlyph["GlyphOfThePenguin"] = 43361] = "GlyphOfThePenguin";
})(MageMinorGlyph || (MageMinorGlyph = {}));
// @generated message type with reflection information, may provide speed optimized methods
class MageTalents$Type extends MessageType {
    constructor() {
        super("proto.MageTalents", [
            { no: 1, name: "arcane_subtlety", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "arcane_focus", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "arcane_stability", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "arcane_fortitude", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "magic_absorption", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "arcane_concentration", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "magic_attunement", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "spell_impact", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "student_of_the_mind", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "focus_magic", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "arcane_shielding", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "improved_counterspell", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "arcane_meditation", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "torment_the_weak", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "improved_blink", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 16, name: "presence_of_mind", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 17, name: "arcane_mind", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 18, name: "prismatic_cloak", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 19, name: "arcane_instability", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 20, name: "arcane_potency", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 21, name: "arcane_empowerment", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 22, name: "arcane_power", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 23, name: "incanters_absorption", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 24, name: "arcane_flows", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 25, name: "mind_mastery", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 26, name: "slow", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 27, name: "missile_barrage", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 28, name: "netherwind_presence", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 29, name: "spell_power", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 30, name: "arcane_barrage", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 31, name: "improved_fire_blast", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 32, name: "incineration", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 33, name: "improved_fireball", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 34, name: "ignite", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 35, name: "burning_determination", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 36, name: "world_in_flames", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 37, name: "flame_throwing", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 38, name: "impact", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 39, name: "pyroblast", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 40, name: "burning_soul", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 41, name: "improved_scorch", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 42, name: "molten_shields", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 43, name: "master_of_elements", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 44, name: "playing_with_fire", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 45, name: "critical_mass", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 46, name: "blast_wave", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 47, name: "blazing_speed", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 48, name: "fire_power", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 49, name: "pyromaniac", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 50, name: "combustion", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 51, name: "molten_fury", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 52, name: "fiery_payback", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 53, name: "empowered_fire", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 54, name: "firestarter", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 55, name: "dragons_breath", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 56, name: "hot_streak", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 57, name: "burnout", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 58, name: "living_bomb", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 59, name: "frostbite", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 60, name: "improved_frostbolt", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 61, name: "ice_floes", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 62, name: "ice_shards", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 63, name: "frost_warding", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 64, name: "precision", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 65, name: "permafrost", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 66, name: "piercing_ice", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 67, name: "icy_veins", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 68, name: "improved_blizzard", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 69, name: "arctic_reach", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 70, name: "frost_channeling", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 71, name: "shatter", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 72, name: "cold_snap", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 73, name: "improved_cone_of_cold", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 74, name: "frozen_core", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 75, name: "cold_as_ice", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 76, name: "winters_chill", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 77, name: "shattered_barrier", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 78, name: "ice_barrier", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 79, name: "arctic_winds", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 80, name: "empowered_frostbolt", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 81, name: "fingers_of_frost", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 82, name: "brain_freeze", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 83, name: "summon_water_elemental", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 84, name: "enduring_winter", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 85, name: "chilled_to_the_bone", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 86, name: "deep_freeze", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { arcaneSubtlety: 0, arcaneFocus: 0, arcaneStability: 0, arcaneFortitude: 0, magicAbsorption: 0, arcaneConcentration: 0, magicAttunement: 0, spellImpact: 0, studentOfTheMind: 0, focusMagic: false, arcaneShielding: 0, improvedCounterspell: 0, arcaneMeditation: 0, tormentTheWeak: 0, improvedBlink: 0, presenceOfMind: false, arcaneMind: 0, prismaticCloak: 0, arcaneInstability: 0, arcanePotency: 0, arcaneEmpowerment: 0, arcanePower: false, incantersAbsorption: 0, arcaneFlows: 0, mindMastery: 0, slow: false, missileBarrage: 0, netherwindPresence: 0, spellPower: 0, arcaneBarrage: false, improvedFireBlast: 0, incineration: 0, improvedFireball: 0, ignite: 0, burningDetermination: 0, worldInFlames: 0, flameThrowing: 0, impact: 0, pyroblast: false, burningSoul: 0, improvedScorch: 0, moltenShields: 0, masterOfElements: 0, playingWithFire: 0, criticalMass: 0, blastWave: false, blazingSpeed: 0, firePower: 0, pyromaniac: 0, combustion: false, moltenFury: 0, fieryPayback: 0, empoweredFire: 0, firestarter: 0, dragonsBreath: false, hotStreak: 0, burnout: 0, livingBomb: false, frostbite: 0, improvedFrostbolt: 0, iceFloes: 0, iceShards: 0, frostWarding: 0, precision: 0, permafrost: 0, piercingIce: 0, icyVeins: false, improvedBlizzard: 0, arcticReach: 0, frostChanneling: 0, shatter: 0, coldSnap: false, improvedConeOfCold: 0, frozenCore: 0, coldAsIce: 0, wintersChill: 0, shatteredBarrier: 0, iceBarrier: false, arcticWinds: 0, empoweredFrostbolt: 0, fingersOfFrost: 0, brainFreeze: 0, summonWaterElemental: false, enduringWinter: 0, chilledToTheBone: 0, deepFreeze: false };
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
                case /* int32 arcane_subtlety */ 1:
                    message.arcaneSubtlety = reader.int32();
                    break;
                case /* int32 arcane_focus */ 2:
                    message.arcaneFocus = reader.int32();
                    break;
                case /* int32 arcane_stability */ 3:
                    message.arcaneStability = reader.int32();
                    break;
                case /* int32 arcane_fortitude */ 4:
                    message.arcaneFortitude = reader.int32();
                    break;
                case /* int32 magic_absorption */ 5:
                    message.magicAbsorption = reader.int32();
                    break;
                case /* int32 arcane_concentration */ 6:
                    message.arcaneConcentration = reader.int32();
                    break;
                case /* int32 magic_attunement */ 7:
                    message.magicAttunement = reader.int32();
                    break;
                case /* int32 spell_impact */ 8:
                    message.spellImpact = reader.int32();
                    break;
                case /* int32 student_of_the_mind */ 9:
                    message.studentOfTheMind = reader.int32();
                    break;
                case /* bool focus_magic */ 10:
                    message.focusMagic = reader.bool();
                    break;
                case /* int32 arcane_shielding */ 11:
                    message.arcaneShielding = reader.int32();
                    break;
                case /* int32 improved_counterspell */ 12:
                    message.improvedCounterspell = reader.int32();
                    break;
                case /* int32 arcane_meditation */ 13:
                    message.arcaneMeditation = reader.int32();
                    break;
                case /* int32 torment_the_weak */ 14:
                    message.tormentTheWeak = reader.int32();
                    break;
                case /* int32 improved_blink */ 15:
                    message.improvedBlink = reader.int32();
                    break;
                case /* bool presence_of_mind */ 16:
                    message.presenceOfMind = reader.bool();
                    break;
                case /* int32 arcane_mind */ 17:
                    message.arcaneMind = reader.int32();
                    break;
                case /* int32 prismatic_cloak */ 18:
                    message.prismaticCloak = reader.int32();
                    break;
                case /* int32 arcane_instability */ 19:
                    message.arcaneInstability = reader.int32();
                    break;
                case /* int32 arcane_potency */ 20:
                    message.arcanePotency = reader.int32();
                    break;
                case /* int32 arcane_empowerment */ 21:
                    message.arcaneEmpowerment = reader.int32();
                    break;
                case /* bool arcane_power */ 22:
                    message.arcanePower = reader.bool();
                    break;
                case /* int32 incanters_absorption */ 23:
                    message.incantersAbsorption = reader.int32();
                    break;
                case /* int32 arcane_flows */ 24:
                    message.arcaneFlows = reader.int32();
                    break;
                case /* int32 mind_mastery */ 25:
                    message.mindMastery = reader.int32();
                    break;
                case /* bool slow */ 26:
                    message.slow = reader.bool();
                    break;
                case /* int32 missile_barrage */ 27:
                    message.missileBarrage = reader.int32();
                    break;
                case /* int32 netherwind_presence */ 28:
                    message.netherwindPresence = reader.int32();
                    break;
                case /* int32 spell_power */ 29:
                    message.spellPower = reader.int32();
                    break;
                case /* bool arcane_barrage */ 30:
                    message.arcaneBarrage = reader.bool();
                    break;
                case /* int32 improved_fire_blast */ 31:
                    message.improvedFireBlast = reader.int32();
                    break;
                case /* int32 incineration */ 32:
                    message.incineration = reader.int32();
                    break;
                case /* int32 improved_fireball */ 33:
                    message.improvedFireball = reader.int32();
                    break;
                case /* int32 ignite */ 34:
                    message.ignite = reader.int32();
                    break;
                case /* int32 burning_determination */ 35:
                    message.burningDetermination = reader.int32();
                    break;
                case /* int32 world_in_flames */ 36:
                    message.worldInFlames = reader.int32();
                    break;
                case /* int32 flame_throwing */ 37:
                    message.flameThrowing = reader.int32();
                    break;
                case /* int32 impact */ 38:
                    message.impact = reader.int32();
                    break;
                case /* bool pyroblast */ 39:
                    message.pyroblast = reader.bool();
                    break;
                case /* int32 burning_soul */ 40:
                    message.burningSoul = reader.int32();
                    break;
                case /* int32 improved_scorch */ 41:
                    message.improvedScorch = reader.int32();
                    break;
                case /* int32 molten_shields */ 42:
                    message.moltenShields = reader.int32();
                    break;
                case /* int32 master_of_elements */ 43:
                    message.masterOfElements = reader.int32();
                    break;
                case /* int32 playing_with_fire */ 44:
                    message.playingWithFire = reader.int32();
                    break;
                case /* int32 critical_mass */ 45:
                    message.criticalMass = reader.int32();
                    break;
                case /* bool blast_wave */ 46:
                    message.blastWave = reader.bool();
                    break;
                case /* int32 blazing_speed */ 47:
                    message.blazingSpeed = reader.int32();
                    break;
                case /* int32 fire_power */ 48:
                    message.firePower = reader.int32();
                    break;
                case /* int32 pyromaniac */ 49:
                    message.pyromaniac = reader.int32();
                    break;
                case /* bool combustion */ 50:
                    message.combustion = reader.bool();
                    break;
                case /* int32 molten_fury */ 51:
                    message.moltenFury = reader.int32();
                    break;
                case /* int32 fiery_payback */ 52:
                    message.fieryPayback = reader.int32();
                    break;
                case /* int32 empowered_fire */ 53:
                    message.empoweredFire = reader.int32();
                    break;
                case /* int32 firestarter */ 54:
                    message.firestarter = reader.int32();
                    break;
                case /* bool dragons_breath */ 55:
                    message.dragonsBreath = reader.bool();
                    break;
                case /* int32 hot_streak */ 56:
                    message.hotStreak = reader.int32();
                    break;
                case /* int32 burnout */ 57:
                    message.burnout = reader.int32();
                    break;
                case /* bool living_bomb */ 58:
                    message.livingBomb = reader.bool();
                    break;
                case /* int32 frostbite */ 59:
                    message.frostbite = reader.int32();
                    break;
                case /* int32 improved_frostbolt */ 60:
                    message.improvedFrostbolt = reader.int32();
                    break;
                case /* int32 ice_floes */ 61:
                    message.iceFloes = reader.int32();
                    break;
                case /* int32 ice_shards */ 62:
                    message.iceShards = reader.int32();
                    break;
                case /* int32 frost_warding */ 63:
                    message.frostWarding = reader.int32();
                    break;
                case /* int32 precision */ 64:
                    message.precision = reader.int32();
                    break;
                case /* int32 permafrost */ 65:
                    message.permafrost = reader.int32();
                    break;
                case /* int32 piercing_ice */ 66:
                    message.piercingIce = reader.int32();
                    break;
                case /* bool icy_veins */ 67:
                    message.icyVeins = reader.bool();
                    break;
                case /* int32 improved_blizzard */ 68:
                    message.improvedBlizzard = reader.int32();
                    break;
                case /* int32 arctic_reach */ 69:
                    message.arcticReach = reader.int32();
                    break;
                case /* int32 frost_channeling */ 70:
                    message.frostChanneling = reader.int32();
                    break;
                case /* int32 shatter */ 71:
                    message.shatter = reader.int32();
                    break;
                case /* bool cold_snap */ 72:
                    message.coldSnap = reader.bool();
                    break;
                case /* int32 improved_cone_of_cold */ 73:
                    message.improvedConeOfCold = reader.int32();
                    break;
                case /* int32 frozen_core */ 74:
                    message.frozenCore = reader.int32();
                    break;
                case /* int32 cold_as_ice */ 75:
                    message.coldAsIce = reader.int32();
                    break;
                case /* int32 winters_chill */ 76:
                    message.wintersChill = reader.int32();
                    break;
                case /* int32 shattered_barrier */ 77:
                    message.shatteredBarrier = reader.int32();
                    break;
                case /* bool ice_barrier */ 78:
                    message.iceBarrier = reader.bool();
                    break;
                case /* int32 arctic_winds */ 79:
                    message.arcticWinds = reader.int32();
                    break;
                case /* int32 empowered_frostbolt */ 80:
                    message.empoweredFrostbolt = reader.int32();
                    break;
                case /* int32 fingers_of_frost */ 81:
                    message.fingersOfFrost = reader.int32();
                    break;
                case /* int32 brain_freeze */ 82:
                    message.brainFreeze = reader.int32();
                    break;
                case /* bool summon_water_elemental */ 83:
                    message.summonWaterElemental = reader.bool();
                    break;
                case /* int32 enduring_winter */ 84:
                    message.enduringWinter = reader.int32();
                    break;
                case /* int32 chilled_to_the_bone */ 85:
                    message.chilledToTheBone = reader.int32();
                    break;
                case /* bool deep_freeze */ 86:
                    message.deepFreeze = reader.bool();
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
        /* int32 arcane_subtlety = 1; */
        if (message.arcaneSubtlety !== 0)
            writer.tag(1, WireType.Varint).int32(message.arcaneSubtlety);
        /* int32 arcane_focus = 2; */
        if (message.arcaneFocus !== 0)
            writer.tag(2, WireType.Varint).int32(message.arcaneFocus);
        /* int32 arcane_stability = 3; */
        if (message.arcaneStability !== 0)
            writer.tag(3, WireType.Varint).int32(message.arcaneStability);
        /* int32 arcane_fortitude = 4; */
        if (message.arcaneFortitude !== 0)
            writer.tag(4, WireType.Varint).int32(message.arcaneFortitude);
        /* int32 magic_absorption = 5; */
        if (message.magicAbsorption !== 0)
            writer.tag(5, WireType.Varint).int32(message.magicAbsorption);
        /* int32 arcane_concentration = 6; */
        if (message.arcaneConcentration !== 0)
            writer.tag(6, WireType.Varint).int32(message.arcaneConcentration);
        /* int32 magic_attunement = 7; */
        if (message.magicAttunement !== 0)
            writer.tag(7, WireType.Varint).int32(message.magicAttunement);
        /* int32 spell_impact = 8; */
        if (message.spellImpact !== 0)
            writer.tag(8, WireType.Varint).int32(message.spellImpact);
        /* int32 student_of_the_mind = 9; */
        if (message.studentOfTheMind !== 0)
            writer.tag(9, WireType.Varint).int32(message.studentOfTheMind);
        /* bool focus_magic = 10; */
        if (message.focusMagic !== false)
            writer.tag(10, WireType.Varint).bool(message.focusMagic);
        /* int32 arcane_shielding = 11; */
        if (message.arcaneShielding !== 0)
            writer.tag(11, WireType.Varint).int32(message.arcaneShielding);
        /* int32 improved_counterspell = 12; */
        if (message.improvedCounterspell !== 0)
            writer.tag(12, WireType.Varint).int32(message.improvedCounterspell);
        /* int32 arcane_meditation = 13; */
        if (message.arcaneMeditation !== 0)
            writer.tag(13, WireType.Varint).int32(message.arcaneMeditation);
        /* int32 torment_the_weak = 14; */
        if (message.tormentTheWeak !== 0)
            writer.tag(14, WireType.Varint).int32(message.tormentTheWeak);
        /* int32 improved_blink = 15; */
        if (message.improvedBlink !== 0)
            writer.tag(15, WireType.Varint).int32(message.improvedBlink);
        /* bool presence_of_mind = 16; */
        if (message.presenceOfMind !== false)
            writer.tag(16, WireType.Varint).bool(message.presenceOfMind);
        /* int32 arcane_mind = 17; */
        if (message.arcaneMind !== 0)
            writer.tag(17, WireType.Varint).int32(message.arcaneMind);
        /* int32 prismatic_cloak = 18; */
        if (message.prismaticCloak !== 0)
            writer.tag(18, WireType.Varint).int32(message.prismaticCloak);
        /* int32 arcane_instability = 19; */
        if (message.arcaneInstability !== 0)
            writer.tag(19, WireType.Varint).int32(message.arcaneInstability);
        /* int32 arcane_potency = 20; */
        if (message.arcanePotency !== 0)
            writer.tag(20, WireType.Varint).int32(message.arcanePotency);
        /* int32 arcane_empowerment = 21; */
        if (message.arcaneEmpowerment !== 0)
            writer.tag(21, WireType.Varint).int32(message.arcaneEmpowerment);
        /* bool arcane_power = 22; */
        if (message.arcanePower !== false)
            writer.tag(22, WireType.Varint).bool(message.arcanePower);
        /* int32 incanters_absorption = 23; */
        if (message.incantersAbsorption !== 0)
            writer.tag(23, WireType.Varint).int32(message.incantersAbsorption);
        /* int32 arcane_flows = 24; */
        if (message.arcaneFlows !== 0)
            writer.tag(24, WireType.Varint).int32(message.arcaneFlows);
        /* int32 mind_mastery = 25; */
        if (message.mindMastery !== 0)
            writer.tag(25, WireType.Varint).int32(message.mindMastery);
        /* bool slow = 26; */
        if (message.slow !== false)
            writer.tag(26, WireType.Varint).bool(message.slow);
        /* int32 missile_barrage = 27; */
        if (message.missileBarrage !== 0)
            writer.tag(27, WireType.Varint).int32(message.missileBarrage);
        /* int32 netherwind_presence = 28; */
        if (message.netherwindPresence !== 0)
            writer.tag(28, WireType.Varint).int32(message.netherwindPresence);
        /* int32 spell_power = 29; */
        if (message.spellPower !== 0)
            writer.tag(29, WireType.Varint).int32(message.spellPower);
        /* bool arcane_barrage = 30; */
        if (message.arcaneBarrage !== false)
            writer.tag(30, WireType.Varint).bool(message.arcaneBarrage);
        /* int32 improved_fire_blast = 31; */
        if (message.improvedFireBlast !== 0)
            writer.tag(31, WireType.Varint).int32(message.improvedFireBlast);
        /* int32 incineration = 32; */
        if (message.incineration !== 0)
            writer.tag(32, WireType.Varint).int32(message.incineration);
        /* int32 improved_fireball = 33; */
        if (message.improvedFireball !== 0)
            writer.tag(33, WireType.Varint).int32(message.improvedFireball);
        /* int32 ignite = 34; */
        if (message.ignite !== 0)
            writer.tag(34, WireType.Varint).int32(message.ignite);
        /* int32 burning_determination = 35; */
        if (message.burningDetermination !== 0)
            writer.tag(35, WireType.Varint).int32(message.burningDetermination);
        /* int32 world_in_flames = 36; */
        if (message.worldInFlames !== 0)
            writer.tag(36, WireType.Varint).int32(message.worldInFlames);
        /* int32 flame_throwing = 37; */
        if (message.flameThrowing !== 0)
            writer.tag(37, WireType.Varint).int32(message.flameThrowing);
        /* int32 impact = 38; */
        if (message.impact !== 0)
            writer.tag(38, WireType.Varint).int32(message.impact);
        /* bool pyroblast = 39; */
        if (message.pyroblast !== false)
            writer.tag(39, WireType.Varint).bool(message.pyroblast);
        /* int32 burning_soul = 40; */
        if (message.burningSoul !== 0)
            writer.tag(40, WireType.Varint).int32(message.burningSoul);
        /* int32 improved_scorch = 41; */
        if (message.improvedScorch !== 0)
            writer.tag(41, WireType.Varint).int32(message.improvedScorch);
        /* int32 molten_shields = 42; */
        if (message.moltenShields !== 0)
            writer.tag(42, WireType.Varint).int32(message.moltenShields);
        /* int32 master_of_elements = 43; */
        if (message.masterOfElements !== 0)
            writer.tag(43, WireType.Varint).int32(message.masterOfElements);
        /* int32 playing_with_fire = 44; */
        if (message.playingWithFire !== 0)
            writer.tag(44, WireType.Varint).int32(message.playingWithFire);
        /* int32 critical_mass = 45; */
        if (message.criticalMass !== 0)
            writer.tag(45, WireType.Varint).int32(message.criticalMass);
        /* bool blast_wave = 46; */
        if (message.blastWave !== false)
            writer.tag(46, WireType.Varint).bool(message.blastWave);
        /* int32 blazing_speed = 47; */
        if (message.blazingSpeed !== 0)
            writer.tag(47, WireType.Varint).int32(message.blazingSpeed);
        /* int32 fire_power = 48; */
        if (message.firePower !== 0)
            writer.tag(48, WireType.Varint).int32(message.firePower);
        /* int32 pyromaniac = 49; */
        if (message.pyromaniac !== 0)
            writer.tag(49, WireType.Varint).int32(message.pyromaniac);
        /* bool combustion = 50; */
        if (message.combustion !== false)
            writer.tag(50, WireType.Varint).bool(message.combustion);
        /* int32 molten_fury = 51; */
        if (message.moltenFury !== 0)
            writer.tag(51, WireType.Varint).int32(message.moltenFury);
        /* int32 fiery_payback = 52; */
        if (message.fieryPayback !== 0)
            writer.tag(52, WireType.Varint).int32(message.fieryPayback);
        /* int32 empowered_fire = 53; */
        if (message.empoweredFire !== 0)
            writer.tag(53, WireType.Varint).int32(message.empoweredFire);
        /* int32 firestarter = 54; */
        if (message.firestarter !== 0)
            writer.tag(54, WireType.Varint).int32(message.firestarter);
        /* bool dragons_breath = 55; */
        if (message.dragonsBreath !== false)
            writer.tag(55, WireType.Varint).bool(message.dragonsBreath);
        /* int32 hot_streak = 56; */
        if (message.hotStreak !== 0)
            writer.tag(56, WireType.Varint).int32(message.hotStreak);
        /* int32 burnout = 57; */
        if (message.burnout !== 0)
            writer.tag(57, WireType.Varint).int32(message.burnout);
        /* bool living_bomb = 58; */
        if (message.livingBomb !== false)
            writer.tag(58, WireType.Varint).bool(message.livingBomb);
        /* int32 frostbite = 59; */
        if (message.frostbite !== 0)
            writer.tag(59, WireType.Varint).int32(message.frostbite);
        /* int32 improved_frostbolt = 60; */
        if (message.improvedFrostbolt !== 0)
            writer.tag(60, WireType.Varint).int32(message.improvedFrostbolt);
        /* int32 ice_floes = 61; */
        if (message.iceFloes !== 0)
            writer.tag(61, WireType.Varint).int32(message.iceFloes);
        /* int32 ice_shards = 62; */
        if (message.iceShards !== 0)
            writer.tag(62, WireType.Varint).int32(message.iceShards);
        /* int32 frost_warding = 63; */
        if (message.frostWarding !== 0)
            writer.tag(63, WireType.Varint).int32(message.frostWarding);
        /* int32 precision = 64; */
        if (message.precision !== 0)
            writer.tag(64, WireType.Varint).int32(message.precision);
        /* int32 permafrost = 65; */
        if (message.permafrost !== 0)
            writer.tag(65, WireType.Varint).int32(message.permafrost);
        /* int32 piercing_ice = 66; */
        if (message.piercingIce !== 0)
            writer.tag(66, WireType.Varint).int32(message.piercingIce);
        /* bool icy_veins = 67; */
        if (message.icyVeins !== false)
            writer.tag(67, WireType.Varint).bool(message.icyVeins);
        /* int32 improved_blizzard = 68; */
        if (message.improvedBlizzard !== 0)
            writer.tag(68, WireType.Varint).int32(message.improvedBlizzard);
        /* int32 arctic_reach = 69; */
        if (message.arcticReach !== 0)
            writer.tag(69, WireType.Varint).int32(message.arcticReach);
        /* int32 frost_channeling = 70; */
        if (message.frostChanneling !== 0)
            writer.tag(70, WireType.Varint).int32(message.frostChanneling);
        /* int32 shatter = 71; */
        if (message.shatter !== 0)
            writer.tag(71, WireType.Varint).int32(message.shatter);
        /* bool cold_snap = 72; */
        if (message.coldSnap !== false)
            writer.tag(72, WireType.Varint).bool(message.coldSnap);
        /* int32 improved_cone_of_cold = 73; */
        if (message.improvedConeOfCold !== 0)
            writer.tag(73, WireType.Varint).int32(message.improvedConeOfCold);
        /* int32 frozen_core = 74; */
        if (message.frozenCore !== 0)
            writer.tag(74, WireType.Varint).int32(message.frozenCore);
        /* int32 cold_as_ice = 75; */
        if (message.coldAsIce !== 0)
            writer.tag(75, WireType.Varint).int32(message.coldAsIce);
        /* int32 winters_chill = 76; */
        if (message.wintersChill !== 0)
            writer.tag(76, WireType.Varint).int32(message.wintersChill);
        /* int32 shattered_barrier = 77; */
        if (message.shatteredBarrier !== 0)
            writer.tag(77, WireType.Varint).int32(message.shatteredBarrier);
        /* bool ice_barrier = 78; */
        if (message.iceBarrier !== false)
            writer.tag(78, WireType.Varint).bool(message.iceBarrier);
        /* int32 arctic_winds = 79; */
        if (message.arcticWinds !== 0)
            writer.tag(79, WireType.Varint).int32(message.arcticWinds);
        /* int32 empowered_frostbolt = 80; */
        if (message.empoweredFrostbolt !== 0)
            writer.tag(80, WireType.Varint).int32(message.empoweredFrostbolt);
        /* int32 fingers_of_frost = 81; */
        if (message.fingersOfFrost !== 0)
            writer.tag(81, WireType.Varint).int32(message.fingersOfFrost);
        /* int32 brain_freeze = 82; */
        if (message.brainFreeze !== 0)
            writer.tag(82, WireType.Varint).int32(message.brainFreeze);
        /* bool summon_water_elemental = 83; */
        if (message.summonWaterElemental !== false)
            writer.tag(83, WireType.Varint).bool(message.summonWaterElemental);
        /* int32 enduring_winter = 84; */
        if (message.enduringWinter !== 0)
            writer.tag(84, WireType.Varint).int32(message.enduringWinter);
        /* int32 chilled_to_the_bone = 85; */
        if (message.chilledToTheBone !== 0)
            writer.tag(85, WireType.Varint).int32(message.chilledToTheBone);
        /* bool deep_freeze = 86; */
        if (message.deepFreeze !== false)
            writer.tag(86, WireType.Varint).bool(message.deepFreeze);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.MageTalents
 */
export const MageTalents = new MageTalents$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Mage$Type extends MessageType {
    constructor() {
        super("proto.Mage", [
            { no: 1, name: "rotation", kind: "message", T: () => Mage_Rotation },
            { no: 2, name: "talents", kind: "message", T: () => MageTalents },
            { no: 3, name: "options", kind: "message", T: () => Mage_Options }
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
                case /* proto.Mage.Rotation rotation */ 1:
                    message.rotation = Mage_Rotation.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* proto.MageTalents talents */ 2:
                    message.talents = MageTalents.internalBinaryRead(reader, reader.uint32(), options, message.talents);
                    break;
                case /* proto.Mage.Options options */ 3:
                    message.options = Mage_Options.internalBinaryRead(reader, reader.uint32(), options, message.options);
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
        /* proto.Mage.Rotation rotation = 1; */
        if (message.rotation)
            Mage_Rotation.internalBinaryWrite(message.rotation, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* proto.MageTalents talents = 2; */
        if (message.talents)
            MageTalents.internalBinaryWrite(message.talents, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* proto.Mage.Options options = 3; */
        if (message.options)
            Mage_Options.internalBinaryWrite(message.options, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Mage
 */
export const Mage = new Mage$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Mage_Rotation$Type extends MessageType {
    constructor() {
        super("proto.Mage.Rotation", [
            { no: 1, name: "type", kind: "enum", T: () => ["proto.Mage.Rotation.Type", Mage_Rotation_Type] },
            { no: 2, name: "arcane", kind: "message", T: () => Mage_Rotation_ArcaneRotation },
            { no: 3, name: "fire", kind: "message", T: () => Mage_Rotation_FireRotation },
            { no: 4, name: "frost", kind: "message", T: () => Mage_Rotation_FrostRotation },
            { no: 5, name: "aoe", kind: "message", T: () => Mage_Rotation_AoeRotation },
            { no: 6, name: "multi_target_rotation", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { type: 0, multiTargetRotation: false };
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
                case /* proto.Mage.Rotation.Type type */ 1:
                    message.type = reader.int32();
                    break;
                case /* proto.Mage.Rotation.ArcaneRotation arcane */ 2:
                    message.arcane = Mage_Rotation_ArcaneRotation.internalBinaryRead(reader, reader.uint32(), options, message.arcane);
                    break;
                case /* proto.Mage.Rotation.FireRotation fire */ 3:
                    message.fire = Mage_Rotation_FireRotation.internalBinaryRead(reader, reader.uint32(), options, message.fire);
                    break;
                case /* proto.Mage.Rotation.FrostRotation frost */ 4:
                    message.frost = Mage_Rotation_FrostRotation.internalBinaryRead(reader, reader.uint32(), options, message.frost);
                    break;
                case /* proto.Mage.Rotation.AoeRotation aoe */ 5:
                    message.aoe = Mage_Rotation_AoeRotation.internalBinaryRead(reader, reader.uint32(), options, message.aoe);
                    break;
                case /* bool multi_target_rotation */ 6:
                    message.multiTargetRotation = reader.bool();
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
        /* proto.Mage.Rotation.Type type = 1; */
        if (message.type !== 0)
            writer.tag(1, WireType.Varint).int32(message.type);
        /* proto.Mage.Rotation.ArcaneRotation arcane = 2; */
        if (message.arcane)
            Mage_Rotation_ArcaneRotation.internalBinaryWrite(message.arcane, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* proto.Mage.Rotation.FireRotation fire = 3; */
        if (message.fire)
            Mage_Rotation_FireRotation.internalBinaryWrite(message.fire, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* proto.Mage.Rotation.FrostRotation frost = 4; */
        if (message.frost)
            Mage_Rotation_FrostRotation.internalBinaryWrite(message.frost, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* proto.Mage.Rotation.AoeRotation aoe = 5; */
        if (message.aoe)
            Mage_Rotation_AoeRotation.internalBinaryWrite(message.aoe, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* bool multi_target_rotation = 6; */
        if (message.multiTargetRotation !== false)
            writer.tag(6, WireType.Varint).bool(message.multiTargetRotation);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Mage.Rotation
 */
export const Mage_Rotation = new Mage_Rotation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Mage_Rotation_ArcaneRotation$Type extends MessageType {
    constructor() {
        super("proto.Mage.Rotation.ArcaneRotation", [
            { no: 1, name: "filler", kind: "enum", T: () => ["proto.Mage.Rotation.ArcaneRotation.Filler", Mage_Rotation_ArcaneRotation_Filler] },
            { no: 2, name: "arcane_blasts_between_fillers", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "start_regen_rotation_percent", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 4, name: "stop_regen_rotation_percent", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 5, name: "disable_dps_cooldowns_during_regen", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { filler: 0, arcaneBlastsBetweenFillers: 0, startRegenRotationPercent: 0, stopRegenRotationPercent: 0, disableDpsCooldownsDuringRegen: false };
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
                case /* proto.Mage.Rotation.ArcaneRotation.Filler filler */ 1:
                    message.filler = reader.int32();
                    break;
                case /* int32 arcane_blasts_between_fillers */ 2:
                    message.arcaneBlastsBetweenFillers = reader.int32();
                    break;
                case /* double start_regen_rotation_percent */ 3:
                    message.startRegenRotationPercent = reader.double();
                    break;
                case /* double stop_regen_rotation_percent */ 4:
                    message.stopRegenRotationPercent = reader.double();
                    break;
                case /* bool disable_dps_cooldowns_during_regen */ 5:
                    message.disableDpsCooldownsDuringRegen = reader.bool();
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
        /* proto.Mage.Rotation.ArcaneRotation.Filler filler = 1; */
        if (message.filler !== 0)
            writer.tag(1, WireType.Varint).int32(message.filler);
        /* int32 arcane_blasts_between_fillers = 2; */
        if (message.arcaneBlastsBetweenFillers !== 0)
            writer.tag(2, WireType.Varint).int32(message.arcaneBlastsBetweenFillers);
        /* double start_regen_rotation_percent = 3; */
        if (message.startRegenRotationPercent !== 0)
            writer.tag(3, WireType.Bit64).double(message.startRegenRotationPercent);
        /* double stop_regen_rotation_percent = 4; */
        if (message.stopRegenRotationPercent !== 0)
            writer.tag(4, WireType.Bit64).double(message.stopRegenRotationPercent);
        /* bool disable_dps_cooldowns_during_regen = 5; */
        if (message.disableDpsCooldownsDuringRegen !== false)
            writer.tag(5, WireType.Varint).bool(message.disableDpsCooldownsDuringRegen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Mage.Rotation.ArcaneRotation
 */
export const Mage_Rotation_ArcaneRotation = new Mage_Rotation_ArcaneRotation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Mage_Rotation_FireRotation$Type extends MessageType {
    constructor() {
        super("proto.Mage.Rotation.FireRotation", [
            { no: 1, name: "primary_spell", kind: "enum", T: () => ["proto.Mage.Rotation.FireRotation.PrimarySpell", Mage_Rotation_FireRotation_PrimarySpell] },
            { no: 2, name: "maintain_improved_scorch", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "weave_fire_blast", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { primarySpell: 0, maintainImprovedScorch: false, weaveFireBlast: false };
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
                case /* proto.Mage.Rotation.FireRotation.PrimarySpell primary_spell */ 1:
                    message.primarySpell = reader.int32();
                    break;
                case /* bool maintain_improved_scorch */ 2:
                    message.maintainImprovedScorch = reader.bool();
                    break;
                case /* bool weave_fire_blast */ 3:
                    message.weaveFireBlast = reader.bool();
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
        /* proto.Mage.Rotation.FireRotation.PrimarySpell primary_spell = 1; */
        if (message.primarySpell !== 0)
            writer.tag(1, WireType.Varint).int32(message.primarySpell);
        /* bool maintain_improved_scorch = 2; */
        if (message.maintainImprovedScorch !== false)
            writer.tag(2, WireType.Varint).bool(message.maintainImprovedScorch);
        /* bool weave_fire_blast = 3; */
        if (message.weaveFireBlast !== false)
            writer.tag(3, WireType.Varint).bool(message.weaveFireBlast);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Mage.Rotation.FireRotation
 */
export const Mage_Rotation_FireRotation = new Mage_Rotation_FireRotation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Mage_Rotation_FrostRotation$Type extends MessageType {
    constructor() {
        super("proto.Mage.Rotation.FrostRotation", [
            { no: 3, name: "water_elemental_disobey_chance", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value) {
        const message = { waterElementalDisobeyChance: 0 };
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
                case /* double water_elemental_disobey_chance */ 3:
                    message.waterElementalDisobeyChance = reader.double();
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
        /* double water_elemental_disobey_chance = 3; */
        if (message.waterElementalDisobeyChance !== 0)
            writer.tag(3, WireType.Bit64).double(message.waterElementalDisobeyChance);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Mage.Rotation.FrostRotation
 */
export const Mage_Rotation_FrostRotation = new Mage_Rotation_FrostRotation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Mage_Rotation_AoeRotation$Type extends MessageType {
    constructor() {
        super("proto.Mage.Rotation.AoeRotation", [
            { no: 1, name: "rotation", kind: "enum", T: () => ["proto.Mage.Rotation.AoeRotation.Rotation", Mage_Rotation_AoeRotation_Rotation] }
        ]);
    }
    create(value) {
        const message = { rotation: 0 };
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
                case /* proto.Mage.Rotation.AoeRotation.Rotation rotation */ 1:
                    message.rotation = reader.int32();
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
        /* proto.Mage.Rotation.AoeRotation.Rotation rotation = 1; */
        if (message.rotation !== 0)
            writer.tag(1, WireType.Varint).int32(message.rotation);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Mage.Rotation.AoeRotation
 */
export const Mage_Rotation_AoeRotation = new Mage_Rotation_AoeRotation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Mage_Options$Type extends MessageType {
    constructor() {
        super("proto.Mage.Options", [
            { no: 1, name: "armor", kind: "enum", T: () => ["proto.Mage.Options.ArmorType", Mage_Options_ArmorType] },
            { no: 2, name: "evocation_ticks", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { armor: 0, evocationTicks: 0 };
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
                case /* proto.Mage.Options.ArmorType armor */ 1:
                    message.armor = reader.int32();
                    break;
                case /* int32 evocation_ticks */ 2:
                    message.evocationTicks = reader.int32();
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
        /* proto.Mage.Options.ArmorType armor = 1; */
        if (message.armor !== 0)
            writer.tag(1, WireType.Varint).int32(message.armor);
        /* int32 evocation_ticks = 2; */
        if (message.evocationTicks !== 0)
            writer.tag(2, WireType.Varint).int32(message.evocationTicks);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Mage.Options
 */
export const Mage_Options = new Mage_Options$Type();
