import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
export declare class BalanceDruidSimUI extends IndividualSimUI<Spec.SpecBalanceDruid> {
    constructor(parentElem: HTMLElement, player: Player<Spec.SpecBalanceDruid>);
}
