-- Correction : MDH-PPH 2018 → 2010 dans les données de formation

-- Formation : description et slug
UPDATE formations
SET
  description = 'Cette formation e-learning de 5 modules vous donne toutes les clés pour comprendre et appliquer le Modèle de Développement Humain – Processus de Production du Handicap (MDH-PPH 2010) dans vos pratiques institutionnelles en Suisse romande. Du changement de paradigme à la transformation organisationnelle, en passant par l''analyse de situations complexes et la co-construction de plans d''accompagnement, chaque module articule rigueur conceptuelle et ancrage terrain.',
  description_courte = 'Comprendre et appliquer le MDH-PPH 2010 pour transformer les pratiques d''accompagnement en institution.',
  slug = 'mdhpph-2010'
WHERE id = '7c9261ff-ab67-4fbb-9dd1-25d5abd0a616';

-- Module 1 : description
UPDATE modules
SET description = 'Pourquoi le modèle médical ne suffit plus, la révolution MDH-PPH 2010 et l''équation fondamentale Facteurs Personnels × Facteurs Environnementaux = Habitudes de Vie.'
WHERE id = '49289005-4480-4137-88fa-673bc0d2d287';

-- Ressource : titre et description
UPDATE ressources
SET
  titre = 'Présentation officielle du MDH-PPH 2010 — RIPPH',
  description = 'Documentation officielle du Modèle de Développement Humain — Processus de Production du Handicap (MDH-PPH 2). Fougeyrollas et al., RIPPH, Québec, 2010.'
WHERE formation_id = '7c9261ff-ab67-4fbb-9dd1-25d5abd0a616'
  AND titre = 'Présentation officielle du MDH-PPH 2018 — RIPPH';
