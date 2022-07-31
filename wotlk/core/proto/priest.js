import { WireType } from '/wotlk/protobuf-ts/index.js';
import { UnknownFieldHandler } from '/wotlk/protobuf-ts/index.js';
import { reflectionMergePartial } from '/wotlk/protobuf-ts/index.js';
import { MESSAGE_TYPE } from '/wotlk/protobuf-ts/index.js';
import { MessageType } from '/wotlk/protobuf-ts/index.js';
import { RaidTarget } from './common.js';
/**
 * @generated from protobuf enum proto.ShadowPriest.Rotation.RotationType
 */
export var ShadowPriest_Rotation_RotationType;
(function (ShadowPriest_Rotation_RotationType) {
    /**
     * @generated from protobuf enum value: Unknown = 0;
     */
    ShadowPriest_Rotation_RotationType[ShadowPriest_Rotation_RotationType["Unknown"] = 0] = "Unknown";
    /**
     * @generated from protobuf enum value: Basic = 1;
     */
    ShadowPriest_Rotation_RotationType[ShadowPriest_Rotation_RotationType["Basic"] = 1] = "Basic";
    /**
     * @generated from protobuf enum value: Clipping = 2;
     */
    ShadowPriest_Rotation_RotationType[ShadowPriest_Rotation_RotationType["Clipping"] = 2] = "Clipping";
    /**
     * @generated from protobuf enum value: Ideal = 3;
     */
    ShadowPriest_Rotation_RotationType[ShadowPriest_Rotation_RotationType["Ideal"] = 3] = "Ideal";
})(ShadowPriest_Rotation_RotationType || (ShadowPriest_Rotation_RotationType = {}));
/**
 * @generated from protobuf enum proto.ShadowPriest.Options.Armor
 */
export var ShadowPriest_Options_Armor;
(function (ShadowPriest_Options_Armor) {
    /**
     * @generated from protobuf enum value: NoArmor = 0;
     */
    ShadowPriest_Options_Armor[ShadowPriest_Options_Armor["NoArmor"] = 0] = "NoArmor";
    /**
     * @generated from protobuf enum value: InnerFire = 1;
     */
    ShadowPriest_Options_Armor[ShadowPriest_Options_Armor["InnerFire"] = 1] = "InnerFire";
})(ShadowPriest_Options_Armor || (ShadowPriest_Options_Armor = {}));
/**
 * @generated from protobuf enum proto.SmitePriest.Rotation.RotationType
 */
export var SmitePriest_Rotation_RotationType;
(function (SmitePriest_Rotation_RotationType) {
    /**
     * @generated from protobuf enum value: Unknown = 0;
     */
    SmitePriest_Rotation_RotationType[SmitePriest_Rotation_RotationType["Unknown"] = 0] = "Unknown";
    /**
     * @generated from protobuf enum value: Basic = 1;
     */
    SmitePriest_Rotation_RotationType[SmitePriest_Rotation_RotationType["Basic"] = 1] = "Basic";
    /**
     * @generated from protobuf enum value: HolyFireWeave = 2;
     */
    SmitePriest_Rotation_RotationType[SmitePriest_Rotation_RotationType["HolyFireWeave"] = 2] = "HolyFireWeave";
})(SmitePriest_Rotation_RotationType || (SmitePriest_Rotation_RotationType = {}));
/**
 * @generated from protobuf enum proto.PriestMajorGlyph
 */
