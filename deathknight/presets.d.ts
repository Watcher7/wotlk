import { Consumes } from '/wotlk/core/proto/common.js';
import { EquipmentSpec } from '/wotlk/core/proto/common.js';
import { DeathKnight_Rotation as DeathKnightRotation, DeathKnight_Options as DeathKnightOptions } from '/wotlk/core/proto/deathknight.js';
export declare const FrostTalents: {
    name: string;
    data: string;
};
export declare const DefaultRotation: DeathKnightRotation;
export declare const DefaultOptions: DeathKnightOptions;
export declare const DefaultConsumes: Consumes;
export declare const P1_FROST_PRE_BIS_PRESET: {
    name: string;
    tooltip: string;
    gear: EquipmentSpec;
};
export declare const P1_FROST_BIS_PRESET: {
    name: string;
    tooltip: string;
    gear: EquipmentSpec;
};