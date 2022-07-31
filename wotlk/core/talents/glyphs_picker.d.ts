import { Glyphs } from '/wotlk/core/proto/common.js';
import { ItemQuality } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { Component } from '/wotlk/core/components/component.js';
import { Input } from '/wotlk/core/components/input.js';
export declare type GlyphConfig = {
    name: string;
    description: string;
    iconUrl: string;
};
export declare type GlyphsConfig = {
    majorGlyphs: Record<number, GlyphConfig>;
    minorGlyphs: Record<number, GlyphConfig>;
};
interface GlyphData {
    id: number;
    name: string;
    description: string;
    iconUrl: string;
    quality: ItemQuality | null;
}
export declare class GlyphsPicker extends Component {
    private readonly glyphsConfig;
    majorGlyphPickers: Array<GlyphPicker>;
    minorGlyphPickers: Array<GlyphPicker>;
    constructor(parent: HTMLElement, player: Player<any>, glyphsConfig: GlyphsConfig);
    getGlyphData(glyph: number): GlyphData;
}
declare class GlyphPicker extends Input<Player<any>, number> {
    readonly player: Player<any>;
    private readonly iconElem;
    private readonly glyphOptions;
    selectedGlyph: GlyphData;
    constructor(parent: HTMLElement, player: Player<any>, glyphOptions: Array<GlyphData>, glyphField: keyof Glyphs, isMajor: boolean);
    getInputElem(): HTMLElement;
    getInputValue(): number;
    setInputValue(newValue: number): void;
}
export {};
