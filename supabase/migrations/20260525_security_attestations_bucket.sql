-- Ajouter un contrôle d'ownership sur les policies INSERT et UPDATE du bucket
-- attestations. Sans cette correction, tout utilisateur authentifié pouvait
-- écraser le PDF d'attestation d'un autre utilisateur.
--
-- Convention de chemin attendue : {user_uuid}/{filename}
-- Le premier segment du chemin doit correspondre à auth.uid().

DROP POLICY IF EXISTS "Authenticated users upload attestation PDFs" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users update attestation PDFs" ON storage.objects;

CREATE POLICY "Authenticated users upload attestation PDFs"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'attestations'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "Authenticated users update attestation PDFs"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'attestations'
    AND (storage.foldername(name))[1] = auth.uid()::text
  )
  WITH CHECK (
    bucket_id = 'attestations'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );
