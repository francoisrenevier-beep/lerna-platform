-- Trigger exécuté automatiquement à chaque création d'utilisateur dans auth.users.
-- Lit les métadonnées passées lors du signUp (prenom, nom, institution_id)
-- et insère dans profils + institution_profils de façon atomique.
-- Aucun appel client n'est nécessaire après le signUp.

CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_institution_id uuid;
BEGIN
  -- Crée le profil
  INSERT INTO profils (id, prenom, nom, email)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'prenom',
    NEW.raw_user_meta_data->>'nom',
    NEW.email
  )
  ON CONFLICT (id) DO UPDATE SET
    prenom = EXCLUDED.prenom,
    nom    = EXCLUDED.nom,
    email  = COALESCE(profils.email, EXCLUDED.email);

  -- Rattache à l'institution si fournie
  v_institution_id := (NEW.raw_user_meta_data->>'institution_id')::uuid;
  IF v_institution_id IS NOT NULL THEN
    INSERT INTO institution_profils (profil_id, institution_id, role, statut)
    VALUES (NEW.id, v_institution_id, 'collaborateur', 'actif')
    ON CONFLICT (profil_id, institution_id) DO NOTHING;
  END IF;

  RETURN NEW;
END;
$$;

-- Remplace l'éventuel trigger existant
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();
