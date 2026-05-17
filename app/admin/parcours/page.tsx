"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { AdminSidebar } from "@/components/AdminSidebar"

type Parcours = {
  id: string
  titre: string
  slug: string
  description_courte: string | null
  image_url: string | null
  est_publie: boolean
  nb_formations: number
  created_at: string
}

type FormCreate = {
  titre: string
  slug: string
  description_courte: string
  description: string
  est_publie: boolean
}

const FORM_VIDE: FormCreate = {
  titre: "", slug: "", description_courte: "", description: "", est_publie: false,
}

function slugifier(titre: string): string {
  return titre.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-")
}

export default function AdminParcoursPage() {
  const [parcoursList, setParcoursList] = useState<Parcours[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreate, setShowCreate] = useState(false)
  const [formCreate, setFormCreate] = useState<FormCreate>(FORM_VIDE)
  const [createLoading, setCreateLoading] = useState(false)
  const [createError, setCreateError] = useState("")
  const [toggleLoading, setToggleLoading] = useState<string | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<{ id: string; titre: string } | null>(null)
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null)
  const [recherche, setRecherche] = useState("")
  const router = useRouter()

  const chargerParcours = async () => {
    const { data } = await supabase
      .from("parcours")
      .select("id, titre, slug, description_courte, image_url, est_publie, created_at")
      .order("created_at", { ascending: false })

    if (!data) { setParcoursList([]); return }

    const enrichis = await Promise.all(
      data.map(async (p) => {
        const { count } = await supabase
          .from("parcours_formations")
          .select("id", { count: "exact" })
          .eq("parcours_id", p.id)
        return { ...p, nb_formations: count || 0 } as Parcours
      })
    )
    setParcoursList(enrichis)
  }

  useEffect(() => {
    const getData = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      const user = session?.user
      if (!user) { router.push("/connexion"); return }
      const { data: profil } = await supabase.from("profils").select("est_super_admin").eq("id", user.id).single()
      if (!profil?.est_super_admin) { router.push("/dashboard"); return }
      await chargerParcours()
      setLoading(false)
    }
    getData()
  }, [router])

  const creerParcours = async () => {
    if (!formCreate.titre.trim() || !formCreate.slug.trim()) {
      setCreateError("Le titre et le slug sont requis.")
      return
    }
    setCreateLoading(true)
    setCreateError("")
    const { data, error } = await supabase.from("parcours").insert({
      titre: formCreate.titre.trim(),
      slug: formCreate.slug.trim(),
      description_courte: formCreate.description_courte || null,
      description: formCreate.description || null,
      est_publie: formCreate.est_publie,
    }).select("id").single()

    if (error) { setCreateError("Erreur : " + error.message); setCreateLoading(false); return }
    setShowCreate(false)
    setFormCreate(FORM_VIDE)
    setCreateLoading(false)
    if (data?.id) router.push(`/admin/parcours/${data.id}`)
  }

  const togglePublier = async (id: string, estPublie: boolean) => {
    setToggleLoading(id)
    await supabase.from("parcours").update({ est_publie: !estPublie }).eq("id", id)
    await chargerParcours()
    setToggleLoading(null)
  }

  const supprimerParcours = async (id: string) => {
    setDeleteLoading(id)
    await supabase.from("parcours").delete().eq("id", id)
    setConfirmDelete(null)
    await chargerParcours()
    setDeleteLoading(null)
  }

  const filtrés = parcoursList.filter(p =>
    !recherche || p.titre.toLowerCase().includes(recherche.toLowerCase())
  )

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-[#1B2D5B] text-sm">Chargement...</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar pageActive="parcours" />
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#1B2D5B]">Parcours complets</h2>
            <p className="text-gray-500 mt-1">{parcoursList.length} parcours au total.</p>
          </div>
          <button
            onClick={() => { setShowCreate(true); setCreateError("") }}
            className="bg-[#3DBFA0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2ea88b] transition-colors"
          >
            + Créer un parcours
          </button>
        </div>

        <div className="mb-4">
          <input
            type="text"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="Rechercher un parcours..."
            className="w-full max-w-sm border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtrés.map((p) => (
            <div key={p.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
              <div className="h-36 bg-gray-100 flex-shrink-0 overflow-hidden relative">
                {p.image_url ? (
                  <img src={p.image_url} alt={p.titre} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                )}
                <span className={`absolute top-2 right-2 text-xs font-medium px-2 py-0.5 rounded-full ${p.est_publie ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                  {p.est_publie ? "Publié" : "Brouillon"}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-[#1B2D5B] text-sm leading-snug mb-1">{p.titre}</h3>
                {p.description_courte && (
                  <p className="text-xs text-gray-500 mb-2 line-clamp-2">{p.description_courte}</p>
                )}
                <p className="text-xs text-gray-400 mb-4">{p.nb_formations} formation{p.nb_formations !== 1 ? "s" : ""}</p>
                <div className="flex items-center gap-2 mt-auto flex-wrap">
                  <a
                    href={`/admin/parcours/${p.id}`}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-[#1B2D5B]/10 text-[#1B2D5B] hover:bg-[#1B2D5B]/20 font-medium transition-colors"
                  >
                    Éditer →
                  </a>
                  <button
                    onClick={() => togglePublier(p.id, p.est_publie)}
                    disabled={toggleLoading === p.id}
                    className={`text-xs px-2.5 py-1.5 rounded-lg font-medium transition-colors disabled:opacity-50 ${p.est_publie ? "bg-orange-50 text-orange-600 hover:bg-orange-100" : "bg-green-50 text-green-600 hover:bg-green-100"}`}
                  >
                    {toggleLoading === p.id ? "..." : p.est_publie ? "Dépublier" : "Publier"}
                  </button>
                  <button
                    onClick={() => setConfirmDelete({ id: p.id, titre: p.titre })}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-medium transition-colors ml-auto"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filtrés.length === 0 && (
            <div className="col-span-3 text-center py-16 text-gray-400 text-sm">
              Aucun parcours. Créez le premier parcours complet.
            </div>
          )}
        </div>
      </main>

      {/* Modal création */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full">
            <h3 className="text-lg font-bold text-[#1B2D5B] mb-5">Créer un parcours</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Titre *</label>
                <input
                  type="text"
                  value={formCreate.titre}
                  onChange={(e) => setFormCreate({ ...formCreate, titre: e.target.value, slug: slugifier(e.target.value) })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  placeholder="ex: Parcours Handicap complet"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Slug (URL) *</label>
                <input
                  type="text"
                  value={formCreate.slug}
                  onChange={(e) => setFormCreate({ ...formCreate, slug: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                />
                <p className="text-xs text-gray-400 mt-1">Généré automatiquement.</p>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Description courte</label>
                <textarea
                  value={formCreate.description_courte}
                  onChange={(e) => setFormCreate({ ...formCreate, description_courte: e.target.value })}
                  rows={2}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  placeholder="Résumé du parcours en une phrase"
                />
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formCreate.est_publie}
                  onChange={(e) => setFormCreate({ ...formCreate, est_publie: e.target.checked })}
                  className="w-4 h-4 accent-[#3DBFA0]"
                />
                <span className="text-sm text-gray-700">Publier immédiatement</span>
              </label>
              {createError && <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-2">{createError}</p>}
            </div>
            <div className="flex gap-3 justify-end mt-6">
              <button onClick={() => { setShowCreate(false); setFormCreate(FORM_VIDE) }}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                Annuler
              </button>
              <button onClick={creerParcours} disabled={createLoading}
                className="px-4 py-2 text-sm rounded-lg bg-[#3DBFA0] text-white hover:bg-[#2ea88b] font-medium disabled:opacity-50">
                {createLoading ? "Création..." : "Créer le parcours"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal suppression */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-bold text-[#1B2D5B] mb-3">Supprimer le parcours</h3>
            <p className="text-sm text-gray-600 mb-2">
              Supprimer <span className="font-semibold">"{confirmDelete.titre}"</span> ?
            </p>
            <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-2 mb-5">
              Les formations elles-mêmes ne seront pas supprimées, uniquement le parcours et ses liaisons.
            </p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setConfirmDelete(null)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                Annuler
              </button>
              <button onClick={() => supprimerParcours(confirmDelete.id)} disabled={deleteLoading === confirmDelete.id}
                className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 font-medium disabled:opacity-50">
                {deleteLoading === confirmDelete.id ? "Suppression..." : "Supprimer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
