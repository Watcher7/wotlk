import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message proto.HunterTalents
 */
export interface HunterTalents {
    /**
     * Beast Mastery
     *
     * @generated from protobuf field: int32 improved_aspect_of_the_hawk = 1;
     */
    improvedAspectOfTheHawk: number;
    /**
     * @generated from protobuf field: int32 endurance_training = 2;
     */
    enduranceTraining: number;
    /**
     * @generated from protobuf field: int32 focused_fire = 3;
     */
    focusedFire: number;
    /**
     * @generated from protobuf field: int32 improved_aspect_of_the_monkey = 4;
     */
    improvedAspectOfTheMonkey: number;
    /**
     * @generated from protobuf field: int32 thick_hide = 5;
     */
    thickHide: number;
    /**
     * @generated from protobuf field: int32 improved_revive_pet = 6;
     */
    improvedRevivePet: number;
    /**
     * @generated from protobuf field: int32 pathfinding = 7;
     */
    pathfinding: number;
    /**
     * @generated from protobuf field: bool aspect_mastery = 8;
     */
    aspectMastery: boolean;
    /**
     * @generated from protobuf field: int32 unleashed_fury = 9;
     */
    unleashedFury: number;
    /**
     * @generated from protobuf field: int32 improved_mend_pet = 10;
     */
    improvedMendPet: number;
    /**
     * @generated from protobuf field: int32 ferocity = 11;
     */
    ferocity: number;
    /**
     * @generated from protobuf field: int32 spirit_bond = 12;
     */
    spiritBond: number;
    /**
     * @generated from protobuf field: bool intimidation = 13;
     */
    intimidation: boolean;
    /**
     * @generated from protobuf field: int32 bestial_discipline = 14;
     */
    bestialDiscipline: number;
    /**
     * @generated from protobuf field: int32 animal_handler = 15;
     */
    animalHandler: number;
    /**
     * @generated from protobuf field: int32 frenzy = 16;
     */
    frenzy: number;
    /**
     * @generated from protobuf field: int32 ferocious_inspiration = 17;
     */
    ferociousInspiration: number;
    /**
     * @generated from protobuf field: bool bestial_wrath = 18;
     */
    bestialWrath: boolean;
    /**
     * @generated from protobuf field: int32 catlike_reflexes = 19;
     */
    catlikeReflexes: number;
    /**
     * @generated from protobuf field: int32 invigoration = 20;
     */
    invigoration: number;
    /**
     * @generated from protobuf field: int32 serpents_swiftness = 21;
     */
    serpentsSwiftness: number;
    /**
     * @generated from protobuf field: int32 longevity = 22;
     */
    longevity: number;
    /**
     * @generated from protobuf field: bool the_beast_within = 23;
     */
    theBeastWithin: boolean;
    /**
     * @generated from protobuf field: int32 cobra_strikes = 24;
     */
    cobraStrikes: number;
    /**
     * @generated from protobuf field: int32 kindred_spirits = 25;
     */
    kindredSpirits: number;
    /**
     * @generated from protobuf field: bool beast_mastery = 26;
     */
    beastMastery: boolean;
    /**
     * Marksmanship
     *
     * @generated from protobuf field: int32 improved_concussive_shot = 27;
     */
    improvedConcussiveShot: number;
    /**
     * @generated from protobuf field: int32 focused_aim = 28;
     */
    focusedAim: number;
    /**
     * @generated from protobuf field: int32 lethal_shots = 29;
     */
    lethalShots: number;
    /**
     * @generated from protobuf field: int32 careful_aim = 30;
     */
    carefulAim: number;
    /**
     * @generated from protobuf field: int32 improved_hunters_mark = 31;
     */
    improvedHuntersMark: number;
    /**
     * @generated from protobuf field: int32 mortal_shots = 32;
     */
    mortalShots: number;
    /**
     * @generated from protobuf field: int32 go_for_the_throat = 33;
     */
    goForTheThroat: number;
    /**
     * @generated from protobuf field: int32 improved_arcane_shot = 34;
     */
    improvedArcaneShot: number;
    /**
     * @generated from protobuf field: bool aimed_shot = 35;
     */
    aimedShot: boolean;
    /**
     * @generated from protobuf field: int32 rapid_killing = 36;
     */
    rapidKilling: number;
    /**
     * @generated from protobuf field: int32 improved_stings = 37;
     */
    improvedStings: number;
    /**
     * @generated from protobuf field: int32 efficiency = 38;
     */
    efficiency: number;
    /**
     * @generated from protobuf field: int32 concussive_barrage = 39;
     */
    concussiveBarrage: number;
    /**
     * @generated from protobuf field: bool readiness = 40;
     */
    readiness: boolean;
    /**
     * @generated from protobuf field: int32 barrage = 41;
     */
    barrage: number;
    /**
     * @generated from protobuf field: int32 combat_experience = 42;
     */
    combatExperience: number;
    /**
     * @generated from protobuf field: int32 ranged_weapon_specialization = 43;
     */
    rangedWeaponSpecialization: number;
    /**
     * @generated from protobuf field: int32 piercing_shots = 44;
     */
    piercingShots: number;
    /**
     * @generated from protobuf field: bool trueshot_aura = 45;
     */
    trueshotAura: boolean;
    /**
     * @generated from protobuf field: int32 improved_barrage = 46;
     */
    improvedBarrage: number;
    /**
     * @generated from protobuf field: int32 master_marksman = 47;
     */
    masterMarksman: number;
    /**
     * @generated from protobuf field: int32 rapid_recuperation = 48;
     */
    rapidRecuperation: number;
    /**
     * @generated from protobuf field: int32 wild_quiver = 49;
     */
    wildQuiver: number;
    /**
     * @generated from protobuf field: bool silencing_shot = 50;
     */
    silencingShot: boolean;
    /**
     * @generated from protobuf field: int32 improved_steady_shot = 51;
     */
    improvedSteadyShot: number;
    /**
     * @generated from protobuf field: int32 marked_for_death = 52;
     */
    markedForDeath: number;
    /**
     * @generated from protobuf field: bool chimera_shot = 53;
     */
    chimeraShot: boolean;
    /**
     * Survival
     *
     * @generated from protobuf field: int32 improved_tracking = 54;
     */
    improvedTracking: number;
    /**
     * @generated from protobuf field: int32 hawk_eye = 55;
     */
    hawkEye: number;
    /**
     * @generated from protobuf field: int32 savage_strikes = 56;
     */
    savageStrikes: number;
    /**
     * @generated from protobuf field: int32 surefooted = 57;
     */
    surefooted: number;
    /**
     * @generated from protobuf field: int32 entrapment = 58;
     */
    entrapment: number;
    /**
     * @generated from protobuf field: int32 trap_mastery = 59;
     */
    trapMastery: number;
    /**
     * @generated from protobuf field: int32 survival_instincts = 60;
     */
    survivalInstincts: number;
    /**
     * @generated from protobuf field: int32 survivalist = 61;
     */
    survivalist: number;
    /**
     * @generated from protobuf field: bool scatter_shot = 62;
     */
    scatterShot: boolean;
    /**
     * @generated from protobuf field: int32 deflection = 63;
     */
    deflection: number;
    /**
     * @generated from protobuf field: int32 survival_tactics = 64;
     */
    survivalTactics: number;
    /**
     * @generated from protobuf field: int32 t_n_t = 65;
     */
    tNT: number;
    /**
     * @generated from protobuf field: int32 lock_and_load = 66;
     */
    lockAndLoad: number;
    /**
     * @generated from protobuf field: int32 hunter_vs_wild = 67;
     */
    hunterVsWild: number;
    /**
     * @generated from protobuf field: int32 killer_instinct = 68;
     */
    killerInstinct: number;
    /**
     * @generated from protobuf field: bool counterattack = 69;
     */
    counterattack: boolean;
    /**
     * @generated from protobuf field: int32 lightning_reflexes = 70;
     */
    lightningReflexes: number;
    /**
     * @generated from protobuf field: int32 resourcefulness = 71;
     */
    resourcefulness: number;
    /**
     * @generated from protobuf field: int32 expose_weakness = 72;
     */
    exposeWeakness: number;
    /**
     * @generated from protobuf field: bool wyvern_sting = 73;
     */
    wyvernSting: boolean;
    /**
     * @generated from protobuf field: int32 thrill_of_the_hunt = 74;
     */
    thrillOfTheHunt: number;
    /**
     * @generated from protobuf field: int32 master_tactician = 75;
     */
    masterTactician: number;
    /**
     * @generated from protobuf field: int32 noxious_stings = 76;
     */
    noxiousStings: number;
    /**
     * @generated from protobuf field: int32 point_of_no_escape = 77;
     */
    pointOfNoEscape: number;
    /**
     * @generated from protobuf field: bool black_arrow = 78;
     */
    blackArrow: boolean;
    /**
     * @generated from protobuf field: int32 sniper_training = 79;
     */
    sniperTraining: number;
    /**
     * @generated from protobuf field: int32 hunting_party = 80;
     */
    huntingParty: number;
    /**
     * @generated from protobuf field: bool explosive_shot = 81;
     */
    explosiveShot: boolean;
}
/**
 * @generated from protobuf message proto.HunterPetTalents
 */
