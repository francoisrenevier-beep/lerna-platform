"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { AdminSidebar } from "@/components/AdminSidebar"

type Formation = {
  id: string
  titre: string
  domaine: string | null
  thematique: string | null
  est_publie: boolean
  nb_modules: number
  nb_commences: number
  nb_termines: number
}

type FormationDetail = {
  id: string
  titre: string
  description: string | null
  categorie: string | null
  duree_estimee_minutes: number | null
  domaine: string | null
  thematique: string | null
  public_cible: string | null
  est_publie: boolean
  est_privee: boolean
  est_a_venir: boolean
  parcours_id: string | null
  parcours_ordre: number | null
}

export default function AdminFormationsPage() {
  const [formations, setFormations] = useState<Formation[]>([])
  const [loading, setLoading] = useState(true)
  const [toggleLoading, setToggleLoading] = useState<string | null>(null)
  const [modalEdit, setModalEdit] = useState<FormationDetail | null>(null)
  const [editLoading, setEditLoading] = useState(false)
  const router = useRouter()

  const chargerFormations = async () => {
    const { data: forms } = await supabase
      .from("formations")
      .select("id, titre, domaine, thematique, est_publie")
      .order("titre")

    if (!forms) { setFormations([]); return }

    const enrichies = await Promise.all(
      forms.map(async (f) => {
        const { count: nbModules } = await supabase
          .from("modules")
          .select("id", { count: "exact" })
          .eq("formation_id", f.id)

        const { count: nbCommences } = await supabase
          .from("progression")
          .select("profil_id", { count: "exact" })
          .eq("formation_id", f.id)
          .in("statut", ["en_cours", "termine"])

        const { count: nbTermines } = await supabase
          .from("attestations")
          .select("id", { count: "exact" })
          .eq("formation_id", f.id)

        return {
          ...f,
          nb_modules: nbModules || 0,
          nb_commences: nbCommences || 0,
          nb_termines: nbTermines || 0,
        }
      })
    )
    setFormations(enrichies)
  }

  useEffect(() => {
    const getData = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      const user = session?.user
      if (!user) { router.push("/connexion"); return }

      const { data: profil } = await supabase
        .from("profils")
        .select("est_super_admin")
        .eq("id", user.id)
        .single()

      if (!profil?.est_super_admin) { router.push("/dashboard"); return }

      await chargerFormations()
      setLoading(false)
    }
    getData()
  }, [router])

  const togglePublier = async (id: string, estPublie: boolean) => {
    setToggleLoading(id)
    await supabase.from("formations").update({ est_publie: !estPublie }).eq("id", id)
    await chargerFormations()
    setToggleLoading(null)
  }

  const ouvrirEdit = async (id: string) => {
    const { data } = await supabase
      .from("formations")
      .select("id, titre, description, categorie, duree_estimee_minutes, domaine, thematique, public_cible, est_publie, est_privee, est_a_venir, parcours_id, parcours_ordre")
      .eq("id", id)
      .single()
    if (data) setModalEdit(data as FormationDetail)
  }

  const sauvegarderFormation = async () => {
    if (!modalEdit) return
    setEditLoading(true)
    await supabase
      .from("formations")
      .update({
        titre: modalEdit.titre,
        description: modalEdit.description,
        categorie: modalEdit.categorie,
        duree_estimee_minutes: modalEdit.duree_estimee_minutes,
        domaine: modalEdit.domaine,
        thematique: modalEdit.thematique,
        public_cible: modalEdit.public_cible,
        est_publie: modalEdit.est_publie,
        est_privee: modalEdit.est_privee,
        est_a_venir: modalEdit.est_a_venir,
        parcours_id: modalEdit.parcours_id || null,
        parcours_ordre: modalEdit.parcours_ordre || null,
      })
      .eq("id", modalEdit.id)
    setModalEdit(null)
    setEditLoading(false)
    await chargerFormations()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#1B2D5B] text-sm">Chargement...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar pageActive="formations" />
      <main className="flex-1 p-8 overflow-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">Formations</h2>
          <p className="text-gray-500 mt-1">{formations.length} formation{formations.length !== 1 ? "s" : ""} au total.</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Titre</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Domaine</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Thématique</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Statut</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Modules</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Commencé</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Terminé</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {formations.map((f) => (
                <tr key={f.id} className="border-b border-gray-50 last:border-0">
                  <td className="px-4 py-3 font-medium text-[#1B2D5B] max-w-[220px]">
                    <span className="block truncate">{f.titre}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{f.domaine || "—"}</td>
                  <td className="px-4 py-3 text-gray-500">{f.thematique || "—"}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${f.est_publie ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {f.est_publie ? "Publié" : "Non publié"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600 font-medium">{f.nb_modules}</td>
                  <td className="px-4 py-3 text-center text-[#1B2D5B] font-semibold">{f.nb_commences}</td>
                  <td className="px-4 py-3 text-center text-[#3DBFA0] font-semibold">{f.nb_termines}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 justify-end">
                      <button
                        onClick={() => togglePublier(f.id, f.est_publie)}
                        disabled={toggleLoading === f.id}
                        className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors disabled:opacity-50 ${f.est_publie ? "bg-orange-50 text-orange-600 hover:bg-orange-100" : "bg-green-50 text-green-600 hover:bg-green-100"}`}
                      >
                        {toggleLoading === f.id ? "..." : f.est_publie ? "Dépublier" : "Publier"}
                      </button>
                      <button
                        onClick={() => ouvrirEdit(f.id)}
                        className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors font-medium"
                      >
                        Modifier
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {formations.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-gray-400">Aucune formation.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal modification formation */}
      {modalEdit && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-[#1B2D5B] mb-5">Modifier la formation</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Titre</label>
                <input
                  type="text"
                  value={modalEdit.titre}
                  onChange={(e) => setModalEdit({ ...modalEdit, titre: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Description</label>
                <textarea
                  value={modalEdit.description || ""}
                  onChange={(e) => setModalEdit({ ...modalEdit, description: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Catégorie</label>
                  <input
                    type="text"
                    value={modalEdit.categorie || ""}
                    onChange={(e) => setModalEdit({ ...modalEdit, categorie: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Durée estimée (min)</label>
                  <input
                    type="number"
                    value={modalEdit.duree_estimee_minutes || ""}
                    onChange={(e) => setModalEdit({ ...modalEdit, duree_estimee_minutes: parseInt(e.target.value) || null })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Domaine</label>
                  <input
                    type="text"
                    value={modalEdit.domaine || ""}
                    onChange={(e) => setModalEdit({ ...modalEdit, domaine: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Thématique</label>
                  <input
                    type="text"
                    value={modalEdit.thematique || ""}
                    onChange={(e) => setModalEdit({ ...modalEdit, thematique: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Public cible</label>
                <input
                  type="text"
                  value={modalEdit.public_cible || ""}
                  onChange={(e) => setModalEdit({ ...modalEdit, public_cible: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Parcours ID</label>
                  <input
                    type="text"
                    value={modalEdit.parcours_id || ""}
                    onChange={(e) => setModalEdit({ ...modalEdit, parcours_id: e.target.value || null })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                    placeholder="UUID du parcours"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Parcours ordre</label>
                  <input
                    type="number"
                    value={modalEdit.parcours_ordre || ""}
                    onChange={(e) => setModalEdit({ ...modalEdit, parcours_ordre: parseInt(e.target.value) || null })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  />
                </div>
              </div>
              <div className="flex gap-6 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={modalEdit.est_publie}
                    onChange={(e) => setModalEdit({ ...modalEdit, est_publie: e.target.checked })}
                    className="w-4 h-4 accent-[#3DBFA0]"
                  />
                  <span className="text-sm text-gray-700">Publié</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={modalEdit.est_privee}
                    onChange={(e) => setModalEdit({ ...modalEdit, est_privee: e.target.checked })}
                    className="w-4 h-4 accent-[#3DBFA0]"
                  />
                  <span className="text-sm text-gray-700">Privée</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={modalEdit.est_a_venir}
                    onChange={(e) => setModalEdit({ ...modalEdit, est_a_venir: e.target.checked })}
                    className="w-4 h-4 accent-[#3DBFA0]"
                  />
                  <span className="text-sm text-gray-700">À venir</span>
                </label>
              </div>
            </div>
            <div className="flex gap-3 justify-end mt-6">
              <button
                onClick={() => setModalEdit(null)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={sauvegarderFormation}
                disabled={editLoading}
                className="px-4 py-2 text-sm rounded-lg bg-[#1B2D5B] text-white hover:bg-[#152347] transition-colors font-medium disabled:opacity-50"
              >
                {editLoading ? "Sauvegarde..." : "Sauvegarder"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
