-- Ajoute le statut "à venir" pour les formations sans contenu
alter table formations
  add column if not exists est_a_venir boolean not null default false;
