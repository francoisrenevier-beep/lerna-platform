-- Formation : Handicap et vieillissement — Pratique avancée
-- 3 modules · Slug : vieillissement-expertise

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
  'e9e00001-0000-4000-8000-000000000000',
  'Handicap et vieillissement — Pratique avancée',
  'Formation de pratique avancée pour les professionnels expérimentés. Dilemmes éthiques et autodétermination, posture face à la fin de vie, porter le projet individualisé dans la durée.',
  'Formation de pratique avancée pour les professionnels expérimentés en institutions socio-éducatives.',
  'vieillissement-expertise',
  'Accompagnement',
  'avance',
  135,
  '{"Handicap"}',
  'Vieillissement',
  'Éducateurs, assistants sociaux, soignants, cadres en institutions socio-éducatives',
  true,
  false
)
on conflict (id) do nothing;

-- Module 1 (ordre 1) — Dilemmes éthiques et autodétermination qui s'efface
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'e9e00001-0009-4000-8000-000000000009',
  'e9e00001-0000-4000-8000-000000000000',
  'Dilemmes éthiques et autodétermination qui s''efface',
  'Tenir sa posture professionnelle quand les capacités de décision diminuent — sans substituer son jugement à celui de la personne.',
  1, 45, 'texte'
) on conflict (id) do nothing;

-- Module 2 (ordre 2) — Posture face à la fin de vie en institution
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'e9e00001-0010-4000-8000-000000000010',
  'e9e00001-0000-4000-8000-000000000000',
  'Posture face à la fin de vie en institution',
  'Accompagner dignement la fin de vie des personnes en situation de handicap vieillissantes — sans sortir du champ du travail social.',
  2, 45, 'texte'
) on conflict (id) do nothing;

-- Module 3 (ordre 3) — Porter et adapter le projet individualisé vieillissement
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'e9e00001-0011-4000-8000-000000000011',
  'e9e00001-0000-4000-8000-000000000000',
  'Porter et adapter le projet individualisé vieillissement',
  'Construire un PPA qui évolue avec la personne, tenir le cap dans la durée, et être l''avocat de la personne dans son institution.',
  3, 45, 'texte'
) on conflict (id) do nothing;
