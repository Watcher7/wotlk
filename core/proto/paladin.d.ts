import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message proto.PaladinTalents
 */
export interface PaladinTalents {
    /**
     * Holy
     *
     * @generated from protobuf field: int32 spiritual_focus = 1;
     */
    spiritualFocus: number;
    /**
     * @generated from protobuf field: int32 seals_of_the_pure = 2;
     */
    sealsOfThePure: number;
    /**
     * @generated from protobuf field: int32 healing_light = 3;
     */
    healingLight: number;
    /**
     * @generated from protobuf field: int32 divine_intellect = 4;
     */
    divineIntellect: number;
    /**
     * @generated from protobuf field: int32 unyielding_faith = 5;
     */
    unyieldingFaith: number;
    /**
     * @generated from protobuf field: bool aura_mastery = 6;
     */
    auraMastery: boolean;
    /**
     * @generated from protobuf field: int32 illumination = 7;
     */
    illumination: number;
    /**
     * @generated from protobuf field: int32 improved_lay_on_hands = 8;
     */
    improvedLayOnHands: number;
    /**
     * @generated from protobuf field: int32 improved_concentration_aura = 9;
     */
    improvedConcentrationAura: number;
    /**
     * @generated from protobuf field: int32 improved_blessing_of_wisdom = 10;
     */
    improvedBlessingOfWisdom: number;
    /**
     * @generated from protobuf field: int32 blessed_hands = 11;
     */
    blessedHands: number;
    /**
     * @generated from protobuf field: int32 pure_of_heart = 12;
     */
    pureOfHeart: number;
    /**
     * @generated from protobuf field: bool divine_favor = 13;
     */
    divineFavor: boolean;
    /**
     * @generated from protobuf field: int32 sanctified_light = 14;
     */
    sanctifiedLight: number;
    /**
     * @generated from protobuf field: int32 purifying_power = 15;
     */
    purifyingPower: number;
    /**
     * @generated from protobuf field: int32 holy_power = 16;
     */
    holyPower: number;
    /**
     * @generated from protobuf field: int32 lights_grace = 17;
     */
    lightsGrace: number;
    /**
     * @generated from protobuf field: bool holy_shock = 18;
     */
    holyShock: boolean;
    /**
     * @generated from protobuf field: int32 blessed_life = 19;
     */
    blessedLife: number;
    /**
     * @generated from protobuf field: int32 sacred_cleansing = 20;
     */
    sacredCleansing: number;
    /**
     * @generated from protobuf field: int32 holy_guidance = 21;
     */
    holyGuidance: number;
    /**
     * @generated from protobuf field: bool divine_illumination = 22;
     */
    divineIllumination: boolean;
    /**
     * @generated from protobuf field: int32 judgements_of_the_pure = 23;
     */
    judgementsOfThePure: number;
    /**
     * @generated from protobuf field: int32 infusion_of_light = 24;
     */
    infusionOfLight: number;
    /**
     * @generated from protobuf field: int32 enlightened_judgements = 25;
     */
    enlightenedJudgements: number;
    /**
     * @generated from protobuf field: bool beacon_of_light = 26;
     */
    beaconOfLight: boolean;
    /**
     * Protection
     *
     * @generated from protobuf field: int32 divinity = 27;
     */
    divinity: number;
    /**
     * @generated from protobuf field: int32 divine_strength = 28;
     */
    divineStrength: number;
    /**
     * @generated from protobuf field: int32 stoicism = 29;
     */
    stoicism: number;
    /**
     * @generated from protobuf field: int32 guardians_favor = 30;
     */
    guardiansFavor: number;
    /**
     * @generated from protobuf field: int32 anticipation = 31;
     */
    anticipation: number;
    /**
     * @generated from protobuf field: bool divine_sacrifice = 32;
     */
    divineSacrifice: boolean;
    /**
     * @generated from protobuf field: int32 improved_righteous_fury = 33;
     */
    improvedRighteousFury: number;
    /**
     * @generated from protobuf field: int32 toughness = 34;
     */
    toughness: number;
    /**
     * @generated from protobuf field: int32 divine_guardian = 35;
     */
    divineGuardian: number;
    /**
     * @generated from protobuf field: int32 improved_hammer_of_justice = 36;
     */
    improvedHammerOfJustice: number;
    /**
     * @generated from protobuf field: int32 improved_devotion_aura = 37;
     */
    improvedDevotionAura: number;
    /**
     * @generated from protobuf field: bool blessing_of_sanctuary = 38;
     */
    blessingOfSanctuary: boolean;
    /**
     * @generated from protobuf field: int32 reckoning = 39;
     */
    reckoning: number;
    /**
     * @generated from protobuf field: int32 sacred_duty = 40;
     */
    sacredDuty: number;
    /**
     * @generated from protobuf field: int32 one_handed_weapon_specialization = 41;
     */
    oneHandedWeaponSpecialization: number;
    /**
     * @generated from protobuf field: int32 spiritual_attunement = 42;
     */
    spiritualAttunement: number;
    /**
     * @generated from protobuf field: bool holy_shield = 43;
     */
    holyShield: boolean;
    /**
     * @generated from protobuf field: int32 ardent_defender = 44;
     */
    ardentDefender: number;
    /**
     * @generated from protobuf field: int32 redoubt = 45;
     */
    redoubt: number;
    /**
     * @generated from protobuf field: int32 combat_expertise = 46;
     */
    combatExpertise: number;
    /**
     * @generated from protobuf field: int32 touched_by_the_light = 47;
     */
    touchedByTheLight: number;
    /**
     * @generated from protobuf field: bool avengers_shield = 48;
     */
    avengersShield: boolean;
    /**
     * @generated from protobuf field: int32 guarded_by_the_light = 49;
     */
    guardedByTheLight: number;
    /**
     * @generated from protobuf field: int32 shield_of_the_templar = 50;
     */
    shieldOfTheTemplar: number;
    /**
     * @generated from protobuf field: int32 judgements_of_the_just = 51;
     */
    judgementsOfTheJust: number;
    /**
     * @generated from protobuf field: bool hammer_of_the_righteous = 52;
     */
    hammerOfTheRighteous: boolean;
    /**
     * Retribution
     *
     * @generated from protobuf field: int32 deflection = 53;
     */
    deflection: number;
    /**
     * @generated from protobuf field: int32 benediction = 54;
     */
    benediction: number;
    /**
     * @generated from protobuf field: int32 improved_judgements = 55;
     */
    improvedJudgements: number;
    /**
     * @generated from protobuf field: int32 heart_of_the_crusader = 56;
     */
    heartOfTheCrusader: number;
    /**
     * @generated from protobuf field: int32 improved_blessing_of_might = 57;
     */
    improvedBlessingOfMight: number;
    /**
     * @generated from protobuf field: int32 vindication = 58;
     */
    vindication: number;
    /**
     * @generated from protobuf field: int32 conviction = 59;
     */
    conviction: number;
    /**
     * @generated from protobuf field: bool seal_of_command = 60;
     */
    sealOfCommand: boolean;
    /**
     * @generated from protobuf field: int32 pursuit_of_justice = 61;
     */
    pursuitOfJustice: number;
    /**
     * @generated from protobuf field: int32 eye_for_an_eye = 62;
     */
    eyeForAnEye: number;
    /**
     * @generated from protobuf field: int32 sanctity_of_battle = 63;
     */
    sanctityOfBattle: number;
    /**
     * @generated from protobuf field: int32 crusade = 64;
     */
    crusade: number;
    /**
     * @generated from protobuf field: int32 two_handed_weapon_specialization = 65;
     */
    twoHandedWeaponSpecialization: number;
    /**
     * @generated from protobuf field: bool sanctified_retribution = 66;
     */
    sanctifiedRetribution: boolean;
    /**
     * @generated from protobuf field: int32 vengeance = 67;
     */
    vengeance: number;
    /**
     * @generated from protobuf field: int32 divine_purpose = 68;
     */
    divinePurpose: number;
    /**
     * @generated from protobuf field: int32 the_art_of_war = 69;
     */
    theArtOfWar: number;
    /**
     * @generated from protobuf field: bool repentance = 70;
     */
    repentance: boolean;
    /**
     * @generated from protobuf field: int32 judgements_of_the_wise = 71;
     */
    judgementsOfTheWise: number;
    /**
     * @generated from protobuf field: int32 fanaticism = 72;
     */
    fanaticism: number;
    /**
     * @generated from protobuf field: int32 sanctified_wrath = 73;
     */
    sanctifiedWrath: number;
    /**
     * @generated from protobuf field: int32 swift_retribution = 74;
     */
    swiftRetribution: number;
    /**
     * @generated from protobuf field: bool crusader_strike = 75;
     */
    crusaderStrike: boolean;
    /**
     * @generated from protobuf field: int32 sheath_of_light = 76;
     */
    sheathOfLight: number;
    /**
     * @generated from protobuf field: int32 righteous_vengeance = 77;
     */
    righteousVengeance: number;
    /**
     * @generated from protobuf field: bool divine_storm = 78;
     */
    divineStorm: boolean;
}
/**
 * @generated from protobuf message proto.RetributionPaladin
 */
