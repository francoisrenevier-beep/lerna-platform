-- ============================================================
-- Système de ressources v2 — tables enrichies + migration
-- Remplace l'ancienne table `ressources` (liaison directe formation_id)
-- par une architecture pivot réutilisable multi-formations/modules
-- ============================================================

-- ── Trigger updated_at ───────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- ── 1. Table resources ────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS resources (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  title           TEXT        NOT NULL,
  description     TEXT,
  type            TEXT        NOT NULL DEFAULT 'link',
  -- pdf | link | checklist | memo | tool | official | article | video | template
  category        TEXT,
  -- outil_terrain | fiche_memo | ressource_officielle | pour_aller_plus_loin | support_equipe | reference_theorique
  domain          TEXT,
  -- handicap | transversal | management | pedagogie_specialisee | protection_mineurs
  theme           TEXT,
  level           TEXT,
  -- base | intermediaire | confirme | tous_niveaux
  target_audience TEXT[],
  tags            TEXT[],
  estimated_time  TEXT,
  source_name     TEXT,
  source_url      TEXT,
  file_url        TEXT,
  is_downloadable BOOLEAN     NOT NULL DEFAULT false,
  is_external     BOOLEAN     NOT NULL DEFAULT false,
  is_active       BOOLEAN     NOT NULL DEFAULT true,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TRIGGER resources_updated_at
  BEFORE UPDATE ON resources
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

ALTER TABLE resources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "resources_select"
  ON resources FOR SELECT TO authenticated
  USING (is_active = true OR is_super_admin());

CREATE POLICY "resources_insert"
  ON resources FOR INSERT TO authenticated
  WITH CHECK (is_super_admin());

CREATE POLICY "resources_update"
  ON resources FOR UPDATE TO authenticated
  USING (is_super_admin()) WITH CHECK (is_super_admin());

CREATE POLICY "resources_delete"
  ON resources FOR DELETE TO authenticated
  USING (is_super_admin());

-- ── 2. Table pivot formation_resources ───────────────────────────────────────

CREATE TABLE IF NOT EXISTS formation_resources (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  formation_id  UUID        NOT NULL REFERENCES formations(id) ON DELETE CASCADE,
  resource_id   UUID        NOT NULL REFERENCES resources(id) ON DELETE CASCADE,
  display_order INT         NOT NULL DEFAULT 0,
  is_featured   BOOLEAN     NOT NULL DEFAULT false,
  context_note  TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (formation_id, resource_id)
);

ALTER TABLE formation_resources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "formation_resources_select"
  ON formation_resources FOR SELECT TO authenticated USING (true);

CREATE POLICY "formation_resources_insert"
  ON formation_resources FOR INSERT TO authenticated
  WITH CHECK (is_super_admin());

CREATE POLICY "formation_resources_update"
  ON formation_resources FOR UPDATE TO authenticated
  USING (is_super_admin()) WITH CHECK (is_super_admin());

CREATE POLICY "formation_resources_delete"
  ON formation_resources FOR DELETE TO authenticated
  USING (is_super_admin());

-- ── 3. Table pivot module_resources ──────────────────────────────────────────

CREATE TABLE IF NOT EXISTS module_resources (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id     UUID        NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
  resource_id   UUID        NOT NULL REFERENCES resources(id) ON DELETE CASCADE,
  display_order INT         NOT NULL DEFAULT 0,
  context_note  TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (module_id, resource_id)
);

ALTER TABLE module_resources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "module_resources_select"
  ON module_resources FOR SELECT TO authenticated USING (true);

CREATE POLICY "module_resources_insert"
  ON module_resources FOR INSERT TO authenticated
  WITH CHECK (is_super_admin());

CREATE POLICY "module_resources_update"
  ON module_resources FOR UPDATE TO authenticated
  USING (is_super_admin()) WITH CHECK (is_super_admin());

CREATE POLICY "module_resources_delete"
  ON module_resources FOR DELETE TO authenticated
  USING (is_super_admin());

-- ── 4. Table user_resource_favorites ─────────────────────────────────────────

CREATE TABLE IF NOT EXISTS user_resource_favorites (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  resource_id UUID        NOT NULL REFERENCES resources(id) ON DELETE CASCADE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, resource_id)
);

ALTER TABLE user_resource_favorites ENABLE ROW LEVEL SECURITY;

CREATE POLICY "favorites_select"
  ON user_resource_favorites FOR SELECT TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "favorites_insert"
  ON user_resource_favorites FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "favorites_delete"
  ON user_resource_favorites FOR DELETE TO authenticated
  USING (user_id = auth.uid());

-- ── 5. Migration des données de l'ancienne table ressources ──────────────────
-- Idempotent : ne s'exécute que si l'ancienne table existe encore

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.tables
    WHERE table_schema = 'public' AND table_name = 'ressources'
  ) THEN

    INSERT INTO resources (
      id, title, description, type,
      source_url, file_url,
      is_downloadable, is_external, is_active,
      created_at
    )
    SELECT
      id,
      titre,
      description,
      CASE type
        WHEN 'pdf'     THEN 'pdf'
        WHEN 'video'   THEN 'video'
        WHEN 'article' THEN 'article'
        WHEN 'memo'    THEN 'memo'
        ELSE 'link'
      END,
      CASE
        WHEN url IS NOT NULL AND url <> '#' AND url LIKE 'http%' AND type <> 'pdf'
        THEN url ELSE NULL
      END,
      CASE
        WHEN url IS NOT NULL AND url <> '#' AND (type = 'pdf' OR url LIKE '/storage/%')
        THEN url ELSE NULL
      END,
      (type = 'pdf'),
      (url IS NOT NULL AND url <> '#' AND url LIKE 'http%'),
      true,
      created_at
    FROM ressources
    ON CONFLICT (id) DO NOTHING;

    INSERT INTO formation_resources (formation_id, resource_id, display_order)
    SELECT formation_id, id, ordre
    FROM ressources
    WHERE formation_id IS NOT NULL
    ON CONFLICT (formation_id, resource_id) DO NOTHING;

    DROP TABLE ressources CASCADE;

  END IF;
END $$;
