-- Fonction SECURITY DEFINER exposant des statistiques agrégées et anonymes par
-- formation (nb de personnes ayant obtenu une attestation, note moyenne de
-- recommandation), toutes institutions confondues.
--
-- Nécessaire car les RLS de `attestations` et `evaluations_formations`
-- limitent la lecture à son propre profil (ou aux responsables de sa propre
-- institution, cf. 20260506_rls_security_definer.sql) : un collaborateur ne
-- peut donc pas lire ces tables directement pour afficher un classement
-- inter-institutions. La fonction ne renvoie que des agrégats (aucun profil_id,
-- aucune donnée individuelle), donc sans risque de fuite de données.

CREATE OR REPLACE FUNCTION public.get_formations_populaires()
RETURNS TABLE (
  formation_id       uuid,
  titre              text,
  slug               text,
  participants_count bigint,
  note_moyenne       numeric,
  nb_evaluations     bigint
)
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT
    f.id AS formation_id,
    f.titre,
    f.slug,
    COALESCE(part.participants_count, 0) AS participants_count,
    ROUND(evals.note_moyenne, 1) AS note_moyenne,
    COALESCE(evals.nb_evaluations, 0) AS nb_evaluations
  FROM formations f
  LEFT JOIN (
    SELECT formation_id, COUNT(DISTINCT profil_id) AS participants_count
    FROM attestations
    GROUP BY formation_id
  ) part ON part.formation_id = f.id
  LEFT JOIN (
    SELECT formation_id, AVG(recommandation)::numeric AS note_moyenne, COUNT(*) AS nb_evaluations
    FROM evaluations_formations
    GROUP BY formation_id
  ) evals ON evals.formation_id = f.id
  WHERE f.est_publie = true;
$$;

GRANT EXECUTE ON FUNCTION public.get_formations_populaires() TO authenticated;
