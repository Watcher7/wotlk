import { PaladinAura as PaladinAura, PaladinJudgement as PaladinJudgement, PaladinSeal, } from '/wotlk/core/proto/paladin.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.
export const RetributionPaladinRotationExoSlackConfig = InputHelpers.makeRotationNumberInput({
    fieldName: "exoSlack",
    label: "Exo Slack (MS)",
    labelTooltip: "Amount of extra time in MS to give main abilities to come off cooldown before using Exorcism on single target",
});
export const RetributionPaladinRotationConsSlackConfig = InputHelpers.makeRotationNumberInput({
    fieldName: "consSlack",
    label: "Cons Slack (MS)",
    labelTooltip: "Amount of extra time in MS to give main abilities to come off cooldown before using Consecration on single target",
});
export const RetributionPaladinRotationDivinePleaPercentageConfig = InputHelpers.makeRotationNumberInput({
    fieldName: "divinePleaPercentage",
    label: "Divine Plea Mana Threshold %",
    labelTooltip: "% of max mana left before beginning to use Divine Plea",
    percent: true
});
export const AuraSelection = InputHelpers.makeSpecOptionsEnumInput({
    fieldName: 'aura',
    label: 'Aura',
    values: [
        { name: 'None', value: PaladinAura.NoPaladinAura },
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
        { name: 'Righteousness', value: PaladinSeal.Righteousness },
    ],
});
export const DivinePleaSelection = InputHelpers.makeSpecOptionsBooleanInput({
    fieldName: 'useDivinePlea',
    label: 'Divine Plea',
    labelTooltip: 'Whether or not to maintain Divine Plea',
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
export const DamageTakenPerSecond = InputHelpers.makeSpecOptionsNumberInput({
    fieldName: 'damageTakenPerSecond',
    label: 'Damage Taken Per Second',
    labelTooltip: "Damage taken per second across the encounter. Used to model mana regeneration from Spiritual Attunement. This value should NOT include damage taken from Seal of Blood / Judgement of Blood. Leave at 0 if you do not take damage during the encounter.",
});
