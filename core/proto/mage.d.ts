import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message proto.MageTalents
 */
export interface MageTalents {
    /**
     * Arcane
     *
     * @generated from protobuf field: int32 arcane_subtlety = 1;
     */
    arcaneSubtlety: number;
    /**
     * @generated from protobuf field: int32 arcane_focus = 2;
     */
    arcaneFocus: number;
    /**
     * @generated from protobuf field: int32 arcane_stability = 3;
     */
    arcaneStability: number;
    /**
     * @generated from protobuf field: int32 arcane_fortitude = 4;
     */
    arcaneFortitude: number;
    /**
     * @generated from protobuf field: int32 magic_absorption = 5;
     */
    magicAbsorption: number;
    /**
     * @generated from protobuf field: int32 arcane_concentration = 6;
     */
    arcaneConcentration: number;
    /**
     * @generated from protobuf field: int32 magic_attunement = 7;
     */
    magicAttunement: number;
    /**
     * @generated from protobuf field: int32 spell_impact = 8;
     */
    spellImpact: number;
    /**
     * @generated from protobuf field: int32 student_of_the_mind = 9;
     */
    studentOfTheMind: number;
    /**
     * @generated from protobuf field: bool focus_magic = 10;
     */
    focusMagic: boolean;
    /**
     * @generated from protobuf field: int32 arcane_shielding = 11;
     */
    arcaneShielding: number;
    /**
     * @generated from protobuf field: int32 improved_counterspell = 12;
     */
    improvedCounterspell: number;
    /**
     * @generated from protobuf field: int32 arcane_meditation = 13;
     */
    arcaneMeditation: number;
    /**
     * @generated from protobuf field: int32 torment_the_weak = 14;
     */
    tormentTheWeak: number;
    /**
     * @generated from protobuf field: int32 improved_blink = 15;
     */
    improvedBlink: number;
    /**
     * @generated from protobuf field: bool presence_of_mind = 16;
     */
    presenceOfMind: boolean;
    /**
     * @generated from protobuf field: int32 arcane_mind = 17;
     */
    arcaneMind: number;
    /**
     * @generated from protobuf field: int32 prismatic_cloak = 18;
     */
    prismaticCloak: number;
    /**
     * @generated from protobuf field: int32 arcane_instability = 19;
     */
    arcaneInstability: number;
    /**
     * @generated from protobuf field: int32 arcane_potency = 20;
     */
    arcanePotency: number;
    /**
     * @generated from protobuf field: int32 arcane_empowerment = 21;
     */
    arcaneEmpowerment: number;
    /**
     * @generated from protobuf field: bool arcane_power = 22;
     */
    arcanePower: boolean;
    /**
     * @generated from protobuf field: int32 incanters_absorption = 23;
     */
    incantersAbsorption: number;
    /**
     * @generated from protobuf field: int32 arcane_flows = 24;
     */
    arcaneFlows: number;
    /**
     * @generated from protobuf field: int32 mind_mastery = 25;
     */
    mindMastery: number;
    /**
     * @generated from protobuf field: bool slow = 26;
     */
    slow: boolean;
    /**
     * @generated from protobuf field: int32 missile_barrage = 27;
     */
    missileBarrage: number;
    /**
     * @generated from protobuf field: int32 netherwind_presence = 28;
     */
    netherwindPresence: number;
    /**
     * @generated from protobuf field: int32 spell_power = 29;
     */
    spellPower: number;
    /**
     * @generated from protobuf field: bool arcane_barrage = 30;
     */
    arcaneBarrage: boolean;
    /**
     * Fire
     *
     * @generated from protobuf field: int32 improved_fire_blast = 31;
     */
    improvedFireBlast: number;
    /**
     * @generated from protobuf field: int32 incineration = 32;
     */
    incineration: number;
    /**
     * @generated from protobuf field: int32 improved_fireball = 33;
     */
    improvedFireball: number;
    /**
     * @generated from protobuf field: int32 ignite = 34;
     */
    ignite: number;
    /**
     * @generated from protobuf field: int32 burning_determination = 35;
     */
    burningDetermination: number;
    /**
     * @generated from protobuf field: int32 world_in_flames = 36;
     */
    worldInFlames: number;
    /**
     * @generated from protobuf field: int32 flame_throwing = 37;
     */
    flameThrowing: number;
    /**
     * @generated from protobuf field: int32 impact = 38;
     */
    impact: number;
    /**
     * @generated from protobuf field: bool pyroblast = 39;
     */
    pyroblast: boolean;
    /**
     * @generated from protobuf field: int32 burning_soul = 40;
     */
    burningSoul: number;
    /**
     * @generated from protobuf field: int32 improved_scorch = 41;
     */
    improvedScorch: number;
    /**
     * @generated from protobuf field: int32 molten_shields = 42;
     */
    moltenShields: number;
    /**
     * @generated from protobuf field: int32 master_of_elements = 43;
     */
    masterOfElements: number;
    /**
     * @generated from protobuf field: int32 playing_with_fire = 44;
     */
    playingWithFire: number;
    /**
     * @generated from protobuf field: int32 critical_mass = 45;
     */
    criticalMass: number;
    /**
     * @generated from protobuf field: bool blast_wave = 46;
     */
    blastWave: boolean;
    /**
     * @generated from protobuf field: int32 blazing_speed = 47;
     */
    blazingSpeed: number;
    /**
     * @generated from protobuf field: int32 fire_power = 48;
     */
    firePower: number;
    /**
     * @generated from protobuf field: int32 pyromaniac = 49;
     */
    pyromaniac: number;
    /**
     * @generated from protobuf field: bool combustion = 50;
     */
    combustion: boolean;
    /**
     * @generated from protobuf field: int32 molten_fury = 51;
     */
    moltenFury: number;
    /**
     * @generated from protobuf field: int32 fiery_payback = 52;
     */
    fieryPayback: number;
    /**
     * @generated from protobuf field: int32 empowered_fire = 53;
     */
    empoweredFire: number;
    /**
     * @generated from protobuf field: int32 firestarter = 54;
     */
    firestarter: number;
    /**
     * @generated from protobuf field: bool dragons_breath = 55;
     */
    dragonsBreath: boolean;
    /**
     * @generated from protobuf field: int32 hot_streak = 56;
     */
    hotStreak: number;
    /**
     * @generated from protobuf field: int32 burnout = 57;
     */
    burnout: number;
    /**
     * @generated from protobuf field: bool living_bomb = 58;
     */
    livingBomb: boolean;
    /**
     * Frost
     *
     * @generated from protobuf field: int32 frostbite = 59;
     */
    frostbite: number;
    /**
     * @generated from protobuf field: int32 improved_frostbolt = 60;
     */
    improvedFrostbolt: number;
    /**
     * @generated from protobuf field: int32 ice_floes = 61;
     */
    iceFloes: number;
    /**
     * @generated from protobuf field: int32 ice_shards = 62;
     */
    iceShards: number;
    /**
     * @generated from protobuf field: int32 frost_warding = 63;
     */
    frostWarding: number;
    /**
     * @generated from protobuf field: int32 precision = 64;
     */
    precision: number;
    /**
     * @generated from protobuf field: int32 permafrost = 65;
     */
    permafrost: number;
    /**
     * @generated from protobuf field: int32 piercing_ice = 66;
     */
    piercingIce: number;
    /**
     * @generated from protobuf field: bool icy_veins = 67;
     */
    icyVeins: boolean;
    /**
     * @generated from protobuf field: int32 improved_blizzard = 68;
     */
    improvedBlizzard: number;
    /**
     * @generated from protobuf field: int32 arctic_reach = 69;
     */
    arcticReach: number;
    /**
     * @generated from protobuf field: int32 frost_channeling = 70;
     */
    frostChanneling: number;
    /**
     * @generated from protobuf field: int32 shatter = 71;
     */
    shatter: number;
    /**
     * @generated from protobuf field: bool cold_snap = 72;
     */
    coldSnap: boolean;
    /**
     * @generated from protobuf field: int32 improved_cone_of_cold = 73;
     */
    improvedConeOfCold: number;
    /**
     * @generated from protobuf field: int32 frozen_core = 74;
     */
    frozenCore: number;
    /**
     * @generated from protobuf field: int32 cold_as_ice = 75;
     */
    coldAsIce: number;
    /**
     * @generated from protobuf field: int32 winters_chill = 76;
     */
    wintersChill: number;
    /**
     * @generated from protobuf field: int32 shattered_barrier = 77;
     */
    shatteredBarrier: number;
    /**
     * @generated from protobuf field: bool ice_barrier = 78;
     */
    iceBarrier: boolean;
    /**
     * @generated from protobuf field: int32 arctic_winds = 79;
     */
    arcticWinds: number;
    /**
     * @generated from protobuf field: int32 empowered_frostbolt = 80;
     */
    empoweredFrostbolt: number;
    /**
     * @generated from protobuf field: int32 fingers_of_frost = 81;
     */
    fingersOfFrost: number;
    /**
     * @generated from protobuf field: int32 brain_freeze = 82;
     */
    brainFreeze: number;
    /**
     * @generated from protobuf field: bool summon_water_elemental = 83;
     */
    summonWaterElemental: boolean;
    /**
     * @generated from protobuf field: int32 enduring_winter = 84;
     */
    enduringWinter: number;
    /**
     * @generated from protobuf field: int32 chilled_to_the_bone = 85;
     */
    chilledToTheBone: number;
    /**
     * @generated from protobuf field: bool deep_freeze = 86;
     */
    deepFreeze: boolean;
}
/**
 * @generated from protobuf message proto.Mage
 */
