import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
export declare const SelfInnervate: InputHelpers.TypedIconPickerConfig<Player<Spec.SpecFeralDruid>, boolean>;
export declare const LatencyMs: InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecFeralDruid>>;
export declare const FeralDruidRotationConfig: {
    inputs: (InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecFeralDruid>> | InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecFeralDruid>>)[];
};
