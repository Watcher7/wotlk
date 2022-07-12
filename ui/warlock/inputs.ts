import { Warlock_Options as WarlockOptions, Warlock_Rotation_PrimarySpell as PrimarySpell, Warlock_Rotation_Curse as Curse, Warlock_Options_Armor as Armor, Warlock_Options_Summon as Summon } from '/wotlk/core/proto/warlock.js';
import { RaidTarget } from '/wotlk/core/proto/common.js';
import { Spec } from '/wotlk/core/proto/common.js';
import { NO_TARGET } from '/wotlk/core/proto_utils/utils.js';
import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import { Player } from '/wotlk/core/player.js';
import { Sim } from '/wotlk/core/sim.js';
import { EventID, TypedEvent } from '/wotlk/core/typed_event.js';
import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
import { Target } from '/wotlk/core/target.js';

// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.

// export const FelArmor = {
// 	id: ActionId.fromSpellId(47893),
// 	states: 2,
// 	extraCssClasses: [
// 		'fel-armor-picker',
// 	],
// 	changedEvent: (player: Player<Spec.SpecWarlock>) => player.specOptionsChangeEmitter,
// 	getValue: (player: Player<Spec.SpecWarlock>) => player.getSpecOptions().armor == Armor.FelArmor,
// 	setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => {
// 		const newOptions = player.getSpecOptions();
// 		newOptions.armor = newValue ? Armor.FelArmor : Armor.NoArmor;
// 		player.setSpecOptions(eventID, newOptions);
// 	},
// };

// export const DemonArmor = {
// 	id: ActionId.fromSpellId(47889),
// 	states: 2,
// 	extraCssClasses: [
// 		'demon-armor-picker',
// 	],
// 	changedEvent: (player: Player<Spec.SpecWarlock>) => player.specOptionsChangeEmitter,
// 	getValue: (player: Player<Spec.SpecWarlock>) => player.getSpecOptions().armor == Armor.DemonArmor,
// 	setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => {
// 		const newOptions = player.getSpecOptions();
// 		newOptions.armor = newValue ? Armor.DemonArmor : Armor.NoArmor;
// 		player.setSpecOptions(eventID, newOptions);
// 	},
// };
export const WarlockArmor = {
	extraCssClasses: [
		'warlock-armor-picker',
	],
	numColumns: 2,
	values: [
		{ actionId: ActionId.fromSpellId(47893), value: Armor.FelArmor },
		{ actionId: ActionId.fromSpellId(47889), value: Armor.DemonArmor },
	],
	equals: (a: Armor, b: Armor) => a == b,
	zeroValue: Armor.NoArmor,
	changedEvent: (player: Player<Spec.SpecWarlock>) => player.specOptionsChangeEmitter,
	getValue: (player: Player<Spec.SpecWarlock>) => player.getSpecOptions().armor,
	setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: number) => {
		const newOptions = player.getSpecOptions();
		newOptions.armor = newValue;
		player.setSpecOptions(eventID, newOptions);
	},
};


/*export const Sacrifice = {
	id: ActionId.fromSpellId(18788),
	states: 2,
	extraCssClasses: [
		'sac-picker',
	],
	changedEvent: (player: Player<Spec.SpecWarlock>) => player.changeEmitter,
	getValue: (player: Player<Spec.SpecWarlock>) => player.getSpecOptions().sacrificeSummon && player.getTalents().demonicSacrifice && player.getSpecOptions().summon != Summon.NoSummon,
	setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => {
		const newOptions = player.getSpecOptions();
		newOptions.sacrificeSummon = newValue;
		player.setSpecOptions(eventID, newOptions);
	},
};
*/
export const DemonSummon = {
	extraCssClasses: [
		'warlock-summon-picker',
	],
	numColumns: 3,
	values: [
		{ color: '808080', value: Summon.NoSummon },
		{ actionId: ActionId.fromSpellId(688), value: Summon.Imp },
		// { actionId: ActionId.fromSpellId(697), value: Summon.Voidwalker },
		{ actionId: ActionId.fromSpellId(712), value: Summon.Succubus },
		{ actionId: ActionId.fromSpellId(691), value: Summon.Felhunter },
		{ actionId: ActionId.fromSpellId(30146), value: Summon.Felguard },
	],
	equals: (a: Summon, b: Summon) => a == b,
	zeroValue: Summon.NoSummon,
	changedEvent: (player: Player<Spec.SpecWarlock>) => player.specOptionsChangeEmitter,
	getValue: (player: Player<Spec.SpecWarlock>) => player.getSpecOptions().summon,
	setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: number) => {
		const newOptions = player.getSpecOptions();
		newOptions.summon = newValue;
		player.setSpecOptions(eventID, newOptions);
	},
};

