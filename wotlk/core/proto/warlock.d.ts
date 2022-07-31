import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * WotLK talents
 *
 * @generated from protobuf message proto.WarlockTalents
 */
export interface WarlockTalents {
    /**
     * Affliction
     *
     * @generated from protobuf field: int32 improved_curse_of_agony = 1;
     */
    improvedCurseOfAgony: number;
    /**
     * @generated from protobuf field: int32 suppression = 2;
     */
    suppression: number;
    /**
     * @generated from protobuf field: int32 improved_corruption = 3;
     */
    improvedCorruption: number;
    /**
     * @generated from protobuf field: int32 improved_curse_of_weakness = 4;
     */
    improvedCurseOfWeakness: number;
    /**
     * @generated from protobuf field: int32 improved_drain_soul = 5;
     */
    improvedDrainSoul: number;
    /**
     * @generated from protobuf field: int32 improved_life_tap = 6;
     */
    improvedLifeTap: number;
    /**
     * @generated from protobuf field: int32 soul_siphon = 7;
     */
    soulSiphon: number;
    /**
     * @generated from protobuf field: int32 improved_fear = 8;
     */
    improvedFear: number;
    /**
     * @generated from protobuf field: int32 fel_concentration = 9;
     */
    felConcentration: number;
    /**
     * @generated from protobuf field: bool amplify_curse = 10;
     */
    amplifyCurse: boolean;
    /**
     * @generated from protobuf field: int32 grim_reach = 11;
     */
    grimReach: number;
    /**
     * @generated from protobuf field: int32 nightfall = 12;
     */
    nightfall: number;
    /**
     * @generated from protobuf field: int32 empowered_corruption = 13;
     */
    empoweredCorruption: number;
    /**
     * @generated from protobuf field: int32 shadow_embrace = 14;
     */
    shadowEmbrace: number;
    /**
     * @generated from protobuf field: bool siphon_life = 15;
     */
    siphonLife: boolean;
    /**
     * @generated from protobuf field: bool curse_of_exhaustion = 16;
     */
    curseOfExhaustion: boolean;
    /**
     * @generated from protobuf field: int32 improved_felhunter = 17;
     */
    improvedFelhunter: number;
    /**
     * @generated from protobuf field: int32 shadow_mastery = 18;
     */
    shadowMastery: number;
    /**
     * @generated from protobuf field: int32 eradication = 19;
     */
    eradication: number;
    /**
     * @generated from protobuf field: int32 contagion = 20;
     */
    contagion: number;
    /**
     * @generated from protobuf field: bool dark_pact = 21;
     */
    darkPact: boolean;
    /**
     * @generated from protobuf field: int32 improved_howl_of_terror = 22;
     */
    improvedHowlOfTerror: number;
    /**
     * @generated from protobuf field: int32 malediction = 23;
     */
    malediction: number;
    /**
     * @generated from protobuf field: int32 deaths_embrace = 24;
     */
    deathsEmbrace: number;
    /**
     * @generated from protobuf field: bool unstable_affliction = 25;
     */
    unstableAffliction: boolean;
    /**
     * @generated from protobuf field: bool pandemic = 26;
     */
    pandemic: boolean;
    /**
     * @generated from protobuf field: int32 everlasting_affliction = 27;
     */
    everlastingAffliction: number;
    /**
     * @generated from protobuf field: bool haunt = 28;
     */
    haunt: boolean;
    /**
     * Demonology
     *
     * @generated from protobuf field: int32 improved_healthstone = 29;
     */
    improvedHealthstone: number;
    /**
     * @generated from protobuf field: int32 improved_imp = 30;
     */
    improvedImp: number;
    /**
     * @generated from protobuf field: int32 demonic_embrace = 31;
     */
    demonicEmbrace: number;
    /**
     * @generated from protobuf field: int32 fel_synergy = 32;
     */
    felSynergy: number;
    /**
     * @generated from protobuf field: int32 improved_health_funnel = 33;
     */
    improvedHealthFunnel: number;
    /**
     * @generated from protobuf field: int32 demonic_brutality = 34;
     */
    demonicBrutality: number;
    /**
     * @generated from protobuf field: int32 fel_vitality = 35;
     */
    felVitality: number;
    /**
     * @generated from protobuf field: int32 improved_sayaad = 36;
     */
    improvedSayaad: number;
    /**
     * @generated from protobuf field: bool soul_link = 37;
     */
    soulLink: boolean;
    /**
     * @generated from protobuf field: bool fel_domination = 38;
     */
    felDomination: boolean;
    /**
     * @generated from protobuf field: int32 demonic_aegis = 39;
     */
    demonicAegis: number;
    /**
     * @generated from protobuf field: int32 unholy_power = 40;
     */
    unholyPower: number;
    /**
     * @generated from protobuf field: int32 master_summoner = 41;
     */
    masterSummoner: number;
    /**
     * @generated from protobuf field: bool mana_feed = 42;
     */
    manaFeed: boolean;
    /**
     * @generated from protobuf field: int32 master_conjuror = 43;
     */
    masterConjuror: number;
    /**
     * @generated from protobuf field: int32 master_demonologist = 44;
     */
    masterDemonologist: number;
    /**
     * @generated from protobuf field: int32 molten_core = 45;
     */
    moltenCore: number;
    /**
     * @generated from protobuf field: int32 demonic_resilience = 46;
     */
    demonicResilience: number;
    /**
     * @generated from protobuf field: bool demonic_empowerment = 47;
     */
    demonicEmpowerment: boolean;
    /**
     * @generated from protobuf field: int32 demonic_knowledge = 48;
     */
    demonicKnowledge: number;
    /**
     * @generated from protobuf field: int32 demonic_tactics = 49;
     */
    demonicTactics: number;
    /**
     * @generated from protobuf field: int32 decimation = 50;
     */
    decimation: number;
    /**
     * @generated from protobuf field: int32 improved_demonic_tactics = 51;
     */
    improvedDemonicTactics: number;
    /**
     * @generated from protobuf field: bool summon_felguard = 52;
     */
    summonFelguard: boolean;
    /**
     * @generated from protobuf field: int32 nemesis = 53;
     */
    nemesis: number;
    /**
     * @generated from protobuf field: int32 demonic_pact = 54;
     */
    demonicPact: number;
    /**
     * @generated from protobuf field: bool metamorphosis = 55;
     */
    metamorphosis: boolean;
    /**
     * Destruction
     *
     * @generated from protobuf field: int32 improved_shadow_bolt = 56;
     */
    improvedShadowBolt: number;
    /**
     * @generated from protobuf field: int32 bane = 57;
     */
    bane: number;
    /**
     * @generated from protobuf field: int32 aftermath = 58;
     */
    aftermath: number;
    /**
     * @generated from protobuf field: int32 molten_skin = 59;
     */
    moltenSkin: number;
    /**
     * @generated from protobuf field: int32 cataclysm = 60;
     */
    cataclysm: number;
    /**
     * @generated from protobuf field: int32 demonic_power = 61;
     */
    demonicPower: number;
    /**
     * @generated from protobuf field: bool shadowburn = 62;
     */
    shadowburn: boolean;
    /**
     * @generated from protobuf field: int32 ruin = 63;
     */
    ruin: number;
    /**
     * @generated from protobuf field: int32 intensity = 64;
     */
    intensity: number;
    /**
     * @generated from protobuf field: int32 destructive_reach = 65;
     */
    destructiveReach: number;
    /**
     * @generated from protobuf field: int32 improved_searing_pain = 66;
     */
    improvedSearingPain: number;
    /**
     * @generated from protobuf field: int32 backlash = 67;
     */
    backlash: number;
    /**
     * @generated from protobuf field: int32 improved_immolate = 68;
     */
    improvedImmolate: number;
    /**
     * @generated from protobuf field: bool devastation = 69;
     */
    devastation: boolean;
    /**
     * @generated from protobuf field: int32 nether_protection = 70;
     */
    netherProtection: number;
    /**
     * @generated from protobuf field: int32 emberstorm = 71;
     */
    emberstorm: number;
    /**
     * @generated from protobuf field: bool conflagrate = 72;
     */
    conflagrate: boolean;
    /**
     * @generated from protobuf field: int32 soul_leech = 73;
     */
    soulLeech: number;
    /**
     * @generated from protobuf field: int32 pyroclasm = 74;
     */
    pyroclasm: number;
    /**
     * @generated from protobuf field: int32 shadow_and_flame = 75;
     */
    shadowAndFlame: number;
    /**
     * @generated from protobuf field: int32 improved_soul_leech = 76;
     */
    improvedSoulLeech: number;
    /**
     * @generated from protobuf field: int32 backdraft = 77;
     */
    backdraft: number;
    /**
     * @generated from protobuf field: bool shadowfury = 78;
     */
    shadowfury: boolean;
    /**
     * @generated from protobuf field: int32 empowered_imp = 79;
     */
    empoweredImp: number;
    /**
     * @generated from protobuf field: int32 fire_and_brimstone = 80;
     */
    fireAndBrimstone: number;
    /**
     * @generated from protobuf field: bool chaos_bolt = 81;
     */
    chaosBolt: boolean;
}
/**
 * @generated from protobuf message proto.Warlock
 */
