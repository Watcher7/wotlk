import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { RaidTarget } from "./common";
/**
 * @generated from protobuf message proto.DruidTalents
 */
export interface DruidTalents {
    /**
     * Balance
     *
     * @generated from protobuf field: int32 starlight_wrath = 1;
     */
    starlightWrath: number;
    /**
     * @generated from protobuf field: int32 genesis = 2;
     */
    genesis: number;
    /**
     * @generated from protobuf field: int32 moonglow = 3;
     */
    moonglow: number;
    /**
     * @generated from protobuf field: int32 natures_majesty = 4;
     */
    naturesMajesty: number;
    /**
     * @generated from protobuf field: int32 improved_moonfire = 5;
     */
    improvedMoonfire: number;
    /**
     * @generated from protobuf field: int32 brambles = 6;
     */
    brambles: number;
    /**
     * @generated from protobuf field: int32 natures_grace = 7;
     */
    naturesGrace: number;
    /**
     * @generated from protobuf field: bool natures_splendor = 8;
     */
    naturesSplendor: boolean;
    /**
     * @generated from protobuf field: int32 natures_reach = 9;
     */
    naturesReach: number;
    /**
     * @generated from protobuf field: int32 vengeance = 10;
     */
    vengeance: number;
    /**
     * @generated from protobuf field: int32 celestial_focus = 11;
     */
    celestialFocus: number;
    /**
     * @generated from protobuf field: int32 lunar_guidance = 12;
     */
    lunarGuidance: number;
    /**
     * @generated from protobuf field: bool insect_swarm = 13;
     */
    insectSwarm: boolean;
    /**
     * @generated from protobuf field: int32 improved_insect_swarm = 14;
     */
    improvedInsectSwarm: number;
    /**
     * @generated from protobuf field: int32 dreamstate = 15;
     */
    dreamstate: number;
    /**
     * @generated from protobuf field: int32 moonfury = 16;
     */
    moonfury: number;
    /**
     * @generated from protobuf field: int32 balance_of_power = 17;
     */
    balanceOfPower: number;
    /**
     * @generated from protobuf field: bool moonkin_form = 18;
     */
    moonkinForm: boolean;
    /**
     * @generated from protobuf field: int32 improved_moonkin_form = 19;
     */
    improvedMoonkinForm: number;
    /**
     * @generated from protobuf field: int32 improved_faerie_fire = 20;
     */
    improvedFaerieFire: number;
    /**
     * @generated from protobuf field: int32 owlkin_frenzy = 21;
     */
    owlkinFrenzy: number;
    /**
     * @generated from protobuf field: int32 wrath_of_cenarius = 22;
     */
    wrathOfCenarius: number;
    /**
     * @generated from protobuf field: int32 eclipse = 23;
     */
    eclipse: number;
    /**
     * @generated from protobuf field: bool typhoon = 24;
     */
    typhoon: boolean;
    /**
     * @generated from protobuf field: bool force_of_nature = 25;
     */
    forceOfNature: boolean;
    /**
     * @generated from protobuf field: int32 gale_winds = 26;
     */
    galeWinds: number;
    /**
     * @generated from protobuf field: int32 earth_and_moon = 27;
     */
    earthAndMoon: number;
    /**
     * @generated from protobuf field: bool starfall = 28;
     */
    starfall: boolean;
    /**
     * Feral Combat
     *
     * @generated from protobuf field: int32 ferocity = 29;
     */
    ferocity: number;
    /**
     * @generated from protobuf field: int32 feral_aggression = 30;
     */
    feralAggression: number;
    /**
     * @generated from protobuf field: int32 feral_instinct = 31;
     */
    feralInstinct: number;
    /**
     * @generated from protobuf field: int32 savage_fury = 32;
     */
    savageFury: number;
    /**
     * @generated from protobuf field: int32 thick_hide = 33;
     */
    thickHide: number;
    /**
     * @generated from protobuf field: int32 feral_swiftness = 34;
     */
    feralSwiftness: number;
    /**
     * @generated from protobuf field: bool survival_instincts = 35;
     */
    survivalInstincts: boolean;
    /**
     * @generated from protobuf field: int32 sharpened_claws = 36;
     */
    sharpenedClaws: number;
    /**
     * @generated from protobuf field: int32 shredding_attacks = 37;
     */
    shreddingAttacks: number;
    /**
     * @generated from protobuf field: int32 predatory_strikes = 38;
     */
    predatoryStrikes: number;
    /**
     * @generated from protobuf field: int32 primal_fury = 39;
     */
    primalFury: number;
    /**
     * @generated from protobuf field: int32 primal_precision = 40;
     */
    primalPrecision: number;
    /**
     * @generated from protobuf field: int32 brutal_impact = 41;
     */
    brutalImpact: number;
    /**
     * @generated from protobuf field: bool feral_charge = 42;
     */
    feralCharge: boolean;
    /**
     * @generated from protobuf field: int32 nurturing_instinct = 43;
     */
    nurturingInstinct: number;
    /**
     * @generated from protobuf field: int32 natural_reaction = 44;
     */
    naturalReaction: number;
    /**
     * @generated from protobuf field: int32 heart_of_the_wild = 45;
     */
    heartOfTheWild: number;
    /**
     * @generated from protobuf field: int32 survival_of_the_fittest = 46;
     */
    survivalOfTheFittest: number;
    /**
     * @generated from protobuf field: bool leader_of_the_pack = 47;
     */
    leaderOfThePack: boolean;
    /**
     * @generated from protobuf field: int32 improved_leader_of_the_pack = 48;
     */
    improvedLeaderOfThePack: number;
    /**
     * @generated from protobuf field: int32 primal_tenacity = 49;
     */
    primalTenacity: number;
    /**
     * @generated from protobuf field: int32 protector_of_the_pack = 50;
     */
    protectorOfThePack: number;
    /**
     * @generated from protobuf field: int32 predatory_instincts = 51;
     */
    predatoryInstincts: number;
    /**
     * @generated from protobuf field: int32 infected_wounds = 52;
     */
    infectedWounds: number;
    /**
     * @generated from protobuf field: int32 king_of_the_jungle = 53;
     */
    kingOfTheJungle: number;
    /**
     * @generated from protobuf field: bool mangle = 54;
     */
    mangle: boolean;
    /**
     * @generated from protobuf field: int32 improved_mangle = 55;
     */
    improvedMangle: number;
    /**
     * @generated from protobuf field: int32 rend_and_tear = 56;
     */
    rendAndTear: number;
    /**
     * @generated from protobuf field: bool primal_gore = 57;
     */
    primalGore: boolean;
    /**
     * @generated from protobuf field: bool berserk = 58;
     */
    berserk: boolean;
    /**
     * Restoration
     *
     * @generated from protobuf field: int32 improved_mark_of_the_wild = 59;
     */
    improvedMarkOfTheWild: number;
    /**
     * @generated from protobuf field: int32 natures_focus = 60;
     */
    naturesFocus: number;
    /**
     * @generated from protobuf field: int32 furor = 61;
     */
    furor: number;
    /**
     * @generated from protobuf field: int32 naturalist = 62;
     */
    naturalist: number;
    /**
     * @generated from protobuf field: int32 subtlety = 63;
     */
    subtlety: number;
    /**
     * @generated from protobuf field: int32 natural_shapeshifter = 64;
     */
    naturalShapeshifter: number;
    /**
     * @generated from protobuf field: int32 intensity = 65;
     */
    intensity: number;
    /**
     * @generated from protobuf field: bool omen_of_clarity = 66;
     */
    omenOfClarity: boolean;
    /**
     * @generated from protobuf field: int32 master_shapeshifter = 67;
     */
    masterShapeshifter: number;
    /**
     * @generated from protobuf field: int32 tranquil_spirit = 68;
     */
    tranquilSpirit: number;
    /**
     * @generated from protobuf field: int32 improved_rejuvenation = 69;
     */
    improvedRejuvenation: number;
    /**
     * @generated from protobuf field: bool natures_swiftness = 70;
     */
    naturesSwiftness: boolean;
    /**
     * @generated from protobuf field: int32 gift_of_nature = 71;
     */
    giftOfNature: number;
    /**
     * @generated from protobuf field: int32 improved_tranquility = 72;
     */
    improvedTranquility: number;
    /**
     * @generated from protobuf field: int32 empowered_touch = 73;
     */
    empoweredTouch: number;
    /**
     * @generated from protobuf field: int32 natures_bounty = 74;
     */
    naturesBounty: number;
    /**
     * @generated from protobuf field: int32 living_spirit = 75;
     */
    livingSpirit: number;
    /**
     * @generated from protobuf field: bool swiftmend = 76;
     */
    swiftmend: boolean;
    /**
     * @generated from protobuf field: int32 natural_perfection = 77;
     */
    naturalPerfection: number;
    /**
     * @generated from protobuf field: int32 empowered_rejuvenation = 78;
     */
    empoweredRejuvenation: number;
    /**
     * @generated from protobuf field: int32 living_seed = 79;
     */
    livingSeed: number;
    /**
     * @generated from protobuf field: int32 revitalize = 80;
     */
    revitalize: number;
    /**
     * @generated from protobuf field: bool tree_of_life = 81;
     */
    treeOfLife: boolean;
    /**
     * @generated from protobuf field: int32 improved_tree_of_life = 82;
     */
    improvedTreeOfLife: number;
    /**
     * @generated from protobuf field: int32 improved_barkskin = 83;
     */
    improvedBarkskin: number;
    /**
     * @generated from protobuf field: int32 gift_of_the_earthmother = 84;
     */
    giftOfTheEarthmother: number;
    /**
     * @generated from protobuf field: bool wild_growth = 85;
     */
    wildGrowth: boolean;
}
/**
 * @generated from protobuf message proto.BalanceDruid
 */
