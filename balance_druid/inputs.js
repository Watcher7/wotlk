import { BalanceDruid_Rotation_RotationType as RotationType } from '/wotlk/core/proto/druid.js';
import { RaidTarget } from '/wotlk/core/proto/common.js';
import { NO_TARGET } from '/wotlk/core/proto_utils/utils.js';
import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.
export const SelfInnervate = InputHelpers.makeSpecOptionsBooleanIconInput({
    fieldName: 'innervateTarget',
    id: ActionId.fromSpellId(29166),
    extraCssClasses: [
        'within-raid-sim-hide',
    ],
    getValue: (player) => player.getSpecOptions().innervateTarget?.targetIndex != NO_TARGET,
    setValue: (eventID, player, newValue) => {
        const newOptions = player.getSpecOptions();
        newOptions.innervateTarget = RaidTarget.create({
            targetIndex: newValue ? 0 : NO_TARGET,
        });
        player.setSpecOptions(eventID, newOptions);
    },
});
export const BalanceDruidRotationConfig = {
    inputs: [
        InputHelpers.makeRotationEnumInput({
            fieldName: 'type',
            label: 'Type',
            labelTooltip: 'If set to \'Adaptive\', will dynamically adjust rotation.',
            values: [
                { name: 'Adaptive', value: RotationType.Adaptive },
            ],
        }),
        InputHelpers.makeSpecOptionsBooleanInput({
            fieldName: 'battleRes',
            label: 'Use Battle Res',
            labelTooltip: 'Cast Battle Res on an ally sometime during the encounter.',
        }),
    ],
};