export const WarlockRotationConfig = {
	inputs: [
		{
			type: 'enum' as const,
			getModObject: (simUI: IndividualSimUI<any>) => simUI.player,
			config: {
				extraCssClasses: [
					'primary-spell-enum-picker',
				],
				label: 'Primary Spell',
				labelTooltip: 'Choose primary spell to cast',
				values: [
					{
						name: 'Shadowbolt', value: PrimarySpell.Shadowbolt,
					},
					{
						name: 'Incinerate', value: PrimarySpell.Incinerate,
					},
					{
						name: 'Seed of Corruption', value: PrimarySpell.Seed,
					},
				],
				changedEvent: (player: Player<Spec.SpecWarlock>) => player.rotationChangeEmitter,
				getValue: (player: Player<Spec.SpecWarlock>) => player.getRotation().primarySpell,
				setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: number) => {
					const newRotation = player.getRotation();
					newRotation.primarySpell = newValue;
					player.setRotation(eventID, newRotation);
				},
			},
		},
		{
			type: 'boolean' as const,
			getModObject: (simUI: IndividualSimUI<any>) => simUI.player,
			config: {
				extraCssClasses: [
					'immolate-picker',
				],
				label: 'Use Immolate',
				labelTooltip: 'Use Immolate as the next cast after the dot expires.',
				changedEvent: (player: Player<Spec.SpecWarlock>) => player.rotationChangeEmitter,
				getValue: (player: Player<Spec.SpecWarlock>) => player.getRotation().immolate,
				setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => {
					const newRotation = player.getRotation();
					newRotation.immolate = newValue;
					player.setRotation(eventID, newRotation);
				},
			},
		},
		{
			type: 'boolean' as const,
			getModObject: (simUI: IndividualSimUI<any>) => simUI.player,
			config: {
				extraCssClasses: [
					'corruption-picker',
				],
				label: 'Use Corruption',
				labelTooltip: 'Use Corruption as the next cast after the dot expires.',
				changedEvent: (player: Player<Spec.SpecWarlock>) => player.rotationChangeEmitter,
				getValue: (player: Player<Spec.SpecWarlock>) => player.getRotation().corruption,
				setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => {
					const newRotation = player.getRotation();
					newRotation.corruption = newValue;
					player.setRotation(eventID, newRotation);
				},
			},
		},
		{
			type: 'boolean' as const,
			getModObject: (simUI: IndividualSimUI<any>) => simUI.player,
			config: {
				extraCssClasses: [
					'unstableaffliction-picker',
				],
				label: 'Use Unstable Affliction',
				labelTooltip: 'Use Unstable Affliction as the next cast after the dot expires.',
				changedEvent: (player: Player<Spec.SpecWarlock>) => player.talentsChangeEmitter,
				getValue: (player: Player<Spec.SpecWarlock>) => player.getRotation().unstableAffliction,
				setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => {
					const newRotation = player.getRotation();
					newRotation.unstableAffliction = newValue;
					player.setRotation(eventID, newRotation);
				},
				enableWhen: (player: Player<Spec.SpecWarlock>) => player.getTalents().unstableAffliction,
			},
		},
		{
			type: 'boolean' as const,
			getModObject: (simUI: IndividualSimUI<any>) => simUI.player,
			config: {
				extraCssClasses: [
					'haunt-picker',
				],
				label: 'Use Haunt',
				labelTooltip: 'Use Haunt as the next cast after the buff expires.',
				changedEvent: (player: Player<Spec.SpecWarlock>) => player.talentsChangeEmitter,
				getValue: (player: Player<Spec.SpecWarlock>) => player.getRotation().haunt,
				setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => {
					const newRotation = player.getRotation();
					newRotation.haunt = newValue;
					player.setRotation(eventID, newRotation);
				},
				enableWhen: (player: Player<Spec.SpecWarlock>) => player.getTalents().haunt,
			},
		},
		{
			type: 'boolean' as const,
			getModObject: (simUI: IndividualSimUI<any>) => simUI.player,
			config: {
				extraCssClasses: [
					'ChaosBolt-picker',
				],
				label: 'Use Chaos Bolt',
				labelTooltip: 'Use Chaos Bolt as the next cast when CD is up.',
				changedEvent: (player: Player<Spec.SpecWarlock>) => player.talentsChangeEmitter,
				getValue: (player: Player<Spec.SpecWarlock>) => player.getRotation().chaosBolt,
				setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => {
					const newRotation = player.getRotation();
					newRotation.chaosBolt = newValue;
					player.setRotation(eventID, newRotation);
				},
				enableWhen: (player: Player<Spec.SpecWarlock>) => player.getTalents().chaosBolt,
			},
		},
		{
			type: 'boolean' as const,
			getModObject: (simUI: IndividualSimUI<any>) => simUI.player,
			config: {
				extraCssClasses: [
					'detonate-seed-picker',
				],
				label: 'Detonate Seed on Cast',
				labelTooltip: 'Simulates raid doing damage to targets such that seed detonates immediately on cast.',
				changedEvent: (player: Player<Spec.SpecWarlock>) => player.rotationChangeEmitter,
				getValue: (player: Player<Spec.SpecWarlock>) => player.getRotation().detonateSeed,
				setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => {
					const newRotation = player.getRotation();
					newRotation.detonateSeed = newValue;
					player.setRotation(eventID, newRotation);
				},
				enableWhen: (player: Player<Spec.SpecWarlock>) => player.getRotation().primarySpell == PrimarySpell.Seed,
			},
		},
		{
			type: 'enum' as const,
			getModObject: (simUI: IndividualSimUI<any>) => simUI.player,
			config: {
				extraCssClasses: [
					'curse-enum-picker',
				],
				label: 'Curse',
				labelTooltip: 'No tooltip yet',
				values: [
					{
						name: "None", value: Curse.NoCurse,
					},
					{
						name: "Elements", value: Curse.Elements,
					},
					{
						name: "Weakness", value: Curse.Weakness,
					},
					{
						name: "Doom", value: Curse.Doom,
					},
					{
						name: "Agony", value: Curse.Agony,
					},
					{
						name: "Tongues", value: Curse.Tongues,
					}
				],
				changedEvent: (player: Player<Spec.SpecWarlock>) => player.rotationChangeEmitter,
				getValue: (player: Player<Spec.SpecWarlock>) => player.getRotation().curse,
				setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: number) => {
					const newRotation = player.getRotation();
					newRotation.curse = newValue;
					player.setRotation(eventID, newRotation);
				},
			},
		},
	],
};