-- ─── Table principale des parcours de formation ─────────────────────────────
CREATE TABLE IF NOT EXISTS parcours (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titre TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  description_courte TEXT,
  image_url TEXT,
  est_publie BOOLEAN DEFAULT FALSE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─── Liaison ordonnée parcours ↔ formations ──────────────────────────────────
CREATE TABLE IF NOT EXISTS parcours_formations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parcours_id UUID NOT NULL REFERENCES parcours(id) ON DELETE CASCADE,
  formation_id UUID NOT NULL REFERENCES formations(id) ON DELETE CASCADE,
  ordre INTEGER NOT NULL DEFAULT 1,
  UNIQUE(parcours_id, formation_id)
);

-- ─── Attestations de parcours ────────────────────────────────────────────────
-- Générée automatiquement quand toutes les formations du parcours sont terminées
CREATE TABLE IF NOT EXISTS attestations_parcours (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profil_id UUID NOT NULL,
  parcours_id UUID NOT NULL REFERENCES parcours(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(profil_id, parcours_id)
);

-- ─── RLS ────────────────────────────────────────────────────────────────────
ALTER TABLE parcours ENABLE ROW LEVEL SECURITY;
ALTER TABLE parcours_formations ENABLE ROW LEVEL SECURITY;
ALTER TABLE attestations_parcours ENABLE ROW LEVEL SECURITY;

-- Parcours : lisible si publié ou super admin
CREATE POLICY "parcours_select" ON parcours FOR SELECT TO authenticated
  USING (est_publie = true OR is_super_admin());
CREATE POLICY "parcours_insert" ON parcours FOR INSERT TO authenticated
  WITH CHECK (is_super_admin());
CREATE POLICY "parcours_update" ON parcours FOR UPDATE TO authenticated
  USING (is_super_admin());
CREATE POLICY "parcours_delete" ON parcours FOR DELETE TO authenticated
  USING (is_super_admin());

-- Liaisons parcours-formations : lecture libre pour authentifiés
CREATE POLICY "parcours_formations_select" ON parcours_formations FOR SELECT TO authenticated
  USING (true);
CREATE POLICY "parcours_formations_insert" ON parcours_formations FOR INSERT TO authenticated
  WITH CHECK (is_super_admin());
CREATE POLICY "parcours_formations_update" ON parcours_formations FOR UPDATE TO authenticated
  USING (is_super_admin());
CREATE POLICY "parcours_formations_delete" ON parcours_formations FOR DELETE TO authenticated
  USING (is_super_admin());

-- Attestations parcours : lecture par le propriétaire ou super admin
CREATE POLICY "attestations_parcours_select" ON attestations_parcours FOR SELECT TO authenticated
  USING (profil_id = auth.uid() OR is_super_admin());
CREATE POLICY "attestations_parcours_insert" ON attestations_parcours FOR INSERT TO authenticated
  WITH CHECK (profil_id = auth.uid());