export interface RetributionPaladin {
    /**
     * @generated from protobuf field: proto.RetributionPaladin.Rotation rotation = 1;
     */
    rotation?: RetributionPaladin_Rotation;
    /**
     * @generated from protobuf field: proto.PaladinTalents talents = 2;
     */
    talents?: PaladinTalents;
    /**
     * @generated from protobuf field: proto.RetributionPaladin.Options options = 3;
     */
    options?: RetributionPaladin_Options;
}
/**
 * @generated from protobuf message proto.RetributionPaladin.Rotation
 */
export interface RetributionPaladin_Rotation {
    /**
     * @generated from protobuf field: int32 exo_slack = 1;
     */
    exoSlack: number;
    /**
     * @generated from protobuf field: int32 cons_slack = 2;
     */
    consSlack: number;
    /**
     * @generated from protobuf field: double divine_plea_percentage = 3;
     */
    divinePleaPercentage: number;
}
/**
 * @generated from protobuf message proto.RetributionPaladin.Options
 */
export interface RetributionPaladin_Options {
    /**
     * @generated from protobuf field: proto.PaladinJudgement judgement = 1;
     */
    judgement: PaladinJudgement;
    /**
     * @generated from protobuf field: proto.PaladinSeal seal = 2;
     */
    seal: PaladinSeal;
    /**
     * @generated from protobuf field: proto.PaladinAura aura = 3;
     */
    aura: PaladinAura;
    /**
     * @generated from protobuf field: double damage_taken_per_second = 4;
     */
    damageTakenPerSecond: number;
    /**
     * @generated from protobuf field: bool use_avenging_wrath = 5;
     */
    useAvengingWrath: boolean;
    /**
     * @generated from protobuf field: bool use_divine_plea = 6;
     */
    useDivinePlea: boolean;
}
/**
 * @generated from protobuf message proto.ProtectionPaladin
 */
