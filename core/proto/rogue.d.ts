import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { RaidTarget } from "./common";
/**
 * @generated from protobuf message proto.RogueTalents
 */
export interface RogueTalents {
    /**
     * Assassination
     *
     * @generated from protobuf field: int32 improved_eviscerate = 1;
     */
    improvedEviscerate: number;
    /**
     * @generated from protobuf field: int32 remorseless_attacks = 2;
     */
    remorselessAttacks: number;
    /**
     * @generated from protobuf field: int32 malice = 3;
     */
    malice: number;
    /**
     * @generated from protobuf field: int32 ruthlessness = 4;
     */
    ruthlessness: number;
    /**
     * @generated from protobuf field: int32 blood_spatter = 5;
     */
    bloodSpatter: number;
    /**
     * @generated from protobuf field: int32 puncturing_wounds = 6;
     */
    puncturingWounds: number;
    /**
     * @generated from protobuf field: bool vigor = 7;
     */
    vigor: boolean;
    /**
     * @generated from protobuf field: int32 improved_expose_armor = 8;
     */
    improvedExposeArmor: number;
    /**
     * @generated from protobuf field: int32 lethality = 9;
     */
    lethality: number;
    /**
     * @generated from protobuf field: int32 vile_poisons = 10;
     */
    vilePoisons: number;
    /**
     * @generated from protobuf field: int32 improved_poisons = 11;
     */
    improvedPoisons: number;
    /**
     * @generated from protobuf field: int32 fleet_footed = 12;
     */
    fleetFooted: number;
    /**
     * @generated from protobuf field: bool cold_blood = 13;
     */
    coldBlood: boolean;
    /**
     * @generated from protobuf field: int32 improved_kidney_shot = 14;
     */
    improvedKidneyShot: number;
    /**
     * @generated from protobuf field: int32 quick_recovery = 15;
     */
    quickRecovery: number;
    /**
     * @generated from protobuf field: int32 seal_fate = 16;
     */
    sealFate: number;
    /**
     * @generated from protobuf field: int32 murder = 17;
     */
    murder: number;
    /**
     * @generated from protobuf field: int32 deadly_brew = 18;
     */
    deadlyBrew: number;
    /**
     * @generated from protobuf field: bool overkill = 19;
     */
    overkill: boolean;
    /**
     * @generated from protobuf field: int32 deadened_nerves = 20;
     */
    deadenedNerves: number;
    /**
     * @generated from protobuf field: int32 focused_attacks = 21;
     */
    focusedAttacks: number;
    /**
     * @generated from protobuf field: int32 find_weakness = 22;
     */
    findWeakness: number;
    /**
     * @generated from protobuf field: int32 master_poisoner = 23;
     */
    masterPoisoner: number;
    /**
     * @generated from protobuf field: bool mutilate = 24;
     */
    mutilate: boolean;
    /**
     * @generated from protobuf field: int32 turn_the_tables = 25;
     */
    turnTheTables: number;
    /**
     * @generated from protobuf field: int32 cut_to_the_chase = 26;
     */
    cutToTheChase: number;
    /**
     * @generated from protobuf field: bool hunger_for_blood = 27;
     */
    hungerForBlood: boolean;
    /**
     * Combat
     *
     * @generated from protobuf field: int32 improved_gouge = 28;
     */
    improvedGouge: number;
    /**
     * @generated from protobuf field: int32 improved_sinister_strike = 29;
     */
    improvedSinisterStrike: number;
    /**
     * @generated from protobuf field: int32 dual_wield_specialization = 30;
     */
    dualWieldSpecialization: number;
    /**
     * @generated from protobuf field: int32 improved_slice_and_dice = 31;
     */
    improvedSliceAndDice: number;
    /**
     * @generated from protobuf field: int32 deflection = 32;
     */
    deflection: number;
    /**
     * @generated from protobuf field: int32 precision = 33;
     */
    precision: number;
    /**
     * @generated from protobuf field: int32 endurance = 34;
     */
    endurance: number;
    /**
     * @generated from protobuf field: bool riposte = 35;
     */
    riposte: boolean;
    /**
     * @generated from protobuf field: int32 close_quarters_combat = 36;
     */
    closeQuartersCombat: number;
    /**
     * @generated from protobuf field: int32 improved_kick = 37;
     */
    improvedKick: number;
    /**
     * @generated from protobuf field: int32 improved_sprint = 38;
     */
    improvedSprint: number;
    /**
     * @generated from protobuf field: int32 lightning_reflexes = 39;
     */
    lightningReflexes: number;
    /**
     * @generated from protobuf field: int32 aggression = 40;
     */
    aggression: number;
    /**
     * @generated from protobuf field: int32 mace_specialization = 41;
     */
    maceSpecialization: number;
    /**
     * @generated from protobuf field: bool blade_flurry = 42;
     */
    bladeFlurry: boolean;
    /**
     * @generated from protobuf field: int32 hack_and_slash = 43;
     */
    hackAndSlash: number;
    /**
     * @generated from protobuf field: int32 weapon_expertise = 44;
     */
    weaponExpertise: number;
    /**
     * @generated from protobuf field: int32 blade_twisting = 45;
     */
    bladeTwisting: number;
    /**
     * @generated from protobuf field: int32 vitality = 46;
     */
    vitality: number;
    /**
     * @generated from protobuf field: bool adrenaline_rush = 47;
     */
    adrenalineRush: boolean;
    /**
     * @generated from protobuf field: int32 nerves_of_steel = 48;
     */
    nervesOfSteel: number;
    /**
     * @generated from protobuf field: int32 throwing_specialization = 49;
     */
    throwingSpecialization: number;
    /**
     * @generated from protobuf field: int32 combat_potency = 50;
     */
    combatPotency: number;
    /**
     * @generated from protobuf field: int32 unfair_advantage = 51;
     */
    unfairAdvantage: number;
    /**
     * @generated from protobuf field: bool surprise_attacks = 52;
     */
    surpriseAttacks: boolean;
    /**
     * @generated from protobuf field: int32 savage_combat = 53;
     */
    savageCombat: number;
    /**
     * @generated from protobuf field: int32 prey_on_the_weak = 54;
     */
    preyOnTheWeak: number;
    /**
     * @generated from protobuf field: bool killing_spree = 55;
     */
    killingSpree: boolean;
    /**
     * Subtlety
     *
     * @generated from protobuf field: int32 relentless_strikes = 56;
     */
    relentlessStrikes: number;
    /**
     * @generated from protobuf field: int32 master_of_deception = 57;
     */
    masterOfDeception: number;
    /**
     * @generated from protobuf field: int32 opportunity = 58;
     */
    opportunity: number;
    /**
     * @generated from protobuf field: int32 sleight_of_hand = 59;
     */
    sleightOfHand: number;
    /**
     * @generated from protobuf field: int32 dirty_tricks = 60;
     */
    dirtyTricks: number;
    /**
     * @generated from protobuf field: int32 camouflage = 61;
     */
    camouflage: number;
    /**
     * @generated from protobuf field: int32 elusiveness = 62;
     */
    elusiveness: number;
    /**
     * @generated from protobuf field: bool ghostly_strike = 63;
     */
    ghostlyStrike: boolean;
    /**
     * @generated from protobuf field: int32 serrated_blades = 64;
     */
    serratedBlades: number;
    /**
     * @generated from protobuf field: int32 setup = 65;
     */
    setup: number;
    /**
     * @generated from protobuf field: int32 initiative = 66;
     */
    initiative: number;
    /**
     * @generated from protobuf field: int32 improved_ambush = 67;
     */
    improvedAmbush: number;
    /**
     * @generated from protobuf field: int32 heightened_senses = 68;
     */
    heightenedSenses: number;
    /**
     * @generated from protobuf field: bool preparation = 69;
     */
    preparation: boolean;
    /**
     * @generated from protobuf field: int32 dirty_deeds = 70;
     */
    dirtyDeeds: number;
    /**
     * @generated from protobuf field: bool hemorrhage = 71;
     */
    hemorrhage: boolean;
    /**
     * @generated from protobuf field: int32 master_of_subtlety = 72;
     */
    masterOfSubtlety: number;
    /**
     * @generated from protobuf field: int32 deadliness = 73;
     */
    deadliness: number;
    /**
     * @generated from protobuf field: int32 enveloping_shadows = 74;
     */
    envelopingShadows: number;
    /**
     * @generated from protobuf field: bool premeditation = 75;
     */
    premeditation: boolean;
    /**
     * @generated from protobuf field: int32 cheat_death = 76;
     */
    cheatDeath: number;
    /**
     * @generated from protobuf field: int32 sinister_calling = 77;
     */
    sinisterCalling: number;
    /**
     * @generated from protobuf field: int32 waylay = 78;
     */
    waylay: number;
    /**
     * @generated from protobuf field: int32 honor_among_thieves = 79;
     */
    honorAmongThieves: number;
    /**
     * @generated from protobuf field: bool shadowstep = 80;
     */
    shadowstep: boolean;
    /**
     * @generated from protobuf field: int32 filthy_tricks = 81;
     */
    filthyTricks: number;
    /**
     * @generated from protobuf field: int32 slaughter_from_the_shadows = 82;
     */
    slaughterFromTheShadows: number;
    /**
     * @generated from protobuf field: bool shadow_dance = 83;
     */
    shadowDance: boolean;
}
/**
 * @generated from protobuf message proto.Rogue
 */
