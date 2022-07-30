import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { RaidTarget } from "./common";
/**
 * WotLK talents
 *
 * @generated from protobuf message proto.PriestTalents
 */
export interface PriestTalents {
    /**
     * Discipline
     *
     * @generated from protobuf field: int32 unbreakable_will = 1;
     */
    unbreakableWill: number;
    /**
     * @generated from protobuf field: int32 twin_disciplines = 2;
     */
    twinDisciplines: number;
    /**
     * @generated from protobuf field: int32 silent_resolve = 3;
     */
    silentResolve: number;
    /**
     * @generated from protobuf field: int32 improved_inner_fire = 4;
     */
    improvedInnerFire: number;
    /**
     * @generated from protobuf field: int32 improved_power_word_fortitude = 5;
     */
    improvedPowerWordFortitude: number;
    /**
     * @generated from protobuf field: int32 martyrdom = 6;
     */
    martyrdom: number;
    /**
     * @generated from protobuf field: int32 meditation = 7;
     */
    meditation: number;
    /**
     * @generated from protobuf field: bool inner_focus = 8;
     */
    innerFocus: boolean;
    /**
     * @generated from protobuf field: int32 improved_power_word_shield = 9;
     */
    improvedPowerWordShield: number;
    /**
     * @generated from protobuf field: int32 absolution = 10;
     */
    absolution: number;
    /**
     * @generated from protobuf field: int32 mental_agility = 11;
     */
    mentalAgility: number;
    /**
     * @generated from protobuf field: int32 improved_mana_burn = 12;
     */
    improvedManaBurn: number;
    /**
     * @generated from protobuf field: int32 reflective_shield = 13;
     */
    reflectiveShield: number;
    /**
     * @generated from protobuf field: int32 mental_strength = 14;
     */
    mentalStrength: number;
    /**
     * @generated from protobuf field: bool soul_warding = 15;
     */
    soulWarding: boolean;
    /**
     * @generated from protobuf field: int32 focused_power = 16;
     */
    focusedPower: number;
    /**
     * @generated from protobuf field: int32 enlightenment = 17;
     */
    enlightenment: number;
    /**
     * @generated from protobuf field: int32 focused_will = 18;
     */
    focusedWill: number;
    /**
     * @generated from protobuf field: bool power_infusion = 19;
     */
    powerInfusion: boolean;
    /**
     * @generated from protobuf field: int32 improved_flash_heal = 20;
     */
    improvedFlashHeal: number;
    /**
     * @generated from protobuf field: int32 renewed_hope = 21;
     */
    renewedHope: number;
    /**
     * @generated from protobuf field: int32 rapture = 22;
     */
    rapture: number;
    /**
     * @generated from protobuf field: int32 aspiration = 23;
     */
    aspiration: number;
    /**
     * @generated from protobuf field: int32 divine_aegis = 24;
     */
    divineAegis: number;
    /**
     * @generated from protobuf field: bool pain_suppression = 25;
     */
    painSuppression: boolean;
    /**
     * @generated from protobuf field: int32 grace = 26;
     */
    grace: number;
    /**
     * @generated from protobuf field: int32 borrowed_time = 27;
     */
    borrowedTime: number;
    /**
     * @generated from protobuf field: bool penance = 28;
     */
    penance: boolean;
    /**
     * Holy
     *
     * @generated from protobuf field: int32 healing_focus = 29;
     */
    healingFocus: number;
    /**
     * @generated from protobuf field: int32 improved_renew = 30;
     */
    improvedRenew: number;
    /**
     * @generated from protobuf field: int32 holy_specialization = 31;
     */
    holySpecialization: number;
    /**
     * @generated from protobuf field: int32 spell_warding = 32;
     */
    spellWarding: number;
    /**
     * @generated from protobuf field: int32 divine_fury = 33;
     */
    divineFury: number;
    /**
     * @generated from protobuf field: bool desperate_prayer = 34;
     */
    desperatePrayer: boolean;
    /**
     * @generated from protobuf field: int32 blessed_recovery = 35;
     */
    blessedRecovery: number;
    /**
     * @generated from protobuf field: int32 inspiration = 36;
     */
    inspiration: number;
    /**
     * @generated from protobuf field: int32 holy_reach = 37;
     */
    holyReach: number;
    /**
     * @generated from protobuf field: int32 improved_healing = 38;
     */
    improvedHealing: number;
    /**
     * @generated from protobuf field: int32 searing_light = 39;
     */
    searingLight: number;
    /**
     * @generated from protobuf field: int32 healing_prayers = 40;
     */
    healingPrayers: number;
    /**
     * @generated from protobuf field: bool spirit_of_redemption = 41;
     */
    spiritOfRedemption: boolean;
    /**
     * @generated from protobuf field: int32 spiritual_guidance = 42;
     */
    spiritualGuidance: number;
    /**
     * @generated from protobuf field: int32 surge_of_light = 43;
     */
    surgeOfLight: number;
    /**
     * @generated from protobuf field: int32 spiritual_healing = 44;
     */
    spiritualHealing: number;
    /**
     * @generated from protobuf field: int32 holy_concentration = 45;
     */
    holyConcentration: number;
    /**
     * @generated from protobuf field: bool lightwell = 46;
     */
    lightwell: boolean;
    /**
     * @generated from protobuf field: int32 blessed_resilience = 47;
     */
    blessedResilience: number;
    /**
     * @generated from protobuf field: int32 body_and_soul = 48;
     */
    bodyAndSoul: number;
    /**
     * @generated from protobuf field: int32 empowered_healing = 49;
     */
    empoweredHealing: number;
    /**
     * @generated from protobuf field: int32 serendipity = 50;
     */
    serendipity: number;
    /**
     * @generated from protobuf field: int32 empowered_renew = 51;
     */
    empoweredRenew: number;
    /**
     * @generated from protobuf field: bool circle_of_healing = 52;
     */
    circleOfHealing: boolean;
    /**
     * @generated from protobuf field: int32 test_of_faith = 53;
     */
    testOfFaith: number;
    /**
     * @generated from protobuf field: int32 divine_providence = 54;
     */
    divineProvidence: number;
    /**
     * @generated from protobuf field: bool guardian_spirit = 55;
     */
    guardianSpirit: boolean;
    /**
     * Shadow
     *
     * @generated from protobuf field: int32 spirit_tap = 56;
     */
    spiritTap: number;
    /**
     * @generated from protobuf field: int32 improved_spirit_tap = 57;
     */
    improvedSpiritTap: number;
    /**
     * @generated from protobuf field: int32 darkness = 58;
     */
    darkness: number;
    /**
     * @generated from protobuf field: int32 shadow_affinity = 59;
     */
    shadowAffinity: number;
    /**
     * @generated from protobuf field: int32 improved_shadow_word_pain = 60;
     */
    improvedShadowWordPain: number;
    /**
     * @generated from protobuf field: int32 shadow_focus = 61;
     */
    shadowFocus: number;
    /**
     * @generated from protobuf field: int32 improved_psychic_scream = 62;
     */
    improvedPsychicScream: number;
    /**
     * @generated from protobuf field: int32 improved_mind_blast = 63;
     */
    improvedMindBlast: number;
    /**
     * @generated from protobuf field: bool mind_flay = 64;
     */
    mindFlay: boolean;
    /**
     * @generated from protobuf field: int32 veiled_shadows = 65;
     */
    veiledShadows: number;
    /**
     * @generated from protobuf field: int32 shadow_reach = 66;
     */
    shadowReach: number;
    /**
     * @generated from protobuf field: int32 shadow_weaving = 67;
     */
    shadowWeaving: number;
    /**
     * @generated from protobuf field: bool silence = 68;
     */
    silence: boolean;
    /**
     * @generated from protobuf field: bool vampiric_embrace = 69;
     */
    vampiricEmbrace: boolean;
    /**
     * @generated from protobuf field: int32 improved_vampiric_embrace = 70;
     */
    improvedVampiricEmbrace: number;
    /**
     * @generated from protobuf field: int32 focused_mind = 71;
     */
    focusedMind: number;
    /**
     * @generated from protobuf field: int32 mind_melt = 72;
     */
    mindMelt: number;
    /**
     * @generated from protobuf field: int32 improved_devouring_plague = 73;
     */
    improvedDevouringPlague: number;
    /**
     * @generated from protobuf field: bool shadowform = 74;
     */
    shadowform: boolean;
    /**
     * @generated from protobuf field: int32 shadow_power = 75;
     */
    shadowPower: number;
    /**
     * @generated from protobuf field: int32 improved_shadowform = 76;
     */
    improvedShadowform: number;
    /**
     * @generated from protobuf field: int32 misery = 77;
     */
    misery: number;
    /**
     * @generated from protobuf field: bool psychic_horror = 78;
     */
    psychicHorror: boolean;
    /**
     * @generated from protobuf field: bool vampiric_touch = 79;
     */
    vampiricTouch: boolean;
    /**
     * @generated from protobuf field: int32 pain_and_suffering = 80;
     */
    painAndSuffering: number;
    /**
     * @generated from protobuf field: int32 twisted_faith = 81;
     */
    twistedFaith: number;
    /**
     * @generated from protobuf field: bool dispersion = 82;
     */
    dispersion: boolean;
}
/**
 * @generated from protobuf message proto.ShadowPriest
 */
