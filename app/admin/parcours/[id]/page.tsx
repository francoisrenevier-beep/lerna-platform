"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { AdminSidebar } from "@/components/AdminSidebar"

type Parcours = {
  id: string
  titre: string
  slug: string
  description: string | null
  description_courte: string | null
  image_url: string | null
  est_publie: boolean
}

type FormationLiee = {
  liaison_id: string
  formation_id: string
  ordre: number
  titre: string
  niveau: string | null
  duree_estimee_minutes: number | null
  slug: string
}

type FormationDispo = {
  id: string
  titre: string
  niveau: string | null
  slug: string
}

type Onglet = "formations" | "infos"

function formatDuree(minutes: number | null): string {
  if (!minutes || minutes <= 0) return "—"
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return h > 0 ? (m > 0 ? `${h}h${m.toString().padStart(2, "0")}` : `${h}h`) : `${m} min`
}

const NIVEAUX_LABEL: Record<string, string> = {
  base: "Base",
  intermediaire: "Intermédiaire",
  confirme: "Confirmé",
  tous: "Tous niveaux",
}

export default function AdminParcoursDetailPage() {
  const router = useRouter()
  const params = useParams()
  const parcoursId = params.id as string

  const [parcours, setParcours] = useState<Parcours | null>(null)
  const [formInfos, setFormInfos] = useState<Parcours | null>(null)
  const [formations, setFormations] = useState<FormationLiee[]>([])
  const [formationsDispo, setFormationsDispo] = useState<FormationDispo[]>([])
  const [loading, setLoading] = useState(true)
  const [onglet, setOnglet] = useState<Onglet>("formations")

  const [saveInfosLoading, setSaveInfosLoading] = useState(false)
  const [saveInfosOk, setSaveInfosOk] = useState(false)
  const [imageUploading, setImageUploading] = useState(false)
  const [imageError, setImageError] = useState<string | null>(null)

  const [ajoutFormationId, setAjoutFormationId] = useState("")
  const [ajoutLoading, setAjoutLoading] = useState(false)
  const [removeLoading, setRemoveLoading] = useState<string | null>(null)
  const [reorderLoading, setReorderLoading] = useState(false)

  const chargerFormations = async () => {
    const { data } = await supabase
      .from("parcours_formations")
      .select("id, formation_id, ordre, formations(titre, niveau, duree_estimee_minutes, slug)")
      .eq("parcours_id", parcoursId)
      .order("ordre")

    if (!data) { setFormations([]); return }
    setFormations(data.map((d: any) => ({
      liaison_id: d.id,
      formation_id: d.formation_id,
      ordre: d.ordre,
      titre: d.formations?.titre || "",
      niveau: d.formations?.niveau || null,
      duree_estimee_minutes: d.formations?.duree_estimee_minutes || null,
      slug: d.formations?.slug || "",
    })))
  }

  const chargerFormationsDispo = async () => {
    const { data: toutes } = await supabase
      .from("formations")
      .select("id, titre, niveau, slug")
      .eq("est_publie", true)
      .order("titre")

    const { data: liees } = await supabase
      .from("parcours_formations")
      .select("formation_id")
      .eq("parcours_id", parcoursId)

    const lieesSet = new Set(liees?.map((l: any) => l.formation_id) || [])
    setFormationsDispo((toutes || []).filter((f: any) => !lieesSet.has(f.id)) as FormationDispo[])
  }

  useEffect(() => {
    const getData = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      const user = session?.user
      if (!user) { router.push("/connexion"); return }
      const { data: profil } = await supabase.from("profils").select("est_super_admin").eq("id", user.id).single()
      if (!profil?.est_super_admin) { router.push("/dashboard"); return }

      const { data: p } = await supabase
        .from("parcours")
        .select("id, titre, slug, description, description_courte, image_url, est_publie")
        .eq("id", parcoursId)
        .single()

      if (!p) { router.push("/admin/parcours"); return }
      setParcours(p as Parcours)
      setFormInfos(p as Parcours)

      await Promise.all([chargerFormations(), chargerFormationsDispo()])
      setLoading(false)
    }
    getData()
  }, [parcoursId, router])

  const sauvegarderInfos = async () => {
    if (!formInfos) return
    setSaveInfosLoading(true)
    await supabase.from("parcours").update({
      titre: formInfos.titre,
      slug: formInfos.slug,
      description: formInfos.description,
      description_courte: formInfos.description_courte,
      est_publie: formInfos.est_publie,
    }).eq("id", parcoursId)
    setParcours(formInfos)
    setSaveInfosLoading(false)
    setSaveInfosOk(true)
    setTimeout(() => setSaveInfosOk(false), 2000)
  }

  const uploadImage = async (file: File) => {
    setImageUploading(true)
    setImageError(null)
    const ext = file.name.split(".").pop()
    const path = `parcours/${parcoursId}/cover.${ext}`
    const { error } = await supabase.storage.from("formation-images").upload(path, file, { upsert: true })
    if (error) { setImageError("Erreur : " + error.message); setImageUploading(false); return }
    const { data: urlData } = supabase.storage.from("formation-images").getPublicUrl(path)
    await supabase.from("parcours").update({ image_url: urlData.publicUrl }).eq("id", parcoursId)
    setFormInfos(prev => prev ? { ...prev, image_url: urlData.publicUrl } : prev)
    setImageUploading(false)
  }

  const supprimerImage = async () => {
    if (!formInfos?.image_url) return
    const path = formInfos.image_url.split("/formation-images/")[1]
    if (path) await supabase.storage.from("formation-images").remove([path])
    await supabase.from("parcours").update({ image_url: null }).eq("id", parcoursId)
    setFormInfos(prev => prev ? { ...prev, image_url: null } : prev)
  }

  const ajouterFormation = async () => {
    if (!ajoutFormationId) return
    setAjoutLoading(true)
    const maxOrdre = formations.length > 0 ? Math.max(...formations.map(f => f.ordre)) : 0
    await supabase.from("parcours_formations").insert({
      parcours_id: parcoursId,
      formation_id: ajoutFormationId,
      ordre: maxOrdre + 1,
    })
    setAjoutFormationId("")
    setAjoutLoading(false)
    await Promise.all([chargerFormations(), chargerFormationsDispo()])
  }

  const retirerFormation = async (liaisonId: string) => {
    setRemoveLoading(liaisonId)
    await supabase.from("parcours_formations").delete().eq("id", liaisonId)
    await Promise.all([chargerFormations(), chargerFormationsDispo()])
    setRemoveLoading(null)
  }

  const deplacerFormation = async (liaisonId: string, direction: "haut" | "bas") => {
    setReorderLoading(true)
    const index = formations.findIndex(f => f.liaison_id === liaisonId)
    const swapIndex = direction === "haut" ? index - 1 : index + 1
    if (swapIndex < 0 || swapIndex >= formations.length) { setReorderLoading(false); return }

    const a = formations[index]
    const b = formations[swapIndex]
    await Promise.all([
      supabase.from("parcours_formations").update({ ordre: b.ordre }).eq("id", a.liaison_id),
      supabase.from("parcours_formations").update({ ordre: a.ordre }).eq("id", b.liaison_id),
    ])
    await chargerFormations()
    setReorderLoading(false)
  }

  const dureeTotal = formations.reduce((s, f) => s + (f.duree_estimee_minutes || 0), 0)

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-[#1B2D5B] text-sm">Chargement...</p>
    </div>
  )

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
      <AdminSidebar pageActive="parcours" />
      <main className="flex-1 p-8 overflow-auto">
        <div className="mb-6">
          <a href="/admin/parcours" className="text-xs text-gray-400 hover:text-[#1B2D5B] transition-colors">← Retour aux parcours</a>
          <div className="flex items-center gap-3 mt-2">
            <h2 className="text-2xl font-bold text-[#1B2D5B] flex-1">{parcours?.titre}</h2>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${parcours?.est_publie ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
              {parcours?.est_publie ? "Publié" : "Brouillon"}
            </span>
          </div>
          <p className="text-sm text-gray-400 font-mono mt-1">/{parcours?.slug}</p>
        </div>

        <div className="flex gap-6 border-b border-gray-200 mb-6">
          <Tab id="formations" label={`Formations (${formations.length})`} />
          <Tab id="infos" label="Informations" />
        </div>

        {/* ── Onglet Formations ─────────────────────────────────────────────── */}
        {onglet === "formations" && (
          <div className="max-w-3xl space-y-4">
            {/* Résumé */}
            {formations.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-6 text-sm">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#1B2D5B]">{formations.length}</p>
                  <p className="text-xs text-gray-400">formations</p>
                </div>
                <div className="w-px h-10 bg-gray-100" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#3DBFA0]">{formatDuree(dureeTotal)}</p>
                  <p className="text-xs text-gray-400">durée totale</p>
                </div>
                <div className="ml-auto">
                  <a
                    href={`/parcours/${parcours?.slug}`}
                    target="_blank"
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#1B2D5B]/10 text-[#1B2D5B] hover:bg-[#1B2D5B]/20 font-medium transition-colors"
                  >
                    Aperçu →
                  </a>
                </div>
              </div>
            )}

            {/* Liste des formations */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              {formations.length === 0 ? (
                <div className="p-10 text-center text-gray-400 text-sm">
                  Aucune formation dans ce parcours. Ajoutez la première ci-dessous.
                </div>
              ) : (
                <div className="divide-y divide-gray-50">
                  {formations.map((f, i) => (
                    <div key={f.liaison_id} className="flex items-center gap-3 px-4 py-3">
                      <div className="flex flex-col items-center gap-0.5 flex-shrink-0">
                        <span className="w-8 h-8 rounded-full bg-[#1B2D5B] text-white text-sm font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <div className="flex gap-0.5">
                          <button onClick={() => deplacerFormation(f.liaison_id, "haut")} disabled={i === 0 || reorderLoading}
                            className="text-gray-300 hover:text-[#1B2D5B] disabled:opacity-20 text-xs p-0.5">▲</button>
                          <button onClick={() => deplacerFormation(f.liaison_id, "bas")} disabled={i === formations.length - 1 || reorderLoading}
                            className="text-gray-300 hover:text-[#1B2D5B] disabled:opacity-20 text-xs p-0.5">▼</button>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-[#1B2D5B] text-sm truncate">{f.titre}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          {f.niveau && (
                            <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                              {NIVEAUX_LABEL[f.niveau] || f.niveau}
                            </span>
                          )}
                          <span className="text-xs text-gray-400">{formatDuree(f.duree_estimee_minutes)}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <a
                          href={`/admin/formations?search=${f.slug}`}
                          className="text-xs text-gray-400 hover:text-[#1B2D5B] transition-colors"
                          title="Voir la formation"
                        >
                          ↗
                        </a>
                        <button
                          onClick={() => retirerFormation(f.liaison_id)}
                          disabled={removeLoading === f.liaison_id}
                          className="text-xs px-2.5 py-1 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-medium transition-colors disabled:opacity-50"
                        >
                          {removeLoading === f.liaison_id ? "..." : "Retirer"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Ajouter une formation */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Ajouter une formation</p>
              <div className="flex gap-2">
                <select
                  value={ajoutFormationId}
                  onChange={(e) => setAjoutFormationId(e.target.value)}
                  className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                >
                  <option value="">— Choisir une formation —</option>
                  {formationsDispo.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.titre}{f.niveau ? ` · ${NIVEAUX_LABEL[f.niveau] || f.niveau}` : ""}
                    </option>
                  ))}
                </select>
                <button
                  onClick={ajouterFormation}
                  disabled={!ajoutFormationId || ajoutLoading}
                  className="px-4 py-2 bg-[#3DBFA0] text-white rounded-lg text-sm font-medium hover:bg-[#2ea88b] disabled:opacity-50 transition-colors whitespace-nowrap"
                >
                  {ajoutLoading ? "..." : "Ajouter"}
                </button>
              </div>
              {formationsDispo.length === 0 && (
                <p className="text-xs text-gray-400 mt-2">Toutes les formations publiées sont déjà dans ce parcours.</p>
              )}
            </div>
          </div>
        )}

        {/* ── Onglet Infos ──────────────────────────────────────────────────── */}
        {onglet === "infos" && formInfos && (
          <div className="max-w-2xl space-y-4">
            {/* Image */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-[#1B2D5B] mb-4">Image de couverture</h3>
              <div className="flex items-start gap-4">
                <div className="w-44 h-28 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex-shrink-0">
                  {formInfos.image_url ? (
                    <img src={formInfos.image_url} alt="Couverture" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">Pas d'image</div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="cursor-pointer inline-flex items-center gap-2 text-xs font-medium text-white bg-[#1B2D5B] px-3 py-2 rounded-lg hover:bg-[#152347] transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {imageUploading ? "Upload..." : "Choisir une image"}
                    <input type="file" accept="image/*" className="hidden" disabled={imageUploading}
                      onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadImage(f) }} />
                  </label>
                  {formInfos.image_url && (
                    <button onClick={supprimerImage} className="text-xs text-red-500 hover:text-red-700 text-left">
                      Supprimer l'image
                    </button>
                  )}
                  <p className="text-xs text-gray-400">JPG, PNG, WebP · max 2 Mo</p>
                  {imageError && <p className="text-xs text-red-500">{imageError}</p>}
                </div>
              </div>
            </div>

            {/* Infos */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-[#1B2D5B] mb-4">Informations</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Titre</label>
                  <input type="text" value={formInfos.titre}
                    onChange={(e) => setFormInfos({ ...formInfos, titre: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Slug (URL)</label>
                  <input type="text" value={formInfos.slug}
                    onChange={(e) => setFormInfos({ ...formInfos, slug: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]" />
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
                    rows={5} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]" />
                </div>
                <label className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors ${formInfos.est_publie ? "border-[#3DBFA0] bg-[#3DBFA0]/5" : "border-gray-100 hover:border-gray-200"}`}
                  onClick={() => setFormInfos({ ...formInfos, est_publie: !formInfos.est_publie })}>
                  <div className={`w-10 h-6 rounded-full relative transition-colors flex-shrink-0 ${formInfos.est_publie ? "bg-[#3DBFA0]" : "bg-gray-200"}`}>
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${formInfos.est_publie ? "left-5" : "left-1"}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Publié</p>
                    <p className="text-xs text-gray-400">Visible dans le catalogue "Parcours complets"</p>
                  </div>
                </label>
              </div>
            </div>

            <button onClick={sauvegarderInfos} disabled={saveInfosLoading}
              className="w-full bg-[#1B2D5B] text-white py-3 rounded-xl text-sm font-medium hover:bg-[#152347] transition-colors disabled:opacity-50">
              {saveInfosOk ? "✓ Sauvegardé" : saveInfosLoading ? "Sauvegarde..." : "Sauvegarder les modifications"}
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
