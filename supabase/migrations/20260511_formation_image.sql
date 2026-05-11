-- Colonne image URL pour les formations
ALTER TABLE formations ADD COLUMN IF NOT EXISTS image_url TEXT;

-- Bucket Supabase Storage pour les images de formation
INSERT INTO storage.buckets (id, name, public)
VALUES ('formation-images', 'formation-images', true)
ON CONFLICT (id) DO NOTHING;

-- Politique lecture publique (tous les utilisateurs authentifiés)
CREATE POLICY "Formation images are publicly readable"
ON storage.objects FOR SELECT
USING (bucket_id = 'formation-images');

-- Politique upload réservée aux super admins
CREATE POLICY "Super admins can upload formation images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'formation-images'
  AND EXISTS (
    SELECT 1 FROM profils
    WHERE id = auth.uid()
    AND est_super_admin = true
  )
);

-- Politique update/delete réservée aux super admins
CREATE POLICY "Super admins can update formation images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'formation-images'
  AND EXISTS (
    SELECT 1 FROM profils
    WHERE id = auth.uid()
    AND est_super_admin = true
  )
);

CREATE POLICY "Super admins can delete formation images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'formation-images'
  AND EXISTS (
    SELECT 1 FROM profils
    WHERE id = auth.uid()
    AND est_super_admin = true
  )
);