export interface ShadowPriest {
    /**
     * @generated from protobuf field: proto.ShadowPriest.Rotation rotation = 1;
     */
    rotation?: ShadowPriest_Rotation;
    /**
     * @generated from protobuf field: proto.PriestTalents talents = 2;
     */
    talents?: PriestTalents;
    /**
     * @generated from protobuf field: proto.ShadowPriest.Options options = 3;
     */
    options?: ShadowPriest_Options;
}
/**
 * @generated from protobuf message proto.ShadowPriest.Rotation
 */
export interface ShadowPriest_Rotation {
    /**
     * @generated from protobuf field: proto.ShadowPriest.Rotation.RotationType rotation_type = 1;
     */
    rotationType: ShadowPriest_Rotation_RotationType;
    /**
     * @generated from protobuf field: bool precast_vt = 2;
     */
    precastVt: boolean;
    /**
     * @generated from protobuf field: double latency = 3;
     */
    latency: number;
}
/**
 * @generated from protobuf enum proto.ShadowPriest.Rotation.RotationType
 */
export declare enum ShadowPriest_Rotation_RotationType {
    /**
     * @generated from protobuf enum value: Unknown = 0;
     */
    Unknown = 0,
    /**
     * @generated from protobuf enum value: Basic = 1;
     */
    Basic = 1,
    /**
     * @generated from protobuf enum value: Clipping = 2;
     */
    Clipping = 2,
    /**
     * @generated from protobuf enum value: Ideal = 3;
     */
    Ideal = 3
}
/**
 * @generated from protobuf message proto.ShadowPriest.Options
 */