export interface Warlock {
    /**
     * @generated from protobuf field: proto.Warlock.Rotation rotation = 1;
     */
    rotation?: Warlock_Rotation;
    /**
     * @generated from protobuf field: proto.WarlockTalents talents = 2;
     */
    talents?: WarlockTalents;
    /**
     * @generated from protobuf field: proto.Warlock.Options options = 3;
     */
    options?: Warlock_Options;
}
/**
 * @generated from protobuf message proto.Warlock.Rotation
 */
export interface Warlock_Rotation {
    /**
     * @generated from protobuf field: proto.Warlock.Rotation.Preset preset = 1;
     */
    preset: Warlock_Rotation_Preset;
    /**
     * @generated from protobuf field: proto.Warlock.Rotation.Curse curse = 2;
     */
    curse: Warlock_Rotation_Curse;
    /**
     * @generated from protobuf field: proto.Warlock.Rotation.PrimarySpell primary_spell = 3;
     */
    primarySpell: Warlock_Rotation_PrimarySpell;
    /**
     * @generated from protobuf field: proto.Warlock.Rotation.SecondaryDot secondary_dot = 4;
     */
    secondaryDot: Warlock_Rotation_SecondaryDot;
    /**
     * @generated from protobuf field: bool corruption = 5;
     */
    corruption: boolean;
    /**
     * @generated from protobuf field: bool detonate_seed = 6;
     */
    detonateSeed: boolean;
    /**
     * @generated from protobuf field: proto.Warlock.Rotation.SpecSpell spec_spell = 7;
     */
    specSpell: Warlock_Rotation_SpecSpell;
    /**
     * @generated from protobuf field: proto.Warlock.Rotation.Type type = 8;
     */
    type: Warlock_Rotation_Type;
}
/**
 * @generated from protobuf enum proto.Warlock.Rotation.Preset
 */
