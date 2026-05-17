-- Migration: renommer "approfondissement" en "intermédiaire"

-- 1. Supprimer l'ancienne contrainte
ALTER TABLE formations DROP CONSTRAINT IF EXISTS formations_niveau_check;

-- 2. Renommer la valeur existante
UPDATE formations SET niveau = 'intermédiaire' WHERE niveau = 'approfondissement';

-- 3. Ajouter la nouvelle contrainte
ALTER TABLE formations
  ADD CONSTRAINT formations_niveau_check
  CHECK (niveau IN ('base', 'intermédiaire', 'confirme', 'tous'));
