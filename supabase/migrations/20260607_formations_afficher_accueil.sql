-- Permet de sélectionner les formations affichées sur la page d'accueil
alter table formations
  add column if not exists afficher_accueil boolean not null default false;
