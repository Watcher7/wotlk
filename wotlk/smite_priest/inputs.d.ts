import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
export declare const SelfPowerInfusion: InputHelpers.TypedIconPickerConfig<Player<Spec.SpecSmitePriest>, boolean>;
export declare const SmitePriestRotationConfig: {
    inputs: (InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecSmitePriest>> | InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecSmitePriest>>)[];
};
