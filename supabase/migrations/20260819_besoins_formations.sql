-- ================================================================
-- Mur des besoins de formation
--
-- Objectif : capter les besoins du terrain et les prioriser par le vote.
-- Deux tables (les besoins, les votes) et cinq fonctions SECURITY DEFINER.
--
-- Pourquoi passer par des fonctions plutôt que par des SELECT directs :
--   1. Le mur est inter-institutions. Comme pour get_formations_populaires()
--      (20260706) et get_stats_publiques() (20260812), un collaborateur ne peut
--      pas lire les lignes des autres institutions sous RLS.
--   2. L'affichage est volontairement anonyme (cf. plus bas). La fonction ne
--      renvoie jamais profil_id ni aucune donnée nominative ; seul
--      get_besoins_admin(), réservée aux super_admins, expose l'auteur.
--
-- Choix d'anonymat : dans le secteur social et médico-social, exprimer un
-- besoin de formation devant ses collègues ou sa hiérarchie peut se lire comme
-- un aveu de faiblesse. L'auteur n'est donc jamais affiché sur le mur. Le
-- super_admin, lui, voit l'identité pour pouvoir recontacter la personne.
-- ================================================================

-- ─── Table des besoins ──────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS besoins_formations (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  profil_id    UUID        NOT NULL REFERENCES profils(id) ON DELETE CASCADE,
  titre        TEXT        NOT NULL CHECK (char_length(btrim(titre)) BETWEEN 5 AND 120),
  description  TEXT        CHECK (description IS NULL OR char_length(description) <= 1000),
  domaine      TEXT,
  -- propose : reçu, pas encore arbitré. a_letude : retenu, en cours de cadrage.
  -- en_production : en cours d'écriture. publiee : disponible au catalogue
  -- (formation_id renseigné). ecarte : non retenu, masqué du mur.
  statut       TEXT        NOT NULL DEFAULT 'propose'
               CHECK (statut IN ('propose', 'a_letude', 'en_production', 'publiee', 'ecarte')),
  -- Réponse publique du super_admin, affichée sur la carte du besoin. C'est ce
  -- qui rend la boucle visible et entretient la participation.
  reponse_admin TEXT,
  formation_id UUID        REFERENCES formations(id) ON DELETE SET NULL,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS besoins_formations_profil_idx ON besoins_formations(profil_id);
CREATE INDEX IF NOT EXISTS besoins_formations_statut_idx ON besoins_formations(statut);

-- ─── Table des votes ────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS besoins_votes (
  besoin_id  UUID        NOT NULL REFERENCES besoins_formations(id) ON DELETE CASCADE,
  profil_id  UUID        NOT NULL REFERENCES profils(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (besoin_id, profil_id)
);

-- ─── Droits de table ────────────────────────────────────────────────────────
-- Explicites plutôt que dépendants des privilèges par défaut du schéma public :
-- la lecture de son propre besoin (route /api/besoin-notification) et le mur
-- passent par ces droits, filtrés ensuite par les policies ci-dessous.

GRANT SELECT, INSERT ON besoins_formations TO authenticated;
GRANT UPDATE, DELETE ON besoins_formations TO authenticated;
GRANT SELECT, INSERT, DELETE ON besoins_votes TO authenticated;

-- ─── RLS ────────────────────────────────────────────────────────────────────

ALTER TABLE besoins_formations ENABLE ROW LEVEL SECURITY;
ALTER TABLE besoins_votes      ENABLE ROW LEVEL SECURITY;

-- Lecture du mur : personne ne lit la table en direct, tout passe par
-- get_besoins_formations(). On n'ouvre donc que son propre besoin (utile pour
-- retrouver ce qu'on a proposé) et la vue complète du super_admin.

DROP POLICY IF EXISTS "utilisateur lit ses propres besoins" ON besoins_formations;
CREATE POLICY "utilisateur lit ses propres besoins"
  ON besoins_formations FOR SELECT TO authenticated
  USING (profil_id = auth.uid());

DROP POLICY IF EXISTS "super_admin lit tous les besoins" ON besoins_formations;
CREATE POLICY "super_admin lit tous les besoins"
  ON besoins_formations FOR SELECT TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profils WHERE profils.id = auth.uid() AND profils.est_super_admin = true)
  );

-- L'insertion passe par proposer_besoin_formation() (garde-fous : limite
-- journalière, vote automatique de l'auteur). Cette policy reste nécessaire
-- pour que le super_admin puisse aussi saisir un besoin remonté hors plateforme.
DROP POLICY IF EXISTS "utilisateur propose son besoin" ON besoins_formations;
CREATE POLICY "utilisateur propose son besoin"
  ON besoins_formations FOR INSERT TO authenticated
  WITH CHECK (profil_id = auth.uid());

