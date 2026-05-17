"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { AdminSidebar } from "@/components/AdminSidebar"

type Formation = {
  id: string
  titre: string
  slug: string
  description: string | null
  description_courte: string | null
  categorie: string | null
  niveau: string | null
  duree_estimee_minutes: number | null
  domaine: string | null
  thematique: string | null
  public_cible: string | null
  est_publie: boolean
  est_privee: boolean
  est_a_venir: boolean
  est_nouveau: boolean
  parcours_id: string | null
  parcours_ordre: number | null
  parcours_nom: string | null
  image_url: string | null
}

type Module = {
  id: string
  titre: string
  description: string | null
  ordre: number
  duree_minutes: number | null
  type: string
}

type ModuleForm = Omit<Module, "id"> & { id?: string }

type Apprenant = {
  profil_id: string
  prenom: string
  nom: string
  institution_nom: string
  nb_modules_termines: number
  nb_modules_total: number
  a_attestation: boolean
}

type Onglet = "modules" | "apprenants" | "infos"

const NIVEAUX = [
  { value: "base", label: "Base" },
  { value: "intermediaire", label: "Intermédiaire" },
  { value: "confirme", label: "Confirmé" },
  { value: "tous", label: "Tous niveaux" },
]

function formatDuree(minutes: number | null): string {
  if (!minutes || minutes <= 0) return "—"
  if (minutes < 60) return `${minutes} min`
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? `${h}h${m.toString().padStart(2, "0")}` : `${h}h`
}

const MODULE_VIDE: ModuleForm = { titre: "", description: "", ordre: 1, duree_minutes: 30, type: "texte" }

