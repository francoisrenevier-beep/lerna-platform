"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { AdminSidebar } from "@/components/AdminSidebar"

// ─── Types ────────────────────────────────────────────────────────────────────

type Ressource = {
  id: string
  titre: string
  description: string | null
  type: string
  url: string
  formation_id: string
  ordre: number
  formation_titre: string
  formation_slug: string
}

type Formation = {
  id: string
  titre: string
  slug: string
}

type FormRessource = {
  titre: string
  description: string
  type: string
  url: string
  formation_id: string
  ordre: string
}

// ─── Constants ────────────────────────────────────────────────────────────────

const TYPES = [
  { value: "lien",    label: "Lien / Article", icone: "🔗" },
  { value: "article", label: "Article",         icone: "📰" },
  { value: "pdf",     label: "PDF / Document",  icone: "📄" },
  { value: "memo",    label: "Mémo / Fiche",    icone: "📋" },
]

const FORM_VIDE: FormRessource = {
  titre: "", description: "", type: "lien", url: "", formation_id: "", ordre: "0",
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AdminRessourcesPage() {
  const [ressources, setRessources]       = useState<Ressource[]>([])
  const [formations, setFormations]       = useState<Formation[]>([])
  const [loading, setLoading]             = useState(true)
  const [filtreFormation, setFiltreFormation] = useState("")
  const [showModal, setShowModal]         = useState(false)
  const [editRessource, setEditRessource] = useState<Ressource | null>(null)
  const [form, setForm]                   = useState<FormRessource>(FORM_VIDE)
  const [uploadMode, setUploadMode]       = useState(false)
  const [uploadFile, setUploadFile]       = useState<File | null>(null)
  const [saving, setSaving]               = useState(false)
  const [saveError, setSaveError]         = useState("")
  const [confirmDelete, setConfirmDelete] = useState<Ressource | null>(null)
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const chargerDonnees = async () => {
    const [{ data: formsData }, { data: ressData }] = await Promise.all([
      supabase.from("formations").select("id, titre, slug").order("titre"),
      supabase
        .from("ressources")
        .select("id, titre, description, type, url, formation_id, ordre, formations(titre, slug)")
        .order("ordre"),
    ])

    if (formsData) setFormations(formsData)
    if (ressData) {
      setRessources(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ressData.map((r: any) => ({
          id: r.id,
          titre: r.titre,
          description: r.description,
          type: r.type,
          url: r.url,
          formation_id: r.formation_id,
          ordre: r.ordre,
          formation_titre: r.formations?.titre ?? "—",
          formation_slug: r.formations?.slug ?? "",
        }))
      )
    }
  }

  useEffect(() => {
    const getData = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      const user = session?.user
      if (!user) { router.push("/connexion"); return }

      const { data: profil } = await supabase
        .from("profils").select("est_super_admin").eq("id", user.id).single()
      if (!profil?.est_super_admin) { router.push("/dashboard"); return }

      await chargerDonnees()
      setLoading(false)
    }
    getData()
  }, [router])

  const ouvrirAjout = () => {
    setEditRessource(null)
    setForm(FORM_VIDE)
    setUploadMode(false)
    setUploadFile(null)
    setSaveError("")
    setShowModal(true)
  }

  const ouvrirEdition = (r: Ressource) => {
    setEditRessource(r)
    setForm({
      titre: r.titre,
      description: r.description ?? "",
      type: r.type,
      url: r.url === "#" ? "" : r.url,
      formation_id: r.formation_id,
      ordre: r.ordre.toString(),
    })
    setUploadMode(false)
    setUploadFile(null)
    setSaveError("")
    setShowModal(true)
  }

  const uploadFichier = async (): Promise<string | null> => {
    if (!uploadFile) return null
    const ext = uploadFile.name.split(".").pop()
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
    const { error } = await supabase.storage
      .from("ressources-docs")
      .upload(filename, uploadFile, { cacheControl: "3600", upsert: false })
    if (error) { setSaveError("Erreur upload : " + error.message); return null }
    const { data: { publicUrl } } = supabase.storage.from("ressources-docs").getPublicUrl(filename)
    return publicUrl
  }

  const sauvegarder = async () => {
    if (!form.titre.trim())    { setSaveError("Le titre est requis."); return }
    if (!form.formation_id)    { setSaveError("La formation est requise."); return }
    if (uploadMode && !uploadFile && !editRessource) {
      setSaveError("Veuillez sélectionner un fichier ou entrer une URL.")
      return
    }

    setSaving(true)
    setSaveError("")

    let finalUrl = form.url.trim() || "#"
    if (uploadMode && uploadFile) {
      const uploadedUrl = await uploadFichier()
      if (!uploadedUrl) { setSaving(false); return }
      finalUrl = uploadedUrl
    } else if (uploadMode && editRessource && editRessource.url !== "#") {
      // Pas de nouveau fichier sélectionné en mode édition → conserver l'URL existante
      finalUrl = editRessource.url
    }

    const payload = {
      titre:        form.titre.trim(),
      description:  form.description.trim() || null,
      type:         form.type,
      url:          finalUrl,
      formation_id: form.formation_id,
      ordre:        parseInt(form.ordre) || 0,
    }

    if (editRessource) {
      await supabase.from("ressources").update(payload).eq("id", editRessource.id)
    } else {
      await supabase.from("ressources").insert(payload)
    }

    await chargerDonnees()
    setShowModal(false)
    setSaving(false)
  }

  const supprimer = async (r: Ressource) => {
    setDeleteLoading(r.id)
    const storagePrefix = "/storage/v1/object/public/ressources-docs/"
    if (r.url.includes(storagePrefix)) {
      const filePath = r.url.split(storagePrefix)[1]
      if (filePath) await supabase.storage.from("ressources-docs").remove([filePath])
    }
    await supabase.from("ressources").delete().eq("id", r.id)
    await chargerDonnees()
    setConfirmDelete(null)
    setDeleteLoading(null)
  }

  const ressourcesFiltrees = filtreFormation
    ? ressources.filter((r) => r.formation_id === filtreFormation)
    : ressources

  const parFormation = ressourcesFiltrees.reduce<
    Record<string, { titre: string; slug: string; items: Ressource[] }>
  >((acc, r) => {
    if (!acc[r.formation_id]) {
      acc[r.formation_id] = { titre: r.formation_titre, slug: r.formation_slug, items: [] }
    }
    acc[r.formation_id].items.push(r)
    return acc
  }, {})

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#1B2D5B] text-sm">Chargement...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar pageActive="ressources" />
      <main className="flex-1 p-8 overflow-auto">

        {/* ── En-tête ───────────────────────────────────────────────────────── */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#1B2D5B]">Ressources</h2>
            <p className="text-gray-500 mt-1">
              {ressources.length} ressource{ressources.length !== 1 ? "s" : ""} au total
            </p>
          </div>
          <button
            onClick={ouvrirAjout}
            className="bg-[#3DBFA0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2ea88b] transition-colors"
          >
            + Ajouter une ressource
          </button>
        </div>

        {/* ── Filtre par formation ──────────────────────────────────────────── */}
        <div className="mb-6">
          <select
            value={filtreFormation}
            onChange={(e) => setFiltreFormation(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] min-w-[280px]"
          >
            <option value="">Toutes les formations</option>
            {formations.map((f) => (
              <option key={f.id} value={f.id}>{f.titre}</option>
            ))}
          </select>
        </div>

        {/* ── Liste des ressources ──────────────────────────────────────────── */}
        {Object.keys(parFormation).length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-12 text-center">
            <p className="text-4xl mb-4">📭</p>
            <p className="text-[#1B2D5B] font-semibold">Aucune ressource</p>
            <p className="text-gray-400 text-sm mt-1">Ajoutez votre première ressource via le bouton ci-dessus.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(parFormation).map(([formationId, group]) => (
              <div key={formationId} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-5 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-[#1B2D5B] text-sm">{group.titre}</span>
                    <span className="text-gray-400 text-xs ml-2 font-mono">/{group.slug}</span>
                  </div>
                  <span className="text-xs text-gray-400">
                    {group.items.length} ressource{group.items.length > 1 ? "s" : ""}
                  </span>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {group.items.map((r) => {
                      const typeInfo = TYPES.find((t) => t.value === r.type)
                      return (
                        <tr key={r.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                          <td className="px-5 py-3 w-10 text-xl">{typeInfo?.icone ?? "🔗"}</td>
                          <td className="px-3 py-3 flex-1">
                            <p className="font-medium text-[#1B2D5B]">{r.titre}</p>
                            {r.description && (
                              <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{r.description}</p>
                            )}
                          </td>
                          <td className="px-3 py-3 w-32">
                            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full uppercase tracking-wide">
                              {typeInfo?.label ?? r.type}
                            </span>
                          </td>
                          <td className="px-3 py-3 max-w-[200px]">
                            {r.url === "#" ? (
                              <span className="text-xs text-amber-500">Bientôt disponible</span>
                            ) : (
                              <a
                                href={r.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-[#3DBFA0] hover:underline truncate block"
                              >
                                {r.url}
                              </a>
                            )}
                          </td>
                          <td className="px-3 py-3 text-center text-gray-300 text-xs w-10">#{r.ordre}</td>
                          <td className="px-4 py-3 w-40">
                            <div className="flex items-center gap-1.5 justify-end">
                              <button
                                onClick={() => ouvrirEdition(r)}
                                className="text-xs px-2.5 py-1.5 rounded-lg bg-[#1B2D5B]/10 text-[#1B2D5B] hover:bg-[#1B2D5B]/20 font-medium transition-colors"
                              >
                                Modifier
                              </button>
                              <button
                                onClick={() => setConfirmDelete(r)}
                                className="text-xs px-2.5 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-medium transition-colors"
                              >
                                Supprimer
                              </button>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* ── Modal ajout / édition ─────────────────────────────────────────────── */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-[#1B2D5B]">
                {editRessource ? "Modifier la ressource" : "Ajouter une ressource"}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              >×</button>
            </div>

            <div className="space-y-4">
              {/* Formation */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Formation *</label>
                <select
                  value={form.formation_id}
                  onChange={(e) => setForm({ ...form, formation_id: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                >
                  <option value="">— Choisir une formation —</option>
                  {formations.map((f) => (
                    <option key={f.id} value={f.id}>{f.titre}</option>
                  ))}
                </select>
              </div>

              {/* Titre */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Titre *</label>
                <input
                  type="text"
                  value={form.titre}
                  onChange={(e) => setForm({ ...form, titre: e.target.value })}
                  placeholder="Titre de la ressource"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={2}
                  placeholder="Description courte (optionnel)"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                />
              </div>

              {/* Type */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {TYPES.map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => setForm({ ...form, type: t.value })}
                      className={
                        "flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-colors " +
                        (form.type === t.value
                          ? "border-[#3DBFA0] bg-[#3DBFA0]/10 text-[#1B2D5B] font-medium"
                          : "border-gray-200 text-gray-600 hover:border-gray-300")
                      }
                    >
                      <span>{t.icone}</span> {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* URL ou Upload */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Fichier ou lien</label>
                <div className="flex gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => { setUploadMode(false); setUploadFile(null) }}
                    className={
                      "text-xs px-3 py-1.5 rounded-lg border font-medium transition-colors " +
                      (!uploadMode
                        ? "bg-[#1B2D5B] text-white border-[#1B2D5B]"
                        : "border-gray-200 text-gray-600 hover:border-gray-300")
                    }
                  >
                    Entrer une URL
                  </button>
                  <button
                    type="button"
                    onClick={() => { setUploadMode(true); setForm({ ...form, url: "" }) }}
                    className={
                      "text-xs px-3 py-1.5 rounded-lg border font-medium transition-colors " +
                      (uploadMode
                        ? "bg-[#1B2D5B] text-white border-[#1B2D5B]"
                        : "border-gray-200 text-gray-600 hover:border-gray-300")
                    }
                  >
                    Uploader un fichier
                  </button>
                </div>

                {uploadMode ? (
                  <div>
                    <input
                      ref={fileRef}
                      type="file"
                      accept=".pdf,.doc,.docx,.ppt,.pptx"
                      onChange={(e) => setUploadFile(e.target.files?.[0] ?? null)}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                    />
                    {uploadFile && (
                      <p className="text-xs text-gray-400 mt-1">Fichier sélectionné : {uploadFile.name}</p>
                    )}
                    {editRessource && !uploadFile && editRessource.url !== "#" && (
                      <p className="text-xs text-gray-400 mt-1">
                        Fichier actuel conservé si aucun nouveau fichier sélectionné.
                      </p>
                    )}
                  </div>
                ) : (
                  <input
                    type="url"
                    value={form.url}
                    onChange={(e) => setForm({ ...form, url: e.target.value })}
                    placeholder="https://..."
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  />
                )}
              </div>

              {/* Ordre */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">
                  Ordre d'affichage
                </label>
                <input
                  type="number"
                  value={form.ordre}
                  onChange={(e) => setForm({ ...form, ordre: e.target.value })}
                  min="0"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                />
              </div>

              {saveError && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-2">
                  {saveError}
                </p>
              )}
            </div>

            <div className="flex gap-3 justify-end mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={sauvegarder}
                disabled={saving}
                className="px-4 py-2 text-sm rounded-lg bg-[#3DBFA0] text-white hover:bg-[#2ea88b] transition-colors font-medium disabled:opacity-50"
              >
                {saving ? "Enregistrement..." : editRessource ? "Enregistrer" : "Ajouter"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Modal confirmation suppression ───────────────────────────────────── */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-bold text-[#1B2D5B] mb-3">Supprimer la ressource</h3>
            <p className="text-sm text-gray-600 mb-5">
              Êtes-vous sûr de vouloir supprimer{" "}
              <span className="font-semibold text-[#1B2D5B]">"{confirmDelete.titre}"</span> ?
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setConfirmDelete(null)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={() => supprimer(confirmDelete)}
                disabled={deleteLoading === confirmDelete.id}
                className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors font-medium disabled:opacity-50"
              >
                {deleteLoading === confirmDelete.id ? "Suppression..." : "Supprimer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