export interface Mage {
    /**
     * @generated from protobuf field: proto.Mage.Rotation rotation = 1;
     */
    rotation?: Mage_Rotation;
    /**
     * @generated from protobuf field: proto.MageTalents talents = 2;
     */
    talents?: MageTalents;
    /**
     * @generated from protobuf field: proto.Mage.Options options = 3;
     */
    options?: Mage_Options;
}
/**
 * @generated from protobuf message proto.Mage.Rotation
 */
export interface Mage_Rotation {
    /**
     * @generated from protobuf field: proto.Mage.Rotation.Type type = 1;
     */
    type: Mage_Rotation_Type;
    /**
     * @generated from protobuf field: proto.Mage.Rotation.ArcaneRotation arcane = 2;
     */
    arcane?: Mage_Rotation_ArcaneRotation;
    /**
     * @generated from protobuf field: proto.Mage.Rotation.FireRotation fire = 3;
     */
    fire?: Mage_Rotation_FireRotation;
    /**
     * @generated from protobuf field: proto.Mage.Rotation.FrostRotation frost = 4;
     */
    frost?: Mage_Rotation_FrostRotation;
    /**
     * @generated from protobuf field: proto.Mage.Rotation.AoeRotation aoe = 5;
     */
    aoe?: Mage_Rotation_AoeRotation;
    /**
     * @generated from protobuf field: bool multi_target_rotation = 6;
     */
    multiTargetRotation: boolean;
}
/**
 * @generated from protobuf message proto.Mage.Rotation.ArcaneRotation
 */
