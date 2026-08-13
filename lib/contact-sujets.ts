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

/** Modale de contact flottante, présente sur toutes les pages → /api/contact */
export const SUJETS_CONTACT: Sujet[] = [
  { value: "support", label: "Support technique" },
  { value: "amelioration", label: "Proposition d'amélioration" },
  { value: "formation", label: "Question sur une formation" },
  { value: "formation-institution", label: "Formation propre à notre institution" },
  { value: "parcours-mesure", label: "Parcours sur mesure" },
  { value: "facturation", label: "Facturation / abonnement" },
  { value: "autre", label: "Autre demande" },
]

/** Formulaire de la page /contact → /api/demo */
export const SUJETS_DEMO: Sujet[] = [
  { value: "demonstration", label: "Démonstration de la plateforme" },
  // Les CTA de /tarifs arrivent avec ?sujet=licence-institutionnelle
  { value: "licence-institutionnelle", label: "Demande de licence institutionnelle" },
  { value: "formation-institution", label: "Formation propre à notre institution" },
  { value: "parcours-mesure", label: "Parcours sur mesure" },
  { value: "autre", label: "Autre demande" },
]

/** Libellé correspondant à une valeur ; retourne la valeur brute si inconnue. */
export function labelSujet(sujets: Sujet[], value: string): string {
  return sujets.find((s) => s.value === value)?.label ?? value
}