export interface Rogue {
    /**
     * @generated from protobuf field: proto.Rogue.Rotation rotation = 1;
     */
    rotation?: Rogue_Rotation;
    /**
     * @generated from protobuf field: proto.RogueTalents talents = 2;
     */
    talents?: RogueTalents;
    /**
     * @generated from protobuf field: proto.Rogue.Options options = 3;
     */
    options?: Rogue_Options;
}
/**
 * @generated from protobuf message proto.Rogue.Rotation
 */
export interface Rogue_Rotation {
    /**
     * @generated from protobuf field: proto.Rogue.Rotation.Builder builder = 3;
     */
    builder: Rogue_Rotation_Builder;
    /**
     * @generated from protobuf field: bool maintain_expose_armor = 1;
     */
    maintainExposeArmor: boolean;
    /**
     * Allows use of rupture when sensible.
     *
     * @generated from protobuf field: bool use_rupture = 2;
     */
    useRupture: boolean;
    /**
     * Shiv instead of regular builder if deadly poison is about to fall.
     *
     * @generated from protobuf field: bool use_shiv = 5;
     */
    useShiv: boolean;
    /**
     * Don't use damage finishers (eviscerate, rupture) unless >= this many CPs.
     *
     * @generated from protobuf field: int32 min_combo_points_for_damage_finisher = 4;
     */
    minComboPointsForDamageFinisher: number;
}
/**
 * @generated from protobuf enum proto.Rogue.Rotation.Builder
 */