export interface ProtectionPaladin {
    /**
     * @generated from protobuf field: proto.ProtectionPaladin.Rotation rotation = 1;
     */
    rotation?: ProtectionPaladin_Rotation;
    /**
     * @generated from protobuf field: proto.PaladinTalents talents = 2;
     */
    talents?: PaladinTalents;
    /**
     * @generated from protobuf field: proto.ProtectionPaladin.Options options = 3;
     */
    options?: ProtectionPaladin_Options;
}
/**
 * @generated from protobuf message proto.ProtectionPaladin.Rotation
 */
export interface ProtectionPaladin_Rotation {
    /**
     * @generated from protobuf field: bool prioritize_holy_shield = 1;
     */
    prioritizeHolyShield: boolean;
}
/**
 * @generated from protobuf message proto.ProtectionPaladin.Options
 */
export interface ProtectionPaladin_Options {
    /**
     * @generated from protobuf field: proto.PaladinJudgement judgement = 1;
     */
    judgement: PaladinJudgement;
    /**
     * @generated from protobuf field: proto.PaladinSeal seal = 2;
     */
    seal: PaladinSeal;
    /**
     * @generated from protobuf field: proto.PaladinAura aura = 3;
     */
    aura: PaladinAura;
    /**
     * @generated from protobuf field: double damage_taken_per_second = 4;
     */
    damageTakenPerSecond: number;
    /**
     * @generated from protobuf field: bool use_avenging_wrath = 5;
     */
    useAvengingWrath: boolean;
}
/**
 * @generated from protobuf enum proto.PaladinMajorGlyph
 */
