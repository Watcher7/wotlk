import { WireType } from '/wotlk/protobuf-ts/index.js';
import { UnknownFieldHandler } from '/wotlk/protobuf-ts/index.js';
import { reflectionMergePartial } from '/wotlk/protobuf-ts/index.js';
import { MESSAGE_TYPE } from '/wotlk/protobuf-ts/index.js';
import { MessageType } from '/wotlk/protobuf-ts/index.js';
/**
 * @generated from protobuf enum proto.Warlock.Rotation.Preset
 */
export var Warlock_Rotation_Preset;
(function (Warlock_Rotation_Preset) {
    /**
     * @generated from protobuf enum value: Manual = 0;
     */
    Warlock_Rotation_Preset[Warlock_Rotation_Preset["Manual"] = 0] = "Manual";
    /**
     * @generated from protobuf enum value: Automatic = 1;
     */
    Warlock_Rotation_Preset[Warlock_Rotation_Preset["Automatic"] = 1] = "Automatic";
})(Warlock_Rotation_Preset || (Warlock_Rotation_Preset = {}));
/**
 * @generated from protobuf enum proto.Warlock.Rotation.Type
 */
export var Warlock_Rotation_Type;
(function (Warlock_Rotation_Type) {
    /**
     * @generated from protobuf enum value: Affliction = 0;
     */
    Warlock_Rotation_Type[Warlock_Rotation_Type["Affliction"] = 0] = "Affliction";
    /**
     * @generated from protobuf enum value: Demonology = 1;
     */
    Warlock_Rotation_Type[Warlock_Rotation_Type["Demonology"] = 1] = "Demonology";
    /**
     * @generated from protobuf enum value: Destruction = 2;
     */
    Warlock_Rotation_Type[Warlock_Rotation_Type["Destruction"] = 2] = "Destruction";
})(Warlock_Rotation_Type || (Warlock_Rotation_Type = {}));
/**
 * @generated from protobuf enum proto.Warlock.Rotation.PrimarySpell
 */
export var Warlock_Rotation_PrimarySpell;
(function (Warlock_Rotation_PrimarySpell) {
    /**
     * @generated from protobuf enum value: UnknownSpell = 0;
     */
    Warlock_Rotation_PrimarySpell[Warlock_Rotation_PrimarySpell["UnknownSpell"] = 0] = "UnknownSpell";
    /**
     * @generated from protobuf enum value: ShadowBolt = 1;
     */
    Warlock_Rotation_PrimarySpell[Warlock_Rotation_PrimarySpell["ShadowBolt"] = 1] = "ShadowBolt";
    /**
     * @generated from protobuf enum value: Incinerate = 2;
     */
    Warlock_Rotation_PrimarySpell[Warlock_Rotation_PrimarySpell["Incinerate"] = 2] = "Incinerate";
    /**
     * @generated from protobuf enum value: Seed = 3;
     */
    Warlock_Rotation_PrimarySpell[Warlock_Rotation_PrimarySpell["Seed"] = 3] = "Seed";
})(Warlock_Rotation_PrimarySpell || (Warlock_Rotation_PrimarySpell = {}));
/**
 * @generated from protobuf enum proto.Warlock.Rotation.Curse
 */
export var Warlock_Rotation_Curse;
(function (Warlock_Rotation_Curse) {
    /**
     * @generated from protobuf enum value: NoCurse = 0;
     */
    Warlock_Rotation_Curse[Warlock_Rotation_Curse["NoCurse"] = 0] = "NoCurse";
    /**
     * @generated from protobuf enum value: Elements = 1;
     */
    Warlock_Rotation_Curse[Warlock_Rotation_Curse["Elements"] = 1] = "Elements";
    /**
     * @generated from protobuf enum value: Weakness = 2;
     */
    Warlock_Rotation_Curse[Warlock_Rotation_Curse["Weakness"] = 2] = "Weakness";
    /**
     * @generated from protobuf enum value: Doom = 3;
     */
    Warlock_Rotation_Curse[Warlock_Rotation_Curse["Doom"] = 3] = "Doom";
    /**
     * @generated from protobuf enum value: Agony = 4;
     */
    Warlock_Rotation_Curse[Warlock_Rotation_Curse["Agony"] = 4] = "Agony";
    /**
     * @generated from protobuf enum value: Tongues = 5;
     */
    Warlock_Rotation_Curse[Warlock_Rotation_Curse["Tongues"] = 5] = "Tongues";
})(Warlock_Rotation_Curse || (Warlock_Rotation_Curse = {}));
/**
 * @generated from protobuf enum proto.Warlock.Rotation.SecondaryDot
 */
export var Warlock_Rotation_SecondaryDot;
(function (Warlock_Rotation_SecondaryDot) {
    /**
     * @generated from protobuf enum value: NoSecondaryDot = 0;
     */
    Warlock_Rotation_SecondaryDot[Warlock_Rotation_SecondaryDot["NoSecondaryDot"] = 0] = "NoSecondaryDot";
    /**
     * @generated from protobuf enum value: Immolate = 1;
     */
    Warlock_Rotation_SecondaryDot[Warlock_Rotation_SecondaryDot["Immolate"] = 1] = "Immolate";
    /**
     * @generated from protobuf enum value: UnstableAffliction = 2;
     */
    Warlock_Rotation_SecondaryDot[Warlock_Rotation_SecondaryDot["UnstableAffliction"] = 2] = "UnstableAffliction";
})(Warlock_Rotation_SecondaryDot || (Warlock_Rotation_SecondaryDot = {}));
/**
 * @generated from protobuf enum proto.Warlock.Rotation.SpecSpell
 */
export var Warlock_Rotation_SpecSpell;
(function (Warlock_Rotation_SpecSpell) {
    /**
     * @generated from protobuf enum value: NoSpecSpell = 0;
     */
    Warlock_Rotation_SpecSpell[Warlock_Rotation_SpecSpell["NoSpecSpell"] = 0] = "NoSpecSpell";
    /**
     * @generated from protobuf enum value: ChaosBolt = 1;
     */
    Warlock_Rotation_SpecSpell[Warlock_Rotation_SpecSpell["ChaosBolt"] = 1] = "ChaosBolt";
    /**
     * @generated from protobuf enum value: Haunt = 2;
     */
    Warlock_Rotation_SpecSpell[Warlock_Rotation_SpecSpell["Haunt"] = 2] = "Haunt";
})(Warlock_Rotation_SpecSpell || (Warlock_Rotation_SpecSpell = {}));
/**
 * @generated from protobuf enum proto.Warlock.Options.Summon
 */
