import { WireType } from '/wotlk/protobuf-ts/index.js';
import { UnknownFieldHandler } from '/wotlk/protobuf-ts/index.js';
import { reflectionMergePartial } from '/wotlk/protobuf-ts/index.js';
import { MESSAGE_TYPE } from '/wotlk/protobuf-ts/index.js';
import { MessageType } from '/wotlk/protobuf-ts/index.js';
/**
 * @generated from protobuf enum proto.PaladinMajorGlyph
 */
export var PaladinMajorGlyph;
(function (PaladinMajorGlyph) {
    /**
     * @generated from protobuf enum value: PaladinMajorGlyphNone = 0;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["PaladinMajorGlyphNone"] = 0] = "PaladinMajorGlyphNone";
    /**
     * @generated from protobuf enum value: GlyphOfAvengerSShield = 41101;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfAvengerSShield"] = 41101] = "GlyphOfAvengerSShield";
    /**
     * @generated from protobuf enum value: GlyphOfAvengingWrath = 41107;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfAvengingWrath"] = 41107] = "GlyphOfAvengingWrath";
    /**
     * @generated from protobuf enum value: GlyphOfBeaconOfLight = 45741;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfBeaconOfLight"] = 45741] = "GlyphOfBeaconOfLight";
    /**
     * @generated from protobuf enum value: GlyphOfCleansing = 41104;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfCleansing"] = 41104] = "GlyphOfCleansing";
    /**
     * @generated from protobuf enum value: GlyphOfConsecration = 41099;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfConsecration"] = 41099] = "GlyphOfConsecration";
    /**
     * @generated from protobuf enum value: GlyphOfCrusaderStrike = 41098;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfCrusaderStrike"] = 41098] = "GlyphOfCrusaderStrike";
    /**
     * @generated from protobuf enum value: GlyphOfDivinePlea = 45745;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfDivinePlea"] = 45745] = "GlyphOfDivinePlea";
    /**
     * @generated from protobuf enum value: GlyphOfDivineStorm = 45743;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfDivineStorm"] = 45743] = "GlyphOfDivineStorm";
    /**
     * @generated from protobuf enum value: GlyphOfDivinity = 41108;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfDivinity"] = 41108] = "GlyphOfDivinity";
    /**
     * @generated from protobuf enum value: GlyphOfExorcism = 41103;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfExorcism"] = 41103] = "GlyphOfExorcism";
    /**
     * @generated from protobuf enum value: GlyphOfFlashOfLight = 41105;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfFlashOfLight"] = 41105] = "GlyphOfFlashOfLight";
    /**
     * @generated from protobuf enum value: GlyphOfHammerOfJustice = 41095;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfHammerOfJustice"] = 41095] = "GlyphOfHammerOfJustice";
    /**
     * @generated from protobuf enum value: GlyphOfHammerOfTheRighteous = 45742;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfHammerOfTheRighteous"] = 45742] = "GlyphOfHammerOfTheRighteous";
    /**
     * @generated from protobuf enum value: GlyphOfHammerOfWrath = 41097;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfHammerOfWrath"] = 41097] = "GlyphOfHammerOfWrath";
    /**
     * @generated from protobuf enum value: GlyphOfHolyLight = 41106;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfHolyLight"] = 41106] = "GlyphOfHolyLight";
    /**
     * @generated from protobuf enum value: GlyphOfHolyShock = 45746;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfHolyShock"] = 45746] = "GlyphOfHolyShock";
    /**
     * @generated from protobuf enum value: GlyphOfHolyWrath = 43867;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfHolyWrath"] = 43867] = "GlyphOfHolyWrath";
    /**
     * @generated from protobuf enum value: GlyphOfJudgement = 41092;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfJudgement"] = 41092] = "GlyphOfJudgement";
    /**
     * @generated from protobuf enum value: GlyphOfRighteousDefense = 41100;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfRighteousDefense"] = 41100] = "GlyphOfRighteousDefense";
    /**
     * @generated from protobuf enum value: GlyphOfSalvation = 45747;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfSalvation"] = 45747] = "GlyphOfSalvation";
    /**
     * @generated from protobuf enum value: GlyphOfSealOfCommand = 41094;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfSealOfCommand"] = 41094] = "GlyphOfSealOfCommand";
    /**
     * @generated from protobuf enum value: GlyphOfSealOfLight = 41110;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfSealOfLight"] = 41110] = "GlyphOfSealOfLight";
    /**
     * @generated from protobuf enum value: GlyphOfSealOfRighteousness = 43868;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfSealOfRighteousness"] = 43868] = "GlyphOfSealOfRighteousness";
    /**
     * @generated from protobuf enum value: GlyphOfSealOfVengeance = 43869;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfSealOfVengeance"] = 43869] = "GlyphOfSealOfVengeance";
    /**
     * @generated from protobuf enum value: GlyphOfSealOfWisdom = 41109;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfSealOfWisdom"] = 41109] = "GlyphOfSealOfWisdom";
    /**
     * @generated from protobuf enum value: GlyphOfShieldOfRighteousness = 45744;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfShieldOfRighteousness"] = 45744] = "GlyphOfShieldOfRighteousness";
    /**
     * @generated from protobuf enum value: GlyphOfSpiritualAttunement = 41096;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfSpiritualAttunement"] = 41096] = "GlyphOfSpiritualAttunement";
    /**
     * @generated from protobuf enum value: GlyphOfTurnEvil = 41102;
     */
    PaladinMajorGlyph[PaladinMajorGlyph["GlyphOfTurnEvil"] = 41102] = "GlyphOfTurnEvil";
})(PaladinMajorGlyph || (PaladinMajorGlyph = {}));
/**
 * @generated from protobuf enum proto.PaladinMinorGlyph
 */
