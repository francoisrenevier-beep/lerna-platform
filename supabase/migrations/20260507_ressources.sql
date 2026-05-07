-- Table des ressources complémentaires liées aux formations

CREATE TABLE IF NOT EXISTS ressources (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  titre       TEXT        NOT NULL,
  description TEXT,
  type        TEXT        NOT NULL DEFAULT 'lien', -- 'pdf', 'lien', 'article', 'video'
  url         TEXT        NOT NULL,
  formation_id UUID       REFERENCES formations(id) ON DELETE CASCADE,
  ordre       INT         NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE ressources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Lecture des ressources pour les utilisateurs authentifiés"
  ON ressources FOR SELECT TO authenticated
  USING (true);

-- ── PPH (Processus de Production du Handicap) ────────────────────────────────
INSERT INTO ressources (titre, description, type, url, formation_id, ordre)
SELECT
  'Classification internationale du fonctionnement (CIF) — OMS',
  'Document de référence mondial sur le fonctionnement humain et le handicap, fondement théorique du modèle PPH.',
  'lien',
  'https://www.who.int/classifications/icf/en/',
  formation_id, 1
FROM modules WHERE id = 'f8bd6cc6-b91e-4542-a9c4-53001ddd9090'
ON CONFLICT DO NOTHING;

INSERT INTO ressources (titre, description, type, url, formation_id, ordre)
SELECT
  'Site officiel du RIPPH — Réseau international sur le PPH',
  'Publications, outils et actualités sur le Processus de Production du Handicap.',
  'lien',
  'https://ripph.qc.ca/',
  formation_id, 2
FROM modules WHERE id = 'f8bd6cc6-b91e-4542-a9c4-53001ddd9090'
ON CONFLICT DO NOTHING;

INSERT INTO ressources (titre, description, type, url, formation_id, ordre)
SELECT
  'Fiche synthèse : les concepts-clés du PPH',
  'Résumé visuel des notions essentielles du modèle PPH à conserver comme aide-mémoire.',
  'pdf',
  '#',
  formation_id, 3
FROM modules WHERE id = 'f8bd6cc6-b91e-4542-a9c4-53001ddd9090'
ON CONFLICT DO NOTHING;

-- ── Éthique ───────────────────────────────────────────────────────────────────
INSERT INTO ressources (titre, description, type, url, formation_id, ordre)
SELECT
  'Charte des droits et libertés de la personne accueillie',
  'Texte fondateur définissant les droits des personnes accueillies en établissement social et médico-social.',
  'pdf',
  '#',
  formation_id, 1
FROM modules WHERE id = 'bb43e53c-9faa-4090-ba50-5471fecad068'
ON CONFLICT DO NOTHING;

INSERT INTO ressources (titre, description, type, url, formation_id, ordre)
SELECT
  'Recommandations de bonnes pratiques professionnelles — HAS',
  'Cadre de référence pour l''éthique professionnelle dans le secteur social et médico-social.',
  'lien',
  'https://www.has-sante.fr/jcms/p_3221015/fr/recommendations-de-bonnes-pratiques',
  formation_id, 2
FROM modules WHERE id = 'bb43e53c-9faa-4090-ba50-5471fecad068'
ON CONFLICT DO NOTHING;

INSERT INTO ressources (titre, description, type, url, formation_id, ordre)
SELECT
  'Guide pratique de la bientraitance',
  'Repères concrets pour promouvoir la bientraitance au quotidien dans l''accompagnement.',
  'pdf',
  '#',
  formation_id, 3
FROM modules WHERE id = 'bb43e53c-9faa-4090-ba50-5471fecad068'
ON CONFLICT DO NOTHING;

-- ── Handicap et vieillissement ────────────────────────────────────────────────
INSERT INTO ressources (titre, description, type, url, formation_id, ordre)
VALUES (
  'Rapport mondial de l''OMS sur le vieillissement et la santé (2015)',
  'Analyse mondiale des enjeux de santé liés au vieillissement — chiffres, politiques et recommandations.',
  'lien',
  'https://www.who.int/publications/i/item/9789241565042',
  'dad21cb5-e946-4e13-a175-8fbf3120cbc9', 1
) ON CONFLICT DO NOTHING;

INSERT INTO ressources (titre, description, type, url, formation_id, ordre)
VALUES (
  'Ressources UNAPEI — Vieillissement et déficience intellectuelle',
  'Guides et recommandations spécifiques au vieillissement des personnes avec déficience intellectuelle.',
  'lien',
  'https://www.unapei.org/',
  'dad21cb5-e946-4e13-a175-8fbf3120cbc9', 2
) ON CONFLICT DO NOTHING;

INSERT INTO ressources (titre, description, type, url, formation_id, ordre)
VALUES (
  'Grille d''évaluation AGGIR — présentation et mode d''emploi',
  'Outil d''évaluation du niveau d''autonomie fonctionnelle, utilisé en institution.',
  'pdf',
  '#',
  'dad21cb5-e946-4e13-a175-8fbf3120cbc9', 3
) ON CONFLICT DO NOTHING;

INSERT INTO ressources (titre, description, type, url, formation_id, ordre)
VALUES (
  'Grille de détection des signaux du vieillissement en institution',
  'Outil pratique pour identifier précocement les signes physiques, cognitifs et comportementaux du vieillissement.',
  'pdf',
  '#',
  'dad21cb5-e946-4e13-a175-8fbf3120cbc9', 4
) ON CONFLICT DO NOTHING;

-- ── MDH-PPH 2018 ──────────────────────────────────────────────────────────────
INSERT INTO ressources (titre, description, type, url, formation_id, ordre)
VALUES (
  'Présentation officielle du MDH-PPH 2018 — RIPPH',
  'Documentation officielle du Modèle de Développement Humain — Processus de Production du Handicap, version 2018.',
  'lien',
  'https://ripph.qc.ca/modele-mdh-pph/',
  '7c9261ff-ab67-4fbb-9dd1-25d5abd0a616', 1
) ON CONFLICT DO NOTHING;

INSERT INTO ressources (titre, description, type, url, formation_id, ordre)
VALUES (
  'Grille d''analyse MDH-PPH en situation d''accompagnement',
  'Outil pratique pour analyser une situation selon les trois dimensions du modèle : facteurs personnels, environnement et habitudes de vie.',
  'pdf',
  '#',
  '7c9261ff-ab67-4fbb-9dd1-25d5abd0a616', 2
) ON CONFLICT DO NOTHING;

INSERT INTO ressources (titre, description, type, url, formation_id, ordre)
VALUES (
  'Fougeyrollas P. — La funambule, le fil et la toile (synthèse)',
  'Présentation synthétique de l''ouvrage fondateur du MDH-PPH, accessible aux praticiens du secteur.',
  'article',
  '#',
  '7c9261ff-ab67-4fbb-9dd1-25d5abd0a616', 3
) ON CONFLICT DO NOTHING;
