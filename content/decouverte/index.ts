// ─────────────────────────────────────────────────────────────────────────────
// Registre des modules en accès libre.
//
// Une entrée ici suffit à publier un module sur /decouvrir/<slug> : la page,
// le sommaire, la progression, le QCM et l'écran de fin s'en déduisent. Voir
// docs/module-libre.md.
// ─────────────────────────────────────────────────────────────────────────────

import type { ModuleLibre } from "@/lib/decouverte/types"

import { comprendreLaViolence } from "./comprendre-la-violence"
import { vieillissementEtHandicap } from "./vieillissement-et-handicap"

/**
 * Interrupteur de l'accès libre.
 *
 * `false` referme la découverte sans rien démonter : les descripteurs, les
 * pages et le lecteur restent en place, mais plus aucun module n'est publié —
 * /decouvrir/<slug> répond 404 et les cartes du catalogue perdent leur bouton.
 * Repasser à `true` rouvre les modules listés ci-dessous, tels quels.
 */
export const ACCES_LIBRE_OUVERT: boolean = false

/**
 * Modules prêts à être ouverts. Le registre reste complet même refermé : c'est
 * lui que les tests de contenu parcourent, et lui qu'on rouvrira.
 */
export const MODULES_LIBRES_PRETS: ModuleLibre[] = [comprendreLaViolence, vieillissementEtHandicap]

/** Modules effectivement publiés — vide tant que l'accès libre est refermé. */
export const MODULES_LIBRES: ModuleLibre[] = ACCES_LIBRE_OUVERT ? MODULES_LIBRES_PRETS : []

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
