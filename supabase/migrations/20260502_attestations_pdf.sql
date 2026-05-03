-- Ajout de la colonne pdf_url à la table attestations
alter table attestations add column if not exists pdf_url text;

-- Création du bucket de stockage pour les PDFs d'attestations
insert into storage.buckets (id, name, public)
values ('attestations', 'attestations', true)
on conflict (id) do nothing;

-- Politique : les utilisateurs authentifiés peuvent uploader leurs attestations
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'storage'
      and tablename = 'objects'
      and policyname = 'Authenticated users upload attestation PDFs'
  ) then
    create policy "Authenticated users upload attestation PDFs"
      on storage.objects
      for insert
      to authenticated
      with check (bucket_id = 'attestations');
  end if;
end $$;

-- Politique : lecture publique des PDFs
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'storage'
      and tablename = 'objects'
      and policyname = 'Public read attestation PDFs'
  ) then
    create policy "Public read attestation PDFs"
      on storage.objects
      for select
      to public
      using (bucket_id = 'attestations');
  end if;
end $$;

-- Politique : les utilisateurs peuvent mettre à jour leurs propres PDFs
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'storage'
      and tablename = 'objects'
      and policyname = 'Authenticated users update attestation PDFs'
  ) then
    create policy "Authenticated users update attestation PDFs"
      on storage.objects
      for update
      to authenticated
      using (bucket_id = 'attestations');
  end if;
end $$;
