-- Ajoute la colonne email à la table profils
ALTER TABLE profils ADD COLUMN IF NOT EXISTS email text;

-- Fonction SECURITY DEFINER pour récupérer l'email depuis auth.users
CREATE OR REPLACE FUNCTION fill_profil_email()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  SELECT email INTO NEW.email
  FROM auth.users
  WHERE id = NEW.id;
  RETURN NEW;
END;
$$;

-- Trigger : remplit automatiquement l'email à l'insertion d'un profil
DROP TRIGGER IF EXISTS fill_profil_email_on_insert ON profils;
CREATE TRIGGER fill_profil_email_on_insert
BEFORE INSERT ON profils
FOR EACH ROW
WHEN (NEW.email IS NULL)
EXECUTE FUNCTION fill_profil_email();

-- Backfill des profils existants
UPDATE profils p
SET email = u.email
FROM auth.users u
WHERE p.id = u.id
  AND p.email IS NULL;
