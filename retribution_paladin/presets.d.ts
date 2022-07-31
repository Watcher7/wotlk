import { Consumes } from '/wotlk/core/proto/common.js';
import { EquipmentSpec } from '/wotlk/core/proto/common.js';
import { Spec } from '/wotlk/core/proto/common.js';
import { SavedTalents } from '/wotlk/core/proto/ui.js';
import { Player } from '/wotlk/core/player.js';
import { RetributionPaladin_Rotation as RetributionPaladinRotation, RetributionPaladin_Options as RetributionPaladinOptions } from '/wotlk/core/proto/paladin.js';
export declare const AuraMasteryTalents: {
    name: string;
    data: SavedTalents;
};
export declare const DivineSacTalents: {
    name: string;
    data: SavedTalents;
};
export declare const DefaultRotation: RetributionPaladinRotation;
export declare const DefaultOptions: RetributionPaladinOptions;
export declare const DefaultConsumes: Consumes;
export declare const PRE_RAID_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecRetributionPaladin>) => boolean;
    gear: EquipmentSpec;
};
export declare const P1_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecRetributionPaladin>) => boolean;
    gear: EquipmentSpec;
};
export declare const P2_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecRetributionPaladin>) => boolean;
    gear: EquipmentSpec;
};
export declare const P3_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecRetributionPaladin>) => boolean;
    gear: EquipmentSpec;
};
export declare const P4_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecRetributionPaladin>) => boolean;
    gear: EquipmentSpec;
};
export declare const P5_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecRetributionPaladin>) => boolean;
    gear: EquipmentSpec;
};