export var Warlock_Options_Summon;
(function (Warlock_Options_Summon) {
    /**
     * @generated from protobuf enum value: NoSummon = 0;
     */
    Warlock_Options_Summon[Warlock_Options_Summon["NoSummon"] = 0] = "NoSummon";
    /**
     * @generated from protobuf enum value: Imp = 1;
     */
    Warlock_Options_Summon[Warlock_Options_Summon["Imp"] = 1] = "Imp";
    /**
     * @generated from protobuf enum value: Voidwalker = 2;
     */
    Warlock_Options_Summon[Warlock_Options_Summon["Voidwalker"] = 2] = "Voidwalker";
    /**
     * @generated from protobuf enum value: Succubus = 3;
     */
    Warlock_Options_Summon[Warlock_Options_Summon["Succubus"] = 3] = "Succubus";
    /**
     * @generated from protobuf enum value: Felhunter = 4;
     */
    Warlock_Options_Summon[Warlock_Options_Summon["Felhunter"] = 4] = "Felhunter";
    /**
     * @generated from protobuf enum value: Felguard = 5;
     */
    Warlock_Options_Summon[Warlock_Options_Summon["Felguard"] = 5] = "Felguard";
})(Warlock_Options_Summon || (Warlock_Options_Summon = {}));
/**
 * @generated from protobuf enum proto.Warlock.Options.Armor
 */
export var Warlock_Options_Armor;
(function (Warlock_Options_Armor) {
    /**
     * @generated from protobuf enum value: NoArmor = 0;
     */
    Warlock_Options_Armor[Warlock_Options_Armor["NoArmor"] = 0] = "NoArmor";
    /**
     * @generated from protobuf enum value: FelArmor = 1;
     */
    Warlock_Options_Armor[Warlock_Options_Armor["FelArmor"] = 1] = "FelArmor";
    /**
     * @generated from protobuf enum value: DemonArmor = 2;
     */
    Warlock_Options_Armor[Warlock_Options_Armor["DemonArmor"] = 2] = "DemonArmor";
})(Warlock_Options_Armor || (Warlock_Options_Armor = {}));
/**
 * @generated from protobuf enum proto.Warlock.Options.WeaponImbue
 */
export var Warlock_Options_WeaponImbue;
(function (Warlock_Options_WeaponImbue) {
    /**
     * @generated from protobuf enum value: NoWeaponImbue = 0;
     */
    Warlock_Options_WeaponImbue[Warlock_Options_WeaponImbue["NoWeaponImbue"] = 0] = "NoWeaponImbue";
    /**
     * @generated from protobuf enum value: GrandSpellstone = 1;
     */
    Warlock_Options_WeaponImbue[Warlock_Options_WeaponImbue["GrandSpellstone"] = 1] = "GrandSpellstone";
    /**
     * @generated from protobuf enum value: GrandFirestone = 2;
     */
    Warlock_Options_WeaponImbue[Warlock_Options_WeaponImbue["GrandFirestone"] = 2] = "GrandFirestone";
})(Warlock_Options_WeaponImbue || (Warlock_Options_WeaponImbue = {}));
/**
 * @generated from protobuf enum proto.WarlockMajorGlyph
 */
export var WarlockMajorGlyph;
(function (WarlockMajorGlyph) {
    /**
     * @generated from protobuf enum value: WarlockMajorGlyphNone = 0;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["WarlockMajorGlyphNone"] = 0] = "WarlockMajorGlyphNone";
    /**
     * @generated from protobuf enum value: GlyphOfChaosBolt = 45781;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfChaosBolt"] = 45781] = "GlyphOfChaosBolt";
    /**
     * @generated from protobuf enum value: GlyphOfConflagrate = 42454;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfConflagrate"] = 42454] = "GlyphOfConflagrate";
    /**
     * @generated from protobuf enum value: GlyphOfCorruption = 42455;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfCorruption"] = 42455] = "GlyphOfCorruption";
    /**
     * @generated from protobuf enum value: GlyphOfCurseOfAgony = 42456;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfCurseOfAgony"] = 42456] = "GlyphOfCurseOfAgony";
    /**
     * @generated from protobuf enum value: GlyphOfDeathCoil = 42457;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfDeathCoil"] = 42457] = "GlyphOfDeathCoil";
    /**
     * @generated from protobuf enum value: GlyphOfDemonicCircle = 45782;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfDemonicCircle"] = 45782] = "GlyphOfDemonicCircle";
    /**
     * @generated from protobuf enum value: GlyphOfFear = 42458;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfFear"] = 42458] = "GlyphOfFear";
    /**
     * @generated from protobuf enum value: GlyphOfFelguard = 42459;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfFelguard"] = 42459] = "GlyphOfFelguard";
    /**
     * @generated from protobuf enum value: GlyphOfFelhunter = 42460;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfFelhunter"] = 42460] = "GlyphOfFelhunter";
    /**
     * @generated from protobuf enum value: GlyphOfHaunt = 45779;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfHaunt"] = 45779] = "GlyphOfHaunt";
    /**
     * @generated from protobuf enum value: GlyphOfHealthFunnel = 42461;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfHealthFunnel"] = 42461] = "GlyphOfHealthFunnel";
    /**
     * @generated from protobuf enum value: GlyphOfHealthstone = 42462;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfHealthstone"] = 42462] = "GlyphOfHealthstone";
    /**
     * @generated from protobuf enum value: GlyphOfHowlOfTerror = 42463;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfHowlOfTerror"] = 42463] = "GlyphOfHowlOfTerror";
    /**
     * @generated from protobuf enum value: GlyphOfImmolate = 42464;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfImmolate"] = 42464] = "GlyphOfImmolate";
    /**
     * @generated from protobuf enum value: GlyphOfImp = 42465;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfImp"] = 42465] = "GlyphOfImp";
    /**
     * @generated from protobuf enum value: GlyphOfIncinerate = 42453;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfIncinerate"] = 42453] = "GlyphOfIncinerate";
    /**
     * @generated from protobuf enum value: GlyphOfLifeTap = 45785;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfLifeTap"] = 45785] = "GlyphOfLifeTap";
    /**
     * @generated from protobuf enum value: GlyphOfMetamorphosis = 45780;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfMetamorphosis"] = 45780] = "GlyphOfMetamorphosis";
    /**
     * @generated from protobuf enum value: GlyphOfQuickDecay = 50077;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfQuickDecay"] = 50077] = "GlyphOfQuickDecay";
    /**
     * @generated from protobuf enum value: GlyphOfSearingPain = 42466;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfSearingPain"] = 42466] = "GlyphOfSearingPain";
    /**
     * @generated from protobuf enum value: GlyphOfShadowBolt = 42467;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfShadowBolt"] = 42467] = "GlyphOfShadowBolt";
    /**
     * @generated from protobuf enum value: GlyphOfShadowburn = 42468;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfShadowburn"] = 42468] = "GlyphOfShadowburn";
    /**
     * @generated from protobuf enum value: GlyphOfShadowflame = 45783;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfShadowflame"] = 45783] = "GlyphOfShadowflame";
    /**
     * @generated from protobuf enum value: GlyphOfSiphonLife = 42469;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfSiphonLife"] = 42469] = "GlyphOfSiphonLife";
    /**
     * @generated from protobuf enum value: GlyphOfSoulLink = 45789;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfSoulLink"] = 45789] = "GlyphOfSoulLink";
    /**
     * @generated from protobuf enum value: GlyphOfSoulstone = 42470;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfSoulstone"] = 42470] = "GlyphOfSoulstone";
    /**
     * @generated from protobuf enum value: GlyphOfSuccubus = 42471;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfSuccubus"] = 42471] = "GlyphOfSuccubus";
    /**
     * @generated from protobuf enum value: GlyphOfUnstableAffliction = 42472;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfUnstableAffliction"] = 42472] = "GlyphOfUnstableAffliction";
    /**
     * @generated from protobuf enum value: GlyphOfVoidwalker = 42473;
     */
    WarlockMajorGlyph[WarlockMajorGlyph["GlyphOfVoidwalker"] = 42473] = "GlyphOfVoidwalker";
})(WarlockMajorGlyph || (WarlockMajorGlyph = {}));
/**
 * @generated from protobuf enum proto.WarlockMinorGlyph
 */
