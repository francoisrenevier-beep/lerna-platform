-- Badge "Nouveau" sur les formations
ALTER TABLE formations ADD COLUMN IF NOT EXISTS est_nouveau BOOLEAN DEFAULT FALSE NOT NULL;
