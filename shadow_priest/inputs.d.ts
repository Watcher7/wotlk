import { Player } from '/wotlk/core/player.js';
import { Spec } from '/wotlk/core/proto/common.js';
import { ShadowPriest_Options_Armor as Armor } from '/wotlk/core/proto/priest.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
export declare const ArmorInput: InputHelpers.TypedIconEnumPickerConfig<Player<Spec.SpecShadowPriest>, Armor>;
export declare const MindBlastInput: InputHelpers.TypedIconEnumPickerConfig<Player<Spec.SpecShadowPriest>, boolean>;
export declare const ShadowWordDeathInput: InputHelpers.TypedIconEnumPickerConfig<Player<Spec.SpecShadowPriest>, boolean>;
export declare const ShadowfiendInput: InputHelpers.TypedIconEnumPickerConfig<Player<Spec.SpecShadowPriest>, boolean>;
export declare const ShadowPriestRotationConfig: {
    inputs: (InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecShadowPriest>> | InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecShadowPriest>> | InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecShadowPriest>>)[];
};
