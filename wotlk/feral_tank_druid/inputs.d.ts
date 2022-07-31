import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
export declare const StartingRage: InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecFeralTankDruid>>;
export declare const FeralTankDruidRotationConfig: {
    inputs: (InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecFeralTankDruid>> | InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecFeralTankDruid>> | InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecFeralTankDruid>>)[];
};