export declare enum Warlock_Rotation_Preset {
    /**
     * @generated from protobuf enum value: Manual = 0;
     */
    Manual = 0,
    /**
     * @generated from protobuf enum value: Automatic = 1;
     */
    Automatic = 1
}
/**
 * @generated from protobuf enum proto.Warlock.Rotation.Type
 */
export declare enum Warlock_Rotation_Type {
    /**
     * @generated from protobuf enum value: Affliction = 0;
     */
    Affliction = 0,
    /**
     * @generated from protobuf enum value: Demonology = 1;
     */
    Demonology = 1,
    /**
     * @generated from protobuf enum value: Destruction = 2;
     */
    Destruction = 2
}
/**
 * @generated from protobuf enum proto.Warlock.Rotation.PrimarySpell
 */
export declare enum Warlock_Rotation_PrimarySpell {
    /**
     * @generated from protobuf enum value: UnknownSpell = 0;
     */
    UnknownSpell = 0,
    /**
     * @generated from protobuf enum value: ShadowBolt = 1;
     */
    ShadowBolt = 1,
    /**
     * @generated from protobuf enum value: Incinerate = 2;
     */
    Incinerate = 2,
    /**
     * @generated from protobuf enum value: Seed = 3;
     */
    Seed = 3
}
/**
 * @generated from protobuf enum proto.Warlock.Rotation.Curse
 */
