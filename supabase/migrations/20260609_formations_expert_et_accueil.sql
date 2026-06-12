-- Ajoute un champ optionnel expert sur les formations
-- expert_nom  : nom affiché de l'expert·e (ex. "Marie Dupont")
-- expert_role : rôle court (ex. "Éducatrice spécialisée, praticienne en ESE")
-- Ces champs sont optionnels — la carte s'affiche normalement s'ils sont absents.

ALTER TABLE formations
  ADD COLUMN IF NOT EXISTS expert_nom  TEXT,
  ADD COLUMN IF NOT EXISTS expert_role TEXT;

-- Marquer les 5 formations affichées sur la home avec afficher_accueil = true.
-- À adapter si les slugs diffèrent ou si d'autres formations doivent apparaître.
UPDATE formations
SET afficher_accueil = true
WHERE slug IN (
  'handicap-et-vieillissement',
  'mdhpph',
  'ethique-deliberation-intervention-sociale',
  'transition-age-adulte',
  'curatelles-protection-adulte'
);
