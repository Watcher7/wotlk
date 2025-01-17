package mage

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/stats"
)

func (mage *Mage) registerFireBlastSpell() {
	baseCost := 465.0

	mage.FireBlast = mage.RegisterSpell(core.SpellConfig{
		ActionID:     core.ActionID{SpellID: 27079},
		SpellSchool:  core.SpellSchoolFire,
		Flags:        SpellFlagMage,
		ResourceType: stats.Mana,
		BaseCost:     baseCost,
		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				Cost: baseCost *
					(1 - 0.01*float64(mage.Talents.Pyromaniac)),
				GCD: core.GCDDefault,
			},
			CD: core.Cooldown{
				Timer:    mage.NewTimer(),
				Duration: time.Second*8 - time.Millisecond*500*time.Duration(mage.Talents.ImprovedFireBlast),
			},
		},

		ApplyEffects: core.ApplyEffectFuncDirectDamage(core.SpellEffect{
			ProcMask:            core.ProcMaskSpellDamage,
			BonusSpellHitRating: 0,
			BonusSpellCritRating: 0 +
				float64(mage.Talents.CriticalMass)*2*core.CritRatingPerCritChance +
				float64(mage.Talents.Pyromaniac)*1*core.CritRatingPerCritChance,

			DamageMultiplier: mage.spellDamageMultiplier * (1 + 0.02*float64(mage.Talents.FirePower)),

			ThreatMultiplier: 1 - 0.05*float64(mage.Talents.BurningSoul),

			BaseDamage:     core.BaseDamageConfigMagic(664, 786, 1.5/3.5),
			OutcomeApplier: mage.OutcomeFuncMagicHitAndCrit(mage.SpellCritMultiplier(1, 0.25*float64(mage.Talents.SpellPower))),
		}),
	})
}