export declare enum Warlock_Rotation_Curse {
    /**
     * @generated from protobuf enum value: NoCurse = 0;
     */
    NoCurse = 0,
    /**
     * @generated from protobuf enum value: Elements = 1;
     */
    Elements = 1,
    /**
     * @generated from protobuf enum value: Weakness = 2;
     */
    Weakness = 2,
    /**
     * @generated from protobuf enum value: Doom = 3;
     */
    Doom = 3,
    /**
     * @generated from protobuf enum value: Agony = 4;
     */
    Agony = 4,
    /**
     * @generated from protobuf enum value: Tongues = 5;
     */
    Tongues = 5
}
/**
 * @generated from protobuf enum proto.Warlock.Rotation.SecondaryDot
 */
export declare enum Warlock_Rotation_SecondaryDot {
    /**
     * @generated from protobuf enum value: NoSecondaryDot = 0;
     */
    NoSecondaryDot = 0,
    /**
     * @generated from protobuf enum value: Immolate = 1;
     */
    Immolate = 1,
    /**
     * @generated from protobuf enum value: UnstableAffliction = 2;
     */
    UnstableAffliction = 2
}
/**
 * @generated from protobuf enum proto.Warlock.Rotation.SpecSpell
 */
export declare enum Warlock_Rotation_SpecSpell {
    /**
     * @generated from protobuf enum value: NoSpecSpell = 0;
     */
    NoSpecSpell = 0,
    /**
     * @generated from protobuf enum value: ChaosBolt = 1;
     */
    ChaosBolt = 1,
    /**
     * @generated from protobuf enum value: Haunt = 2;
     */
    Haunt = 2
}
/**
 * @generated from protobuf message proto.Warlock.Options
 */
export interface Warlock_Options {
    /**
     * @generated from protobuf field: proto.Warlock.Options.Armor armor = 1;
     */
    armor: Warlock_Options_Armor;
    /**
     * @generated from protobuf field: proto.Warlock.Options.Summon summon = 2;
     */
    summon: Warlock_Options_Summon;
    /**
     * @generated from protobuf field: proto.Warlock.Options.WeaponImbue weaponImbue = 3;
     */
    weaponImbue: Warlock_Options_WeaponImbue;
}
/**
 * @generated from protobuf enum proto.Warlock.Options.Summon
 */
export declare enum Warlock_Options_Summon {
    /**
     * @generated from protobuf enum value: NoSummon = 0;
     */
    NoSummon = 0,
    /**
     * @generated from protobuf enum value: Imp = 1;
     */
    Imp = 1,
    /**
     * @generated from protobuf enum value: Voidwalker = 2;
     */
    Voidwalker = 2,
    /**
     * @generated from protobuf enum value: Succubus = 3;
     */
    Succubus = 3,
    /**
     * @generated from protobuf enum value: Felhunter = 4;
     */
    Felhunter = 4,
    /**
     * @generated from protobuf enum value: Felguard = 5;
     */
    Felguard = 5
}
/**
 * @generated from protobuf enum proto.Warlock.Options.Armor
 */
