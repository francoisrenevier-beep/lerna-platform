-- Formation : Démence : sensibilisation générale (Niveau 1)
-- 4 modules · Slug : demence-sensibilisation
-- Domaine : vieillissement-grand-age (nouvelle catégorie)

insert into formations (
  id,
  titre,
  description,
  description_courte,
  slug,
  categorie,
  niveau,
  duree_estimee_minutes,
  domaine,
  thematique,
  public_cible,
  est_publie,
  est_a_venir
) values (
  'd3ce0001-0000-4000-8000-000000000000',
  'Démence : sensibilisation générale',
  'Formation de sensibilisation générale à la démence. Comprendre l''ampleur du phénomène, ce qu''est la démence, reconnaître les signes observables, adopter une posture d''accompagnement adaptée et se situer dans son rôle.',
  'Comprendre la démence, reconnaître les signes et adopter une posture d''accompagnement adaptée au quotidien.',
  'demence-sensibilisation',
  'Vieillissement et grand âge',
  'base',
  120,
  '{"vieillissement-grand-age"}',
  'Accompagnement',
  'Personnel mixte (soins + accompagnement), pool de remplacement, professions connexes',
  true,
  false
)
on conflict (id) do nothing;

-- Module 1 — La démence en chiffres et en réalité
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'd3ce0001-0001-4000-8000-000000000001',
  'd3ce0001-0000-4000-8000-000000000000',
  'La démence en chiffres et en réalité',
  'Situer l''ampleur de la démence en Suisse et dans le monde, déconstruire les idées reçues les plus fréquentes.',
  1, 30, 'texte'
) on conflict (id) do nothing;

-- Module 2 — Qu'est-ce que la démence, concrètement ?
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'd3ce0001-0002-4000-8000-000000000002',
  'd3ce0001-0000-4000-8000-000000000000',
  'Qu''est-ce que la démence, concrètement ?',
  'Définition, distinction vieillissement normal / trouble pathologique, principales formes, et ce que la personne vit de l''intérieur.',
  2, 30, 'texte'
) on conflict (id) do nothing;

-- Module 3 — Reconnaître et bien réagir au quotidien
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'd3ce0001-0003-4000-8000-000000000003',
  'd3ce0001-0000-4000-8000-000000000000',
  'Reconnaître et bien réagir au quotidien',
  'Signes observables, comportement comme communication, attitudes justes, situations concrètes (répétition, refus).',
  3, 35, 'texte'
) on conflict (id) do nothing;

-- Module 4 — Mon rôle et le réseau
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'd3ce0001-0004-4000-8000-000000000004',
  'd3ce0001-0000-4000-8000-000000000000',
  'Mon rôle et le réseau',
  'Se situer dans son rôle, observer et transmettre avec justesse, savoir quand alerter, connaître les ressources disponibles et prendre soin de soi.',
  4, 25, 'texte'
) on conflict (id) do nothing;
