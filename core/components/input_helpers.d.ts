import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { EventID, TypedEvent } from '/wotlk/core/typed_event.js';
import { SpecOptions, SpecRotation } from '/wotlk/core/proto_utils/utils.js';
import { IconPickerConfig } from './icon_picker.js';
import { IconEnumPickerConfig, IconEnumValueConfig } from './icon_enum_picker.js';
import { EnumPickerConfig, EnumValueConfig } from './enum_picker.js';
import { BooleanPickerConfig } from './boolean_picker.js';
import { NumberPickerConfig } from './number_picker.js';
import { MultiIconPickerConfig } from './multi_icon_picker.js';
export declare function makeMultiIconInput<ModObject>(inputs: Array<IconPickerConfig<ModObject, any>>, label: string, numColumns?: number): MultiIconPickerConfig<ModObject>;
interface BasePlayerConfig<SpecType extends Spec, T> {
    getValue?: (player: Player<SpecType>) => T;
    setValue?: (eventID: EventID, player: Player<SpecType>, newVal: T) => void;
    changeEmitter?: (player: Player<SpecType>) => TypedEvent<any>;
    extraCssClasses?: Array<string>;
}
export interface TypedBooleanPickerConfig<ModObject> extends BooleanPickerConfig<ModObject> {
    type: 'boolean';
}
export interface PlayerBooleanInputConfig<SpecType extends Spec, Message> extends BasePlayerConfig<SpecType, boolean> {
    fieldName: keyof Message;
    label: string;
    labelTooltip?: string;
    enableWhen?: (player: Player<SpecType>) => boolean;
    showWhen?: (player: Player<SpecType>) => boolean;
}
export declare function makeSpecOptionsBooleanInput<SpecType extends Spec>(config: PlayerBooleanInputConfig<SpecType, SpecOptions<SpecType>>): TypedBooleanPickerConfig<Player<SpecType>>;
export declare function makeRotationBooleanInput<SpecType extends Spec>(config: PlayerBooleanInputConfig<SpecType, SpecRotation<SpecType>>): TypedBooleanPickerConfig<Player<SpecType>>;
export interface TypedNumberPickerConfig<ModObject> extends NumberPickerConfig<ModObject> {
    type: 'number';
}
export interface PlayerNumberInputConfig<SpecType extends Spec, Message> extends BasePlayerConfig<SpecType, number> {
    fieldName: keyof Message;
    label: string;
    labelTooltip?: string;
    percent?: boolean;
    float?: boolean;
    enableWhen?: (player: Player<SpecType>) => boolean;
    showWhen?: (player: Player<SpecType>) => boolean;
}
export declare function makeSpecOptionsNumberInput<SpecType extends Spec>(config: PlayerNumberInputConfig<SpecType, SpecOptions<SpecType>>): TypedNumberPickerConfig<Player<SpecType>>;
export declare function makeRotationNumberInput<SpecType extends Spec>(config: PlayerNumberInputConfig<SpecType, SpecRotation<SpecType>>): TypedNumberPickerConfig<Player<SpecType>>;
export interface TypedEnumPickerConfig<ModObject> extends EnumPickerConfig<ModObject> {
    type: 'enum';
}
export interface PlayerEnumInputConfig<SpecType extends Spec, Message> {
    fieldName: keyof Message;
    label: string;
    labelTooltip?: string;
    values: Array<EnumValueConfig>;
    enableWhen?: (player: Player<SpecType>) => boolean;
    showWhen?: (player: Player<SpecType>) => boolean;
    changeEmitter?: (player: Player<SpecType>) => TypedEvent<any>;
}
export declare function makeSpecOptionsEnumInput<SpecType extends Spec, T>(config: PlayerEnumInputConfig<SpecType, SpecOptions<SpecType>>): TypedEnumPickerConfig<Player<SpecType>>;
export declare function makeRotationEnumInput<SpecType extends Spec, T>(config: PlayerEnumInputConfig<SpecType, SpecRotation<SpecType>>): TypedEnumPickerConfig<Player<SpecType>>;
export interface TypedIconPickerConfig<ModObject, T> extends IconPickerConfig<ModObject, T> {
    type: 'icon';
}
interface WrappedTypedInputConfig<Message, ModObject, T> {
    getModObject: (player: Player<any>) => ModObject;
    getValue: (modObj: ModObject) => Message;
    setValue: (eventID: EventID, modObj: ModObject, messageVal: Message) => void;
    changeEmitter: (modObj: ModObject) => TypedEvent<any>;
    extraCssClasses?: Array<string>;
    getFieldValue?: (modObj: ModObject) => T;
    setFieldValue?: (eventID: EventID, modObj: ModObject, newValue: T) => void;
}
export declare function makeBooleanIconInput<SpecType extends Spec, Message, ModObject>(config: WrappedTypedInputConfig<Message, ModObject, boolean>, id: ActionId, fieldName: keyof Message, value?: number): TypedIconPickerConfig<Player<SpecType>, boolean>;
export interface PlayerBooleanIconInputConfig<SpecType extends Spec, Message, T> extends BasePlayerConfig<SpecType, T> {
    fieldName: keyof Message;
    id: ActionId;
    value?: number;
}
export declare function makeSpecOptionsBooleanIconInput<SpecType extends Spec>(config: PlayerBooleanIconInputConfig<SpecType, SpecOptions<SpecType>, boolean>): TypedIconPickerConfig<Player<SpecType>, boolean>;
export declare function makeTristateIconInput<SpecType extends Spec, Message, ModObject>(config: WrappedTypedInputConfig<Message, ModObject, number>, id: ActionId, impId: ActionId, fieldName: keyof Message): TypedIconPickerConfig<Player<SpecType>, number>;
export declare function makeQuadstateIconInput<SpecType extends Spec, Message, ModObject>(config: WrappedTypedInputConfig<Message, ModObject, number>, id: ActionId, impId: ActionId, impId2: ActionId, fieldName: keyof Message): TypedIconPickerConfig<Player<SpecType>, number>;
export declare function makeMultistateIconInput<SpecType extends Spec, Message, ModObject>(config: WrappedTypedInputConfig<Message, ModObject, number>, id: ActionId, numStates: number, fieldName: keyof Message, multiplier?: number): TypedIconPickerConfig<Player<SpecType>, number>;
export interface TypedIconEnumPickerConfig<ModObject, T> extends IconEnumPickerConfig<ModObject, T> {
    type: 'iconEnum';
}
export interface PlayerEnumIconInputConfig<SpecType extends Spec, Message, T> extends BasePlayerConfig<SpecType, T> {
    fieldName: keyof Message;
    values: Array<IconEnumValueConfig<Player<SpecType>, T>>;
    numColumns?: number;
}
export declare function makeSpecOptionsEnumIconInput<SpecType extends Spec, T>(config: PlayerEnumIconInputConfig<SpecType, SpecOptions<SpecType>, T>): TypedIconEnumPickerConfig<Player<SpecType>, T>;
export declare function makeRotationEnumIconInput<SpecType extends Spec, T>(config: PlayerEnumIconInputConfig<SpecType, SpecRotation<SpecType>, T>): TypedIconEnumPickerConfig<Player<SpecType>, T>;
export {};
