-- Bucket public pour les fichiers de ressources (PDF, etc.)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'ressources',
  'ressources',
  true,
  52428800, -- 50 MB
  ARRAY[
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/msword',
    'image/png',
    'image/jpeg'
  ]
)
ON CONFLICT (id) DO NOTHING;

-- Lecture publique (le bucket est public, cette policy est explicite pour clarté)
CREATE POLICY "ressources_public_select"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'ressources');

-- Upload réservé aux super admins
CREATE POLICY "ressources_super_admin_insert"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'ressources'
  AND EXISTS (
    SELECT 1 FROM profils
    WHERE profils.id = auth.uid()
    AND profils.est_super_admin = true
  )
);

-- Mise à jour réservée aux super admins
CREATE POLICY "ressources_super_admin_update"
ON storage.objects FOR UPDATE
TO authenticated
USING (
  bucket_id = 'ressources'
  AND EXISTS (
    SELECT 1 FROM profils
    WHERE profils.id = auth.uid()
    AND profils.est_super_admin = true
  )
)
WITH CHECK (
  bucket_id = 'ressources'
  AND EXISTS (
    SELECT 1 FROM profils
    WHERE profils.id = auth.uid()
    AND profils.est_super_admin = true
  )
);

-- Suppression réservée aux super admins
CREATE POLICY "ressources_super_admin_delete"
ON storage.objects FOR DELETE
TO authenticated
USING (
  bucket_id = 'ressources'
  AND EXISTS (
    SELECT 1 FROM profils
    WHERE profils.id = auth.uid()
    AND profils.est_super_admin = true
  )
);
