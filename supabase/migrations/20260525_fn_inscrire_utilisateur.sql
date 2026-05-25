-- Fonction atomique d'inscription : crée le profil si absent ET rattache l'institution.
-- Résout la race condition entre le trigger auth.users→profils et l'insert institution_profils.
-- SECURITY DEFINER pour pouvoir upsert profils même sans policy INSERT côté utilisateur.

CREATE OR REPLACE FUNCTION inscrire_utilisateur(
  p_prenom        text,
  p_nom           text,
  p_email         text,
  p_institution_id uuid
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Seul l'utilisateur lui-même peut s'inscrire
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Non autorisé';
  END IF;

  -- Upsert du profil (le trigger peut ne pas avoir encore tourné)
  INSERT INTO profils (id, prenom, nom, email)
  VALUES (auth.uid(), p_prenom, p_nom, p_email)
  ON CONFLICT (id) DO UPDATE SET
    prenom = EXCLUDED.prenom,
    nom    = EXCLUDED.nom,
    email  = COALESCE(profils.email, EXCLUDED.email);

  -- Rattachement à l'institution (idempotent)
  INSERT INTO institution_profils (profil_id, institution_id, role, statut)
  VALUES (auth.uid(), p_institution_id, 'collaborateur', 'actif')
  ON CONFLICT (profil_id, institution_id) DO NOTHING;
END;
$$;

GRANT EXECUTE ON FUNCTION inscrire_utilisateur(text, text, text, uuid) TO authenticated;
