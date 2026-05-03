-- Politiques RLS pour la table attestations
-- Permet aux utilisateurs authentifiés de lire et écrire leurs propres attestations

alter table attestations enable row level security;

-- Lecture : chaque utilisateur voit ses propres attestations
do $$ begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'attestations'
    and policyname = 'Users read own attestations'
  ) then
    create policy "Users read own attestations"
      on attestations for select
      to authenticated
      using (profil_id = auth.uid());
  end if;
end $$;

-- Insertion : chaque utilisateur peut insérer ses propres attestations
do $$ begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'attestations'
    and policyname = 'Users insert own attestations'
  ) then
    create policy "Users insert own attestations"
      on attestations for insert
      to authenticated
      with check (profil_id = auth.uid());
  end if;
end $$;

-- Mise à jour : chaque utilisateur peut mettre à jour ses propres attestations
do $$ begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'attestations'
    and policyname = 'Users update own attestations'
  ) then
    create policy "Users update own attestations"
      on attestations for update
      to authenticated
      using (profil_id = auth.uid());
  end if;
end $$;