export interface HunterPetTalents {
    /**
     * Cunning
     *
     * @generated from protobuf field: int32 cobra_reflexes = 1;
     */
    cobraReflexes: number;
    /**
     * @generated from protobuf field: bool dive = 2;
     */
    dive: boolean;
    /**
     * @generated from protobuf field: int32 great_stamina = 3;
     */
    greatStamina: number;
    /**
     * @generated from protobuf field: int32 natural_armor = 4;
     */
    naturalArmor: number;
    /**
     * @generated from protobuf field: bool boars_speed = 5;
     */
    boarsSpeed: boolean;
    /**
     * @generated from protobuf field: int32 mobility = 6;
     */
    mobility: number;
    /**
     * @generated from protobuf field: int32 owls_focus = 7;
     */
    owlsFocus: number;
    /**
     * @generated from protobuf field: int32 spiked_collar = 8;
     */
    spikedCollar: number;
    /**
     * @generated from protobuf field: int32 culling_the_herd = 9;
     */
    cullingTheHerd: number;
    /**
     * @generated from protobuf field: int32 lionhearted = 10;
     */
    lionhearted: number;
    /**
     * @generated from protobuf field: bool carrion_feeder = 11;
     */
    carrionFeeder: boolean;
    /**
     * @generated from protobuf field: int32 great_resistance = 12;
     */
    greatResistance: number;
    /**
     * @generated from protobuf field: int32 cornered = 13;
     */
    cornered: number;
    /**
     * @generated from protobuf field: int32 feeding_frenzy = 14;
     */
    feedingFrenzy: number;
    /**
     * @generated from protobuf field: bool wolverine_bite = 15;
     */
    wolverineBite: boolean;
    /**
     * @generated from protobuf field: bool roar_of_recovery = 16;
     */
    roarOfRecovery: boolean;
    /**
     * @generated from protobuf field: bool bullheaded = 17;
     */
    bullheaded: boolean;
    /**
     * @generated from protobuf field: int32 grace_of_the_mantis = 18;
     */
    graceOfTheMantis: number;
    /**
     * @generated from protobuf field: int32 wild_hunt = 19;
     */
    wildHunt: number;
    /**
     * @generated from protobuf field: bool roar_of_sacrifice = 20;
     */
    roarOfSacrifice: boolean;
    /**
     * Ferocity
     *
     * @generated from protobuf field: int32 improved_cower = 21;
     */
    improvedCower: number;
    /**
     * @generated from protobuf field: int32 bloodthirsty = 22;
     */
    bloodthirsty: number;
    /**
     * @generated from protobuf field: bool heart_of_the_pheonix = 23;
     */
    heartOfThePheonix: boolean;
    /**
     * @generated from protobuf field: int32 spiders_bite = 24;
     */
    spidersBite: number;
    /**
     * @generated from protobuf field: bool rabid = 25;
     */
    rabid: boolean;
    /**
     * @generated from protobuf field: bool lick_your_wounds = 26;
     */
    lickYourWounds: boolean;
    /**
     * @generated from protobuf field: bool call_of_the_wild = 27;
     */
    callOfTheWild: boolean;
    /**
     * @generated from protobuf field: int32 shark_attack = 28;
     */
    sharkAttack: number;
    /**
     * Tenacity
     *
     * @generated from protobuf field: bool charge = 29;
     */
    charge: boolean;
    /**
     * @generated from protobuf field: int32 blood_of_the_rhino = 30;
     */
    bloodOfTheRhino: number;
    /**
     * @generated from protobuf field: int32 pet_barding = 31;
     */
    petBarding: number;
    /**
     * @generated from protobuf field: int32 guard_dog = 32;
     */
    guardDog: number;
    /**
     * @generated from protobuf field: bool thunderstomp = 33;
     */
    thunderstomp: boolean;
    /**
     * @generated from protobuf field: bool last_stand = 34;
     */
    lastStand: boolean;
    /**
     * @generated from protobuf field: bool taunt = 35;
     */
    taunt: boolean;
    /**
     * @generated from protobuf field: bool intervene = 36;
     */
    intervene: boolean;
    /**
     * @generated from protobuf field: int32 silverback = 37;
     */
    silverback: number;
}
/**
 * @generated from protobuf message proto.Hunter
 */
