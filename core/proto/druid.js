import { WireType } from '/wotlk/protobuf-ts/index.js';
import { UnknownFieldHandler } from '/wotlk/protobuf-ts/index.js';
import { reflectionMergePartial } from '/wotlk/protobuf-ts/index.js';
import { MESSAGE_TYPE } from '/wotlk/protobuf-ts/index.js';
import { MessageType } from '/wotlk/protobuf-ts/index.js';
import { RaidTarget } from './common.js';
/**
 * @generated from protobuf enum proto.BalanceDruid.Rotation.RotationType
 */
export var BalanceDruid_Rotation_RotationType;
(function (BalanceDruid_Rotation_RotationType) {
    /**
     * @generated from protobuf enum value: Unknown = 0;
     */
    BalanceDruid_Rotation_RotationType[BalanceDruid_Rotation_RotationType["Unknown"] = 0] = "Unknown";
    /**
     * @generated from protobuf enum value: Adaptive = 1;
     */
    BalanceDruid_Rotation_RotationType[BalanceDruid_Rotation_RotationType["Adaptive"] = 1] = "Adaptive";
})(BalanceDruid_Rotation_RotationType || (BalanceDruid_Rotation_RotationType = {}));
/**
 * @generated from protobuf enum proto.FeralDruid.Rotation.FinishingMove
 */
export var FeralDruid_Rotation_FinishingMove;
(function (FeralDruid_Rotation_FinishingMove) {
    /**
     * @generated from protobuf enum value: Rip = 0;
     */
    FeralDruid_Rotation_FinishingMove[FeralDruid_Rotation_FinishingMove["Rip"] = 0] = "Rip";
    /**
     * @generated from protobuf enum value: Bite = 1;
     */
    FeralDruid_Rotation_FinishingMove[FeralDruid_Rotation_FinishingMove["Bite"] = 1] = "Bite";
    /**
     * @generated from protobuf enum value: None = 2;
     */
    FeralDruid_Rotation_FinishingMove[FeralDruid_Rotation_FinishingMove["None"] = 2] = "None";
})(FeralDruid_Rotation_FinishingMove || (FeralDruid_Rotation_FinishingMove = {}));
/**
 * @generated from protobuf enum proto.FeralTankDruid.Rotation.Swipe
 */
export var FeralTankDruid_Rotation_Swipe;
(function (FeralTankDruid_Rotation_Swipe) {
    /**
     * @generated from protobuf enum value: SwipeNone = 0;
     */
    FeralTankDruid_Rotation_Swipe[FeralTankDruid_Rotation_Swipe["SwipeNone"] = 0] = "SwipeNone";
    /**
     * @generated from protobuf enum value: SwipeWithEnoughAP = 1;
     */
    FeralTankDruid_Rotation_Swipe[FeralTankDruid_Rotation_Swipe["SwipeWithEnoughAP"] = 1] = "SwipeWithEnoughAP";
    /**
     * @generated from protobuf enum value: SwipeSpam = 2;
     */
    FeralTankDruid_Rotation_Swipe[FeralTankDruid_Rotation_Swipe["SwipeSpam"] = 2] = "SwipeSpam";
})(FeralTankDruid_Rotation_Swipe || (FeralTankDruid_Rotation_Swipe = {}));
/**
 * @generated from protobuf enum proto.DruidMajorGlyph
 */
export var DruidMajorGlyph;
(function (DruidMajorGlyph) {
    /**
     * @generated from protobuf enum value: DruidMajorGlyphNone = 0;
     */
    DruidMajorGlyph[DruidMajorGlyph["DruidMajorGlyphNone"] = 0] = "DruidMajorGlyphNone";
    /**
     * @generated from protobuf enum value: GlyphOfBarkskin = 45623;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfBarkskin"] = 45623] = "GlyphOfBarkskin";
    /**
     * @generated from protobuf enum value: GlyphOfBerserk = 45601;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfBerserk"] = 45601] = "GlyphOfBerserk";
    /**
     * @generated from protobuf enum value: GlyphOfClaw = 48720;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfClaw"] = 48720] = "GlyphOfClaw";
    /**
     * @generated from protobuf enum value: GlyphOfEntanglingRoots = 40924;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfEntanglingRoots"] = 40924] = "GlyphOfEntanglingRoots";
    /**
     * @generated from protobuf enum value: GlyphOfFocus = 44928;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfFocus"] = 44928] = "GlyphOfFocus";
    /**
     * @generated from protobuf enum value: GlyphOfFrenziedRegeneration = 40896;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfFrenziedRegeneration"] = 40896] = "GlyphOfFrenziedRegeneration";
    /**
     * @generated from protobuf enum value: GlyphOfGrowling = 40899;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfGrowling"] = 40899] = "GlyphOfGrowling";
    /**
     * @generated from protobuf enum value: GlyphOfHealingTouch = 40914;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfHealingTouch"] = 40914] = "GlyphOfHealingTouch";
    /**
     * @generated from protobuf enum value: GlyphOfHurricane = 40920;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfHurricane"] = 40920] = "GlyphOfHurricane";
    /**
     * @generated from protobuf enum value: GlyphOfInnervate = 40908;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfInnervate"] = 40908] = "GlyphOfInnervate";
    /**
     * @generated from protobuf enum value: GlyphOfInsectSwarm = 40919;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfInsectSwarm"] = 40919] = "GlyphOfInsectSwarm";
    /**
     * @generated from protobuf enum value: GlyphOfLifebloom = 40915;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfLifebloom"] = 40915] = "GlyphOfLifebloom";
    /**
     * @generated from protobuf enum value: GlyphOfMangle = 40900;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfMangle"] = 40900] = "GlyphOfMangle";
    /**
     * @generated from protobuf enum value: GlyphOfMaul = 40897;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfMaul"] = 40897] = "GlyphOfMaul";
    /**
     * @generated from protobuf enum value: GlyphOfMonsoon = 45622;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfMonsoon"] = 45622] = "GlyphOfMonsoon";
    /**
     * @generated from protobuf enum value: GlyphOfMoonfire = 40923;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfMoonfire"] = 40923] = "GlyphOfMoonfire";
    /**
     * @generated from protobuf enum value: GlyphOfNourish = 45603;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfNourish"] = 45603] = "GlyphOfNourish";
    /**
     * @generated from protobuf enum value: GlyphOfRake = 40903;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfRake"] = 40903] = "GlyphOfRake";
    /**
     * @generated from protobuf enum value: GlyphOfRapidRejuvenation = 50125;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfRapidRejuvenation"] = 50125] = "GlyphOfRapidRejuvenation";
    /**
     * @generated from protobuf enum value: GlyphOfRebirth = 40909;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfRebirth"] = 40909] = "GlyphOfRebirth";
    /**
     * @generated from protobuf enum value: GlyphOfRegrowth = 40912;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfRegrowth"] = 40912] = "GlyphOfRegrowth";
    /**
     * @generated from protobuf enum value: GlyphOfRejuvenation = 40913;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfRejuvenation"] = 40913] = "GlyphOfRejuvenation";
    /**
     * @generated from protobuf enum value: GlyphOfRip = 40902;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfRip"] = 40902] = "GlyphOfRip";
    /**
     * @generated from protobuf enum value: GlyphOfSavageRoar = 45604;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfSavageRoar"] = 45604] = "GlyphOfSavageRoar";
    /**
     * @generated from protobuf enum value: GlyphOfShred = 40901;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfShred"] = 40901] = "GlyphOfShred";
    /**
     * @generated from protobuf enum value: GlyphOfStarfall = 40921;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfStarfall"] = 40921] = "GlyphOfStarfall";
    /**
     * @generated from protobuf enum value: GlyphOfStarfire = 40916;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfStarfire"] = 40916] = "GlyphOfStarfire";
    /**
     * @generated from protobuf enum value: GlyphOfSurvivalInstincts = 46372;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfSurvivalInstincts"] = 46372] = "GlyphOfSurvivalInstincts";
    /**
     * @generated from protobuf enum value: GlyphOfSwiftmend = 40906;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfSwiftmend"] = 40906] = "GlyphOfSwiftmend";
    /**
     * @generated from protobuf enum value: GlyphOfWildGrowth = 45602;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfWildGrowth"] = 45602] = "GlyphOfWildGrowth";
    /**
     * @generated from protobuf enum value: GlyphOfWrath = 40922;
     */
    DruidMajorGlyph[DruidMajorGlyph["GlyphOfWrath"] = 40922] = "GlyphOfWrath";
})(DruidMajorGlyph || (DruidMajorGlyph = {}));
/**
 * @generated from protobuf enum proto.DruidMinorGlyph
 */