export var PaladinMinorGlyph;
(function (PaladinMinorGlyph) {
    /**
     * @generated from protobuf enum value: PaladinMinorGlyphNone = 0;
     */
    PaladinMinorGlyph[PaladinMinorGlyph["PaladinMinorGlyphNone"] = 0] = "PaladinMinorGlyphNone";
    /**
     * @generated from protobuf enum value: GlyphOfBlessingOfKings = 43365;
     */
    PaladinMinorGlyph[PaladinMinorGlyph["GlyphOfBlessingOfKings"] = 43365] = "GlyphOfBlessingOfKings";
    /**
     * @generated from protobuf enum value: GlyphOfBlessingOfMight = 43340;
     */
    PaladinMinorGlyph[PaladinMinorGlyph["GlyphOfBlessingOfMight"] = 43340] = "GlyphOfBlessingOfMight";
    /**
     * @generated from protobuf enum value: GlyphOfBlessingOfWisdom = 43366;
     */
    PaladinMinorGlyph[PaladinMinorGlyph["GlyphOfBlessingOfWisdom"] = 43366] = "GlyphOfBlessingOfWisdom";
    /**
     * @generated from protobuf enum value: GlyphOfLayOnHands = 43367;
     */
    PaladinMinorGlyph[PaladinMinorGlyph["GlyphOfLayOnHands"] = 43367] = "GlyphOfLayOnHands";
    /**
     * @generated from protobuf enum value: GlyphOfSenseUndead = 43368;
     */
    PaladinMinorGlyph[PaladinMinorGlyph["GlyphOfSenseUndead"] = 43368] = "GlyphOfSenseUndead";
    /**
     * @generated from protobuf enum value: GlyphOfTheWise = 43369;
     */
    PaladinMinorGlyph[PaladinMinorGlyph["GlyphOfTheWise"] = 43369] = "GlyphOfTheWise";
})(PaladinMinorGlyph || (PaladinMinorGlyph = {}));
/**
 * @generated from protobuf enum proto.Blessings
 */
export var Blessings;
(function (Blessings) {
    /**
     * @generated from protobuf enum value: BlessingUnknown = 0;
     */
    Blessings[Blessings["BlessingUnknown"] = 0] = "BlessingUnknown";
    /**
     * @generated from protobuf enum value: BlessingOfKings = 1;
     */
    Blessings[Blessings["BlessingOfKings"] = 1] = "BlessingOfKings";
    /**
     * @generated from protobuf enum value: BlessingOfMight = 2;
     */
    Blessings[Blessings["BlessingOfMight"] = 2] = "BlessingOfMight";
    /**
     * @generated from protobuf enum value: BlessingOfSalvation = 3;
     */
    Blessings[Blessings["BlessingOfSalvation"] = 3] = "BlessingOfSalvation";
    /**
     * @generated from protobuf enum value: BlessingOfWisdom = 4;
     */
    Blessings[Blessings["BlessingOfWisdom"] = 4] = "BlessingOfWisdom";
    /**
     * @generated from protobuf enum value: BlessingOfSanctuary = 5;
     */
    Blessings[Blessings["BlessingOfSanctuary"] = 5] = "BlessingOfSanctuary";
    /**
     * @generated from protobuf enum value: BlessingOfLight = 6;
     */
    Blessings[Blessings["BlessingOfLight"] = 6] = "BlessingOfLight";
})(Blessings || (Blessings = {}));
/**
 * @generated from protobuf enum proto.PaladinAura
 */
export var PaladinAura;
(function (PaladinAura) {
    /**
     * @generated from protobuf enum value: NoPaladinAura = 0;
     */
    PaladinAura[PaladinAura["NoPaladinAura"] = 0] = "NoPaladinAura";
    /**
     * @generated from protobuf enum value: DevotionAura = 2;
     */
    PaladinAura[PaladinAura["DevotionAura"] = 2] = "DevotionAura";
    /**
     * @generated from protobuf enum value: RetributionAura = 3;
     */
    PaladinAura[PaladinAura["RetributionAura"] = 3] = "RetributionAura";
})(PaladinAura || (PaladinAura = {}));
/**
 * @generated from protobuf enum proto.PaladinSeal
 */
export var PaladinSeal;
(function (PaladinSeal) {
    /**
     * @generated from protobuf enum value: Vengeance = 0;
     */
    PaladinSeal[PaladinSeal["Vengeance"] = 0] = "Vengeance";
    /**
     * @generated from protobuf enum value: Command = 1;
     */
    PaladinSeal[PaladinSeal["Command"] = 1] = "Command";
    /**
     * @generated from protobuf enum value: Righteousness = 2;
     */
    PaladinSeal[PaladinSeal["Righteousness"] = 2] = "Righteousness";
})(PaladinSeal || (PaladinSeal = {}));
/**
 * @generated from protobuf enum proto.PaladinJudgement
 */
