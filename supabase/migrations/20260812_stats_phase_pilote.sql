-- Statistiques de la phase pilote de construction des modules (avant août
-- 2026) : 153 personnes réelles, 499 suivis de formation, notes de
-- satisfaction recueillies hors plateforme. Source : décomptes fournis par
-- François Renevier le 12.08.2026.
--
-- Ces personnes n'ont pas de compte : leurs suivis et leurs notes vivent dans
-- une table d'agrégats dédiée, jamais dans `progression` ni
-- `evaluations_formations` — pas de faux profils, et un décompte auditable
-- séparé des données opérationnelles.
--
-- `get_formations_populaires()` fusionne ces agrégats avec les données vivantes
-- (attestations + évaluations). Le socle global de 153 personnes distinctes du
-- bandeau d'accueil reste dans le code (lib/stats-publiques.ts,
-- PROFESSIONNELS_PHASE_PILOTE) : il n'est PAS déductible de cette table, la
-- somme des participants (499) comptant plusieurs fois les personnes ayant
-- suivi plusieurs formations.

CREATE TABLE IF NOT EXISTS stats_phase_pilote (
  formation_slug text PRIMARY KEY,
  participants   integer NOT NULL CHECK (participants >= 0),
  notes_5        integer NOT NULL DEFAULT 0 CHECK (notes_5 >= 0),
  notes_4        integer NOT NULL DEFAULT 0 CHECK (notes_4 >= 0),
  notes_3        integer NOT NULL DEFAULT 0 CHECK (notes_3 >= 0),
  notes_2        integer NOT NULL DEFAULT 0 CHECK (notes_2 >= 0),
  notes_1        integer NOT NULL DEFAULT 0 CHECK (notes_1 >= 0),
  -- Tout le monde n'a pas noté (ex. Protéger les données : 11 suivis, 10 notes)
  CHECK (notes_5 + notes_4 + notes_3 + notes_2 + notes_1 <= participants)
);

-- RLS activée sans policy : la table n'est lisible que via les fonctions
-- SECURITY DEFINER. Personne ne modifie ces chiffres depuis l'application.
ALTER TABLE stats_phase_pilote ENABLE ROW LEVEL SECURITY;

INSERT INTO stats_phase_pilote
  (formation_slug, participants, notes_5, notes_4, notes_3, notes_2, notes_1)
VALUES
  ('vieillissement-bases',             79, 70, 9, 0, 0, 0),
  ('vieillissement-approfondissement', 71, 66, 4, 1, 0, 0),
  ('vieillissement-expertise',         60, 55, 5, 0, 0, 0),
  ('mdhpph-2010',                      64, 59, 3, 2, 0, 0),
  ('curatelles-protection-adulte',     53, 48, 3, 2, 0, 0),
  ('protection-donnees',               11,  8, 1, 1, 0, 0),
  ('gestion-projet-base',              21, 20, 1, 0, 0, 0),
  ('gestion-projet-intermediaire',     20, 17, 3, 0, 0, 0),
  ('gestion-projet-avance',            20, 19, 1, 0, 0, 0),
  ('demence-sensibilisation',          12, 11, 1, 0, 0, 0),
  ('transition-age-adulte',             8,  5, 3, 0, 0, 0),
  ('familles-secteur-adulte',          32, 25, 7, 0, 0, 0)
ON CONFLICT (formation_slug) DO NOTHING;

-- Délibération éthique : deux slugs coexistent dans l'historique des scripts
-- (20260609 vs supabase-update-deliberation.sql). On rattache les stats au
-- slug réellement présent en base, avec repli sur la variante 20260609.
INSERT INTO stats_phase_pilote
  (formation_slug, participants, notes_5, notes_4, notes_3, notes_2, notes_1)
SELECT
  COALESCE(
    (SELECT slug FROM formations
      WHERE slug IN ('deliberation-ethique-intervention-sociale',
                     'ethique-deliberation-intervention-sociale')
      LIMIT 1),
    'ethique-deliberation-intervention-sociale'
  ),
  48, 46, 2, 0, 0, 0
ON CONFLICT (formation_slug) DO NOTHING;

-- Fusion pilote + vivant. Remplace la version 20260706 : mêmes colonnes, mêmes
-- appelants (dashboard), seules les valeurs changent.
--
-- participants_count = attestations distinctes + participants pilotes.
-- note_moyenne       = moyenne pondérée des évaluations vivantes
--                      (recommandation, 1–5) et des notes pilotes (étoiles,
--                      1–5) — même échelle.
-- nb_evaluations     = évaluations vivantes + notes pilotes.
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
    COALESCE(part.participants_count, 0) + COALESCE(p.participants, 0)
      AS participants_count,
    CASE
      WHEN COALESCE(evals.nb_evaluations, 0) + COALESCE(pn.nb_notes, 0) > 0
      THEN ROUND(
        (COALESCE(evals.somme_notes, 0) + COALESCE(pn.somme_notes, 0))::numeric
          / (COALESCE(evals.nb_evaluations, 0) + COALESCE(pn.nb_notes, 0)),
        1
      )
    END AS note_moyenne,
    COALESCE(evals.nb_evaluations, 0) + COALESCE(pn.nb_notes, 0)
      AS nb_evaluations
  FROM formations f
  LEFT JOIN (
    SELECT formation_id, COUNT(DISTINCT profil_id) AS participants_count
    FROM attestations
    GROUP BY formation_id
  ) part ON part.formation_id = f.id
  LEFT JOIN (
    SELECT formation_id,
           SUM(recommandation)::numeric AS somme_notes,
           COUNT(*)                     AS nb_evaluations
    FROM evaluations_formations
    GROUP BY formation_id
  ) evals ON evals.formation_id = f.id
  LEFT JOIN stats_phase_pilote p ON p.formation_slug = f.slug
  LEFT JOIN LATERAL (
    SELECT
      (5 * p.notes_5 + 4 * p.notes_4 + 3 * p.notes_3
         + 2 * p.notes_2 + 1 * p.notes_1)::numeric AS somme_notes,
      (p.notes_5 + p.notes_4 + p.notes_3
         + p.notes_2 + p.notes_1)::bigint          AS nb_notes
  ) pn ON p.formation_slug IS NOT NULL
  WHERE f.est_publie = true;
$$;

-- `anon` en plus de l'existant : ces agrégats ont vocation à s'afficher sur
-- les pages publiques (aucune donnée individuelle ne sort de la fonction).
GRANT EXECUTE ON FUNCTION public.get_formations_populaires() TO anon, authenticated;
