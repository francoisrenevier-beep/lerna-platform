-- ============================================================
-- Super Admin : colonne est_super_admin dans profils
-- ============================================================

ALTER TABLE profils
  ADD COLUMN IF NOT EXISTS est_super_admin BOOLEAN NOT NULL DEFAULT false;

-- ============================================================
-- Champ "traite" dans demandes_demo
-- ============================================================

ALTER TABLE demandes_demo
  ADD COLUMN IF NOT EXISTS traite BOOLEAN NOT NULL DEFAULT false;

-- Politique de mise à jour pour les super admins (demandes_demo)
CREATE POLICY "super_admin met a jour demandes_demo"
  ON demandes_demo FOR UPDATE TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profils
      WHERE id = auth.uid() AND est_super_admin = true
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profils
      WHERE id = auth.uid() AND est_super_admin = true
    )
  );

-- ============================================================
-- Fonction SECURITY DEFINER : vérifie si l'utilisateur est super admin
-- ============================================================

CREATE OR REPLACE FUNCTION is_super_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM profils
    WHERE id = auth.uid() AND est_super_admin = true
  );
$$;

-- ============================================================
-- RLS super admin : profils (lecture de tous les profils)
-- ============================================================

CREATE POLICY "super_admin lit tous les profils"
  ON profils FOR SELECT TO authenticated
  USING (is_super_admin());

-- ============================================================
-- RLS super admin : institutions (lecture et modification)
-- ============================================================

CREATE POLICY "super_admin lit toutes les institutions"
  ON institutions FOR SELECT TO authenticated
  USING (is_super_admin());

CREATE POLICY "super_admin modifie les institutions"
  ON institutions FOR UPDATE TO authenticated
  USING (is_super_admin())
  WITH CHECK (is_super_admin());

CREATE POLICY "super_admin insere les institutions"
  ON institutions FOR INSERT TO authenticated
  WITH CHECK (is_super_admin());

-- ============================================================
-- RLS super admin : institution_profils (lecture et insertion)
-- ============================================================

CREATE POLICY "super_admin lit tous les institution_profils"
  ON institution_profils FOR SELECT TO authenticated
  USING (is_super_admin());

CREATE POLICY "super_admin insere institution_profils"
  ON institution_profils FOR INSERT TO authenticated
  WITH CHECK (is_super_admin());

CREATE POLICY "super_admin modifie institution_profils"
  ON institution_profils FOR UPDATE TO authenticated
  USING (is_super_admin())
  WITH CHECK (is_super_admin());

-- ============================================================
-- RLS super admin : formations (lecture et modification)
-- ============================================================

ALTER TABLE formations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "lecture publique formations publiees"
  ON formations FOR SELECT TO authenticated
  USING (est_publie = true OR est_privee = false OR is_super_admin());

CREATE POLICY "super_admin lit toutes les formations"
  ON formations FOR SELECT TO authenticated
  USING (is_super_admin());

CREATE POLICY "super_admin modifie les formations"
  ON formations FOR UPDATE TO authenticated
  USING (is_super_admin())
  WITH CHECK (is_super_admin());

-- ============================================================
-- RLS super admin : progression, attestations (lecture globale)
-- ============================================================

CREATE POLICY "super_admin lit toute la progression"
  ON progression FOR SELECT TO authenticated
  USING (is_super_admin());

CREATE POLICY "super_admin lit toutes les attestations"
  ON attestations FOR SELECT TO authenticated
  USING (is_super_admin());

-- ============================================================
-- RLS super admin : evaluations_formations (lecture globale)
-- ============================================================

CREATE POLICY "super_admin lit toutes les evaluations"
  ON evaluations_formations FOR SELECT TO authenticated
  USING (is_super_admin());
