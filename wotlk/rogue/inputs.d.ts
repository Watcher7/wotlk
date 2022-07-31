import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
export declare const RogueRotationConfig: {
    inputs: (InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecRogue>> | InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecRogue>> | InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecRogue>>)[];
};
