"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { AdminSidebar } from "@/components/AdminSidebar"
import { Upload, X, FileText } from "lucide-react"

// ─── Constants ────────────────────────────────────────────────────────────────

const TYPES = [
  { value: "pdf",       label: "PDF / Document",      icon: "📄" },
  { value: "link",      label: "Lien externe",         icon: "🔗" },
  { value: "checklist", label: "Check-list",           icon: "✅" },
  { value: "memo",      label: "Fiche mémo",           icon: "📋" },
  { value: "tool",      label: "Outil",                icon: "🔧" },
  { value: "official",  label: "Ressource officielle", icon: "🏛️" },
  { value: "article",   label: "Article",              icon: "📰" },
  { value: "video",     label: "Vidéo",                icon: "▶️" },
  { value: "template",  label: "Modèle",               icon: "📐" },
]

const CATEGORIES = [
  { value: "outil_terrain",        label: "Outil terrain" },
  { value: "fiche_memo",           label: "Fiche mémo" },
  { value: "ressource_officielle", label: "Ressource officielle" },
  { value: "pour_aller_plus_loin", label: "Pour aller plus loin" },
  { value: "support_equipe",       label: "Support d'équipe" },
  { value: "reference_theorique",  label: "Référence théorique" },
]

const DOMAINS = [
  { value: "handicap",              label: "Handicap" },
  { value: "transversal",           label: "Transversal" },
  { value: "management",            label: "Management" },
  { value: "pedagogie_specialisee", label: "Pédagogie spécialisée" },
  { value: "protection_mineurs",    label: "Protection des mineurs" },
]

const LEVELS = [
  { value: "base",          label: "Base" },
  { value: "intermediaire", label: "Intermédiaire" },
  { value: "confirme",      label: "Confirmé" },
  { value: "tous_niveaux",  label: "Tous niveaux" },
]

const STATUTS = [
  { value: "",      label: "Tous les statuts" },
  { value: "actif", label: "Actif" },
  { value: "inactif", label: "Inactif" },
]

// ─── Types ────────────────────────────────────────────────────────────────────

type Resource = {
  id: string
  title: string
  description: string | null
  type: string
  category: string | null
  domain: string | null
  theme: string | null
  level: string | null
  target_audience: string[] | null
  tags: string[] | null
  estimated_time: string | null
  source_name: string | null
  source_url: string | null
  file_url: string | null
  is_downloadable: boolean
  is_external: boolean
  is_active: boolean
  nb_formations: number
}

type FormResource = {
  title: string
  description: string
  type: string
  category: string
  domain: string
  theme: string
  level: string
  target_audience: string
  tags: string
  estimated_time: string
  source_name: string
  source_url: string
  file_url: string
  is_downloadable: boolean
  is_external: boolean
  is_active: boolean
}

