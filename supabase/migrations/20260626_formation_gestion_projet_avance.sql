-- ================================================================
-- CRÉATION : Formation "Piloter le changement institutionnel"
-- LEARNA — Gestion de projet en contexte institutionnel · Niveau 3 Avancé
-- 6 modules · Domaine Transversal · Public : cadres, chefs d'équipe, directions de proximité
-- Prérequis : niveau 2 — Intermédiaire recommandé
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
  'Piloter le changement institutionnel',
  'gestion-projet-avance',
  'L''accès au piloter : passer du projet d''équipe au projet d''établissement, retenir l''esprit agile pour avancer là où le besoin évolue, raisonner en impact sur les personnes sans tomber dans la performance déshumanisante, conduire le changement en accompagnant les résistances, structurer la gouvernance et décider dans l''incertitude, évaluer, pérenniser et tenir la posture éthique du pilote.',
  ARRAY['Transversal'],
  'Gestion de projet',
  'avance',
  160,
  'Cadres, chefs d''équipe, directions de proximité — niveau 2 Intermédiaire recommandé',
  false,
  true,
  false
);

-- Étape 2 : Création des 6 modules (UUIDs fixes pour le câblage page.tsx)
DO $$
DECLARE
  fid uuid;
BEGIN
  SELECT id INTO fid
  FROM formations
  WHERE slug = 'gestion-projet-avance';

  INSERT INTO modules (id, formation_id, titre, description, ordre, duree_minutes, type) VALUES
    (
      '9e7b0003-0001-4000-8000-000000000001',
      fid,
      'Du projet d''équipe au projet d''établissement',
      'Ce qui change quand on franchit le seuil d''échelle : piloter n''est pas conduire à plus grande échelle, c''est orienter un système qu''on ne maîtrise pas entièrement. Les quatre spécificités des projets structurants et le rôle du projet d''établissement comme boussole.',
      1, 28, 'texte'
    ),
    (
      '9e7b0003-0002-4000-8000-000000000002',
      fid,
      'L''approche agile adaptée au social',
      'Avancer par cycles courts là où le besoin évolue. L''esprit agile — pas le framework technique — appliqué à l''accompagnement de personnes. La logique itérative, ses avantages et ses limites essentielles.',
      2, 28, 'texte'
    ),
    (
      '9e7b0003-0003-4000-8000-000000000003',
      fid,
      'Le modèle d''impact : raisonner en effets sur les personnes',
      'Module différenciant du parcours : construire une logique d''impact sans tomber dans la performance déshumanisante. La théorie du changement (ressources → activités → effets → impact), la primauté du qualitatif dans le social, et la tension éthique de mesurer sans réduire.',
      3, 28, 'texte'
    ),
    (
      '9e7b0003-0004-4000-8000-000000000004',
      fid,
      'Conduire le changement et accompagner les résistances',
      'On ne décrète pas un changement : on l''accompagne. Les trois leviers de l''adhésion (sens, participation, rythme), les résistances comme informations à entendre plutôt qu''obstacles à briser, et la posture du pilote face aux tensions.',
      4, 28, 'texte'
    ),
    (
      '9e7b0003-0005-4000-8000-000000000005',
      fid,
      'Gouvernance et pilotage',
      'Structurer la conduite d''un projet d''envergure sans bureaucratie. Le comité de pilotage, l''art de l''arbitrage, la mobilisation réaliste des ressources, le tableau de bord sobre, et la compétence centrale : décider dans l''incertitude.',
      5, 28, 'texte'
    ),
    (
      '9e7b0003-0006-4000-8000-000000000006',
      fid,
      'Évaluer, pérenniser, et la posture éthique du pilote',
      'Ancrer durablement le changement et tenir le sens jusqu''au bout. Évaluer les effets réels (pas la réalisation), pérenniser jusqu''à la culture commune, et la posture éthique du pilote — fondement de tout le reste — en trois exigences : sens, participation, respect des personnes.',
      6, 28, 'texte'
    );
END $$;