export declare enum Rogue_Rotation_Builder {
    /**
     * @generated from protobuf enum value: Unknown = 0;
     */
    Unknown = 0,
    /**
     * @generated from protobuf enum value: Auto = 1;
     */
    Auto = 1,
    /**
     * @generated from protobuf enum value: SinisterStrike = 2;
     */
    SinisterStrike = 2,
    /**
     * @generated from protobuf enum value: Backstab = 3;
     */
    Backstab = 3,
    /**
     * @generated from protobuf enum value: Hemorrhage = 4;
     */
    Hemorrhage = 4,
    /**
     * @generated from protobuf enum value: Mutilate = 5;
     */
    Mutilate = 5
}
/**
 * @generated from protobuf message proto.Rogue.Options
 */
export interface Rogue_Options {
    /**
     * @generated from protobuf field: proto.RaidTarget tricks_of_the_trade_target = 1;
     */
    tricksOfTheTradeTarget?: RaidTarget;
}
/**
 * @generated from protobuf enum proto.RogueMajorGlyph
 */
export declare enum RogueMajorGlyph {
    /**
     * @generated from protobuf enum value: RogueMajorGlyphNone = 0;
     */
    RogueMajorGlyphNone = 0,
    /**
     * @generated from protobuf enum value: GlyphOfAdrenalineRush = 42954;
     */
    GlyphOfAdrenalineRush = 42954,
    /**
     * @generated from protobuf enum value: GlyphOfAmbush = 42955;
     */
    GlyphOfAmbush = 42955,
    /**
     * @generated from protobuf enum value: GlyphOfBackstab = 42956;
     */
    GlyphOfBackstab = 42956,
    /**
     * @generated from protobuf enum value: GlyphOfBladeFlurry = 42957;
     */
    GlyphOfBladeFlurry = 42957,
    /**
     * @generated from protobuf enum value: GlyphOfCloakOfShadows = 45769;
     */
    GlyphOfCloakOfShadows = 45769,
    /**
     * @generated from protobuf enum value: GlyphOfCripplingPoison = 42958;
     */
    GlyphOfCripplingPoison = 42958,
    /**
     * @generated from protobuf enum value: GlyphOfDeadlyThrow = 42959;
     */
    GlyphOfDeadlyThrow = 42959,
    /**
     * @generated from protobuf enum value: GlyphOfEvasion = 42960;
     */
    GlyphOfEvasion = 42960,
    /**
     * @generated from protobuf enum value: GlyphOfEviscerate = 42961;
     */
    GlyphOfEviscerate = 42961,
    /**
     * @generated from protobuf enum value: GlyphOfExposeArmor = 42962;
     */
    GlyphOfExposeArmor = 42962,
    /**
     * @generated from protobuf enum value: GlyphOfFanOfKnives = 45766;
     */
    GlyphOfFanOfKnives = 45766,
    /**
     * @generated from protobuf enum value: GlyphOfFeint = 42963;
     */
    GlyphOfFeint = 42963,
    /**
     * @generated from protobuf enum value: GlyphOfGarrote = 42964;
     */
    GlyphOfGarrote = 42964,
    /**
     * @generated from protobuf enum value: GlyphOfGhostlyStrike = 42965;
     */
    GlyphOfGhostlyStrike = 42965,
    /**
     * @generated from protobuf enum value: GlyphOfGouge = 42966;
     */
    GlyphOfGouge = 42966,
    /**
     * @generated from protobuf enum value: GlyphOfHemorrhage = 42967;
     */
    GlyphOfHemorrhage = 42967,
    /**
     * @generated from protobuf enum value: GlyphOfHungerForBlood = 45761;
     */
    GlyphOfHungerForBlood = 45761,
    /**
     * @generated from protobuf enum value: GlyphOfKillingSpree = 45762;
     */
    GlyphOfKillingSpree = 45762,
    /**
     * @generated from protobuf enum value: GlyphOfMutilate = 45768;
     */
    GlyphOfMutilate = 45768,
    /**
     * @generated from protobuf enum value: GlyphOfPreparation = 42968;
     */
    GlyphOfPreparation = 42968,
    /**
     * @generated from protobuf enum value: GlyphOfRupture = 42969;
     */
    GlyphOfRupture = 42969,
    /**
     * @generated from protobuf enum value: GlyphOfSap = 42970;
     */
    GlyphOfSap = 42970,
    /**
     * @generated from protobuf enum value: GlyphOfShadowDance = 45764;
     */
    GlyphOfShadowDance = 45764,
    /**
     * @generated from protobuf enum value: GlyphOfSinisterStrike = 42972;
     */
    GlyphOfSinisterStrike = 42972,
    /**
     * @generated from protobuf enum value: GlyphOfSliceAndDice = 42973;
     */
    GlyphOfSliceAndDice = 42973,
    /**
     * @generated from protobuf enum value: GlyphOfSprint = 42974;
     */
    GlyphOfSprint = 42974,
    /**
     * @generated from protobuf enum value: GlyphOfTricksOfTheTrade = 45767;
     */
    GlyphOfTricksOfTheTrade = 45767,
    /**
     * @generated from protobuf enum value: GlyphOfVigor = 42971;
     */
    GlyphOfVigor = 42971
}
/**
 * @generated from protobuf enum proto.RogueMinorGlyph
 */