export default function AdminFormationDetailPage() {
  const router = useRouter()
  const params = useParams()
  const formationId = params.id as string

  const [formation, setFormation] = useState<Formation | null>(null)
  const [modules, setModules] = useState<Module[]>([])
  const [apprenants, setApprenants] = useState<Apprenant[]>([])
  const [loading, setLoading] = useState(true)
  const [onglet, setOnglet] = useState<Onglet>("modules")

  const [formInfos, setFormInfos] = useState<Formation | null>(null)
  const [saveInfosLoading, setSaveInfosLoading] = useState(false)
  const [saveInfosOk, setSaveInfosOk] = useState(false)
  const [saveInfosError, setSaveInfosError] = useState<string | null>(null)
  const [imageUploading, setImageUploading] = useState(false)
  const [imageUploadError, setImageUploadError] = useState<string | null>(null)

  const [modalModule, setModalModule] = useState<ModuleForm | null>(null)
  const [moduleLoading, setModuleLoading] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null)
  const [reorderLoading, setReorderLoading] = useState(false)

  const chargerModules = async () => {
    const { data } = await supabase
      .from("modules")
      .select("id, titre, description, ordre, duree_minutes, type")
      .eq("formation_id", formationId)
      .order("ordre")
    setModules(data || [])
  }

  const recalculerDuree = async () => {
    const { data: mods } = await supabase
      .from("modules")
      .select("duree_minutes")
      .eq("formation_id", formationId)
    const total = (mods || []).reduce((sum, m) => sum + (m.duree_minutes || 0), 0)
    const duree = total > 0 ? total : null
    await supabase.from("formations").update({ duree_estimee_minutes: duree }).eq("id", formationId)
    setFormation(prev => prev ? { ...prev, duree_estimee_minutes: duree } : prev)
    setFormInfos(prev => prev ? { ...prev, duree_estimee_minutes: duree } : prev)
  }

  const chargerApprenants = async () => {
    const { data: progressions } = await supabase
      .from("progression")
      .select("profil_id, statut")
      .eq("formation_id", formationId)

    if (!progressions || progressions.length === 0) { setApprenants([]); return }

    const profilIds = [...new Set(progressions.map((p) => p.profil_id))]
    const nbModulesTotal = modules.length

    const [{ data: profils }, { data: ips }, { data: attestations }] = await Promise.all([
      supabase.from("profils").select("id, prenom, nom").in("id", profilIds),
      supabase.from("institution_profils").select("profil_id, institution_id").in("profil_id", profilIds),
      supabase.from("attestations").select("profil_id").eq("formation_id", formationId).in("profil_id", profilIds),
    ])

    const institutionIds = [...new Set(ips?.map((ip) => ip.institution_id) ?? [])]
    const { data: institutions } = institutionIds.length > 0
      ? await supabase.from("institutions").select("id, nom").in("id", institutionIds)
      : { data: [] }

    const profilMap = new Map(profils?.map((p) => [p.id, p]) ?? [])
    const ipsMap = new Map(ips?.map((ip) => [ip.profil_id, ip.institution_id]) ?? [])
    const institutionMap = new Map(institutions?.map((i) => [i.id, i]) ?? [])
    const attestationsSet = new Set(attestations?.map((a) => a.profil_id) ?? [])

    const appGroupe = profilIds.map((pid) => {
      const p = profilMap.get(pid)
      const instId = ipsMap.get(pid)
      const inst = instId ? institutionMap.get(instId) : null
      const nbTermines = progressions.filter((pr) => pr.profil_id === pid && pr.statut === "termine").length
      return {
        profil_id: pid,
        prenom: p?.prenom || "",
        nom: p?.nom || "",
        institution_nom: inst?.nom || "—",
        nb_modules_termines: nbTermines,
        nb_modules_total: nbModulesTotal,
        a_attestation: attestationsSet.has(pid),
      }
    })

    setApprenants(appGroupe.sort((a, b) => b.nb_modules_termines - a.nb_modules_termines))
  }

  useEffect(() => {
    const getData = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      const user = session?.user
      if (!user) { router.push("/connexion"); return }

      const { data: profil } = await supabase.from("profils").select("est_super_admin").eq("id", user.id).single()
      if (!profil?.est_super_admin) { router.push("/dashboard"); return }

      const { data: form } = await supabase
        .from("formations")
        .select("id, titre, slug, description, description_courte, categorie, niveau, duree_estimee_minutes, domaine, thematique, public_cible, est_publie, est_privee, est_a_venir, est_nouveau, parcours_id, parcours_ordre, parcours_nom, image_url")
        .eq("id", formationId)
        .single()

      if (!form) { router.push("/admin/formations"); return }
      setFormation(form as Formation)
      setFormInfos(form as Formation)

      await chargerModules()
      setLoading(false)
    }
    getData()
  }, [formationId, router])

  useEffect(() => {
    if (onglet === "apprenants" && modules.length >= 0) {
      chargerApprenants()
    }
  }, [onglet])

  const sauvegarderInfos = async () => {
    if (!formInfos) return
    setSaveInfosLoading(true)
    setSaveInfosError(null)
    const { error } = await supabase.from("formations").update({
      titre: formInfos.titre,
      slug: formInfos.slug,
      description: formInfos.description,
      description_courte: formInfos.description_courte,
      categorie: formInfos.categorie,
      niveau: formInfos.niveau,
      duree_estimee_minutes: formInfos.duree_estimee_minutes,
      domaine: formInfos.domaine,
      thematique: formInfos.thematique,
      public_cible: formInfos.public_cible,
      est_publie: formInfos.est_publie,
      est_privee: formInfos.est_privee,
      est_a_venir: formInfos.est_a_venir,
      est_nouveau: formInfos.est_nouveau,
      parcours_id: formInfos.parcours_id || null,
      parcours_ordre: formInfos.parcours_ordre || null,
      parcours_nom: formInfos.parcours_nom || null,
    }).eq("id", formationId)
    setSaveInfosLoading(false)
    if (error) {
      setSaveInfosError(error.message)
    } else {
      setFormation(formInfos)
      setSaveInfosOk(true)
      setTimeout(() => setSaveInfosOk(false), 2000)
    }
  }

  const sauvegarderModule = async () => {
    if (!modalModule) return
    setModuleLoading(true)

    if (modalModule.id) {
      await supabase.from("modules").update({
        titre: modalModule.titre,
        description: modalModule.description,
        ordre: modalModule.ordre,
        duree_minutes: modalModule.duree_minutes,
        type: modalModule.type,
      }).eq("id", modalModule.id)
    } else {
      await supabase.from("modules").insert({
        formation_id: formationId,
        titre: modalModule.titre,
        description: modalModule.description,
        ordre: modalModule.ordre,
        duree_minutes: modalModule.duree_minutes,
        type: modalModule.type,
      })
    }

    setModalModule(null)
    setModuleLoading(false)
    await Promise.all([chargerModules(), recalculerDuree()])
  }

  const supprimerModule = async (id: string) => {
    setDeleteLoading(id)
    await supabase.from("modules").delete().eq("id", id)
    await Promise.all([chargerModules(), recalculerDuree()])
    setDeleteLoading(null)
  }

  const deplacerModule = async (id: string, direction: "haut" | "bas") => {
    setReorderLoading(true)
    const index = modules.findIndex((m) => m.id === id)
    const swapIndex = direction === "haut" ? index - 1 : index + 1
    if (swapIndex < 0 || swapIndex >= modules.length) { setReorderLoading(false); return }

    const moduleA = modules[index]
    const moduleB = modules[swapIndex]

    await Promise.all([
      supabase.from("modules").update({ ordre: moduleB.ordre }).eq("id", moduleA.id),
      supabase.from("modules").update({ ordre: moduleA.ordre }).eq("id", moduleB.id),
    ])
    await chargerModules()
    setReorderLoading(false)
  }

  const uploadImage = async (file: File) => {
    setImageUploading(true)
    setImageUploadError(null)
    const ext = file.name.split(".").pop()
    const path = `${formationId}/cover.${ext}`
    const { error: uploadError } = await supabase.storage
      .from("formation-images")
      .upload(path, file, { upsert: true })
    if (uploadError) {
      setImageUploadError("Erreur lors de l'upload : " + uploadError.message)
      setImageUploading(false)
      return
    }
    const { data: urlData } = supabase.storage.from("formation-images").getPublicUrl(path)
    const publicUrl = urlData.publicUrl
    await supabase.from("formations").update({ image_url: publicUrl }).eq("id", formationId)
    if (formInfos) setFormInfos({ ...formInfos, image_url: publicUrl })
    setImageUploading(false)
  }

  const supprimerImage = async () => {
    if (!formInfos?.image_url) return
    const path = formInfos.image_url.split("/formation-images/")[1]
    if (path) await supabase.storage.from("formation-images").remove([path])
    await supabase.from("formations").update({ image_url: null }).eq("id", formationId)
    if (formInfos) setFormInfos({ ...formInfos, image_url: null })
  }

  const nouveauModule = () => {
    const maxOrdre = modules.length > 0 ? Math.max(...modules.map((m) => m.ordre)) : 0
    setModalModule({ ...MODULE_VIDE, ordre: maxOrdre + 1 })
  }

  const dureeCalculee = modules.reduce((sum, m) => sum + (m.duree_minutes || 0), 0)

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><p className="text-[#1B2D5B] text-sm">Chargement...</p></div>
  }

  const Tab = ({ id, label }: { id: Onglet; label: string }) => (
    <button
      onClick={() => setOnglet(id)}
      className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${onglet === id ? "border-[#3DBFA0] text-[#1B2D5B]" : "border-transparent text-gray-400 hover:text-gray-600"}`}
    >
      {label}
    </button>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar pageActive="formations" />
      <main className="flex-1 p-8 overflow-auto">

        {/* En-tête */}
        <div className="mb-6">
          <a href="/admin/formations" className="text-xs text-gray-400 hover:text-[#1B2D5B] transition-colors">← Retour aux formations</a>
          <div className="flex items-center gap-3 mt-2">
            <h2 className="text-2xl font-bold text-[#1B2D5B] flex-1">{formation?.titre}</h2>
            {formation?.est_nouveau && (
              <span className="text-xs font-bold px-2 py-1 rounded bg-[#3DBFA0] text-white uppercase tracking-wide">Nouveau</span>
            )}
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${formation?.est_publie ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
              {formation?.est_publie ? "Publié" : "Non publié"}
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1 font-mono">/{formation?.slug}</p>
        </div>

        {/* Onglets */}
        <div className="flex gap-6 border-b border-gray-200 mb-6">
          <Tab id="modules" label={`Modules (${modules.length})`} />
          <Tab id="apprenants" label="Apprenants" />
          <Tab id="infos" label="Informations" />
        </div>

        {/* Onglet Modules */}
        {onglet === "modules" && (
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500">{modules.length} module{modules.length !== 1 ? "s" : ""}</p>
                {modules.length > 0 && (
                  <p className="text-xs text-gray-400 mt-0.5">
                    Durée totale :
                    <span className="font-semibold text-[#1B2D5B] ml-1">{formatDuree(dureeCalculee)}</span>
                    <span className="text-[#3DBFA0] ml-1">(calculée et synchronisée automatiquement)</span>
                  </p>
                )}
              </div>
              <button onClick={nouveauModule}
                className="bg-[#3DBFA0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2ea88b] transition-colors">
                + Ajouter un module
              </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              {modules.length === 0 ? (
                <div className="p-10 text-center text-gray-400 text-sm">Aucun module. Ajoutez le premier module.</div>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <th className="text-center px-3 py-3 text-xs font-semibold text-gray-500 uppercase w-12">N°</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Titre</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Description</th>
                      <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Durée</th>
                      <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Type</th>
                      <th className="px-4 py-3 w-48"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {modules.map((m, i) => (
                      <tr key={m.id} className="border-b border-gray-50 last:border-0">
                        <td className="px-3 py-3 text-center">
                          <div className="flex flex-col items-center gap-0.5">
                            <span className="w-7 h-7 rounded-full bg-[#1B2D5B] text-white text-xs font-bold flex items-center justify-center">{m.ordre}</span>
                            <div className="flex gap-0.5">
                              <button onClick={() => deplacerModule(m.id, "haut")} disabled={i === 0 || reorderLoading}
                                className="text-gray-300 hover:text-[#1B2D5B] disabled:opacity-20 transition-colors text-xs leading-none p-0.5">▲</button>
                              <button onClick={() => deplacerModule(m.id, "bas")} disabled={i === modules.length - 1 || reorderLoading}
                                className="text-gray-300 hover:text-[#1B2D5B] disabled:opacity-20 transition-colors text-xs leading-none p-0.5">▼</button>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 font-medium text-[#1B2D5B] max-w-[200px]">
                          <span className="block truncate">{m.titre}</span>
                        </td>
                        <td className="px-4 py-3 text-gray-400 max-w-[220px]">
                          <span className="block truncate text-xs">{m.description || "—"}</span>
                        </td>
                        <td className="px-4 py-3 text-center text-gray-600 text-xs font-medium">
                          {m.duree_minutes ? `${m.duree_minutes} min` : "—"}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-mono">{m.type}</span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2 justify-end">
                            <button
                              onClick={() => setModalModule({ ...m })}
                              className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 font-medium transition-colors"
                            >
                              Modifier
                            </button>
                            <button
                              onClick={() => supprimerModule(m.id)}
                              disabled={deleteLoading === m.id}
                              className="text-xs px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 font-medium transition-colors disabled:opacity-50"
                            >
                              {deleteLoading === m.id ? "..." : "Supprimer"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  {modules.length > 1 && (
                    <tfoot>
                      <tr className="border-t border-gray-100 bg-gray-50/50">
                        <td colSpan={3} className="px-4 py-2 text-xs text-gray-400 text-right">Total</td>
                        <td className="px-4 py-2 text-center text-xs font-semibold text-[#1B2D5B]">{formatDuree(dureeCalculee)}</td>
                        <td colSpan={2}></td>
                      </tr>
                    </tfoot>
                  )}
                </table>
              )}
            </div>

            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-xs text-yellow-700">
              <strong>Note :</strong> Le contenu des modules (textes, quiz, composants) est géré dans les fichiers TSX sous <code className="font-mono bg-yellow-100 px-1 rounded">app/modules/</code>. La convention de nommage est <code className="font-mono bg-yellow-100 px-1 rounded">{formation?.slug}-module-N.tsx</code>.
            </div>
          </div>
        )}

        {/* Onglet Apprenants */}
        {onglet === "apprenants" && (
          <div>
            <p className="text-sm text-gray-500 mb-4">{apprenants.length} apprenant{apprenants.length !== 1 ? "s" : ""} ayant démarré cette formation.</p>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              {apprenants.length === 0 ? (
                <div className="p-10 text-center text-gray-400 text-sm">Aucun apprenant n'a encore démarré cette formation.</div>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Apprenant</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Institution</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Progression</th>
                      <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Attestation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apprenants.map((a) => {
                      const pct = modules.length > 0 ? Math.round((a.nb_modules_termines / modules.length) * 100) : 0
                      return (
                        <tr key={a.profil_id} className="border-b border-gray-50 last:border-0">
                          <td className="px-4 py-3 font-medium text-[#1B2D5B]">{a.prenom} {a.nom}</td>
                          <td className="px-4 py-3 text-gray-500 text-xs">{a.institution_nom}</td>
                          <td className="px-4 py-3 min-w-[180px]">
                            <div className="flex items-center gap-3">
                              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-2 rounded-full bg-[#3DBFA0]" style={{ width: `${pct}%` }} />
                              </div>
                              <span className="text-xs text-gray-500 whitespace-nowrap">
                                {a.nb_modules_termines}/{modules.length}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center">
                            {a.a_attestation ? (
                              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#3DBFA0]/10 text-[#3DBFA0]">Obtenue</span>
                            ) : (
                              <span className="text-xs text-gray-300">—</span>
                            )}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

        {/* Onglet Informations */}
        {onglet === "infos" && formInfos && (
          <div className="max-w-2xl space-y-4">

            {/* Image de couverture */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-[#1B2D5B] mb-4">Image de couverture</h3>
              <div className="flex items-start gap-4">
                <div className="w-40 h-24 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex-shrink-0">
                  {formInfos.image_url ? (
                    <img src={formInfos.image_url} alt="Couverture" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs text-center px-2">
                      Pas d'image
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="cursor-pointer inline-flex items-center gap-2 text-xs font-medium text-white bg-[#1B2D5B] px-3 py-2 rounded-lg hover:bg-[#152347] transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {imageUploading ? "Upload en cours..." : "Choisir une image"}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      disabled={imageUploading}
                      onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadImage(f) }}
                    />
                  </label>
                  {formInfos.image_url && (
                    <button
                      onClick={supprimerImage}
                      className="text-xs font-medium text-red-500 hover:text-red-700 transition-colors text-left"
                    >
                      Supprimer l'image
                    </button>
                  )}
                  <p className="text-xs text-gray-400">JPG, PNG, WebP · max 2 Mo recommandé</p>
                  {imageUploadError && <p className="text-xs text-red-500">{imageUploadError}</p>}
                </div>
              </div>
            </div>

            {/* Infos principales */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-[#1B2D5B] mb-4">Informations générales</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Titre</label>
                  <input type="text" value={formInfos.titre}
                    onChange={(e) => setFormInfos({ ...formInfos, titre: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Slug (URL)</label>
                    <input type="text" value={formInfos.slug}
                      onChange={(e) => setFormInfos({ ...formInfos, slug: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Catégorie</label>
                    <input type="text" value={formInfos.categorie || ""}
                      onChange={(e) => setFormInfos({ ...formInfos, categorie: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Thématique</label>
                    <input type="text" value={formInfos.thematique || ""}
                      onChange={(e) => setFormInfos({ ...formInfos, thematique: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Public cible</label>
                    <input type="text" value={formInfos.public_cible || ""}
                      onChange={(e) => setFormInfos({ ...formInfos, public_cible: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Description courte</label>
                  <textarea value={formInfos.description_courte || ""}
                    onChange={(e) => setFormInfos({ ...formInfos, description_courte: e.target.value })}
                    rows={2} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Description complète</label>
                  <textarea value={formInfos.description || ""}
                    onChange={(e) => setFormInfos({ ...formInfos, description: e.target.value })}
                    rows={4} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]" />
                </div>
              </div>
            </div>

            {/* Niveau & Durée */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-[#1B2D5B] mb-4">Niveau & Durée</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">Niveau</label>
                  <div className="grid grid-cols-2 gap-2">
                    {NIVEAUX.map((n) => (
                      <button
                        key={n.value}
                        type="button"
                        onClick={() => setFormInfos({ ...formInfos, niveau: n.value })}
                        className={`px-3 py-2.5 rounded-lg text-sm font-medium border-2 transition-all text-left ${
                          formInfos.niveau === n.value
                            ? "border-[#1B2D5B] bg-[#1B2D5B] text-white"
                            : "border-gray-100 text-gray-500 hover:border-gray-200 bg-white"
                        }`}
                      >
                        {n.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Durée estimée (minutes)</label>
                  <div className="flex items-center gap-3">
                    <input type="number" value={formInfos.duree_estimee_minutes || ""}
                      onChange={(e) => setFormInfos({ ...formInfos, duree_estimee_minutes: parseInt(e.target.value) || null })}
                      className="w-32 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]" />
                    {modules.length > 0 && (
                      <p className="text-xs text-gray-400">
                        Calculée depuis les modules : <span className="font-semibold text-[#3DBFA0]">{formatDuree(dureeCalculee)}</span>
                        {formInfos.duree_estimee_minutes === dureeCalculee && <span className="text-green-500 ml-1">✓ synchronisée</span>}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Parcours */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-[#1B2D5B] mb-4">Parcours</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Nom du parcours</label>
                  <input type="text" value={formInfos.parcours_nom || ""}
                    onChange={(e) => setFormInfos({ ...formInfos, parcours_nom: e.target.value || null })}
                    placeholder="ex: Parcours Handicap"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">ID parcours</label>
                  <input type="text" value={formInfos.parcours_id || ""}
                    onChange={(e) => setFormInfos({ ...formInfos, parcours_id: e.target.value || null })}
                    placeholder="UUID du parcours"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Position dans le parcours</label>
                  <select
                    value={formInfos.parcours_ordre?.toString() || ""}
                    onChange={(e) => setFormInfos({ ...formInfos, parcours_ordre: parseInt(e.target.value) || null })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  >
                    <option value="">— Non assigné —</option>
                    <option value="1">1 · Base</option>
                    <option value="2">2 · Intermédiaire</option>
                    <option value="3">3 · Confirmé</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Visibilité & Badges */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-[#1B2D5B] mb-4">Visibilité & Badges</h3>
              <div className="space-y-3">
                {[
                  { key: "est_publie", label: "Publié", desc: "Visible dans le catalogue" },
                  { key: "est_privee", label: "Privée", desc: "Accessible uniquement via lien direct" },
                  { key: "est_a_venir", label: "À venir", desc: "Annoncé mais pas encore disponible" },
                  { key: "est_nouveau", label: "Badge \"Nouveau\"", desc: "Affiche l'encadré Nouveau sur la formation" },
                ].map(({ key, label, desc }) => (
                  <label key={key} className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors ${(formInfos as any)[key] ? "border-[#3DBFA0] bg-[#3DBFA0]/5" : "border-gray-100 hover:border-gray-200"}`}>
                    <div
                      className={`w-10 h-6 rounded-full relative transition-colors flex-shrink-0 ${(formInfos as any)[key] ? "bg-[#3DBFA0]" : "bg-gray-200"}`}
                      onClick={() => setFormInfos({ ...formInfos, [key]: !(formInfos as any)[key] } as Formation)}
                    >
                      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${(formInfos as any)[key] ? "left-5" : "left-1"}`} />
                    </div>
                    <div onClick={() => setFormInfos({ ...formInfos, [key]: !(formInfos as any)[key] } as Formation)}>
                      <p className="text-sm font-medium text-gray-800">{label}</p>
                      <p className="text-xs text-gray-400">{desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {saveInfosError && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                Erreur : {saveInfosError}
              </p>
            )}
            <button onClick={sauvegarderInfos} disabled={saveInfosLoading}
              className="w-full bg-[#1B2D5B] text-white py-3 rounded-xl text-sm font-medium hover:bg-[#152347] transition-colors disabled:opacity-50">
              {saveInfosOk ? "✓ Modifications sauvegardées" : saveInfosLoading ? "Sauvegarde..." : "Sauvegarder les modifications"}
            </button>
          </div>
        )}
      </main>

      {/* Modal module */}
      {modalModule && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full">
            <h3 className="text-lg font-bold text-[#1B2D5B] mb-5">
              {modalModule.id ? "Modifier le module" : "Ajouter un module"}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Titre</label>
                <input type="text" value={modalModule.titre}
                  onChange={(e) => setModalModule({ ...modalModule, titre: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  placeholder="Titre du module" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Description</label>
                <textarea value={modalModule.description || ""}
                  onChange={(e) => setModalModule({ ...modalModule, description: e.target.value })}
                  rows={3} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  placeholder="Courte description du module" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Ordre</label>
                  <input type="number" value={modalModule.ordre}
                    onChange={(e) => setModalModule({ ...modalModule, ordre: parseInt(e.target.value) || 1 })}
                    min={1} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Durée (min)</label>
                  <input type="number" value={modalModule.duree_minutes || ""}
                    onChange={(e) => setModalModule({ ...modalModule, duree_minutes: parseInt(e.target.value) || null })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]" />
                  <p className="text-[10px] text-gray-400 mt-1">Mis à jour automatiquement sur la formation.</p>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Type</label>
                  <select value={modalModule.type}
                    onChange={(e) => setModalModule({ ...modalModule, type: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]">
                    <option value="texte">texte</option>
                    <option value="video">video</option>
                    <option value="interactif">interactif</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-end mt-6">
              <button onClick={() => setModalModule(null)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                Annuler
              </button>
              <button onClick={sauvegarderModule} disabled={moduleLoading || !modalModule.titre.trim()}
                className="px-4 py-2 text-sm rounded-lg bg-[#3DBFA0] text-white hover:bg-[#2ea88b] transition-colors font-medium disabled:opacity-50">
                {moduleLoading ? "Sauvegarde..." : modalModule.id ? "Modifier" : "Ajouter"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
