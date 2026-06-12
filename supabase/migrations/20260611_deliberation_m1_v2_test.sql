-- ================================================================
-- TEST V2 — Module 1 : Le Paysage de l'Éthique — Fondements et délibération
-- Nouvelle formation de test pour la refonte du Module 1 Délibération.
-- NE PAS exécuter sans validation — laisser l'équipe l'appliquer manuellement.
--
-- UUID formation : de1b2001-0000-4000-8000-000000000000
-- UUID module    : de1b2001-0000-4000-8000-000000000001
-- Slug formation : ethique-deliberation-m1-v2-test
--
-- NOTE sur le slug de la formation existante :
-- La migration 20260609 référence 'ethique-deliberation-intervention-sociale'.
-- Le fichier supabase-update-deliberation.sql (hors migrations) avait mis
-- 'deliberation-ethique-intervention-sociale'. Vérifier le slug réel en base
-- avant toute opération sur la formation parente.
-- ================================================================

-- ── 1. Création de la formation de test ──────────────────────────────────────

INSERT INTO formations (
  id,
  titre,
  description_courte,
  slug,
  niveau,
  duree_estimee_minutes,
  domaine,
  thematique,
  public_cible,
  est_publie,
  est_a_venir,
  nb_modules_total
) VALUES (
  'de1b2001-0000-4000-8000-000000000000',
  '[TEST V2] Le Paysage de l''Éthique — Module 1 Délibération',
  'Formation de test interne — refonte du Module 1 de la formation La Délibération Éthique dans l''Intervention Sociale.',
  'ethique-deliberation-m1-v2-test',
  'intermediaire',
  40,
  ARRAY['Transversal'],
  'Éthique et posture',
  'Équipe de test interne — non destiné aux apprenants',
  true,
  false,
  1
) ON CONFLICT (id) DO NOTHING;

-- ── 2. Création du module de test ────────────────────────────────────────────

INSERT INTO modules (
  id,
  formation_id,
  titre,
  description,
  ordre,
  duree_minutes,
  type
) VALUES (
  'de1b2001-0000-4000-8000-000000000001',
  'de1b2001-0000-4000-8000-000000000000',
  'Le Paysage de l''Éthique — Fondements et délibération (V2 test)',
  'Distinguer éthique et morale (Ricœur, tableau comparatif), découvrir le triangle Je–Tu–Institution, les quatre boussoles éthiques, et rencontrer Madame De Montmollin. Version refondue pour test pédagogique.',
  1,
  40,
  'texte'
) ON CONFLICT (id) DO NOTHING;

-- ── 3. Accès lecture explicite pour les rôles Supabase ───────────────────────
-- Les politiques RLS existantes sur formations et modules couvrent l'accès
-- ligne par ligne. Ces GRANTs confirment l'accès table pour anon et authenticated.

GRANT SELECT ON formations TO anon, authenticated;
GRANT SELECT ON modules TO anon, authenticated;