export interface ShadowPriest_Options {
    /**
     * @generated from protobuf field: bool use_shadowfiend = 1;
     */
    useShadowfiend: boolean;
    /**
     * @generated from protobuf field: proto.ShadowPriest.Options.Armor armor = 2;
     */
    armor: ShadowPriest_Options_Armor;
}
/**
 * @generated from protobuf enum proto.ShadowPriest.Options.Armor
 */
export declare enum ShadowPriest_Options_Armor {
    /**
     * @generated from protobuf enum value: NoArmor = 0;
     */
    NoArmor = 0,
    /**
     * @generated from protobuf enum value: InnerFire = 1;
     */
    InnerFire = 1
}
/**
 * @generated from protobuf message proto.SmitePriest
 */
export interface SmitePriest {
    /**
     * @generated from protobuf field: proto.SmitePriest.Rotation rotation = 1;
     */
    rotation?: SmitePriest_Rotation;
    /**
     * @generated from protobuf field: proto.PriestTalents talents = 2;
     */
    talents?: PriestTalents;
    /**
     * @generated from protobuf field: proto.SmitePriest.Options options = 3;
     */
    options?: SmitePriest_Options;
}
/**
 * @generated from protobuf message proto.SmitePriest.Rotation
 */
export interface SmitePriest_Rotation {
    /**
     * @generated from protobuf field: proto.SmitePriest.Rotation.RotationType rotation_type = 1;
     */
    rotationType: SmitePriest_Rotation_RotationType;
    /**
     * @generated from protobuf field: bool use_mind_blast = 2;
     */
    useMindBlast: boolean;
    /**
     * @generated from protobuf field: bool use_shadow_word_death = 3;
     */
    useShadowWordDeath: boolean;
}
/**
 * @generated from protobuf enum proto.SmitePriest.Rotation.RotationType
 */
