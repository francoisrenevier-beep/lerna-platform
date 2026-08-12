import { createClient } from "@supabase/supabase-js"

/**
 * Chiffres agrégés affichés sur l'accueil.
 *
 * Lus en base à chaque revalidation, jamais écrits en dur : un chiffre figé
 * devient faux dès la publication suivante et contredit le catalogue public.
 */
export type StatsPubliques = {
  /** Formations publiées et non privées, au moment de la revalidation. */
  formationsPubliees: number
  /**
   * Personnes distinctes ayant terminé au moins un module sur la plateforme,
   * plus le socle réel de la phase pilote (`PROFESSIONNELS_PHASE_PILOTE`).
   */
  professionnelsFormes: number
}

/**
 * Professionnels ayant suivi une formation Learna durant la phase pilote de
 * construction des modules (avant août 2026), hors format de licence
 * institutionnelle. Décompte réel fourni par François Renevier ; ces personnes
 * n'ont pas de compte dans `progression`, d'où ce socle ajouté au décompte en
 * base.
 *
 * ⚠️ Ne modifier cette valeur que si le décompte réel de la phase pilote est
 * corrigé — jamais pour « améliorer » le chiffre affiché. Si d'anciens
 * participants pilotes ouvrent un compte et terminent un module, ils seront
 * comptés deux fois ; l'arrondi à la dizaine inférieure absorbe les premiers
 * cas, mais ce socle devra être revu à la baisse si le recouvrement devient
 * significatif.
 */
export const PROFESSIONNELS_PHASE_PILOTE = 153

/**
 * Retourne les deux chiffres, ou `null` si la base est injoignable.
 *
 * `null` plutôt qu'une valeur de repli : afficher un chiffre inventé sur la
 * page d'accueil est pire que ne rien afficher. L'appelant rend alors le
 * bandeau sans chiffres.
 *
 * Passe par la fonction SECURITY DEFINER `get_stats_publiques` (migration
 * 20260812) : les RLS interdisent au rôle anonyme de lire `formations` et
 * `progression` directement.
 */
export async function getStatsPubliques(): Promise<StatsPubliques | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const cle = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !cle) return null

  try {
    const supabase = createClient(url, cle, {
      auth: { persistSession: false, autoRefreshToken: false },
    })

    const { data, error } = await supabase.rpc("get_stats_publiques").single<{
      formations_publiees: number
      professionnels_formes: number
    }>()

    if (error || !data) {
      console.error("Stats publiques indisponibles:", error?.message)
      return null
    }

    return {
      formationsPubliees: Number(data.formations_publiees),
      professionnelsFormes:
        PROFESSIONNELS_PHASE_PILOTE + Number(data.professionnels_formes),
    }
  } catch (e) {
    console.error("Stats publiques indisponibles:", e)
    return null
  }
}
