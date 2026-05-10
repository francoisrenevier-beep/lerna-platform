-- Migration: champ domaine de text vers text[] dans la table formations
-- Permet à une formation d'appartenir à plusieurs domaines
-- Domaines valides : Handicap, Pédagogie Spécialisée, Protection des mineurs, Transversal

ALTER TABLE formations
  ALTER COLUMN domaine TYPE text[]
  USING CASE
    WHEN domaine IS NULL THEN NULL
    WHEN domaine = '' THEN '{}'::text[]
    ELSE ARRAY[domaine]
  END;