export interface BalanceDruid {
    /**
     * @generated from protobuf field: proto.BalanceDruid.Rotation rotation = 1;
     */
    rotation?: BalanceDruid_Rotation;
    /**
     * @generated from protobuf field: proto.DruidTalents talents = 2;
     */
    talents?: DruidTalents;
    /**
     * @generated from protobuf field: proto.BalanceDruid.Options options = 3;
     */
    options?: BalanceDruid_Options;
}
/**
 * @generated from protobuf message proto.BalanceDruid.Rotation
 */
export interface BalanceDruid_Rotation {
    /**
     * @generated from protobuf field: proto.BalanceDruid.Rotation.RotationType type = 1;
     */
    type: BalanceDruid_Rotation_RotationType;
}
/**
 * @generated from protobuf enum proto.BalanceDruid.Rotation.RotationType
 */
export declare enum BalanceDruid_Rotation_RotationType {
    /**
     * @generated from protobuf enum value: Unknown = 0;
     */
    Unknown = 0,
    /**
     * @generated from protobuf enum value: Adaptive = 1;
     */
    Adaptive = 1
}
/**
 * @generated from protobuf message proto.BalanceDruid.Options
 */
export interface BalanceDruid_Options {
    /**
     * @generated from protobuf field: proto.RaidTarget innervate_target = 1;
     */
    innervateTarget?: RaidTarget;
    /**
     * @generated from protobuf field: bool battle_res = 2;
     */
    battleRes: boolean;
}
/**
 * @generated from protobuf message proto.FeralDruid
 */