export declare enum RogueMinorGlyph {
    /**
     * @generated from protobuf enum value: RogueMinorGlyphNone = 0;
     */
    RogueMinorGlyphNone = 0,
    /**
     * @generated from protobuf enum value: GlyphOfBlurredSpeed = 43379;
     */
    GlyphOfBlurredSpeed = 43379,
    /**
     * @generated from protobuf enum value: GlyphOfDistract = 43376;
     */
    GlyphOfDistract = 43376,
    /**
     * @generated from protobuf enum value: GlyphOfPickLock = 43377;
     */
    GlyphOfPickLock = 43377,
    /**
     * @generated from protobuf enum value: GlyphOfPickPocket = 43343;
     */
    GlyphOfPickPocket = 43343,
    /**
     * @generated from protobuf enum value: GlyphOfSafeFall = 43378;
     */
    GlyphOfSafeFall = 43378,
    /**
     * @generated from protobuf enum value: GlyphOfVanish = 43380;
     */
    GlyphOfVanish = 43380
}
declare class RogueTalents$Type extends MessageType<RogueTalents> {
    constructor();
    create(value?: PartialMessage<RogueTalents>): RogueTalents;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RogueTalents): RogueTalents;
    internalBinaryWrite(message: RogueTalents, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.RogueTalents
 */
export declare const RogueTalents: RogueTalents$Type;
declare class Rogue$Type extends MessageType<Rogue> {
    constructor();
    create(value?: PartialMessage<Rogue>): Rogue;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Rogue): Rogue;
    internalBinaryWrite(message: Rogue, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Rogue
 */
export declare const Rogue: Rogue$Type;
declare class Rogue_Rotation$Type extends MessageType<Rogue_Rotation> {
    constructor();
    create(value?: PartialMessage<Rogue_Rotation>): Rogue_Rotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Rogue_Rotation): Rogue_Rotation;
    internalBinaryWrite(message: Rogue_Rotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Rogue.Rotation
 */
export declare const Rogue_Rotation: Rogue_Rotation$Type;
declare class Rogue_Options$Type extends MessageType<Rogue_Options> {
    constructor();
    create(value?: PartialMessage<Rogue_Options>): Rogue_Options;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Rogue_Options): Rogue_Options;
    internalBinaryWrite(message: Rogue_Options, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Rogue.Options
 */
export declare const Rogue_Options: Rogue_Options$Type;
export {};
