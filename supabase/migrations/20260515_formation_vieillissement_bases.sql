-- Formation : Accompagner le vieillissement en institution — Les bases
-- 4 modules · Slug : vieillissement-bases

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
  'bace0001-0000-4000-8000-000000000001',
  'Accompagner le vieillissement en institution — Les bases',
  'Formation de sensibilisation au vieillissement des personnes en situation de handicap. Comprendre le phénomène, reconnaître les signaux, adapter son accompagnement et s''appuyer sur le réseau.',
  'Sensibilisation au vieillissement des personnes en situation de handicap en institution.',
  'vieillissement-bases',
  'Accompagnement',
  'tous',
  120,
  '{"Handicap"}',
  'Vieillissement',
  'Éducateurs, assistants sociaux, soignants, cadres en institutions socio-éducatives',
  true,
  false
)
on conflict (id) do nothing;

-- Module 1
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'bace0001-0001-4000-8000-000000000001',
  'bace0001-0000-4000-8000-000000000001',
  'Comprendre le vieillissement des personnes en situation de handicap',
  'Définitions, données démographiques, mécanismes de vieillissement prématuré et profils spécifiques par type de handicap.',
  1, 30, 'texte'
) on conflict (id) do nothing;

-- Module 2
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'bace0001-0002-4000-8000-000000000002',
  'bace0001-0000-4000-8000-000000000001',
  'Reconnaître les signaux du vieillissement en institution',
  'Signes physiques, fonctionnels, cognitifs et comportementaux — et comment éviter le piège de l''overshadowing.',
  2, 30, 'texte'
) on conflict (id) do nothing;

-- Module 3
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'bace0001-0003-4000-8000-000000000003',
  'bace0001-0000-4000-8000-000000000001',
  'L''accompagnement au quotidien : adapter les pratiques',
  'Réévaluer le projet personnalisé, adapter activités et rythmes, communiquer avec justesse, soutenir les proches.',
  3, 30, 'texte'
) on conflict (id) do nothing;

-- Module 4
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'bace0001-0004-4000-8000-000000000004',
  'bace0001-0000-4000-8000-000000000001',
  'Ne pas rester seul : s''appuyer sur le réseau',
  'Identifier les acteurs clés, solliciter le médecin référent, mobiliser les partenaires externes et préparer les transitions.',
  4, 30, 'texte'
) on conflict (id) do nothing;
