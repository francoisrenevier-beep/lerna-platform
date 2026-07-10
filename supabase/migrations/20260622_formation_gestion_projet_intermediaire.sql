-- ================================================================
-- CRÉATION : Formation "Conduire un projet en équipe"
-- LEARNA — Gestion de projet en contexte institutionnel · Niveau 2 Intermédiaire
-- 6 modules · Domaine Transversal · Public : professionnels en projets collectifs
-- Prérequis : niveau 1 — Base recommandé
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
  'Conduire un projet en équipe',
  'gestion-projet-intermediaire',
  'Le passage du comprendre au faire : cadrer un projet en partant du besoin réel, identifier et impliquer les parties prenantes, définir des objectifs SMART, planifier avec réalisme, clarifier les responsabilités et faire vivre le projet jusqu''au bout.',
  ARRAY['Transversal'],
  'Gestion de projet',
  'intermediaire',
  130,
  'Professionnels en projets collectifs, référents, futurs chefs d''équipe — niveau 1 Base recommandé',
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
  WHERE slug = 'gestion-projet-intermediaire';

  INSERT INTO modules (id, formation_id, titre, description, ordre, duree_minutes, type) VALUES
    (
      '9e7b0002-0001-4000-8000-000000000001',
      fid,
      'Cadrer un projet : du besoin à l''intention',
      'Le moment décisif où une idée floue devient un projet clair. Partir du besoin réel et non de la solution, délimiter le périmètre, nommer le livrable et le critère de réussite, mener le cadrage collectivement.',
      1, 25, 'texte'
    ),
    (
      '9e7b0002-0002-4000-8000-000000000002',
      fid,
      'Identifier les parties prenantes',
      'Cartographier toutes les personnes que le projet concerne — y compris la personne accompagnée de plein droit — et calibrer le niveau d''implication de chacun : informer, consulter, associer.',
      2, 25, 'texte'
    ),
    (
      '9e7b0002-0003-4000-8000-000000000003',
      fid,
      'Définir objectifs et sous-objectifs',
      'Transformer une intention vague en buts précis et atteignables. La grille SMART comme garde-fou (pas un carcan), la décomposition en sous-objectifs pour rendre le chemin praticable, et la vigilance sur la dérive de la mesure dans nos métiers.',
      3, 25, 'texte'
    ),
    (
      '9e7b0002-0004-4000-8000-000000000004',
      fid,
      'Planifier : étapes, jalons, séquençage',
      'Organiser le projet dans le temps sans usine à gaz. Étapes et jalons comme briques de base, le Gantt simplifié pour visualiser les dépendances, et l''estimation humble qui intègre la continuité de l''accompagnement.',
      4, 25, 'texte'
    ),
    (
      '9e7b0002-0005-4000-8000-000000000005',
      fid,
      'Clarifier les responsabilités',
      'Répondre explicitement au « qui fait quoi » en équipe pluridisciplinaire. Les quatre types de responsabilité (RACI), la règle d''un garant unique par tâche, et la matrice des responsabilités comme déclencheur de clarté.',
      5, 25, 'texte'
    ),
    (
      '9e7b0002-0006-4000-8000-000000000006',
      fid,
      'Faire vivre le projet : communiquer, animer, ajuster',
      'Maintenir la dynamique collective jusqu''au bilan. Faire circuler l''information juste, animer des réunions qui servent vraiment, ajuster sans renoncer ni s''entêter, et traiter les résistances comme des informations.',
      6, 25, 'texte'
    );
END $$;