export interface Hunter {
    /**
     * @generated from protobuf field: proto.Hunter.Rotation rotation = 1;
     */
    rotation?: Hunter_Rotation;
    /**
     * @generated from protobuf field: proto.HunterTalents talents = 2;
     */
    talents?: HunterTalents;
    /**
     * @generated from protobuf field: proto.Hunter.Options options = 3;
     */
    options?: Hunter_Options;
}
/**
 * bool use_multi_shot = 1;
 * bool use_arcane_shot = 2;
 * bool lazy_rotation = 12; // Restricts to 1 action between each auto shot.
 *
 * @generated from protobuf message proto.Hunter.Rotation
 */
export interface Hunter_Rotation {
    /**
     * @generated from protobuf field: proto.Hunter.Rotation.StingType sting = 5;
     */
    sting: Hunter_Rotation_StingType;
    /**
     * Switch to Aspect of the Viper when mana goes below this percent.
     *
     * @generated from protobuf field: double viper_start_mana_percent = 6;
     */
    viperStartManaPercent: number;
    /**
     * Switch back to Aspect of the Hawk when mana goes above this percent.
     *
     * @generated from protobuf field: double viper_stop_mana_percent = 7;
     */
    viperStopManaPercent: number;
}
/**
 * @generated from protobuf enum proto.Hunter.Rotation.StingType
 */