export interface Mage_Rotation_ArcaneRotation {
    /**
     * The spells to use to fill time while waiting for arcane blast stacks to drop.
     *
     * @generated from protobuf field: proto.Mage.Rotation.ArcaneRotation.Filler filler = 1;
     */
    filler: Mage_Rotation_ArcaneRotation_Filler;
    /**
     * Number of arcane blasts to cast before switching to filler.
     *
     * @generated from protobuf field: int32 arcane_blasts_between_fillers = 2;
     */
    arcaneBlastsBetweenFillers: number;
    /**
     * Percentage of mana (0-1) below which to switch to regen rotation.
     *
     * @generated from protobuf field: double start_regen_rotation_percent = 3;
     */
    startRegenRotationPercent: number;
    /**
     * Percentage of mana (0-1) above which to switch to regular rotation.
     *
     * @generated from protobuf field: double stop_regen_rotation_percent = 4;
     */
    stopRegenRotationPercent: number;
    /**
     * Prevents DPS cooldowns from being using during regen rotation.
     *
     * @generated from protobuf field: bool disable_dps_cooldowns_during_regen = 5;
     */
    disableDpsCooldownsDuringRegen: boolean;
}
/**
 * @generated from protobuf enum proto.Mage.Rotation.ArcaneRotation.Filler
 */
export declare enum Mage_Rotation_ArcaneRotation_Filler {
    /**
     * @generated from protobuf enum value: Frostbolt = 0;
     */
    Frostbolt = 0,
    /**
     * @generated from protobuf enum value: ArcaneMissiles = 1;
     */
    ArcaneMissiles = 1,
    /**
     * @generated from protobuf enum value: Scorch = 2;
     */
    Scorch = 2,
    /**
     * @generated from protobuf enum value: Fireball = 3;
     */
    Fireball = 3,
    /**
     * @generated from protobuf enum value: ArcaneMissilesFrostbolt = 4;
     */
    ArcaneMissilesFrostbolt = 4,
    /**
     * @generated from protobuf enum value: ArcaneMissilesScorch = 5;
     */
    ArcaneMissilesScorch = 5,
    /**
     * @generated from protobuf enum value: ScorchTwoFireball = 6;
     */
    ScorchTwoFireball = 6
}
/**
 * @generated from protobuf message proto.Mage.Rotation.FireRotation
 */
