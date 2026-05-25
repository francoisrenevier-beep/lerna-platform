-- Rendre le bucket ressources privé : les fichiers de formation ne doivent pas
-- être accessibles sans authentification (contenu payant).

UPDATE storage.buckets
SET public = false
WHERE id = 'ressources';

-- Remplacer la policy de lecture publique par une lecture réservée aux utilisateurs
-- authentifiés (membres actifs d'une institution).
DROP POLICY IF EXISTS "ressources_public_select" ON storage.objects;

CREATE POLICY "ressources_authenticated_select"
  ON storage.objects
  FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'ressources'
    AND EXISTS (
      SELECT 1 FROM institution_profils ip
      WHERE ip.profil_id = auth.uid()
        AND ip.statut = 'actif'
    )
  );