export declare enum Hunter_Rotation_StingType {
    /**
     * @generated from protobuf enum value: NoSting = 0;
     */
    NoSting = 0,
    /**
     * @generated from protobuf enum value: ScorpidSting = 1;
     */
    ScorpidSting = 1,
    /**
     * @generated from protobuf enum value: SerpentSting = 2;
     */
    SerpentSting = 2
}
/**
 * @generated from protobuf message proto.Hunter.Options
 */
export interface Hunter_Options {
    /**
     * @generated from protobuf field: proto.Hunter.Options.Ammo ammo = 1;
     */
    ammo: Hunter_Options_Ammo;
    /**
     * @generated from protobuf field: proto.Hunter.Options.PetType pet_type = 2;
     */
    petType: Hunter_Options_PetType;
    /**
     * @generated from protobuf field: proto.HunterPetTalents pet_talents = 3;
     */
    petTalents?: HunterPetTalents;
    /**
     * @generated from protobuf field: double pet_uptime = 4;
     */
    petUptime: number;
    /**
     * @generated from protobuf field: int32 latency_ms = 6;
     */
    latencyMs: number;
    /**
     * @generated from protobuf field: double sniper_training_uptime = 7;
     */
    sniperTrainingUptime: number;
    /**
     * For internal use only.
     * Used for hunter presims to avoid artifacts caused by randomness when
     * calculating average ability damage from a low sample size.
     *
     * @generated from protobuf field: bool remove_randomness = 8;
     */
    removeRandomness: boolean;
}
/**
 * @generated from protobuf enum proto.Hunter.Options.Ammo
 */