export declare enum PaladinMajorGlyph {
    /**
     * @generated from protobuf enum value: PaladinMajorGlyphNone = 0;
     */
    PaladinMajorGlyphNone = 0,
    /**
     * @generated from protobuf enum value: GlyphOfAvengerSShield = 41101;
     */
    GlyphOfAvengerSShield = 41101,
    /**
     * @generated from protobuf enum value: GlyphOfAvengingWrath = 41107;
     */
    GlyphOfAvengingWrath = 41107,
    /**
     * @generated from protobuf enum value: GlyphOfBeaconOfLight = 45741;
     */
    GlyphOfBeaconOfLight = 45741,
    /**
     * @generated from protobuf enum value: GlyphOfCleansing = 41104;
     */
    GlyphOfCleansing = 41104,
    /**
     * @generated from protobuf enum value: GlyphOfConsecration = 41099;
     */
    GlyphOfConsecration = 41099,
    /**
     * @generated from protobuf enum value: GlyphOfCrusaderStrike = 41098;
     */
    GlyphOfCrusaderStrike = 41098,
    /**
     * @generated from protobuf enum value: GlyphOfDivinePlea = 45745;
     */
    GlyphOfDivinePlea = 45745,
    /**
     * @generated from protobuf enum value: GlyphOfDivineStorm = 45743;
     */
    GlyphOfDivineStorm = 45743,
    /**
     * @generated from protobuf enum value: GlyphOfDivinity = 41108;
     */
    GlyphOfDivinity = 41108,
    /**
     * @generated from protobuf enum value: GlyphOfExorcism = 41103;
     */
    GlyphOfExorcism = 41103,
    /**
     * @generated from protobuf enum value: GlyphOfFlashOfLight = 41105;
     */
    GlyphOfFlashOfLight = 41105,
    /**
     * @generated from protobuf enum value: GlyphOfHammerOfJustice = 41095;
     */
    GlyphOfHammerOfJustice = 41095,
    /**
     * @generated from protobuf enum value: GlyphOfHammerOfTheRighteous = 45742;
     */
    GlyphOfHammerOfTheRighteous = 45742,
    /**
     * @generated from protobuf enum value: GlyphOfHammerOfWrath = 41097;
     */
    GlyphOfHammerOfWrath = 41097,
    /**
     * @generated from protobuf enum value: GlyphOfHolyLight = 41106;
     */
    GlyphOfHolyLight = 41106,
    /**
     * @generated from protobuf enum value: GlyphOfHolyShock = 45746;
     */
    GlyphOfHolyShock = 45746,
    /**
     * @generated from protobuf enum value: GlyphOfHolyWrath = 43867;
     */
    GlyphOfHolyWrath = 43867,
    /**
     * @generated from protobuf enum value: GlyphOfJudgement = 41092;
     */
    GlyphOfJudgement = 41092,
    /**
     * @generated from protobuf enum value: GlyphOfRighteousDefense = 41100;
     */
    GlyphOfRighteousDefense = 41100,
    /**
     * @generated from protobuf enum value: GlyphOfSalvation = 45747;
     */
    GlyphOfSalvation = 45747,
    /**
     * @generated from protobuf enum value: GlyphOfSealOfCommand = 41094;
     */
    GlyphOfSealOfCommand = 41094,
    /**
     * @generated from protobuf enum value: GlyphOfSealOfLight = 41110;
     */
    GlyphOfSealOfLight = 41110,
    /**
     * @generated from protobuf enum value: GlyphOfSealOfRighteousness = 43868;
     */
    GlyphOfSealOfRighteousness = 43868,
    /**
     * @generated from protobuf enum value: GlyphOfSealOfVengeance = 43869;
     */
    GlyphOfSealOfVengeance = 43869,
    /**
     * @generated from protobuf enum value: GlyphOfSealOfWisdom = 41109;
     */
    GlyphOfSealOfWisdom = 41109,
    /**
     * @generated from protobuf enum value: GlyphOfShieldOfRighteousness = 45744;
     */
    GlyphOfShieldOfRighteousness = 45744,
    /**
     * @generated from protobuf enum value: GlyphOfSpiritualAttunement = 41096;
     */
    GlyphOfSpiritualAttunement = 41096,
    /**
     * @generated from protobuf enum value: GlyphOfTurnEvil = 41102;
     */
    GlyphOfTurnEvil = 41102
}
/**
 * @generated from protobuf enum proto.PaladinMinorGlyph
 */
