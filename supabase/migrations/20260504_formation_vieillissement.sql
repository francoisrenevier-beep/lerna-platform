-- Formation : Handicap et vieillissement
-- 6 modules · Slug : handicap-et-vieillissement

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
  'dad21cb5-e946-4e13-a175-8fbf3120cbc9',
  'Handicap et vieillissement : enjeux, accompagnement et adaptation des pratiques en institution',
  'Cette formation e-learning de 6 modules vous donne toutes les clés pour comprendre, détecter et accompagner le vieillissement des personnes en situation de handicap. Elle couvre les mécanismes biologiques, les signaux cliniques, les adaptations pratiques, la gestion des comportements défis, la coordination interinstitutionnelle en Suisse romande et l''évolution de la culture institutionnelle.',
  'Comprendre et accompagner le vieillissement des personnes en situation de handicap en institution.',
  'handicap-et-vieillissement',
  'Accompagnement',
  'tous',
  120,
  'Handicap',
  'Vieillissement',
  'Éducateurs, assistants sociaux, soignants, cadres en institutions socio-éducatives',
  true,
  false
)
on conflict (id) do nothing;

-- Module 1
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  '7449447f-52e9-4e28-bcdf-58ff131ed7b1',
  'dad21cb5-e946-4e13-a175-8fbf3120cbc9',
  'Comprendre le vieillissement des personnes en situation de handicap',
  'Définitions, données démographiques, mécanismes de vieillissement prématuré et profils spécifiques par type de handicap.',
  1, 20, 'texte'
) on conflict (id) do nothing;

-- Module 2
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'd495c1de-4027-4843-9122-c0e9507c77b3',
  'dad21cb5-e946-4e13-a175-8fbf3120cbc9',
  'Reconnaître les signaux du vieillissement en institution',
  'Signes physiques, fonctionnels, cognitifs et comportementaux — et comment éviter le piège de l''overshadowing.',
  2, 20, 'texte'
) on conflict (id) do nothing;

-- Module 3
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  '4c94dce0-ee04-455b-bec1-a50b27cdc875',
  'dad21cb5-e946-4e13-a175-8fbf3120cbc9',
  'L''accompagnement au quotidien : adapter les pratiques',
  'Réévaluer le projet personnalisé, adapter activités et rythmes, communiquer avec justesse, soutenir les proches et aborder la fin de vie.',
  3, 20, 'texte'
) on conflict (id) do nothing;

-- Module 4
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  '1f71287e-788f-4c70-aa55-1f12a6330070',
  'dad21cb5-e946-4e13-a175-8fbf3120cbc9',
  'Gestion des situations complexes et comportements défis',
  'Comprendre avant d''intervenir : analyse fonctionnelle A-B-C, régulation en crise et postures professionnelles.',
  4, 20, 'texte'
) on conflict (id) do nothing;

-- Module 5
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'e3dc5ebd-abb7-4891-9090-52f1b000799e',
  'dad21cb5-e946-4e13-a175-8fbf3120cbc9',
  'Coordination interinstitutionnelle en Suisse romande',
  'Cartographie des acteurs, outils de coordination, conventions de collaboration et principes des transitions dignes.',
  5, 20, 'texte'
) on conflict (id) do nothing;

-- Module 6
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'e992ccab-7ab4-4641-8e01-781ef2112bd5',
  'dad21cb5-e946-4e13-a175-8fbf3120cbc9',
  'Culture institutionnelle et évolution des structures',
  'Évaluer la maturité de son institution, planifier les adaptations selon trois niveaux et comprendre le rôle de chaque professionnel.',
  6, 20, 'texte'
) on conflict (id) do nothing;
