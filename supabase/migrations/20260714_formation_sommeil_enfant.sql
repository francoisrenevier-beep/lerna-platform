-- ================================================================
-- CRÉATION : Formation "Le sommeil de l'enfant — sensibilisation"
-- 4 modules · Domaine Transversal · Niveau Base (sensibilisation)
-- Le contenu du module 1 est disponible ; les modules 2 à 4 sont
-- créés pour la structure et seront câblés à l'arrivée de leur contenu.
-- À exécuter dans l'éditeur SQL de Supabase Dashboard
-- ================================================================

-- Étape 1 : Insertion de la formation
INSERT INTO formations (
  id,
  titre,
  slug,
  description_courte,
  domaine,
  thematique,
  niveau,
  duree_estimee_minutes,
  public_cible,
  est_a_venir,
  est_nouveau
) VALUES (
  'd0d00001-0000-4000-8000-000000000000',
  'Le sommeil de l''enfant — sensibilisation',
  'sommeil-enfant-sensibilisation',
  'Comprendre pourquoi le sommeil est un besoin développemental fondamental, comment il évolue de la naissance à l''adolescence, ce qui le rend spécifique en institution — et comment observer et transmettre sans sortir de son rôle.',
  ARRAY['Transversal'],
  'Accompagnement',
  'base',
  120,
  'Tous les collaborateurs et collaboratrices',
  false,
  true
)
ON CONFLICT (id) DO NOTHING;

-- Étape 2 : Création des 4 modules (UUIDs fixes pour le câblage page.tsx)
INSERT INTO modules (id, formation_id, titre, description, ordre, duree_minutes, type) VALUES
  (
    'd0d00001-0001-4000-8000-000000000001',
    'd0d00001-0000-4000-8000-000000000000',
    'Comprendre le sommeil de l''enfant et de l''adolescent',
    'Pourquoi le sommeil est un besoin développemental fondamental : consolider les apprentissages, réguler les émotions, soutenir la croissance. Cycles et stades, besoins selon les âges, variabilité normale — et pourquoi un enfant fatigué ne ressemble pas à un adulte fatigué.',
    1, 30, 'texte'
  ),
  (
    'd0d00001-0002-4000-8000-000000000002',
    'd0d00001-0000-4000-8000-000000000000',
    'Le sommeil en institution : dormir hors de chez soi',
    'Ce qui rend le sommeil en institution spécifique : dormir hors de chez soi, dormir après des ruptures, dormir dans un lieu partagé — et le rôle de la sécurité affective dans l''endormissement.',
    2, 30, 'texte'
  ),
  (
    'd0d00001-0003-4000-8000-000000000003',
    'd0d00001-0000-4000-8000-000000000000',
    'Accompagner le coucher et la nuit',
    'Le quotidien nocturne : accompagner le coucher, distinguer ce qui relève du déroulement normal du sommeil de ce qui appelle une présence — le discernement au cœur du travail de la veille de nuit.',
    3, 30, 'texte'
  ),
  (
    'd0d00001-0004-4000-8000-000000000004',
    'd0d00001-0000-4000-8000-000000000000',
    'Observer, transmettre, orienter',
    'Repérer les signes d''un sommeil insuffisant dans la durée, observer utilement, savoir quand et comment transmettre — sans sortir de son rôle : observer n''est pas diagnostiquer.',
    4, 30, 'texte'
  )
ON CONFLICT (id) DO NOTHING;
