-- Formation : Travailler avec les familles dans le secteur adulte du handicap
-- 5 modules · Slug : familles-secteur-adulte

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
  'fab10000-0000-4000-8000-000000000000',
  'Collaborer avec les familles : enjeux et pratiques',
  'Cette formation e-learning de 5 modules explore en profondeur les dynamiques qui se jouent entre les familles, les personnes adultes en situation de handicap et les équipes professionnelles. Du traumatisme inaugural aux enjeux de l''après-nous, en passant par l''autodétermination, la minorisation et les outils concrets de collaboration, chaque module articule grille de lecture clinique et ancrage dans les pratiques du secteur adulte.',
  'Comprendre les dynamiques famille-institution dans le secteur adulte du handicap pour construire une collaboration digne et efficace.',
  'familles-secteur-adulte',
  'Accompagnement',
  'intermediaire',
  270,
  '{"Handicap"}',
  'Famille',
  'Éducateurs sociaux, MSP, assistants sociaux, infirmiers et cadres travaillant avec des adultes en situation de handicap',
  true,
  false
)
on conflict (id) do nothing;

-- Module 1
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'fab10001-0000-4000-8000-000000000001',
  'fab10000-0000-4000-8000-000000000000',
  'La famille face au handicap adulte : trajectoires, blessures et ressources',
  'Le traumatisme inaugural, les trajectoires familiales dans la durée, la réalité silencieuse de la fratrie, et les ressources méconnues sur lesquelles s''appuyer.',
  1, 55, 'texte'
) on conflict (id) do nothing;

-- Module 2
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'fab10002-0000-4000-8000-000000000002',
  'fab10000-0000-4000-8000-000000000000',
  'Les dynamiques psychiques à l''œuvre : pacte dénégatif, minorisation et défenses',
  'Ce qui se joue sous la surface : les non-dits structurants, la minorisation de l''adulte handicapé, les défenses institutionnelles et leur impact sur la personne accompagnée.',
  2, 55, 'texte'
) on conflict (id) do nothing;

-- Module 3
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'fab10003-0000-4000-8000-000000000003',
  'fab10000-0000-4000-8000-000000000000',
  'L''autodétermination au cœur de la relation famille-institution',
  'Comprendre l''autodétermination dans le handicap adulte, identifier quand la famille ou l''institution en freinent l''exercice, et co-construire des pratiques qui la soutiennent réellement.',
  3, 50, 'texte'
) on conflict (id) do nothing;

-- Module 4
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'fab10004-0000-4000-8000-000000000004',
  'fab10000-0000-4000-8000-000000000000',
  'Les transitions critiques : vieillissement des parents et l''après-nous',
  'L''épuisement aidant, le tabou de l''après-nous, les transitions résidentielles et l''accompagnement du deuil parental — les moments charnières que l''institution doit anticiper.',
  4, 55, 'texte'
) on conflict (id) do nothing;

-- Module 5
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'fab10005-0000-4000-8000-000000000005',
  'fab10000-0000-4000-8000-000000000000',
  'Construire une collaboration famille-institution : postures, outils et pratiques',
  'La posture professionnelle juste, la réunion de projet repensée, la gestion des conflits, et des outils concrets pour construire une collaboration durable avec les familles.',
  5, 55, 'texte'
) on conflict (id) do nothing;
