import { Consumes } from '/wotlk/core/proto/common.js';
import { EquipmentSpec } from '/wotlk/core/proto/common.js';
import { SavedTalents } from '/wotlk/core/proto/ui.js';
import { Player } from '/wotlk/core/player.js';
import { BalanceDruid_Rotation as BalanceDruidRotation, BalanceDruid_Options as BalanceDruidOptions } from '/wotlk/core/proto/druid.js';
export declare const StandardTalents: {
    name: string;
    data: SavedTalents;
};
export declare const DefaultRotation: BalanceDruidRotation;
export declare const DefaultOptions: BalanceDruidOptions;
export declare const DefaultConsumes: Consumes;
export declare const P1_ALLIANCE_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<any>) => boolean;
    gear: EquipmentSpec;
};
export declare const P1_HORDE_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<any>) => boolean;
    gear: EquipmentSpec;
};
export declare const P2_ALLIANCE_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<any>) => boolean;
    gear: EquipmentSpec;
};
export declare const P2_HORDE_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<any>) => boolean;
    gear: EquipmentSpec;
};
export declare const P3_PRESET: {
    name: string;
    tooltip: string;
    gear: EquipmentSpec;
};
export declare const P4_PRESET: {
    name: string;
    tooltip: string;
    gear: EquipmentSpec;
};
export declare const P5_PRESET: {
    name: string;
    tooltip: string;
    gear: EquipmentSpec;
};
