-- Formation : Les curatelles et la protection de l'adulte
-- 3 modules · Slug : curatelles-protection-adulte
-- Durée : ~1h45 (3 × 35 min)

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
  'c0ca0000-0000-4000-8000-000000000000',
  'Les curatelles et la protection de l''adulte : ce que tout professionnel du travail social doit savoir',
  'Cette formation de 3 modules présente le droit suisse de la protection de l''adulte (réforme 2013), les quatre types de curatelles et leurs effets concrets sur les droits civils, ce que vit une personne accompagnée sous mesure de protection, et la posture professionnelle adaptée pour l''équipe institutionnelle. Le fil rouge suit Nadia, 34 ans, accompagnée dans un foyer de vie, au fil de la mise en place d''une curatelle de représentation financière.',
  'Comprendre le cadre légal des curatelles, ce que vit la personne protégée, et adapter sa posture professionnelle dans l''accompagnement au quotidien.',
  'curatelles-protection-adulte',
  'Juridique et droits',
  'debutant',
  105,
  '{"Transversal"}',
  'Droit et protection',
  'Éducateurs sociaux, MSP, ASE et professionnels d''institutions socio-éducatives (ESE, foyers de vie) — Suisse romande',
  true,
  false
)
on conflict (id) do nothing;

-- Module 1 — Le cadre légal
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'c0ca0001-0000-4000-8000-000000000001',
  'c0ca0000-0000-4000-8000-000000000000',
  'Le cadre légal : comprendre pour ne plus subir',
  'Les principes fondateurs du droit suisse de la protection de l''adulte (subsidiarité, proportionnalité, complémentarité), le rôle de l''APEA, la capacité de discernement, les alternatives à la curatelle et les quatre types de curatelles.',
  1, 35, 'texte'
) on conflict (id) do nothing;

-- Module 2 — Ce que vit la personne
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'c0ca0002-0000-4000-8000-000000000002',
  'c0ca0000-0000-4000-8000-000000000000',
  'Ce que vit la personne : la mesure de protection au quotidien',
  'L''annonce de la mesure, les impacts concrets sur la gestion de l''argent et l''autonomie, les droits qui restent, les enjeux émotionnels et identitaires, les droits de recours, et le placement à des fins d''assistance (PAFA).',
  2, 35, 'texte'
) on conflict (id) do nothing;

-- Module 3 — Posture professionnelle
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'c0ca0003-0000-4000-8000-000000000003',
  'c0ca0000-0000-4000-8000-000000000000',
  'Ma posture professionnelle : accompagner sous curatelle',
  'Clarifier son rôle versus celui du curateur, maintenir l''autodétermination de la personne au quotidien, construire une collaboration avec le curateur, soutenir la personne dans ses démarches et ses droits, et communiquer autour de la curatelle dans l''institution.',
  3, 35, 'texte'
) on conflict (id) do nothing;
