"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { AdminSidebar } from "@/components/AdminSidebar"

// ─── Types ──────────────────────────────────────────────────────────────────────

type Formation = {
  id: string
  titre: string
  slug: string
  domaine: string[] | string | null
  thematique: string | null
  est_publie: boolean
  est_a_venir: boolean
  nb_modules: number
  nb_commences: number
  nb_termines: number
}

type FormCreation = {
  titre: string
  slug: string
  description: string
  description_courte: string
  categorie: string
  niveau: string
  duree_estimee_minutes: string
  thematique: string
  public_cible: string
  est_publie: boolean
}

type FormMetadata = {
  domaine: string[]
  thematique: string
  niveau: string
  public_cible: string
  parcours_id: string
  parcours_ordre: string
  parcours_nom: string
}

// ─── Constants ──────────────────────────────────────────────────────────────────

const DOMAINES_OPTIONS = ["Handicap", "Pédagogie Spécialisée", "Protection des mineurs", "Transversal"]
const THEMATIQUES_OPTIONS = ["Accompagnement", "Management", "Communication", "Éthique et posture", "Outils et méthodes", "Législation et droits"]
const NIVEAUX_OPTIONS = ["Niveau 1", "Niveau 2", "Niveau 3"]

// ─── Helpers ────────────────────────────────────────────────────────────────────