export declare enum Hunter_Options_Ammo {
    /**
     * @generated from protobuf enum value: AmmoNone = 0;
     */
    AmmoNone = 0,
    /**
     * @generated from protobuf enum value: IcebladeArrow = 1;
     */
    IcebladeArrow = 1,
    /**
     * @generated from protobuf enum value: SaroniteRazorheads = 2;
     */
    SaroniteRazorheads = 2,
    /**
     * @generated from protobuf enum value: TerrorshaftArrow = 3;
     */
    TerrorshaftArrow = 3,
    /**
     * @generated from protobuf enum value: TimelessArrow = 4;
     */
    TimelessArrow = 4,
    /**
     * @generated from protobuf enum value: MysteriousArrow = 5;
     */
    MysteriousArrow = 5,
    /**
     * @generated from protobuf enum value: AdamantiteStinger = 6;
     */
    AdamantiteStinger = 6,
    /**
     * @generated from protobuf enum value: BlackflightArrow = 7;
     */
    BlackflightArrow = 7
}
/**
 * @generated from protobuf enum proto.Hunter.Options.PetType
 */
export declare enum Hunter_Options_PetType {
    /**
     * @generated from protobuf enum value: PetNone = 0;
     */
    PetNone = 0,
    /**
     * @generated from protobuf enum value: Bat = 1;
     */
    Bat = 1,
    /**
     * @generated from protobuf enum value: Bear = 2;
     */
    Bear = 2,
    /**
     * @generated from protobuf enum value: BirdOfPrey = 3;
     */
    BirdOfPrey = 3,
    /**
     * @generated from protobuf enum value: Boar = 4;
     */
    Boar = 4,
    /**
     * @generated from protobuf enum value: CarrionBird = 5;
     */
    CarrionBird = 5,
    /**
     * @generated from protobuf enum value: Cat = 6;
     */
    Cat = 6,
    /**
     * @generated from protobuf enum value: Chimaera = 7;
     */
    Chimaera = 7,
    /**
     * @generated from protobuf enum value: CoreHound = 8;
     */
    CoreHound = 8,
    /**
     * @generated from protobuf enum value: Crab = 9;
     */
    Crab = 9,
    /**
     * @generated from protobuf enum value: Crocolisk = 10;
     */
    Crocolisk = 10,
    /**
     * @generated from protobuf enum value: Devilsaur = 11;
     */
    Devilsaur = 11,
    /**
     * @generated from protobuf enum value: Dragonhawk = 12;
     */
    Dragonhawk = 12,
    /**
     * @generated from protobuf enum value: Gorilla = 13;
     */
    Gorilla = 13,
    /**
     * @generated from protobuf enum value: Hyena = 14;
     */
    Hyena = 14,
    /**
     * @generated from protobuf enum value: Moth = 15;
     */
    Moth = 15,
    /**
     * @generated from protobuf enum value: NetherRay = 16;
     */
    NetherRay = 16,
    /**
     * @generated from protobuf enum value: Raptor = 17;
     */
    Raptor = 17,
    /**
     * @generated from protobuf enum value: Ravager = 18;
     */
    Ravager = 18,
    /**
     * @generated from protobuf enum value: Rhino = 19;
     */
    Rhino = 19,
    /**
     * @generated from protobuf enum value: Scorpid = 20;
     */
    Scorpid = 20,
    /**
     * @generated from protobuf enum value: Serpent = 21;
     */
    Serpent = 21,
    /**
     * @generated from protobuf enum value: Silithid = 22;
     */
    Silithid = 22,
    /**
     * @generated from protobuf enum value: Spider = 23;
     */
    Spider = 23,
    /**
     * @generated from protobuf enum value: SpiritBeast = 24;
     */
    SpiritBeast = 24,
    /**
     * @generated from protobuf enum value: SporeBat = 25;
     */
    SporeBat = 25,
    /**
     * @generated from protobuf enum value: Tallstrider = 26;
     */
    Tallstrider = 26,
    /**
     * @generated from protobuf enum value: Turtle = 27;
     */
    Turtle = 27,
    /**
     * @generated from protobuf enum value: WarpStalker = 28;
     */
    WarpStalker = 28,
    /**
     * @generated from protobuf enum value: Wasp = 29;
     */
    Wasp = 29,
    /**
     * @generated from protobuf enum value: WindSerpent = 30;
     */
    WindSerpent = 30,
    /**
     * @generated from protobuf enum value: Wolf = 31;
     */
    Wolf = 31,
    /**
     * @generated from protobuf enum value: Worm = 32;
     */
    Worm = 32
}
/**
 * @generated from protobuf enum proto.HunterMajorGlyph
 */