const FORM_VIDE: FormResource = {
  title: "", description: "", type: "link", category: "", domain: "",
  theme: "", level: "", target_audience: "", tags: "", estimated_time: "",
  source_name: "", source_url: "", file_url: "",
  is_downloadable: false, is_external: false, is_active: true,
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function typeInfo(type: string) {
  return TYPES.find(t => t.value === type) ?? { icon: "📎", label: type }
}

function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
        {label}{required && <span className="text-red-400 ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputCls = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
const selectCls = inputCls + " bg-white"

// ─── Page principale ──────────────────────────────────────────────────────────

export default function AdminRessourcesPage() {
  const [resources, setResources]   = useState<Resource[]>([])
  const [loading, setLoading]       = useState(true)
  const [filtreDomain, setFiltreDomain] = useState("")
  const [filtreType, setFiltreType]     = useState("")
  const [filtreCateg, setFiltreCateg]   = useState("")
  const [filtreStatut, setFiltreStatut] = useState("")

  const [showModal, setShowModal]       = useState(false)
  const [editResource, setEditResource] = useState<Resource | null>(null)
  const [form, setForm]                 = useState<FormResource>(FORM_VIDE)
  const [saving, setSaving]             = useState(false)
  const [saveError, setSaveError]       = useState("")
  const [confirmDelete, setConfirmDelete] = useState<Resource | null>(null)
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null)
  const [uploadingFile, setUploadingFile] = useState(false)
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null)
  const [uploadError, setUploadError]   = useState("")
  const fileInputRef                    = useRef<HTMLInputElement>(null)

  const router = useRouter()

  const chargerDonnees = async () => {
    const { data } = await supabase
      .from("resources")
      .select("*, formation_resources(formation_id)")
      .order("created_at", { ascending: false })

    if (data) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setResources(data.map((r: any) => ({
        ...r,
        nb_formations: r.formation_resources?.length ?? 0,
        formation_resources: undefined,
      })))
    }
  }

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session?.user) { router.push("/connexion"); return }
      const { data: profil } = await supabase
        .from("profils").select("est_super_admin").eq("id", session.user.id).single()
      if (!profil?.est_super_admin) { router.push("/dashboard"); return }
      await chargerDonnees()
      setLoading(false)
    }
    init()
  }, [router])

  const TYPES_AVEC_FICHIER = ["pdf", "checklist", "memo", "tool", "template", "official"]

  const uploadFichier = async (file: File) => {
    setUploadingFile(true)
    setUploadError("")
    const ext = file.name.split(".").pop() ?? "pdf"
    const path = `${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`
    const { error } = await supabase.storage.from("ressources").upload(path, file, {
      contentType: file.type,
      upsert: false,
    })
    if (error) {
      setUploadError("Erreur lors de l'upload : " + error.message)
      setUploadingFile(false)
      return
    }
    const { data: { publicUrl } } = supabase.storage.from("ressources").getPublicUrl(path)
    setForm(prev => ({ ...prev, file_url: publicUrl, is_downloadable: true }))
    setUploadedFileName(file.name)
    setUploadingFile(false)
    void ext
  }

  const supprimerFichierUploade = () => {
    setForm(prev => ({ ...prev, file_url: "" }))
    setUploadedFileName(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  const ouvrirAjout = () => {
    setEditResource(null)
    setForm(FORM_VIDE)
    setSaveError("")
    setUploadedFileName(null)
    setUploadError("")
    setShowModal(true)
  }

  const ouvrirEdition = (r: Resource) => {
    setEditResource(r)
    setUploadedFileName(null)
    setUploadError("")
    setForm({
      title: r.title,
      description: r.description ?? "",
      type: r.type,
      category: r.category ?? "",
      domain: r.domain ?? "",
      theme: r.theme ?? "",
      level: r.level ?? "",
      target_audience: r.target_audience?.join(", ") ?? "",
      tags: r.tags?.join(", ") ?? "",
      estimated_time: r.estimated_time ?? "",
      source_name: r.source_name ?? "",
      source_url: r.source_url ?? "",
      file_url: r.file_url ?? "",
      is_downloadable: r.is_downloadable,
      is_external: r.is_external,
      is_active: r.is_active,
    })
    setSaveError("")
    setShowModal(true)
  }

  const sauvegarder = async () => {
    if (!form.title.trim()) { setSaveError("Le titre est requis."); return }
    setSaving(true)
    setSaveError("")

    const payload = {
      title:           form.title.trim(),
      description:     form.description.trim() || null,
      type:            form.type,
      category:        form.category || null,
      domain:          form.domain || null,
      theme:           form.theme.trim() || null,
      level:           form.level || null,
      target_audience: form.target_audience ? form.target_audience.split(",").map(s => s.trim()).filter(Boolean) : null,
      tags:            form.tags ? form.tags.split(",").map(s => s.trim()).filter(Boolean) : null,
      estimated_time:  form.estimated_time.trim() || null,
      source_name:     form.source_name.trim() || null,
      source_url:      form.source_url.trim() || null,
      file_url:        form.file_url.trim() || null,
      is_downloadable: form.is_downloadable,
      is_external:     form.is_external,
      is_active:       form.is_active,
    }

    if (editResource) {
      await supabase.from("resources").update(payload).eq("id", editResource.id)
    } else {
      const { data: newResource } = await supabase.from("resources").insert(payload).select("id").single()
      setSaving(false)
      setShowModal(false)
      await chargerDonnees()
      if (newResource) router.push("/admin/ressources/" + newResource.id)
      return
    }

    await chargerDonnees()
    setShowModal(false)
    setSaving(false)
  }

  const toggleActif = async (r: Resource) => {
    await supabase.from("resources").update({ is_active: !r.is_active }).eq("id", r.id)
    await chargerDonnees()
  }

  const supprimer = async (r: Resource) => {
    setDeleteLoading(r.id)
    await supabase.from("resources").delete().eq("id", r.id)
    await chargerDonnees()
    setConfirmDelete(null)
    setDeleteLoading(null)
  }

  const filtered = resources.filter(r => {
    if (filtreDomain && r.domain !== filtreDomain) return false
    if (filtreType && r.type !== filtreType) return false
    if (filtreCateg && r.category !== filtreCateg) return false
    if (filtreStatut === "actif" && !r.is_active) return false
    if (filtreStatut === "inactif" && r.is_active) return false
    return true
  })

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

        {/* En-tête */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#1B2D5B]">Ressources</h2>
            <p className="text-gray-500 mt-1 text-sm">
              {resources.length} ressource{resources.length !== 1 ? "s" : ""} au total
            </p>
          </div>
          <button
            onClick={ouvrirAjout}
            className="bg-[#3DBFA0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2ea88b] transition-colors"
          >
            + Nouvelle ressource
          </button>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap gap-3 mb-6">
          <select value={filtreDomain} onChange={e => setFiltreDomain(e.target.value)} className={selectCls + " max-w-[200px]"}>
            <option value="">Tous les domaines</option>
            {DOMAINS.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}
          </select>
          <select value={filtreType} onChange={e => setFiltreType(e.target.value)} className={selectCls + " max-w-[200px]"}>
            <option value="">Tous les types</option>
            {TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
          <select value={filtreCateg} onChange={e => setFiltreCateg(e.target.value)} className={selectCls + " max-w-[220px]"}>
            <option value="">Toutes les catégories</option>
            {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
          </select>
          <select value={filtreStatut} onChange={e => setFiltreStatut(e.target.value)} className={selectCls + " max-w-[180px]"}>
            {STATUTS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </div>

        {/* Table */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-12 text-center">
            <p className="text-3xl mb-3">📭</p>
            <p className="text-[#1B2D5B] font-semibold">Aucune ressource</p>
            <p className="text-gray-400 text-sm mt-1">
              {resources.length === 0 ? "Ajoutez votre première ressource." : "Aucun résultat pour ces filtres."}
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Ressource</th>
                  <th className="text-left px-3 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Type</th>
                  <th className="text-left px-3 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Domaine</th>
                  <th className="text-left px-3 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Catégorie</th>
                  <th className="text-center px-3 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Formations</th>
                  <th className="text-center px-3 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Statut</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody>
                {filtered.map(r => {
                  const ti = typeInfo(r.type)
                  const domaine = DOMAINS.find(d => d.value === r.domain)
                  const categ = CATEGORIES.find(c => c.value === r.category)
                  return (
                    <tr key={r.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/60">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{ti.icon}</span>
                          <div>
                            <p className="font-medium text-[#1B2D5B]">{r.title}</p>
                            {r.description && (
                              <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{r.description}</p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3">
                        <span className="text-xs font-medium bg-[#3DBFA0]/10 text-[#1B8B72] px-2 py-0.5 rounded-full">
                          {ti.label}
                        </span>
                      </td>
                      <td className="px-3 py-3">
                        {domaine ? (
                          <span className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                            {domaine.label}
                          </span>
                        ) : <span className="text-xs text-gray-300">—</span>}
                      </td>
                      <td className="px-3 py-3">
                        {categ ? (
                          <span className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                            {categ.label}
                          </span>
                        ) : <span className="text-xs text-gray-300">—</span>}
                      </td>
                      <td className="px-3 py-3 text-center">
                        <span className="text-xs font-medium text-[#1B2D5B]">{r.nb_formations}</span>
                      </td>
                      <td className="px-3 py-3 text-center">
                        <button
                          onClick={() => toggleActif(r)}
                          className={`text-xs font-medium px-2.5 py-1 rounded-full transition-colors ${
                            r.is_active
                              ? "bg-green-50 text-green-700 hover:bg-green-100"
                              : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                          }`}
                        >
                          {r.is_active ? "Actif" : "Inactif"}
                        </button>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5 justify-end">
                          <a
                            href={`/admin/ressources/${r.id}`}
                            className="text-xs px-2.5 py-1.5 rounded-lg bg-[#1B2D5B]/10 text-[#1B2D5B] hover:bg-[#1B2D5B]/20 font-medium transition-colors"
                          >
                            Fiche
                          </a>
                          <button
                            onClick={() => ouvrirEdition(r)}
                            className="text-xs px-2.5 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 font-medium transition-colors"
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
        )}
      </main>

      {/* ── Modal création / modification ──────────────────────────────────────── */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[92vh] overflow-y-auto">
            <div className="sticky top-0 bg-white px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#1B2D5B]">
                {editResource ? "Modifier la ressource" : "Nouvelle ressource"}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
            </div>

            <div className="p-6 space-y-5">
              {/* Titre + Description */}
              <Field label="Titre" required>
                <input type="text" value={form.title} onChange={e => setForm({...form, title: e.target.value})}
                  placeholder="Titre de la ressource" className={inputCls} />
              </Field>
              <Field label="Description">
                <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})}
                  rows={2} placeholder="Description courte (optionnel)" className={inputCls} />
              </Field>

              {/* Type */}
              <Field label="Type">
                <div className="grid grid-cols-3 gap-2">
                  {TYPES.map(t => (
                    <button key={t.value} type="button" onClick={() => setForm({...form, type: t.value})}
                      className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg border text-xs transition-colors text-left ${
                        form.type === t.value
                          ? "border-[#3DBFA0] bg-[#3DBFA0]/10 text-[#1B2D5B] font-semibold"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}>
                      <span>{t.icon}</span> {t.label}
                    </button>
                  ))}
                </div>
              </Field>

              {/* Domaine + Catégorie */}
              <div className="grid grid-cols-2 gap-4">
                <Field label="Domaine">
                  <select value={form.domain} onChange={e => setForm({...form, domain: e.target.value})} className={selectCls}>
                    <option value="">— Choisir —</option>
                    {DOMAINS.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}
                  </select>
                </Field>
                <Field label="Catégorie">
                  <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} className={selectCls}>
                    <option value="">— Choisir —</option>
                    {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                  </select>
                </Field>
              </div>

              {/* Thème + Niveau */}
              <div className="grid grid-cols-2 gap-4">
                <Field label="Thème">
                  <input type="text" value={form.theme} onChange={e => setForm({...form, theme: e.target.value})}
                    placeholder="ex. vieillissement, MDH-PPH…" className={inputCls} />
                </Field>
                <Field label="Niveau">
                  <select value={form.level} onChange={e => setForm({...form, level: e.target.value})} className={selectCls}>
                    <option value="">— Choisir —</option>
                    {LEVELS.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
                  </select>
                </Field>
              </div>

              {/* Public cible + Tags */}
              <div className="grid grid-cols-2 gap-4">
                <Field label="Public cible">
                  <input type="text" value={form.target_audience} onChange={e => setForm({...form, target_audience: e.target.value})}
                    placeholder="professionnels, cadres, RH…" className={inputCls} />
                  <p className="text-[10px] text-gray-400 mt-1">Séparés par des virgules</p>
                </Field>
                <Field label="Tags">
                  <input type="text" value={form.tags} onChange={e => setForm({...form, tags: e.target.value})}
                    placeholder="droit, éthique, autonomie…" className={inputCls} />
                  <p className="text-[10px] text-gray-400 mt-1">Séparés par des virgules</p>
                </Field>
              </div>

              {/* Temps estimé + Nom de la source */}
              <div className="grid grid-cols-2 gap-4">
                <Field label="Temps estimé">
                  <input type="text" value={form.estimated_time} onChange={e => setForm({...form, estimated_time: e.target.value})}
                    placeholder="ex. 5 min, 15 min" className={inputCls} />
                </Field>
                <Field label="Nom de la source">
                  <input type="text" value={form.source_name} onChange={e => setForm({...form, source_name: e.target.value})}
                    placeholder="ex. OMS, RIPPH, HAS…" className={inputCls} />
                </Field>
              </div>

              {/* URLs */}
              <Field label="URL externe (source_url)">
                <input type="url" value={form.source_url} onChange={e => setForm({...form, source_url: e.target.value})}
                  placeholder="https://..." className={inputCls} />
              </Field>

              {/* Fichier : upload Supabase Storage ou URL manuelle */}
              <Field label={TYPES_AVEC_FICHIER.includes(form.type) ? "Fichier" : "URL fichier (file_url)"}>
                {TYPES_AVEC_FICHIER.includes(form.type) && (
                  <div className="mb-2">
                    {uploadedFileName || (editResource && form.file_url && form.file_url.includes("supabase")) ? (
                      <div className="flex items-center gap-2 p-2.5 bg-[#3DBFA0]/10 border border-[#3DBFA0]/30 rounded-lg">
                        <FileText className="w-4 h-4 text-[#3DBFA0] flex-shrink-0" />
                        <span className="text-xs font-medium text-[#1B8B72] flex-1 truncate">
                          {uploadedFileName ?? form.file_url.split("/").pop()}
                        </span>
                        <button
                          type="button"
                          onClick={supprimerFichierUploade}
                          className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <label className={`flex items-center gap-2 cursor-pointer border-2 border-dashed border-[#3DBFA0]/40 rounded-lg px-4 py-3 text-sm text-gray-500 hover:border-[#3DBFA0] hover:bg-[#3DBFA0]/5 transition-colors ${uploadingFile ? "opacity-60 pointer-events-none" : ""}`}>
                        <Upload className="w-4 h-4 text-[#3DBFA0] flex-shrink-0" />
                        <span>
                          {uploadingFile ? "Upload en cours…" : "Cliquer pour uploader un fichier (PDF, DOCX…)"}
                        </span>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                          className="hidden"
                          onChange={e => {
                            const file = e.target.files?.[0]
                            if (file) uploadFichier(file)
                          }}
                        />
                      </label>
                    )}
                    {uploadError && (
                      <p className="text-xs text-red-600 mt-1">{uploadError}</p>
                    )}
                    <p className="text-[10px] text-gray-400 mt-1">
                      ou renseigner une URL ci-dessous (Google Drive, Dropbox…)
                    </p>
                  </div>
                )}
                <input
                  type="url"
                  value={form.file_url}
                  onChange={e => { setForm({...form, file_url: e.target.value}); setUploadedFileName(null) }}
                  placeholder={TYPES_AVEC_FICHIER.includes(form.type) ? "https://drive.google.com/…" : "https://…"}
                  className={inputCls}
                />
              </Field>

              {/* Options booléennes */}
              <div className="flex flex-wrap gap-6 pt-1">
                {[
                  { key: "is_downloadable", label: "Téléchargeable" },
                  { key: "is_external",     label: "Externe" },
                  { key: "is_active",       label: "Actif (visible)" },
                ].map(({ key, label }) => (
                  <label key={key} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={form[key as keyof FormResource] as boolean}
                      onChange={e => setForm({...form, [key]: e.target.checked})}
                      className="w-4 h-4 accent-[#3DBFA0]"
                    />
                    {label}
                  </label>
                ))}
              </div>

              {saveError && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-2">
                  {saveError}
                </p>
              )}

              {!editResource && (
                <p className="text-xs text-[#3DBFA0] bg-[#3DBFA0]/5 border border-[#3DBFA0]/20 rounded-lg p-3">
                  Après création, vous serez redirigé vers la fiche de la ressource pour gérer les liaisons avec les formations et les modules.
                </p>
              )}
            </div>

            <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-gray-100 flex gap-3 justify-end">
              <button onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                Annuler
              </button>
              <button onClick={sauvegarder} disabled={saving}
                className="px-4 py-2 text-sm rounded-lg bg-[#3DBFA0] text-white hover:bg-[#2ea88b] transition-colors font-medium disabled:opacity-50">
                {saving ? "Enregistrement..." : editResource ? "Enregistrer" : "Créer la ressource"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Modal confirmation suppression ─────────────────────────────────────── */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-bold text-[#1B2D5B] mb-3">Supprimer la ressource</h3>
            <p className="text-sm text-gray-600 mb-1">
              Êtes-vous sûr de vouloir supprimer <span className="font-semibold text-[#1B2D5B]">"{confirmDelete.title}"</span> ?
            </p>
            <p className="text-xs text-amber-600 bg-amber-50 rounded-lg p-2 mb-5">
              Toutes les liaisons (formations et modules) seront supprimées.
            </p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setConfirmDelete(null)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                Annuler
              </button>
              <button onClick={() => supprimer(confirmDelete)} disabled={deleteLoading === confirmDelete.id}
                className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-50">
                {deleteLoading === confirmDelete.id ? "Suppression..." : "Supprimer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
