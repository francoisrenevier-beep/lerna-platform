// ─────────────────────────────────────────────────────────────────────────────
// Registre des modules en accès libre.
//
// Une entrée ici suffit à publier un module sur /decouvrir/<slug> : la page,
// le sommaire, la progression, le QCM et l'écran de fin s'en déduisent. Voir
// docs/module-libre.md.
// ─────────────────────────────────────────────────────────────────────────────

import type { ModuleLibre } from "@/lib/decouverte/types"

import { comprendreLaViolence } from "./comprendre-la-violence"

export const MODULES_LIBRES: ModuleLibre[] = [comprendreLaViolence]

export function moduleLibre(slug: string): ModuleLibre | undefined {
  return MODULES_LIBRES.find((m) => m.slug === slug)
}

/**
 * Module libre issu d'une formation donnée, pour le badge du catalogue public.
 * `undefined` si la formation n'en a aucun — la carte reste alors inchangée.
 */
export function moduleLibreDeFormation(formationSlug: string | null): ModuleLibre | undefined {
  if (!formationSlug) return undefined
  return MODULES_LIBRES.find((m) => m.formationSlug === formationSlug)
}
