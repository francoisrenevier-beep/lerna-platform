-- ================================================================
-- CRÉATION : Formation "Le projet, une démarche partagée"
-- LEARNA — Gestion de projet en contexte institutionnel · Niveau 1 Base
-- 5 modules · Domaine Transversal · Public : tous les professionnels
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
  'Le projet, une démarche partagée',
  'gestion-projet-base',
  'Reconnaître un projet et le distinguer de la routine, comprendre le cycle de vie en quatre phases, voir la démarche projet au cœur de l''accompagnement, et partager le même vocabulaire de base avec toute l''équipe.',
  ARRAY['Transversal'],
  'Gestion de projet',
  'tous',
  110,
  'Tous les professionnels d''accompagnement, sans prérequis — porte d''entrée du parcours Gestion de projet',
  false,
  true,
  false
);

-- Étape 2 : Création des 5 modules (UUIDs fixes pour le câblage page.tsx)
DO $$
DECLARE
  fid uuid;
BEGIN
  SELECT id INTO fid
  FROM formations
  WHERE slug = 'gestion-projet-base';

  INSERT INTO modules (id, formation_id, titre, description, ordre, duree_minutes, type) VALUES
    (
      '9e7b0001-0001-4000-8000-000000000001',
      fid,
      'Qu''est-ce qu''un projet ?',
      'Reconnaître la démarche projet là où on ne la nomme pas. Les quatre éléments qui font un projet (intention, objectif, temps donné, changement), la distinction avec la tâche et la routine, et pourquoi un projet est d''abord une démarche avant d''être un outil.',
      1, 25, 'texte'
    ),
    (
      '9e7b0001-0002-4000-8000-000000000002',
      fid,
      'Le cycle de vie d''un projet',
      'Quatre phases pour ne pas avancer à l''aveugle : imaginer, préparer, réaliser, évaluer. Ce que chaque phase protège, pourquoi aucune n''est facultative, et comment un cycle vivant autorise les allers-retours conscients.',
      2, 25, 'texte'
    ),
    (
      '9e7b0001-0003-4000-8000-000000000003',
      fid,
      'Le projet d''accompagnement individualisé',
      'La démarche projet vécue au cœur du métier : les quatre phases à l''œuvre dans l''accompagnement, la spécificité d''un cycle qui se renouvelle, et l''enjeu décisif du « faire avec » plutôt que « faire pour ».',
      3, 25, 'texte'
    ),
    (
      '9e7b0001-0004-4000-8000-000000000004',
      fid,
      'La place de chacun dans un projet',
      'Pourquoi tous les métiers comptent et le pouvoir du regard partagé. Trois rôles à distinguer (porter, contribuer, décider) sans hiérarchiser les personnes. La diversité des métiers comme ressource principale du projet.',
      4, 25, 'texte'
    ),
    (
      '9e7b0001-0005-4000-8000-000000000005',
      fid,
      'Le vocabulaire de base du projet',
      'Six mots clés — objectif, étape, jalon, rôle, livrable, échéance — pour parler le même langage et participer pleinement à une démarche projet. Ces mots comme grille de lecture de la solidité d''un projet.',
      5, 20, 'texte'
    );
END $$;