export var PaladinJudgement;
(function (PaladinJudgement) {
    /**
     * @generated from protobuf enum value: JudgementOfWisdom = 0;
     */
    PaladinJudgement[PaladinJudgement["JudgementOfWisdom"] = 0] = "JudgementOfWisdom";
    /**
     * @generated from protobuf enum value: JudgementOfLight = 1;
     */
    PaladinJudgement[PaladinJudgement["JudgementOfLight"] = 1] = "JudgementOfLight";
})(PaladinJudgement || (PaladinJudgement = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PaladinTalents$Type extends MessageType {
    constructor() {
        super("proto.PaladinTalents", [
            { no: 1, name: "spiritual_focus", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "seals_of_the_pure", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "healing_light", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "divine_intellect", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "unyielding_faith", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "aura_mastery", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "illumination", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "improved_lay_on_hands", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "improved_concentration_aura", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "improved_blessing_of_wisdom", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "blessed_hands", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "pure_of_heart", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "divine_favor", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "sanctified_light", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "purifying_power", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 16, name: "holy_power", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 17, name: "lights_grace", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 18, name: "holy_shock", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 19, name: "blessed_life", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 20, name: "sacred_cleansing", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 21, name: "holy_guidance", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 22, name: "divine_illumination", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 23, name: "judgements_of_the_pure", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 24, name: "infusion_of_light", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 25, name: "enlightened_judgements", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 26, name: "beacon_of_light", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 27, name: "divinity", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 28, name: "divine_strength", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 29, name: "stoicism", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 30, name: "guardians_favor", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 31, name: "anticipation", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 32, name: "divine_sacrifice", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 33, name: "improved_righteous_fury", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 34, name: "toughness", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 35, name: "divine_guardian", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 36, name: "improved_hammer_of_justice", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 37, name: "improved_devotion_aura", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 38, name: "blessing_of_sanctuary", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 39, name: "reckoning", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 40, name: "sacred_duty", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 41, name: "one_handed_weapon_specialization", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 42, name: "spiritual_attunement", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 43, name: "holy_shield", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 44, name: "ardent_defender", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 45, name: "redoubt", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 46, name: "combat_expertise", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 47, name: "touched_by_the_light", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 48, name: "avengers_shield", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 49, name: "guarded_by_the_light", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 50, name: "shield_of_the_templar", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 51, name: "judgements_of_the_just", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 52, name: "hammer_of_the_righteous", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 53, name: "deflection", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 54, name: "benediction", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 55, name: "improved_judgements", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 56, name: "heart_of_the_crusader", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 57, name: "improved_blessing_of_might", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 58, name: "vindication", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 59, name: "conviction", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 60, name: "seal_of_command", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 61, name: "pursuit_of_justice", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 62, name: "eye_for_an_eye", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 63, name: "sanctity_of_battle", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 64, name: "crusade", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 65, name: "two_handed_weapon_specialization", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 66, name: "sanctified_retribution", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 67, name: "vengeance", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 68, name: "divine_purpose", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 69, name: "the_art_of_war", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 70, name: "repentance", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 71, name: "judgements_of_the_wise", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 72, name: "fanaticism", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 73, name: "sanctified_wrath", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 74, name: "swift_retribution", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 75, name: "crusader_strike", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 76, name: "sheath_of_light", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 77, name: "righteous_vengeance", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 78, name: "divine_storm", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { spiritualFocus: 0, sealsOfThePure: 0, healingLight: 0, divineIntellect: 0, unyieldingFaith: 0, auraMastery: false, illumination: 0, improvedLayOnHands: 0, improvedConcentrationAura: 0, improvedBlessingOfWisdom: 0, blessedHands: 0, pureOfHeart: 0, divineFavor: false, sanctifiedLight: 0, purifyingPower: 0, holyPower: 0, lightsGrace: 0, holyShock: false, blessedLife: 0, sacredCleansing: 0, holyGuidance: 0, divineIllumination: false, judgementsOfThePure: 0, infusionOfLight: 0, enlightenedJudgements: 0, beaconOfLight: false, divinity: 0, divineStrength: 0, stoicism: 0, guardiansFavor: 0, anticipation: 0, divineSacrifice: false, improvedRighteousFury: 0, toughness: 0, divineGuardian: 0, improvedHammerOfJustice: 0, improvedDevotionAura: 0, blessingOfSanctuary: false, reckoning: 0, sacredDuty: 0, oneHandedWeaponSpecialization: 0, spiritualAttunement: 0, holyShield: false, ardentDefender: 0, redoubt: 0, combatExpertise: 0, touchedByTheLight: 0, avengersShield: false, guardedByTheLight: 0, shieldOfTheTemplar: 0, judgementsOfTheJust: 0, hammerOfTheRighteous: false, deflection: 0, benediction: 0, improvedJudgements: 0, heartOfTheCrusader: 0, improvedBlessingOfMight: 0, vindication: 0, conviction: 0, sealOfCommand: false, pursuitOfJustice: 0, eyeForAnEye: 0, sanctityOfBattle: 0, crusade: 0, twoHandedWeaponSpecialization: 0, sanctifiedRetribution: false, vengeance: 0, divinePurpose: 0, theArtOfWar: 0, repentance: false, judgementsOfTheWise: 0, fanaticism: 0, sanctifiedWrath: 0, swiftRetribution: 0, crusaderStrike: false, sheathOfLight: 0, righteousVengeance: 0, divineStorm: false };
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
                case /* int32 spiritual_focus */ 1:
                    message.spiritualFocus = reader.int32();
                    break;
                case /* int32 seals_of_the_pure */ 2:
                    message.sealsOfThePure = reader.int32();
                    break;
                case /* int32 healing_light */ 3:
                    message.healingLight = reader.int32();
                    break;
                case /* int32 divine_intellect */ 4:
                    message.divineIntellect = reader.int32();
                    break;
                case /* int32 unyielding_faith */ 5:
                    message.unyieldingFaith = reader.int32();
                    break;
                case /* bool aura_mastery */ 6:
                    message.auraMastery = reader.bool();
                    break;
                case /* int32 illumination */ 7:
                    message.illumination = reader.int32();
                    break;
                case /* int32 improved_lay_on_hands */ 8:
                    message.improvedLayOnHands = reader.int32();
                    break;
                case /* int32 improved_concentration_aura */ 9:
                    message.improvedConcentrationAura = reader.int32();
                    break;
                case /* int32 improved_blessing_of_wisdom */ 10:
                    message.improvedBlessingOfWisdom = reader.int32();
                    break;
                case /* int32 blessed_hands */ 11:
                    message.blessedHands = reader.int32();
                    break;
                case /* int32 pure_of_heart */ 12:
                    message.pureOfHeart = reader.int32();
                    break;
                case /* bool divine_favor */ 13:
                    message.divineFavor = reader.bool();
                    break;
                case /* int32 sanctified_light */ 14:
                    message.sanctifiedLight = reader.int32();
                    break;
                case /* int32 purifying_power */ 15:
                    message.purifyingPower = reader.int32();
                    break;
                case /* int32 holy_power */ 16:
                    message.holyPower = reader.int32();
                    break;
                case /* int32 lights_grace */ 17:
                    message.lightsGrace = reader.int32();
                    break;
                case /* bool holy_shock */ 18:
                    message.holyShock = reader.bool();
                    break;
                case /* int32 blessed_life */ 19:
                    message.blessedLife = reader.int32();
                    break;
                case /* int32 sacred_cleansing */ 20:
                    message.sacredCleansing = reader.int32();
                    break;
                case /* int32 holy_guidance */ 21:
                    message.holyGuidance = reader.int32();
                    break;
                case /* bool divine_illumination */ 22:
                    message.divineIllumination = reader.bool();
                    break;
                case /* int32 judgements_of_the_pure */ 23:
                    message.judgementsOfThePure = reader.int32();
                    break;
                case /* int32 infusion_of_light */ 24:
                    message.infusionOfLight = reader.int32();
                    break;
                case /* int32 enlightened_judgements */ 25:
                    message.enlightenedJudgements = reader.int32();
                    break;
                case /* bool beacon_of_light */ 26:
                    message.beaconOfLight = reader.bool();
                    break;
                case /* int32 divinity */ 27:
                    message.divinity = reader.int32();
                    break;
                case /* int32 divine_strength */ 28:
                    message.divineStrength = reader.int32();
                    break;
                case /* int32 stoicism */ 29:
                    message.stoicism = reader.int32();
                    break;
                case /* int32 guardians_favor */ 30:
                    message.guardiansFavor = reader.int32();
                    break;
                case /* int32 anticipation */ 31:
                    message.anticipation = reader.int32();
                    break;
                case /* bool divine_sacrifice */ 32:
                    message.divineSacrifice = reader.bool();
                    break;
                case /* int32 improved_righteous_fury */ 33:
                    message.improvedRighteousFury = reader.int32();
                    break;
                case /* int32 toughness */ 34:
                    message.toughness = reader.int32();
                    break;
                case /* int32 divine_guardian */ 35:
                    message.divineGuardian = reader.int32();
                    break;
                case /* int32 improved_hammer_of_justice */ 36:
                    message.improvedHammerOfJustice = reader.int32();
                    break;
                case /* int32 improved_devotion_aura */ 37:
                    message.improvedDevotionAura = reader.int32();
                    break;
                case /* bool blessing_of_sanctuary */ 38:
                    message.blessingOfSanctuary = reader.bool();
                    break;
                case /* int32 reckoning */ 39:
                    message.reckoning = reader.int32();
                    break;
                case /* int32 sacred_duty */ 40:
                    message.sacredDuty = reader.int32();
                    break;
                case /* int32 one_handed_weapon_specialization */ 41:
                    message.oneHandedWeaponSpecialization = reader.int32();
                    break;
                case /* int32 spiritual_attunement */ 42:
                    message.spiritualAttunement = reader.int32();
                    break;
                case /* bool holy_shield */ 43:
                    message.holyShield = reader.bool();
                    break;
                case /* int32 ardent_defender */ 44:
                    message.ardentDefender = reader.int32();
                    break;
                case /* int32 redoubt */ 45:
                    message.redoubt = reader.int32();
                    break;
                case /* int32 combat_expertise */ 46:
                    message.combatExpertise = reader.int32();
                    break;
                case /* int32 touched_by_the_light */ 47:
                    message.touchedByTheLight = reader.int32();
                    break;
                case /* bool avengers_shield */ 48:
                    message.avengersShield = reader.bool();
                    break;
                case /* int32 guarded_by_the_light */ 49:
                    message.guardedByTheLight = reader.int32();
                    break;
                case /* int32 shield_of_the_templar */ 50:
                    message.shieldOfTheTemplar = reader.int32();
                    break;
                case /* int32 judgements_of_the_just */ 51:
                    message.judgementsOfTheJust = reader.int32();
                    break;
                case /* bool hammer_of_the_righteous */ 52:
                    message.hammerOfTheRighteous = reader.bool();
                    break;
                case /* int32 deflection */ 53:
                    message.deflection = reader.int32();
                    break;
                case /* int32 benediction */ 54:
                    message.benediction = reader.int32();
                    break;
                case /* int32 improved_judgements */ 55:
                    message.improvedJudgements = reader.int32();
                    break;
                case /* int32 heart_of_the_crusader */ 56:
                    message.heartOfTheCrusader = reader.int32();
                    break;
                case /* int32 improved_blessing_of_might */ 57:
                    message.improvedBlessingOfMight = reader.int32();
                    break;
                case /* int32 vindication */ 58:
                    message.vindication = reader.int32();
                    break;
                case /* int32 conviction */ 59:
                    message.conviction = reader.int32();
                    break;
                case /* bool seal_of_command */ 60:
                    message.sealOfCommand = reader.bool();
                    break;
                case /* int32 pursuit_of_justice */ 61:
                    message.pursuitOfJustice = reader.int32();
                    break;
                case /* int32 eye_for_an_eye */ 62:
                    message.eyeForAnEye = reader.int32();
                    break;
                case /* int32 sanctity_of_battle */ 63:
                    message.sanctityOfBattle = reader.int32();
                    break;
                case /* int32 crusade */ 64:
                    message.crusade = reader.int32();
                    break;
                case /* int32 two_handed_weapon_specialization */ 65:
                    message.twoHandedWeaponSpecialization = reader.int32();
                    break;
                case /* bool sanctified_retribution */ 66:
                    message.sanctifiedRetribution = reader.bool();
                    break;
                case /* int32 vengeance */ 67:
                    message.vengeance = reader.int32();
                    break;
                case /* int32 divine_purpose */ 68:
                    message.divinePurpose = reader.int32();
                    break;
                case /* int32 the_art_of_war */ 69:
                    message.theArtOfWar = reader.int32();
                    break;
                case /* bool repentance */ 70:
                    message.repentance = reader.bool();
                    break;
                case /* int32 judgements_of_the_wise */ 71:
                    message.judgementsOfTheWise = reader.int32();
                    break;
                case /* int32 fanaticism */ 72:
                    message.fanaticism = reader.int32();
                    break;
                case /* int32 sanctified_wrath */ 73:
                    message.sanctifiedWrath = reader.int32();
                    break;
                case /* int32 swift_retribution */ 74:
                    message.swiftRetribution = reader.int32();
                    break;
                case /* bool crusader_strike */ 75:
                    message.crusaderStrike = reader.bool();
                    break;
                case /* int32 sheath_of_light */ 76:
                    message.sheathOfLight = reader.int32();
                    break;
                case /* int32 righteous_vengeance */ 77:
                    message.righteousVengeance = reader.int32();
                    break;
                case /* bool divine_storm */ 78:
                    message.divineStorm = reader.bool();
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
        /* int32 spiritual_focus = 1; */
        if (message.spiritualFocus !== 0)
            writer.tag(1, WireType.Varint).int32(message.spiritualFocus);
        /* int32 seals_of_the_pure = 2; */
        if (message.sealsOfThePure !== 0)
            writer.tag(2, WireType.Varint).int32(message.sealsOfThePure);
        /* int32 healing_light = 3; */
        if (message.healingLight !== 0)
            writer.tag(3, WireType.Varint).int32(message.healingLight);
        /* int32 divine_intellect = 4; */
        if (message.divineIntellect !== 0)
            writer.tag(4, WireType.Varint).int32(message.divineIntellect);
        /* int32 unyielding_faith = 5; */
        if (message.unyieldingFaith !== 0)
            writer.tag(5, WireType.Varint).int32(message.unyieldingFaith);
        /* bool aura_mastery = 6; */
        if (message.auraMastery !== false)
            writer.tag(6, WireType.Varint).bool(message.auraMastery);
        /* int32 illumination = 7; */
        if (message.illumination !== 0)
            writer.tag(7, WireType.Varint).int32(message.illumination);
        /* int32 improved_lay_on_hands = 8; */
        if (message.improvedLayOnHands !== 0)
            writer.tag(8, WireType.Varint).int32(message.improvedLayOnHands);
        /* int32 improved_concentration_aura = 9; */
        if (message.improvedConcentrationAura !== 0)
            writer.tag(9, WireType.Varint).int32(message.improvedConcentrationAura);
        /* int32 improved_blessing_of_wisdom = 10; */
        if (message.improvedBlessingOfWisdom !== 0)
            writer.tag(10, WireType.Varint).int32(message.improvedBlessingOfWisdom);
        /* int32 blessed_hands = 11; */
        if (message.blessedHands !== 0)
            writer.tag(11, WireType.Varint).int32(message.blessedHands);
        /* int32 pure_of_heart = 12; */
        if (message.pureOfHeart !== 0)
            writer.tag(12, WireType.Varint).int32(message.pureOfHeart);
        /* bool divine_favor = 13; */
        if (message.divineFavor !== false)
            writer.tag(13, WireType.Varint).bool(message.divineFavor);
        /* int32 sanctified_light = 14; */
        if (message.sanctifiedLight !== 0)
            writer.tag(14, WireType.Varint).int32(message.sanctifiedLight);
        /* int32 purifying_power = 15; */
        if (message.purifyingPower !== 0)
            writer.tag(15, WireType.Varint).int32(message.purifyingPower);
        /* int32 holy_power = 16; */
        if (message.holyPower !== 0)
            writer.tag(16, WireType.Varint).int32(message.holyPower);
        /* int32 lights_grace = 17; */
        if (message.lightsGrace !== 0)
            writer.tag(17, WireType.Varint).int32(message.lightsGrace);
        /* bool holy_shock = 18; */
        if (message.holyShock !== false)
            writer.tag(18, WireType.Varint).bool(message.holyShock);
        /* int32 blessed_life = 19; */
        if (message.blessedLife !== 0)
            writer.tag(19, WireType.Varint).int32(message.blessedLife);
        /* int32 sacred_cleansing = 20; */
        if (message.sacredCleansing !== 0)
            writer.tag(20, WireType.Varint).int32(message.sacredCleansing);
        /* int32 holy_guidance = 21; */
        if (message.holyGuidance !== 0)
            writer.tag(21, WireType.Varint).int32(message.holyGuidance);
        /* bool divine_illumination = 22; */
        if (message.divineIllumination !== false)
            writer.tag(22, WireType.Varint).bool(message.divineIllumination);
        /* int32 judgements_of_the_pure = 23; */
        if (message.judgementsOfThePure !== 0)
            writer.tag(23, WireType.Varint).int32(message.judgementsOfThePure);
        /* int32 infusion_of_light = 24; */
        if (message.infusionOfLight !== 0)
            writer.tag(24, WireType.Varint).int32(message.infusionOfLight);
        /* int32 enlightened_judgements = 25; */
        if (message.enlightenedJudgements !== 0)
            writer.tag(25, WireType.Varint).int32(message.enlightenedJudgements);
        /* bool beacon_of_light = 26; */
        if (message.beaconOfLight !== false)
            writer.tag(26, WireType.Varint).bool(message.beaconOfLight);
        /* int32 divinity = 27; */
        if (message.divinity !== 0)
            writer.tag(27, WireType.Varint).int32(message.divinity);
        /* int32 divine_strength = 28; */
        if (message.divineStrength !== 0)
            writer.tag(28, WireType.Varint).int32(message.divineStrength);
        /* int32 stoicism = 29; */
        if (message.stoicism !== 0)
            writer.tag(29, WireType.Varint).int32(message.stoicism);
        /* int32 guardians_favor = 30; */
        if (message.guardiansFavor !== 0)
            writer.tag(30, WireType.Varint).int32(message.guardiansFavor);
        /* int32 anticipation = 31; */
        if (message.anticipation !== 0)
            writer.tag(31, WireType.Varint).int32(message.anticipation);
        /* bool divine_sacrifice = 32; */
        if (message.divineSacrifice !== false)
            writer.tag(32, WireType.Varint).bool(message.divineSacrifice);
        /* int32 improved_righteous_fury = 33; */
        if (message.improvedRighteousFury !== 0)
            writer.tag(33, WireType.Varint).int32(message.improvedRighteousFury);
        /* int32 toughness = 34; */
        if (message.toughness !== 0)
            writer.tag(34, WireType.Varint).int32(message.toughness);
        /* int32 divine_guardian = 35; */
        if (message.divineGuardian !== 0)
            writer.tag(35, WireType.Varint).int32(message.divineGuardian);
        /* int32 improved_hammer_of_justice = 36; */
        if (message.improvedHammerOfJustice !== 0)
            writer.tag(36, WireType.Varint).int32(message.improvedHammerOfJustice);
        /* int32 improved_devotion_aura = 37; */
        if (message.improvedDevotionAura !== 0)
            writer.tag(37, WireType.Varint).int32(message.improvedDevotionAura);
        /* bool blessing_of_sanctuary = 38; */
        if (message.blessingOfSanctuary !== false)
            writer.tag(38, WireType.Varint).bool(message.blessingOfSanctuary);
        /* int32 reckoning = 39; */
        if (message.reckoning !== 0)
            writer.tag(39, WireType.Varint).int32(message.reckoning);
        /* int32 sacred_duty = 40; */
        if (message.sacredDuty !== 0)
            writer.tag(40, WireType.Varint).int32(message.sacredDuty);
        /* int32 one_handed_weapon_specialization = 41; */
        if (message.oneHandedWeaponSpecialization !== 0)
            writer.tag(41, WireType.Varint).int32(message.oneHandedWeaponSpecialization);
        /* int32 spiritual_attunement = 42; */
        if (message.spiritualAttunement !== 0)
            writer.tag(42, WireType.Varint).int32(message.spiritualAttunement);
        /* bool holy_shield = 43; */
        if (message.holyShield !== false)
            writer.tag(43, WireType.Varint).bool(message.holyShield);
        /* int32 ardent_defender = 44; */
        if (message.ardentDefender !== 0)
            writer.tag(44, WireType.Varint).int32(message.ardentDefender);
        /* int32 redoubt = 45; */
        if (message.redoubt !== 0)
            writer.tag(45, WireType.Varint).int32(message.redoubt);
        /* int32 combat_expertise = 46; */
        if (message.combatExpertise !== 0)
            writer.tag(46, WireType.Varint).int32(message.combatExpertise);
        /* int32 touched_by_the_light = 47; */
        if (message.touchedByTheLight !== 0)
            writer.tag(47, WireType.Varint).int32(message.touchedByTheLight);
        /* bool avengers_shield = 48; */
        if (message.avengersShield !== false)
            writer.tag(48, WireType.Varint).bool(message.avengersShield);
        /* int32 guarded_by_the_light = 49; */
        if (message.guardedByTheLight !== 0)
            writer.tag(49, WireType.Varint).int32(message.guardedByTheLight);
        /* int32 shield_of_the_templar = 50; */
        if (message.shieldOfTheTemplar !== 0)
            writer.tag(50, WireType.Varint).int32(message.shieldOfTheTemplar);
        /* int32 judgements_of_the_just = 51; */
        if (message.judgementsOfTheJust !== 0)
            writer.tag(51, WireType.Varint).int32(message.judgementsOfTheJust);
        /* bool hammer_of_the_righteous = 52; */
        if (message.hammerOfTheRighteous !== false)
            writer.tag(52, WireType.Varint).bool(message.hammerOfTheRighteous);
        /* int32 deflection = 53; */
        if (message.deflection !== 0)
            writer.tag(53, WireType.Varint).int32(message.deflection);
        /* int32 benediction = 54; */
        if (message.benediction !== 0)
            writer.tag(54, WireType.Varint).int32(message.benediction);
        /* int32 improved_judgements = 55; */
        if (message.improvedJudgements !== 0)
            writer.tag(55, WireType.Varint).int32(message.improvedJudgements);
        /* int32 heart_of_the_crusader = 56; */
        if (message.heartOfTheCrusader !== 0)
            writer.tag(56, WireType.Varint).int32(message.heartOfTheCrusader);
        /* int32 improved_blessing_of_might = 57; */
        if (message.improvedBlessingOfMight !== 0)
            writer.tag(57, WireType.Varint).int32(message.improvedBlessingOfMight);
        /* int32 vindication = 58; */
        if (message.vindication !== 0)
            writer.tag(58, WireType.Varint).int32(message.vindication);
        /* int32 conviction = 59; */
        if (message.conviction !== 0)
            writer.tag(59, WireType.Varint).int32(message.conviction);
        /* bool seal_of_command = 60; */
        if (message.sealOfCommand !== false)
            writer.tag(60, WireType.Varint).bool(message.sealOfCommand);
        /* int32 pursuit_of_justice = 61; */
        if (message.pursuitOfJustice !== 0)
            writer.tag(61, WireType.Varint).int32(message.pursuitOfJustice);
        /* int32 eye_for_an_eye = 62; */
        if (message.eyeForAnEye !== 0)
            writer.tag(62, WireType.Varint).int32(message.eyeForAnEye);
        /* int32 sanctity_of_battle = 63; */
        if (message.sanctityOfBattle !== 0)
            writer.tag(63, WireType.Varint).int32(message.sanctityOfBattle);
        /* int32 crusade = 64; */
        if (message.crusade !== 0)
            writer.tag(64, WireType.Varint).int32(message.crusade);
        /* int32 two_handed_weapon_specialization = 65; */
        if (message.twoHandedWeaponSpecialization !== 0)
            writer.tag(65, WireType.Varint).int32(message.twoHandedWeaponSpecialization);
        /* bool sanctified_retribution = 66; */
        if (message.sanctifiedRetribution !== false)
            writer.tag(66, WireType.Varint).bool(message.sanctifiedRetribution);
        /* int32 vengeance = 67; */
        if (message.vengeance !== 0)
            writer.tag(67, WireType.Varint).int32(message.vengeance);
        /* int32 divine_purpose = 68; */
        if (message.divinePurpose !== 0)
            writer.tag(68, WireType.Varint).int32(message.divinePurpose);
        /* int32 the_art_of_war = 69; */
        if (message.theArtOfWar !== 0)
            writer.tag(69, WireType.Varint).int32(message.theArtOfWar);
        /* bool repentance = 70; */
        if (message.repentance !== false)
            writer.tag(70, WireType.Varint).bool(message.repentance);
        /* int32 judgements_of_the_wise = 71; */
        if (message.judgementsOfTheWise !== 0)
            writer.tag(71, WireType.Varint).int32(message.judgementsOfTheWise);
        /* int32 fanaticism = 72; */
        if (message.fanaticism !== 0)
            writer.tag(72, WireType.Varint).int32(message.fanaticism);
        /* int32 sanctified_wrath = 73; */
        if (message.sanctifiedWrath !== 0)
            writer.tag(73, WireType.Varint).int32(message.sanctifiedWrath);
        /* int32 swift_retribution = 74; */
        if (message.swiftRetribution !== 0)
            writer.tag(74, WireType.Varint).int32(message.swiftRetribution);
        /* bool crusader_strike = 75; */
        if (message.crusaderStrike !== false)
            writer.tag(75, WireType.Varint).bool(message.crusaderStrike);
        /* int32 sheath_of_light = 76; */
        if (message.sheathOfLight !== 0)
            writer.tag(76, WireType.Varint).int32(message.sheathOfLight);
        /* int32 righteous_vengeance = 77; */
        if (message.righteousVengeance !== 0)
            writer.tag(77, WireType.Varint).int32(message.righteousVengeance);
        /* bool divine_storm = 78; */
        if (message.divineStorm !== false)
            writer.tag(78, WireType.Varint).bool(message.divineStorm);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.PaladinTalents
 */
export const PaladinTalents = new PaladinTalents$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RetributionPaladin$Type extends MessageType {
    constructor() {
        super("proto.RetributionPaladin", [
            { no: 1, name: "rotation", kind: "message", T: () => RetributionPaladin_Rotation },
            { no: 2, name: "talents", kind: "message", T: () => PaladinTalents },
            { no: 3, name: "options", kind: "message", T: () => RetributionPaladin_Options }
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
                case /* proto.RetributionPaladin.Rotation rotation */ 1:
                    message.rotation = RetributionPaladin_Rotation.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* proto.PaladinTalents talents */ 2:
                    message.talents = PaladinTalents.internalBinaryRead(reader, reader.uint32(), options, message.talents);
                    break;
                case /* proto.RetributionPaladin.Options options */ 3:
                    message.options = RetributionPaladin_Options.internalBinaryRead(reader, reader.uint32(), options, message.options);
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
        /* proto.RetributionPaladin.Rotation rotation = 1; */
        if (message.rotation)
            RetributionPaladin_Rotation.internalBinaryWrite(message.rotation, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* proto.PaladinTalents talents = 2; */
        if (message.talents)
            PaladinTalents.internalBinaryWrite(message.talents, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* proto.RetributionPaladin.Options options = 3; */
        if (message.options)
            RetributionPaladin_Options.internalBinaryWrite(message.options, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.RetributionPaladin
 */
export const RetributionPaladin = new RetributionPaladin$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RetributionPaladin_Rotation$Type extends MessageType {
    constructor() {
        super("proto.RetributionPaladin.Rotation", [
            { no: 1, name: "exo_slack", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "cons_slack", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "divine_plea_percentage", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value) {
        const message = { exoSlack: 0, consSlack: 0, divinePleaPercentage: 0 };
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
                case /* int32 exo_slack */ 1:
                    message.exoSlack = reader.int32();
                    break;
                case /* int32 cons_slack */ 2:
                    message.consSlack = reader.int32();
                    break;
                case /* double divine_plea_percentage */ 3:
                    message.divinePleaPercentage = reader.double();
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
        /* int32 exo_slack = 1; */
        if (message.exoSlack !== 0)
            writer.tag(1, WireType.Varint).int32(message.exoSlack);
        /* int32 cons_slack = 2; */
        if (message.consSlack !== 0)
            writer.tag(2, WireType.Varint).int32(message.consSlack);
        /* double divine_plea_percentage = 3; */
        if (message.divinePleaPercentage !== 0)
            writer.tag(3, WireType.Bit64).double(message.divinePleaPercentage);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.RetributionPaladin.Rotation
 */
export const RetributionPaladin_Rotation = new RetributionPaladin_Rotation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RetributionPaladin_Options$Type extends MessageType {
    constructor() {
        super("proto.RetributionPaladin.Options", [
            { no: 1, name: "judgement", kind: "enum", T: () => ["proto.PaladinJudgement", PaladinJudgement] },
            { no: 2, name: "seal", kind: "enum", T: () => ["proto.PaladinSeal", PaladinSeal] },
            { no: 3, name: "aura", kind: "enum", T: () => ["proto.PaladinAura", PaladinAura] },
            { no: 4, name: "damage_taken_per_second", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 5, name: "use_avenging_wrath", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "use_divine_plea", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { judgement: 0, seal: 0, aura: 0, damageTakenPerSecond: 0, useAvengingWrath: false, useDivinePlea: false };
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
                case /* proto.PaladinJudgement judgement */ 1:
                    message.judgement = reader.int32();
                    break;
                case /* proto.PaladinSeal seal */ 2:
                    message.seal = reader.int32();
                    break;
                case /* proto.PaladinAura aura */ 3:
                    message.aura = reader.int32();
                    break;
                case /* double damage_taken_per_second */ 4:
                    message.damageTakenPerSecond = reader.double();
                    break;
                case /* bool use_avenging_wrath */ 5:
                    message.useAvengingWrath = reader.bool();
                    break;
                case /* bool use_divine_plea */ 6:
                    message.useDivinePlea = reader.bool();
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
        /* proto.PaladinJudgement judgement = 1; */
        if (message.judgement !== 0)
            writer.tag(1, WireType.Varint).int32(message.judgement);
        /* proto.PaladinSeal seal = 2; */
        if (message.seal !== 0)
            writer.tag(2, WireType.Varint).int32(message.seal);
        /* proto.PaladinAura aura = 3; */
        if (message.aura !== 0)
            writer.tag(3, WireType.Varint).int32(message.aura);
        /* double damage_taken_per_second = 4; */
        if (message.damageTakenPerSecond !== 0)
            writer.tag(4, WireType.Bit64).double(message.damageTakenPerSecond);
        /* bool use_avenging_wrath = 5; */
        if (message.useAvengingWrath !== false)
            writer.tag(5, WireType.Varint).bool(message.useAvengingWrath);
        /* bool use_divine_plea = 6; */
        if (message.useDivinePlea !== false)
            writer.tag(6, WireType.Varint).bool(message.useDivinePlea);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.RetributionPaladin.Options
 */
export const RetributionPaladin_Options = new RetributionPaladin_Options$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProtectionPaladin$Type extends MessageType {
    constructor() {
        super("proto.ProtectionPaladin", [
            { no: 1, name: "rotation", kind: "message", T: () => ProtectionPaladin_Rotation },
            { no: 2, name: "talents", kind: "message", T: () => PaladinTalents },
            { no: 3, name: "options", kind: "message", T: () => ProtectionPaladin_Options }
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
                case /* proto.ProtectionPaladin.Rotation rotation */ 1:
                    message.rotation = ProtectionPaladin_Rotation.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* proto.PaladinTalents talents */ 2:
                    message.talents = PaladinTalents.internalBinaryRead(reader, reader.uint32(), options, message.talents);
                    break;
                case /* proto.ProtectionPaladin.Options options */ 3:
                    message.options = ProtectionPaladin_Options.internalBinaryRead(reader, reader.uint32(), options, message.options);
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
        /* proto.ProtectionPaladin.Rotation rotation = 1; */
        if (message.rotation)
            ProtectionPaladin_Rotation.internalBinaryWrite(message.rotation, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* proto.PaladinTalents talents = 2; */
        if (message.talents)
            PaladinTalents.internalBinaryWrite(message.talents, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* proto.ProtectionPaladin.Options options = 3; */
        if (message.options)
            ProtectionPaladin_Options.internalBinaryWrite(message.options, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.ProtectionPaladin
 */
export const ProtectionPaladin = new ProtectionPaladin$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProtectionPaladin_Rotation$Type extends MessageType {
    constructor() {
        super("proto.ProtectionPaladin.Rotation", [
            { no: 1, name: "prioritize_holy_shield", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { prioritizeHolyShield: false };
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
                case /* bool prioritize_holy_shield */ 1:
                    message.prioritizeHolyShield = reader.bool();
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
        /* bool prioritize_holy_shield = 1; */
        if (message.prioritizeHolyShield !== false)
            writer.tag(1, WireType.Varint).bool(message.prioritizeHolyShield);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.ProtectionPaladin.Rotation
 */
export const ProtectionPaladin_Rotation = new ProtectionPaladin_Rotation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProtectionPaladin_Options$Type extends MessageType {
    constructor() {
        super("proto.ProtectionPaladin.Options", [
            { no: 1, name: "judgement", kind: "enum", T: () => ["proto.PaladinJudgement", PaladinJudgement] },
            { no: 2, name: "seal", kind: "enum", T: () => ["proto.PaladinSeal", PaladinSeal] },
            { no: 3, name: "aura", kind: "enum", T: () => ["proto.PaladinAura", PaladinAura] },
            { no: 4, name: "damage_taken_per_second", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 5, name: "use_avenging_wrath", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { judgement: 0, seal: 0, aura: 0, damageTakenPerSecond: 0, useAvengingWrath: false };
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
                case /* proto.PaladinJudgement judgement */ 1:
                    message.judgement = reader.int32();
                    break;
                case /* proto.PaladinSeal seal */ 2:
                    message.seal = reader.int32();
                    break;
                case /* proto.PaladinAura aura */ 3:
                    message.aura = reader.int32();
                    break;
                case /* double damage_taken_per_second */ 4:
                    message.damageTakenPerSecond = reader.double();
                    break;
                case /* bool use_avenging_wrath */ 5:
                    message.useAvengingWrath = reader.bool();
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
        /* proto.PaladinJudgement judgement = 1; */
        if (message.judgement !== 0)
            writer.tag(1, WireType.Varint).int32(message.judgement);
        /* proto.PaladinSeal seal = 2; */
        if (message.seal !== 0)
            writer.tag(2, WireType.Varint).int32(message.seal);
        /* proto.PaladinAura aura = 3; */
        if (message.aura !== 0)
            writer.tag(3, WireType.Varint).int32(message.aura);
        /* double damage_taken_per_second = 4; */
        if (message.damageTakenPerSecond !== 0)
            writer.tag(4, WireType.Bit64).double(message.damageTakenPerSecond);
        /* bool use_avenging_wrath = 5; */
        if (message.useAvengingWrath !== false)
            writer.tag(5, WireType.Varint).bool(message.useAvengingWrath);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.ProtectionPaladin.Options
 */
export const ProtectionPaladin_Options = new ProtectionPaladin_Options$Type();
