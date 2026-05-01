-- Table pour stocker les demandes de démonstration depuis la page d'accueil publique
create table if not exists demandes_demo (
  id          uuid primary key default gen_random_uuid(),
  prenom      text not null,
  nom         text not null,
  institution text not null,
  email       text not null,
  telephone   text,
  message     text,
  created_at  timestamptz not null default now()
);

-- Activation de la RLS
alter table demandes_demo enable row level security;

-- Politique : insertion publique sans authentification
create policy "insertion publique demandes_demo"
  on demandes_demo
  for insert
  to anon
  with check (true);

-- Politique : lecture réservée aux utilisateurs authentifiés (admins)
create policy "lecture authentifiee demandes_demo"
  on demandes_demo
  for select
  to authenticated
  using (true);
