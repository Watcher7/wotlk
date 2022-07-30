import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
export declare const ProtectionPaladinRotationConfig: {
    inputs: InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecProtectionPaladin>>[];
};
export declare const AuraSelection: InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecProtectionPaladin>>;
export declare const StartingSealSelection: InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecProtectionPaladin>>;
export declare const JudgementSelection: InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecProtectionPaladin>>;
export declare const UseAvengingWrath: InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecProtectionPaladin>>;
export declare const DamageTakenPerSecond: InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecProtectionPaladin>>;
