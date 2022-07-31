import { Encounter } from '/wotlk/core/encounter.js';
import { Component } from './component.js';
import { SimUI } from '../sim_ui.js';
export interface EncounterPickerConfig {
    showExecuteProportion: boolean;
}
export declare class EncounterPicker extends Component {
    constructor(parent: HTMLElement, modEncounter: Encounter, config: EncounterPickerConfig, simUI: SimUI);
}
