import { Spec } from '/wotlk/core/proto/common.js';
import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
export declare type DpsShaman = Spec.SpecEnhancementShaman | Spec.SpecElementalShaman;
export declare function TotemsSection(simUI: IndividualSimUI<DpsShaman>, parentElem: HTMLElement): string;
