import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { WarriorShout } from '/wotlk/core/proto/warrior.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
export declare const ShieldWall: InputHelpers.TypedIconPickerConfig<Player<Spec.SpecProtectionWarrior>, boolean>;
export declare const StartingRage: InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecProtectionWarrior>>;
export declare const ShoutPicker: InputHelpers.TypedIconEnumPickerConfig<Player<Spec.SpecProtectionWarrior>, WarriorShout>;
export declare const PrecastShout: InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecProtectionWarrior>>;
export declare const ProtectionWarriorRotationConfig: {
    inputs: (InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecProtectionWarrior>> | InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecProtectionWarrior>> | InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecProtectionWarrior>>)[];
};
