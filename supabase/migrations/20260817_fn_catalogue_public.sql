-- ================================================================
-- Catalogue public : la page vitrine /formations-ressources doit
-- présenter les formations publiées à des visiteurs non connectés.
--
-- Les RLS de `formations` sont toutes `TO authenticated`
-- (cf. 20260508_super_admin.sql) : le rôle `anon` ne lit aucune ligne,
-- malgré le GRANT SELECT posé en 20260611. Même patron que
-- valider_code_institution() (20260525), get_formations_populaires()
-- (20260706) et get_stats_publiques() (20260812) : une fonction
-- SECURITY DEFINER qui n'expose que les colonnes nécessaires.
--
-- Ce que la fonction NE renvoie PAS, volontairement : id, description
-- longue, image_url, expert_nom/expert_role, parcours_*, est_privee,
-- afficher_accueil, ni aucune donnée de `modules` autre que leur
-- décompte. Aucune information individuelle ne peut en sortir.
--
-- Aucune table, aucune politique et aucune donnée existante ne sont
-- modifiées par cette section.
-- ================================================================

CREATE OR REPLACE FUNCTION public.get_catalogue_public()
RETURNS TABLE (
  slug          text,
  titre         text,
  description   text,
  domaine       text[],
  nb_modules    bigint,
  duree_minutes integer,
  niveau        text
)
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT
    f.slug,
    -- Plusieurs titres et descriptions portent une espace résiduelle en
    -- fin de chaîne ; on la retire ici plutôt que de corriger les données.
    btrim(f.titre)                              AS titre,
    nullif(btrim(coalesce(f.description_courte, '')), '') AS description,
    f.domaine,
    (
      SELECT count(m.id)
      FROM modules m
      WHERE m.formation_id = f.id
    )                                           AS nb_modules,
    f.duree_estimee_minutes                     AS duree_minutes,
    f.niveau
  FROM formations f
  -- Les trois conditions sont strictes : une colonne à NULL exclut la
  -- ligne. Le doute joue toujours en faveur de la non-publication.
  WHERE f.est_publie  = true
    AND f.est_privee  = false
    AND f.est_a_venir = false
  ORDER BY btrim(f.titre);
$$;

COMMENT ON FUNCTION public.get_catalogue_public() IS
  'Catalogue marketing lu par /formations-ressources. Filtre est_publie/est_privee/est_a_venir en base, jamais côté application.';

GRANT EXECUTE ON FUNCTION public.get_catalogue_public() TO anon, authenticated;

-- ================================================================
-- Verrou éditorial : une formation créée sans mention explicite de
-- `est_publie` reste invisible.
--
-- L'interface admin envoie déjà la valeur explicitement
-- (app/admin/formations/page.tsx) — ce DEFAULT est donc sans effet sur
-- elle. Il ferme le cas des insertions SQL directes, qui ont omis la
-- colonne dans les sept dernières migrations de formation.
--
-- Ne touche à aucune ligne existante : un DEFAULT ne s'applique qu'aux
-- insertions futures.
-- ================================================================

ALTER TABLE formations ALTER COLUMN est_publie SET DEFAULT false;