DROP POLICY IF EXISTS "super_admin modifie les besoins" ON besoins_formations;
CREATE POLICY "super_admin modifie les besoins"
  ON besoins_formations FOR UPDATE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profils WHERE profils.id = auth.uid() AND profils.est_super_admin = true)
  );

DROP POLICY IF EXISTS "super_admin supprime les besoins" ON besoins_formations;
CREATE POLICY "super_admin supprime les besoins"
  ON besoins_formations FOR DELETE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profils WHERE profils.id = auth.uid() AND profils.est_super_admin = true)
  );

-- Votes : chacun ne voit, ajoute et retire que les siens. Les décomptes
-- agrégés sortent par les fonctions.
DROP POLICY IF EXISTS "utilisateur lit ses propres votes" ON besoins_votes;
CREATE POLICY "utilisateur lit ses propres votes"
  ON besoins_votes FOR SELECT TO authenticated
  USING (profil_id = auth.uid());

DROP POLICY IF EXISTS "utilisateur ajoute son vote" ON besoins_votes;
CREATE POLICY "utilisateur ajoute son vote"
  ON besoins_votes FOR INSERT TO authenticated
  WITH CHECK (profil_id = auth.uid());

DROP POLICY IF EXISTS "utilisateur retire son vote" ON besoins_votes;
CREATE POLICY "utilisateur retire son vote"
  ON besoins_votes FOR DELETE TO authenticated
  USING (profil_id = auth.uid());

-- ─── Lecture du mur (anonyme, inter-institutions) ───────────────────────────

CREATE OR REPLACE FUNCTION public.get_besoins_formations()
RETURNS TABLE (
  id              uuid,
  titre           text,
  description     text,
  domaine         text,
  statut          text,
  reponse_admin   text,
  formation_slug  text,
  formation_titre text,
  votes_count     bigint,
  a_vote          boolean,
  est_auteur      boolean,
  created_at      timestamptz
)
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT
    b.id,
    b.titre,
    b.description,
    b.domaine,
    b.statut,
    b.reponse_admin,
    f.slug  AS formation_slug,
    f.titre AS formation_titre,
    COALESCE(v.votes_count, 0) AS votes_count,
    EXISTS (
      SELECT 1 FROM besoins_votes bv
      WHERE bv.besoin_id = b.id AND bv.profil_id = auth.uid()
    ) AS a_vote,
    b.profil_id = auth.uid() AS est_auteur,
    b.created_at
  FROM besoins_formations b
  LEFT JOIN formations f ON f.id = b.formation_id
  LEFT JOIN (
    SELECT besoin_id, COUNT(*) AS votes_count
    FROM besoins_votes
    GROUP BY besoin_id
  ) v ON v.besoin_id = b.id
  -- Un besoin écarté disparaît du mur : afficher un refus indéfiniment
  -- découragerait les suivants. Il reste visible côté admin.
  WHERE b.statut <> 'ecarte'
    AND auth.uid() IS NOT NULL
  ORDER BY COALESCE(v.votes_count, 0) DESC, b.created_at DESC;
$$;

GRANT EXECUTE ON FUNCTION public.get_besoins_formations() TO authenticated;

-- ─── Proposer un besoin ─────────────────────────────────────────────────────
-- Garde-fous : plafond de 5 besoins par 24 h (anti-flood) et vote automatique
-- de l'auteur, pour qu'un besoin ne naisse jamais à 0 voix.