export declare enum SmitePriest_Rotation_RotationType {
    /**
     * @generated from protobuf enum value: Unknown = 0;
     */
    Unknown = 0,
    /**
     * @generated from protobuf enum value: Basic = 1;
     */
    Basic = 1,
    /**
     * @generated from protobuf enum value: HolyFireWeave = 2;
     */
    HolyFireWeave = 2
}
/**
 * @generated from protobuf message proto.SmitePriest.Options
 */
export interface SmitePriest_Options {
    /**
     * @generated from protobuf field: bool use_shadowfiend = 1;
     */
    useShadowfiend: boolean;
    /**
     * @generated from protobuf field: proto.RaidTarget power_infusion_target = 2;
     */
    powerInfusionTarget?: RaidTarget;
}
/**
 * @generated from protobuf enum proto.PriestMajorGlyph
 */
export declare enum PriestMajorGlyph {
    /**
     * @generated from protobuf enum value: PriestMajorGlyphNone = 0;
     */
    PriestMajorGlyphNone = 0,
    /**
     * @generated from protobuf enum value: GlyphOfCircleOfHealing = 42396;
     */
    GlyphOfCircleOfHealing = 42396,
    /**
     * @generated from protobuf enum value: GlyphOfDispelMagic = 42397;
     */
    GlyphOfDispelMagic = 42397,
    /**
     * @generated from protobuf enum value: GlyphOfDispersion = 45753;
     */
    GlyphOfDispersion = 45753,
    /**
     * @generated from protobuf enum value: GlyphOfFade = 42398;
     */
    GlyphOfFade = 42398,
    /**
     * @generated from protobuf enum value: GlyphOfFearWard = 42399;
     */
    GlyphOfFearWard = 42399,
    /**
     * @generated from protobuf enum value: GlyphOfFlashHeal = 42400;
     */
    GlyphOfFlashHeal = 42400,
    /**
     * @generated from protobuf enum value: GlyphOfGuardianSpirit = 45755;
     */
    GlyphOfGuardianSpirit = 45755,
    /**
     * @generated from protobuf enum value: GlyphOfHolyNova = 42401;
     */
    GlyphOfHolyNova = 42401,
    /**
     * @generated from protobuf enum value: GlyphOfHymnOfHope = 45758;
     */
    GlyphOfHymnOfHope = 45758,
    /**
     * @generated from protobuf enum value: GlyphOfInnerFire = 42402;
     */
    GlyphOfInnerFire = 42402,
    /**
     * @generated from protobuf enum value: GlyphOfLightwell = 42403;
     */
    GlyphOfLightwell = 42403,
    /**
     * @generated from protobuf enum value: GlyphOfMassDispel = 42404;
     */
    GlyphOfMassDispel = 42404,
    /**
     * @generated from protobuf enum value: GlyphOfMindControl = 42405;
     */
    GlyphOfMindControl = 42405,
    /**
     * @generated from protobuf enum value: GlyphOfMindFlay = 42415;
     */
    GlyphOfMindFlay = 42415,
    /**
     * @generated from protobuf enum value: GlyphOfMindSear = 45757;
     */
    GlyphOfMindSear = 45757,
    /**
     * @generated from protobuf enum value: GlyphOfPainSuppression = 45760;
     */
    GlyphOfPainSuppression = 45760,
    /**
     * @generated from protobuf enum value: GlyphOfPenance = 45756;
     */
    GlyphOfPenance = 45756,
    /**
     * @generated from protobuf enum value: GlyphOfPowerWordShield = 42408;
     */
    GlyphOfPowerWordShield = 42408,
    /**
     * @generated from protobuf enum value: GlyphOfPrayerOfHealing = 42409;
     */
    GlyphOfPrayerOfHealing = 42409,
    /**
     * @generated from protobuf enum value: GlyphOfPsychicScream = 42410;
     */
    GlyphOfPsychicScream = 42410,
    /**
     * @generated from protobuf enum value: GlyphOfRenew = 42411;
     */
    GlyphOfRenew = 42411,
    /**
     * @generated from protobuf enum value: GlyphOfScourgeImprisonment = 42412;
     */
    GlyphOfScourgeImprisonment = 42412,
    /**
     * @generated from protobuf enum value: GlyphOfShadow = 42407;
     */
    GlyphOfShadow = 42407,
    /**
     * @generated from protobuf enum value: GlyphOfShadowWordDeath = 42414;
     */
    GlyphOfShadowWordDeath = 42414,
    /**
     * @generated from protobuf enum value: GlyphOfShadowWordPain = 42406;
     */
    GlyphOfShadowWordPain = 42406,
    /**
     * @generated from protobuf enum value: GlyphOfSmite = 42416;
     */
    GlyphOfSmite = 42416,
    /**
     * @generated from protobuf enum value: GlyphOfSpiritOfRedemption = 42417;
     */
    GlyphOfSpiritOfRedemption = 42417
}
/**
 * @generated from protobuf enum proto.PriestMinorGlyph
 */
