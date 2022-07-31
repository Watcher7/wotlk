import { Component } from '/wotlk/core/components/component.js';
import { Input, InputConfig } from '/wotlk/core/components/input.js';
export interface TalentsPickerConfig<ModObject, TalentsProto> extends InputConfig<ModObject, string> {
    trees: TalentsConfig<TalentsProto>;
    pointsPerRow: number;
    maxPoints: number;
}
export declare class TalentsPicker<ModObject, TalentsProto> extends Input<ModObject, string> {
    readonly numRows: number;
    readonly pointsPerRow: number;
    maxPoints: number;
    readonly trees: Array<TalentTreePicker<TalentsProto>>;
    constructor(parent: HTMLElement, modObject: ModObject, config: TalentsPickerConfig<ModObject, TalentsProto>);
    getInputElem(): HTMLElement;
    getInputValue(): string;
    setInputValue(newValue: string): void;
    updateTrees(): void;
    get numPoints(): number;
    isFull(): boolean;
    setMaxPoints(newMaxPoints: number): void;
}
declare class TalentTreePicker<TalentsProto> extends Component {
    private readonly config;
    private readonly title;
    readonly talents: Array<TalentPicker<TalentsProto>>;
    readonly picker: TalentsPicker<any, TalentsProto>;
    numPoints: number;
    constructor(parent: HTMLElement, config: TalentTreeConfig<TalentsProto>, picker: TalentsPicker<any, TalentsProto>);
    update(): void;
    getTalent(location: TalentLocation): TalentPicker<TalentsProto>;
    getTalentsString(): string;
    setTalentsString(str: string): void;
}
declare class TalentPicker<TalentsProto> extends Component {
    readonly config: TalentConfig<TalentsProto>;
    private readonly tree;
    private readonly pointsDisplay;
    private longTouchTimer?;
    constructor(parent: HTMLElement, config: TalentConfig<TalentsProto>, tree: TalentTreePicker<TalentsProto>);
    getRow(): number;
    getCol(): number;
    getPoints(): number;
    isFull(): boolean;
    canSetPoints(newPoints: number): boolean;
    setPoints(newPoints: number, checkValidity: boolean): void;
    getSpellIdForPoints(numPoints: number): number;
    update(): void;
}
export declare type TalentsConfig<TalentsProto> = Array<TalentTreeConfig<TalentsProto>>;
export declare type TalentTreeConfig<TalentsProto> = {
    name: string;
    backgroundUrl: string;
    talents: Array<TalentConfig<TalentsProto>>;
};
export declare type TalentLocation = {
    rowIdx: number;
    colIdx: number;
};
export declare type TalentConfig<TalentsProto> = {
    fieldName?: keyof TalentsProto;
    location: TalentLocation;
    prereqLocation?: TalentLocation;
    prereqOfLocation?: TalentLocation;
    spellIds: Array<number>;
    maxPoints: number;
};
export declare function newTalentsConfig<TalentsProto>(talents: TalentsConfig<TalentsProto>): TalentsConfig<TalentsProto>;
export {};
