-- ================================================================
-- CRÉATION : Formation "Prévenir et gérer la violence envers les professionnel·les"
-- 4 modules · Domaine Transversal · Niveau Base
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
  est_nouveau
) VALUES (
  'Prévenir et gérer la violence envers les professionnel·les',
  'violence-envers-professionnels',
  'Comprendre les mécanismes de la violence émanant des personnes accompagnées, savoir lire les situations à risque, adopter les attitudes qui désamorcent — et prendre soin de celles et ceux qui ont été touchés.',
  ARRAY['Transversal'],
  'Communication',
  'base',
  160,
  'Tous les collaborateurs et collaboratrices',
  false,
  true
);

-- Étape 2 : Création des 4 modules (UUIDs fixes pour le câblage page.tsx)
DO $$
DECLARE
  fid uuid;
BEGIN
  SELECT id INTO fid
  FROM formations
  WHERE slug = 'violence-envers-professionnels';

  INSERT INTO modules (id, formation_id, titre, description, ordre, duree_minutes, type) VALUES
    (
      'de5c0001-0001-4000-8000-000000000001',
      fid,
      'Comprendre la violence : mécanismes et dynamiques',
      'La violence n''est ni une fatalité du métier, ni un surgissement inexplicable. Définir la violence au travail, comprendre le passage à l''acte comme un processus, reconnaître les cinq phases du cycle de l''agression et lire les situations avec le modèle écologique.',
      1, 40, 'texte'
    ),
    (
      'de5c0001-0002-4000-8000-000000000002',
      fid,
      'La logique de prévention : lire les situations à risque',
      'Une institution apprenante ne cherche pas un coupable après un incident — elle cherche tout ce qui a rendu l''incident possible. Organisation apprenante, arbre des causes, situations à risque et cadre légal suisse (LTr art. 6, CO art. 328).',
      2, 40, 'texte'
    ),
    (
      'de5c0001-0003-4000-8000-000000000003',
      fid,
      'La logique d''intervention : désamorcer l''escalade',
      'Face à la tension qui monte, il existe des attitudes qui apaisent et des attitudes qui enflamment. Se situer dans le cycle de l''agression, appliquer les dix repères de la désescalade verbale et savoir quand la priorité bascule vers la sécurité.',
      3, 40, 'texte'
    ),
    (
      'de5c0001-0004-4000-8000-000000000004',
      fid,
      'La logique de postvention : réparer et apprendre',
      'Ce qui se passe après un incident détermine si l''institution en sort blessée ou grandie. Réactions normales, banalisation et victimisation secondaire, mesures d''aide validées, reprise relationnelle avec la personne accompagnée et retour d''expérience.',
      4, 40, 'texte'
    );
END $$;
