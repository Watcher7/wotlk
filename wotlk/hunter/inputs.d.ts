import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
import { Hunter_Options_Ammo as Ammo, Hunter_Options_PetType as PetType } from '/wotlk/core/proto/hunter.js';
export declare const WeaponAmmo: InputHelpers.TypedIconEnumPickerConfig<Player<Spec.SpecHunter>, Ammo>;
export declare const LatencyMs: InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecHunter>>;
export declare const PetTypeInput: InputHelpers.TypedIconEnumPickerConfig<Player<Spec.SpecHunter>, PetType>;
export declare const PetUptime: InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecHunter>>;
export declare const SniperTrainingUptime: InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecHunter>>;
export declare const HunterRotationConfig: {
    inputs: (InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecHunter>> | InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecHunter>>)[];
};
