import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { WarriorShout } from '/wotlk/core/proto/warrior.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
export declare const Recklessness: InputHelpers.TypedIconPickerConfig<Player<Spec.SpecWarrior>, boolean>;
export declare const StartingRage: InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecWarrior>>;
export declare const ShoutPicker: InputHelpers.TypedIconEnumPickerConfig<Player<Spec.SpecWarrior>, WarriorShout>;
export declare const PrecastShout: InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecWarrior>>;
export declare const WarriorRotationConfig: {
    inputs: (InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecWarrior>> | InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecWarrior>> | InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecWarrior>>)[];
};
