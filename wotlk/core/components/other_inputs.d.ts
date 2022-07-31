import { BooleanPicker } from '/wotlk/core/components/boolean_picker.js';
import { EnumPicker } from '/wotlk/core/components/enum_picker.js';
import { Conjured } from '/wotlk/core/proto/common.js';
import { Potions } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { Sim } from '/wotlk/core/sim.js';
import { EventID, TypedEvent } from '/wotlk/core/typed_event.js';
export declare function makeShow1hWeaponsSelector(parent: HTMLElement, sim: Sim): BooleanPicker<Sim>;
export declare function makeShow2hWeaponsSelector(parent: HTMLElement, sim: Sim): BooleanPicker<Sim>;
export declare function makeShowMatchingGemsSelector(parent: HTMLElement, sim: Sim): BooleanPicker<Sim>;
export declare function makePhaseSelector(parent: HTMLElement, sim: Sim): EnumPicker<Sim>;
export declare const PrepopPotion: {
    type: "enum";
    label: string;
    labelTooltip: string;
    values: {
        name: string;
        value: Potions;
    }[];
    changedEvent: (player: Player<any>) => TypedEvent<void>;
    getValue: (player: Player<any>) => Potions;
    setValue: (eventID: EventID, player: Player<any>, newValue: number) => void;
};
export declare const StartingConjured: {
    type: "enum";
    label: string;
    labelTooltip: string;
    values: {
        name: string;
        value: Conjured;
    }[];
    changedEvent: (player: Player<any>) => TypedEvent<void>;
    getValue: (player: Player<any>) => Conjured;
    setValue: (eventID: EventID, player: Player<any>, newValue: number) => void;
};
export declare const NumStartingConjured: {
    type: "number";
    label: string;
    labelTooltip: string;
    changedEvent: (player: Player<any>) => TypedEvent<void>;
    getValue: (player: Player<any>) => number;
    setValue: (eventID: EventID, player: Player<any>, newValue: number) => void;
    enableWhen: (player: Player<any>) => boolean;
};
export declare const InFrontOfTarget: {
    type: "boolean";
    label: string;
    labelTooltip: string;
    changedEvent: (player: Player<any>) => TypedEvent<void>;
    getValue: (player: Player<any>) => boolean;
    setValue: (eventID: EventID, player: Player<any>, newValue: boolean) => void;
};
export declare const TankAssignment: {
    type: "enum";
    extraCssClasses: string[];
    label: string;
    labelTooltip: string;
    values: {
        name: string;
        value: number;
    }[];
    changedEvent: (player: Player<any>) => TypedEvent<void>;
    getValue: (player: Player<any>) => number;
    setValue: (eventID: EventID, player: Player<any>, newValue: number) => void;
};
export declare const IncomingHps: {
    type: "number";
    label: string;
    labelTooltip: string;
    changedEvent: (player: Player<any>) => TypedEvent<void>;
    getValue: (player: Player<any>) => number;
    setValue: (eventID: EventID, player: Player<any>, newValue: number) => void;
    enableWhen: (player: Player<any>) => boolean;
};
export declare const HealingCadence: {
    type: "number";
    float: boolean;
    label: string;
    labelTooltip: string;
    changedEvent: (player: Player<any>) => TypedEvent<void>;
    getValue: (player: Player<any>) => number;
    setValue: (eventID: EventID, player: Player<any>, newValue: number) => void;
    enableWhen: (player: Player<any>) => boolean;
};
export declare const HpPercentForDefensives: {
    type: "number";
    float: boolean;
    label: string;
    labelTooltip: string;
    changedEvent: (player: Player<any>) => TypedEvent<void>;
    getValue: (player: Player<any>) => number;
    setValue: (eventID: EventID, player: Player<any>, newValue: number) => void;
};
