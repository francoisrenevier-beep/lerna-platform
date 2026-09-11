-- ================================================================
-- Catalogue public : exposer `titre_court`.
--
-- La carte du site vitrine reprend désormais la vignette du catalogue
-- connecté, dont le titre court est l'élément central. Sans cette
-- colonne, la vignette publique le déduit du titre complet et affiche
-- donc un libellé différent de celui que les équipes voient une fois
-- connectées.
--
-- `titre_court` est un libellé éditorial, au même titre que `titre` :
-- l'exposer n'ouvre aucune donnée individuelle. Le périmètre de la
-- fonction est par ailleurs inchangé — les colonnes volontairement
-- retenues en 20260817 (id, description longue, image_url, expert_*,
-- parcours_*, est_privee, afficher_accueil) le restent.
--
-- La signature de la fonction change : CREATE OR REPLACE ne suffit pas,
-- il faut la supprimer d'abord. Aucune table, aucune politique et
-- aucune donnée ne sont modifiées.
-- ================================================================

DROP FUNCTION IF EXISTS public.get_catalogue_public();

CREATE FUNCTION public.get_catalogue_public()
RETURNS TABLE (
  slug          text,
  titre         text,
  titre_court   text,
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
    nullif(btrim(coalesce(f.titre_court, '')), '') AS titre_court,
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
