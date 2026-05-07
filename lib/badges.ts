import { supabase } from "./supabase"

export type BadgeStats = {
  formationsCommencees: number
  formationsCompletees: number
  joursActifs: number
}

export type BadgeDef = {
  id: string
  icone: string
  titre: string
  description: string
  condition: (s: BadgeStats) => boolean
  progressCurrent?: (s: BadgeStats) => number
  progressTotal?: number
  conditionLabel: string
}

export const BADGE_DEFS: BadgeDef[] = [
  {
    id: "premier-pas",
    icone: "🎯",
    titre: "Premier pas",
    description: "Vous avez commencé votre première formation.",
    condition: (s) => s.formationsCommencees >= 1,
    conditionLabel: "Commencez votre première formation",
  },
  {
    id: "premiere-reussite",
    icone: "🏅",
    titre: "Première réussite",
    description: "Vous avez complété votre première formation.",
    condition: (s) => s.formationsCompletees >= 1,
    progressCurrent: (s) => s.formationsCompletees,
    progressTotal: 1,
    conditionLabel: "Complétez votre première formation",
  },
  {
    id: "en-route",
    icone: "🔥",
    titre: "En route",
    description: "3 formations complétées — vous êtes lancé.",
    condition: (s) => s.formationsCompletees >= 3,
    progressCurrent: (s) => s.formationsCompletees,
    progressTotal: 3,
    conditionLabel: "Complétez 3 formations",
  },
  {
    id: "assidu",
    icone: "⭐",
    titre: "Assidu",
    description: "Vous avez été actif sur 5 jours différents.",
    condition: (s) => s.joursActifs >= 5,
    progressCurrent: (s) => s.joursActifs,
    progressTotal: 5,
    conditionLabel: "Soyez actif sur 5 jours différents",
  },
  {
    id: "academie",
    icone: "🎓",
    titre: "Académie",
    description: "5 formations complétées — félicitations.",
    condition: (s) => s.formationsCompletees >= 5,
    progressCurrent: (s) => s.formationsCompletees,
    progressTotal: 5,
    conditionLabel: "Complétez 5 formations",
  },
]

export async function verifierEtAttribuerBadges(userId: string): Promise<string[]> {
  const [{ data: existingBadges }, { data: progressionData }] = await Promise.all([
    supabase.from("badges").select("badge_id").eq("profil_id", userId),
    supabase
      .from("progression")
      .select("formation_id, module_id, statut, updated_at")
      .eq("profil_id", userId),
  ])

  const existingIds = new Set((existingBadges ?? []).map((b) => b.badge_id))
  const prog = progressionData ?? []
  const formationIds = [...new Set(prog.map((p) => p.formation_id))]

  let formationsCompletees = 0
  if (formationIds.length > 0) {
    const { data: modules } = await supabase
      .from("modules")
      .select("id, formation_id")
      .in("formation_id", formationIds)

    const termineIds = new Set(
      prog.filter((p) => p.statut === "termine").map((p) => p.module_id)
    )
    for (const fId of formationIds) {
      const mods = (modules ?? []).filter((m) => m.formation_id === fId)
      if (mods.length > 0 && mods.every((m) => termineIds.has(m.id))) {
        formationsCompletees++
      }
    }
  }

  const termineDates = prog
    .filter((p) => p.statut === "termine" && p.updated_at)
    .map((p) => new Date(p.updated_at).toISOString().slice(0, 10))
  const joursActifs = new Set(termineDates).size

  const stats: BadgeStats = {
    formationsCommencees: formationIds.length,
    formationsCompletees,
    joursActifs,
  }

  const newBadges: string[] = []
  for (const badge of BADGE_DEFS) {
    if (!existingIds.has(badge.id) && badge.condition(stats)) {
      const { error } = await supabase.from("badges").insert({
        profil_id: userId,
        badge_id: badge.id,
        obtenu_le: new Date().toISOString(),
      })
      if (!error) newBadges.push(badge.id)
    }
  }

  return newBadges
}
