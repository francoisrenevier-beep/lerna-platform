ALTER TABLE institution_profils
ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT now();
