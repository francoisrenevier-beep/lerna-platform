-- Vue lisible des profils par institution, avec rôle, statut et secteur
-- Évite d'avoir à jongler avec les UUIDs dans l'interface Supabase

CREATE OR REPLACE VIEW vue_institution_profils AS
SELECT
  ip.institution_id,
  i.nom                   AS institution_nom,
  ip.profil_id,
  trim(p.prenom || ' ' || p.nom) AS profil_nom,
  p.email                 AS profil_email,
  ip.role,
  ip.statut,
  ip.secteur,
  ip.created_at
FROM institution_profils ip
JOIN institutions i  ON i.id  = ip.institution_id
JOIN profils p       ON p.id  = ip.profil_id
ORDER BY i.nom, ip.role, p.nom, p.prenom;

-- Accès en lecture pour les super admins et les responsables
-- (la vue hérite des RLS des tables sous-jacentes en SECURITY INVOKER par défaut)
GRANT SELECT ON vue_institution_profils TO authenticated;