export var PriestMajorGlyph;
(function (PriestMajorGlyph) {
    /**
     * @generated from protobuf enum value: PriestMajorGlyphNone = 0;
     */
    PriestMajorGlyph[PriestMajorGlyph["PriestMajorGlyphNone"] = 0] = "PriestMajorGlyphNone";
    /**
     * @generated from protobuf enum value: GlyphOfCircleOfHealing = 42396;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfCircleOfHealing"] = 42396] = "GlyphOfCircleOfHealing";
    /**
     * @generated from protobuf enum value: GlyphOfDispelMagic = 42397;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfDispelMagic"] = 42397] = "GlyphOfDispelMagic";
    /**
     * @generated from protobuf enum value: GlyphOfDispersion = 45753;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfDispersion"] = 45753] = "GlyphOfDispersion";
    /**
     * @generated from protobuf enum value: GlyphOfFade = 42398;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfFade"] = 42398] = "GlyphOfFade";
    /**
     * @generated from protobuf enum value: GlyphOfFearWard = 42399;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfFearWard"] = 42399] = "GlyphOfFearWard";
    /**
     * @generated from protobuf enum value: GlyphOfFlashHeal = 42400;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfFlashHeal"] = 42400] = "GlyphOfFlashHeal";
    /**
     * @generated from protobuf enum value: GlyphOfGuardianSpirit = 45755;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfGuardianSpirit"] = 45755] = "GlyphOfGuardianSpirit";
    /**
     * @generated from protobuf enum value: GlyphOfHolyNova = 42401;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfHolyNova"] = 42401] = "GlyphOfHolyNova";
    /**
     * @generated from protobuf enum value: GlyphOfHymnOfHope = 45758;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfHymnOfHope"] = 45758] = "GlyphOfHymnOfHope";
    /**
     * @generated from protobuf enum value: GlyphOfInnerFire = 42402;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfInnerFire"] = 42402] = "GlyphOfInnerFire";
    /**
     * @generated from protobuf enum value: GlyphOfLightwell = 42403;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfLightwell"] = 42403] = "GlyphOfLightwell";
    /**
     * @generated from protobuf enum value: GlyphOfMassDispel = 42404;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfMassDispel"] = 42404] = "GlyphOfMassDispel";
    /**
     * @generated from protobuf enum value: GlyphOfMindControl = 42405;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfMindControl"] = 42405] = "GlyphOfMindControl";
    /**
     * @generated from protobuf enum value: GlyphOfMindFlay = 42415;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfMindFlay"] = 42415] = "GlyphOfMindFlay";
    /**
     * @generated from protobuf enum value: GlyphOfMindSear = 45757;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfMindSear"] = 45757] = "GlyphOfMindSear";
    /**
     * @generated from protobuf enum value: GlyphOfPainSuppression = 45760;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfPainSuppression"] = 45760] = "GlyphOfPainSuppression";
    /**
     * @generated from protobuf enum value: GlyphOfPenance = 45756;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfPenance"] = 45756] = "GlyphOfPenance";
    /**
     * @generated from protobuf enum value: GlyphOfPowerWordShield = 42408;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfPowerWordShield"] = 42408] = "GlyphOfPowerWordShield";
    /**
     * @generated from protobuf enum value: GlyphOfPrayerOfHealing = 42409;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfPrayerOfHealing"] = 42409] = "GlyphOfPrayerOfHealing";
    /**
     * @generated from protobuf enum value: GlyphOfPsychicScream = 42410;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfPsychicScream"] = 42410] = "GlyphOfPsychicScream";
    /**
     * @generated from protobuf enum value: GlyphOfRenew = 42411;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfRenew"] = 42411] = "GlyphOfRenew";
    /**
     * @generated from protobuf enum value: GlyphOfScourgeImprisonment = 42412;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfScourgeImprisonment"] = 42412] = "GlyphOfScourgeImprisonment";
    /**
     * @generated from protobuf enum value: GlyphOfShadow = 42407;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfShadow"] = 42407] = "GlyphOfShadow";
    /**
     * @generated from protobuf enum value: GlyphOfShadowWordDeath = 42414;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfShadowWordDeath"] = 42414] = "GlyphOfShadowWordDeath";
    /**
     * @generated from protobuf enum value: GlyphOfShadowWordPain = 42406;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfShadowWordPain"] = 42406] = "GlyphOfShadowWordPain";
    /**
     * @generated from protobuf enum value: GlyphOfSmite = 42416;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfSmite"] = 42416] = "GlyphOfSmite";
    /**
     * @generated from protobuf enum value: GlyphOfSpiritOfRedemption = 42417;
     */
    PriestMajorGlyph[PriestMajorGlyph["GlyphOfSpiritOfRedemption"] = 42417] = "GlyphOfSpiritOfRedemption";
})(PriestMajorGlyph || (PriestMajorGlyph = {}));
/**
 * @generated from protobuf enum proto.PriestMinorGlyph
 */