CREATE OR REPLACE FUNCTION public.proposer_besoin_formation(
  p_titre       text,
  p_description text DEFAULT NULL,
  p_domaine     text DEFAULT NULL
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid    uuid := auth.uid();
  v_titre  text := btrim(p_titre);
  v_id     uuid;
  v_recents integer;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Authentification requise';
  END IF;

  IF char_length(v_titre) < 5 THEN
    RAISE EXCEPTION 'Merci de décrire le besoin en quelques mots (5 caractères minimum).';
  END IF;

  SELECT COUNT(*) INTO v_recents
  FROM besoins_formations
  WHERE profil_id = v_uid
    AND created_at > NOW() - INTERVAL '24 hours';

  IF v_recents >= 5 THEN
    RAISE EXCEPTION 'Vous avez déjà proposé 5 besoins aujourd''hui. Revenez demain pour en ajouter d''autres.';
  END IF;

  INSERT INTO besoins_formations (profil_id, titre, description, domaine)
  VALUES (
    v_uid,
    v_titre,
    NULLIF(btrim(COALESCE(p_description, '')), ''),
    NULLIF(btrim(COALESCE(p_domaine, '')), '')
  )
  RETURNING id INTO v_id;

  INSERT INTO besoins_votes (besoin_id, profil_id) VALUES (v_id, v_uid);

  RETURN v_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.proposer_besoin_formation(text, text, text) TO authenticated;

-- ─── Voter / retirer son vote ───────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.basculer_vote_besoin(p_besoin_id uuid)
RETURNS TABLE (votes_count bigint, a_vote boolean)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid     uuid := auth.uid();
  v_existe  boolean;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Authentification requise';
  END IF;

  -- Un besoin écarté n'est plus votable : il n'apparaît plus sur le mur.
  IF NOT EXISTS (
    SELECT 1 FROM besoins_formations
    WHERE id = p_besoin_id AND statut <> 'ecarte'
  ) THEN
    RAISE EXCEPTION 'Ce besoin n''existe pas ou n''est plus ouvert au vote.';
  END IF;

  SELECT EXISTS (
    SELECT 1 FROM besoins_votes WHERE besoin_id = p_besoin_id AND profil_id = v_uid
  ) INTO v_existe;

  IF v_existe THEN
    DELETE FROM besoins_votes WHERE besoin_id = p_besoin_id AND profil_id = v_uid;
  ELSE
    INSERT INTO besoins_votes (besoin_id, profil_id) VALUES (p_besoin_id, v_uid)
    ON CONFLICT DO NOTHING;
  END IF;

  RETURN QUERY
    SELECT COUNT(*)::bigint, NOT v_existe
    FROM besoins_votes
    WHERE besoin_id = p_besoin_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.basculer_vote_besoin(uuid) TO authenticated;

-- ─── Vue admin (nominative, super_admin uniquement) ─────────────────────────

CREATE OR REPLACE FUNCTION public.get_besoins_admin()
RETURNS TABLE (
  id                uuid,
  titre             text,
  description       text,
  domaine           text,
  statut            text,
  reponse_admin     text,
  formation_id      uuid,
  formation_titre   text,
  votes_count       bigint,
  auteur_prenom     text,
  auteur_nom        text,
  auteur_email      text,
  auteur_institution text,
  created_at        timestamptz,
  updated_at        timestamptz
)
LANGUAGE plpgsql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM profils WHERE profils.id = auth.uid() AND profils.est_super_admin = true
  ) THEN
    RAISE EXCEPTION 'Accès réservé aux super_admins';
  END IF;

  RETURN QUERY
  SELECT
    b.id,
    b.titre,
    b.description,
    b.domaine,
    b.statut,
    b.reponse_admin,
    b.formation_id,
    f.titre AS formation_titre,
    COALESCE(v.votes_count, 0) AS votes_count,
    p.prenom AS auteur_prenom,
    p.nom    AS auteur_nom,
    p.email  AS auteur_email,
    inst.nom AS auteur_institution,
    b.created_at,
    b.updated_at
  FROM besoins_formations b
  LEFT JOIN profils p ON p.id = b.profil_id
  LEFT JOIN formations f ON f.id = b.formation_id
  LEFT JOIN (
    SELECT besoin_id, COUNT(*) AS votes_count
    FROM besoins_votes
    GROUP BY besoin_id
  ) v ON v.besoin_id = b.id
  LEFT JOIN LATERAL (
    SELECT i.nom
    FROM institution_profils ip
    JOIN institutions i ON i.id = ip.institution_id
    WHERE ip.profil_id = b.profil_id AND ip.statut = 'actif'
    LIMIT 1
  ) inst ON true
  ORDER BY COALESCE(v.votes_count, 0) DESC, b.created_at DESC;
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_besoins_admin() TO authenticated;

-- ─── Mise à jour d'un besoin par l'admin ────────────────────────────────────
-- Passe par une fonction pour tenir updated_at à jour et refuser un statut
-- 'publiee' sans formation rattachée (le mur afficherait un lien mort).

CREATE OR REPLACE FUNCTION public.maj_besoin_formation(
  p_id           uuid,
  p_statut       text,
  p_reponse      text DEFAULT NULL,
  p_formation_id uuid DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM profils WHERE profils.id = auth.uid() AND profils.est_super_admin = true
  ) THEN
    RAISE EXCEPTION 'Accès réservé aux super_admins';
  END IF;

  IF p_statut NOT IN ('propose', 'a_letude', 'en_production', 'publiee', 'ecarte') THEN
    RAISE EXCEPTION 'Statut inconnu : %', p_statut;
  END IF;

  IF p_statut = 'publiee' AND p_formation_id IS NULL THEN
    RAISE EXCEPTION 'Rattachez la formation publiée avant de passer le besoin au statut « publiée ».';
  END IF;

  UPDATE besoins_formations
  SET statut       = p_statut,
      reponse_admin = NULLIF(btrim(COALESCE(p_reponse, '')), ''),
      formation_id = p_formation_id,
      updated_at   = NOW()
  WHERE id = p_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.maj_besoin_formation(uuid, text, text, uuid) TO authenticated;
