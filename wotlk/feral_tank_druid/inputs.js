import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
import { FeralTankDruid_Rotation_Swipe as Swipe } from '/wotlk/core/proto/druid.js';
// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.
export const StartingRage = InputHelpers.makeSpecOptionsNumberInput({
    fieldName: 'startingRage',
    label: 'Starting Rage',
    labelTooltip: 'Initial rage at the start of each iteration.',
});
export const FeralTankDruidRotationConfig = {
    inputs: [
        InputHelpers.makeRotationNumberInput({
            fieldName: 'maulRageThreshold',
            label: 'Maul Threshold',
            labelTooltip: 'Queue Maul when rage is above this value.',
        }),
        InputHelpers.makeRotationEnumInput({
            fieldName: 'swipe',
            label: 'Swipe',
            values: [
                { name: 'Never', value: Swipe.SwipeNone },
                { name: 'With Enough AP', value: Swipe.SwipeWithEnoughAP },
                { name: 'Spam', value: Swipe.SwipeSpam },
            ],
        }),
        InputHelpers.makeRotationNumberInput({
            fieldName: 'swipeApThreshold',
            label: 'Swipe AP Threshold',
            labelTooltip: 'Use Swipe when Attack Power is larger than this amount.',
            enableWhen: (player) => player.getRotation().swipe == Swipe.SwipeWithEnoughAP,
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'maintainDemoralizingRoar',
            label: 'Maintain Demo Roar',
            labelTooltip: 'Keep Demoralizing Roar active on the primary target. If a stronger debuff is active, will not cast.',
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'maintainFaerieFire',
            label: 'Maintain Faerie Fire',
            labelTooltip: 'Keep Faerie Fire active on the primary target. If a stronger debuff is active, will not cast.',
        }),
    ],
};