export interface FeralDruid {
    /**
     * @generated from protobuf field: proto.FeralDruid.Rotation rotation = 1;
     */
    rotation?: FeralDruid_Rotation;
    /**
     * @generated from protobuf field: proto.DruidTalents talents = 2;
     */
    talents?: DruidTalents;
    /**
     * @generated from protobuf field: proto.FeralDruid.Options options = 3;
     */
    options?: FeralDruid_Options;
}
/**
 * @generated from protobuf message proto.FeralDruid.Rotation
 */
export interface FeralDruid_Rotation {
    /**
     * @generated from protobuf field: proto.FeralDruid.Rotation.FinishingMove finishing_move = 1;
     */
    finishingMove: FeralDruid_Rotation_FinishingMove;
    /**
     * @generated from protobuf field: bool mangle_trick = 2;
     */
    mangleTrick: boolean;
    /**
     * @generated from protobuf field: bool biteweave = 3;
     */
    biteweave: boolean;
    /**
     * @generated from protobuf field: bool ripweave = 8;
     */
    ripweave: boolean;
    /**
     * @generated from protobuf field: int32 rip_min_combo_points = 5;
     */
    ripMinComboPoints: number;
    /**
     * @generated from protobuf field: int32 bite_min_combo_points = 6;
     */
    biteMinComboPoints: number;
    /**
     * @generated from protobuf field: bool rake_trick = 7;
     */
    rakeTrick: boolean;
    /**
     * @generated from protobuf field: bool maintain_faerie_fire = 9;
     */
    maintainFaerieFire: boolean;
}
/**
 * @generated from protobuf enum proto.FeralDruid.Rotation.FinishingMove
 */
