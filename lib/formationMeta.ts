"use client"

import type { LucideIcon } from "lucide-react"
import { Accessibility, BookOpen, ShieldCheck, Share2, Heart } from "lucide-react"

// ─── Types ───────────────────────────────────────────────────────────────────

export type NiveauMeta = {
  value: string
  label: string
  couleur: string
}

export type DomaineMeta = {
  value: string
  label: string
  icon: LucideIcon
  tintBg: string      // fond vignette (très clair)
  iconBg: string      // fond pastille icône
  iconColor: string   // couleur icône
  badgeBg: string     // fond badge domaine (inline style)
  badgeText: string   // texte badge domaine (inline style)
  bgClass: string     // tailwind (compat catalogue)
  textClass: string   // tailwind (compat catalogue)
}

// ─── Niveaux ─────────────────────────────────────────────────────────────────

export const NIVEAUX: readonly NiveauMeta[] = [
  { value: "base",          label: "Base",          couleur: "#378ABD" },
  { value: "intermediaire", label: "Intermédiaire",  couleur: "#EF9F27" },
  { value: "avance",        label: "Avancé",         couleur: "#D85A30" },
  { value: "tous",          label: "Tous niveaux",   couleur: "#888780" },
]

// ─── Domaines ────────────────────────────────────────────────────────────────

export const DOMAINES: readonly DomaineMeta[] = [
  {
    value: "handicap",
    label: "Handicap",
    icon: Accessibility,
    tintBg: "#EEF2FF",
    iconBg: "#C7D2FE",
    iconColor: "#3730A3",
    badgeBg: "#EEF2FF",
    badgeText: "#3730A3",
    bgClass: "bg-indigo-50",
    textClass: "text-indigo-700",
  },
  {
    value: "pedagogie-specialisee",
    label: "Pédagogie spécialisée",
    icon: BookOpen,
    tintBg: "#F0FDFA",
    iconBg: "#99F6E4",
    iconColor: "#0F766E",
    badgeBg: "#F0FDFA",
    badgeText: "#0F766E",
    bgClass: "bg-teal-50",
    textClass: "text-teal-700",
  },
  {
    value: "protection-mineurs",
    label: "Protection des mineurs",
    icon: ShieldCheck,
    tintBg: "#FFF7ED",
    iconBg: "#FED7AA",
    iconColor: "#C2410C",
    badgeBg: "#FFF7ED",
    badgeText: "#C2410C",
    bgClass: "bg-orange-50",
    textClass: "text-orange-700",
  },
  {
    value: "transversal",
    label: "Transversal",
    icon: Share2,
    tintBg: "#F8FAFC",
    iconBg: "#E2E8F0",
    iconColor: "#475569",
    badgeBg: "#F1F5F9",
    badgeText: "#475569",
    bgClass: "bg-slate-100",
    textClass: "text-slate-600",
  },
  {
    value: "vieillissement-grand-age",
    label: "Vieillissement et grand âge",
    icon: Heart,
    tintBg: "#F5F3FF",
    iconBg: "#DDD6FE",
    iconColor: "#5B21B6",
    badgeBg: "#F5F3FF",
    badgeText: "#5B21B6",
    bgClass: "bg-violet-50",
    textClass: "text-violet-700",
  },
]

// ─── Fallbacks ────────────────────────────────────────────────────────────────

const NIVEAU_FALLBACK: NiveauMeta = { value: "", label: "—", couleur: "#888780" }

const DOMAINE_FALLBACK: DomaineMeta = {
  value: "",
  label: "—",
  icon: Share2,
  tintBg: "#F8FAFC",
  iconBg: "#E2E8F0",
  iconColor: "#94A3B8",
  badgeBg: "#F1F5F9",
  badgeText: "#64748B",
  bgClass: "bg-gray-50",
  textClass: "text-gray-500",
}

// ─── Normalisation ────────────────────────────────────────────────────────────

export function normaliserSlug(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

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

// ─── Titre vignette ───────────────────────────────────────────────────────────
// Priorité : titre_court DB → ponctuation séparatrice → ~4 premiers mots

export function titreVignette(f: { titre: string; titre_court?: string | null }): string {
  if (f.titre_court?.trim()) return f.titre_court.trim()

  const titre = f.titre.trim()
  if (!titre) return "—"

  // Coupe sur ponctuation séparatrice dans les 42 premiers caractères
  const debut = titre.slice(0, 42)
  const sep = debut.match(/^(.{3,}?)(?:\s*[—–]\s*|\s*:\s*|\s+-\s+)/)
  if (sep) return sep[1].trim()

  // Garde ~4-5 premiers mots, longueur cible ~32 caractères
  const mots = titre.split(/\s+/)
  let result = ""
  let nb = 0
  for (const mot of mots) {
    result = result ? `${result} ${mot}` : mot
    nb++
    if (nb >= 4 && result.length >= 20) break
    if (nb >= 5) break
  }
  return result.trim()
}