export declare enum PriestMinorGlyph {
    /**
     * @generated from protobuf enum value: PriestMinorGlyphNone = 0;
     */
    PriestMinorGlyphNone = 0,
    /**
     * @generated from protobuf enum value: GlyphOfFading = 43342;
     */
    GlyphOfFading = 43342,
    /**
     * @generated from protobuf enum value: GlyphOfFortitude = 43371;
     */
    GlyphOfFortitude = 43371,
    /**
     * @generated from protobuf enum value: GlyphOfLevitate = 43370;
     */
    GlyphOfLevitate = 43370,
    /**
     * @generated from protobuf enum value: GlyphOfShackleUndead = 43373;
     */
    GlyphOfShackleUndead = 43373,
    /**
     * @generated from protobuf enum value: GlyphOfShadowProtection = 43372;
     */
    GlyphOfShadowProtection = 43372,
    /**
     * @generated from protobuf enum value: GlyphOfShadowfiend = 43374;
     */
    GlyphOfShadowfiend = 43374
}
declare class PriestTalents$Type extends MessageType<PriestTalents> {
    constructor();
    create(value?: PartialMessage<PriestTalents>): PriestTalents;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PriestTalents): PriestTalents;
    internalBinaryWrite(message: PriestTalents, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.PriestTalents
 */
export declare const PriestTalents: PriestTalents$Type;
declare class ShadowPriest$Type extends MessageType<ShadowPriest> {
    constructor();
    create(value?: PartialMessage<ShadowPriest>): ShadowPriest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ShadowPriest): ShadowPriest;
    internalBinaryWrite(message: ShadowPriest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.ShadowPriest
 */
export declare const ShadowPriest: ShadowPriest$Type;
declare class ShadowPriest_Rotation$Type extends MessageType<ShadowPriest_Rotation> {
    constructor();
    create(value?: PartialMessage<ShadowPriest_Rotation>): ShadowPriest_Rotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ShadowPriest_Rotation): ShadowPriest_Rotation;
    internalBinaryWrite(message: ShadowPriest_Rotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.ShadowPriest.Rotation
 */
export declare const ShadowPriest_Rotation: ShadowPriest_Rotation$Type;
declare class ShadowPriest_Options$Type extends MessageType<ShadowPriest_Options> {
    constructor();
    create(value?: PartialMessage<ShadowPriest_Options>): ShadowPriest_Options;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ShadowPriest_Options): ShadowPriest_Options;
    internalBinaryWrite(message: ShadowPriest_Options, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.ShadowPriest.Options
 */
export declare const ShadowPriest_Options: ShadowPriest_Options$Type;
declare class SmitePriest$Type extends MessageType<SmitePriest> {
    constructor();
    create(value?: PartialMessage<SmitePriest>): SmitePriest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SmitePriest): SmitePriest;
    internalBinaryWrite(message: SmitePriest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.SmitePriest
 */
export declare const SmitePriest: SmitePriest$Type;
declare class SmitePriest_Rotation$Type extends MessageType<SmitePriest_Rotation> {
    constructor();
    create(value?: PartialMessage<SmitePriest_Rotation>): SmitePriest_Rotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SmitePriest_Rotation): SmitePriest_Rotation;
    internalBinaryWrite(message: SmitePriest_Rotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.SmitePriest.Rotation
 */
export declare const SmitePriest_Rotation: SmitePriest_Rotation$Type;
declare class SmitePriest_Options$Type extends MessageType<SmitePriest_Options> {
    constructor();
    create(value?: PartialMessage<SmitePriest_Options>): SmitePriest_Options;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SmitePriest_Options): SmitePriest_Options;
    internalBinaryWrite(message: SmitePriest_Options, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.SmitePriest.Options
 */
export declare const SmitePriest_Options: SmitePriest_Options$Type;
export {};