export declare enum Warlock_Options_Armor {
    /**
     * @generated from protobuf enum value: NoArmor = 0;
     */
    NoArmor = 0,
    /**
     * @generated from protobuf enum value: FelArmor = 1;
     */
    FelArmor = 1,
    /**
     * @generated from protobuf enum value: DemonArmor = 2;
     */
    DemonArmor = 2
}
/**
 * @generated from protobuf enum proto.Warlock.Options.WeaponImbue
 */
export declare enum Warlock_Options_WeaponImbue {
    /**
     * @generated from protobuf enum value: NoWeaponImbue = 0;
     */
    NoWeaponImbue = 0,
    /**
     * @generated from protobuf enum value: GrandSpellstone = 1;
     */
    GrandSpellstone = 1,
    /**
     * @generated from protobuf enum value: GrandFirestone = 2;
     */
    GrandFirestone = 2
}
/**
 * @generated from protobuf enum proto.WarlockMajorGlyph
 */
export declare enum WarlockMajorGlyph {
    /**
     * @generated from protobuf enum value: WarlockMajorGlyphNone = 0;
     */
    WarlockMajorGlyphNone = 0,
    /**
     * @generated from protobuf enum value: GlyphOfChaosBolt = 45781;
     */
    GlyphOfChaosBolt = 45781,
    /**
     * @generated from protobuf enum value: GlyphOfConflagrate = 42454;
     */
    GlyphOfConflagrate = 42454,
    /**
     * @generated from protobuf enum value: GlyphOfCorruption = 42455;
     */
    GlyphOfCorruption = 42455,
    /**
     * @generated from protobuf enum value: GlyphOfCurseOfAgony = 42456;
     */
    GlyphOfCurseOfAgony = 42456,
    /**
     * @generated from protobuf enum value: GlyphOfDeathCoil = 42457;
     */
    GlyphOfDeathCoil = 42457,
    /**
     * @generated from protobuf enum value: GlyphOfDemonicCircle = 45782;
     */
    GlyphOfDemonicCircle = 45782,
    /**
     * @generated from protobuf enum value: GlyphOfFear = 42458;
     */
    GlyphOfFear = 42458,
    /**
     * @generated from protobuf enum value: GlyphOfFelguard = 42459;
     */
    GlyphOfFelguard = 42459,
    /**
     * @generated from protobuf enum value: GlyphOfFelhunter = 42460;
     */
    GlyphOfFelhunter = 42460,
    /**
     * @generated from protobuf enum value: GlyphOfHaunt = 45779;
     */
    GlyphOfHaunt = 45779,
    /**
     * @generated from protobuf enum value: GlyphOfHealthFunnel = 42461;
     */
    GlyphOfHealthFunnel = 42461,
    /**
     * @generated from protobuf enum value: GlyphOfHealthstone = 42462;
     */
    GlyphOfHealthstone = 42462,
    /**
     * @generated from protobuf enum value: GlyphOfHowlOfTerror = 42463;
     */
    GlyphOfHowlOfTerror = 42463,
    /**
     * @generated from protobuf enum value: GlyphOfImmolate = 42464;
     */
    GlyphOfImmolate = 42464,
    /**
     * @generated from protobuf enum value: GlyphOfImp = 42465;
     */
    GlyphOfImp = 42465,
    /**
     * @generated from protobuf enum value: GlyphOfIncinerate = 42453;
     */
    GlyphOfIncinerate = 42453,
    /**
     * @generated from protobuf enum value: GlyphOfLifeTap = 45785;
     */
    GlyphOfLifeTap = 45785,
    /**
     * @generated from protobuf enum value: GlyphOfMetamorphosis = 45780;
     */
    GlyphOfMetamorphosis = 45780,
    /**
     * @generated from protobuf enum value: GlyphOfQuickDecay = 50077;
     */
    GlyphOfQuickDecay = 50077,
    /**
     * @generated from protobuf enum value: GlyphOfSearingPain = 42466;
     */
    GlyphOfSearingPain = 42466,
    /**
     * @generated from protobuf enum value: GlyphOfShadowBolt = 42467;
     */
    GlyphOfShadowBolt = 42467,
    /**
     * @generated from protobuf enum value: GlyphOfShadowburn = 42468;
     */
    GlyphOfShadowburn = 42468,
    /**
     * @generated from protobuf enum value: GlyphOfShadowflame = 45783;
     */
    GlyphOfShadowflame = 45783,
    /**
     * @generated from protobuf enum value: GlyphOfSiphonLife = 42469;
     */
    GlyphOfSiphonLife = 42469,
    /**
     * @generated from protobuf enum value: GlyphOfSoulLink = 45789;
     */
    GlyphOfSoulLink = 45789,
    /**
     * @generated from protobuf enum value: GlyphOfSoulstone = 42470;
     */
    GlyphOfSoulstone = 42470,
    /**
     * @generated from protobuf enum value: GlyphOfSuccubus = 42471;
     */
    GlyphOfSuccubus = 42471,
    /**
     * @generated from protobuf enum value: GlyphOfUnstableAffliction = 42472;
     */
    GlyphOfUnstableAffliction = 42472,
    /**
     * @generated from protobuf enum value: GlyphOfVoidwalker = 42473;
     */
    GlyphOfVoidwalker = 42473
}
/**
 * @generated from protobuf enum proto.WarlockMinorGlyph
 */