function slugifier(titre: string): string {
  return titre
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

function getDomaineArray(domaine: string | string[] | null | undefined): string[] {
  if (!domaine) return []
  if (Array.isArray(domaine)) return domaine
  return [domaine]
}

function getDomaineLabel(domaine: string | string[] | null): string {
  const arr = getDomaineArray(domaine)
  return arr.length > 0 ? arr.join(", ") : "—"
}

const FORM_VIDE: FormCreation = {
  titre: "", slug: "", description: "", description_courte: "",
  categorie: "Accompagnement", niveau: "Niveau 1", duree_estimee_minutes: "",
  thematique: "", public_cible: "", est_publie: false,
}

const METADATA_VIDE: FormMetadata = {
  domaine: [], thematique: "", niveau: "", public_cible: "",
  parcours_id: "", parcours_ordre: "", parcours_nom: "",
}

// ─── Main Page ───────────────────────────────────────────────────────────────────

export default function AdminFormationsPage() {
  const [formations, setFormations] = useState<Formation[]>([])
  const [loading, setLoading] = useState(true)
  const [toggleLoading, setToggleLoading] = useState<string | null>(null)
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<{ id: string; titre: string } | null>(null)
  const [showCreate, setShowCreate] = useState(false)
  const [formCreate, setFormCreate] = useState<FormCreation>(FORM_VIDE)
  const [createLoading, setCreateLoading] = useState(false)
  const [createError, setCreateError] = useState("")
  const [recherche, setRecherche] = useState("")

  // Metadata modal
  const [metadataModal, setMetadataModal] = useState<{ id: string; titre: string } | null>(null)
  const [formMetadata, setFormMetadata] = useState<FormMetadata>(METADATA_VIDE)
  const [metadataSaving, setMetadataSaving] = useState(false)
  const [metadataSaveOk, setMetadataSaveOk] = useState(false)

  const router = useRouter()

  const chargerFormations = async () => {
    const { data: forms } = await supabase
      .from("formations")
      .select("id, titre, slug, domaine, thematique, est_publie, est_a_venir")
      .order("titre")

    if (!forms) { setFormations([]); return }

    const enrichies = await Promise.all(
      forms.map(async (f) => {
        const [{ count: nbModules }, { count: nbCommences }, { count: nbTermines }] = await Promise.all([
          supabase.from("modules").select("id", { count: "exact" }).eq("formation_id", f.id),
          supabase.from("progression").select("profil_id", { count: "exact" }).eq("formation_id", f.id).in("statut", ["en_cours", "termine"]),
          supabase.from("attestations").select("id", { count: "exact" }).eq("formation_id", f.id),
        ])
        return { ...f, nb_modules: nbModules || 0, nb_commences: nbCommences || 0, nb_termines: nbTermines || 0 } as Formation
      })
    )
    setFormations(enrichies)
  }

  useEffect(() => {
    const getData = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      const user = session?.user
      if (!user) { router.push("/connexion"); return }

      const { data: profil } = await supabase.from("profils").select("est_super_admin").eq("id", user.id).single()
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

  const supprimerFormation = async (id: string) => {
    setDeleteLoading(id)
    await supabase.from("formations").delete().eq("id", id)
    setConfirmDelete(null)
    await chargerFormations()
    setDeleteLoading(null)
  }

  const creerFormation = async () => {
    if (!formCreate.titre.trim() || !formCreate.slug.trim()) {
      setCreateError("Le titre et le slug sont requis.")
      return
    }
    setCreateLoading(true)
    setCreateError("")

    const { data, error } = await supabase.from("formations").insert({
      titre: formCreate.titre.trim(),
      slug: formCreate.slug.trim(),
      description: formCreate.description || null,
      description_courte: formCreate.description_courte || null,
      categorie: formCreate.categorie || null,
      niveau: formCreate.niveau || "Niveau 1",
      duree_estimee_minutes: parseInt(formCreate.duree_estimee_minutes) || null,
      domaine: [],
      thematique: formCreate.thematique || null,
      public_cible: formCreate.public_cible || null,
      est_publie: formCreate.est_publie,
      est_a_venir: false,
      est_privee: false,
    }).select("id").single()

    if (error) {
      setCreateError("Erreur : " + error.message)
      setCreateLoading(false)
      return
    }

    setShowCreate(false)
    setFormCreate(FORM_VIDE)
    setCreateLoading(false)
    await chargerFormations()
    if (data?.id) router.push(`/admin/formations/${data.id}`)
  }

  const ouvrirMetadata = async (formation: Formation) => {
    // Fetch full metadata for this formation
    const { data } = await supabase
      .from("formations")
      .select("domaine, thematique, niveau, public_cible, parcours_id, parcours_ordre, parcours_nom")
      .eq("id", formation.id)
      .single()

    setFormMetadata({
      domaine: getDomaineArray(data?.domaine),
      thematique: data?.thematique || "",
      niveau: data?.niveau || "",
      public_cible: data?.public_cible || "",
      parcours_id: data?.parcours_id || "",
      parcours_ordre: data?.parcours_ordre?.toString() || "",
      parcours_nom: data?.parcours_nom || "",
    })
    setMetadataModal({ id: formation.id, titre: formation.titre })
    setMetadataSaveOk(false)
  }

  const sauvegarderMetadata = async () => {
    if (!metadataModal) return
    setMetadataSaving(true)
    setMetadataSaveOk(false)

    await supabase.from("formations").update({
      domaine: formMetadata.domaine.length > 0 ? formMetadata.domaine : null,
      thematique: formMetadata.thematique || null,
      niveau: formMetadata.niveau || null,
      public_cible: formMetadata.public_cible || null,
      parcours_id: formMetadata.parcours_id || null,
      parcours_ordre: formMetadata.parcours_ordre ? parseInt(formMetadata.parcours_ordre) : null,
      parcours_nom: formMetadata.parcours_nom || null,
    }).eq("id", metadataModal.id)

    await chargerFormations()
    setMetadataSaving(false)
    setMetadataSaveOk(true)
  }

  const toggleDomaineMetadata = (dom: string) => {
    setFormMetadata((prev) => ({
      ...prev,
      domaine: prev.domaine.includes(dom)
        ? prev.domaine.filter((d) => d !== dom)
        : [...prev.domaine, dom],
    }))
    setMetadataSaveOk(false)
  }

  const formationsFiltrees = formations.filter((f) =>
    !recherche ||
    f.titre.toLowerCase().includes(recherche.toLowerCase()) ||
    getDomaineLabel(f.domaine).toLowerCase().includes(recherche.toLowerCase())
  )

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><p className="text-[#1B2D5B] text-sm">Chargement...</p></div>
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar pageActive="formations" />
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#1B2D5B]">Formations</h2>
            <p className="text-gray-500 mt-1">{formations.length} formation{formations.length !== 1 ? "s" : ""} au total.</p>
          </div>
          <button
            onClick={() => { setShowCreate(true); setCreateError("") }}
            className="bg-[#3DBFA0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2ea88b] transition-colors"
          >
            + Créer une formation
          </button>
        </div>

        <div className="mb-4">
          <input
            type="text"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="Rechercher par titre ou domaine..."
            className="w-full max-w-sm border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
          />
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Titre</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Domaine / Thématique</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Statut</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Modules</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Commencé</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Terminé</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {formationsFiltrees.map((f) => (
                <tr key={f.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                  <td className="px-4 py-3">
                    <p className="font-medium text-[#1B2D5B] truncate max-w-[200px]">{f.titre}</p>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">/{f.slug}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-gray-600 text-xs">{getDomaineLabel(f.domaine)}</p>
                    {f.thematique && <p className="text-gray-400 text-xs">{f.thematique}</p>}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${f.est_publie ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                        {f.est_publie ? "Publié" : "Non publié"}
                      </span>
                      {f.est_a_venir && <span className="text-xs text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full">À venir</span>}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600 font-medium">{f.nb_modules}</td>
                  <td className="px-4 py-3 text-center text-[#1B2D5B] font-semibold">{f.nb_commences}</td>
                  <td className="px-4 py-3 text-center text-[#3DBFA0] font-semibold">{f.nb_termines}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5 justify-end flex-wrap">
                      <a
                        href={`/admin/formations/${f.id}`}
                        className="text-xs px-2.5 py-1.5 rounded-lg bg-[#1B2D5B]/10 text-[#1B2D5B] hover:bg-[#1B2D5B]/20 font-medium transition-colors whitespace-nowrap"
                      >
                        Détail →
                      </a>
                      <button
                        onClick={() => ouvrirMetadata(f)}
                        className="text-xs px-2.5 py-1.5 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 font-medium transition-colors whitespace-nowrap"
                      >
                        Métadonnées
                      </button>
                      <button
                        onClick={() => togglePublier(f.id, f.est_publie)}
                        disabled={toggleLoading === f.id}
                        className={`text-xs px-2.5 py-1.5 rounded-lg font-medium transition-colors disabled:opacity-50 ${f.est_publie ? "bg-orange-50 text-orange-600 hover:bg-orange-100" : "bg-green-50 text-green-600 hover:bg-green-100"}`}
                      >
                        {toggleLoading === f.id ? "..." : f.est_publie ? "Dépublier" : "Publier"}
                      </button>
                      <button
                        onClick={() => setConfirmDelete({ id: f.id, titre: f.titre })}
                        className="text-xs px-2.5 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-medium transition-colors"
                      >
                        Supprimer
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {formationsFiltrees.length === 0 && (
                <tr><td colSpan={7} className="px-4 py-10 text-center text-gray-400">Aucune formation trouvée.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* ── Modal Métadonnées ─────────────────────────────────────────────────── */}
      {metadataModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-[#1B2D5B]">Métadonnées</h3>
              <button onClick={() => setMetadataModal(null)} className="text-gray-400 hover:text-gray-600 text-xl leading-none">×</button>
            </div>
            <p className="text-xs text-gray-400 bg-gray-50 rounded-lg px-3 py-2 mb-5 font-mono truncate">{metadataModal.titre}</p>

            <div className="space-y-5">
              {/* Domaine multi-select */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">Domaine(s)</label>
                <div className="flex flex-col gap-2">
                  {DOMAINES_OPTIONS.map((dom) => (
                    <label key={dom} className="flex items-center gap-2.5 cursor-pointer group">
                      <div
                        className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                          formMetadata.domaine.includes(dom)
                            ? "bg-[#3DBFA0] border-[#3DBFA0]"
                            : "border-gray-300 group-hover:border-[#3DBFA0]"
                        }`}
                        onClick={() => toggleDomaineMetadata(dom)}
                      >
                        {formMetadata.domaine.includes(dom) && (
                          <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 10" fill="currentColor">
                            <path d="M8.5 2.5L4 7 1.5 4.5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-gray-700" onClick={() => toggleDomaineMetadata(dom)}>{dom}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Thématique */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Thématique</label>
                <select
                  value={formMetadata.thematique}
                  onChange={(e) => { setFormMetadata({ ...formMetadata, thematique: e.target.value }); setMetadataSaveOk(false) }}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                >
                  <option value="">— Aucune —</option>
                  {THEMATIQUES_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Niveau */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Niveau</label>
                <select
                  value={formMetadata.niveau}
                  onChange={(e) => { setFormMetadata({ ...formMetadata, niveau: e.target.value }); setMetadataSaveOk(false) }}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                >
                  <option value="">— Aucun —</option>
                  {NIVEAUX_OPTIONS.map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>

              {/* Public cible */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Public cible</label>
                <input
                  type="text"
                  value={formMetadata.public_cible}
                  onChange={(e) => { setFormMetadata({ ...formMetadata, public_cible: e.target.value }); setMetadataSaveOk(false) }}
                  placeholder="ex: Éducateurs, soignants"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                />
              </div>

              {/* Parcours */}
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Parcours</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2">
                    <label className="block text-xs text-gray-500 mb-1">Nom du parcours</label>
                    <input
                      type="text"
                      value={formMetadata.parcours_nom}
                      onChange={(e) => { setFormMetadata({ ...formMetadata, parcours_nom: e.target.value }); setMetadataSaveOk(false) }}
                      placeholder="ex: Parcours Handicap"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">ID parcours</label>
                    <input
                      type="text"
                      value={formMetadata.parcours_id}
                      onChange={(e) => { setFormMetadata({ ...formMetadata, parcours_id: e.target.value }); setMetadataSaveOk(false) }}
                      placeholder="ex: parcours-handicap"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Ordre dans le parcours</label>
                    <input
                      type="number"
                      value={formMetadata.parcours_ordre}
                      onChange={(e) => { setFormMetadata({ ...formMetadata, parcours_ordre: e.target.value }); setMetadataSaveOk(false) }}
                      placeholder="1"
                      min="1"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-end mt-6 items-center">
              {metadataSaveOk && (
                <span className="text-xs text-green-600 font-medium">✓ Enregistré</span>
              )}
              <button
                onClick={() => setMetadataModal(null)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Fermer
              </button>
              <button
                onClick={sauvegarderMetadata}
                disabled={metadataSaving}
                className="px-4 py-2 text-sm rounded-lg bg-[#3DBFA0] text-white hover:bg-[#2ea88b] transition-colors font-medium disabled:opacity-50"
              >
                {metadataSaving ? "Enregistrement..." : "Enregistrer les modifications"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Modal création formation ─────────────────────────────────────────── */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-[#1B2D5B] mb-5">Créer une formation</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Titre *</label>
                <input
                  type="text"
                  value={formCreate.titre}
                  onChange={(e) => setFormCreate({ ...formCreate, titre: e.target.value, slug: slugifier(e.target.value) })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  placeholder="Titre de la formation"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Slug (URL) *</label>
                <input
                  type="text"
                  value={formCreate.slug}
                  onChange={(e) => setFormCreate({ ...formCreate, slug: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  placeholder="mon-titre-de-formation"
                />
                <p className="text-xs text-gray-400 mt-1">Généré automatiquement depuis le titre.</p>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Description courte</label>
                <textarea
                  value={formCreate.description_courte}
                  onChange={(e) => setFormCreate({ ...formCreate, description_courte: e.target.value })}
                  rows={2}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  placeholder="Résumé en une phrase"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Description complète</label>
                <textarea
                  value={formCreate.description}
                  onChange={(e) => setFormCreate({ ...formCreate, description: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Thématique</label>
                  <select
                    value={formCreate.thematique}
                    onChange={(e) => setFormCreate({ ...formCreate, thematique: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  >
                    <option value="">— Aucune —</option>
                    {THEMATIQUES_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Durée estimée (min)</label>
                  <input
                    type="number"
                    value={formCreate.duree_estimee_minutes}
                    onChange={(e) => setFormCreate({ ...formCreate, duree_estimee_minutes: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Niveau</label>
                  <select
                    value={formCreate.niveau}
                    onChange={(e) => setFormCreate({ ...formCreate, niveau: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  >
                    {NIVEAUX_OPTIONS.map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Public cible</label>
                  <input
                    type="text"
                    value={formCreate.public_cible}
                    onChange={(e) => setFormCreate({ ...formCreate, public_cible: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                    placeholder="ex: Éducateurs, soignants"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-400 bg-blue-50 border border-blue-100 rounded-lg p-2">
                💡 Les domaines peuvent être assignés après création via le bouton "Métadonnées".
              </p>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formCreate.est_publie}
                  onChange={(e) => setFormCreate({ ...formCreate, est_publie: e.target.checked })}
                  className="w-4 h-4 accent-[#3DBFA0]"
                />
                <span className="text-sm text-gray-700">Publier immédiatement</span>
              </label>
              {createError && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-2">{createError}</p>
              )}
            </div>
            <div className="flex gap-3 justify-end mt-6">
              <button
                onClick={() => { setShowCreate(false); setFormCreate(FORM_VIDE) }}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={creerFormation}
                disabled={createLoading}
                className="px-4 py-2 text-sm rounded-lg bg-[#3DBFA0] text-white hover:bg-[#2ea88b] transition-colors font-medium disabled:opacity-50"
              >
                {createLoading ? "Création..." : "Créer la formation"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Modal confirmation suppression ───────────────────────────────────── */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-bold text-[#1B2D5B] mb-3">Supprimer la formation</h3>
            <p className="text-sm text-gray-600 mb-2">
              Êtes-vous sûr de vouloir supprimer <span className="font-semibold text-[#1B2D5B]">"{confirmDelete.titre}"</span> ?
            </p>
            <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-2 mb-5">
              Cette action supprimera également tous les modules associés. Les progressions et attestations des apprenants seront conservées.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setConfirmDelete(null)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={() => supprimerFormation(confirmDelete.id)}
                disabled={deleteLoading === confirmDelete.id}
                className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors font-medium disabled:opacity-50"
              >
                {deleteLoading === confirmDelete.id ? "Suppression..." : "Supprimer définitivement"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