export declare enum PaladinMinorGlyph {
    /**
     * @generated from protobuf enum value: PaladinMinorGlyphNone = 0;
     */
    PaladinMinorGlyphNone = 0,
    /**
     * @generated from protobuf enum value: GlyphOfBlessingOfKings = 43365;
     */
    GlyphOfBlessingOfKings = 43365,
    /**
     * @generated from protobuf enum value: GlyphOfBlessingOfMight = 43340;
     */
    GlyphOfBlessingOfMight = 43340,
    /**
     * @generated from protobuf enum value: GlyphOfBlessingOfWisdom = 43366;
     */
    GlyphOfBlessingOfWisdom = 43366,
    /**
     * @generated from protobuf enum value: GlyphOfLayOnHands = 43367;
     */
    GlyphOfLayOnHands = 43367,
    /**
     * @generated from protobuf enum value: GlyphOfSenseUndead = 43368;
     */
    GlyphOfSenseUndead = 43368,
    /**
     * @generated from protobuf enum value: GlyphOfTheWise = 43369;
     */
    GlyphOfTheWise = 43369
}
/**
 * @generated from protobuf enum proto.Blessings
 */
export declare enum Blessings {
    /**
     * @generated from protobuf enum value: BlessingUnknown = 0;
     */
    BlessingUnknown = 0,
    /**
     * @generated from protobuf enum value: BlessingOfKings = 1;
     */
    BlessingOfKings = 1,
    /**
     * @generated from protobuf enum value: BlessingOfMight = 2;
     */
    BlessingOfMight = 2,
    /**
     * @generated from protobuf enum value: BlessingOfSalvation = 3;
     */
    BlessingOfSalvation = 3,
    /**
     * @generated from protobuf enum value: BlessingOfWisdom = 4;
     */
    BlessingOfWisdom = 4,
    /**
     * @generated from protobuf enum value: BlessingOfSanctuary = 5;
     */
    BlessingOfSanctuary = 5,
    /**
     * @generated from protobuf enum value: BlessingOfLight = 6;
     */
    BlessingOfLight = 6
}
/**
 * @generated from protobuf enum proto.PaladinAura
 */
export declare enum PaladinAura {
    /**
     * @generated from protobuf enum value: NoPaladinAura = 0;
     */
    NoPaladinAura = 0,
    /**
     * @generated from protobuf enum value: DevotionAura = 2;
     */
    DevotionAura = 2,
    /**
     * @generated from protobuf enum value: RetributionAura = 3;
     */
    RetributionAura = 3
}
/**
 * @generated from protobuf enum proto.PaladinSeal
 */
