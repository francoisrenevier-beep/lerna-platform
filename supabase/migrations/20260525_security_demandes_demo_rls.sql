-- Restreindre la lecture des demandes de démo aux super_admins uniquement.
-- Avant cette migration, tout utilisateur authentifié pouvait lire toutes les
-- demandes (PII : nom, email, téléphone, institution).

DROP POLICY IF EXISTS "lecture authentifiee demandes_demo" ON demandes_demo;

CREATE POLICY "lecture super_admin demandes_demo"
  ON demandes_demo
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profils
      WHERE profils.id = auth.uid()
        AND profils.est_super_admin = true
    )
  );
