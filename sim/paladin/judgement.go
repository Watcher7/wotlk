package paladin

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/stats"
)

// const JudgementDuration = time.Second * 20

// Shared conditions required to be able to cast any Judgement.
func (paladin *Paladin) canJudgement(sim *core.Simulation) bool {
	return paladin.CurrentSeal != nil && paladin.CurrentSeal.IsActive() && paladin.JudgementOfLight.IsReady(sim)
}

func (paladin *Paladin) registerJudgementOfWisdomSpell(cdTimer *core.Timer) {
	// paladin.JudgementOfLightAura = core.JudgementOfLightAura(paladin.CurrentTarget)

	baseCost1 := paladin.BaseMana * 0.05

	paladin.JudgementOfWisdom = paladin.RegisterSpell(core.SpellConfig{
		ActionID:    core.ActionID{SpellID: 53408},
		SpellSchool: core.SpellSchoolHoly,
		Flags:       SpellFlagPrimaryJudgement,

		ResourceType: stats.Mana,
		BaseCost:     baseCost1,

		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				Cost: baseCost1 * (1 - 0.02*float64(paladin.Talents.Benediction)),
				GCD:  core.GCDDefault,
			},
			IgnoreHaste: true,
			CD: core.Cooldown{
				Timer: cdTimer,
				Duration: (time.Second * 10) -
					(time.Second * time.Duration(paladin.Talents.ImprovedJudgements)) -
					core.TernaryDuration(paladin.HasSetBonus(ItemSetRedemptionBattlegear, 4), 1*time.Second, 0),
			},
		},

		ApplyEffects: core.ApplyEffectFuncDirectDamage(core.SpellEffect{
			ProcMask:       core.ProcMaskEmpty,
			OutcomeApplier: paladin.OutcomeFuncRangedHit(), // Primary Judgements cannot crit or be dodged, parried, or blocked-- only miss. (Unless target is a hunter.)
		}),
	})
}

func (paladin *Paladin) registerJudgements() {
	// Shared CD for all judgements.
	cdTimer1 := paladin.NewTimer()
	paladin.registerJudgementOfWisdomSpell(cdTimer1)
}
