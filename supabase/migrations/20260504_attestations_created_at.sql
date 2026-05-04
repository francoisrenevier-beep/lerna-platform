-- Ajout de la colonne created_at à la table attestations
alter table attestations
  add column if not exists created_at timestamptz not null default now();