export var PriestMinorGlyph;
(function (PriestMinorGlyph) {
    /**
     * @generated from protobuf enum value: PriestMinorGlyphNone = 0;
     */
    PriestMinorGlyph[PriestMinorGlyph["PriestMinorGlyphNone"] = 0] = "PriestMinorGlyphNone";
    /**
     * @generated from protobuf enum value: GlyphOfFading = 43342;
     */
    PriestMinorGlyph[PriestMinorGlyph["GlyphOfFading"] = 43342] = "GlyphOfFading";
    /**
     * @generated from protobuf enum value: GlyphOfFortitude = 43371;
     */
    PriestMinorGlyph[PriestMinorGlyph["GlyphOfFortitude"] = 43371] = "GlyphOfFortitude";
    /**
     * @generated from protobuf enum value: GlyphOfLevitate = 43370;
     */
    PriestMinorGlyph[PriestMinorGlyph["GlyphOfLevitate"] = 43370] = "GlyphOfLevitate";
    /**
     * @generated from protobuf enum value: GlyphOfShackleUndead = 43373;
     */
    PriestMinorGlyph[PriestMinorGlyph["GlyphOfShackleUndead"] = 43373] = "GlyphOfShackleUndead";
    /**
     * @generated from protobuf enum value: GlyphOfShadowProtection = 43372;
     */
    PriestMinorGlyph[PriestMinorGlyph["GlyphOfShadowProtection"] = 43372] = "GlyphOfShadowProtection";
    /**
     * @generated from protobuf enum value: GlyphOfShadowfiend = 43374;
     */
    PriestMinorGlyph[PriestMinorGlyph["GlyphOfShadowfiend"] = 43374] = "GlyphOfShadowfiend";
})(PriestMinorGlyph || (PriestMinorGlyph = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PriestTalents$Type extends MessageType {
    constructor() {
        super("proto.PriestTalents", [
            { no: 1, name: "unbreakable_will", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "twin_disciplines", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "silent_resolve", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "improved_inner_fire", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "improved_power_word_fortitude", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "martyrdom", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "meditation", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "inner_focus", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "improved_power_word_shield", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "absolution", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "mental_agility", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "improved_mana_burn", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "reflective_shield", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "mental_strength", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "soul_warding", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 16, name: "focused_power", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 17, name: "enlightenment", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 18, name: "focused_will", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 19, name: "power_infusion", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 20, name: "improved_flash_heal", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 21, name: "renewed_hope", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 22, name: "rapture", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 23, name: "aspiration", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 24, name: "divine_aegis", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 25, name: "pain_suppression", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 26, name: "grace", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 27, name: "borrowed_time", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 28, name: "penance", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 29, name: "healing_focus", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 30, name: "improved_renew", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 31, name: "holy_specialization", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 32, name: "spell_warding", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 33, name: "divine_fury", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 34, name: "desperate_prayer", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 35, name: "blessed_recovery", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 36, name: "inspiration", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 37, name: "holy_reach", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 38, name: "improved_healing", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 39, name: "searing_light", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 40, name: "healing_prayers", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 41, name: "spirit_of_redemption", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 42, name: "spiritual_guidance", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 43, name: "surge_of_light", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 44, name: "spiritual_healing", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 45, name: "holy_concentration", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 46, name: "lightwell", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 47, name: "blessed_resilience", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 48, name: "body_and_soul", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 49, name: "empowered_healing", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 50, name: "serendipity", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 51, name: "empowered_renew", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 52, name: "circle_of_healing", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 53, name: "test_of_faith", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 54, name: "divine_providence", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 55, name: "guardian_spirit", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 56, name: "spirit_tap", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 57, name: "improved_spirit_tap", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 58, name: "darkness", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 59, name: "shadow_affinity", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 60, name: "improved_shadow_word_pain", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 61, name: "shadow_focus", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 62, name: "improved_psychic_scream", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 63, name: "improved_mind_blast", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 64, name: "mind_flay", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 65, name: "veiled_shadows", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 66, name: "shadow_reach", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 67, name: "shadow_weaving", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 68, name: "silence", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 69, name: "vampiric_embrace", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 70, name: "improved_vampiric_embrace", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 71, name: "focused_mind", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 72, name: "mind_melt", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 73, name: "improved_devouring_plague", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 74, name: "shadowform", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 75, name: "shadow_power", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 76, name: "improved_shadowform", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 77, name: "misery", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 78, name: "psychic_horror", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 79, name: "vampiric_touch", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 80, name: "pain_and_suffering", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 81, name: "twisted_faith", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 82, name: "dispersion", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { unbreakableWill: 0, twinDisciplines: 0, silentResolve: 0, improvedInnerFire: 0, improvedPowerWordFortitude: 0, martyrdom: 0, meditation: 0, innerFocus: false, improvedPowerWordShield: 0, absolution: 0, mentalAgility: 0, improvedManaBurn: 0, reflectiveShield: 0, mentalStrength: 0, soulWarding: false, focusedPower: 0, enlightenment: 0, focusedWill: 0, powerInfusion: false, improvedFlashHeal: 0, renewedHope: 0, rapture: 0, aspiration: 0, divineAegis: 0, painSuppression: false, grace: 0, borrowedTime: 0, penance: false, healingFocus: 0, improvedRenew: 0, holySpecialization: 0, spellWarding: 0, divineFury: 0, desperatePrayer: false, blessedRecovery: 0, inspiration: 0, holyReach: 0, improvedHealing: 0, searingLight: 0, healingPrayers: 0, spiritOfRedemption: false, spiritualGuidance: 0, surgeOfLight: 0, spiritualHealing: 0, holyConcentration: 0, lightwell: false, blessedResilience: 0, bodyAndSoul: 0, empoweredHealing: 0, serendipity: 0, empoweredRenew: 0, circleOfHealing: false, testOfFaith: 0, divineProvidence: 0, guardianSpirit: false, spiritTap: 0, improvedSpiritTap: 0, darkness: 0, shadowAffinity: 0, improvedShadowWordPain: 0, shadowFocus: 0, improvedPsychicScream: 0, improvedMindBlast: 0, mindFlay: false, veiledShadows: 0, shadowReach: 0, shadowWeaving: 0, silence: false, vampiricEmbrace: false, improvedVampiricEmbrace: 0, focusedMind: 0, mindMelt: 0, improvedDevouringPlague: 0, shadowform: false, shadowPower: 0, improvedShadowform: 0, misery: 0, psychicHorror: false, vampiricTouch: false, painAndSuffering: 0, twistedFaith: 0, dispersion: false };
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
                case /* int32 unbreakable_will */ 1:
                    message.unbreakableWill = reader.int32();
                    break;
                case /* int32 twin_disciplines */ 2:
                    message.twinDisciplines = reader.int32();
                    break;
                case /* int32 silent_resolve */ 3:
                    message.silentResolve = reader.int32();
                    break;
                case /* int32 improved_inner_fire */ 4:
                    message.improvedInnerFire = reader.int32();
                    break;
                case /* int32 improved_power_word_fortitude */ 5:
                    message.improvedPowerWordFortitude = reader.int32();
                    break;
                case /* int32 martyrdom */ 6:
                    message.martyrdom = reader.int32();
                    break;
                case /* int32 meditation */ 7:
                    message.meditation = reader.int32();
                    break;
                case /* bool inner_focus */ 8:
                    message.innerFocus = reader.bool();
                    break;
                case /* int32 improved_power_word_shield */ 9:
                    message.improvedPowerWordShield = reader.int32();
                    break;
                case /* int32 absolution */ 10:
                    message.absolution = reader.int32();
                    break;
                case /* int32 mental_agility */ 11:
                    message.mentalAgility = reader.int32();
                    break;
                case /* int32 improved_mana_burn */ 12:
                    message.improvedManaBurn = reader.int32();
                    break;
                case /* int32 reflective_shield */ 13:
                    message.reflectiveShield = reader.int32();
                    break;
                case /* int32 mental_strength */ 14:
                    message.mentalStrength = reader.int32();
                    break;
                case /* bool soul_warding */ 15:
                    message.soulWarding = reader.bool();
                    break;
                case /* int32 focused_power */ 16:
                    message.focusedPower = reader.int32();
                    break;
                case /* int32 enlightenment */ 17:
                    message.enlightenment = reader.int32();
                    break;
                case /* int32 focused_will */ 18:
                    message.focusedWill = reader.int32();
                    break;
                case /* bool power_infusion */ 19:
                    message.powerInfusion = reader.bool();
                    break;
                case /* int32 improved_flash_heal */ 20:
                    message.improvedFlashHeal = reader.int32();
                    break;
                case /* int32 renewed_hope */ 21:
                    message.renewedHope = reader.int32();
                    break;
                case /* int32 rapture */ 22:
                    message.rapture = reader.int32();
                    break;
                case /* int32 aspiration */ 23:
                    message.aspiration = reader.int32();
                    break;
                case /* int32 divine_aegis */ 24:
                    message.divineAegis = reader.int32();
                    break;
                case /* bool pain_suppression */ 25:
                    message.painSuppression = reader.bool();
                    break;
                case /* int32 grace */ 26:
                    message.grace = reader.int32();
                    break;
                case /* int32 borrowed_time */ 27:
                    message.borrowedTime = reader.int32();
                    break;
                case /* bool penance */ 28:
                    message.penance = reader.bool();
                    break;
                case /* int32 healing_focus */ 29:
                    message.healingFocus = reader.int32();
                    break;
                case /* int32 improved_renew */ 30:
                    message.improvedRenew = reader.int32();
                    break;
                case /* int32 holy_specialization */ 31:
                    message.holySpecialization = reader.int32();
                    break;
                case /* int32 spell_warding */ 32:
                    message.spellWarding = reader.int32();
                    break;
                case /* int32 divine_fury */ 33:
                    message.divineFury = reader.int32();
                    break;
                case /* bool desperate_prayer */ 34:
                    message.desperatePrayer = reader.bool();
                    break;
                case /* int32 blessed_recovery */ 35:
                    message.blessedRecovery = reader.int32();
                    break;
                case /* int32 inspiration */ 36:
                    message.inspiration = reader.int32();
                    break;
                case /* int32 holy_reach */ 37:
                    message.holyReach = reader.int32();
                    break;
                case /* int32 improved_healing */ 38:
                    message.improvedHealing = reader.int32();
                    break;
                case /* int32 searing_light */ 39:
                    message.searingLight = reader.int32();
                    break;
                case /* int32 healing_prayers */ 40:
                    message.healingPrayers = reader.int32();
                    break;
                case /* bool spirit_of_redemption */ 41:
                    message.spiritOfRedemption = reader.bool();
                    break;
                case /* int32 spiritual_guidance */ 42:
                    message.spiritualGuidance = reader.int32();
                    break;
                case /* int32 surge_of_light */ 43:
                    message.surgeOfLight = reader.int32();
                    break;
                case /* int32 spiritual_healing */ 44:
                    message.spiritualHealing = reader.int32();
                    break;
                case /* int32 holy_concentration */ 45:
                    message.holyConcentration = reader.int32();
                    break;
                case /* bool lightwell */ 46:
                    message.lightwell = reader.bool();
                    break;
                case /* int32 blessed_resilience */ 47:
                    message.blessedResilience = reader.int32();
                    break;
                case /* int32 body_and_soul */ 48:
                    message.bodyAndSoul = reader.int32();
                    break;
                case /* int32 empowered_healing */ 49:
                    message.empoweredHealing = reader.int32();
                    break;
                case /* int32 serendipity */ 50:
                    message.serendipity = reader.int32();
                    break;
                case /* int32 empowered_renew */ 51:
                    message.empoweredRenew = reader.int32();
                    break;
                case /* bool circle_of_healing */ 52:
                    message.circleOfHealing = reader.bool();
                    break;
                case /* int32 test_of_faith */ 53:
                    message.testOfFaith = reader.int32();
                    break;
                case /* int32 divine_providence */ 54:
                    message.divineProvidence = reader.int32();
                    break;
                case /* bool guardian_spirit */ 55:
                    message.guardianSpirit = reader.bool();
                    break;
                case /* int32 spirit_tap */ 56:
                    message.spiritTap = reader.int32();
                    break;
                case /* int32 improved_spirit_tap */ 57:
                    message.improvedSpiritTap = reader.int32();
                    break;
                case /* int32 darkness */ 58:
                    message.darkness = reader.int32();
                    break;
                case /* int32 shadow_affinity */ 59:
                    message.shadowAffinity = reader.int32();
                    break;
                case /* int32 improved_shadow_word_pain */ 60:
                    message.improvedShadowWordPain = reader.int32();
                    break;
                case /* int32 shadow_focus */ 61:
                    message.shadowFocus = reader.int32();
                    break;
                case /* int32 improved_psychic_scream */ 62:
                    message.improvedPsychicScream = reader.int32();
                    break;
                case /* int32 improved_mind_blast */ 63:
                    message.improvedMindBlast = reader.int32();
                    break;
                case /* bool mind_flay */ 64:
                    message.mindFlay = reader.bool();
                    break;
                case /* int32 veiled_shadows */ 65:
                    message.veiledShadows = reader.int32();
                    break;
                case /* int32 shadow_reach */ 66:
                    message.shadowReach = reader.int32();
                    break;
                case /* int32 shadow_weaving */ 67:
                    message.shadowWeaving = reader.int32();
                    break;
                case /* bool silence */ 68:
                    message.silence = reader.bool();
                    break;
                case /* bool vampiric_embrace */ 69:
                    message.vampiricEmbrace = reader.bool();
                    break;
                case /* int32 improved_vampiric_embrace */ 70:
                    message.improvedVampiricEmbrace = reader.int32();
                    break;
                case /* int32 focused_mind */ 71:
                    message.focusedMind = reader.int32();
                    break;
                case /* int32 mind_melt */ 72:
                    message.mindMelt = reader.int32();
                    break;
                case /* int32 improved_devouring_plague */ 73:
                    message.improvedDevouringPlague = reader.int32();
                    break;
                case /* bool shadowform */ 74:
                    message.shadowform = reader.bool();
                    break;
                case /* int32 shadow_power */ 75:
                    message.shadowPower = reader.int32();
                    break;
                case /* int32 improved_shadowform */ 76:
                    message.improvedShadowform = reader.int32();
                    break;
                case /* int32 misery */ 77:
                    message.misery = reader.int32();
                    break;
                case /* bool psychic_horror */ 78:
                    message.psychicHorror = reader.bool();
                    break;
                case /* bool vampiric_touch */ 79:
                    message.vampiricTouch = reader.bool();
                    break;
                case /* int32 pain_and_suffering */ 80:
                    message.painAndSuffering = reader.int32();
                    break;
                case /* int32 twisted_faith */ 81:
                    message.twistedFaith = reader.int32();
                    break;
                case /* bool dispersion */ 82:
                    message.dispersion = reader.bool();
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
        /* int32 unbreakable_will = 1; */
        if (message.unbreakableWill !== 0)
            writer.tag(1, WireType.Varint).int32(message.unbreakableWill);
        /* int32 twin_disciplines = 2; */
        if (message.twinDisciplines !== 0)
            writer.tag(2, WireType.Varint).int32(message.twinDisciplines);
        /* int32 silent_resolve = 3; */
        if (message.silentResolve !== 0)
            writer.tag(3, WireType.Varint).int32(message.silentResolve);
        /* int32 improved_inner_fire = 4; */
        if (message.improvedInnerFire !== 0)
            writer.tag(4, WireType.Varint).int32(message.improvedInnerFire);
        /* int32 improved_power_word_fortitude = 5; */
        if (message.improvedPowerWordFortitude !== 0)
            writer.tag(5, WireType.Varint).int32(message.improvedPowerWordFortitude);
        /* int32 martyrdom = 6; */
        if (message.martyrdom !== 0)
            writer.tag(6, WireType.Varint).int32(message.martyrdom);
        /* int32 meditation = 7; */
        if (message.meditation !== 0)
            writer.tag(7, WireType.Varint).int32(message.meditation);
        /* bool inner_focus = 8; */
        if (message.innerFocus !== false)
            writer.tag(8, WireType.Varint).bool(message.innerFocus);
        /* int32 improved_power_word_shield = 9; */
        if (message.improvedPowerWordShield !== 0)
            writer.tag(9, WireType.Varint).int32(message.improvedPowerWordShield);
        /* int32 absolution = 10; */
        if (message.absolution !== 0)
            writer.tag(10, WireType.Varint).int32(message.absolution);
        /* int32 mental_agility = 11; */
        if (message.mentalAgility !== 0)
            writer.tag(11, WireType.Varint).int32(message.mentalAgility);
        /* int32 improved_mana_burn = 12; */
        if (message.improvedManaBurn !== 0)
            writer.tag(12, WireType.Varint).int32(message.improvedManaBurn);
        /* int32 reflective_shield = 13; */
        if (message.reflectiveShield !== 0)
            writer.tag(13, WireType.Varint).int32(message.reflectiveShield);
        /* int32 mental_strength = 14; */
        if (message.mentalStrength !== 0)
            writer.tag(14, WireType.Varint).int32(message.mentalStrength);
        /* bool soul_warding = 15; */
        if (message.soulWarding !== false)
            writer.tag(15, WireType.Varint).bool(message.soulWarding);
        /* int32 focused_power = 16; */
        if (message.focusedPower !== 0)
            writer.tag(16, WireType.Varint).int32(message.focusedPower);
        /* int32 enlightenment = 17; */
        if (message.enlightenment !== 0)
            writer.tag(17, WireType.Varint).int32(message.enlightenment);
        /* int32 focused_will = 18; */
        if (message.focusedWill !== 0)
            writer.tag(18, WireType.Varint).int32(message.focusedWill);
        /* bool power_infusion = 19; */
        if (message.powerInfusion !== false)
            writer.tag(19, WireType.Varint).bool(message.powerInfusion);
        /* int32 improved_flash_heal = 20; */
        if (message.improvedFlashHeal !== 0)
            writer.tag(20, WireType.Varint).int32(message.improvedFlashHeal);
        /* int32 renewed_hope = 21; */
        if (message.renewedHope !== 0)
            writer.tag(21, WireType.Varint).int32(message.renewedHope);
        /* int32 rapture = 22; */
        if (message.rapture !== 0)
            writer.tag(22, WireType.Varint).int32(message.rapture);
        /* int32 aspiration = 23; */
        if (message.aspiration !== 0)
            writer.tag(23, WireType.Varint).int32(message.aspiration);
        /* int32 divine_aegis = 24; */
        if (message.divineAegis !== 0)
            writer.tag(24, WireType.Varint).int32(message.divineAegis);
        /* bool pain_suppression = 25; */
        if (message.painSuppression !== false)
            writer.tag(25, WireType.Varint).bool(message.painSuppression);
        /* int32 grace = 26; */
        if (message.grace !== 0)
            writer.tag(26, WireType.Varint).int32(message.grace);
        /* int32 borrowed_time = 27; */
        if (message.borrowedTime !== 0)
            writer.tag(27, WireType.Varint).int32(message.borrowedTime);
        /* bool penance = 28; */
        if (message.penance !== false)
            writer.tag(28, WireType.Varint).bool(message.penance);
        /* int32 healing_focus = 29; */
        if (message.healingFocus !== 0)
            writer.tag(29, WireType.Varint).int32(message.healingFocus);
        /* int32 improved_renew = 30; */
        if (message.improvedRenew !== 0)
            writer.tag(30, WireType.Varint).int32(message.improvedRenew);
        /* int32 holy_specialization = 31; */
        if (message.holySpecialization !== 0)
            writer.tag(31, WireType.Varint).int32(message.holySpecialization);
        /* int32 spell_warding = 32; */
        if (message.spellWarding !== 0)
            writer.tag(32, WireType.Varint).int32(message.spellWarding);
        /* int32 divine_fury = 33; */
        if (message.divineFury !== 0)
            writer.tag(33, WireType.Varint).int32(message.divineFury);
        /* bool desperate_prayer = 34; */
        if (message.desperatePrayer !== false)
            writer.tag(34, WireType.Varint).bool(message.desperatePrayer);
        /* int32 blessed_recovery = 35; */
        if (message.blessedRecovery !== 0)
            writer.tag(35, WireType.Varint).int32(message.blessedRecovery);
        /* int32 inspiration = 36; */
        if (message.inspiration !== 0)
            writer.tag(36, WireType.Varint).int32(message.inspiration);
        /* int32 holy_reach = 37; */
        if (message.holyReach !== 0)
            writer.tag(37, WireType.Varint).int32(message.holyReach);
        /* int32 improved_healing = 38; */
        if (message.improvedHealing !== 0)
            writer.tag(38, WireType.Varint).int32(message.improvedHealing);
        /* int32 searing_light = 39; */
        if (message.searingLight !== 0)
            writer.tag(39, WireType.Varint).int32(message.searingLight);
        /* int32 healing_prayers = 40; */
        if (message.healingPrayers !== 0)
            writer.tag(40, WireType.Varint).int32(message.healingPrayers);
        /* bool spirit_of_redemption = 41; */
        if (message.spiritOfRedemption !== false)
            writer.tag(41, WireType.Varint).bool(message.spiritOfRedemption);
        /* int32 spiritual_guidance = 42; */
        if (message.spiritualGuidance !== 0)
            writer.tag(42, WireType.Varint).int32(message.spiritualGuidance);
        /* int32 surge_of_light = 43; */
        if (message.surgeOfLight !== 0)
            writer.tag(43, WireType.Varint).int32(message.surgeOfLight);
        /* int32 spiritual_healing = 44; */
        if (message.spiritualHealing !== 0)
            writer.tag(44, WireType.Varint).int32(message.spiritualHealing);
        /* int32 holy_concentration = 45; */
        if (message.holyConcentration !== 0)
            writer.tag(45, WireType.Varint).int32(message.holyConcentration);
        /* bool lightwell = 46; */
        if (message.lightwell !== false)
            writer.tag(46, WireType.Varint).bool(message.lightwell);
        /* int32 blessed_resilience = 47; */
        if (message.blessedResilience !== 0)
            writer.tag(47, WireType.Varint).int32(message.blessedResilience);
        /* int32 body_and_soul = 48; */
        if (message.bodyAndSoul !== 0)
            writer.tag(48, WireType.Varint).int32(message.bodyAndSoul);
        /* int32 empowered_healing = 49; */
        if (message.empoweredHealing !== 0)
            writer.tag(49, WireType.Varint).int32(message.empoweredHealing);
        /* int32 serendipity = 50; */
        if (message.serendipity !== 0)
            writer.tag(50, WireType.Varint).int32(message.serendipity);
        /* int32 empowered_renew = 51; */
        if (message.empoweredRenew !== 0)
            writer.tag(51, WireType.Varint).int32(message.empoweredRenew);
        /* bool circle_of_healing = 52; */
        if (message.circleOfHealing !== false)
            writer.tag(52, WireType.Varint).bool(message.circleOfHealing);
        /* int32 test_of_faith = 53; */
        if (message.testOfFaith !== 0)
            writer.tag(53, WireType.Varint).int32(message.testOfFaith);
        /* int32 divine_providence = 54; */
        if (message.divineProvidence !== 0)
            writer.tag(54, WireType.Varint).int32(message.divineProvidence);
        /* bool guardian_spirit = 55; */
        if (message.guardianSpirit !== false)
            writer.tag(55, WireType.Varint).bool(message.guardianSpirit);
        /* int32 spirit_tap = 56; */
        if (message.spiritTap !== 0)
            writer.tag(56, WireType.Varint).int32(message.spiritTap);
        /* int32 improved_spirit_tap = 57; */
        if (message.improvedSpiritTap !== 0)
            writer.tag(57, WireType.Varint).int32(message.improvedSpiritTap);
        /* int32 darkness = 58; */
        if (message.darkness !== 0)
            writer.tag(58, WireType.Varint).int32(message.darkness);
        /* int32 shadow_affinity = 59; */
        if (message.shadowAffinity !== 0)
            writer.tag(59, WireType.Varint).int32(message.shadowAffinity);
        /* int32 improved_shadow_word_pain = 60; */
        if (message.improvedShadowWordPain !== 0)
            writer.tag(60, WireType.Varint).int32(message.improvedShadowWordPain);
        /* int32 shadow_focus = 61; */
        if (message.shadowFocus !== 0)
            writer.tag(61, WireType.Varint).int32(message.shadowFocus);
        /* int32 improved_psychic_scream = 62; */
        if (message.improvedPsychicScream !== 0)
            writer.tag(62, WireType.Varint).int32(message.improvedPsychicScream);
        /* int32 improved_mind_blast = 63; */
        if (message.improvedMindBlast !== 0)
            writer.tag(63, WireType.Varint).int32(message.improvedMindBlast);
        /* bool mind_flay = 64; */
        if (message.mindFlay !== false)
            writer.tag(64, WireType.Varint).bool(message.mindFlay);
        /* int32 veiled_shadows = 65; */
        if (message.veiledShadows !== 0)
            writer.tag(65, WireType.Varint).int32(message.veiledShadows);
        /* int32 shadow_reach = 66; */
        if (message.shadowReach !== 0)
            writer.tag(66, WireType.Varint).int32(message.shadowReach);
        /* int32 shadow_weaving = 67; */
        if (message.shadowWeaving !== 0)
            writer.tag(67, WireType.Varint).int32(message.shadowWeaving);
        /* bool silence = 68; */
        if (message.silence !== false)
            writer.tag(68, WireType.Varint).bool(message.silence);
        /* bool vampiric_embrace = 69; */
        if (message.vampiricEmbrace !== false)
            writer.tag(69, WireType.Varint).bool(message.vampiricEmbrace);
        /* int32 improved_vampiric_embrace = 70; */
        if (message.improvedVampiricEmbrace !== 0)
            writer.tag(70, WireType.Varint).int32(message.improvedVampiricEmbrace);
        /* int32 focused_mind = 71; */
        if (message.focusedMind !== 0)
            writer.tag(71, WireType.Varint).int32(message.focusedMind);
        /* int32 mind_melt = 72; */
        if (message.mindMelt !== 0)
            writer.tag(72, WireType.Varint).int32(message.mindMelt);
        /* int32 improved_devouring_plague = 73; */
        if (message.improvedDevouringPlague !== 0)
            writer.tag(73, WireType.Varint).int32(message.improvedDevouringPlague);
        /* bool shadowform = 74; */
        if (message.shadowform !== false)
            writer.tag(74, WireType.Varint).bool(message.shadowform);
        /* int32 shadow_power = 75; */
        if (message.shadowPower !== 0)
            writer.tag(75, WireType.Varint).int32(message.shadowPower);
        /* int32 improved_shadowform = 76; */
        if (message.improvedShadowform !== 0)
            writer.tag(76, WireType.Varint).int32(message.improvedShadowform);
        /* int32 misery = 77; */
        if (message.misery !== 0)
            writer.tag(77, WireType.Varint).int32(message.misery);
        /* bool psychic_horror = 78; */
        if (message.psychicHorror !== false)
            writer.tag(78, WireType.Varint).bool(message.psychicHorror);
        /* bool vampiric_touch = 79; */
        if (message.vampiricTouch !== false)
            writer.tag(79, WireType.Varint).bool(message.vampiricTouch);
        /* int32 pain_and_suffering = 80; */
        if (message.painAndSuffering !== 0)
            writer.tag(80, WireType.Varint).int32(message.painAndSuffering);
        /* int32 twisted_faith = 81; */
        if (message.twistedFaith !== 0)
            writer.tag(81, WireType.Varint).int32(message.twistedFaith);
        /* bool dispersion = 82; */
        if (message.dispersion !== false)
            writer.tag(82, WireType.Varint).bool(message.dispersion);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.PriestTalents
 */
export const PriestTalents = new PriestTalents$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShadowPriest$Type extends MessageType {
    constructor() {
        super("proto.ShadowPriest", [
            { no: 1, name: "rotation", kind: "message", T: () => ShadowPriest_Rotation },
            { no: 2, name: "talents", kind: "message", T: () => PriestTalents },
            { no: 3, name: "options", kind: "message", T: () => ShadowPriest_Options }
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
                case /* proto.ShadowPriest.Rotation rotation */ 1:
                    message.rotation = ShadowPriest_Rotation.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* proto.PriestTalents talents */ 2:
                    message.talents = PriestTalents.internalBinaryRead(reader, reader.uint32(), options, message.talents);
                    break;
                case /* proto.ShadowPriest.Options options */ 3:
                    message.options = ShadowPriest_Options.internalBinaryRead(reader, reader.uint32(), options, message.options);
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
        /* proto.ShadowPriest.Rotation rotation = 1; */
        if (message.rotation)
            ShadowPriest_Rotation.internalBinaryWrite(message.rotation, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* proto.PriestTalents talents = 2; */
        if (message.talents)
            PriestTalents.internalBinaryWrite(message.talents, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* proto.ShadowPriest.Options options = 3; */
        if (message.options)
            ShadowPriest_Options.internalBinaryWrite(message.options, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.ShadowPriest
 */
export const ShadowPriest = new ShadowPriest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShadowPriest_Rotation$Type extends MessageType {
    constructor() {
        super("proto.ShadowPriest.Rotation", [
            { no: 1, name: "rotation_type", kind: "enum", T: () => ["proto.ShadowPriest.Rotation.RotationType", ShadowPriest_Rotation_RotationType] },
            { no: 2, name: "precast_vt", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "latency", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value) {
        const message = { rotationType: 0, precastVt: false, latency: 0 };
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
                case /* proto.ShadowPriest.Rotation.RotationType rotation_type */ 1:
                    message.rotationType = reader.int32();
                    break;
                case /* bool precast_vt */ 2:
                    message.precastVt = reader.bool();
                    break;
                case /* double latency */ 3:
                    message.latency = reader.double();
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
        /* proto.ShadowPriest.Rotation.RotationType rotation_type = 1; */
        if (message.rotationType !== 0)
            writer.tag(1, WireType.Varint).int32(message.rotationType);
        /* bool precast_vt = 2; */
        if (message.precastVt !== false)
            writer.tag(2, WireType.Varint).bool(message.precastVt);
        /* double latency = 3; */
        if (message.latency !== 0)
            writer.tag(3, WireType.Bit64).double(message.latency);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.ShadowPriest.Rotation
 */
export const ShadowPriest_Rotation = new ShadowPriest_Rotation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShadowPriest_Options$Type extends MessageType {
    constructor() {
        super("proto.ShadowPriest.Options", [
            { no: 1, name: "use_shadowfiend", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "armor", kind: "enum", T: () => ["proto.ShadowPriest.Options.Armor", ShadowPriest_Options_Armor] }
        ]);
    }
    create(value) {
        const message = { useShadowfiend: false, armor: 0 };
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
                case /* bool use_shadowfiend */ 1:
                    message.useShadowfiend = reader.bool();
                    break;
                case /* proto.ShadowPriest.Options.Armor armor */ 2:
                    message.armor = reader.int32();
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
        /* bool use_shadowfiend = 1; */
        if (message.useShadowfiend !== false)
            writer.tag(1, WireType.Varint).bool(message.useShadowfiend);
        /* proto.ShadowPriest.Options.Armor armor = 2; */
        if (message.armor !== 0)
            writer.tag(2, WireType.Varint).int32(message.armor);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.ShadowPriest.Options
 */
export const ShadowPriest_Options = new ShadowPriest_Options$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SmitePriest$Type extends MessageType {
    constructor() {
        super("proto.SmitePriest", [
            { no: 1, name: "rotation", kind: "message", T: () => SmitePriest_Rotation },
            { no: 2, name: "talents", kind: "message", T: () => PriestTalents },
            { no: 3, name: "options", kind: "message", T: () => SmitePriest_Options }
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
                case /* proto.SmitePriest.Rotation rotation */ 1:
                    message.rotation = SmitePriest_Rotation.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* proto.PriestTalents talents */ 2:
                    message.talents = PriestTalents.internalBinaryRead(reader, reader.uint32(), options, message.talents);
                    break;
                case /* proto.SmitePriest.Options options */ 3:
                    message.options = SmitePriest_Options.internalBinaryRead(reader, reader.uint32(), options, message.options);
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
        /* proto.SmitePriest.Rotation rotation = 1; */
        if (message.rotation)
            SmitePriest_Rotation.internalBinaryWrite(message.rotation, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* proto.PriestTalents talents = 2; */
        if (message.talents)
            PriestTalents.internalBinaryWrite(message.talents, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* proto.SmitePriest.Options options = 3; */
        if (message.options)
            SmitePriest_Options.internalBinaryWrite(message.options, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.SmitePriest
 */
export const SmitePriest = new SmitePriest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SmitePriest_Rotation$Type extends MessageType {
    constructor() {
        super("proto.SmitePriest.Rotation", [
            { no: 1, name: "rotation_type", kind: "enum", T: () => ["proto.SmitePriest.Rotation.RotationType", SmitePriest_Rotation_RotationType] },
            { no: 2, name: "use_mind_blast", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "use_shadow_word_death", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { rotationType: 0, useMindBlast: false, useShadowWordDeath: false };
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
                case /* proto.SmitePriest.Rotation.RotationType rotation_type */ 1:
                    message.rotationType = reader.int32();
                    break;
                case /* bool use_mind_blast */ 2:
                    message.useMindBlast = reader.bool();
                    break;
                case /* bool use_shadow_word_death */ 3:
                    message.useShadowWordDeath = reader.bool();
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
        /* proto.SmitePriest.Rotation.RotationType rotation_type = 1; */
        if (message.rotationType !== 0)
            writer.tag(1, WireType.Varint).int32(message.rotationType);
        /* bool use_mind_blast = 2; */
        if (message.useMindBlast !== false)
            writer.tag(2, WireType.Varint).bool(message.useMindBlast);
        /* bool use_shadow_word_death = 3; */
        if (message.useShadowWordDeath !== false)
            writer.tag(3, WireType.Varint).bool(message.useShadowWordDeath);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.SmitePriest.Rotation
 */
export const SmitePriest_Rotation = new SmitePriest_Rotation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SmitePriest_Options$Type extends MessageType {
    constructor() {
        super("proto.SmitePriest.Options", [
            { no: 1, name: "use_shadowfiend", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "power_infusion_target", kind: "message", T: () => RaidTarget }
        ]);
    }
    create(value) {
        const message = { useShadowfiend: false };
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
                case /* bool use_shadowfiend */ 1:
                    message.useShadowfiend = reader.bool();
                    break;
                case /* proto.RaidTarget power_infusion_target */ 2:
                    message.powerInfusionTarget = RaidTarget.internalBinaryRead(reader, reader.uint32(), options, message.powerInfusionTarget);
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
        /* bool use_shadowfiend = 1; */
        if (message.useShadowfiend !== false)
            writer.tag(1, WireType.Varint).bool(message.useShadowfiend);
        /* proto.RaidTarget power_infusion_target = 2; */
        if (message.powerInfusionTarget)
            RaidTarget.internalBinaryWrite(message.powerInfusionTarget, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.SmitePriest.Options
 */
export const SmitePriest_Options = new SmitePriest_Options$Type();
