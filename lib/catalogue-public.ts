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
  /** Niveau normalisé (`base`, `intermediaire`, …), `null` si absent ou inconnu. */
  niveau: string | null
  /**
   * Titre court saisi en base, pour la vignette de la carte. `null` si absent :
   * la vignette le déduit alors du titre complet.
   */
  titreCourt: string | null
}

/** Ligne brute renvoyée par `get_catalogue_public()`. */
type LigneCatalogue = {
  slug: string
  titre: string
  /** Ajouté par la migration 20260911 ; absent tant qu'elle n'est pas appliquée. */
  titre_court?: string | null
  description: string | null
  domaine: string[] | string | null
  nb_modules: number | string | null
  duree_minutes: number | null
  niveau: string | null
}

/**
 * Niveaux canoniques, tels que `NIVEAUX` les déclare dans lib/formationMeta.ts.
 *
 * La base porte quelques variantes historiques (« confirmé » pour « avancé »)
 * que cette table ramène à la valeur canonique. Un niveau absent d'ici n'est
 * pas affiché : mieux vaut ne rien annoncer qu'une valeur technique brute sur
 * une page commerciale.
 */
const NIVEAUX_CANONIQUES: Record<string, string> = {
  base: "base",
  intermediaire: "intermediaire",
  avance: "avance",
  confirme: "avance",
  tous: "tous",
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

function niveauDepuis(niveau: string | null): string | null {
  if (!niveau) return null
  return NIVEAUX_CANONIQUES[normaliser(niveau)] ?? null
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
      niveau: niveauDepuis(ligne.niveau),
      titreCourt: ligne.titre_court?.trim() || null,
    }))
  } catch (e) {
    console.error("Catalogue public indisponible:", e)
    return []
  }
}
