-- Migration: mise à jour de la contrainte niveau sur formations
-- Remplace "Niveau 1/2/3" par la terminologie base/approfondissement/confirme/tous

-- 1. Convertir les anciennes valeurs existantes
UPDATE formations SET niveau = 'base'             WHERE niveau = 'Niveau 1';
UPDATE formations SET niveau = 'approfondissement' WHERE niveau = 'Niveau 2';
UPDATE formations SET niveau = 'confirme'          WHERE niveau = 'Niveau 3';

-- 2. Supprimer l'ancienne contrainte
ALTER TABLE formations DROP CONSTRAINT IF EXISTS formations_niveau_check;

-- 3. Ajouter la nouvelle contrainte avec les bonnes valeurs
ALTER TABLE formations
  ADD CONSTRAINT formations_niveau_check
  CHECK (niveau IN ('base', 'approfondissement', 'confirme', 'tous'));
