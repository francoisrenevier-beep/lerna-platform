-- Deux chiffres agrégés affichés sur la page d'accueil publique : nombre de
-- formations au catalogue, nombre de professionnels ayant terminé au moins un
-- module.
--
-- SECURITY DEFINER et ouverte à `anon` car l'accueil est rendu pour des
-- visiteurs non connectés : les RLS de `formations` et `progression` sont
-- toutes `TO authenticated` (cf. 20260508_super_admin.sql), un visiteur ne peut
-- donc rien compter lui-même. Même patron que get_formations_populaires()
-- (20260706) : la fonction ne renvoie que deux entiers — aucun profil_id,
-- aucune donnée individuelle, aucun risque de fuite.
--
-- `est_privee = false` : une formation réservée à une institution est publiée
-- mais n'appartient pas au catalogue que le visiteur peut consulter. La compter
-- ferait mentir le chiffre affiché par rapport au catalogue public.

CREATE OR REPLACE FUNCTION public.get_stats_publiques()
RETURNS TABLE (
  formations_publiees   bigint,
  professionnels_formes bigint
)
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT
    (
      SELECT count(*)
      FROM formations
      WHERE est_publie = true
        AND est_privee = false
    ) AS formations_publiees,
    (
      SELECT count(DISTINCT profil_id)
      FROM progression
      WHERE statut = 'termine'
    ) AS professionnels_formes;
$$;

GRANT EXECUTE ON FUNCTION public.get_stats_publiques() TO anon, authenticated;
