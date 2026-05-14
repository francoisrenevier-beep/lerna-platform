-- RLS super admin : ressources (insert, update, delete)

CREATE POLICY "super_admin insere ressources"
  ON ressources FOR INSERT TO authenticated
  WITH CHECK (is_super_admin());

CREATE POLICY "super_admin modifie ressources"
  ON ressources FOR UPDATE TO authenticated
  USING (is_super_admin())
  WITH CHECK (is_super_admin());

CREATE POLICY "super_admin supprime ressources"
  ON ressources FOR DELETE TO authenticated
  USING (is_super_admin());

-- Bucket de stockage pour les fichiers de ressources

INSERT INTO storage.buckets (id, name, public)
VALUES ('ressources-docs', 'ressources-docs', true)
ON CONFLICT DO NOTHING;

CREATE POLICY "lecture publique ressources-docs"
  ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'ressources-docs');

CREATE POLICY "super_admin upload ressources-docs"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'ressources-docs' AND is_super_admin());

CREATE POLICY "super_admin supprime ressources-docs"
  ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'ressources-docs' AND is_super_admin());
