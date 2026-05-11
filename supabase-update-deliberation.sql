-- ================================================================
-- MISE À JOUR : Formation "La Délibération Éthique dans l'Intervention Sociale"
-- À exécuter dans l'éditeur SQL de Supabase Dashboard
-- ================================================================

-- Étape 1 : Mise à jour de la formation existante
UPDATE formations
SET
  titre                 = 'La Délibération Éthique dans l''Intervention Sociale',
  slug                  = 'deliberation-ethique-intervention-sociale',
  description_courte    = 'Comprendre, délibérer et décider avec justesse face aux dilemmes éthiques complexes du travail social',
  domaine               = ARRAY['Transversal'],
  thematique            = 'Éthique et posture',
  niveau                = 'intermediaire',
  duree_estimee_minutes = 240,
  public_cible          = 'Éducateurs sociaux, ASE, MSP, Infirmiers, Cadres institutionnels'
WHERE slug = 'ethique-en-pratique';

-- Étape 2 : Suppression des anciens modules
DELETE FROM modules
WHERE formation_id = (
  SELECT id FROM formations
  WHERE slug = 'deliberation-ethique-intervention-sociale'
);

-- Étape 3 : Création des 6 nouveaux modules (UUIDs fixes pour le câblage page.tsx)
DO $$
DECLARE
  fid uuid;
BEGIN
  SELECT id INTO fid
  FROM formations
  WHERE slug = 'deliberation-ethique-intervention-sociale';

  INSERT INTO modules (id, formation_id, titre, description, ordre, duree_minutes, type) VALUES
    (
      'de1b0001-0000-4000-8000-000000000001',
      fid,
      'Le Paysage de l''Éthique — Rappels fondamentaux',
      'Distinguer éthique et morale, découvrir le triangle de Ricœur et les quatre approches éthiques fondamentales.',
      1, 35, 'texte'
    ),
    (
      'de1b0002-0000-4000-8000-000000000002',
      fid,
      'L''Éthique des Vertus — La sagesse pratique au cœur du professionnel',
      'La phronesis aristotélicienne, les figures exemplaires et le développement des vertus professionnelles.',
      2, 40, 'texte'
    ),
    (
      'de1b0003-0000-4000-8000-000000000003',
      fid,
      'L''Éthique de la Discussion — De l''individu au collectif',
      'La pensée d''Habermas : décentrement de l''ego, autorité épistémique et construction collective du consensus.',
      3, 40, 'texte'
    ),
    (
      'de1b0004-0000-4000-8000-000000000004',
      fid,
      'La Méthode de Délibération — Structurer pour décider',
      'La méthode de Legault, les comités d''éthique, et la distinction entre consensus réel et consensus artificiel.',
      4, 45, 'texte'
    ),
    (
      'de1b0005-0000-4000-8000-000000000005',
      fid,
      'Mise en Pratique — Le cas de Madame De Montmollin',
      'Analyse guidée d''un dilemme éthique réel à travers les quatre prismes : vertus, déontologie, utilitarisme, care.',
      5, 45, 'texte'
    ),
    (
      'de1b0006-0000-4000-8000-000000000006',
      fid,
      'Intégration — L''éthique dans l''institution',
      'Posture professionnelle éthique, culture d''équipe et équilibre réfléchi entre principes et situations.',
      6, 35, 'texte'
    );
END;
$$;
