-- Ajoute nb_modules_total à la table formations (calculé depuis les modules)
alter table formations
  add column if not exists nb_modules_total integer;
