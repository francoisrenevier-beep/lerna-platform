// Source unique des sujets proposés par les formulaires de contact.
//
// Les valeurs (`value`) sont transmises par le client ; les libellés (`label`)
// sont ce qui apparaît dans l'e-mail Resend. Définir les deux ici évite que la
// liste du formulaire et celle de la route API divergent — auquel cas l'e-mail
// afficherait la valeur brute au lieu du libellé.

export type Sujet = {
  value: string
  label: string
}

// « Formation signature » et « Parcours co-développé pour le catalogue » se
// suivent dans les deux listes : le second libellé doit dire de lui-même ce qui
// l'en distingue. Une formation signature est réservée aux équipes de
// l'institution et comprise dans la licence ; un parcours co-développé rejoint
// le catalogue commun et se réalise sur mandat. « Parcours sur mesure » ne le
// disait pas.
//
// Les `value` sont des identifiants de transport : les renommer casserait les
// liens ?sujet=… déjà en circulation, sans rien changer pour le destinataire.
// Seuls les `label` portent la terminologie du site — « Formation signature »
// remonte donc jusqu'à l'objet de l'e-mail Resend, qui les reprend.

/** Modale de contact flottante, présente sur toutes les pages → /api/contact */
export const SUJETS_CONTACT: Sujet[] = [
  { value: "support", label: "Support technique" },
  { value: "amelioration", label: "Proposition d'amélioration" },
  { value: "formation", label: "Question sur une formation" },
  { value: "formation-institution", label: "Formation signature" },
  { value: "parcours-mesure", label: "Parcours co-développé pour le catalogue" },
  { value: "facturation", label: "Facturation / abonnement" },
  { value: "autre", label: "Autre demande" },
]

/** Formulaire de la page /contact → /api/demo */
export const SUJETS_DEMO: Sujet[] = [
  { value: "demonstration", label: "Démonstration de la plateforme" },
  // Les CTA de /tarifs arrivent avec ?sujet=licence-institutionnelle
  { value: "licence-institutionnelle", label: "Demande de licence institutionnelle" },
  { value: "formation-institution", label: "Formation signature" },
  { value: "parcours-mesure", label: "Parcours co-développé pour le catalogue" },
  // L'écran de fin du module en accès libre arrive avec ?sujet=decouverte-module-libre.
  // Le libellé remonte jusqu'à l'objet de l'e-mail : c'est ce qui permet de
  // distinguer, dans la boîte de réception, une demande née du module libre
  // d'une demande de démonstration ordinaire.
  { value: "decouverte-module-libre", label: "Suite au module en accès libre" },
  { value: "autre", label: "Autre demande" },
]

/** Libellé correspondant à une valeur ; retourne la valeur brute si inconnue. */
export function labelSujet(sujets: Sujet[], value: string): string {
  return sujets.find((s) => s.value === value)?.label ?? value
}