export declare enum FeralDruid_Rotation_FinishingMove {
    /**
     * @generated from protobuf enum value: Rip = 0;
     */
    Rip = 0,
    /**
     * @generated from protobuf enum value: Bite = 1;
     */
    Bite = 1,
    /**
     * @generated from protobuf enum value: None = 2;
     */
    None = 2
}
/**
 * @generated from protobuf message proto.FeralDruid.Options
 */
export interface FeralDruid_Options {
    /**
     * @generated from protobuf field: proto.RaidTarget innervate_target = 1;
     */
    innervateTarget?: RaidTarget;
    /**
     * @generated from protobuf field: int32 latency_ms = 2;
     */
    latencyMs: number;
}
/**
 * @generated from protobuf message proto.FeralTankDruid
 */
export interface FeralTankDruid {
    /**
     * @generated from protobuf field: proto.FeralTankDruid.Rotation rotation = 1;
     */
    rotation?: FeralTankDruid_Rotation;
    /**
     * @generated from protobuf field: proto.DruidTalents talents = 2;
     */
    talents?: DruidTalents;
    /**
     * @generated from protobuf field: proto.FeralTankDruid.Options options = 3;
     */
    options?: FeralTankDruid_Options;
}
/**
 * @generated from protobuf message proto.FeralTankDruid.Rotation
 */
export interface FeralTankDruid_Rotation {
    /**
     * Minimum rage to queue HS or Cleave.
     *
     * @generated from protobuf field: int32 maul_rage_threshold = 1;
     */
    maulRageThreshold: number;
    /**
     * @generated from protobuf field: bool maintain_demoralizing_roar = 2;
     */
    maintainDemoralizingRoar: boolean;
    /**
     * @generated from protobuf field: bool maintain_faerie_fire = 3;
     */
    maintainFaerieFire: boolean;
    /**
     * @generated from protobuf field: proto.FeralTankDruid.Rotation.Swipe swipe = 4;
     */
    swipe: FeralTankDruid_Rotation_Swipe;
    /**
     * @generated from protobuf field: double swipe_ap_threshold = 5;
     */
    swipeApThreshold: number;
}
/**
 * @generated from protobuf enum proto.FeralTankDruid.Rotation.Swipe
 */
export declare enum FeralTankDruid_Rotation_Swipe {
    /**
     * @generated from protobuf enum value: SwipeNone = 0;
     */
    SwipeNone = 0,
    /**
     * @generated from protobuf enum value: SwipeWithEnoughAP = 1;
     */
    SwipeWithEnoughAP = 1,
    /**
     * @generated from protobuf enum value: SwipeSpam = 2;
     */
    SwipeSpam = 2
}
/**
 * @generated from protobuf message proto.FeralTankDruid.Options
 */
export interface FeralTankDruid_Options {
    /**
     * @generated from protobuf field: proto.RaidTarget innervate_target = 1;
     */
    innervateTarget?: RaidTarget;
    /**
     * @generated from protobuf field: double starting_rage = 2;
     */
    startingRage: number;
}
/**
 * @generated from protobuf enum proto.DruidMajorGlyph
 */
