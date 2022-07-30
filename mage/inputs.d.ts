import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { EventID, TypedEvent } from '/wotlk/core/typed_event.js';
import { Mage_Rotation_Type as RotationType } from '/wotlk/core/proto/mage.js';
import { Mage_Rotation_FireRotation_PrimarySpell as PrimaryFireSpell } from '/wotlk/core/proto/mage.js';
import { Mage_Rotation_AoeRotation_Rotation as AoeRotationSpells } from '/wotlk/core/proto/mage.js';
import { Mage_Rotation_ArcaneRotation_Filler as ArcaneFiller } from '/wotlk/core/proto/mage.js';
import { Mage_Options_ArmorType as ArmorType } from '/wotlk/core/proto/mage.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
export declare const Armor: InputHelpers.TypedIconEnumPickerConfig<Player<Spec.SpecMage>, ArmorType>;
export declare const EvocationTicks: InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecMage>>;
export declare const MageRotationConfig: {
    inputs: (InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecMage>> | {
        type: "enum";
        label: string;
        labelTooltip: string;
        values: {
            name: string;
            value: RotationType;
        }[];
        changedEvent: (player: Player<Spec.SpecMage>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecMage>) => RotationType;
        setValue: (eventID: EventID, player: Player<Spec.SpecMage>, newValue: number) => void;
        showWhen?: undefined;
        enableWhen?: undefined;
    } | {
        type: "enum";
        label: string;
        values: {
            name: string;
            value: AoeRotationSpells;
        }[];
        changedEvent: (player: Player<Spec.SpecMage>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecMage>) => AoeRotationSpells.Flamestrike | AoeRotationSpells.Blizzard | 0;
        setValue: (eventID: EventID, player: Player<Spec.SpecMage>, newValue: number) => void;
        showWhen: (player: Player<Spec.SpecMage>) => boolean;
        labelTooltip?: undefined;
        enableWhen?: undefined;
    } | {
        type: "enum";
        label: string;
        values: {
            name: string;
            value: PrimaryFireSpell;
        }[];
        changedEvent: (player: Player<Spec.SpecMage>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecMage>) => PrimaryFireSpell;
        setValue: (eventID: EventID, player: Player<Spec.SpecMage>, newValue: number) => void;
        showWhen: (player: Player<Spec.SpecMage>) => boolean;
        labelTooltip?: undefined;
        enableWhen?: undefined;
    } | {
        type: "number";
        label: string;
        labelTooltip: string;
        changedEvent: (player: Player<Spec.SpecMage>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecMage>) => number;
        setValue: (eventID: EventID, player: Player<Spec.SpecMage>, newValue: number) => void;
        showWhen: (player: Player<Spec.SpecMage>) => boolean;
        enableWhen: (player: Player<Spec.SpecMage>) => boolean;
        values?: undefined;
    } | {
        type: "enum";
        label: string;
        labelTooltip: string;
        values: {
            name: string;
            value: ArcaneFiller;
        }[];
        changedEvent: (player: Player<Spec.SpecMage>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecMage>) => ArcaneFiller;
        setValue: (eventID: EventID, player: Player<Spec.SpecMage>, newValue: number) => void;
        showWhen: (player: Player<Spec.SpecMage>) => boolean;
        enableWhen?: undefined;
    } | {
        type: "number";
        label: string;
        labelTooltip: string;
        changedEvent: (player: Player<Spec.SpecMage>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecMage>) => number;
        setValue: (eventID: EventID, player: Player<Spec.SpecMage>, newValue: number) => void;
        showWhen: (player: Player<Spec.SpecMage>) => boolean;
        values?: undefined;
        enableWhen?: undefined;
    })[];
};
