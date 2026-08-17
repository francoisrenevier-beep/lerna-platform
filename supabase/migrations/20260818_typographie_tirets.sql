-- Typographie : remplace le tiret cadratin par une ponctuation francaise courante
-- dans les contenus deja presents en base. Les migrations anterieures ne sont pas
-- modifiees : elles ont deja ete appliquees, seul l'etat courant des tables l'est.
--
-- Table de travail ordinaire (et non TEMPORARY) : l'editeur SQL Supabase repartit
-- les instructions sur des connexions poolees, ou une table temporaire creee par
-- une instruction n'est plus visible par la suivante.
--
-- La table v1 `ressources` a ete supprimee par 20260516_resources_new.sql apres
-- recopie de ses lignes dans `resources` (titre -> title). Seule `resources` est
-- donc ciblee ici.
--
-- Idempotent : chaque UPDATE ne touche que les lignes encore dans l'ancienne forme.
-- Sans transaction englobante, pour qu'un echec eventuel sur une table n'annule
-- pas les corrections deja appliquees aux autres.

drop table if exists _fix_tirets;
create table _fix_tirets (ancien text primary key, nouveau text not null);

insert into _fix_tirets (ancien, nouveau) values
  ('Accompagner dignement la fin de vie des personnes en situation de handicap vieillissantes — sans sortir du champ du travail social.', 'Accompagner dignement la fin de vie des personnes en situation de handicap vieillissantes, sans sortir du champ du travail social.'),
  ('Accompagner le vieillissement en institution — Les bases', 'Accompagner le vieillissement en institution : Les bases'),
  ('Analyse mondiale des enjeux de santé liés au vieillissement — chiffres, politiques et recommandations.', 'Analyse mondiale des enjeux de santé liés au vieillissement : chiffres, politiques et recommandations.'),
  ('Ancrer durablement le changement et tenir le sens jusqu''au bout. Évaluer les effets réels (pas la réalisation), pérenniser jusqu''à la culture commune, et la posture éthique du pilote — fondement de tout le reste — en trois exigences : sens, participation, respect des personnes.', 'Ancrer durablement le changement et tenir le sens jusqu''au bout. Évaluer les effets réels (pas la réalisation), pérenniser jusqu''à la culture commune, et la posture éthique du pilote, fondement de tout le reste, en trois exigences : sens, participation, respect des personnes.'),
  ('Avancer par cycles courts là où le besoin évolue. L''esprit agile — pas le framework technique — appliqué à l''accompagnement de personnes. La logique itérative, ses avantages et ses limites essentielles.', 'Avancer par cycles courts là où le besoin évolue. L''esprit agile, pas le framework technique, appliqué à l''accompagnement de personnes. La logique itérative, ses avantages et ses limites essentielles.'),
  ('Cadres, chefs d''équipe, directions de proximité — niveau 2 Intermédiaire recommandé', 'Cadres, chefs d''équipe, directions de proximité : niveau 2 Intermédiaire recommandé'),
  ('Cartographier toutes les personnes que le projet concerne — y compris la personne accompagnée de plein droit — et calibrer le niveau d''implication de chacun : informer, consulter, associer.', 'Cartographier toutes les personnes que le projet concerne, y compris la personne accompagnée de plein droit, et calibrer le niveau d''implication de chacun : informer, consulter, associer.'),
  ('Ce qui rend le sommeil en institution spécifique : dormir hors de chez soi, dormir après des ruptures, dormir dans un lieu partagé — et le rôle de la sécurité affective dans l''endormissement.', 'Ce qui rend le sommeil en institution spécifique : dormir hors de chez soi, dormir après des ruptures, dormir dans un lieu partagé, et le rôle de la sécurité affective dans l''endormissement.'),
  ('Classification internationale du fonctionnement (CIF) — OMS', 'Classification internationale du fonctionnement (CIF) : OMS'),
  ('Comprendre les enjeux humains derrière le passage vers le dispositif adulte — pour les familles, le jeune et les équipes ESE.', 'Comprendre les enjeux humains derrière le passage vers le dispositif adulte, pour les familles, le jeune et les équipes ESE.'),
  ('Comprendre les mécanismes de la violence émanant des personnes accompagnées, savoir lire les situations à risque, adopter les attitudes qui désamorcent — et prendre soin de celles et ceux qui ont été touchés.', 'Comprendre les mécanismes de la violence émanant des personnes accompagnées, savoir lire les situations à risque, adopter les attitudes qui désamorcent, et prendre soin de celles et ceux qui ont été touchés.'),
  ('Comprendre les sources de tension entre familles et institutions — et apprendre à lire derrière les comportements apparents.', 'Comprendre les sources de tension entre familles et institutions, et apprendre à lire derrière les comportements apparents.'),
  ('Comprendre les émotions qui accompagnent cette période et pourquoi elles sont légitimes — même quand elles compliquent la relation avec les professionnels.', 'Comprendre les émotions qui accompagnent cette période et pourquoi elles sont légitimes, même quand elles compliquent la relation avec les professionnels.'),
  ('Comprendre pourquoi le sommeil est un besoin développemental fondamental, comment il évolue de la naissance à l''adolescence, ce qui le rend spécifique en institution — et comment observer et transmettre sans sortir de son rôle.', 'Comprendre pourquoi le sommeil est un besoin développemental fondamental, comment il évolue de la naissance à l''adolescence, ce qui le rend spécifique en institution, et comment observer et transmettre sans sortir de son rôle.'),
  ('Comprendre que la transition ne concerne pas uniquement le jeune — elle traverse toute la famille et s''inscrit dans une histoire longue.', 'Comprendre que la transition ne concerne pas uniquement le jeune, elle traverse toute la famille et s''inscrit dans une histoire longue.'),
  ('Documentation officielle du Modèle de Développement Humain — Processus de Production du Handicap (MDH-PPH 2). Fougeyrollas et al., RIPPH, Québec, 2010.', 'Documentation officielle du Modèle de Développement Humain : Processus de Production du Handicap (MDH-PPH 2). Fougeyrollas et al., RIPPH, Québec, 2010.'),
  ('Documentation officielle du Modèle de Développement Humain — Processus de Production du Handicap, version 2018.', 'Documentation officielle du Modèle de Développement Humain : Processus de Production du Handicap, version 2018.'),
  ('Formation de test interne — refonte du Module 1 de la formation La Délibération Éthique dans l''Intervention Sociale.', 'Formation de test interne : refonte du Module 1 de la formation La Délibération Éthique dans l''Intervention Sociale.'),
  ('Grille d''évaluation AGGIR — présentation et mode d''emploi', 'Grille d''évaluation AGGIR : présentation et mode d''emploi'),
  ('Handicap et vieillissement — Approfondissement', 'Handicap et vieillissement : Approfondissement'),
  ('Handicap et vieillissement — Pratique avancée', 'Handicap et vieillissement : Pratique avancée'),
  ('Identifier les pratiques professionnelles qui soutiennent réellement les familles dans cette période — et distinguer ce qui aide de ce qui fragilise.', 'Identifier les pratiques professionnelles qui soutiennent réellement les familles dans cette période, et distinguer ce qui aide de ce qui fragilise.'),
  ('Intégration — L''éthique dans l''institution', 'Intégration : L''éthique dans l''institution'),
  ('L''Éthique de la Discussion — De l''individu au collectif', 'L''Éthique de la Discussion : De l''individu au collectif'),
  ('L''Éthique des Vertus — La sagesse pratique au cœur du professionnel', 'L''Éthique des Vertus : La sagesse pratique au cœur du professionnel'),
  ('L''épuisement aidant, le tabou de l''après-nous, les transitions résidentielles et l''accompagnement du deuil parental — les moments charnières que l''institution doit anticiper.', 'L''épuisement aidant, le tabou de l''après-nous, les transitions résidentielles et l''accompagnement du deuil parental : les moments charnières que l''institution doit anticiper.'),
  ('La Méthode de Délibération — Structurer pour décider', 'La Méthode de Délibération : Structurer pour décider'),
  ('Le Paysage de l''Éthique — Fondements et délibération (V2 test)', 'Le Paysage de l''Éthique : Fondements et délibération (V2 test)'),
  ('Le Paysage de l''Éthique — Rappels fondamentaux', 'Le Paysage de l''Éthique : Rappels fondamentaux'),
  ('Le quotidien nocturne : accompagner le coucher, distinguer ce qui relève du déroulement normal du sommeil de ce qui appelle une présence — le discernement au cœur du travail de la veille de nuit.', 'Le quotidien nocturne : accompagner le coucher, distinguer ce qui relève du déroulement normal du sommeil de ce qui appelle une présence, le discernement au cœur du travail de la veille de nuit.'),
  ('Le sommeil de l''enfant — sensibilisation', 'Le sommeil de l''enfant : sensibilisation'),
  ('Mise en Pratique — Le cas de Madame De Montmollin', 'Mise en Pratique : Le cas de Madame De Montmollin'),
  ('Pourquoi le sommeil est un besoin développemental fondamental : consolider les apprentissages, réguler les émotions, soutenir la croissance. Cycles et stades, besoins selon les âges, variabilité normale — et pourquoi un enfant fatigué ne ressemble pas à un adulte fatigué.', 'Pourquoi le sommeil est un besoin développemental fondamental : consolider les apprentissages, réguler les émotions, soutenir la croissance. Cycles et stades, besoins selon les âges, variabilité normale, et pourquoi un enfant fatigué ne ressemble pas à un adulte fatigué.'),
  ('Professionnels en projets collectifs, référents, futurs chefs d''équipe — niveau 1 Base recommandé', 'Professionnels en projets collectifs, référents, futurs chefs d''équipe : niveau 1 Base recommandé'),
  ('Présentation officielle du MDH-PPH 2010 — RIPPH', 'Présentation officielle du MDH-PPH 2010 : RIPPH'),
  ('Présentation officielle du MDH-PPH 2018 — RIPPH', 'Présentation officielle du MDH-PPH 2018 : RIPPH'),
  ('Quatre principes simples — le nécessaire, la bonne raison, la bonne personne, la sécurité — traduits en gestes concrets pour les situations que vous rencontrez vraiment. Le réflexe-clé : dans le doute, je m''abstiens et je demande.', 'Quatre principes simples (le nécessaire, la bonne raison, la bonne personne, la sécurité) traduits en gestes concrets pour les situations que vous rencontrez vraiment. Le réflexe-clé : dans le doute, je m''abstiens et je demande.'),
  ('Recommandations de bonnes pratiques professionnelles — HAS', 'Recommandations de bonnes pratiques professionnelles : HAS'),
  ('Replacer le jeune au centre de la transition — et interroger nos pratiques quant à sa place réelle dans les décisions qui le concernent.', 'Replacer le jeune au centre de la transition, et interroger nos pratiques quant à sa place réelle dans les décisions qui le concernent.'),
  ('Repérer les signes d''un sommeil insuffisant dans la durée, observer utilement, savoir quand et comment transmettre — sans sortir de son rôle : observer n''est pas diagnostiquer.', 'Repérer les signes d''un sommeil insuffisant dans la durée, observer utilement, savoir quand et comment transmettre, sans sortir de son rôle : observer n''est pas diagnostiquer.'),
  ('Ressources UNAPEI — Vieillissement et déficience intellectuelle', 'Ressources UNAPEI : Vieillissement et déficience intellectuelle'),
  ('Sensibilisation à l''attention portée aux données personnelles dans le travail social et médico-social — réflexes concrets, droits des personnes et culture du signalement.', 'Sensibilisation à l''attention portée aux données personnelles dans le travail social et médico-social, réflexes concrets, droits des personnes et culture du signalement.'),
  ('Signes physiques, fonctionnels, cognitifs et comportementaux — et comment éviter le piège de l''overshadowing.', 'Signes physiques, fonctionnels, cognitifs et comportementaux, et comment éviter le piège de l''overshadowing.'),
  ('Site officiel du RIPPH — Réseau international sur le PPH', 'Site officiel du RIPPH : Réseau international sur le PPH'),
  ('Six mots clés — objectif, étape, jalon, rôle, livrable, échéance — pour parler le même langage et participer pleinement à une démarche projet. Ces mots comme grille de lecture de la solidité d''un projet.', 'Six mots clés (objectif, étape, jalon, rôle, livrable, échéance) pour parler le même langage et participer pleinement à une démarche projet. Ces mots comme grille de lecture de la solidité d''un projet.'),
  ('Synthétiser les apprentissages à travers le retour sur Julien — et identifier les 5 piliers d''une transition réussie.', 'Synthétiser les apprentissages à travers le retour sur Julien, et identifier les 5 piliers d''une transition réussie.'),
  ('Tenir sa posture professionnelle quand les capacités de décision diminuent — sans substituer son jugement à celui de la personne.', 'Tenir sa posture professionnelle quand les capacités de décision diminuent, sans substituer son jugement à celui de la personne.'),
  ('Tous les professionnels d''accompagnement, sans prérequis — porte d''entrée du parcours Gestion de projet', 'Tous les professionnels d''accompagnement, sans prérequis : porte d''entrée du parcours Gestion de projet'),
  ('Une institution apprenante ne cherche pas un coupable après un incident — elle cherche tout ce qui a rendu l''incident possible. Organisation apprenante, arbre des causes, situations à risque et cadre légal suisse (LTr art. 6, CO art. 328).', 'Une institution apprenante ne cherche pas un coupable après un incident, elle cherche tout ce qui a rendu l''incident possible. Organisation apprenante, arbre des causes, situations à risque et cadre légal suisse (LTr art. 6, CO art. 328).'),
  ('[TEST V2] Le Paysage de l''Éthique — Module 1 Délibération', '[TEST V2] Le Paysage de l''Éthique : Module 1 Délibération'),
  ('Éducateurs sociaux, MSP, ASE et professionnels d''institutions socio-éducatives (ESE, foyers de vie) — Suisse romande', 'Éducateurs sociaux, MSP, ASE et professionnels d''institutions socio-éducatives (ESE, foyers de vie) : Suisse romande'),
  ('Équipe de test interne — non destiné aux apprenants', 'Équipe de test interne, non destiné aux apprenants'),
  ('Éveiller le regard : dans une institution sociale ou médico-sociale, les données sont partout — et presque toujours sensibles. Distinguer données personnelles et données sensibles, identifier les trois canaux de circulation (oral, papier, écran) et comprendre la responsabilité partagée.', 'Éveiller le regard : dans une institution sociale ou médico-sociale, les données sont partout, et presque toujours sensibles. Distinguer données personnelles et données sensibles, identifier les trois canaux de circulation (oral, papier, écran) et comprendre la responsabilité partagée.');

