import { Spec } from '/wotlk/core/proto/common.js';
export declare enum LaunchStatus {
    Unlaunched = 0,
    Alpha = 1,
    Beta = 2,
    Launched = 3
}
export declare const raidSimLaunched = false;
export declare const simLaunchStatuses: Record<Spec, LaunchStatus>;
export declare function getLaunchedSims(): Array<Spec>;
