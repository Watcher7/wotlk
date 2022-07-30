import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
export declare const SelfInnervate: InputHelpers.TypedIconPickerConfig<Player<Spec.SpecBalanceDruid>, boolean>;
export declare const BalanceDruidRotationConfig: {
    inputs: (InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecBalanceDruid>> | InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecBalanceDruid>>)[];
};