export var DruidMinorGlyph;
(function (DruidMinorGlyph) {
    /**
     * @generated from protobuf enum value: DruidMinorGlyphNone = 0;
     */
    DruidMinorGlyph[DruidMinorGlyph["DruidMinorGlyphNone"] = 0] = "DruidMinorGlyphNone";
    /**
     * @generated from protobuf enum value: GlyphOfAquaticForm = 43316;
     */
    DruidMinorGlyph[DruidMinorGlyph["GlyphOfAquaticForm"] = 43316] = "GlyphOfAquaticForm";
    /**
     * @generated from protobuf enum value: GlyphOfChallengingRoar = 43334;
     */
    DruidMinorGlyph[DruidMinorGlyph["GlyphOfChallengingRoar"] = 43334] = "GlyphOfChallengingRoar";
    /**
     * @generated from protobuf enum value: GlyphOfDash = 43674;
     */
    DruidMinorGlyph[DruidMinorGlyph["GlyphOfDash"] = 43674] = "GlyphOfDash";
    /**
     * @generated from protobuf enum value: GlyphOfTheWild = 43335;
     */
    DruidMinorGlyph[DruidMinorGlyph["GlyphOfTheWild"] = 43335] = "GlyphOfTheWild";
    /**
     * @generated from protobuf enum value: GlyphOfThorns = 43332;
     */
    DruidMinorGlyph[DruidMinorGlyph["GlyphOfThorns"] = 43332] = "GlyphOfThorns";
    /**
     * @generated from protobuf enum value: GlyphOfTyphoon = 44922;
     */
    DruidMinorGlyph[DruidMinorGlyph["GlyphOfTyphoon"] = 44922] = "GlyphOfTyphoon";
    /**
     * @generated from protobuf enum value: GlyphOfUnburdenedRebirth = 43331;
     */
    DruidMinorGlyph[DruidMinorGlyph["GlyphOfUnburdenedRebirth"] = 43331] = "GlyphOfUnburdenedRebirth";
})(DruidMinorGlyph || (DruidMinorGlyph = {}));
// @generated message type with reflection information, may provide speed optimized methods
class DruidTalents$Type extends MessageType {
    constructor() {
        super("proto.DruidTalents", [
            { no: 1, name: "starlight_wrath", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "genesis", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "moonglow", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "natures_majesty", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "improved_moonfire", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "brambles", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "natures_grace", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "natures_splendor", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "natures_reach", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "vengeance", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "celestial_focus", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "lunar_guidance", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "insect_swarm", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "improved_insect_swarm", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "dreamstate", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 16, name: "moonfury", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 17, name: "balance_of_power", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 18, name: "moonkin_form", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 19, name: "improved_moonkin_form", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 20, name: "improved_faerie_fire", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 21, name: "owlkin_frenzy", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 22, name: "wrath_of_cenarius", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 23, name: "eclipse", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 24, name: "typhoon", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 25, name: "force_of_nature", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 26, name: "gale_winds", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 27, name: "earth_and_moon", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 28, name: "starfall", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 29, name: "ferocity", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 30, name: "feral_aggression", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 31, name: "feral_instinct", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 32, name: "savage_fury", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 33, name: "thick_hide", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 34, name: "feral_swiftness", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 35, name: "survival_instincts", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 36, name: "sharpened_claws", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 37, name: "shredding_attacks", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 38, name: "predatory_strikes", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 39, name: "primal_fury", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 40, name: "primal_precision", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 41, name: "brutal_impact", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 42, name: "feral_charge", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 43, name: "nurturing_instinct", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 44, name: "natural_reaction", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 45, name: "heart_of_the_wild", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 46, name: "survival_of_the_fittest", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 47, name: "leader_of_the_pack", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 48, name: "improved_leader_of_the_pack", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 49, name: "primal_tenacity", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 50, name: "protector_of_the_pack", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 51, name: "predatory_instincts", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 52, name: "infected_wounds", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 53, name: "king_of_the_jungle", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 54, name: "mangle", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 55, name: "improved_mangle", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 56, name: "rend_and_tear", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 57, name: "primal_gore", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 58, name: "berserk", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 59, name: "improved_mark_of_the_wild", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 60, name: "natures_focus", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 61, name: "furor", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 62, name: "naturalist", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 63, name: "subtlety", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 64, name: "natural_shapeshifter", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 65, name: "intensity", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 66, name: "omen_of_clarity", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 67, name: "master_shapeshifter", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 68, name: "tranquil_spirit", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 69, name: "improved_rejuvenation", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 70, name: "natures_swiftness", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 71, name: "gift_of_nature", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 72, name: "improved_tranquility", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 73, name: "empowered_touch", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 74, name: "natures_bounty", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 75, name: "living_spirit", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 76, name: "swiftmend", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 77, name: "natural_perfection", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 78, name: "empowered_rejuvenation", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 79, name: "living_seed", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 80, name: "revitalize", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 81, name: "tree_of_life", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 82, name: "improved_tree_of_life", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 83, name: "improved_barkskin", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 84, name: "gift_of_the_earthmother", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 85, name: "wild_growth", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { starlightWrath: 0, genesis: 0, moonglow: 0, naturesMajesty: 0, improvedMoonfire: 0, brambles: 0, naturesGrace: 0, naturesSplendor: false, naturesReach: 0, vengeance: 0, celestialFocus: 0, lunarGuidance: 0, insectSwarm: false, improvedInsectSwarm: 0, dreamstate: 0, moonfury: 0, balanceOfPower: 0, moonkinForm: false, improvedMoonkinForm: 0, improvedFaerieFire: 0, owlkinFrenzy: 0, wrathOfCenarius: 0, eclipse: 0, typhoon: false, forceOfNature: false, galeWinds: 0, earthAndMoon: 0, starfall: false, ferocity: 0, feralAggression: 0, feralInstinct: 0, savageFury: 0, thickHide: 0, feralSwiftness: 0, survivalInstincts: false, sharpenedClaws: 0, shreddingAttacks: 0, predatoryStrikes: 0, primalFury: 0, primalPrecision: 0, brutalImpact: 0, feralCharge: false, nurturingInstinct: 0, naturalReaction: 0, heartOfTheWild: 0, survivalOfTheFittest: 0, leaderOfThePack: false, improvedLeaderOfThePack: 0, primalTenacity: 0, protectorOfThePack: 0, predatoryInstincts: 0, infectedWounds: 0, kingOfTheJungle: 0, mangle: false, improvedMangle: 0, rendAndTear: 0, primalGore: false, berserk: false, improvedMarkOfTheWild: 0, naturesFocus: 0, furor: 0, naturalist: 0, subtlety: 0, naturalShapeshifter: 0, intensity: 0, omenOfClarity: false, masterShapeshifter: 0, tranquilSpirit: 0, improvedRejuvenation: 0, naturesSwiftness: false, giftOfNature: 0, improvedTranquility: 0, empoweredTouch: 0, naturesBounty: 0, livingSpirit: 0, swiftmend: false, naturalPerfection: 0, empoweredRejuvenation: 0, livingSeed: 0, revitalize: 0, treeOfLife: false, improvedTreeOfLife: 0, improvedBarkskin: 0, giftOfTheEarthmother: 0, wildGrowth: false };
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
                case /* int32 starlight_wrath */ 1:
                    message.starlightWrath = reader.int32();
                    break;
                case /* int32 genesis */ 2:
                    message.genesis = reader.int32();
                    break;
                case /* int32 moonglow */ 3:
                    message.moonglow = reader.int32();
                    break;
                case /* int32 natures_majesty */ 4:
                    message.naturesMajesty = reader.int32();
                    break;
                case /* int32 improved_moonfire */ 5:
                    message.improvedMoonfire = reader.int32();
                    break;
                case /* int32 brambles */ 6:
                    message.brambles = reader.int32();
                    break;
                case /* int32 natures_grace */ 7:
                    message.naturesGrace = reader.int32();
                    break;
                case /* bool natures_splendor */ 8:
                    message.naturesSplendor = reader.bool();
                    break;
                case /* int32 natures_reach */ 9:
                    message.naturesReach = reader.int32();
                    break;
                case /* int32 vengeance */ 10:
                    message.vengeance = reader.int32();
                    break;
                case /* int32 celestial_focus */ 11:
                    message.celestialFocus = reader.int32();
                    break;
                case /* int32 lunar_guidance */ 12:
                    message.lunarGuidance = reader.int32();
                    break;
                case /* bool insect_swarm */ 13:
                    message.insectSwarm = reader.bool();
                    break;
                case /* int32 improved_insect_swarm */ 14:
                    message.improvedInsectSwarm = reader.int32();
                    break;
                case /* int32 dreamstate */ 15:
                    message.dreamstate = reader.int32();
                    break;
                case /* int32 moonfury */ 16:
                    message.moonfury = reader.int32();
                    break;
                case /* int32 balance_of_power */ 17:
                    message.balanceOfPower = reader.int32();
                    break;
                case /* bool moonkin_form */ 18:
                    message.moonkinForm = reader.bool();
                    break;
                case /* int32 improved_moonkin_form */ 19:
                    message.improvedMoonkinForm = reader.int32();
                    break;
                case /* int32 improved_faerie_fire */ 20:
                    message.improvedFaerieFire = reader.int32();
                    break;
                case /* int32 owlkin_frenzy */ 21:
                    message.owlkinFrenzy = reader.int32();
                    break;
                case /* int32 wrath_of_cenarius */ 22:
                    message.wrathOfCenarius = reader.int32();
                    break;
                case /* int32 eclipse */ 23:
                    message.eclipse = reader.int32();
                    break;
                case /* bool typhoon */ 24:
                    message.typhoon = reader.bool();
                    break;
                case /* bool force_of_nature */ 25:
                    message.forceOfNature = reader.bool();
                    break;
                case /* int32 gale_winds */ 26:
                    message.galeWinds = reader.int32();
                    break;
                case /* int32 earth_and_moon */ 27:
                    message.earthAndMoon = reader.int32();
                    break;
                case /* bool starfall */ 28:
                    message.starfall = reader.bool();
                    break;
                case /* int32 ferocity */ 29:
                    message.ferocity = reader.int32();
                    break;
                case /* int32 feral_aggression */ 30:
                    message.feralAggression = reader.int32();
                    break;
                case /* int32 feral_instinct */ 31:
                    message.feralInstinct = reader.int32();
                    break;
                case /* int32 savage_fury */ 32:
                    message.savageFury = reader.int32();
                    break;
                case /* int32 thick_hide */ 33:
                    message.thickHide = reader.int32();
                    break;
                case /* int32 feral_swiftness */ 34:
                    message.feralSwiftness = reader.int32();
                    break;
                case /* bool survival_instincts */ 35:
                    message.survivalInstincts = reader.bool();
                    break;
                case /* int32 sharpened_claws */ 36:
                    message.sharpenedClaws = reader.int32();
                    break;
                case /* int32 shredding_attacks */ 37:
                    message.shreddingAttacks = reader.int32();
                    break;
                case /* int32 predatory_strikes */ 38:
                    message.predatoryStrikes = reader.int32();
                    break;
                case /* int32 primal_fury */ 39:
                    message.primalFury = reader.int32();
                    break;
                case /* int32 primal_precision */ 40:
                    message.primalPrecision = reader.int32();
                    break;
                case /* int32 brutal_impact */ 41:
                    message.brutalImpact = reader.int32();
                    break;
                case /* bool feral_charge */ 42:
                    message.feralCharge = reader.bool();
                    break;
                case /* int32 nurturing_instinct */ 43:
                    message.nurturingInstinct = reader.int32();
                    break;
                case /* int32 natural_reaction */ 44:
                    message.naturalReaction = reader.int32();
                    break;
                case /* int32 heart_of_the_wild */ 45:
                    message.heartOfTheWild = reader.int32();
                    break;
                case /* int32 survival_of_the_fittest */ 46:
                    message.survivalOfTheFittest = reader.int32();
                    break;
                case /* bool leader_of_the_pack */ 47:
                    message.leaderOfThePack = reader.bool();
                    break;
                case /* int32 improved_leader_of_the_pack */ 48:
                    message.improvedLeaderOfThePack = reader.int32();
                    break;
                case /* int32 primal_tenacity */ 49:
                    message.primalTenacity = reader.int32();
                    break;
                case /* int32 protector_of_the_pack */ 50:
                    message.protectorOfThePack = reader.int32();
                    break;
                case /* int32 predatory_instincts */ 51:
                    message.predatoryInstincts = reader.int32();
                    break;
                case /* int32 infected_wounds */ 52:
                    message.infectedWounds = reader.int32();
                    break;
                case /* int32 king_of_the_jungle */ 53:
                    message.kingOfTheJungle = reader.int32();
                    break;
                case /* bool mangle */ 54:
                    message.mangle = reader.bool();
                    break;
                case /* int32 improved_mangle */ 55:
                    message.improvedMangle = reader.int32();
                    break;
                case /* int32 rend_and_tear */ 56:
                    message.rendAndTear = reader.int32();
                    break;
                case /* bool primal_gore */ 57:
                    message.primalGore = reader.bool();
                    break;
                case /* bool berserk */ 58:
                    message.berserk = reader.bool();
                    break;
                case /* int32 improved_mark_of_the_wild */ 59:
                    message.improvedMarkOfTheWild = reader.int32();
                    break;
                case /* int32 natures_focus */ 60:
                    message.naturesFocus = reader.int32();
                    break;
                case /* int32 furor */ 61:
                    message.furor = reader.int32();
                    break;
                case /* int32 naturalist */ 62:
                    message.naturalist = reader.int32();
                    break;
                case /* int32 subtlety */ 63:
                    message.subtlety = reader.int32();
                    break;
                case /* int32 natural_shapeshifter */ 64:
                    message.naturalShapeshifter = reader.int32();
                    break;
                case /* int32 intensity */ 65:
                    message.intensity = reader.int32();
                    break;
                case /* bool omen_of_clarity */ 66:
                    message.omenOfClarity = reader.bool();
                    break;
                case /* int32 master_shapeshifter */ 67:
                    message.masterShapeshifter = reader.int32();
                    break;
                case /* int32 tranquil_spirit */ 68:
                    message.tranquilSpirit = reader.int32();
                    break;
                case /* int32 improved_rejuvenation */ 69:
                    message.improvedRejuvenation = reader.int32();
                    break;
                case /* bool natures_swiftness */ 70:
                    message.naturesSwiftness = reader.bool();
                    break;
                case /* int32 gift_of_nature */ 71:
                    message.giftOfNature = reader.int32();
                    break;
                case /* int32 improved_tranquility */ 72:
                    message.improvedTranquility = reader.int32();
                    break;
                case /* int32 empowered_touch */ 73:
                    message.empoweredTouch = reader.int32();
                    break;
                case /* int32 natures_bounty */ 74:
                    message.naturesBounty = reader.int32();
                    break;
                case /* int32 living_spirit */ 75:
                    message.livingSpirit = reader.int32();
                    break;
                case /* bool swiftmend */ 76:
                    message.swiftmend = reader.bool();
                    break;
                case /* int32 natural_perfection */ 77:
                    message.naturalPerfection = reader.int32();
                    break;
                case /* int32 empowered_rejuvenation */ 78:
                    message.empoweredRejuvenation = reader.int32();
                    break;
                case /* int32 living_seed */ 79:
                    message.livingSeed = reader.int32();
                    break;
                case /* int32 revitalize */ 80:
                    message.revitalize = reader.int32();
                    break;
                case /* bool tree_of_life */ 81:
                    message.treeOfLife = reader.bool();
                    break;
                case /* int32 improved_tree_of_life */ 82:
                    message.improvedTreeOfLife = reader.int32();
                    break;
                case /* int32 improved_barkskin */ 83:
                    message.improvedBarkskin = reader.int32();
                    break;
                case /* int32 gift_of_the_earthmother */ 84:
                    message.giftOfTheEarthmother = reader.int32();
                    break;
                case /* bool wild_growth */ 85:
                    message.wildGrowth = reader.bool();
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
        /* int32 starlight_wrath = 1; */
        if (message.starlightWrath !== 0)
            writer.tag(1, WireType.Varint).int32(message.starlightWrath);
        /* int32 genesis = 2; */
        if (message.genesis !== 0)
            writer.tag(2, WireType.Varint).int32(message.genesis);
        /* int32 moonglow = 3; */
        if (message.moonglow !== 0)
            writer.tag(3, WireType.Varint).int32(message.moonglow);
        /* int32 natures_majesty = 4; */
        if (message.naturesMajesty !== 0)
            writer.tag(4, WireType.Varint).int32(message.naturesMajesty);
        /* int32 improved_moonfire = 5; */
        if (message.improvedMoonfire !== 0)
            writer.tag(5, WireType.Varint).int32(message.improvedMoonfire);
        /* int32 brambles = 6; */
        if (message.brambles !== 0)
            writer.tag(6, WireType.Varint).int32(message.brambles);
        /* int32 natures_grace = 7; */
        if (message.naturesGrace !== 0)
            writer.tag(7, WireType.Varint).int32(message.naturesGrace);
        /* bool natures_splendor = 8; */
        if (message.naturesSplendor !== false)
            writer.tag(8, WireType.Varint).bool(message.naturesSplendor);
        /* int32 natures_reach = 9; */
        if (message.naturesReach !== 0)
            writer.tag(9, WireType.Varint).int32(message.naturesReach);
        /* int32 vengeance = 10; */
        if (message.vengeance !== 0)
            writer.tag(10, WireType.Varint).int32(message.vengeance);
        /* int32 celestial_focus = 11; */
        if (message.celestialFocus !== 0)
            writer.tag(11, WireType.Varint).int32(message.celestialFocus);
        /* int32 lunar_guidance = 12; */
        if (message.lunarGuidance !== 0)
            writer.tag(12, WireType.Varint).int32(message.lunarGuidance);
        /* bool insect_swarm = 13; */
        if (message.insectSwarm !== false)
            writer.tag(13, WireType.Varint).bool(message.insectSwarm);
        /* int32 improved_insect_swarm = 14; */
        if (message.improvedInsectSwarm !== 0)
            writer.tag(14, WireType.Varint).int32(message.improvedInsectSwarm);
        /* int32 dreamstate = 15; */
        if (message.dreamstate !== 0)
            writer.tag(15, WireType.Varint).int32(message.dreamstate);
        /* int32 moonfury = 16; */
        if (message.moonfury !== 0)
            writer.tag(16, WireType.Varint).int32(message.moonfury);
        /* int32 balance_of_power = 17; */
        if (message.balanceOfPower !== 0)
            writer.tag(17, WireType.Varint).int32(message.balanceOfPower);
        /* bool moonkin_form = 18; */
        if (message.moonkinForm !== false)
            writer.tag(18, WireType.Varint).bool(message.moonkinForm);
        /* int32 improved_moonkin_form = 19; */
        if (message.improvedMoonkinForm !== 0)
            writer.tag(19, WireType.Varint).int32(message.improvedMoonkinForm);
        /* int32 improved_faerie_fire = 20; */
        if (message.improvedFaerieFire !== 0)
            writer.tag(20, WireType.Varint).int32(message.improvedFaerieFire);
        /* int32 owlkin_frenzy = 21; */
        if (message.owlkinFrenzy !== 0)
            writer.tag(21, WireType.Varint).int32(message.owlkinFrenzy);
        /* int32 wrath_of_cenarius = 22; */
        if (message.wrathOfCenarius !== 0)
            writer.tag(22, WireType.Varint).int32(message.wrathOfCenarius);
        /* int32 eclipse = 23; */
        if (message.eclipse !== 0)
            writer.tag(23, WireType.Varint).int32(message.eclipse);
        /* bool typhoon = 24; */
        if (message.typhoon !== false)
            writer.tag(24, WireType.Varint).bool(message.typhoon);
        /* bool force_of_nature = 25; */
        if (message.forceOfNature !== false)
            writer.tag(25, WireType.Varint).bool(message.forceOfNature);
        /* int32 gale_winds = 26; */
        if (message.galeWinds !== 0)
            writer.tag(26, WireType.Varint).int32(message.galeWinds);
        /* int32 earth_and_moon = 27; */
        if (message.earthAndMoon !== 0)
            writer.tag(27, WireType.Varint).int32(message.earthAndMoon);
        /* bool starfall = 28; */
        if (message.starfall !== false)
            writer.tag(28, WireType.Varint).bool(message.starfall);
        /* int32 ferocity = 29; */
        if (message.ferocity !== 0)
            writer.tag(29, WireType.Varint).int32(message.ferocity);
        /* int32 feral_aggression = 30; */
        if (message.feralAggression !== 0)
            writer.tag(30, WireType.Varint).int32(message.feralAggression);
        /* int32 feral_instinct = 31; */
        if (message.feralInstinct !== 0)
            writer.tag(31, WireType.Varint).int32(message.feralInstinct);
        /* int32 savage_fury = 32; */
        if (message.savageFury !== 0)
            writer.tag(32, WireType.Varint).int32(message.savageFury);
        /* int32 thick_hide = 33; */
        if (message.thickHide !== 0)
            writer.tag(33, WireType.Varint).int32(message.thickHide);
        /* int32 feral_swiftness = 34; */
        if (message.feralSwiftness !== 0)
            writer.tag(34, WireType.Varint).int32(message.feralSwiftness);
        /* bool survival_instincts = 35; */
        if (message.survivalInstincts !== false)
            writer.tag(35, WireType.Varint).bool(message.survivalInstincts);
        /* int32 sharpened_claws = 36; */
        if (message.sharpenedClaws !== 0)
            writer.tag(36, WireType.Varint).int32(message.sharpenedClaws);
        /* int32 shredding_attacks = 37; */
        if (message.shreddingAttacks !== 0)
            writer.tag(37, WireType.Varint).int32(message.shreddingAttacks);
        /* int32 predatory_strikes = 38; */
        if (message.predatoryStrikes !== 0)
            writer.tag(38, WireType.Varint).int32(message.predatoryStrikes);
        /* int32 primal_fury = 39; */
        if (message.primalFury !== 0)
            writer.tag(39, WireType.Varint).int32(message.primalFury);
        /* int32 primal_precision = 40; */
        if (message.primalPrecision !== 0)
            writer.tag(40, WireType.Varint).int32(message.primalPrecision);
        /* int32 brutal_impact = 41; */
        if (message.brutalImpact !== 0)
            writer.tag(41, WireType.Varint).int32(message.brutalImpact);
        /* bool feral_charge = 42; */
        if (message.feralCharge !== false)
            writer.tag(42, WireType.Varint).bool(message.feralCharge);
        /* int32 nurturing_instinct = 43; */
        if (message.nurturingInstinct !== 0)
            writer.tag(43, WireType.Varint).int32(message.nurturingInstinct);
        /* int32 natural_reaction = 44; */
        if (message.naturalReaction !== 0)
            writer.tag(44, WireType.Varint).int32(message.naturalReaction);
        /* int32 heart_of_the_wild = 45; */
        if (message.heartOfTheWild !== 0)
            writer.tag(45, WireType.Varint).int32(message.heartOfTheWild);
        /* int32 survival_of_the_fittest = 46; */
        if (message.survivalOfTheFittest !== 0)
            writer.tag(46, WireType.Varint).int32(message.survivalOfTheFittest);
        /* bool leader_of_the_pack = 47; */
        if (message.leaderOfThePack !== false)
            writer.tag(47, WireType.Varint).bool(message.leaderOfThePack);
        /* int32 improved_leader_of_the_pack = 48; */
        if (message.improvedLeaderOfThePack !== 0)
            writer.tag(48, WireType.Varint).int32(message.improvedLeaderOfThePack);
        /* int32 primal_tenacity = 49; */
        if (message.primalTenacity !== 0)
            writer.tag(49, WireType.Varint).int32(message.primalTenacity);
        /* int32 protector_of_the_pack = 50; */
        if (message.protectorOfThePack !== 0)
            writer.tag(50, WireType.Varint).int32(message.protectorOfThePack);
        /* int32 predatory_instincts = 51; */
        if (message.predatoryInstincts !== 0)
            writer.tag(51, WireType.Varint).int32(message.predatoryInstincts);
        /* int32 infected_wounds = 52; */
        if (message.infectedWounds !== 0)
            writer.tag(52, WireType.Varint).int32(message.infectedWounds);
        /* int32 king_of_the_jungle = 53; */
        if (message.kingOfTheJungle !== 0)
            writer.tag(53, WireType.Varint).int32(message.kingOfTheJungle);
        /* bool mangle = 54; */
        if (message.mangle !== false)
            writer.tag(54, WireType.Varint).bool(message.mangle);
        /* int32 improved_mangle = 55; */
        if (message.improvedMangle !== 0)
            writer.tag(55, WireType.Varint).int32(message.improvedMangle);
        /* int32 rend_and_tear = 56; */
        if (message.rendAndTear !== 0)
            writer.tag(56, WireType.Varint).int32(message.rendAndTear);
        /* bool primal_gore = 57; */
        if (message.primalGore !== false)
            writer.tag(57, WireType.Varint).bool(message.primalGore);
        /* bool berserk = 58; */
        if (message.berserk !== false)
            writer.tag(58, WireType.Varint).bool(message.berserk);
        /* int32 improved_mark_of_the_wild = 59; */
        if (message.improvedMarkOfTheWild !== 0)
            writer.tag(59, WireType.Varint).int32(message.improvedMarkOfTheWild);
        /* int32 natures_focus = 60; */
        if (message.naturesFocus !== 0)
            writer.tag(60, WireType.Varint).int32(message.naturesFocus);
        /* int32 furor = 61; */
        if (message.furor !== 0)
            writer.tag(61, WireType.Varint).int32(message.furor);
        /* int32 naturalist = 62; */
        if (message.naturalist !== 0)
            writer.tag(62, WireType.Varint).int32(message.naturalist);
        /* int32 subtlety = 63; */
        if (message.subtlety !== 0)
            writer.tag(63, WireType.Varint).int32(message.subtlety);
        /* int32 natural_shapeshifter = 64; */
        if (message.naturalShapeshifter !== 0)
            writer.tag(64, WireType.Varint).int32(message.naturalShapeshifter);
        /* int32 intensity = 65; */
        if (message.intensity !== 0)
            writer.tag(65, WireType.Varint).int32(message.intensity);
        /* bool omen_of_clarity = 66; */
        if (message.omenOfClarity !== false)
            writer.tag(66, WireType.Varint).bool(message.omenOfClarity);
        /* int32 master_shapeshifter = 67; */
        if (message.masterShapeshifter !== 0)
            writer.tag(67, WireType.Varint).int32(message.masterShapeshifter);
        /* int32 tranquil_spirit = 68; */
        if (message.tranquilSpirit !== 0)
            writer.tag(68, WireType.Varint).int32(message.tranquilSpirit);
        /* int32 improved_rejuvenation = 69; */
        if (message.improvedRejuvenation !== 0)
            writer.tag(69, WireType.Varint).int32(message.improvedRejuvenation);
        /* bool natures_swiftness = 70; */
        if (message.naturesSwiftness !== false)
            writer.tag(70, WireType.Varint).bool(message.naturesSwiftness);
        /* int32 gift_of_nature = 71; */
        if (message.giftOfNature !== 0)
            writer.tag(71, WireType.Varint).int32(message.giftOfNature);
        /* int32 improved_tranquility = 72; */
        if (message.improvedTranquility !== 0)
            writer.tag(72, WireType.Varint).int32(message.improvedTranquility);
        /* int32 empowered_touch = 73; */
        if (message.empoweredTouch !== 0)
            writer.tag(73, WireType.Varint).int32(message.empoweredTouch);
        /* int32 natures_bounty = 74; */
        if (message.naturesBounty !== 0)
            writer.tag(74, WireType.Varint).int32(message.naturesBounty);
        /* int32 living_spirit = 75; */
        if (message.livingSpirit !== 0)
            writer.tag(75, WireType.Varint).int32(message.livingSpirit);
        /* bool swiftmend = 76; */
        if (message.swiftmend !== false)
            writer.tag(76, WireType.Varint).bool(message.swiftmend);
        /* int32 natural_perfection = 77; */
        if (message.naturalPerfection !== 0)
            writer.tag(77, WireType.Varint).int32(message.naturalPerfection);
        /* int32 empowered_rejuvenation = 78; */
        if (message.empoweredRejuvenation !== 0)
            writer.tag(78, WireType.Varint).int32(message.empoweredRejuvenation);
        /* int32 living_seed = 79; */
        if (message.livingSeed !== 0)
            writer.tag(79, WireType.Varint).int32(message.livingSeed);
        /* int32 revitalize = 80; */
        if (message.revitalize !== 0)
            writer.tag(80, WireType.Varint).int32(message.revitalize);
        /* bool tree_of_life = 81; */
        if (message.treeOfLife !== false)
            writer.tag(81, WireType.Varint).bool(message.treeOfLife);
        /* int32 improved_tree_of_life = 82; */
        if (message.improvedTreeOfLife !== 0)
            writer.tag(82, WireType.Varint).int32(message.improvedTreeOfLife);
        /* int32 improved_barkskin = 83; */
        if (message.improvedBarkskin !== 0)
            writer.tag(83, WireType.Varint).int32(message.improvedBarkskin);
        /* int32 gift_of_the_earthmother = 84; */
        if (message.giftOfTheEarthmother !== 0)
            writer.tag(84, WireType.Varint).int32(message.giftOfTheEarthmother);
        /* bool wild_growth = 85; */
        if (message.wildGrowth !== false)
            writer.tag(85, WireType.Varint).bool(message.wildGrowth);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.DruidTalents
 */
export const DruidTalents = new DruidTalents$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BalanceDruid$Type extends MessageType {
    constructor() {
        super("proto.BalanceDruid", [
            { no: 1, name: "rotation", kind: "message", T: () => BalanceDruid_Rotation },
            { no: 2, name: "talents", kind: "message", T: () => DruidTalents },
            { no: 3, name: "options", kind: "message", T: () => BalanceDruid_Options }
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
                case /* proto.BalanceDruid.Rotation rotation */ 1:
                    message.rotation = BalanceDruid_Rotation.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* proto.DruidTalents talents */ 2:
                    message.talents = DruidTalents.internalBinaryRead(reader, reader.uint32(), options, message.talents);
                    break;
                case /* proto.BalanceDruid.Options options */ 3:
                    message.options = BalanceDruid_Options.internalBinaryRead(reader, reader.uint32(), options, message.options);
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
        /* proto.BalanceDruid.Rotation rotation = 1; */
        if (message.rotation)
            BalanceDruid_Rotation.internalBinaryWrite(message.rotation, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* proto.DruidTalents talents = 2; */
        if (message.talents)
            DruidTalents.internalBinaryWrite(message.talents, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* proto.BalanceDruid.Options options = 3; */
        if (message.options)
            BalanceDruid_Options.internalBinaryWrite(message.options, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.BalanceDruid
 */
export const BalanceDruid = new BalanceDruid$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BalanceDruid_Rotation$Type extends MessageType {
    constructor() {
        super("proto.BalanceDruid.Rotation", [
            { no: 1, name: "type", kind: "enum", T: () => ["proto.BalanceDruid.Rotation.RotationType", BalanceDruid_Rotation_RotationType] }
        ]);
    }
    create(value) {
        const message = { type: 0 };
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
                case /* proto.BalanceDruid.Rotation.RotationType type */ 1:
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
        /* proto.BalanceDruid.Rotation.RotationType type = 1; */
        if (message.type !== 0)
            writer.tag(1, WireType.Varint).int32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.BalanceDruid.Rotation
 */
export const BalanceDruid_Rotation = new BalanceDruid_Rotation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BalanceDruid_Options$Type extends MessageType {
    constructor() {
        super("proto.BalanceDruid.Options", [
            { no: 1, name: "innervate_target", kind: "message", T: () => RaidTarget },
            { no: 2, name: "battle_res", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { battleRes: false };
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
                case /* proto.RaidTarget innervate_target */ 1:
                    message.innervateTarget = RaidTarget.internalBinaryRead(reader, reader.uint32(), options, message.innervateTarget);
                    break;
                case /* bool battle_res */ 2:
                    message.battleRes = reader.bool();
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
        /* proto.RaidTarget innervate_target = 1; */
        if (message.innervateTarget)
            RaidTarget.internalBinaryWrite(message.innervateTarget, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* bool battle_res = 2; */
        if (message.battleRes !== false)
            writer.tag(2, WireType.Varint).bool(message.battleRes);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.BalanceDruid.Options
 */
export const BalanceDruid_Options = new BalanceDruid_Options$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FeralDruid$Type extends MessageType {
    constructor() {
        super("proto.FeralDruid", [
            { no: 1, name: "rotation", kind: "message", T: () => FeralDruid_Rotation },
            { no: 2, name: "talents", kind: "message", T: () => DruidTalents },
            { no: 3, name: "options", kind: "message", T: () => FeralDruid_Options }
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
                case /* proto.FeralDruid.Rotation rotation */ 1:
                    message.rotation = FeralDruid_Rotation.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* proto.DruidTalents talents */ 2:
                    message.talents = DruidTalents.internalBinaryRead(reader, reader.uint32(), options, message.talents);
                    break;
                case /* proto.FeralDruid.Options options */ 3:
                    message.options = FeralDruid_Options.internalBinaryRead(reader, reader.uint32(), options, message.options);
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
        /* proto.FeralDruid.Rotation rotation = 1; */
        if (message.rotation)
            FeralDruid_Rotation.internalBinaryWrite(message.rotation, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* proto.DruidTalents talents = 2; */
        if (message.talents)
            DruidTalents.internalBinaryWrite(message.talents, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* proto.FeralDruid.Options options = 3; */
        if (message.options)
            FeralDruid_Options.internalBinaryWrite(message.options, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.FeralDruid
 */
export const FeralDruid = new FeralDruid$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FeralDruid_Rotation$Type extends MessageType {
    constructor() {
        super("proto.FeralDruid.Rotation", [
            { no: 1, name: "finishing_move", kind: "enum", T: () => ["proto.FeralDruid.Rotation.FinishingMove", FeralDruid_Rotation_FinishingMove] },
            { no: 2, name: "mangle_trick", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "biteweave", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "ripweave", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "rip_min_combo_points", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "bite_min_combo_points", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "rake_trick", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "maintain_faerie_fire", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { finishingMove: 0, mangleTrick: false, biteweave: false, ripweave: false, ripMinComboPoints: 0, biteMinComboPoints: 0, rakeTrick: false, maintainFaerieFire: false };
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
                case /* proto.FeralDruid.Rotation.FinishingMove finishing_move */ 1:
                    message.finishingMove = reader.int32();
                    break;
                case /* bool mangle_trick */ 2:
                    message.mangleTrick = reader.bool();
                    break;
                case /* bool biteweave */ 3:
                    message.biteweave = reader.bool();
                    break;
                case /* bool ripweave */ 8:
                    message.ripweave = reader.bool();
                    break;
                case /* int32 rip_min_combo_points */ 5:
                    message.ripMinComboPoints = reader.int32();
                    break;
                case /* int32 bite_min_combo_points */ 6:
                    message.biteMinComboPoints = reader.int32();
                    break;
                case /* bool rake_trick */ 7:
                    message.rakeTrick = reader.bool();
                    break;
                case /* bool maintain_faerie_fire */ 9:
                    message.maintainFaerieFire = reader.bool();
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
        /* proto.FeralDruid.Rotation.FinishingMove finishing_move = 1; */
        if (message.finishingMove !== 0)
            writer.tag(1, WireType.Varint).int32(message.finishingMove);
        /* bool mangle_trick = 2; */
        if (message.mangleTrick !== false)
            writer.tag(2, WireType.Varint).bool(message.mangleTrick);
        /* bool biteweave = 3; */
        if (message.biteweave !== false)
            writer.tag(3, WireType.Varint).bool(message.biteweave);
        /* bool ripweave = 8; */
        if (message.ripweave !== false)
            writer.tag(8, WireType.Varint).bool(message.ripweave);
        /* int32 rip_min_combo_points = 5; */
        if (message.ripMinComboPoints !== 0)
            writer.tag(5, WireType.Varint).int32(message.ripMinComboPoints);
        /* int32 bite_min_combo_points = 6; */
        if (message.biteMinComboPoints !== 0)
            writer.tag(6, WireType.Varint).int32(message.biteMinComboPoints);
        /* bool rake_trick = 7; */
        if (message.rakeTrick !== false)
            writer.tag(7, WireType.Varint).bool(message.rakeTrick);
        /* bool maintain_faerie_fire = 9; */
        if (message.maintainFaerieFire !== false)
            writer.tag(9, WireType.Varint).bool(message.maintainFaerieFire);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.FeralDruid.Rotation
 */
export const FeralDruid_Rotation = new FeralDruid_Rotation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FeralDruid_Options$Type extends MessageType {
    constructor() {
        super("proto.FeralDruid.Options", [
            { no: 1, name: "innervate_target", kind: "message", T: () => RaidTarget },
            { no: 2, name: "latency_ms", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { latencyMs: 0 };
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
                case /* proto.RaidTarget innervate_target */ 1:
                    message.innervateTarget = RaidTarget.internalBinaryRead(reader, reader.uint32(), options, message.innervateTarget);
                    break;
                case /* int32 latency_ms */ 2:
                    message.latencyMs = reader.int32();
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
        /* proto.RaidTarget innervate_target = 1; */
        if (message.innervateTarget)
            RaidTarget.internalBinaryWrite(message.innervateTarget, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* int32 latency_ms = 2; */
        if (message.latencyMs !== 0)
            writer.tag(2, WireType.Varint).int32(message.latencyMs);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.FeralDruid.Options
 */
export const FeralDruid_Options = new FeralDruid_Options$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FeralTankDruid$Type extends MessageType {
    constructor() {
        super("proto.FeralTankDruid", [
            { no: 1, name: "rotation", kind: "message", T: () => FeralTankDruid_Rotation },
            { no: 2, name: "talents", kind: "message", T: () => DruidTalents },
            { no: 3, name: "options", kind: "message", T: () => FeralTankDruid_Options }
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
                case /* proto.FeralTankDruid.Rotation rotation */ 1:
                    message.rotation = FeralTankDruid_Rotation.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* proto.DruidTalents talents */ 2:
                    message.talents = DruidTalents.internalBinaryRead(reader, reader.uint32(), options, message.talents);
                    break;
                case /* proto.FeralTankDruid.Options options */ 3:
                    message.options = FeralTankDruid_Options.internalBinaryRead(reader, reader.uint32(), options, message.options);
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
        /* proto.FeralTankDruid.Rotation rotation = 1; */
        if (message.rotation)
            FeralTankDruid_Rotation.internalBinaryWrite(message.rotation, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* proto.DruidTalents talents = 2; */
        if (message.talents)
            DruidTalents.internalBinaryWrite(message.talents, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* proto.FeralTankDruid.Options options = 3; */
        if (message.options)
            FeralTankDruid_Options.internalBinaryWrite(message.options, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.FeralTankDruid
 */
export const FeralTankDruid = new FeralTankDruid$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FeralTankDruid_Rotation$Type extends MessageType {
    constructor() {
        super("proto.FeralTankDruid.Rotation", [
            { no: 1, name: "maul_rage_threshold", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "maintain_demoralizing_roar", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "maintain_faerie_fire", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "swipe", kind: "enum", T: () => ["proto.FeralTankDruid.Rotation.Swipe", FeralTankDruid_Rotation_Swipe] },
            { no: 5, name: "swipe_ap_threshold", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value) {
        const message = { maulRageThreshold: 0, maintainDemoralizingRoar: false, maintainFaerieFire: false, swipe: 0, swipeApThreshold: 0 };
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
                case /* int32 maul_rage_threshold */ 1:
                    message.maulRageThreshold = reader.int32();
                    break;
                case /* bool maintain_demoralizing_roar */ 2:
                    message.maintainDemoralizingRoar = reader.bool();
                    break;
                case /* bool maintain_faerie_fire */ 3:
                    message.maintainFaerieFire = reader.bool();
                    break;
                case /* proto.FeralTankDruid.Rotation.Swipe swipe */ 4:
                    message.swipe = reader.int32();
                    break;
                case /* double swipe_ap_threshold */ 5:
                    message.swipeApThreshold = reader.double();
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
        /* int32 maul_rage_threshold = 1; */
        if (message.maulRageThreshold !== 0)
            writer.tag(1, WireType.Varint).int32(message.maulRageThreshold);
        /* bool maintain_demoralizing_roar = 2; */
        if (message.maintainDemoralizingRoar !== false)
            writer.tag(2, WireType.Varint).bool(message.maintainDemoralizingRoar);
        /* bool maintain_faerie_fire = 3; */
        if (message.maintainFaerieFire !== false)
            writer.tag(3, WireType.Varint).bool(message.maintainFaerieFire);
        /* proto.FeralTankDruid.Rotation.Swipe swipe = 4; */
        if (message.swipe !== 0)
            writer.tag(4, WireType.Varint).int32(message.swipe);
        /* double swipe_ap_threshold = 5; */
        if (message.swipeApThreshold !== 0)
            writer.tag(5, WireType.Bit64).double(message.swipeApThreshold);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.FeralTankDruid.Rotation
 */
export const FeralTankDruid_Rotation = new FeralTankDruid_Rotation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FeralTankDruid_Options$Type extends MessageType {
    constructor() {
        super("proto.FeralTankDruid.Options", [
            { no: 1, name: "innervate_target", kind: "message", T: () => RaidTarget },
            { no: 2, name: "starting_rage", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value) {
        const message = { startingRage: 0 };
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
                case /* proto.RaidTarget innervate_target */ 1:
                    message.innervateTarget = RaidTarget.internalBinaryRead(reader, reader.uint32(), options, message.innervateTarget);
                    break;
                case /* double starting_rage */ 2:
                    message.startingRage = reader.double();
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
        /* proto.RaidTarget innervate_target = 1; */
        if (message.innervateTarget)
            RaidTarget.internalBinaryWrite(message.innervateTarget, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* double starting_rage = 2; */
        if (message.startingRage !== 0)
            writer.tag(2, WireType.Bit64).double(message.startingRage);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.FeralTankDruid.Options
 */
export const FeralTankDruid_Options = new FeralTankDruid_Options$Type();