export declare enum HunterMajorGlyph {
    /**
     * @generated from protobuf enum value: HunterMajorGlyphNone = 0;
     */
    HunterMajorGlyphNone = 0,
    /**
     * @generated from protobuf enum value: GlyphOfAimedShot = 42897;
     */
    GlyphOfAimedShot = 42897,
    /**
     * @generated from protobuf enum value: GlyphOfArcaneShot = 42898;
     */
    GlyphOfArcaneShot = 42898,
    /**
     * @generated from protobuf enum value: GlyphOfAspectOfTheViper = 42901;
     */
    GlyphOfAspectOfTheViper = 42901,
    /**
     * @generated from protobuf enum value: GlyphOfBestialWrath = 42902;
     */
    GlyphOfBestialWrath = 42902,
    /**
     * @generated from protobuf enum value: GlyphOfChimeraShot = 45625;
     */
    GlyphOfChimeraShot = 45625,
    /**
     * @generated from protobuf enum value: GlyphOfDeterrence = 42903;
     */
    GlyphOfDeterrence = 42903,
    /**
     * @generated from protobuf enum value: GlyphOfDisengage = 42904;
     */
    GlyphOfDisengage = 42904,
    /**
     * @generated from protobuf enum value: GlyphOfExplosiveShot = 45731;
     */
    GlyphOfExplosiveShot = 45731,
    /**
     * @generated from protobuf enum value: GlyphOfExplosiveTrap = 45733;
     */
    GlyphOfExplosiveTrap = 45733,
    /**
     * @generated from protobuf enum value: GlyphOfFreezingTrap = 42905;
     */
    GlyphOfFreezingTrap = 42905,
    /**
     * @generated from protobuf enum value: GlyphOfFrostTrap = 42906;
     */
    GlyphOfFrostTrap = 42906,
    /**
     * @generated from protobuf enum value: GlyphOfHuntersMark = 42907;
     */
    GlyphOfHuntersMark = 42907,
    /**
     * @generated from protobuf enum value: GlyphOfImmolationTrap = 42908;
     */
    GlyphOfImmolationTrap = 42908,
    /**
     * @generated from protobuf enum value: GlyphOfKillShot = 45732;
     */
    GlyphOfKillShot = 45732,
    /**
     * @generated from protobuf enum value: GlyphOfMending = 42900;
     */
    GlyphOfMending = 42900,
    /**
     * @generated from protobuf enum value: GlyphOfMultiShot = 42910;
     */
    GlyphOfMultiShot = 42910,
    /**
     * @generated from protobuf enum value: GlyphOfRapidFire = 42911;
     */
    GlyphOfRapidFire = 42911,
    /**
     * @generated from protobuf enum value: GlyphOfRaptorStrike = 45735;
     */
    GlyphOfRaptorStrike = 45735,
    /**
     * @generated from protobuf enum value: GlyphOfScatterShot = 45734;
     */
    GlyphOfScatterShot = 45734,
    /**
     * @generated from protobuf enum value: GlyphOfSerpentSting = 42912;
     */
    GlyphOfSerpentSting = 42912,
    /**
     * @generated from protobuf enum value: GlyphOfSnakeTrap = 42913;
     */
    GlyphOfSnakeTrap = 42913,
    /**
     * @generated from protobuf enum value: GlyphOfSteadyShot = 42914;
     */
    GlyphOfSteadyShot = 42914,
    /**
     * @generated from protobuf enum value: GlyphOfTheBeast = 42899;
     */
    GlyphOfTheBeast = 42899,
    /**
     * @generated from protobuf enum value: GlyphOfTheHawk = 42909;
     */
    GlyphOfTheHawk = 42909,
    /**
     * @generated from protobuf enum value: GlyphOfTrueshotAura = 42915;
     */
    GlyphOfTrueshotAura = 42915,
    /**
     * @generated from protobuf enum value: GlyphOfVolley = 42916;
     */
    GlyphOfVolley = 42916,
    /**
     * @generated from protobuf enum value: GlyphOfWyvernSting = 42917;
     */
    GlyphOfWyvernSting = 42917
}
/**
 * @generated from protobuf enum proto.HunterMinorGlyph
 */
