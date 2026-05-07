-- Ajouter updated_at à progression pour le suivi des jours d'activité (badge Assidu)
ALTER TABLE progression ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

CREATE OR REPLACE FUNCTION update_progression_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_progression_updated_at ON progression;
CREATE TRIGGER trg_progression_updated_at
  BEFORE UPDATE ON progression
  FOR EACH ROW EXECUTE FUNCTION update_progression_updated_at();

-- Table badges
CREATE TABLE IF NOT EXISTS badges (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  profil_id   UUID        NOT NULL REFERENCES profils(id) ON DELETE CASCADE,
  badge_id    TEXT        NOT NULL,
  obtenu_le   TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(profil_id, badge_id)
);

ALTER TABLE badges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Lecture des badges propres"
  ON badges FOR SELECT TO authenticated
  USING (profil_id = auth.uid());

CREATE POLICY "Insertion des badges propres"
  ON badges FOR INSERT TO authenticated
  WITH CHECK (profil_id = auth.uid());
