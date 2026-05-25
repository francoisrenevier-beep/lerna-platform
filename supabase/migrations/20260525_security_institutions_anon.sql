-- Supprimer la policy anon qui exposait TOUTES les colonnes (dont code_acces,
-- licence_expiration) de TOUTES les institutions à des visiteurs non authentifiés.

DROP POLICY IF EXISTS "lecture publique institutions pour inscription" ON institutions;

-- Fonction SECURITY DEFINER : seule façon pour anon de valider un code institution.
-- Retourne uniquement (id, nom, statut) — jamais code_acces ni licence_expiration.
CREATE OR REPLACE FUNCTION valider_code_institution(code text)
RETURNS TABLE (id uuid, nom text, statut text)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
    SELECT i.id, i.nom, i.statut
    FROM institutions i
    WHERE i.code_acces = upper(trim(code))
    LIMIT 1;
END;
$$;

-- Accessible aux visiteurs non authentifiés (nécessaire pour le formulaire d'inscription)
GRANT EXECUTE ON FUNCTION valider_code_institution(text) TO anon;
GRANT EXECUTE ON FUNCTION valider_code_institution(text) TO authenticated;
