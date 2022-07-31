import { SimUI } from '/wotlk/core/sim_ui.js';
import { Component } from './component.js';
import { IconPickerConfig } from './icon_picker.js';
export interface MultiIconPickerItemConfig<ModObject> extends IconPickerConfig<ModObject, any> {
}
export interface MultiIconPickerConfig<ModObject> {
    inputs: Array<MultiIconPickerItemConfig<ModObject>>;
    emptyColor: string;
    numColumns: number;
    label?: string;
}
export declare class MultiIconPicker<ModObject> extends Component {
    private readonly config;
    private currentValue;
    private readonly dropdownRootElem;
    private readonly buttonElem;
    private readonly pickers;
    constructor(parent: HTMLElement, modObj: ModObject, config: MultiIconPickerConfig<ModObject>, simUI: SimUI);
    private updateButtonImage;
    private getMaxValue;
}
