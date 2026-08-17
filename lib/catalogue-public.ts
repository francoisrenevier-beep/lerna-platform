import { createClient } from "@supabase/supabase-js"

/**
 * Catalogue affiché sur le site vitrine, à des visiteurs non connectés.
 *
 * Ce module est le seul point de contact entre la page publique et la base :
 * les composants ne connaissent que `FormationPublique`. Le mode d'accès aux
 * données peut donc changer sans toucher à l'affichage.
 */
export type FormationPublique = {
  slug: string
  titre: string
  /** `null` si la formation n'a pas de description courte renseignée. */
  description: string | null
  /** Domaine normalisé (`handicap`, `transversal`, …), `null` si absent. */
  domaine: string | null
  /** Décompte réel des modules ; `null` si indisponible — jamais estimé. */
  nbModules: number | null
  /** Durée déclarée sur la formation ; `null` si non renseignée. */
  dureeMinutes: number | null
  /** Libellés de niveau. Vide si le niveau est absent ou inconnu. */
  niveaux: string[]
}

/** Ligne brute renvoyée par `get_catalogue_public()`. */
type LigneCatalogue = {
  slug: string
  titre: string
  description: string | null
  domaine: string[] | string | null
  nb_modules: number | string | null
  duree_minutes: number | null
  niveau: string | null
}

/**
 * Libellés affichables des niveaux stockés en base.
 *
 * Reprend `NIVEAUX` de lib/formationMeta.ts, qui est un module `"use client"`
 * et ne peut donc pas être appelé depuis un Server Component. Un niveau absent
 * de cette table ne produit aucune étiquette : mieux vaut ne rien afficher
 * qu'une valeur technique brute sur une page commerciale.
 */
const NIVEAU_LABELS: Record<string, string> = {
  base: "Base",
  intermediaire: "Intermédiaire",
  "intermédiaire": "Intermédiaire",
  avance: "Avancé",
  confirme: "Avancé",
  tous: "Tous niveaux",
}

function normaliser(valeur: string): string {
  return valeur
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
}

function premierDomaine(domaine: string[] | string | null): string | null {
  if (!domaine) return null
  const brut = Array.isArray(domaine) ? domaine[0] : domaine
  if (!brut || !brut.trim()) return null
  return normaliser(brut)
}

function niveauxDepuis(niveau: string | null): string[] {
  if (!niveau) return []
  const label = NIVEAU_LABELS[niveau.trim().toLowerCase()] ?? NIVEAU_LABELS[normaliser(niveau)]
  return label ? [label] : []
}

/**
 * Un décompte de modules à zéro n'est pas une information : il signale une
 * formation dont les modules ne sont pas encore rattachés. On renvoie `null`,
 * l'affichage omet alors la métadonnée plutôt que d'annoncer « 0 module ».
 */
function nbModulesDepuis(valeur: number | string | null): number | null {
  if (valeur === null || valeur === undefined) return null
  const n = Number(valeur)
  if (!Number.isFinite(n) || n <= 0) return null
  return n
}

/**
 * Retourne les formations publiées, triées par titre.
 *
 * Le filtre de publication (`est_publie`, `est_privee`, `est_a_venir`) est
 * appliqué **en base**, dans `get_catalogue_public()` (migration 20260817) —
 * jamais ici après récupération. Une formation en cours de production ne
 * transite donc à aucun moment par le serveur de rendu.
 *
 * Retourne un tableau vide si la base est injoignable : la page affiche son
 * état vide, sans contenu de repli inventé.
 */
export async function getFormationsPubliees(): Promise<FormationPublique[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const cle = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !cle) return []

  try {
    const supabase = createClient(url, cle, {
      auth: { persistSession: false, autoRefreshToken: false },
    })

    const { data, error } = await supabase.rpc("get_catalogue_public")

    if (error || !data) {
      console.error("Catalogue public indisponible:", error?.message)
      return []
    }

    return (data as LigneCatalogue[]).map((ligne) => ({
      slug: ligne.slug,
      titre: ligne.titre,
      description: ligne.description,
      domaine: premierDomaine(ligne.domaine),
      nbModules: nbModulesDepuis(ligne.nb_modules),
      dureeMinutes: ligne.duree_minutes ?? null,
      niveaux: niveauxDepuis(ligne.niveau),
    }))
  } catch (e) {
    console.error("Catalogue public indisponible:", e)
    return []
  }
}
