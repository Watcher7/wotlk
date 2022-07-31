import { Encounter as EncounterProto } from '/wotlk/core/proto/common.js';
import { Raid as RaidProto } from '/wotlk/core/proto/api.js';
import { ProgressMetrics } from '/wotlk/core/proto/api.js';
import { SimRunData } from '/wotlk/core/proto/ui.js';
import { SimResult, SimResultFilter } from '/wotlk/core/proto_utils/sim_result.js';
import { SimUI } from '/wotlk/core/sim_ui.js';
import { EventID, TypedEvent } from '/wotlk/core/typed_event.js';
export declare function addRaidSimAction(simUI: SimUI): RaidSimResultsManager;
export declare type ReferenceData = {
    simResult: SimResult;
    settings: any;
    raidProto: RaidProto;
    encounterProto: EncounterProto;
};
export declare class RaidSimResultsManager {
    readonly currentChangeEmitter: TypedEvent<void>;
    readonly referenceChangeEmitter: TypedEvent<void>;
    readonly changeEmitter: TypedEvent<void>;
    private readonly simUI;
    private currentData;
    private referenceData;
    constructor(simUI: SimUI);
    setSimProgress(progress: ProgressMetrics): void;
    setSimResult(eventID: EventID, simResult: SimResult): void;
    private updateReference;
    getRunData(): SimRunData | null;
    getCurrentData(): ReferenceData | null;
    getReferenceData(): ReferenceData | null;
    static makeToplineResultsContent(simResult: SimResult, filter?: SimResultFilter): string;
}