export var WarlockMinorGlyph;
(function (WarlockMinorGlyph) {
    /**
     * @generated from protobuf enum value: WarlockMinorGlyphNone = 0;
     */
    WarlockMinorGlyph[WarlockMinorGlyph["WarlockMinorGlyphNone"] = 0] = "WarlockMinorGlyphNone";
    /**
     * @generated from protobuf enum value: GlyphOfCurseOfExhausion = 43392;
     */
    WarlockMinorGlyph[WarlockMinorGlyph["GlyphOfCurseOfExhausion"] = 43392] = "GlyphOfCurseOfExhausion";
    /**
     * @generated from protobuf enum value: GlyphOfDrainSoul = 43390;
     */
    WarlockMinorGlyph[WarlockMinorGlyph["GlyphOfDrainSoul"] = 43390] = "GlyphOfDrainSoul";
    /**
     * @generated from protobuf enum value: GlyphOfEnslaveDemon = 43393;
     */
    WarlockMinorGlyph[WarlockMinorGlyph["GlyphOfEnslaveDemon"] = 43393] = "GlyphOfEnslaveDemon";
    /**
     * @generated from protobuf enum value: GlyphOfKilrogg = 43391;
     */
    WarlockMinorGlyph[WarlockMinorGlyph["GlyphOfKilrogg"] = 43391] = "GlyphOfKilrogg";
    /**
     * @generated from protobuf enum value: GlyphOfSouls = 43394;
     */
    WarlockMinorGlyph[WarlockMinorGlyph["GlyphOfSouls"] = 43394] = "GlyphOfSouls";
    /**
     * @generated from protobuf enum value: GlyphOfUnendingBreath = 43389;
     */
    WarlockMinorGlyph[WarlockMinorGlyph["GlyphOfUnendingBreath"] = 43389] = "GlyphOfUnendingBreath";
})(WarlockMinorGlyph || (WarlockMinorGlyph = {}));
// @generated message type with reflection information, may provide speed optimized methods
class WarlockTalents$Type extends MessageType {
    constructor() {
        super("proto.WarlockTalents", [
            { no: 1, name: "improved_curse_of_agony", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "suppression", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "improved_corruption", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "improved_curse_of_weakness", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "improved_drain_soul", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "improved_life_tap", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "soul_siphon", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "improved_fear", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "fel_concentration", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "amplify_curse", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "grim_reach", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "nightfall", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "empowered_corruption", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "shadow_embrace", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "siphon_life", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 16, name: "curse_of_exhaustion", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 17, name: "improved_felhunter", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 18, name: "shadow_mastery", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 19, name: "eradication", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 20, name: "contagion", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 21, name: "dark_pact", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 22, name: "improved_howl_of_terror", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 23, name: "malediction", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 24, name: "deaths_embrace", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 25, name: "unstable_affliction", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 26, name: "pandemic", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 27, name: "everlasting_affliction", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 28, name: "haunt", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 29, name: "improved_healthstone", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 30, name: "improved_imp", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 31, name: "demonic_embrace", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 32, name: "fel_synergy", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 33, name: "improved_health_funnel", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 34, name: "demonic_brutality", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 35, name: "fel_vitality", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 36, name: "improved_sayaad", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 37, name: "soul_link", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 38, name: "fel_domination", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 39, name: "demonic_aegis", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 40, name: "unholy_power", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 41, name: "master_summoner", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 42, name: "mana_feed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 43, name: "master_conjuror", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 44, name: "master_demonologist", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 45, name: "molten_core", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 46, name: "demonic_resilience", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 47, name: "demonic_empowerment", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 48, name: "demonic_knowledge", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 49, name: "demonic_tactics", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 50, name: "decimation", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 51, name: "improved_demonic_tactics", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 52, name: "summon_felguard", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 53, name: "nemesis", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 54, name: "demonic_pact", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 55, name: "metamorphosis", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 56, name: "improved_shadow_bolt", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 57, name: "bane", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 58, name: "aftermath", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 59, name: "molten_skin", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 60, name: "cataclysm", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 61, name: "demonic_power", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 62, name: "shadowburn", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 63, name: "ruin", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 64, name: "intensity", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 65, name: "destructive_reach", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 66, name: "improved_searing_pain", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 67, name: "backlash", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 68, name: "improved_immolate", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 69, name: "devastation", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 70, name: "nether_protection", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 71, name: "emberstorm", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 72, name: "conflagrate", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 73, name: "soul_leech", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 74, name: "pyroclasm", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 75, name: "shadow_and_flame", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 76, name: "improved_soul_leech", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 77, name: "backdraft", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 78, name: "shadowfury", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 79, name: "empowered_imp", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 80, name: "fire_and_brimstone", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 81, name: "chaos_bolt", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { improvedCurseOfAgony: 0, suppression: 0, improvedCorruption: 0, improvedCurseOfWeakness: 0, improvedDrainSoul: 0, improvedLifeTap: 0, soulSiphon: 0, improvedFear: 0, felConcentration: 0, amplifyCurse: false, grimReach: 0, nightfall: 0, empoweredCorruption: 0, shadowEmbrace: 0, siphonLife: false, curseOfExhaustion: false, improvedFelhunter: 0, shadowMastery: 0, eradication: 0, contagion: 0, darkPact: false, improvedHowlOfTerror: 0, malediction: 0, deathsEmbrace: 0, unstableAffliction: false, pandemic: false, everlastingAffliction: 0, haunt: false, improvedHealthstone: 0, improvedImp: 0, demonicEmbrace: 0, felSynergy: 0, improvedHealthFunnel: 0, demonicBrutality: 0, felVitality: 0, improvedSayaad: 0, soulLink: false, felDomination: false, demonicAegis: 0, unholyPower: 0, masterSummoner: 0, manaFeed: false, masterConjuror: 0, masterDemonologist: 0, moltenCore: 0, demonicResilience: 0, demonicEmpowerment: false, demonicKnowledge: 0, demonicTactics: 0, decimation: 0, improvedDemonicTactics: 0, summonFelguard: false, nemesis: 0, demonicPact: 0, metamorphosis: false, improvedShadowBolt: 0, bane: 0, aftermath: 0, moltenSkin: 0, cataclysm: 0, demonicPower: 0, shadowburn: false, ruin: 0, intensity: 0, destructiveReach: 0, improvedSearingPain: 0, backlash: 0, improvedImmolate: 0, devastation: false, netherProtection: 0, emberstorm: 0, conflagrate: false, soulLeech: 0, pyroclasm: 0, shadowAndFlame: 0, improvedSoulLeech: 0, backdraft: 0, shadowfury: false, empoweredImp: 0, fireAndBrimstone: 0, chaosBolt: false };
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
                case /* int32 improved_curse_of_agony */ 1:
                    message.improvedCurseOfAgony = reader.int32();
                    break;
                case /* int32 suppression */ 2:
                    message.suppression = reader.int32();
                    break;
                case /* int32 improved_corruption */ 3:
                    message.improvedCorruption = reader.int32();
                    break;
                case /* int32 improved_curse_of_weakness */ 4:
                    message.improvedCurseOfWeakness = reader.int32();
                    break;
                case /* int32 improved_drain_soul */ 5:
                    message.improvedDrainSoul = reader.int32();
                    break;
                case /* int32 improved_life_tap */ 6:
                    message.improvedLifeTap = reader.int32();
                    break;
                case /* int32 soul_siphon */ 7:
                    message.soulSiphon = reader.int32();
                    break;
                case /* int32 improved_fear */ 8:
                    message.improvedFear = reader.int32();
                    break;
                case /* int32 fel_concentration */ 9:
                    message.felConcentration = reader.int32();
                    break;
                case /* bool amplify_curse */ 10:
                    message.amplifyCurse = reader.bool();
                    break;
                case /* int32 grim_reach */ 11:
                    message.grimReach = reader.int32();
                    break;
                case /* int32 nightfall */ 12:
                    message.nightfall = reader.int32();
                    break;
                case /* int32 empowered_corruption */ 13:
                    message.empoweredCorruption = reader.int32();
                    break;
                case /* int32 shadow_embrace */ 14:
                    message.shadowEmbrace = reader.int32();
                    break;
                case /* bool siphon_life */ 15:
                    message.siphonLife = reader.bool();
                    break;
                case /* bool curse_of_exhaustion */ 16:
                    message.curseOfExhaustion = reader.bool();
                    break;
                case /* int32 improved_felhunter */ 17:
                    message.improvedFelhunter = reader.int32();
                    break;
                case /* int32 shadow_mastery */ 18:
                    message.shadowMastery = reader.int32();
                    break;
                case /* int32 eradication */ 19:
                    message.eradication = reader.int32();
                    break;
                case /* int32 contagion */ 20:
                    message.contagion = reader.int32();
                    break;
                case /* bool dark_pact */ 21:
                    message.darkPact = reader.bool();
                    break;
                case /* int32 improved_howl_of_terror */ 22:
                    message.improvedHowlOfTerror = reader.int32();
                    break;
                case /* int32 malediction */ 23:
                    message.malediction = reader.int32();
                    break;
                case /* int32 deaths_embrace */ 24:
                    message.deathsEmbrace = reader.int32();
                    break;
                case /* bool unstable_affliction */ 25:
                    message.unstableAffliction = reader.bool();
                    break;
                case /* bool pandemic */ 26:
                    message.pandemic = reader.bool();
                    break;
                case /* int32 everlasting_affliction */ 27:
                    message.everlastingAffliction = reader.int32();
                    break;
                case /* bool haunt */ 28:
                    message.haunt = reader.bool();
                    break;
                case /* int32 improved_healthstone */ 29:
                    message.improvedHealthstone = reader.int32();
                    break;
                case /* int32 improved_imp */ 30:
                    message.improvedImp = reader.int32();
                    break;
                case /* int32 demonic_embrace */ 31:
                    message.demonicEmbrace = reader.int32();
                    break;
                case /* int32 fel_synergy */ 32:
                    message.felSynergy = reader.int32();
                    break;
                case /* int32 improved_health_funnel */ 33:
                    message.improvedHealthFunnel = reader.int32();
                    break;
                case /* int32 demonic_brutality */ 34:
                    message.demonicBrutality = reader.int32();
                    break;
                case /* int32 fel_vitality */ 35:
                    message.felVitality = reader.int32();
                    break;
                case /* int32 improved_sayaad */ 36:
                    message.improvedSayaad = reader.int32();
                    break;
                case /* bool soul_link */ 37:
                    message.soulLink = reader.bool();
                    break;
                case /* bool fel_domination */ 38:
                    message.felDomination = reader.bool();
                    break;
                case /* int32 demonic_aegis */ 39:
                    message.demonicAegis = reader.int32();
                    break;
                case /* int32 unholy_power */ 40:
                    message.unholyPower = reader.int32();
                    break;
                case /* int32 master_summoner */ 41:
                    message.masterSummoner = reader.int32();
                    break;
                case /* bool mana_feed */ 42:
                    message.manaFeed = reader.bool();
                    break;
                case /* int32 master_conjuror */ 43:
                    message.masterConjuror = reader.int32();
                    break;
                case /* int32 master_demonologist */ 44:
                    message.masterDemonologist = reader.int32();
                    break;
                case /* int32 molten_core */ 45:
                    message.moltenCore = reader.int32();
                    break;
                case /* int32 demonic_resilience */ 46:
                    message.demonicResilience = reader.int32();
                    break;
                case /* bool demonic_empowerment */ 47:
                    message.demonicEmpowerment = reader.bool();
                    break;
                case /* int32 demonic_knowledge */ 48:
                    message.demonicKnowledge = reader.int32();
                    break;
                case /* int32 demonic_tactics */ 49:
                    message.demonicTactics = reader.int32();
                    break;
                case /* int32 decimation */ 50:
                    message.decimation = reader.int32();
                    break;
                case /* int32 improved_demonic_tactics */ 51:
                    message.improvedDemonicTactics = reader.int32();
                    break;
                case /* bool summon_felguard */ 52:
                    message.summonFelguard = reader.bool();
                    break;
                case /* int32 nemesis */ 53:
                    message.nemesis = reader.int32();
                    break;
                case /* int32 demonic_pact */ 54:
                    message.demonicPact = reader.int32();
                    break;
                case /* bool metamorphosis */ 55:
                    message.metamorphosis = reader.bool();
                    break;
                case /* int32 improved_shadow_bolt */ 56:
                    message.improvedShadowBolt = reader.int32();
                    break;
                case /* int32 bane */ 57:
                    message.bane = reader.int32();
                    break;
                case /* int32 aftermath */ 58:
                    message.aftermath = reader.int32();
                    break;
                case /* int32 molten_skin */ 59:
                    message.moltenSkin = reader.int32();
                    break;
                case /* int32 cataclysm */ 60:
                    message.cataclysm = reader.int32();
                    break;
                case /* int32 demonic_power */ 61:
                    message.demonicPower = reader.int32();
                    break;
                case /* bool shadowburn */ 62:
                    message.shadowburn = reader.bool();
                    break;
                case /* int32 ruin */ 63:
                    message.ruin = reader.int32();
                    break;
                case /* int32 intensity */ 64:
                    message.intensity = reader.int32();
                    break;
                case /* int32 destructive_reach */ 65:
                    message.destructiveReach = reader.int32();
                    break;
                case /* int32 improved_searing_pain */ 66:
                    message.improvedSearingPain = reader.int32();
                    break;
                case /* int32 backlash */ 67:
                    message.backlash = reader.int32();
                    break;
                case /* int32 improved_immolate */ 68:
                    message.improvedImmolate = reader.int32();
                    break;
                case /* bool devastation */ 69:
                    message.devastation = reader.bool();
                    break;
                case /* int32 nether_protection */ 70:
                    message.netherProtection = reader.int32();
                    break;
                case /* int32 emberstorm */ 71:
                    message.emberstorm = reader.int32();
                    break;
                case /* bool conflagrate */ 72:
                    message.conflagrate = reader.bool();
                    break;
                case /* int32 soul_leech */ 73:
                    message.soulLeech = reader.int32();
                    break;
                case /* int32 pyroclasm */ 74:
                    message.pyroclasm = reader.int32();
                    break;
                case /* int32 shadow_and_flame */ 75:
                    message.shadowAndFlame = reader.int32();
                    break;
                case /* int32 improved_soul_leech */ 76:
                    message.improvedSoulLeech = reader.int32();
                    break;
                case /* int32 backdraft */ 77:
                    message.backdraft = reader.int32();
                    break;
                case /* bool shadowfury */ 78:
                    message.shadowfury = reader.bool();
                    break;
                case /* int32 empowered_imp */ 79:
                    message.empoweredImp = reader.int32();
                    break;
                case /* int32 fire_and_brimstone */ 80:
                    message.fireAndBrimstone = reader.int32();
                    break;
                case /* bool chaos_bolt */ 81:
                    message.chaosBolt = reader.bool();
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
        /* int32 improved_curse_of_agony = 1; */
        if (message.improvedCurseOfAgony !== 0)
            writer.tag(1, WireType.Varint).int32(message.improvedCurseOfAgony);
        /* int32 suppression = 2; */
        if (message.suppression !== 0)
            writer.tag(2, WireType.Varint).int32(message.suppression);
        /* int32 improved_corruption = 3; */
        if (message.improvedCorruption !== 0)
            writer.tag(3, WireType.Varint).int32(message.improvedCorruption);
        /* int32 improved_curse_of_weakness = 4; */
        if (message.improvedCurseOfWeakness !== 0)
            writer.tag(4, WireType.Varint).int32(message.improvedCurseOfWeakness);
        /* int32 improved_drain_soul = 5; */
        if (message.improvedDrainSoul !== 0)
            writer.tag(5, WireType.Varint).int32(message.improvedDrainSoul);
        /* int32 improved_life_tap = 6; */
        if (message.improvedLifeTap !== 0)
            writer.tag(6, WireType.Varint).int32(message.improvedLifeTap);
        /* int32 soul_siphon = 7; */
        if (message.soulSiphon !== 0)
            writer.tag(7, WireType.Varint).int32(message.soulSiphon);
        /* int32 improved_fear = 8; */
        if (message.improvedFear !== 0)
            writer.tag(8, WireType.Varint).int32(message.improvedFear);
        /* int32 fel_concentration = 9; */
        if (message.felConcentration !== 0)
            writer.tag(9, WireType.Varint).int32(message.felConcentration);
        /* bool amplify_curse = 10; */
        if (message.amplifyCurse !== false)
            writer.tag(10, WireType.Varint).bool(message.amplifyCurse);
        /* int32 grim_reach = 11; */
        if (message.grimReach !== 0)
            writer.tag(11, WireType.Varint).int32(message.grimReach);
        /* int32 nightfall = 12; */
        if (message.nightfall !== 0)
            writer.tag(12, WireType.Varint).int32(message.nightfall);
        /* int32 empowered_corruption = 13; */
        if (message.empoweredCorruption !== 0)
            writer.tag(13, WireType.Varint).int32(message.empoweredCorruption);
        /* int32 shadow_embrace = 14; */
        if (message.shadowEmbrace !== 0)
            writer.tag(14, WireType.Varint).int32(message.shadowEmbrace);
        /* bool siphon_life = 15; */
        if (message.siphonLife !== false)
            writer.tag(15, WireType.Varint).bool(message.siphonLife);
        /* bool curse_of_exhaustion = 16; */
        if (message.curseOfExhaustion !== false)
            writer.tag(16, WireType.Varint).bool(message.curseOfExhaustion);
        /* int32 improved_felhunter = 17; */
        if (message.improvedFelhunter !== 0)
            writer.tag(17, WireType.Varint).int32(message.improvedFelhunter);
        /* int32 shadow_mastery = 18; */
        if (message.shadowMastery !== 0)
            writer.tag(18, WireType.Varint).int32(message.shadowMastery);
        /* int32 eradication = 19; */
        if (message.eradication !== 0)
            writer.tag(19, WireType.Varint).int32(message.eradication);
        /* int32 contagion = 20; */
        if (message.contagion !== 0)
            writer.tag(20, WireType.Varint).int32(message.contagion);
        /* bool dark_pact = 21; */
        if (message.darkPact !== false)
            writer.tag(21, WireType.Varint).bool(message.darkPact);
        /* int32 improved_howl_of_terror = 22; */
        if (message.improvedHowlOfTerror !== 0)
            writer.tag(22, WireType.Varint).int32(message.improvedHowlOfTerror);
        /* int32 malediction = 23; */
        if (message.malediction !== 0)
            writer.tag(23, WireType.Varint).int32(message.malediction);
        /* int32 deaths_embrace = 24; */
        if (message.deathsEmbrace !== 0)
            writer.tag(24, WireType.Varint).int32(message.deathsEmbrace);
        /* bool unstable_affliction = 25; */
        if (message.unstableAffliction !== false)
            writer.tag(25, WireType.Varint).bool(message.unstableAffliction);
        /* bool pandemic = 26; */
        if (message.pandemic !== false)
            writer.tag(26, WireType.Varint).bool(message.pandemic);
        /* int32 everlasting_affliction = 27; */
        if (message.everlastingAffliction !== 0)
            writer.tag(27, WireType.Varint).int32(message.everlastingAffliction);
        /* bool haunt = 28; */
        if (message.haunt !== false)
            writer.tag(28, WireType.Varint).bool(message.haunt);
        /* int32 improved_healthstone = 29; */
        if (message.improvedHealthstone !== 0)
            writer.tag(29, WireType.Varint).int32(message.improvedHealthstone);
        /* int32 improved_imp = 30; */
        if (message.improvedImp !== 0)
            writer.tag(30, WireType.Varint).int32(message.improvedImp);
        /* int32 demonic_embrace = 31; */
        if (message.demonicEmbrace !== 0)
            writer.tag(31, WireType.Varint).int32(message.demonicEmbrace);
        /* int32 fel_synergy = 32; */
        if (message.felSynergy !== 0)
            writer.tag(32, WireType.Varint).int32(message.felSynergy);
        /* int32 improved_health_funnel = 33; */
        if (message.improvedHealthFunnel !== 0)
            writer.tag(33, WireType.Varint).int32(message.improvedHealthFunnel);
        /* int32 demonic_brutality = 34; */
        if (message.demonicBrutality !== 0)
            writer.tag(34, WireType.Varint).int32(message.demonicBrutality);
        /* int32 fel_vitality = 35; */
        if (message.felVitality !== 0)
            writer.tag(35, WireType.Varint).int32(message.felVitality);
        /* int32 improved_sayaad = 36; */
        if (message.improvedSayaad !== 0)
            writer.tag(36, WireType.Varint).int32(message.improvedSayaad);
        /* bool soul_link = 37; */
        if (message.soulLink !== false)
            writer.tag(37, WireType.Varint).bool(message.soulLink);
        /* bool fel_domination = 38; */
        if (message.felDomination !== false)
            writer.tag(38, WireType.Varint).bool(message.felDomination);
        /* int32 demonic_aegis = 39; */
        if (message.demonicAegis !== 0)
            writer.tag(39, WireType.Varint).int32(message.demonicAegis);
        /* int32 unholy_power = 40; */
        if (message.unholyPower !== 0)
            writer.tag(40, WireType.Varint).int32(message.unholyPower);
        /* int32 master_summoner = 41; */
        if (message.masterSummoner !== 0)
            writer.tag(41, WireType.Varint).int32(message.masterSummoner);
        /* bool mana_feed = 42; */
        if (message.manaFeed !== false)
            writer.tag(42, WireType.Varint).bool(message.manaFeed);
        /* int32 master_conjuror = 43; */
        if (message.masterConjuror !== 0)
            writer.tag(43, WireType.Varint).int32(message.masterConjuror);
        /* int32 master_demonologist = 44; */
        if (message.masterDemonologist !== 0)
            writer.tag(44, WireType.Varint).int32(message.masterDemonologist);
        /* int32 molten_core = 45; */
        if (message.moltenCore !== 0)
            writer.tag(45, WireType.Varint).int32(message.moltenCore);
        /* int32 demonic_resilience = 46; */
        if (message.demonicResilience !== 0)
            writer.tag(46, WireType.Varint).int32(message.demonicResilience);
        /* bool demonic_empowerment = 47; */
        if (message.demonicEmpowerment !== false)
            writer.tag(47, WireType.Varint).bool(message.demonicEmpowerment);
        /* int32 demonic_knowledge = 48; */
        if (message.demonicKnowledge !== 0)
            writer.tag(48, WireType.Varint).int32(message.demonicKnowledge);
        /* int32 demonic_tactics = 49; */
        if (message.demonicTactics !== 0)
            writer.tag(49, WireType.Varint).int32(message.demonicTactics);
        /* int32 decimation = 50; */
        if (message.decimation !== 0)
            writer.tag(50, WireType.Varint).int32(message.decimation);
        /* int32 improved_demonic_tactics = 51; */
        if (message.improvedDemonicTactics !== 0)
            writer.tag(51, WireType.Varint).int32(message.improvedDemonicTactics);
        /* bool summon_felguard = 52; */
        if (message.summonFelguard !== false)
            writer.tag(52, WireType.Varint).bool(message.summonFelguard);
        /* int32 nemesis = 53; */
        if (message.nemesis !== 0)
            writer.tag(53, WireType.Varint).int32(message.nemesis);
        /* int32 demonic_pact = 54; */
        if (message.demonicPact !== 0)
            writer.tag(54, WireType.Varint).int32(message.demonicPact);
        /* bool metamorphosis = 55; */
        if (message.metamorphosis !== false)
            writer.tag(55, WireType.Varint).bool(message.metamorphosis);
        /* int32 improved_shadow_bolt = 56; */
        if (message.improvedShadowBolt !== 0)
            writer.tag(56, WireType.Varint).int32(message.improvedShadowBolt);
        /* int32 bane = 57; */
        if (message.bane !== 0)
            writer.tag(57, WireType.Varint).int32(message.bane);
        /* int32 aftermath = 58; */
        if (message.aftermath !== 0)
            writer.tag(58, WireType.Varint).int32(message.aftermath);
        /* int32 molten_skin = 59; */
        if (message.moltenSkin !== 0)
            writer.tag(59, WireType.Varint).int32(message.moltenSkin);
        /* int32 cataclysm = 60; */
        if (message.cataclysm !== 0)
            writer.tag(60, WireType.Varint).int32(message.cataclysm);
        /* int32 demonic_power = 61; */
        if (message.demonicPower !== 0)
            writer.tag(61, WireType.Varint).int32(message.demonicPower);
        /* bool shadowburn = 62; */
        if (message.shadowburn !== false)
            writer.tag(62, WireType.Varint).bool(message.shadowburn);
        /* int32 ruin = 63; */
        if (message.ruin !== 0)
            writer.tag(63, WireType.Varint).int32(message.ruin);
        /* int32 intensity = 64; */
        if (message.intensity !== 0)
            writer.tag(64, WireType.Varint).int32(message.intensity);
        /* int32 destructive_reach = 65; */
        if (message.destructiveReach !== 0)
            writer.tag(65, WireType.Varint).int32(message.destructiveReach);
        /* int32 improved_searing_pain = 66; */
        if (message.improvedSearingPain !== 0)
            writer.tag(66, WireType.Varint).int32(message.improvedSearingPain);
        /* int32 backlash = 67; */
        if (message.backlash !== 0)
            writer.tag(67, WireType.Varint).int32(message.backlash);
        /* int32 improved_immolate = 68; */
        if (message.improvedImmolate !== 0)
            writer.tag(68, WireType.Varint).int32(message.improvedImmolate);
        /* bool devastation = 69; */
        if (message.devastation !== false)
            writer.tag(69, WireType.Varint).bool(message.devastation);
        /* int32 nether_protection = 70; */
        if (message.netherProtection !== 0)
            writer.tag(70, WireType.Varint).int32(message.netherProtection);
        /* int32 emberstorm = 71; */
        if (message.emberstorm !== 0)
            writer.tag(71, WireType.Varint).int32(message.emberstorm);
        /* bool conflagrate = 72; */
        if (message.conflagrate !== false)
            writer.tag(72, WireType.Varint).bool(message.conflagrate);
        /* int32 soul_leech = 73; */
        if (message.soulLeech !== 0)
            writer.tag(73, WireType.Varint).int32(message.soulLeech);
        /* int32 pyroclasm = 74; */
        if (message.pyroclasm !== 0)
            writer.tag(74, WireType.Varint).int32(message.pyroclasm);
        /* int32 shadow_and_flame = 75; */
        if (message.shadowAndFlame !== 0)
            writer.tag(75, WireType.Varint).int32(message.shadowAndFlame);
        /* int32 improved_soul_leech = 76; */
        if (message.improvedSoulLeech !== 0)
            writer.tag(76, WireType.Varint).int32(message.improvedSoulLeech);
        /* int32 backdraft = 77; */
        if (message.backdraft !== 0)
            writer.tag(77, WireType.Varint).int32(message.backdraft);
        /* bool shadowfury = 78; */
        if (message.shadowfury !== false)
            writer.tag(78, WireType.Varint).bool(message.shadowfury);
        /* int32 empowered_imp = 79; */
        if (message.empoweredImp !== 0)
            writer.tag(79, WireType.Varint).int32(message.empoweredImp);
        /* int32 fire_and_brimstone = 80; */
        if (message.fireAndBrimstone !== 0)
            writer.tag(80, WireType.Varint).int32(message.fireAndBrimstone);
        /* bool chaos_bolt = 81; */
        if (message.chaosBolt !== false)
            writer.tag(81, WireType.Varint).bool(message.chaosBolt);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.WarlockTalents
 */
export const WarlockTalents = new WarlockTalents$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Warlock$Type extends MessageType {
    constructor() {
        super("proto.Warlock", [
            { no: 1, name: "rotation", kind: "message", T: () => Warlock_Rotation },
            { no: 2, name: "talents", kind: "message", T: () => WarlockTalents },
            { no: 3, name: "options", kind: "message", T: () => Warlock_Options }
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
                case /* proto.Warlock.Rotation rotation */ 1:
                    message.rotation = Warlock_Rotation.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* proto.WarlockTalents talents */ 2:
                    message.talents = WarlockTalents.internalBinaryRead(reader, reader.uint32(), options, message.talents);
                    break;
                case /* proto.Warlock.Options options */ 3:
                    message.options = Warlock_Options.internalBinaryRead(reader, reader.uint32(), options, message.options);
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
        /* proto.Warlock.Rotation rotation = 1; */
        if (message.rotation)
            Warlock_Rotation.internalBinaryWrite(message.rotation, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* proto.WarlockTalents talents = 2; */
        if (message.talents)
            WarlockTalents.internalBinaryWrite(message.talents, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* proto.Warlock.Options options = 3; */
        if (message.options)
            Warlock_Options.internalBinaryWrite(message.options, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Warlock
 */
export const Warlock = new Warlock$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Warlock_Rotation$Type extends MessageType {
    constructor() {
        super("proto.Warlock.Rotation", [
            { no: 1, name: "preset", kind: "enum", T: () => ["proto.Warlock.Rotation.Preset", Warlock_Rotation_Preset] },
            { no: 2, name: "curse", kind: "enum", T: () => ["proto.Warlock.Rotation.Curse", Warlock_Rotation_Curse] },
            { no: 3, name: "primary_spell", kind: "enum", T: () => ["proto.Warlock.Rotation.PrimarySpell", Warlock_Rotation_PrimarySpell] },
            { no: 4, name: "secondary_dot", kind: "enum", T: () => ["proto.Warlock.Rotation.SecondaryDot", Warlock_Rotation_SecondaryDot] },
            { no: 5, name: "corruption", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "detonate_seed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "spec_spell", kind: "enum", T: () => ["proto.Warlock.Rotation.SpecSpell", Warlock_Rotation_SpecSpell] },
            { no: 8, name: "type", kind: "enum", T: () => ["proto.Warlock.Rotation.Type", Warlock_Rotation_Type] }
        ]);
    }
    create(value) {
        const message = { preset: 0, curse: 0, primarySpell: 0, secondaryDot: 0, corruption: false, detonateSeed: false, specSpell: 0, type: 0 };
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
                case /* proto.Warlock.Rotation.Preset preset */ 1:
                    message.preset = reader.int32();
                    break;
                case /* proto.Warlock.Rotation.Curse curse */ 2:
                    message.curse = reader.int32();
                    break;
                case /* proto.Warlock.Rotation.PrimarySpell primary_spell */ 3:
                    message.primarySpell = reader.int32();
                    break;
                case /* proto.Warlock.Rotation.SecondaryDot secondary_dot */ 4:
                    message.secondaryDot = reader.int32();
                    break;
                case /* bool corruption */ 5:
                    message.corruption = reader.bool();
                    break;
                case /* bool detonate_seed */ 6:
                    message.detonateSeed = reader.bool();
                    break;
                case /* proto.Warlock.Rotation.SpecSpell spec_spell */ 7:
                    message.specSpell = reader.int32();
                    break;
                case /* proto.Warlock.Rotation.Type type */ 8:
                    message.type = reader.int32();
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
        /* proto.Warlock.Rotation.Preset preset = 1; */
        if (message.preset !== 0)
            writer.tag(1, WireType.Varint).int32(message.preset);
        /* proto.Warlock.Rotation.Curse curse = 2; */
        if (message.curse !== 0)
            writer.tag(2, WireType.Varint).int32(message.curse);
        /* proto.Warlock.Rotation.PrimarySpell primary_spell = 3; */
        if (message.primarySpell !== 0)
            writer.tag(3, WireType.Varint).int32(message.primarySpell);
        /* proto.Warlock.Rotation.SecondaryDot secondary_dot = 4; */
        if (message.secondaryDot !== 0)
            writer.tag(4, WireType.Varint).int32(message.secondaryDot);
        /* bool corruption = 5; */
        if (message.corruption !== false)
            writer.tag(5, WireType.Varint).bool(message.corruption);
        /* bool detonate_seed = 6; */
        if (message.detonateSeed !== false)
            writer.tag(6, WireType.Varint).bool(message.detonateSeed);
        /* proto.Warlock.Rotation.SpecSpell spec_spell = 7; */
        if (message.specSpell !== 0)
            writer.tag(7, WireType.Varint).int32(message.specSpell);
        /* proto.Warlock.Rotation.Type type = 8; */
        if (message.type !== 0)
            writer.tag(8, WireType.Varint).int32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Warlock.Rotation
 */
export const Warlock_Rotation = new Warlock_Rotation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Warlock_Options$Type extends MessageType {
    constructor() {
        super("proto.Warlock.Options", [
            { no: 1, name: "armor", kind: "enum", T: () => ["proto.Warlock.Options.Armor", Warlock_Options_Armor] },
            { no: 2, name: "summon", kind: "enum", T: () => ["proto.Warlock.Options.Summon", Warlock_Options_Summon] },
            { no: 3, name: "weaponImbue", kind: "enum", T: () => ["proto.Warlock.Options.WeaponImbue", Warlock_Options_WeaponImbue] }
        ]);
    }
    create(value) {
        const message = { armor: 0, summon: 0, weaponImbue: 0 };
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
                case /* proto.Warlock.Options.Armor armor */ 1:
                    message.armor = reader.int32();
                    break;
                case /* proto.Warlock.Options.Summon summon */ 2:
                    message.summon = reader.int32();
                    break;
                case /* proto.Warlock.Options.WeaponImbue weaponImbue */ 3:
                    message.weaponImbue = reader.int32();
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
        /* proto.Warlock.Options.Armor armor = 1; */
        if (message.armor !== 0)
            writer.tag(1, WireType.Varint).int32(message.armor);
        /* proto.Warlock.Options.Summon summon = 2; */
        if (message.summon !== 0)
            writer.tag(2, WireType.Varint).int32(message.summon);
        /* proto.Warlock.Options.WeaponImbue weaponImbue = 3; */
        if (message.weaponImbue !== 0)
            writer.tag(3, WireType.Varint).int32(message.weaponImbue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Warlock.Options
 */
export const Warlock_Options = new Warlock_Options$Type();
