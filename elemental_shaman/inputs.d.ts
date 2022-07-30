import { ShamanShield } from '/wotlk/core/proto/shaman.js';
import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
export declare const Bloodlust: InputHelpers.TypedIconPickerConfig<Player<Spec.SpecElementalShaman>, boolean>;
export declare const ShamanShieldInput: InputHelpers.TypedIconEnumPickerConfig<Player<Spec.SpecElementalShaman>, ShamanShield>;
export declare const ElementalShamanRotationConfig: {
    inputs: (InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecElementalShaman>> | InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecElementalShaman>>)[];
};
