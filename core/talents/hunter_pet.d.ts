import { Spec } from '/wotlk/core/proto/common.js';
import { HunterPetTalents, Hunter_Options_PetType as PetType } from '/wotlk/core/proto/hunter.js';
import { Player } from '/wotlk/core/player.js';
import { Component } from '/wotlk/core/components/component.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
export declare function makePetTypeInputConfig(includeLabel: boolean): InputHelpers.TypedIconEnumPickerConfig<Player<Spec.SpecHunter>, PetType>;
declare enum PetCategory {
    Cunning = 0,
    Ferocity = 1,
    Tenacity = 2
}
export declare class HunterPetTalentsPicker extends Component {
    private readonly player;
    private curCategory;
    private curTalents;
    private savedSets;
    constructor(parent: HTMLElement, player: Player<Spec.SpecHunter>);
    getPetTalentsFromPlayer(): HunterPetTalents;
    getCategoryFromPlayer(): PetCategory;
}
export declare const cunningDefault: HunterPetTalents;
export declare const ferocityDefault: HunterPetTalents;
export declare const tenacityDefault: HunterPetTalents;
export {};
