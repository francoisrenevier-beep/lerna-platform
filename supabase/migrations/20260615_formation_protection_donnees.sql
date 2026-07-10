-- ================================================================
-- CRÉATION : Formation "Protéger les données, protéger les personnes"
-- Parcours de sensibilisation · 3 modules · Domaine Transversal
-- À exécuter dans l'éditeur SQL de Supabase Dashboard
-- ================================================================

-- Étape 1 : Insertion de la formation
INSERT INTO formations (
  titre,
  slug,
  description_courte,
  domaine,
  thematique,
  niveau,
  duree_estimee_minutes,
  public_cible,
  est_a_venir,
  est_nouveau,
  est_privee
) VALUES (
  'Protéger les données, protéger les personnes',
  'protection-donnees',
  'Sensibilisation à l''attention portée aux données personnelles dans le travail social et médico-social — réflexes concrets, droits des personnes et culture du signalement.',
  ARRAY['Transversal'],
  'Éthique et pratiques',
  'tous',
  80,
  'Tous les collaborateurs d''une institution, toutes fonctions',
  false,
  true,
  false
);

-- Étape 2 : Création des 3 modules (UUIDs fixes pour le câblage page.tsx)
DO $$
DECLARE
  fid uuid;
BEGIN
  SELECT id INTO fid
  FROM formations
  WHERE slug = 'protection-donnees';

  INSERT INTO modules (id, formation_id, titre, description, ordre, duree_minutes, type) VALUES
    (
      'da7a0001-0001-4000-8000-000000000001',
      fid,
      'Voir les données là où elles sont',
      'Éveiller le regard : dans une institution sociale ou médico-sociale, les données sont partout — et presque toujours sensibles. Distinguer données personnelles et données sensibles, identifier les trois canaux de circulation (oral, papier, écran) et comprendre la responsabilité partagée.',
      1, 25, 'texte'
    ),
    (
      'da7a0001-0002-4000-8000-000000000002',
      fid,
      'Les bons réflexes au quotidien',
      'Quatre principes simples — le nécessaire, la bonne raison, la bonne personne, la sécurité — traduits en gestes concrets pour les situations que vous rencontrez vraiment. Le réflexe-clé : dans le doute, je m''abstiens et je demande.',
      2, 30, 'texte'
    ),
    (
      'da7a0001-0003-4000-8000-000000000003',
      fid,
      'Droits des personnes & que faire en cas de problème',
      'Les données appartiennent d''abord aux personnes accompagnées. Connaître leurs droits (information, accès, rectification, effacement, portabilité), adopter la culture du signalement en cas d''incident et savoir vers qui se tourner.',
      3, 25, 'texte'
    );
END $$;
