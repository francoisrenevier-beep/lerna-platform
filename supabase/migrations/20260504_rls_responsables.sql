-- Ajoute la colonne licence_expiration à institutions si elle n'existe pas déjà
alter table institutions
  add column if not exists licence_expiration date;

-- ============================================================
-- RLS : les responsables peuvent lire les profils de leur institution
-- ============================================================
alter table profils enable row level security;

create policy "responsable lit profils de son institution"
  on profils
  for select
  to authenticated
  using (
    -- L'utilisateur peut toujours lire son propre profil
    id = auth.uid()
    or
    -- Un responsable peut lire les profils des collaborateurs de son institution
    exists (
      select 1
      from institution_profils resp
      join institution_profils collab on collab.institution_id = resp.institution_id
      where resp.profil_id = auth.uid()
        and resp.role = 'responsable'
        and resp.statut = 'actif'
        and collab.profil_id = profils.id
    )
  );

-- ============================================================
-- RLS : les responsables peuvent lire la progression de leurs collaborateurs
-- ============================================================
alter table progression enable row level security;

create policy "utilisateur lit sa propre progression"
  on progression
  for select
  to authenticated
  using (profil_id = auth.uid());

create policy "responsable lit progression de son institution"
  on progression
  for select
  to authenticated
  using (
    exists (
      select 1
      from institution_profils resp
      join institution_profils collab on collab.institution_id = resp.institution_id
      where resp.profil_id = auth.uid()
        and resp.role = 'responsable'
        and resp.statut = 'actif'
        and collab.profil_id = progression.profil_id
    )
  );

create policy "utilisateur gere sa propre progression"
  on progression
  for all
  to authenticated
  using (profil_id = auth.uid())
  with check (profil_id = auth.uid());

-- ============================================================
-- RLS : les responsables peuvent lire les attestations de leurs collaborateurs
-- ============================================================
alter table attestations enable row level security;

create policy "utilisateur lit ses propres attestations"
  on attestations
  for select
  to authenticated
  using (profil_id = auth.uid());

create policy "responsable lit attestations de son institution"
  on attestations
  for select
  to authenticated
  using (
    exists (
      select 1
      from institution_profils resp
      join institution_profils collab on collab.institution_id = resp.institution_id
      where resp.profil_id = auth.uid()
        and resp.role = 'responsable'
        and resp.statut = 'actif'
        and collab.profil_id = attestations.profil_id
    )
  );

create policy "utilisateur gere ses propres attestations"
  on attestations
  for all
  to authenticated
  using (profil_id = auth.uid())
  with check (profil_id = auth.uid());

-- ============================================================
-- RLS : les responsables peuvent modifier le statut dans institution_profils
-- ============================================================
alter table institution_profils enable row level security;

create policy "utilisateur lit ses propres liaisons"
  on institution_profils
  for select
  to authenticated
  using (profil_id = auth.uid());

create policy "responsable lit liaisons de son institution"
  on institution_profils
  for select
  to authenticated
  using (
    exists (
      select 1
      from institution_profils resp
      where resp.profil_id = auth.uid()
        and resp.role = 'responsable'
        and resp.statut = 'actif'
        and resp.institution_id = institution_profils.institution_id
    )
  );

create policy "responsable modifie statut collaborateurs"
  on institution_profils
  for update
  to authenticated
  using (
    exists (
      select 1
      from institution_profils resp
      where resp.profil_id = auth.uid()
        and resp.role = 'responsable'
        and resp.statut = 'actif'
        and resp.institution_id = institution_profils.institution_id
    )
  )
  with check (
    exists (
      select 1
      from institution_profils resp
      where resp.profil_id = auth.uid()
        and resp.role = 'responsable'
        and resp.statut = 'actif'
        and resp.institution_id = institution_profils.institution_id
    )
  );

create policy "utilisateur insere sa propre liaison"
  on institution_profils
  for insert
  to authenticated
  with check (profil_id = auth.uid());

-- ============================================================
-- RLS : lecture des institutions par les membres authentifiés
-- ============================================================
alter table institutions enable row level security;

create policy "membre lit son institution"
  on institutions
  for select
  to authenticated
  using (
    exists (
      select 1
      from institution_profils ip
      where ip.profil_id = auth.uid()
        and ip.institution_id = institutions.id
    )
  );

-- Lecture publique pour valider le code lors de l'inscription
create policy "lecture publique institutions pour inscription"
  on institutions
  for select
  to anon
  using (true);
