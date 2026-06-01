export type NiveauMeta = {
  value: string
  label: string
  couleur: string
}

export type DomaineMeta = {
  value: string
  label: string
  bgClass: string
  textClass: string
}

export const NIVEAUX: readonly NiveauMeta[] = [
  { value: "base",          label: "Base",          couleur: "#378ABD" },
  { value: "intermediaire", label: "Intermédiaire",  couleur: "#EF9F27" },
  { value: "avance",        label: "Avancé",         couleur: "#D85A30" },
  { value: "tous",          label: "Tous niveaux",   couleur: "#888780" },
]

export const DOMAINES: readonly DomaineMeta[] = [
  { value: "handicap",              label: "Handicap",               bgClass: "bg-indigo-50",  textClass: "text-indigo-700"  },
  { value: "pedagogie-specialisee", label: "Pédagogie spécialisée",  bgClass: "bg-teal-50",    textClass: "text-teal-700"    },
  { value: "protection-mineurs",    label: "Protection des mineurs", bgClass: "bg-orange-50",  textClass: "text-orange-700"  },
  { value: "transversal",           label: "Transversal",            bgClass: "bg-slate-100",  textClass: "text-slate-600"   },
]

const NIVEAU_FALLBACK: NiveauMeta   = { value: "", label: "—", couleur: "#888780" }
const DOMAINE_FALLBACK: DomaineMeta = { value: "", label: "—", bgClass: "bg-gray-50", textClass: "text-gray-500" }

function normaliserSlug(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
}

export function getNiveauMeta(value: string | null | undefined): NiveauMeta {
  if (!value) return NIVEAU_FALLBACK
  const direct = NIVEAUX.find((n) => n.value === value)
  if (direct) return direct
  const slug = normaliserSlug(value)
  return NIVEAUX.find((n) => n.value === slug) ?? { ...NIVEAU_FALLBACK, label: value }
}

export function getDomaineMeta(value: string | null | undefined): DomaineMeta {
  if (!value) return DOMAINE_FALLBACK
  const direct = DOMAINES.find((d) => d.value === value)
  if (direct) return direct
  const slug = normaliserSlug(value)
  return DOMAINES.find((d) => d.value === slug) ?? { ...DOMAINE_FALLBACK, value, label: value }
}
