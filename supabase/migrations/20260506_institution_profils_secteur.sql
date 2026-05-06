-- Add secteur column to institution_profils
ALTER TABLE institution_profils
ADD COLUMN IF NOT EXISTS secteur text;
