-- Le code d'accès n'est plus forcé en majuscules côté admin : il peut désormais
-- être saisi en casse libre (ex: "Learna2024"). L'ancienne version comparait
-- `code_acces = upper(trim(code))`, ce qui rendait impossible la validation d'un
-- code stocké avec des minuscules.
--
-- La comparaison devient insensible à la casse : les codes historiques (tous en
-- majuscules) continuent de fonctionner, et les nouveaux codes en casse mixte
-- sont acceptés quelle que soit la façon dont le collaborateur les tape.

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
    WHERE lower(i.code_acces) = lower(trim(code))
    LIMIT 1;
END;
$$;

GRANT EXECUTE ON FUNCTION valider_code_institution(text) TO anon;
GRANT EXECUTE ON FUNCTION valider_code_institution(text) TO authenticated;

-- Empêche deux institutions d'avoir des codes qui ne diffèrent que par la casse
-- (sinon la validation ci-dessus deviendrait ambiguë).
CREATE UNIQUE INDEX IF NOT EXISTS institutions_code_acces_lower_key
  ON institutions (lower(code_acces));
