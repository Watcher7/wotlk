import { Consumes } from '/wotlk/core/proto/common.js';
import { EquipmentSpec } from '/wotlk/core/proto/common.js';
import { SavedTalents } from '/wotlk/core/proto/ui.js';
import { Rogue_Rotation as RogueRotation, Rogue_Options as RogueOptions } from '/wotlk/core/proto/rogue.js';
export declare const CombatTalents: {
    name: string;
    data: SavedTalents;
};
export declare const DefaultRotation: RogueRotation;
export declare const DefaultOptions: RogueOptions;
export declare const DefaultConsumes: Consumes;
export declare const P1_PRESET: {
    name: string;
    tooltip: string;
    gear: EquipmentSpec;
};
