import { Stat } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { Component } from './component.js';
import { NumberPicker } from './number_picker.js';
export declare class BonusStatsPicker extends Component {
    readonly stats: Array<Stat>;
    readonly statPickers: Array<NumberPicker<Player<any>>>;
    constructor(parent: HTMLElement, player: Player<any>, stats: Array<Stat>);
}
