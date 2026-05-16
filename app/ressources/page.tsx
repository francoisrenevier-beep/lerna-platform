"use client"

import { useEffect, useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Sidebar } from "@/components/Sidebar"
import { BottomNav } from "@/components/BottomNav"
import { ResourceCard, type Resource } from "@/components/ResourceCard"
import { Search } from "lucide-react"

// ─── Types locaux ─────────────────────────────────────────────────────────────

type ResourceWithMeta = Resource & {
  is_featured: boolean
}

// ─── Constantes filtres ───────────────────────────────────────────────────────

const DOMAINS = [
  { value: "handicap",              label: "Handicap" },
  { value: "transversal",           label: "Transversal" },
  { value: "management",            label: "Management" },
  { value: "pedagogie_specialisee", label: "Pédagogie spécialisée" },
  { value: "protection_mineurs",    label: "Protection des mineurs" },
]

const TYPES = [
  { value: "pdf",       label: "PDF" },
  { value: "link",      label: "Lien" },
  { value: "checklist", label: "Check-list" },
  { value: "memo",      label: "Fiche mémo" },
  { value: "tool",      label: "Outil" },
  { value: "official",  label: "Officiel" },
  { value: "article",   label: "Article" },
  { value: "video",     label: "Vidéo" },
  { value: "template",  label: "Modèle" },
]

const LEVELS = [
  { value: "base",          label: "Base" },
  { value: "intermediaire", label: "Intermédiaire" },
  { value: "confirme",      label: "Confirmé" },
  { value: "tous_niveaux",  label: "Tous niveaux" },
]

const selectCls = "border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] text-gray-600"

// ─── Section component ────────────────────────────────────────────────────────

function Section({ title, resources, favoriteIds, onToggleFavorite }: {
  title: string
  resources: ResourceWithMeta[]
  favoriteIds: Set<string>
  onToggleFavorite: (id: string) => void
}) {
  if (resources.length === 0) return null
  return (
    <section className="mb-10">
      <h3 className="text-base font-bold text-[#1B2D5B] mb-4 flex items-center gap-2">
        <span className="w-1 h-5 bg-[#3DBFA0] rounded-full inline-block" />
        {title}
        <span className="text-xs font-normal text-gray-400 ml-1">({resources.length})</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map(r => (
          <ResourceCard
            key={r.id}
            resource={r}
            isFavorite={favoriteIds.has(r.id)}
            onToggleFavorite={onToggleFavorite}
            showNbFormations
          />
        ))}
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RessourcesPage() {
  const [resources, setResources] = useState<ResourceWithMeta[]>([])
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)

  const [search, setSearch]           = useState("")
  const [filtreDomain, setFiltreDomain] = useState("")
  const [filtreType, setFiltreType]     = useState("")
  const [filtreLevel, setFiltreLevel]   = useState("")

  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      const result = await supabase.auth.getUser()
      if (!result.data.user) { router.push("/connexion"); return }
      const uid = result.data.user.id
      setUserId(uid)

      const [{ data: resData }, { data: favsData }] = await Promise.all([
        supabase
          .from("resources")
          .select("*, formation_resources(is_featured, formation_id)")
          .eq("is_active", true)
          .order("created_at", { ascending: false }),
        supabase
          .from("user_resource_favorites")
          .select("resource_id")
          .eq("user_id", uid),
      ])

      if (resData) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setResources(resData.map((r: any) => ({
          ...r,
          is_featured: r.formation_resources?.some((fr: { is_featured: boolean }) => fr.is_featured) ?? false,
          nb_formations: r.formation_resources?.length ?? 0,
          formation_resources: undefined,
        })))
      }

      if (favsData) {
        setFavoriteIds(new Set(favsData.map((f: { resource_id: string }) => f.resource_id)))
      }

      setLoading(false)
    }
    getData()
  }, [router])

  const toggleFavorite = async (resourceId: string) => {
    if (!userId) return
    if (favoriteIds.has(resourceId)) {
      await supabase.from("user_resource_favorites")
        .delete()
        .eq("user_id", userId)
        .eq("resource_id", resourceId)
      setFavoriteIds(prev => { const s = new Set(prev); s.delete(resourceId); return s })
    } else {
      await supabase.from("user_resource_favorites")
        .insert({ user_id: userId, resource_id: resourceId })
      setFavoriteIds(prev => new Set([...prev, resourceId]))
    }
  }

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return resources.filter(r => {
      if (filtreDomain && r.domain !== filtreDomain) return false
      if (filtreType && r.type !== filtreType) return false
      if (filtreLevel && r.level !== filtreLevel) return false
      if (q) {
        const haystack = [r.title, r.description ?? "", ...(r.tags ?? [])].join(" ").toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [resources, search, filtreDomain, filtreType, filtreLevel])

  const recommended = filtered.filter(r => r.is_featured)
  const outilsTerrain = filtered.filter(r =>
    r.category === "outil_terrain" || ["checklist", "tool", "template"].includes(r.type)
  )
  const fichesMemo = filtered.filter(r =>
    r.category === "fiche_memo" || r.type === "memo"
  )
  const officielles = filtered.filter(r =>
    ["ressource_officielle", "pour_aller_plus_loin", "reference_theorique", "support_equipe"].includes(r.category ?? "") ||
    ["official", "article"].includes(r.type)
  )

  const hasResults = recommended.length > 0 || outilsTerrain.length > 0 || fichesMemo.length > 0 || officielles.length > 0

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#1B2D5B] text-sm">Chargement...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-x-hidden">
      <Sidebar pageActive="ressources" />
      <main className="flex-1 p-6 pb-28 md:p-8 md:pb-8 overflow-auto">

        {/* En-tête */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">Ressources</h2>
          <p className="text-gray-500 mt-1 text-sm max-w-2xl">
            Retrouvez les outils pratiques, fiches mémo et ressources complémentaires associés à vos formations.
          </p>
        </div>

        {/* Recherche + filtres */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Rechercher une ressource…"
              className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
            />
          </div>
          <select value={filtreDomain} onChange={e => setFiltreDomain(e.target.value)} className={selectCls}>
            <option value="">Tous les domaines</option>
            {DOMAINS.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}
          </select>
          <select value={filtreType} onChange={e => setFiltreType(e.target.value)} className={selectCls}>
            <option value="">Tous les types</option>
            {TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
          <select value={filtreLevel} onChange={e => setFiltreLevel(e.target.value)} className={selectCls}>
            <option value="">Tous niveaux</option>
            {LEVELS.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
          </select>
        </div>

        {resources.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-16 text-center">
            <p className="text-4xl mb-4">📚</p>
            <p className="text-[#1B2D5B] font-semibold text-base">Aucune ressource disponible</p>
            <p className="text-gray-400 text-sm mt-1">Des ressources seront ajoutées prochainement par votre administrateur.</p>
          </div>
        ) : !hasResults ? (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-12 text-center">
            <p className="text-3xl mb-3">🔍</p>
            <p className="text-[#1B2D5B] font-semibold">Aucun résultat</p>
            <p className="text-gray-400 text-sm mt-1">Essayez d'autres termes ou modifiez les filtres.</p>
          </div>
        ) : (
          <>
            <Section
              title="Ressources recommandées"
              resources={recommended}
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
            />
            <Section
              title="Outils terrain"
              resources={outilsTerrain}
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
            />
            <Section
              title="Fiches mémo"
              resources={fichesMemo}
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
            />
            <Section
              title="Ressources officielles & pour aller plus loin"
              resources={officielles}
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
            />
          </>
        )}
      </main>
      <BottomNav pageActive="ressources" />
    </div>
  )
}
