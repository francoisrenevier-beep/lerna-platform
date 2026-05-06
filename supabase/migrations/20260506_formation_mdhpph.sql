-- Formation : Comprendre et utiliser le modèle MDH-PPH
-- 5 modules · Slug : mdhpph-2018

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
  '7c9261ff-ab67-4fbb-9dd1-25d5abd0a616',
  'Comprendre et utiliser le modèle MDH-PPH dans les pratiques d''accompagnement',
  'Cette formation e-learning de 5 modules vous donne toutes les clés pour comprendre et appliquer le Modèle de Développement Humain – Processus de Production du Handicap (MDH-PPH 2018) dans vos pratiques institutionnelles en Suisse romande. Du changement de paradigme à la transformation organisationnelle, en passant par l''analyse de situations complexes et la co-construction de plans d''accompagnement, chaque module articule rigueur conceptuelle et ancrage terrain.',
  'Comprendre et appliquer le MDH-PPH 2018 pour transformer les pratiques d''accompagnement en institution.',
  'mdhpph-2018',
  'Accompagnement',
  'intermediaire',
  270,
  'Handicap',
  'MDH-PPH',
  'Éducateurs sociaux, ASE, MSP, infirmiers, responsables de secteur, cadres d''institutions sociales',
  true,
  false
)
on conflict (id) do nothing;

-- Module 1 — Le changement de paradigme
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  '49289005-4480-4137-88fa-673bc0d2d287',
  '7c9261ff-ab67-4fbb-9dd1-25d5abd0a616',
  'Le changement de paradigme : du modèle médical au modèle interactionnel',
  'Pourquoi le modèle médical ne suffit plus, la révolution MDH-PPH 2018 et l''équation fondamentale Facteurs Personnels × Facteurs Environnementaux = Habitudes de Vie.',
  1, 40, 'texte'
) on conflict (id) do nothing;

-- Module 2 — Les trois dimensions du modèle
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'acf8c260-ad54-4908-8629-3d33def88797',
  '7c9261ff-ab67-4fbb-9dd1-25d5abd0a616',
  'Les trois dimensions du modèle MDH-PPH',
  'Explorer en profondeur les facteurs personnels, l''architecture de l''environnement (micro, méso, macro) et les habitudes de vie comme indicateur central de participation sociale.',
  2, 55, 'texte'
) on conflict (id) do nothing;

-- Module 3 — Analyser une situation complexe
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  '77b98c17-8566-407b-bd0a-196c8bc709b9',
  '7c9261ff-ab67-4fbb-9dd1-25d5abd0a616',
  'Analyser une situation complexe avec le MDH-PPH',
  'Lire une situation avec les lunettes du modèle, analyser les comportements défis, le vieillissement et les transitions, et conduire une analyse interprofessionnelle.',
  3, 55, 'texte'
) on conflict (id) do nothing;

-- Module 4 — Construire un plan d'accompagnement
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  '7befd05f-64e8-4d62-93e1-9dbd26aeef52',
  '7c9261ff-ab67-4fbb-9dd1-25d5abd0a616',
  'Construire un plan d''accompagnement centré participation',
  'De l''évaluation au projet personnalisé, autodétermination et co-construction, outils MHAVIE et MQE en pratique, et le flux temporel pour évaluer et ajuster.',
  4, 50, 'texte'
) on conflict (id) do nothing;

-- Module 5 — Transformer les pratiques institutionnelles
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'fe837bdc-855a-4a78-b2eb-8760881e3318',
  '7c9261ff-ab67-4fbb-9dd1-25d5abd0a616',
  'Transformer les pratiques institutionnelles',
  'Du projet individuel à la transformation organisationnelle, construire une culture institutionnelle inclusive et renforcer la coordination interprofessionnelle.',
  5, 40, 'texte'
) on conflict (id) do nothing;
