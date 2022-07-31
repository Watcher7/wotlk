import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import { TypedEvent } from '/wotlk/core/typed_event.js';
import { Mage_Rotation_Type as RotationType, Mage_Rotation_ArcaneRotation as ArcaneRotation, Mage_Rotation_FireRotation as FireRotation, Mage_Rotation_FrostRotation as FrostRotation, Mage_Rotation_AoeRotation as AoeRotation } from '/wotlk/core/proto/mage.js';
import { Mage_Rotation_FireRotation_PrimarySpell as PrimaryFireSpell } from '/wotlk/core/proto/mage.js';
import { Mage_Rotation_AoeRotation_Rotation as AoeRotationSpells } from '/wotlk/core/proto/mage.js';
import { Mage_Rotation_ArcaneRotation_Filler as ArcaneFiller } from '/wotlk/core/proto/mage.js';
import { Mage_Options_ArmorType as ArmorType } from '/wotlk/core/proto/mage.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
import * as Presets from './presets.js';
// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.
export const Armor = InputHelpers.makeSpecOptionsEnumIconInput({
    fieldName: 'armor',
    values: [
        { color: 'grey', value: ArmorType.NoArmor },
        { actionId: ActionId.fromItemId(27125), value: ArmorType.MageArmor },
        { actionId: ActionId.fromItemId(30482), value: ArmorType.MoltenArmor },
    ],
});
export const EvocationTicks = InputHelpers.makeSpecOptionsNumberInput({
    fieldName: 'evocationTicks',
    label: '# Evocation Ticks',
    labelTooltip: 'The number of ticks of Evocation to use, or 0 to use the full duration.',
});
export const MageRotationConfig = {
    inputs: [
        {
            type: 'enum',
            label: 'Spec',
            labelTooltip: 'Switches between spec rotation settings. Will also update talents to defaults for the selected spec.',
            values: [
                { name: 'Arcane', value: RotationType.Arcane },
                { name: 'Fire', value: RotationType.Fire },
                { name: 'Frost', value: RotationType.Frost },
            ],
            changedEvent: (player) => player.rotationChangeEmitter,
            getValue: (player) => player.getRotation().type,
            setValue: (eventID, player, newValue) => {
                const newRotation = player.getRotation();
                newRotation.type = newValue;
                TypedEvent.freezeAllAndDo(() => {
                    if (newRotation.type == RotationType.Arcane) {
                        player.setTalentsString(eventID, Presets.ArcaneTalents.data.talentsString);
                        if (!newRotation.arcane) {
                            newRotation.arcane = ArcaneRotation.clone(Presets.DefaultArcaneRotation.arcane);
                        }
                    }
                    else if (newRotation.type == RotationType.Fire) {
                        player.setTalentsString(eventID, Presets.FireTalents.data.talentsString);
                        if (!newRotation.fire) {
                            newRotation.fire = FireRotation.clone(Presets.DefaultFireRotation.fire);
                        }
                    }
                    else {
                        player.setTalentsString(eventID, Presets.DeepFrostTalents.data.talentsString);
                        if (!newRotation.frost) {
                            newRotation.frost = FrostRotation.clone(Presets.DefaultFrostRotation.frost);
                        }
                    }
                    player.setRotation(eventID, newRotation);
                });
            },
        },
        // ********************************************************
        //                        AOE INPUTS
        // ********************************************************
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'multiTargetRotation',
            label: 'AOE Rotation',
            labelTooltip: 'Use multi-target spells.',
        }),
        {
            type: 'enum',
            label: 'Primary Spell',
            values: [
                { name: 'Arcane Explosion', value: AoeRotationSpells.ArcaneExplosion },
                { name: 'Flamestrike', value: AoeRotationSpells.Flamestrike },
                { name: 'Blizzard', value: AoeRotationSpells.Blizzard },
            ],
            changedEvent: (player) => player.rotationChangeEmitter,
            getValue: (player) => player.getRotation().aoe?.rotation || 0,
            setValue: (eventID, player, newValue) => {
                const newRotation = player.getRotation();
                if (!newRotation.aoe) {
                    newRotation.aoe = AoeRotation.create();
                }
                newRotation.aoe.rotation = newValue;
                player.setRotation(eventID, newRotation);
            },
            showWhen: (player) => player.getRotation().multiTargetRotation,
        },
        // ********************************************************
        //                       FIRE INPUTS
        // ********************************************************
        {
            type: 'enum',
            label: 'Primary Spell',
            values: [
                { name: 'Fireball', value: PrimaryFireSpell.Fireball },
                { name: 'Scorch', value: PrimaryFireSpell.Scorch },
            ],
            changedEvent: (player) => player.rotationChangeEmitter,
            getValue: (player) => player.getRotation().fire?.primarySpell || PrimaryFireSpell.Fireball,
            setValue: (eventID, player, newValue) => {
                const newRotation = player.getRotation();
                if (!newRotation.fire) {
                    newRotation.fire = FireRotation.clone(Presets.DefaultFireRotation.fire);
                }
                newRotation.fire.primarySpell = newValue;
                player.setRotation(eventID, newRotation);
            },
            showWhen: (player) => player.getRotation().type == RotationType.Fire && !player.getRotation().multiTargetRotation,
        },
        {
            type: 'boolean',
            label: 'Maintain Imp. Scorch',
            labelTooltip: 'Always use Scorch when below 5 stacks, or < 5.5s remaining on debuff.',
            changedEvent: (player) => player.rotationChangeEmitter,
            getValue: (player) => player.getRotation().fire?.maintainImprovedScorch || false,
            setValue: (eventID, player, newValue) => {
                const newRotation = player.getRotation();
                if (!newRotation.fire) {
                    newRotation.fire = FireRotation.clone(Presets.DefaultFireRotation.fire);
                }
                newRotation.fire.maintainImprovedScorch = newValue;
                player.setRotation(eventID, newRotation);
            },
            showWhen: (player) => player.getRotation().type == RotationType.Fire,
        },
        {
            type: 'boolean',
            label: 'Weave Fire Blast',
            labelTooltip: 'Use Fire Blast whenever its off CD.',
            changedEvent: (player) => player.rotationChangeEmitter,
            getValue: (player) => player.getRotation().fire?.weaveFireBlast || false,
            setValue: (eventID, player, newValue) => {
                const newRotation = player.getRotation();
                if (!newRotation.fire) {
                    newRotation.fire = FireRotation.clone(Presets.DefaultFireRotation.fire);
                }
                newRotation.fire.weaveFireBlast = newValue;
                player.setRotation(eventID, newRotation);
            },
            showWhen: (player) => player.getRotation().type == RotationType.Fire && !player.getRotation().multiTargetRotation,
        },
        // ********************************************************
        //                       FROST INPUTS
        // ********************************************************
        {
            type: 'number',
            label: 'Water Ele Disobey %',
            labelTooltip: 'Percent of Water Elemental actions which will fail. This represents the Water Elemental moving around or standing still instead of casting.',
            changedEvent: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter]),
            getValue: (player) => (player.getRotation().frost?.waterElementalDisobeyChance || 0) * 100,
            setValue: (eventID, player, newValue) => {
                const newRotation = player.getRotation();
                if (!newRotation.frost) {
                    newRotation.frost = FrostRotation.clone(Presets.DefaultFrostRotation.frost);
                }
                newRotation.frost.waterElementalDisobeyChance = newValue / 100;
                player.setRotation(eventID, newRotation);
            },
            showWhen: (player) => player.getRotation().type == RotationType.Frost,
            enableWhen: (player) => player.getTalents().summonWaterElemental,
        },
        // ********************************************************
        //                      ARCANE INPUTS
        // ********************************************************
        {
            type: 'enum',
            label: 'Filler',
            labelTooltip: 'Spells to cast while waiting for Arcane Blast stacks to drop.',
            values: [
                { name: 'Frostbolt', value: ArcaneFiller.Frostbolt },
                { name: 'Arcane Missiles', value: ArcaneFiller.ArcaneMissiles },
                { name: 'Scorch', value: ArcaneFiller.Scorch },
                { name: 'Fireball', value: ArcaneFiller.Fireball },
                { name: 'AM + FrB', value: ArcaneFiller.ArcaneMissilesFrostbolt },
                { name: 'AM + Scorch', value: ArcaneFiller.ArcaneMissilesScorch },
                { name: 'Scorch + 2xFiB', value: ArcaneFiller.ScorchTwoFireball },
            ],
            changedEvent: (player) => player.rotationChangeEmitter,
            getValue: (player) => player.getRotation().arcane?.filler || ArcaneFiller.Frostbolt,
            setValue: (eventID, player, newValue) => {
                const newRotation = player.getRotation();
                if (!newRotation.arcane) {
                    newRotation.arcane = ArcaneRotation.clone(Presets.DefaultArcaneRotation.arcane);
                }
                newRotation.arcane.filler = newValue;
                player.setRotation(eventID, newRotation);
            },
            showWhen: (player) => player.getRotation().type == RotationType.Arcane && !player.getRotation().multiTargetRotation,
        },
        {
            type: 'number',
            label: '# ABs between Fillers',
            labelTooltip: 'Number of Arcane Blasts to cast once the stacks drop.',
            changedEvent: (player) => player.rotationChangeEmitter,
            getValue: (player) => player.getRotation().arcane?.arcaneBlastsBetweenFillers || 0,
            setValue: (eventID, player, newValue) => {
                const newRotation = player.getRotation();
                if (!newRotation.arcane) {
                    newRotation.arcane = ArcaneRotation.clone(Presets.DefaultArcaneRotation.arcane);
                }
                newRotation.arcane.arcaneBlastsBetweenFillers = newValue;
                player.setRotation(eventID, newRotation);
            },
            showWhen: (player) => player.getRotation().type == RotationType.Arcane && !player.getRotation().multiTargetRotation,
        },
        {
            type: 'number',
            label: 'Start regen rotation at mana %',
            labelTooltip: 'Percent of mana pool, below which the regen rotation should be used (alternate fillers and a few ABs).',
            changedEvent: (player) => player.rotationChangeEmitter,
            getValue: (player) => (player.getRotation().arcane?.startRegenRotationPercent || 0) * 100,
            setValue: (eventID, player, newValue) => {
                const newRotation = player.getRotation();
                if (!newRotation.arcane) {
                    newRotation.arcane = ArcaneRotation.clone(Presets.DefaultArcaneRotation.arcane);
                }
                newRotation.arcane.startRegenRotationPercent = newValue / 100;
                player.setRotation(eventID, newRotation);
            },
            showWhen: (player) => player.getRotation().type == RotationType.Arcane && !player.getRotation().multiTargetRotation,
        },
        {
            type: 'number',
            label: 'Stop regen rotation at mana %',
            labelTooltip: 'Percent of mana pool, above which will go back to AB spam.',
            changedEvent: (player) => player.rotationChangeEmitter,
            getValue: (player) => (player.getRotation().arcane?.stopRegenRotationPercent || 0) * 100,
            setValue: (eventID, player, newValue) => {
                const newRotation = player.getRotation();
                if (!newRotation.arcane) {
                    newRotation.arcane = ArcaneRotation.clone(Presets.DefaultArcaneRotation.arcane);
                }
                newRotation.arcane.stopRegenRotationPercent = newValue / 100;
                player.setRotation(eventID, newRotation);
            },
            showWhen: (player) => player.getRotation().type == RotationType.Arcane && !player.getRotation().multiTargetRotation,
        },
        {
            type: 'boolean',
            label: 'Disable DPS cooldowns during regen',
            labelTooltip: 'Prevents the usage of any DPS cooldowns during regen rotation. Mana CDs are still allowed.',
            changedEvent: (player) => player.rotationChangeEmitter,
            getValue: (player) => player.getRotation().arcane?.disableDpsCooldownsDuringRegen || false,
            setValue: (eventID, player, newValue) => {
                const newRotation = player.getRotation();
                if (!newRotation.arcane) {
                    newRotation.arcane = ArcaneRotation.clone(Presets.DefaultArcaneRotation.arcane);
                }
                newRotation.arcane.disableDpsCooldownsDuringRegen = newValue;
                player.setRotation(eventID, newRotation);
            },
            showWhen: (player) => player.getRotation().type == RotationType.Arcane && !player.getRotation().multiTargetRotation,
        },
    ],
};