export interface Mage_Rotation_FireRotation {
    /**
     * @generated from protobuf field: proto.Mage.Rotation.FireRotation.PrimarySpell primary_spell = 1;
     */
    primarySpell: Mage_Rotation_FireRotation_PrimarySpell;
    /**
     * @generated from protobuf field: bool maintain_improved_scorch = 2;
     */
    maintainImprovedScorch: boolean;
    /**
     * @generated from protobuf field: bool weave_fire_blast = 3;
     */
    weaveFireBlast: boolean;
}
/**
 * @generated from protobuf enum proto.Mage.Rotation.FireRotation.PrimarySpell
 */
export declare enum Mage_Rotation_FireRotation_PrimarySpell {
    /**
     * @generated from protobuf enum value: Fireball = 0;
     */
    Fireball = 0,
    /**
     * @generated from protobuf enum value: Scorch = 1;
     */
    Scorch = 1
}
/**
 * @generated from protobuf message proto.Mage.Rotation.FrostRotation
 */
export interface Mage_Rotation_FrostRotation {
    /**
     * Chance for water elemental to disobey, doing nothing rather than cast.
     *
     * @generated from protobuf field: double water_elemental_disobey_chance = 3;
     */
    waterElementalDisobeyChance: number;
}
/**
 * @generated from protobuf message proto.Mage.Rotation.AoeRotation
 */
export interface Mage_Rotation_AoeRotation {
    /**
     * @generated from protobuf field: proto.Mage.Rotation.AoeRotation.Rotation rotation = 1;
     */
    rotation: Mage_Rotation_AoeRotation_Rotation;
}
/**
 * @generated from protobuf enum proto.Mage.Rotation.AoeRotation.Rotation
 */
export declare enum Mage_Rotation_AoeRotation_Rotation {
    /**
     * @generated from protobuf enum value: ArcaneExplosion = 0;
     */
    ArcaneExplosion = 0,
    /**
     * @generated from protobuf enum value: Flamestrike = 1;
     */
    Flamestrike = 1,
    /**
     * @generated from protobuf enum value: Blizzard = 2;
     */
    Blizzard = 2
}
/**
 * Just used for controlling which options are displayed in the UI. Is not
 * used by the sim.
 *
 * @generated from protobuf enum proto.Mage.Rotation.Type
 */
export declare enum Mage_Rotation_Type {
    /**
     * @generated from protobuf enum value: Arcane = 0;
     */
    Arcane = 0,
    /**
     * @generated from protobuf enum value: Fire = 1;
     */
    Fire = 1,
    /**
     * @generated from protobuf enum value: Frost = 2;
     */
    Frost = 2
}
/**
 * @generated from protobuf message proto.Mage.Options
 */
export interface Mage_Options {
    /**
     * @generated from protobuf field: proto.Mage.Options.ArmorType armor = 1;
     */
    armor: Mage_Options_ArmorType;
    /**
     * Number of Evocation ticks to use. If 0, use all of them.
     *
     * @generated from protobuf field: int32 evocation_ticks = 2;
     */
    evocationTicks: number;
}
/**
 * @generated from protobuf enum proto.Mage.Options.ArmorType
 */
export declare enum Mage_Options_ArmorType {
    /**
     * @generated from protobuf enum value: NoArmor = 0;
     */
    NoArmor = 0,
    /**
     * @generated from protobuf enum value: MageArmor = 1;
     */
    MageArmor = 1,
    /**
     * @generated from protobuf enum value: MoltenArmor = 2;
     */
    MoltenArmor = 2
}
/**
 * @generated from protobuf enum proto.MageMajorGlyph
 */
