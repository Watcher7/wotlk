import { Consumes } from '/wotlk/core/proto/common.js';
import { Flask } from '/wotlk/core/proto/common.js';
import { Food } from '/wotlk/core/proto/common.js';
import { Glyphs } from '/wotlk/core/proto/common.js';
import { EquipmentSpec } from '/wotlk/core/proto/common.js';
import { Potions } from '/wotlk/core/proto/common.js';
import { SavedTalents } from '/wotlk/core/proto/ui.js';
import { Warlock_Rotation as WarlockRotation, Warlock_Options as WarlockOptions, Warlock_Rotation_PrimarySpell as PrimarySpell, Warlock_Rotation_SecondaryDot as SecondaryDot, Warlock_Rotation_SpecSpell as SpecSpell, Warlock_Rotation_Curse as Curse, Warlock_Options_WeaponImbue as WarlockWeaponImbue, Warlock_Options_Armor as Armor, Warlock_Options_Summon as Summon, WarlockMajorGlyph as MajorGlyph, WarlockMinorGlyph as MinorGlyph, } from '/wotlk/core/proto/warlock.js';
import * as Tooltips from '/wotlk/core/constants/tooltips.js';
// Preset options for this spec.
// Eventually we will import these values for the raid sim too, so its good to
// keep them in a separate file.
// Default talents. Uses the wowhead calculator format, make the talents on
// https://wowhead.com/wotlk/talent-calc and copy the numbers in the url.
export const AfflictionTalents = {
    name: 'Affliction',
    data: SavedTalents.create({
        talentsString: '2350002030023510253510331151--55000005',
        glyphs: Glyphs.create({
            major1: MajorGlyph.GlyphOfQuickDecay,
            major2: MajorGlyph.GlyphOfLifeTap,
            major3: MajorGlyph.GlyphOfHaunt,
            minor1: MinorGlyph.GlyphOfSouls,
            minor2: MinorGlyph.GlyphOfDrainSoul,
            minor3: MinorGlyph.GlyphOfEnslaveDemon,
        }),
    }),
};
export const DemonologyTalents = {
    name: 'Demonology',
    data: SavedTalents.create({
        talentsString: '-203203301035012530135201351-550000052',
        glyphs: Glyphs.create({
            major1: MajorGlyph.GlyphOfLifeTap,
            major2: MajorGlyph.GlyphOfQuickDecay,
            major3: MajorGlyph.GlyphOfMetamorphosis,
            minor1: MinorGlyph.GlyphOfSouls,
            minor2: MinorGlyph.GlyphOfDrainSoul,
            minor3: MinorGlyph.GlyphOfEnslaveDemon,
        }),
    }),
};
export const DestructionTalents = {
    name: 'Destruction',
    data: SavedTalents.create({
        talentsString: '030-03310030003-05203205220331051035031351',
        glyphs: Glyphs.create({
            major1: MajorGlyph.GlyphOfConflagrate,
            major2: MajorGlyph.GlyphOfImp,
            major3: MajorGlyph.GlyphOfIncinerate,
            minor1: MinorGlyph.GlyphOfSouls,
            minor2: MinorGlyph.GlyphOfDrainSoul,
            minor3: MinorGlyph.GlyphOfEnslaveDemon,
        }),
    }),
};
export const AfflictionRotation = WarlockRotation.create({
    primarySpell: PrimarySpell.ShadowBolt,
    secondaryDot: SecondaryDot.UnstableAffliction,
    specSpell: SpecSpell.Haunt,
    curse: Curse.Agony,
    corruption: true,
    detonateSeed: true,
});
export const DemonologyRotation = WarlockRotation.create({
    primarySpell: PrimarySpell.ShadowBolt,
    secondaryDot: SecondaryDot.Immolate,
    specSpell: SpecSpell.NoSpecSpell,
    curse: Curse.Doom,
    corruption: true,
    detonateSeed: true,
});
export const DestructionRotation = WarlockRotation.create({
    primarySpell: PrimarySpell.Incinerate,
    secondaryDot: SecondaryDot.Immolate,
    specSpell: SpecSpell.ChaosBolt,
    curse: Curse.Doom,
    corruption: true,
    detonateSeed: true,
});
// var defaultDestroMinorGlyphs = &proto.WarlockMinorGlyph{
// 	WarlockMinorGlyph:
// 		proto.WarlockMinorGlyph_GlyphOfDrainSoul,
// 		proto.WarlockMinorGlyph_GlyphOfEnslaveDemon,
// 		proto.WarlockMinorGlyph_GlyphOfKilrogg,
// }
export const AfflictionOptions = WarlockOptions.create({
    armor: Armor.FelArmor,
    summon: Summon.Felhunter,
});
export const DemonologyOptions = WarlockOptions.create({
    armor: Armor.FelArmor,
    summon: Summon.Felguard,
});
export const DestructionOptions = WarlockOptions.create({
    armor: Armor.FelArmor,
    summon: Summon.Imp,
    weaponImbue: WarlockWeaponImbue.GrandFirestone,
});
export const DefaultConsumes = Consumes.create({
    flask: Flask.FlaskOfTheFrostWyrm,
    food: Food.FoodFishFeast,
    defaultPotion: Potions.PotionOfWildMagic,
});
export const P1_DESTRO = {
    name: 'P1 Destro',
    tooltip: Tooltips.BASIC_BIS_DISCLAIMER,
    gear: EquipmentSpec.fromJsonString(`{"items": [
	{
	  "id": 28963,
	  "enchant": 29191,
	  "gems": [
		34220,
		31867
	  ]
	},
	{
	  "id": 28762
	},
	{
	  "id": 28967,
	  "enchant": 28886,
	  "gems": [
		24056,
		31861
	]
	},
	{
	  "id": 28766,
	  "enchant": 33150
	},
	{
	  "id": 28964,
	  "enchant": 24003,
	  "gems": [
		31861,
		24059,
		24030
	  ]
	},
	{
	  "id": 24250,
	  "enchant": 22534,
	  "gems": [
		31867
	  ]
	},
	{
	  "id": 28968,
	  "enchant": 28272
	},
	{
	  "id": 24256,
	  "gems": [
		31867,
		31867
	  ]
	},
	{
	  "id": 24262,
	  "enchant": 24274,
	  "gems": [
		31867,
		31867,
		31867
	  ]
	},
	{
	  "id": 21870,
	  "enchant": 35297,
	  "gems": [
		31861,
		24057
	  ]
	},
	{
	  "id": 28753
	},
	{
	  "id": 28793
	},
	{
	  "id": 27683
	},
	{
	  "id": 29370
	},
	{
	  "id": 28802,
	  "enchant": 22561
	},
	{
	  "id": 29273
	},
	{
	  "id": 28783
	}
  ]}`),
};
export const P2_DESTRO = {
    name: 'P2 Destro',
    tooltip: Tooltips.BASIC_BIS_DISCLAIMER,
    gear: EquipmentSpec.fromJsonString(`{"items": [
	{
	  "id": 30212,
	  "enchant": 29191,
	  "gems": [
		34220,
		30606
	  ]
	},
	{
	  "id": 30015
	},
	{
	  "id": 28967,
	  "enchant": 28886,
	  "gems": [
		30600,
		30564
	  ]
	},
	{
	  "id": 29992,
	  "enchant": 33150
	},
	{
	  "id": 30107,
	  "enchant": 24003,
	  "gems": [
		31867,
		31867,
		30605
	  ]
	},
	{
	  "id": 29918,
	  "enchant": 22534
	},
	{
	  "id": 28968,
	  "enchant": 28272
	},
	{
	  "id": 30038,
	  "gems": [
		24030,
		24030
	  ]
	},
	{
	  "id": 24262,
	  "enchant": 24274,
	  "gems": [
		31867,
		31867,
		31867
	  ]
	},
	{
	  "id": 30037,
	  "enchant": 35297
	},
	{
	  "id": 30109
	},
	{
	  "id": 29302
	},
	{
	  "id": 27683
	},
	{
	  "id": 29370
	},
	{
	  "id": 30095,
	  "enchant": 22561
	},
	{
	  "id": 30049
	},
	{
	  "id": 29982
	}
  ]}`),
};
export const P3_DESTRO = {
    name: 'P3 Destro',
    tooltip: Tooltips.BASIC_BIS_DISCLAIMER,
    gear: EquipmentSpec.fromJsonString(`{"items": [
        {
          "id": 31051,
          "enchant": 29191,
          "gems": [
            34220,
            32218
          ]
        },
        {
          "id": 30015
        },
        {
          "id": 31054,
          "enchant": 28886,
          "gems": [
            32215,
            32218
          ]
        },
        {
          "id": 32331,
          "enchant": 33150
        },
        {
          "id": 31052,
          "enchant": 24003,
          "gems": [
            32196,
            32196,
            32196
          ]
        },
        {
          "id": 32586,
          "enchant": 22534
        },
        {
          "id": 31050,
          "enchant": 28272,
          "gems": [
            32196
          ]
        },
        {
          "id": 30038,
          "gems": [
            32215,
            32218
          ]
        },
        {
          "id": 30916,
          "enchant": 24274,
          "gems": [
            32196,
            32196,
            32196
          ]
        },
        {
          "id": 32239,
          "enchant": 35297,
          "gems": [
            32218,
            32215
          ]
        },
        {
          "id": 32527,
          "enchant": 22536
        },
        {
          "id": 29305,
          "enchant": 22536
        },
        {
          "id": 32483
        },
        {
          "id": 29370
        },
        {
          "id": 32374,
          "enchant": 22561
        },
        {},
        {
          "id": 29982
        }
	]}`),
};
export const P4_DESTRO = {
    name: 'P4 Destro',
    tooltip: Tooltips.BASIC_BIS_DISCLAIMER,
    gear: EquipmentSpec.fromJsonString(`{"items": [
		{
		  "id": 31051,
		  "enchant": 29191,
		  "gems": [
			34220,
			32218
		  ]
		},
		{
		  "id": 33281
		},
		{
		  "id": 31054,
		  "enchant": 28886,
		  "gems": [
			32215,
			32218
		  ]
		},
		{
		  "id": 32524,
		  "enchant": 33150
		},
		{
		  "id": 30107,
		  "enchant": 24003,
		  "gems": [
			32196,
			32196,
			32196
		  ]
		},
		{
		  "id": 32586,
		  "enchant": 22534
		},
		{
		  "id": 31050,
		  "enchant": 28272,
		  "gems": [
			32196
		  ]
		},
		{
		  "id": 30888,
		  "gems": [
			32196,
			32196
		  ]
		},
		{
		  "id": 31053,
		  "enchant": 24274,
		  "gems": [
			32196
		  ]
		},
		{
		  "id": 32239,
		  "enchant": 35297,
		  "gems": [
			32218,
			32215
		  ]
		},
		{
		  "id": 32527,
		  "enchant": 22536
		},
		{
		  "id": 33497,
		  "enchant": 22536
		},
		{
		  "id": 32483
		},
		{
		  "id": 33829
		},
		{
		  "id": 32374,
		  "enchant": 22561
		},
		{},
		{
		  "id": 33192,
		  "gems": [
			32215
		  ]
		}
	]}`),
};
export const P5_DESTRO = {
    name: 'P5 Destro',
    tooltip: Tooltips.BASIC_BIS_DISCLAIMER,
    gear: EquipmentSpec.fromJsonString(`{"items": [
        {
          "id": 34340,
          "enchant": 29191,
          "gems": [
            34220,
            32215
          ]
        },
        {
          "id": 34204
        },
        {
          "id": 31054,
          "enchant": 28886,
          "gems": [
            32215,
            35760
          ]
        },
        {
          "id": 34242,
          "enchant": 33150,
          "gems": [
            32196
          ]
        },
        {
          "id": 34232,
          "enchant": 24003,
          "gems": [
            32196,
            35760,
            35760
          ]
        },
        {
          "id": 34436,
          "enchant": 22534,
          "gems": [
            35760
          ]
        },
        {
          "id": 34344,
          "enchant": 28272,
          "gems": [
            35760,
            32196
          ]
        },
        {
          "id": 34541,
          "gems": [
            35760
          ]
        },
        {
          "id": 34181,
          "enchant": 24274,
          "gems": [
            32196,
            32196,
            35760
          ]
        },
        {
          "id": 34564,
          "enchant": 35297,
          "gems": [
            35760
          ]
        },
        {
          "id": 34362,
          "enchant": 22536
        },
        {
          "id": 34230,
          "enchant": 22536
        },
        {
          "id": 32483
        },
        {
          "id": 34429
        },
        {
          "id": 34336,
          "enchant": 22561
        },
        {
          "id": 34179
        },
        {
          "id": 34347,
          "gems": [
            35760
          ]
        }
      ]}`),
};