update formations d set titre = x.nouveau from _fix_tirets x where d.titre = x.ancien;
update formations d set description = x.nouveau from _fix_tirets x where d.description = x.ancien;
update formations d set description_courte = x.nouveau from _fix_tirets x where d.description_courte = x.ancien;
update formations d set public_cible = x.nouveau from _fix_tirets x where d.public_cible = x.ancien;
update modules d set titre = x.nouveau from _fix_tirets x where d.titre = x.ancien;
update modules d set description = x.nouveau from _fix_tirets x where d.description = x.ancien;
update resources d set title = x.nouveau from _fix_tirets x where d.title = x.ancien;
update resources d set description = x.nouveau from _fix_tirets x where d.description = x.ancien;

drop table _fix_tirets;

-- Verification : doit renvoyer 0 partout.
select 'formations.titre' as champ, count(*) as tirets_restants from formations where titre like '%—%'
union all
select 'formations.description' as champ, count(*) as tirets_restants from formations where description like '%—%'
union all
select 'formations.description_courte' as champ, count(*) as tirets_restants from formations where description_courte like '%—%'
union all
select 'formations.public_cible' as champ, count(*) as tirets_restants from formations where public_cible like '%—%'
union all
select 'modules.titre' as champ, count(*) as tirets_restants from modules where titre like '%—%'
union all
select 'modules.description' as champ, count(*) as tirets_restants from modules where description like '%—%'
union all
select 'resources.title' as champ, count(*) as tirets_restants from resources where title like '%—%'
union all
select 'resources.description' as champ, count(*) as tirets_restants from resources where description like '%—%';
