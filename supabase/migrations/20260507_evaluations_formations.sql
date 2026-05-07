-- Table des évaluations de satisfaction post-formation

CREATE TABLE IF NOT EXISTS evaluations_formations (
  id                  UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  profil_id           UUID        NOT NULL REFERENCES profils(id) ON DELETE CASCADE,
  formation_id        UUID        NOT NULL REFERENCES formations(id) ON DELETE CASCADE,
  clarte              INTEGER     NOT NULL CHECK (clarte BETWEEN 1 AND 5),
  pertinence_terrain  INTEGER     NOT NULL CHECK (pertinence_terrain BETWEEN 1 AND 5),
  nouveautes_apprises TEXT        NOT NULL CHECK (nouveautes_apprises IN ('oui', 'plutot-oui', 'plutot-non', 'non')),
  recommandation      INTEGER     NOT NULL CHECK (recommandation BETWEEN 1 AND 5),
  commentaire         TEXT,
  created_at          TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(profil_id, formation_id)
);

ALTER TABLE evaluations_formations ENABLE ROW LEVEL SECURITY;

-- Un utilisateur peut insérer sa propre évaluation
CREATE POLICY "utilisateur insere sa propre evaluation"
  ON evaluations_formations FOR INSERT TO authenticated
  WITH CHECK (profil_id = auth.uid());

-- Un utilisateur peut lire uniquement ses propres évaluations
CREATE POLICY "utilisateur lit ses propres evaluations"
  ON evaluations_formations FOR SELECT TO authenticated
  USING (profil_id = auth.uid());

-- Les admins peuvent lire toutes les évaluations (via rôle institution_profils)
CREATE POLICY "admin lit toutes les evaluations"
  ON evaluations_formations FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM institution_profils
      WHERE profil_id = auth.uid()
        AND role = 'admin'
        AND statut = 'actif'
    )
  );

-- Les responsables peuvent lire les évaluations de leurs collaborateurs
CREATE POLICY "responsable lit evaluations de son institution"
  ON evaluations_formations FOR SELECT TO authenticated
  USING (
    profil_id = auth.uid()
    OR check_responsable_institution(profil_id)
  );
