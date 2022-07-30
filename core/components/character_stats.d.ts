import { Stat } from '/wotlk/core/proto/common.js';
import { Stats } from '/wotlk/core/proto_utils/stats.js';
import { Player } from '/wotlk/core/player.js';
import { Component } from './component.js';
export declare type StatMods = {
    talents: Stats;
};
export declare class CharacterStats extends Component {
    readonly stats: Array<Stat>;
    readonly valueElems: Array<HTMLTableCellElement>;
    readonly tooltipElems: Array<HTMLElement>;
    private readonly player;
    private readonly modifyDisplayStats?;
    constructor(parent: HTMLElement, player: Player<any>, stats: Array<Stat>, modifyDisplayStats?: (player: Player<any>) => StatMods);
    private updateStats;
    static statDisplayString(player: Player<any>, stats: Stats, stat: Stat): string;
    static getDebuffStats(player: Player<any>): Stats;
}