export declare enum DruidMajorGlyph {
    /**
     * @generated from protobuf enum value: DruidMajorGlyphNone = 0;
     */
    DruidMajorGlyphNone = 0,
    /**
     * @generated from protobuf enum value: GlyphOfBarkskin = 45623;
     */
    GlyphOfBarkskin = 45623,
    /**
     * @generated from protobuf enum value: GlyphOfBerserk = 45601;
     */
    GlyphOfBerserk = 45601,
    /**
     * @generated from protobuf enum value: GlyphOfClaw = 48720;
     */
    GlyphOfClaw = 48720,
    /**
     * @generated from protobuf enum value: GlyphOfEntanglingRoots = 40924;
     */
    GlyphOfEntanglingRoots = 40924,
    /**
     * @generated from protobuf enum value: GlyphOfFocus = 44928;
     */
    GlyphOfFocus = 44928,
    /**
     * @generated from protobuf enum value: GlyphOfFrenziedRegeneration = 40896;
     */
    GlyphOfFrenziedRegeneration = 40896,
    /**
     * @generated from protobuf enum value: GlyphOfGrowling = 40899;
     */
    GlyphOfGrowling = 40899,
    /**
     * @generated from protobuf enum value: GlyphOfHealingTouch = 40914;
     */
    GlyphOfHealingTouch = 40914,
    /**
     * @generated from protobuf enum value: GlyphOfHurricane = 40920;
     */
    GlyphOfHurricane = 40920,
    /**
     * @generated from protobuf enum value: GlyphOfInnervate = 40908;
     */
    GlyphOfInnervate = 40908,
    /**
     * @generated from protobuf enum value: GlyphOfInsectSwarm = 40919;
     */
    GlyphOfInsectSwarm = 40919,
    /**
     * @generated from protobuf enum value: GlyphOfLifebloom = 40915;
     */
    GlyphOfLifebloom = 40915,
    /**
     * @generated from protobuf enum value: GlyphOfMangle = 40900;
     */
    GlyphOfMangle = 40900,
    /**
     * @generated from protobuf enum value: GlyphOfMaul = 40897;
     */
    GlyphOfMaul = 40897,
    /**
     * @generated from protobuf enum value: GlyphOfMonsoon = 45622;
     */
    GlyphOfMonsoon = 45622,
    /**
     * @generated from protobuf enum value: GlyphOfMoonfire = 40923;
     */
    GlyphOfMoonfire = 40923,
    /**
     * @generated from protobuf enum value: GlyphOfNourish = 45603;
     */
    GlyphOfNourish = 45603,
    /**
     * @generated from protobuf enum value: GlyphOfRake = 40903;
     */
    GlyphOfRake = 40903,
    /**
     * @generated from protobuf enum value: GlyphOfRapidRejuvenation = 50125;
     */
    GlyphOfRapidRejuvenation = 50125,
    /**
     * @generated from protobuf enum value: GlyphOfRebirth = 40909;
     */
    GlyphOfRebirth = 40909,
    /**
     * @generated from protobuf enum value: GlyphOfRegrowth = 40912;
     */
    GlyphOfRegrowth = 40912,
    /**
     * @generated from protobuf enum value: GlyphOfRejuvenation = 40913;
     */
    GlyphOfRejuvenation = 40913,
    /**
     * @generated from protobuf enum value: GlyphOfRip = 40902;
     */
    GlyphOfRip = 40902,
    /**
     * @generated from protobuf enum value: GlyphOfSavageRoar = 45604;
     */
    GlyphOfSavageRoar = 45604,
    /**
     * @generated from protobuf enum value: GlyphOfShred = 40901;
     */
    GlyphOfShred = 40901,
    /**
     * @generated from protobuf enum value: GlyphOfStarfall = 40921;
     */
    GlyphOfStarfall = 40921,
    /**
     * @generated from protobuf enum value: GlyphOfStarfire = 40916;
     */
    GlyphOfStarfire = 40916,
    /**
     * @generated from protobuf enum value: GlyphOfSurvivalInstincts = 46372;
     */
    GlyphOfSurvivalInstincts = 46372,
    /**
     * @generated from protobuf enum value: GlyphOfSwiftmend = 40906;
     */
    GlyphOfSwiftmend = 40906,
    /**
     * @generated from protobuf enum value: GlyphOfWildGrowth = 45602;
     */
    GlyphOfWildGrowth = 45602,
    /**
     * @generated from protobuf enum value: GlyphOfWrath = 40922;
     */
    GlyphOfWrath = 40922
}
/**
 * @generated from protobuf enum proto.DruidMinorGlyph
 */