export declare enum WarlockMinorGlyph {
    /**
     * @generated from protobuf enum value: WarlockMinorGlyphNone = 0;
     */
    WarlockMinorGlyphNone = 0,
    /**
     * @generated from protobuf enum value: GlyphOfCurseOfExhausion = 43392;
     */
    GlyphOfCurseOfExhausion = 43392,
    /**
     * @generated from protobuf enum value: GlyphOfDrainSoul = 43390;
     */
    GlyphOfDrainSoul = 43390,
    /**
     * @generated from protobuf enum value: GlyphOfEnslaveDemon = 43393;
     */
    GlyphOfEnslaveDemon = 43393,
    /**
     * @generated from protobuf enum value: GlyphOfKilrogg = 43391;
     */
    GlyphOfKilrogg = 43391,
    /**
     * @generated from protobuf enum value: GlyphOfSouls = 43394;
     */
    GlyphOfSouls = 43394,
    /**
     * @generated from protobuf enum value: GlyphOfUnendingBreath = 43389;
     */
    GlyphOfUnendingBreath = 43389
}
declare class WarlockTalents$Type extends MessageType<WarlockTalents> {
    constructor();
    create(value?: PartialMessage<WarlockTalents>): WarlockTalents;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WarlockTalents): WarlockTalents;
    internalBinaryWrite(message: WarlockTalents, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.WarlockTalents
 */
export declare const WarlockTalents: WarlockTalents$Type;
declare class Warlock$Type extends MessageType<Warlock> {
    constructor();
    create(value?: PartialMessage<Warlock>): Warlock;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Warlock): Warlock;
    internalBinaryWrite(message: Warlock, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Warlock
 */
export declare const Warlock: Warlock$Type;
declare class Warlock_Rotation$Type extends MessageType<Warlock_Rotation> {
    constructor();
    create(value?: PartialMessage<Warlock_Rotation>): Warlock_Rotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Warlock_Rotation): Warlock_Rotation;
    internalBinaryWrite(message: Warlock_Rotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Warlock.Rotation
 */
export declare const Warlock_Rotation: Warlock_Rotation$Type;
declare class Warlock_Options$Type extends MessageType<Warlock_Options> {
    constructor();
    create(value?: PartialMessage<Warlock_Options>): Warlock_Options;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Warlock_Options): Warlock_Options;
    internalBinaryWrite(message: Warlock_Options, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Warlock.Options
 */
export declare const Warlock_Options: Warlock_Options$Type;
export {};
