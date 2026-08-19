// Mur des besoins de formation : types partagés, métadonnées de statut et
// appels Supabase. Le mur (/besoins), la carte du tableau de bord et la page
// d'administration passent tous par ici pour éviter que les libellés de statut
// divergent d'un écran à l'autre.

import { supabase } from "./supabase"

// ─── Types ───────────────────────────────────────────────────────────────────

export type StatutBesoin = "propose" | "a_letude" | "en_production" | "publiee" | "ecarte"

/** Ligne renvoyée par la fonction SQL `get_besoins_formations` (affichage anonyme). */
export type Besoin = {
  id: string
  titre: string
  description: string | null
  domaine: string | null
  statut: StatutBesoin
  reponse_admin: string | null
  formation_slug: string | null
  formation_titre: string | null
  votes_count: number
  a_vote: boolean
  est_auteur: boolean
  created_at: string
}

/** Ligne renvoyée par `get_besoins_admin` (nominative, super_admin uniquement). */
export type BesoinAdmin = {
  id: string
  titre: string
  description: string | null
  domaine: string | null
  statut: StatutBesoin
  reponse_admin: string | null
  formation_id: string | null
  formation_titre: string | null
  votes_count: number
  auteur_prenom: string | null
  auteur_nom: string | null
  auteur_email: string | null
  auteur_institution: string | null
  created_at: string
  updated_at: string
}

// ─── Métadonnées de statut ───────────────────────────────────────────────────
// L'ordre du tableau est celui du parcours d'un besoin : c'est lui qui rend la
// boucle lisible pour l'utilisateur (« ma proposition avance »).

export type StatutMeta = {
  value: StatutBesoin
  label: string
  /** Phrase affichée sur la carte quand aucune réponse d'admin n'est saisie. */
  aide: string
  couleur: string
  fond: string
}

export const STATUTS_BESOIN: readonly StatutMeta[] = [
  {
    value: "propose",
    label: "Proposé",
    aide: "Besoin reçu. Les votes servent à établir les priorités.",
    couleur: "#475569",
    fond: "#F1F5F9",
  },
  {
    value: "a_letude",
    label: "À l'étude",
    aide: "Retenu : cadrage du contenu et recherche des sources en cours.",
    couleur: "#B45309",
    fond: "#FFF7ED",
  },
  {
    value: "en_production",
    label: "En production",
    aide: "La formation est en cours d'écriture.",
    couleur: "#1D4ED8",
    fond: "#EFF6FF",
  },
  {
    value: "publiee",
    label: "Disponible",
    aide: "La formation est en ligne au catalogue.",
    couleur: "#1B8B72",
    fond: "#ECFDF5",
  },
  {
    value: "ecarte",
    label: "Écarté",
    aide: "Non retenu pour le moment. Masqué du mur.",
    couleur: "#9CA3AF",
    fond: "#F9FAFB",
  },
]

const STATUT_FALLBACK: StatutMeta = {
  value: "propose",
  label: "Proposé",
  aide: "Besoin reçu.",
  couleur: "#475569",
  fond: "#F1F5F9",
}

export function getStatutMeta(value: string | null | undefined): StatutMeta {
  return STATUTS_BESOIN.find((s) => s.value === value) ?? STATUT_FALLBACK
}

// ─── Détection de doublons ───────────────────────────────────────────────────
// Un mur qui se remplit de dix fois le même besoin perd sa valeur de
// priorisation : mieux vaut orienter vers un vote. La comparaison se fait sur
// les mots significatifs, en ignorant accents, casse et mots outils.

const MOTS_IGNORES = new Set([
  "les", "des", "une", "aux", "dans", "pour", "avec", "sur", "chez", "par",
  "formation", "module", "cours", "sensibilisation", "and", "que", "qui",
  "comment", "quoi", "est", "sont", "plus", "leur", "nos", "notre", "vos",
])

function mots(texte: string): string[] {
  return texte
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((m) => m.length > 2 && !MOTS_IGNORES.has(m))
}

/** Part des mots significatifs de `saisie` retrouvés dans `existant` (0 à 1). */
export function scoreSimilarite(saisie: string, existant: string): number {
  const a = mots(saisie)
  if (a.length === 0) return 0
  const b = new Set(mots(existant))
  const communs = a.filter((m) => b.has(m)).length
  return communs / a.length
}

/** Besoins déjà sur le mur qui ressemblent à ce que la personne est en train d'écrire. */
export function besoinsSimilaires(saisie: string, besoins: Besoin[], seuil = 0.5): Besoin[] {
  if (mots(saisie).length < 2) return []
  return besoins
    .map((b) => ({ b, score: scoreSimilarite(saisie, b.titre + " " + (b.description ?? "")) }))
    .filter((x) => x.score >= seuil)
    .sort((x, y) => y.score - x.score)
    .slice(0, 3)
    .map((x) => x.b)
}

// ─── Appels Supabase ─────────────────────────────────────────────────────────

export async function chargerBesoins(): Promise<Besoin[]> {
  const { data, error } = await supabase.rpc("get_besoins_formations")
  if (error) {
    console.error("Erreur chargement des besoins:", error.message)
    return []
  }
  return (data as Besoin[]) ?? []
}

export async function basculerVote(
  besoinId: string
): Promise<{ votes_count: number; a_vote: boolean } | null> {
  const { data, error } = await supabase.rpc("basculer_vote_besoin", { p_besoin_id: besoinId })
  if (error) {
    console.error("Erreur vote besoin:", error.message)
    return null
  }
  // La fonction RETURNS TABLE : supabase-js renvoie un tableau d'une ligne.
  const ligne = Array.isArray(data) ? data[0] : data
  return ligne ?? null
}

export async function proposerBesoin(champs: {
  titre: string
  description?: string
  domaine?: string
}): Promise<{ id: string } | { erreur: string }> {
  const { data, error } = await supabase.rpc("proposer_besoin_formation", {
    p_titre: champs.titre,
    p_description: champs.description ?? null,
    p_domaine: champs.domaine ?? null,
  })
  if (error) {
    // Les messages des RAISE EXCEPTION sont écrits pour être lus par
    // l'utilisateur (limite journalière, titre trop court).
    return { erreur: error.message || "Envoi impossible pour le moment." }
  }
  return { id: data as string }
}