export declare enum MageMajorGlyph {
    /**
     * @generated from protobuf enum value: MageMajorGlyphNone = 0;
     */
    MageMajorGlyphNone = 0,
    /**
     * @generated from protobuf enum value: GlyphOfArcaneBarrage = 45738;
     */
    GlyphOfArcaneBarrage = 45738,
    /**
     * @generated from protobuf enum value: GlyphOfArcaneBlast = 44955;
     */
    GlyphOfArcaneBlast = 44955,
    /**
     * @generated from protobuf enum value: GlyphOfArcaneExplosion = 42734;
     */
    GlyphOfArcaneExplosion = 42734,
    /**
     * @generated from protobuf enum value: GlyphOfArcaneMissiles = 42735;
     */
    GlyphOfArcaneMissiles = 42735,
    /**
     * @generated from protobuf enum value: GlyphOfArcanePower = 42736;
     */
    GlyphOfArcanePower = 42736,
    /**
     * @generated from protobuf enum value: GlyphOfBlink = 42737;
     */
    GlyphOfBlink = 42737,
    /**
     * @generated from protobuf enum value: GlyphOfDeepFreeze = 45736;
     */
    GlyphOfDeepFreeze = 45736,
    /**
     * @generated from protobuf enum value: GlyphOfEternalWater = 50045;
     */
    GlyphOfEternalWater = 50045,
    /**
     * @generated from protobuf enum value: GlyphOfEvocation = 42738;
     */
    GlyphOfEvocation = 42738,
    /**
     * @generated from protobuf enum value: GlyphOfFireBlast = 42740;
     */
    GlyphOfFireBlast = 42740,
    /**
     * @generated from protobuf enum value: GlyphOfFireball = 42739;
     */
    GlyphOfFireball = 42739,
    /**
     * @generated from protobuf enum value: GlyphOfFrostNova = 42741;
     */
    GlyphOfFrostNova = 42741,
    /**
     * @generated from protobuf enum value: GlyphOfFrostbolt = 42742;
     */
    GlyphOfFrostbolt = 42742,
    /**
     * @generated from protobuf enum value: GlyphOfFrostfire = 44684;
     */
    GlyphOfFrostfire = 44684,
    /**
     * @generated from protobuf enum value: GlyphOfIceArmor = 42743;
     */
    GlyphOfIceArmor = 42743,
    /**
     * @generated from protobuf enum value: GlyphOfIceBarrier = 45740;
     */
    GlyphOfIceBarrier = 45740,
    /**
     * @generated from protobuf enum value: GlyphOfIceBlock = 42744;
     */
    GlyphOfIceBlock = 42744,
    /**
     * @generated from protobuf enum value: GlyphOfIceLance = 42745;
     */
    GlyphOfIceLance = 42745,
    /**
     * @generated from protobuf enum value: GlyphOfIcyVeins = 42746;
     */
    GlyphOfIcyVeins = 42746,
    /**
     * @generated from protobuf enum value: GlyphOfInvisibility = 42748;
     */
    GlyphOfInvisibility = 42748,
    /**
     * @generated from protobuf enum value: GlyphOfLivingBomb = 45737;
     */
    GlyphOfLivingBomb = 45737,
    /**
     * @generated from protobuf enum value: GlyphOfMageArmor = 42749;
     */
    GlyphOfMageArmor = 42749,
    /**
     * @generated from protobuf enum value: GlyphOfManaGem = 42750;
     */
    GlyphOfManaGem = 42750,
    /**
     * @generated from protobuf enum value: GlyphOfMirrorImage = 45739;
     */
    GlyphOfMirrorImage = 45739,
    /**
     * @generated from protobuf enum value: GlyphOfMoltenArmor = 42751;
     */
    GlyphOfMoltenArmor = 42751,
    /**
     * @generated from protobuf enum value: GlyphOfPolymorph = 42752;
     */
    GlyphOfPolymorph = 42752,
    /**
     * @generated from protobuf enum value: GlyphOfRemoveCurse = 42753;
     */
    GlyphOfRemoveCurse = 42753,
    /**
     * @generated from protobuf enum value: GlyphOfScorch = 42747;
     */
    GlyphOfScorch = 42747,
    /**
     * @generated from protobuf enum value: GlyphOfWaterElemental = 42754;
     */
    GlyphOfWaterElemental = 42754
}
/**
 * @generated from protobuf enum proto.MageMinorGlyph
 */
