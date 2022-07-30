import { Spec } from '/wotlk/core/proto/common.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
import { Player } from '../core/player';
export declare const StartingRunicPower: InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecDeathknight>>;
export declare const PetUptime: InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecDeathknight>>;
export declare const PrecastGhoulFrenzy: InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecDeathknight>>;
export declare const PrecastHornOfWinter: InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecDeathknight>>;
export declare const RefreshHornOfWinter: InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecDeathknight>>;
export declare const DiseaseRefreshDuration: InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecDeathknight>>;
export declare const UseDeathAndDecay: InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecDeathknight>>;
export declare const SetDeathAndDecayPrio: InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecDeathknight>>;
export declare const BloodTapGhoulFrenzy: InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecDeathknight>>;
export declare const SetFirstDisease: InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecDeathknight>>;
export declare const UseArmyOfTheDead: InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecDeathknight>>;
export declare const DeathKnightRotationConfig: {
    inputs: (InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecDeathknight>> | InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecDeathknight>>)[];
};
