-- Formation : Handicap et vieillissement — Approfondissement
-- 5 modules · Slug : vieillissement-approfondissement

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
  'a77f0001-0000-4000-8000-000000000000',
  'Handicap et vieillissement — Approfondissement',
  'Formation d''approfondissement pour les professionnels en contact régulier avec des personnes en situation de handicap vieillissantes. Comportements défis, coordination interinstitutionnelle, culture institutionnelle, observation structurée et signalement efficace.',
  'Formation d''approfondissement pour les professionnels en contact régulier avec des personnes en situation de handicap vieillissantes.',
  'vieillissement-approfondissement',
  'Accompagnement',
  'intermediaire',
  200,
  '{"Handicap"}',
  'Vieillissement',
  'Éducateurs, assistants sociaux, soignants, cadres en institutions socio-éducatives',
  true,
  false
)
on conflict (id) do nothing;

-- Module 1 (ordre 1) — Gestion des situations complexes et comportements défis
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'a77f0001-0004-4000-8000-000000000004',
  'a77f0001-0000-4000-8000-000000000000',
  'Gestion des situations complexes et comportements défis',
  'Analyse fonctionnelle A-B-C approfondie, facteurs déclencheurs liés au vieillissement, conduite du débriefing d''équipe.',
  1, 45, 'texte'
) on conflict (id) do nothing;

-- Module 2 (ordre 2) — Coordination interinstitutionnelle en Suisse romande
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'a77f0001-0005-4000-8000-000000000005',
  'a77f0001-0000-4000-8000-000000000000',
  'Coordination interinstitutionnelle en Suisse romande',
  'Rôle pivot du médecin référent, conventions de collaboration, document de transmission et gestion des transitions.',
  2, 40, 'texte'
) on conflict (id) do nothing;

-- Module 3 (ordre 3) — Culture institutionnelle et évolution des structures
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'a77f0001-0006-4000-8000-000000000006',
  'a77f0001-0000-4000-8000-000000000000',
  'Culture institutionnelle et évolution des structures',
  'Auto-diagnostic institutionnel, niveaux d''adaptation et leviers d''action selon le rôle professionnel.',
  3, 40, 'texte'
) on conflict (id) do nothing;

-- Module 4 (ordre 4) — Observer et documenter pour agir
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'a77f0001-0007-4000-8000-000000000007',
  'a77f0001-0000-4000-8000-000000000000',
  'Observer et documenter pour agir',
  'Structurer l''observation professionnelle, construire un état de base solide et produire des transmissions cliniquement utiles.',
  4, 45, 'texte'
) on conflict (id) do nothing;

-- Module 5 (ordre 5) — Signaler efficacement : quand, comment et à qui
insert into modules (id, formation_id, titre, description, ordre, duree_minutes, type)
values (
  'a77f0001-0008-4000-8000-000000000008',
  'a77f0001-0000-4000-8000-000000000000',
  'Signaler efficacement : quand, comment et à qui',
  'Construire des signalements utiles, naviguer dans les circuits internes et externes, et assurer le suivi dans la durée.',
  5, 45, 'texte'
) on conflict (id) do nothing;