export declare enum MageMinorGlyph {
    /**
     * @generated from protobuf enum value: MageMinorGlyphNone = 0;
     */
    MageMinorGlyphNone = 0,
    /**
     * @generated from protobuf enum value: GlyphOfArcaneIntellect = 43339;
     */
    GlyphOfArcaneIntellect = 43339,
    /**
     * @generated from protobuf enum value: GlyphOfBlastWave = 44920;
     */
    GlyphOfBlastWave = 44920,
    /**
     * @generated from protobuf enum value: GlyphOfFireWard = 43357;
     */
    GlyphOfFireWard = 43357,
    /**
     * @generated from protobuf enum value: GlyphOfFrostArmor = 43359;
     */
    GlyphOfFrostArmor = 43359,
    /**
     * @generated from protobuf enum value: GlyphOfFrostWard = 43360;
     */
    GlyphOfFrostWard = 43360,
    /**
     * @generated from protobuf enum value: GlyphOfSlowFall = 43364;
     */
    GlyphOfSlowFall = 43364,
    /**
     * @generated from protobuf enum value: GlyphOfThePenguin = 43361;
     */
    GlyphOfThePenguin = 43361
}
declare class MageTalents$Type extends MessageType<MageTalents> {
    constructor();
    create(value?: PartialMessage<MageTalents>): MageTalents;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MageTalents): MageTalents;
    internalBinaryWrite(message: MageTalents, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.MageTalents
 */
export declare const MageTalents: MageTalents$Type;
declare class Mage$Type extends MessageType<Mage> {
    constructor();
    create(value?: PartialMessage<Mage>): Mage;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Mage): Mage;
    internalBinaryWrite(message: Mage, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Mage
 */
export declare const Mage: Mage$Type;
declare class Mage_Rotation$Type extends MessageType<Mage_Rotation> {
    constructor();
    create(value?: PartialMessage<Mage_Rotation>): Mage_Rotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Mage_Rotation): Mage_Rotation;
    internalBinaryWrite(message: Mage_Rotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Mage.Rotation
 */
export declare const Mage_Rotation: Mage_Rotation$Type;
declare class Mage_Rotation_ArcaneRotation$Type extends MessageType<Mage_Rotation_ArcaneRotation> {
    constructor();
    create(value?: PartialMessage<Mage_Rotation_ArcaneRotation>): Mage_Rotation_ArcaneRotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Mage_Rotation_ArcaneRotation): Mage_Rotation_ArcaneRotation;
    internalBinaryWrite(message: Mage_Rotation_ArcaneRotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Mage.Rotation.ArcaneRotation
 */
export declare const Mage_Rotation_ArcaneRotation: Mage_Rotation_ArcaneRotation$Type;
declare class Mage_Rotation_FireRotation$Type extends MessageType<Mage_Rotation_FireRotation> {
    constructor();
    create(value?: PartialMessage<Mage_Rotation_FireRotation>): Mage_Rotation_FireRotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Mage_Rotation_FireRotation): Mage_Rotation_FireRotation;
    internalBinaryWrite(message: Mage_Rotation_FireRotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Mage.Rotation.FireRotation
 */
export declare const Mage_Rotation_FireRotation: Mage_Rotation_FireRotation$Type;
declare class Mage_Rotation_FrostRotation$Type extends MessageType<Mage_Rotation_FrostRotation> {
    constructor();
    create(value?: PartialMessage<Mage_Rotation_FrostRotation>): Mage_Rotation_FrostRotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Mage_Rotation_FrostRotation): Mage_Rotation_FrostRotation;
    internalBinaryWrite(message: Mage_Rotation_FrostRotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Mage.Rotation.FrostRotation
 */
export declare const Mage_Rotation_FrostRotation: Mage_Rotation_FrostRotation$Type;
declare class Mage_Rotation_AoeRotation$Type extends MessageType<Mage_Rotation_AoeRotation> {
    constructor();
    create(value?: PartialMessage<Mage_Rotation_AoeRotation>): Mage_Rotation_AoeRotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Mage_Rotation_AoeRotation): Mage_Rotation_AoeRotation;
    internalBinaryWrite(message: Mage_Rotation_AoeRotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Mage.Rotation.AoeRotation
 */
export declare const Mage_Rotation_AoeRotation: Mage_Rotation_AoeRotation$Type;
declare class Mage_Options$Type extends MessageType<Mage_Options> {
    constructor();
    create(value?: PartialMessage<Mage_Options>): Mage_Options;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Mage_Options): Mage_Options;
    internalBinaryWrite(message: Mage_Options, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Mage.Options
 */
export declare const Mage_Options: Mage_Options$Type;
export {};