export declare enum DruidMinorGlyph {
    /**
     * @generated from protobuf enum value: DruidMinorGlyphNone = 0;
     */
    DruidMinorGlyphNone = 0,
    /**
     * @generated from protobuf enum value: GlyphOfAquaticForm = 43316;
     */
    GlyphOfAquaticForm = 43316,
    /**
     * @generated from protobuf enum value: GlyphOfChallengingRoar = 43334;
     */
    GlyphOfChallengingRoar = 43334,
    /**
     * @generated from protobuf enum value: GlyphOfDash = 43674;
     */
    GlyphOfDash = 43674,
    /**
     * @generated from protobuf enum value: GlyphOfTheWild = 43335;
     */
    GlyphOfTheWild = 43335,
    /**
     * @generated from protobuf enum value: GlyphOfThorns = 43332;
     */
    GlyphOfThorns = 43332,
    /**
     * @generated from protobuf enum value: GlyphOfTyphoon = 44922;
     */
    GlyphOfTyphoon = 44922,
    /**
     * @generated from protobuf enum value: GlyphOfUnburdenedRebirth = 43331;
     */
    GlyphOfUnburdenedRebirth = 43331
}
declare class DruidTalents$Type extends MessageType<DruidTalents> {
    constructor();
    create(value?: PartialMessage<DruidTalents>): DruidTalents;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DruidTalents): DruidTalents;
    internalBinaryWrite(message: DruidTalents, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.DruidTalents
 */
export declare const DruidTalents: DruidTalents$Type;
declare class BalanceDruid$Type extends MessageType<BalanceDruid> {
    constructor();
    create(value?: PartialMessage<BalanceDruid>): BalanceDruid;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BalanceDruid): BalanceDruid;
    internalBinaryWrite(message: BalanceDruid, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.BalanceDruid
 */
export declare const BalanceDruid: BalanceDruid$Type;
declare class BalanceDruid_Rotation$Type extends MessageType<BalanceDruid_Rotation> {
    constructor();
    create(value?: PartialMessage<BalanceDruid_Rotation>): BalanceDruid_Rotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BalanceDruid_Rotation): BalanceDruid_Rotation;
    internalBinaryWrite(message: BalanceDruid_Rotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.BalanceDruid.Rotation
 */
export declare const BalanceDruid_Rotation: BalanceDruid_Rotation$Type;
declare class BalanceDruid_Options$Type extends MessageType<BalanceDruid_Options> {
    constructor();
    create(value?: PartialMessage<BalanceDruid_Options>): BalanceDruid_Options;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BalanceDruid_Options): BalanceDruid_Options;
    internalBinaryWrite(message: BalanceDruid_Options, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.BalanceDruid.Options
 */
export declare const BalanceDruid_Options: BalanceDruid_Options$Type;
declare class FeralDruid$Type extends MessageType<FeralDruid> {
    constructor();
    create(value?: PartialMessage<FeralDruid>): FeralDruid;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FeralDruid): FeralDruid;
    internalBinaryWrite(message: FeralDruid, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.FeralDruid
 */
export declare const FeralDruid: FeralDruid$Type;
declare class FeralDruid_Rotation$Type extends MessageType<FeralDruid_Rotation> {
    constructor();
    create(value?: PartialMessage<FeralDruid_Rotation>): FeralDruid_Rotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FeralDruid_Rotation): FeralDruid_Rotation;
    internalBinaryWrite(message: FeralDruid_Rotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.FeralDruid.Rotation
 */
export declare const FeralDruid_Rotation: FeralDruid_Rotation$Type;
declare class FeralDruid_Options$Type extends MessageType<FeralDruid_Options> {
    constructor();
    create(value?: PartialMessage<FeralDruid_Options>): FeralDruid_Options;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FeralDruid_Options): FeralDruid_Options;
    internalBinaryWrite(message: FeralDruid_Options, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.FeralDruid.Options
 */
export declare const FeralDruid_Options: FeralDruid_Options$Type;
declare class FeralTankDruid$Type extends MessageType<FeralTankDruid> {
    constructor();
    create(value?: PartialMessage<FeralTankDruid>): FeralTankDruid;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FeralTankDruid): FeralTankDruid;
    internalBinaryWrite(message: FeralTankDruid, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.FeralTankDruid
 */
export declare const FeralTankDruid: FeralTankDruid$Type;
declare class FeralTankDruid_Rotation$Type extends MessageType<FeralTankDruid_Rotation> {
    constructor();
    create(value?: PartialMessage<FeralTankDruid_Rotation>): FeralTankDruid_Rotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FeralTankDruid_Rotation): FeralTankDruid_Rotation;
    internalBinaryWrite(message: FeralTankDruid_Rotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.FeralTankDruid.Rotation
 */
export declare const FeralTankDruid_Rotation: FeralTankDruid_Rotation$Type;
declare class FeralTankDruid_Options$Type extends MessageType<FeralTankDruid_Options> {
    constructor();
    create(value?: PartialMessage<FeralTankDruid_Options>): FeralTankDruid_Options;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FeralTankDruid_Options): FeralTankDruid_Options;
    internalBinaryWrite(message: FeralTankDruid_Options, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.FeralTankDruid.Options
 */
export declare const FeralTankDruid_Options: FeralTankDruid_Options$Type;
export {};