export declare enum PaladinSeal {
    /**
     * @generated from protobuf enum value: Vengeance = 0;
     */
    Vengeance = 0,
    /**
     * @generated from protobuf enum value: Command = 1;
     */
    Command = 1,
    /**
     * @generated from protobuf enum value: Righteousness = 2;
     */
    Righteousness = 2
}
/**
 * @generated from protobuf enum proto.PaladinJudgement
 */
export declare enum PaladinJudgement {
    /**
     * @generated from protobuf enum value: JudgementOfWisdom = 0;
     */
    JudgementOfWisdom = 0,
    /**
     * @generated from protobuf enum value: JudgementOfLight = 1;
     */
    JudgementOfLight = 1
}
declare class PaladinTalents$Type extends MessageType<PaladinTalents> {
    constructor();
    create(value?: PartialMessage<PaladinTalents>): PaladinTalents;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PaladinTalents): PaladinTalents;
    internalBinaryWrite(message: PaladinTalents, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.PaladinTalents
 */
export declare const PaladinTalents: PaladinTalents$Type;
declare class RetributionPaladin$Type extends MessageType<RetributionPaladin> {
    constructor();
    create(value?: PartialMessage<RetributionPaladin>): RetributionPaladin;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RetributionPaladin): RetributionPaladin;
    internalBinaryWrite(message: RetributionPaladin, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.RetributionPaladin
 */
export declare const RetributionPaladin: RetributionPaladin$Type;
declare class RetributionPaladin_Rotation$Type extends MessageType<RetributionPaladin_Rotation> {
    constructor();
    create(value?: PartialMessage<RetributionPaladin_Rotation>): RetributionPaladin_Rotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RetributionPaladin_Rotation): RetributionPaladin_Rotation;
    internalBinaryWrite(message: RetributionPaladin_Rotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.RetributionPaladin.Rotation
 */
export declare const RetributionPaladin_Rotation: RetributionPaladin_Rotation$Type;
declare class RetributionPaladin_Options$Type extends MessageType<RetributionPaladin_Options> {
    constructor();
    create(value?: PartialMessage<RetributionPaladin_Options>): RetributionPaladin_Options;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RetributionPaladin_Options): RetributionPaladin_Options;
    internalBinaryWrite(message: RetributionPaladin_Options, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.RetributionPaladin.Options
 */
export declare const RetributionPaladin_Options: RetributionPaladin_Options$Type;
declare class ProtectionPaladin$Type extends MessageType<ProtectionPaladin> {
    constructor();
    create(value?: PartialMessage<ProtectionPaladin>): ProtectionPaladin;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProtectionPaladin): ProtectionPaladin;
    internalBinaryWrite(message: ProtectionPaladin, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.ProtectionPaladin
 */
export declare const ProtectionPaladin: ProtectionPaladin$Type;
declare class ProtectionPaladin_Rotation$Type extends MessageType<ProtectionPaladin_Rotation> {
    constructor();
    create(value?: PartialMessage<ProtectionPaladin_Rotation>): ProtectionPaladin_Rotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProtectionPaladin_Rotation): ProtectionPaladin_Rotation;
    internalBinaryWrite(message: ProtectionPaladin_Rotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.ProtectionPaladin.Rotation
 */
export declare const ProtectionPaladin_Rotation: ProtectionPaladin_Rotation$Type;
declare class ProtectionPaladin_Options$Type extends MessageType<ProtectionPaladin_Options> {
    constructor();
    create(value?: PartialMessage<ProtectionPaladin_Options>): ProtectionPaladin_Options;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProtectionPaladin_Options): ProtectionPaladin_Options;
    internalBinaryWrite(message: ProtectionPaladin_Options, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.ProtectionPaladin.Options
 */
export declare const ProtectionPaladin_Options: ProtectionPaladin_Options$Type;
export {};
