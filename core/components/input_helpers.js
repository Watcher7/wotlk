export function makeMultiIconInput(inputs, label, numColumns) {
    return {
        inputs: inputs,
        numColumns: numColumns || 1,
        emptyColor: 'grey',
        label: label,
    };
}
function makeWrappedBooleanInput(config) {
    const getModObject = config.getModObject;
    return {
        type: 'boolean',
        label: config.label,
        labelTooltip: config.labelTooltip,
        changedEvent: (player) => config.changedEvent(getModObject(player)),
        getValue: (player) => config.getValue(getModObject(player)),
        setValue: (eventID, player, newValue) => config.setValue(eventID, getModObject(player), newValue),
        enableWhen: config.enableWhen ? (player) => config.enableWhen(getModObject(player)) : undefined,
        showWhen: config.showWhen ? (player) => config.showWhen(getModObject(player)) : undefined,
    };
}
export function makeSpecOptionsBooleanInput(config) {
    return makeWrappedBooleanInput({
        label: config.label,
        labelTooltip: config.labelTooltip,
        getModObject: (player) => player,
        getValue: config.getValue || ((player) => player.getSpecOptions()[config.fieldName]),
        setValue: config.setValue || ((eventID, player, newVal) => {
            const newMessage = player.getSpecOptions();
            newMessage[config.fieldName] = newVal;
            player.setSpecOptions(eventID, newMessage);
        }),
        changedEvent: config.changeEmitter || ((player) => player.specOptionsChangeEmitter),
        enableWhen: config.enableWhen,
        showWhen: config.showWhen,
        extraCssClasses: config.extraCssClasses,
    });
}
export function makeRotationBooleanInput(config) {
    return makeWrappedBooleanInput({
        label: config.label,
        labelTooltip: config.labelTooltip,
        getModObject: (player) => player,
        getValue: config.getValue || ((player) => player.getRotation()[config.fieldName]),
        setValue: config.setValue || ((eventID, player, newVal) => {
            const newMessage = player.getRotation();
            newMessage[config.fieldName] = newVal;
            player.setRotation(eventID, newMessage);
        }),
        changedEvent: config.changeEmitter || ((player) => player.rotationChangeEmitter),
        enableWhen: config.enableWhen,
        showWhen: config.showWhen,
        extraCssClasses: config.extraCssClasses,
    });
}
function makeWrappedNumberInput(config) {
    const getModObject = config.getModObject;
    return {
        type: 'number',
        label: config.label,
        labelTooltip: config.labelTooltip,
        float: config.float,
        changedEvent: (player) => config.changedEvent(getModObject(player)),
        getValue: (player) => config.getValue(getModObject(player)),
        setValue: (eventID, player, newValue) => config.setValue(eventID, getModObject(player), newValue),
        enableWhen: config.enableWhen ? (player) => config.enableWhen(getModObject(player)) : undefined,
        showWhen: config.showWhen ? (player) => config.showWhen(getModObject(player)) : undefined,
    };
}
export function makeSpecOptionsNumberInput(config) {
    const internalConfig = {
        label: config.label,
        labelTooltip: config.labelTooltip,
        float: config.float,
        getModObject: (player) => player,
        getValue: config.getValue || ((player) => player.getSpecOptions()[config.fieldName]),
        setValue: config.setValue || ((eventID, player, newVal) => {
            const newMessage = player.getSpecOptions();
            newMessage[config.fieldName] = newVal;
            player.setSpecOptions(eventID, newMessage);
        }),
        changedEvent: config.changeEmitter || ((player) => player.specOptionsChangeEmitter),
        enableWhen: config.enableWhen,
        showWhen: config.showWhen,
        extraCssClasses: config.extraCssClasses,
    };
    if (config.percent) {
        const getValue = internalConfig.getValue;
        internalConfig.getValue = (player) => getValue(player) * 100;
        const setValue = internalConfig.setValue;
        internalConfig.setValue = (eventID, player, newVal) => setValue(eventID, player, newVal / 100);
    }
    return makeWrappedNumberInput(internalConfig);
}
export function makeRotationNumberInput(config) {
    const internalConfig = {
        label: config.label,
        labelTooltip: config.labelTooltip,
        float: config.float,
        getModObject: (player) => player,
        getValue: config.getValue || ((player) => player.getRotation()[config.fieldName]),
        setValue: config.setValue || ((eventID, player, newVal) => {
            const newMessage = player.getRotation();
            newMessage[config.fieldName] = newVal;
            player.setRotation(eventID, newMessage);
        }),
        changedEvent: config.changeEmitter || ((player) => player.rotationChangeEmitter),
        enableWhen: config.enableWhen,
        showWhen: config.showWhen,
        extraCssClasses: config.extraCssClasses,
    };
    if (config.percent) {
        const getValue = internalConfig.getValue;
        internalConfig.getValue = (player) => getValue(player) * 100;
        const setValue = internalConfig.setValue;
        internalConfig.setValue = (eventID, player, newVal) => setValue(eventID, player, newVal / 100);
    }
    return makeWrappedNumberInput(internalConfig);
}
function makeWrappedEnumInput(config) {
    const getModObject = config.getModObject;
    return {
        type: 'enum',
        label: config.label,
        labelTooltip: config.labelTooltip,
        values: config.values,
        changedEvent: (player) => config.changedEvent(getModObject(player)),
        getValue: (player) => config.getValue(getModObject(player)),
        setValue: (eventID, player, newValue) => config.setValue(eventID, getModObject(player), newValue),
    };
}
// T is unused, but kept to have the same interface as the icon enum inputs.
export function makeSpecOptionsEnumInput(config) {
    return makeWrappedEnumInput({
        label: config.label,
        labelTooltip: config.labelTooltip,
        values: config.values,
        getModObject: (player) => player,
        getValue: (player) => player.getSpecOptions()[config.fieldName],
        setValue: (eventID, player, newVal) => {
            const newMessage = player.getSpecOptions();
            newMessage[config.fieldName] = newVal;
            player.setSpecOptions(eventID, newMessage);
        },
        changedEvent: config.changeEmitter || ((player) => player.specOptionsChangeEmitter),
        enableWhen: config.enableWhen,
        showWhen: config.showWhen,
    });
}
// T is unused, but kept to have the same interface as the icon enum inputs.
export function makeRotationEnumInput(config) {
    return makeWrappedEnumInput({
        label: config.label,
        labelTooltip: config.labelTooltip,
        values: config.values,
        getModObject: (player) => player,
        getValue: (player) => player.getRotation()[config.fieldName],
        setValue: (eventID, player, newVal) => {
            const newMessage = player.getRotation();
            newMessage[config.fieldName] = newVal;
            player.setRotation(eventID, newMessage);
        },
        changedEvent: config.changeEmitter || ((player) => player.rotationChangeEmitter),
        enableWhen: config.enableWhen,
        showWhen: config.showWhen,
    });
}
function makeWrappedIconInput(config) {
    const getModObject = config.getModObject;
    return {
        type: 'icon',
        id: config.id,
        states: config.states,
        changedEvent: (player) => config.changedEvent(getModObject(player)),
        getValue: (player) => config.getValue(getModObject(player)),
        setValue: (eventID, player, newValue) => config.setValue(eventID, getModObject(player), newValue),
        extraCssClasses: config.extraCssClasses,
    };
}
export function makeBooleanIconInput(config, id, fieldName, value) {
    return makeWrappedIconInput({
        getModObject: config.getModObject,
        id: id,
        states: 2,
        changedEvent: config.changeEmitter,
        getValue: config.getFieldValue || ((modObj) => value ? config.getValue(modObj)[fieldName] == value : config.getValue(modObj)[fieldName]),
        setValue: config.setFieldValue || ((eventID, modObj, newValue) => {
            const newMessage = config.getValue(modObj);
            if (value) {
                if (newValue) {
                    newMessage[fieldName] = value;
                }
                else if (newMessage[fieldName] == value) {
                    newMessage[fieldName] = 0;
                }
            }
            else {
                newMessage[fieldName] = newValue;
            }
            config.setValue(eventID, modObj, newMessage);
        }),
        extraCssClasses: config.extraCssClasses,
    });
}
export function makeSpecOptionsBooleanIconInput(config) {
    return makeBooleanIconInput({
        getModObject: (player) => player,
        getValue: (player) => player.getSpecOptions(),
        setValue: (eventID, player, newVal) => player.setSpecOptions(eventID, newVal),
        changeEmitter: config.changeEmitter || ((player) => player.specOptionsChangeEmitter),
        extraCssClasses: config.extraCssClasses,
        getFieldValue: config.getValue,
        setFieldValue: config.setValue,
    }, config.id, config.fieldName, config.value);
}
function makeNumberIconInput(config, id, fieldName, multiplier) {
    return makeWrappedIconInput({
        getModObject: config.getModObject,
        id: id,
        states: 0,
        changedEvent: config.changeEmitter,
        getValue: (modObj) => config.getValue(modObj)[fieldName],
        setValue: (eventID, modObj, newValue) => {
            const newMessage = config.getValue(modObj);
            if (multiplier) {
                const sign = newValue - newMessage[fieldName];
                newValue += (multiplier - 1) * sign;
            }
            if (newValue < 0) {
                newValue = 0;
            }
            newMessage[fieldName] = newValue;
            config.setValue(eventID, modObj, newMessage);
        },
    });
}
export function makeTristateIconInput(config, id, impId, fieldName) {
    const input = makeNumberIconInput(config, id, fieldName);
    input.states = 3;
    input.improvedId = impId;
    return input;
}
export function makeQuadstateIconInput(config, id, impId, impId2, fieldName) {
    const input = makeNumberIconInput(config, id, fieldName);
    input.states = 4;
    input.improvedId = impId;
    input.improvedId2 = impId2;
    return input;
}
export function makeMultistateIconInput(config, id, numStates, fieldName, multiplier) {
    const input = makeNumberIconInput(config, id, fieldName, multiplier);
    input.states = numStates;
    return input;
}
function makeWrappedEnumIconInput(config) {
    const getModObject = config.getModObject;
    return {
        type: 'iconEnum',
        numColumns: config.numColumns,
        values: config.values.map(value => {
            if (value.showWhen) {
                const showWhen = value.showWhen;
                value.showWhen = ((player) => showWhen(getModObject(player)));
            }
            return value;
        }),
        equals: config.equals,
        zeroValue: config.zeroValue,
        changedEvent: (player) => config.changedEvent(getModObject(player)),
        getValue: (player) => config.getValue(getModObject(player)),
        setValue: (eventID, player, newValue) => config.setValue(eventID, getModObject(player), newValue),
        extraCssClasses: config.extraCssClasses,
    };
}
export function makeSpecOptionsEnumIconInput(config) {
    return makeWrappedEnumIconInput({
        numColumns: config.numColumns || 1,
        values: config.values,
        equals: (a, b) => a == b,
        zeroValue: 0,
        getModObject: (player) => player,
        getValue: config.getValue || ((player) => player.getSpecOptions()[config.fieldName]),
        setValue: config.setValue || ((eventID, player, newVal) => {
            const newMessage = player.getSpecOptions();
            newMessage[config.fieldName] = newVal;
            player.setSpecOptions(eventID, newMessage);
        }),
        changedEvent: config.changeEmitter || ((player) => player.specOptionsChangeEmitter),
        extraCssClasses: config.extraCssClasses,
    });
}
export function makeRotationEnumIconInput(config) {
    return makeWrappedEnumIconInput({
        numColumns: config.numColumns || 1,
        values: config.values,
        equals: (a, b) => a == b,
        zeroValue: 0,
        getModObject: (player) => player,
        getValue: config.getValue || ((player) => player.getRotation()[config.fieldName]),
        setValue: config.setValue || ((eventID, player, newVal) => {
            const newMessage = player.getRotation();
            newMessage[config.fieldName] = newVal;
            player.setRotation(eventID, newMessage);
        }),
        changedEvent: config.changeEmitter || ((player) => player.rotationChangeEmitter),
        extraCssClasses: config.extraCssClasses,
    });
}
