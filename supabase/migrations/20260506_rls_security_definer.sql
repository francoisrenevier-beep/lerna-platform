-- Fonction SECURITY DEFINER pour vérifier l'accès responsable sans récursion RLS.
-- Les policies avec JOIN sur institution_profils créent une dépendance circulaire
-- car institution_profils a aussi des policies qui se réfèrent à elle-même.
-- SECURITY DEFINER fait tourner la fonction avec les droits du owner (postgres),
-- contournant RLS pour la vérification interne.

CREATE OR REPLACE FUNCTION check_responsable_institution(target_profil_id uuid)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM institution_profils resp
    JOIN institution_profils collab ON collab.institution_id = resp.institution_id
    WHERE resp.profil_id = auth.uid()
      AND resp.role = 'responsable'
      AND resp.statut = 'actif'
      AND collab.profil_id = target_profil_id
  );
$$;

-- Progression
DROP POLICY IF EXISTS "responsable lit progression de son institution" ON progression;
CREATE POLICY "responsable lit progression de son institution"
  ON progression FOR SELECT TO authenticated
  USING (profil_id = auth.uid() OR check_responsable_institution(profil_id));

-- Attestations
DROP POLICY IF EXISTS "responsable lit attestations de son institution" ON attestations;
CREATE POLICY "responsable lit attestations de son institution"
  ON attestations FOR SELECT TO authenticated
  USING (profil_id = auth.uid() OR check_responsable_institution(profil_id));

-- Institution profils (lecture)
DROP POLICY IF EXISTS "responsable lit liaisons de son institution" ON institution_profils;
CREATE POLICY "responsable lit liaisons de son institution"
  ON institution_profils FOR SELECT TO authenticated
  USING (profil_id = auth.uid() OR check_responsable_institution(profil_id));

-- Institution profils (modification statut)
DROP POLICY IF EXISTS "responsable modifie statut collaborateurs" ON institution_profils;
CREATE POLICY "responsable modifie statut collaborateurs"
  ON institution_profils FOR UPDATE TO authenticated
  USING (check_responsable_institution(profil_id))
  WITH CHECK (check_responsable_institution(profil_id));
