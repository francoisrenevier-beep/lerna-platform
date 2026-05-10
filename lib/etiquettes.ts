type EtiquetteType = "domaine" | "thematique" | "public_cible"

const couleursDomaine: Record<string, string> = {
  "Handicap":                  "bg-[#EEF2FF] text-[#3730A3]",
  "Pédagogie Spécialisée":     "bg-[#FFF7ED] text-[#C2410C]",
  "Protection des mineurs":    "bg-[#FEF2F2] text-[#B91C1C]",
  "Transversal":               "bg-[#F1F5F9] text-[#475569]",
  // Anciens noms — rétrocompatibilité
  "Éducation spécialisée":     "bg-[#FFF7ED] text-[#C2410C]",
  "Protection de l'enfance":   "bg-[#FEF2F2] text-[#B91C1C]",
  "Accompagnement social":     "bg-[#F0FDF4] text-[#15803D]",
}

const couleursThematique: Record<string, string> = {
  "Accompagnement":        "bg-[#EFF6FF] text-[#1D4ED8]",
  "Management":            "bg-[#FDF4FF] text-[#7E22CE]",
  "Communication":         "bg-[#ECFDF5] text-[#047857]",
  "Éthique et posture":    "bg-[#FFFBEB] text-[#B45309]",
  "Outils et méthodes":    "bg-[#F0F9FF] text-[#0369A1]",
  "Législation et droits": "bg-[#FFF1F2] text-[#BE123C]",
}

const couleursPublicCible: Record<string, string> = {
  "Tous collaborateurs": "bg-[#F1F5F9] text-[#334155]",
  "Éducateur / ASE":     "bg-[#EEF2FF] text-[#4338CA]",
  "Cadre intermédiaire": "bg-[#FDF4FF] text-[#6D28D9]",
  "Direction":           "bg-[#1B2D5B] text-white",
}

const fallback = "bg-gray-100 text-gray-600"

export function getCouleurEtiquette(type: EtiquetteType, valeur: string | null | undefined): string {
  if (!valeur) return fallback
  if (type === "domaine")      return couleursDomaine[valeur]      ?? fallback
  if (type === "thematique")   return couleursThematique[valeur]   ?? fallback
  if (type === "public_cible") return couleursPublicCible[valeur]  ?? fallback
  return fallback
}
