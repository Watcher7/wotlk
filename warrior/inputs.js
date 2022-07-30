import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import { TypedEvent } from '/wotlk/core/typed_event.js';
import { WarriorShout, Warrior_Rotation_SunderArmor as SunderArmor, } from '/wotlk/core/proto/warrior.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.
export const Recklessness = InputHelpers.makeSpecOptionsBooleanIconInput({
    fieldName: 'useRecklessness',
    id: ActionId.fromSpellId(1719),
});
export const StartingRage = InputHelpers.makeSpecOptionsNumberInput({
    fieldName: 'startingRage',
    label: 'Starting Rage',
    labelTooltip: 'Initial rage at the start of each iteration.',
});
export const ShoutPicker = InputHelpers.makeSpecOptionsEnumIconInput({
    fieldName: 'shout',
    values: [
        { color: 'c79c6e', value: WarriorShout.WarriorShoutNone },
        { actionId: ActionId.fromSpellId(2048), value: WarriorShout.WarriorShoutBattle },
        { actionId: ActionId.fromSpellId(469), value: WarriorShout.WarriorShoutCommanding },
    ],
});
export const PrecastShout = InputHelpers.makeSpecOptionsBooleanInput({
    fieldName: 'precastShout',
    label: 'Precast Shout',
    labelTooltip: 'Selected shout is cast 10 seconds before combat starts.',
});
export const WarriorRotationConfig = {
    inputs: [
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'useCleave',
            label: 'Use Cleave',
            labelTooltip: 'Use Cleave instead of Heroic Strike.',
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'useOverpower',
            label: 'Use Overpower',
            labelTooltip: 'Use Overpower when available.',
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'useHamstring',
            label: 'Use Hamstring',
            labelTooltip: 'Use Hamstring on free globals.',
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'useSlam',
            label: 'Use Slam',
            labelTooltip: 'Use Slam whenever possible.',
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'prioritizeWw',
            label: 'Prioritize WW',
            labelTooltip: 'Prioritize Whirlwind over Bloodthirst or Mortal Strike.',
        }),
        InputHelpers.makeRotationNumberInput({
            fieldName: 'hsRageThreshold',
            label: 'HS rage threshold',
            labelTooltip: 'Heroic Strike when rage is above:',
        }),
        InputHelpers.makeRotationNumberInput({
            fieldName: 'overpowerRageThreshold',
            label: 'Overpower rage threshold',
            labelTooltip: 'Use Overpower when rage is below a point.',
            showWhen: (player) => player.getRotation().useOverpower,
        }),
        InputHelpers.makeRotationNumberInput({
            fieldName: 'hamstringRageThreshold',
            label: 'Hamstring rage threshold',
            labelTooltip: 'Hamstring will only be used when rage is larger than this value.',
            showWhen: (player) => player.getRotation().useHamstring,
        }),
        InputHelpers.makeRotationNumberInput({
            fieldName: 'slamLatency',
            label: 'Slam Latency',
            labelTooltip: 'Time between MH swing and start of the Slam cast, in milliseconds.',
            showWhen: (player) => player.getRotation().useSlam && player.getTalents().improvedSlam == 2,
            changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter]),
        }),
        InputHelpers.makeRotationNumberInput({
            fieldName: 'slamGcdDelay',
            label: 'Slam GCD Delay',
            labelTooltip: 'Amount of time Slam may delay the GCD, in milliseconds.',
            changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter]),
            showWhen: (player) => player.getRotation().useSlam && player.getTalents().improvedSlam == 2,
            extraCssClasses: [
                'experimental',
            ],
        }),
        InputHelpers.makeRotationNumberInput({
            fieldName: 'slamMsWwDelay',
            label: 'Slam MS+WW Delay',
            labelTooltip: 'Amount of time Slam may delay MS+WW, in milliseconds.',
            changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter]),
            showWhen: (player) => player.getRotation().useSlam && player.getTalents().improvedSlam == 2,
            extraCssClasses: [
                'experimental',
            ],
        }),
        InputHelpers.makeRotationNumberInput({
            fieldName: 'rampageCdThreshold',
            label: 'Rampage Refresh Time',
            labelTooltip: 'Refresh Rampage when the remaining duration is less than this amount of time (seconds).',
            changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter]),
            showWhen: (player) => player.getTalents().rampage,
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'useHsDuringExecute',
            label: 'HS during Execute Phase',
            labelTooltip: 'Use Heroic Strike during Execute Phase.',
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'useBtDuringExecute',
            label: 'BT during Execute Phase',
            labelTooltip: 'Use Bloodthirst during Execute Phase.',
            changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter]),
            showWhen: (player) => player.getTalents().bloodthirst,
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'useMsDuringExecute',
            label: 'MS during Execute Phase',
            labelTooltip: 'Use Mortal Strike during Execute Phase.',
            changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter]),
            showWhen: (player) => player.getTalents().mortalStrike,
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'useWwDuringExecute',
            label: 'WW during Execute Phase',
            labelTooltip: 'Use Whirlwind during Execute Phase.',
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'useSlamDuringExecute',
            label: 'Slam during Execute Phase',
            labelTooltip: 'Use Slam during Execute Phase.',
            changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter]),
            showWhen: (player) => player.getRotation().useSlam && player.getTalents().improvedSlam == 2,
        }),
        InputHelpers.makeRotationEnumInput({
            fieldName: 'sunderArmor',
            label: 'Sunder Armor',
            values: [
                { name: 'Never', value: SunderArmor.SunderArmorNone },
                { name: 'Help Stack', value: SunderArmor.SunderArmorHelpStack },
                { name: 'Maintain Debuff', value: SunderArmor.SunderArmorMaintain },
            ],
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'maintainDemoShout',
            label: 'Maintain Demo Shout',
            labelTooltip: 'Keep Demo Shout active on the primary target.',
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'maintainThunderClap',
            label: 'Maintain Thunder Clap',
            labelTooltip: 'Keep Thunder Clap active on the primary target.',
        }),
    ],
};
