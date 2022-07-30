import { PaladinAura as PaladinAura, PaladinSeal, PaladinJudgement as PaladinJudgement, } from '/wotlk/core/proto/paladin.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.
export const ProtectionPaladinRotationConfig = {
    inputs: [
        InputHelpers.makeRotationNumberInput({
            fieldName: 'prioritizeHolyShield',
            label: 'Prio Holy Shield',
            labelTooltip: 'Uses Holy Shield as the highest priority spell. This is usually done when tanking a boss that can crush.',
        }),
    ],
};
export const AuraSelection = InputHelpers.makeSpecOptionsEnumInput({
    fieldName: 'aura',
    label: 'Aura',
    values: [
        { name: 'None', value: PaladinAura.NoPaladinAura },
        { name: 'Devotion Aura', value: PaladinAura.DevotionAura },
        { name: 'Retribution Aura', value: PaladinAura.RetributionAura },
    ],
});
export const StartingSealSelection = InputHelpers.makeSpecOptionsEnumInput({
    fieldName: 'seal',
    label: 'Seal',
    labelTooltip: 'The seal active before encounter',
    values: [
        { name: 'Vengeance', value: PaladinSeal.Vengeance },
        { name: 'Command', value: PaladinSeal.Command },
    ],
});
export const JudgementSelection = InputHelpers.makeSpecOptionsEnumInput({
    fieldName: 'judgement',
    label: 'Judgement',
    labelTooltip: 'Judgement debuff you will use on the target during the encounter.',
    values: [
        { name: 'Wisdom', value: PaladinJudgement.JudgementOfWisdom },
        { name: 'Light', value: PaladinJudgement.JudgementOfLight },
    ],
});
export const UseAvengingWrath = InputHelpers.makeSpecOptionsBooleanInput({
    fieldName: 'useAvengingWrath',
    label: 'Use Avenging Wrath',
});
export const DamageTakenPerSecond = InputHelpers.makeSpecOptionsNumberInput({
    fieldName: 'damageTakenPerSecond',
    label: 'Damage Taken Per Second',
    labelTooltip: "Damage taken per second across the encounter. Used to model mana regeneration from Spiritual Attunement. This value should NOT include damage taken from Seal of Blood / Judgement of Blood. Leave at 0 if you do not take damage during the encounter.",
});
