"use client"

import {
  FileText, Link2, CheckSquare, StickyNote, Wrench,
  Landmark, Newspaper, PlayCircle, Layout, ExternalLink,
  Star, Clock, BookOpen, Download,
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

export type Resource = {
  id: string
  title: string
  description: string | null
  type: string
  category: string | null
  domain: string | null
  theme: string | null
  level: string | null
  tags: string[] | null
  estimated_time: string | null
  source_name: string | null
  source_url: string | null
  file_url: string | null
  is_downloadable: boolean
  is_external: boolean
  nb_formations?: number
}

type ResourceCardProps = {
  resource: Resource
  isFavorite?: boolean
  onToggleFavorite?: (id: string) => void
  contextNote?: string | null
  showNbFormations?: boolean
  compact?: boolean
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function TypeIcon({ type }: { type: string }) {
  const cls = "w-4 h-4"
  switch (type) {
    case "pdf":       return <FileText className={cls} />
    case "checklist": return <CheckSquare className={cls} />
    case "memo":      return <StickyNote className={cls} />
    case "tool":      return <Wrench className={cls} />
    case "official":  return <Landmark className={cls} />
    case "article":   return <Newspaper className={cls} />
    case "video":     return <PlayCircle className={cls} />
    case "template":  return <Layout className={cls} />
    case "link":      return <ExternalLink className={cls} />
    default:          return <BookOpen className={cls} />
  }
}

const TYPE_LABELS: Record<string, string> = {
  pdf:       "PDF",
  link:      "Lien",
  checklist: "Check-list",
  memo:      "Fiche mémo",
  tool:      "Outil",
  official:  "Officiel",
  article:   "Article",
  video:     "Vidéo",
  template:  "Modèle",
}

const DOMAIN_COLORS: Record<string, string> = {
  handicap:              "bg-[#EEF2FF] text-[#3730A3]",
  transversal:           "bg-[#F1F5F9] text-[#475569]",
  management:            "bg-[#FDF4FF] text-[#7E22CE]",
  pedagogie_specialisee: "bg-[#EFF6FF] text-[#1D4ED8]",
  protection_mineurs:    "bg-[#FFF1F2] text-[#BE123C]",
}

const LEVEL_COLORS: Record<string, string> = {
  base:          "bg-green-50 text-green-700",
  intermediaire: "bg-amber-50 text-amber-700",
  confirme:      "bg-orange-50 text-orange-700",
  tous_niveaux:  "bg-gray-100 text-gray-600",
}

const LEVEL_LABELS: Record<string, string> = {
  base:          "Base",
  intermediaire: "Intermédiaire",
  confirme:      "Confirmé",
  tous_niveaux:  "Tous niveaux",
}

const DOMAIN_LABELS: Record<string, string> = {
  handicap:              "Handicap",
  transversal:           "Transversal",
  management:            "Management",
  pedagogie_specialisee: "Pédagogie spécialisée",
  protection_mineurs:    "Protection des mineurs",
}

function Badge({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full whitespace-nowrap ${color ?? "bg-gray-100 text-gray-500"}`}>
      {children}
    </span>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ResourceCard({
  resource,
  isFavorite = false,
  onToggleFavorite,
  contextNote,
  showNbFormations = false,
  compact = false,
}: ResourceCardProps) {
  const { id, title, description, type, domain, theme, level,
          estimated_time, source_name, source_url, file_url,
          is_downloadable, nb_formations } = resource

  const hasUrl = (is_downloadable && file_url) || source_url
  const actionHref = (is_downloadable && file_url) ? file_url : (source_url ?? "")

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">

      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#3DBFA0]/10 flex items-center justify-center flex-shrink-0 text-[#3DBFA0] mt-0.5">
          <TypeIcon type={type} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className={`font-semibold text-[#1B2D5B] leading-snug ${compact ? "text-sm" : "text-sm"}`}>
              {title}
            </h3>
            {onToggleFavorite && (
              <button
                onClick={() => onToggleFavorite(id)}
                className="flex-shrink-0 p-1 -mt-0.5 rounded transition-colors hover:bg-amber-50"
                title={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
              >
                <Star
                  className={`w-4 h-4 transition-colors ${isFavorite ? "fill-amber-400 text-amber-400" : "text-gray-300 hover:text-amber-300"}`}
                />
              </button>
            )}
          </div>
          {description && !compact && (
            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{description}</p>
          )}
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-1">
        {domain && (
          <Badge color={DOMAIN_COLORS[domain] ?? "bg-gray-100 text-gray-500"}>
            {DOMAIN_LABELS[domain] ?? domain}
          </Badge>
        )}
        <Badge color="bg-[#3DBFA0]/10 text-[#1B8B72]">
          {TYPE_LABELS[type] ?? type}
        </Badge>
        {level && (
          <Badge color={LEVEL_COLORS[level] ?? "bg-gray-100 text-gray-500"}>
            {LEVEL_LABELS[level] ?? level}
          </Badge>
        )}
        {theme && (
          <Badge color="bg-[#EFF6FF] text-[#1D4ED8]">{theme}</Badge>
        )}
      </div>

      {/* Meta */}
      {(estimated_time || source_name || (showNbFormations && nb_formations)) && (
        <div className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          {estimated_time && (
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {estimated_time}
            </span>
          )}
          {source_name && (
            <span className="before:content-['•'] before:mr-2">{source_name}</span>
          )}
          {showNbFormations && nb_formations && nb_formations > 0 && (
            <span className="before:content-['•'] before:mr-2">
              Liée à {nb_formations} formation{nb_formations > 1 ? "s" : ""}
            </span>
          )}
        </div>
      )}

      {/* Context note */}
      {contextNote && (
        <div className="bg-[#3DBFA0]/5 border-l-2 border-[#3DBFA0] pl-3 py-2 rounded-r">
          <p className="text-xs text-gray-600">
            <span className="font-medium text-[#1B8B72]">Pourquoi cette ressource ici : </span>
            {contextNote}
          </p>
        </div>
      )}

      {/* Action */}
      <div className="mt-auto pt-3 border-t border-gray-50">
        {hasUrl ? (
          <a
            href={actionHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#3DBFA0] hover:bg-[#2ea88b] px-4 py-2 rounded-lg transition-colors"
          >
            {is_downloadable && file_url ? (
              <>
                <Download className="w-3.5 h-3.5" />
                Télécharger
              </>
            ) : (
              <>
                <ExternalLink className="w-3.5 h-3.5" />
                {resource.is_external ? "Ouvrir le lien" : "Consulter"}
              </>
            )}
          </a>
        ) : (
          <span className="inline-flex items-center text-xs font-medium text-gray-400 bg-gray-100 px-4 py-2 rounded-lg cursor-not-allowed">
            Bientôt disponible
          </span>
        )}
      </div>
    </div>
  )
}
