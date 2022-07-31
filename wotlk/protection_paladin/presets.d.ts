import { Consumes } from '/wotlk/core/proto/common.js';
import { EquipmentSpec } from '/wotlk/core/proto/common.js';
import { Spec } from '/wotlk/core/proto/common.js';
import { SavedTalents } from '/wotlk/core/proto/ui.js';
import { Player } from '/wotlk/core/player.js';
import { ProtectionPaladin_Rotation as ProtectionPaladinRotation, ProtectionPaladin_Options as ProtectionPaladinOptions } from '/wotlk/core/proto/paladin.js';
export declare const GenericAoeTalents: {
    name: string;
    data: SavedTalents;
};
export declare const DefaultRotation: ProtectionPaladinRotation;
export declare const DefaultOptions: ProtectionPaladinOptions;
export declare const DefaultConsumes: Consumes;
export declare const P1_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecProtectionPaladin>) => boolean;
    gear: EquipmentSpec;
};
export declare const P2_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecProtectionPaladin>) => boolean;
    gear: EquipmentSpec;
};
export declare const P3_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecProtectionPaladin>) => boolean;
    gear: EquipmentSpec;
};
export declare const P4_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecProtectionPaladin>) => boolean;
    gear: EquipmentSpec;
};
export declare const P5_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecProtectionPaladin>) => boolean;
    gear: EquipmentSpec;
};
