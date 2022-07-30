import { Component } from '/wotlk/core/components/component.js';
import { ResultsViewer } from '/wotlk/core/components/results_viewer.js';
import { Spec } from '/wotlk/core/proto/common.js';
import { LaunchStatus } from '/wotlk/core/launched_sims.js';
import { Sim } from './sim.js';
import { EventID, TypedEvent } from './typed_event.js';
export interface SimWarning {
    updateOn: TypedEvent<any>;
    getContent: () => string | Array<string>;
}
export interface SimUIConfig {
    spec: Spec | null;
    launchStatus: LaunchStatus;
    knownIssues?: Array<string>;
}
export declare abstract class SimUI extends Component {
    readonly sim: Sim;
    readonly isWithinRaidSim: boolean;
    readonly changeEmitter: TypedEvent<void>;
    readonly resultsViewer: ResultsViewer;
    private warnings;
    private warningsTippy;
    constructor(parentElem: HTMLElement, sim: Sim, config: SimUIConfig);
    addAction(name: string, cssClass: string, actFn: () => void): void;
    addTab(title: string, cssClass: string, innerHTML: string): void;
    addToolbarItem(elem: HTMLElement): void;
    private updateWarnings;
    addWarning(warning: SimWarning): void;
    abstract getStorageKey(postfix: string): string;
    getSettingsStorageKey(): string;
    getSavedEncounterStorageKey(): string;
    isIndividualSim(): boolean;
    runSim(onProgress: Function): Promise<void>;
    runSimOnce(): Promise<void>;
    handleCrash(error: any): void;
    hashCode(str: string): number;
    abstract applyDefaults(eventID: EventID): void;
    abstract toLink(): string;
}
