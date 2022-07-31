import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
export declare class RetributionPaladinSimUI extends IndividualSimUI<Spec.SpecRetributionPaladin> {
    constructor(parentElem: HTMLElement, player: Player<Spec.SpecRetributionPaladin>);
}