export declare enum HunterMinorGlyph {
    /**
     * @generated from protobuf enum value: HunterMinorGlyphNone = 0;
     */
    HunterMinorGlyphNone = 0,
    /**
     * @generated from protobuf enum value: GlyphOfFeignDeath = 43351;
     */
    GlyphOfFeignDeath = 43351,
    /**
     * @generated from protobuf enum value: GlyphOfMendPet = 43350;
     */
    GlyphOfMendPet = 43350,
    /**
     * @generated from protobuf enum value: GlyphOfPossessedStrength = 43354;
     */
    GlyphOfPossessedStrength = 43354,
    /**
     * @generated from protobuf enum value: GlyphOfRevivePet = 43338;
     */
    GlyphOfRevivePet = 43338,
    /**
     * @generated from protobuf enum value: GlyphOfScareBeast = 43356;
     */
    GlyphOfScareBeast = 43356,
    /**
     * @generated from protobuf enum value: GlyphOfThePack = 43355;
     */
    GlyphOfThePack = 43355
}
declare class HunterTalents$Type extends MessageType<HunterTalents> {
    constructor();
    create(value?: PartialMessage<HunterTalents>): HunterTalents;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HunterTalents): HunterTalents;
    internalBinaryWrite(message: HunterTalents, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.HunterTalents
 */
export declare const HunterTalents: HunterTalents$Type;
declare class HunterPetTalents$Type extends MessageType<HunterPetTalents> {
    constructor();
    create(value?: PartialMessage<HunterPetTalents>): HunterPetTalents;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HunterPetTalents): HunterPetTalents;
    internalBinaryWrite(message: HunterPetTalents, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.HunterPetTalents
 */
export declare const HunterPetTalents: HunterPetTalents$Type;
declare class Hunter$Type extends MessageType<Hunter> {
    constructor();
    create(value?: PartialMessage<Hunter>): Hunter;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Hunter): Hunter;
    internalBinaryWrite(message: Hunter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Hunter
 */
export declare const Hunter: Hunter$Type;
declare class Hunter_Rotation$Type extends MessageType<Hunter_Rotation> {
    constructor();
    create(value?: PartialMessage<Hunter_Rotation>): Hunter_Rotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Hunter_Rotation): Hunter_Rotation;
    internalBinaryWrite(message: Hunter_Rotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Hunter.Rotation
 */
export declare const Hunter_Rotation: Hunter_Rotation$Type;
declare class Hunter_Options$Type extends MessageType<Hunter_Options> {
    constructor();
    create(value?: PartialMessage<Hunter_Options>): Hunter_Options;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Hunter_Options): Hunter_Options;
    internalBinaryWrite(message: Hunter_Options, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Hunter.Options
 */
export declare const Hunter_Options: Hunter_Options$Type;
export {};
