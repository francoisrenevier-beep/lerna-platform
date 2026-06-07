"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { AdminSidebar } from "@/components/AdminSidebar"
import { NIVEAUX, DOMAINES, getNiveauMeta, getDomaineMeta } from "@/lib/formationMeta"

// ─── Types ──────────────────────────────────────────────────────────────────────

type Formation = {
  id: string
  titre: string
  slug: string
  domaine: string[] | string | null
  thematique: string | null
  niveau: string | null
  est_publie: boolean
  est_a_venir: boolean
  est_nouveau: boolean
  parcours_nom: string | null
  parcours_id: string | null
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
  est_nouveau: boolean
}

type FormMetadata = {
  domaine: string
  thematique: string
  niveau: string
  public_cible: string
  parcours_id: string
  parcours_ordre: string
  parcours_nom: string
  est_nouveau: boolean
  afficher_accueil: boolean
  parcours_actif: boolean
  parcours_nouveau: boolean
}

type ParcoursExistant = {
  id: string
  nom: string
}

// ─── Constants ──────────────────────────────────────────────────────────────────

const THEMATIQUES_OPTIONS = ["Accompagnement", "Management", "Communication", "Éthique et posture", "Outils et méthodes", "Législation et droits"]

const NIVEAUX_PARCOURS = [
  { value: "1", niveau: "base",          label: "Base" },
  { value: "2", niveau: "intermediaire", label: "Intermédiaire" },
  { value: "3", niveau: "avance",        label: "Avancé" },
]

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
  if (arr.length === 0) return "—"
  return arr.map((v) => getDomaineMeta(v).label).join(", ")
}

function niveauToOrdre(niveau: string): number {
  const map: Record<string, number> = { base: 1, intermediaire: 2, avance: 3 }
  return map[niveau] ?? 1
}

const FORM_VIDE: FormCreation = {
  titre: "", slug: "", description: "", description_courte: "",
  categorie: "Accompagnement", niveau: "base", duree_estimee_minutes: "",
  thematique: "", public_cible: "", est_publie: false, est_nouveau: false,
}

const METADATA_VIDE: FormMetadata = {
  domaine: "", thematique: "", niveau: "base", public_cible: "",
  parcours_id: "", parcours_ordre: "1", parcours_nom: "",
  est_nouveau: false, afficher_accueil: false, parcours_actif: false, parcours_nouveau: false,
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

  const [metadataModal, setMetadataModal] = useState<{ id: string; titre: string } | null>(null)
  const [formMetadata, setFormMetadata] = useState<FormMetadata>(METADATA_VIDE)
  const [metadataSaving, setMetadataSaving] = useState(false)
  const [metadataSaveOk, setMetadataSaveOk] = useState(false)
  const [parcoursExistants, setParcoursExistants] = useState<ParcoursExistant[]>([])

  const router = useRouter()

  const chargerFormations = async () => {
    const { data: forms } = await supabase
      .from("formations")
      .select("id, titre, slug, domaine, thematique, niveau, est_publie, est_a_venir, est_nouveau, parcours_id, parcours_nom")
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

  const chargerParcoursExistants = async () => {
    const { data } = await supabase
      .from("formations")
      .select("parcours_id, parcours_nom")
      .not("parcours_id", "is", null)

    if (!data) return
    const seen = new Set<string>()
    const parcours: ParcoursExistant[] = []
    for (const f of data) {
      if (f.parcours_id && !seen.has(f.parcours_id)) {
        seen.add(f.parcours_id)
        parcours.push({ id: f.parcours_id, nom: f.parcours_nom || f.parcours_id })
      }
    }
    setParcoursExistants(parcours.sort((a, b) => a.nom.localeCompare(b.nom)))
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
      niveau: formCreate.niveau || "base",
      duree_estimee_minutes: parseInt(formCreate.duree_estimee_minutes) || null,
      domaine: [],
      thematique: formCreate.thematique || null,
      public_cible: formCreate.public_cible || null,
      est_publie: formCreate.est_publie,
      est_nouveau: formCreate.est_nouveau,
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
    const { data } = await supabase
      .from("formations")
      .select("domaine, thematique, niveau, public_cible, parcours_id, parcours_ordre, parcours_nom, est_nouveau, afficher_accueil")
      .eq("id", formation.id)
      .single()

    const hasParcours = !!data?.parcours_id
    setFormMetadata({
      domaine: getDomaineArray(data?.domaine)[0] ?? "",
      thematique: data?.thematique || "",
      niveau: data?.niveau || "base",
      public_cible: data?.public_cible || "",
      parcours_id: data?.parcours_id || "",
      parcours_ordre: data?.parcours_ordre?.toString() || "1",
      parcours_nom: data?.parcours_nom || "",
      est_nouveau: data?.est_nouveau || false,
      afficher_accueil: data?.afficher_accueil || false,
      parcours_actif: hasParcours,
      parcours_nouveau: false,
    })
    setMetadataModal({ id: formation.id, titre: formation.titre })
    setMetadataSaveOk(false)
    await chargerParcoursExistants()
  }

  const sauvegarderMetadata = async () => {
    if (!metadataModal) return
    setMetadataSaving(true)
    setMetadataSaveOk(false)

    const parcours_id = formMetadata.parcours_actif ? (formMetadata.parcours_id || null) : null
    const parcours_nom = formMetadata.parcours_actif ? (formMetadata.parcours_nom || null) : null
    const parcours_ordre = formMetadata.parcours_actif
      ? (["base", "intermediaire", "avance"].includes(formMetadata.niveau)
        ? niveauToOrdre(formMetadata.niveau)
        : parseInt(formMetadata.parcours_ordre) || 1)
      : null

    const { error } = await supabase.from("formations").update({
      domaine: formMetadata.domaine ? [formMetadata.domaine] : null,
      thematique: formMetadata.thematique || null,
      niveau: formMetadata.niveau || null,
      public_cible: formMetadata.public_cible || null,
      parcours_id,
      parcours_ordre,
      parcours_nom,
      est_nouveau: formMetadata.est_nouveau,
      afficher_accueil: formMetadata.afficher_accueil,
    }).eq("id", metadataModal.id)

    await chargerFormations()
    setMetadataSaving(false)
    if (error) {
      alert("Erreur lors de la sauvegarde : " + error.message)
    } else {
      setMetadataSaveOk(true)
    }
  }

  const handleSelectParcours = (value: string) => {
    if (value === "__nouveau__") {
      setFormMetadata(prev => ({ ...prev, parcours_nouveau: true, parcours_id: crypto.randomUUID(), parcours_nom: "" }))
    } else if (value === "") {
      setFormMetadata(prev => ({ ...prev, parcours_nouveau: false, parcours_id: "", parcours_nom: "" }))
    } else {
      const found = parcoursExistants.find(p => p.id === value)
      setFormMetadata(prev => ({ ...prev, parcours_nouveau: false, parcours_id: value, parcours_nom: found?.nom || "" }))
    }
    setMetadataSaveOk(false)
  }

  const formationsFiltrees = formations.filter((f) =>
    !recherche ||
    f.titre.toLowerCase().includes(recherche.toLowerCase()) ||
    getDomaineLabel(f.domaine).toLowerCase().includes(recherche.toLowerCase()) ||
    (f.parcours_nom || "").toLowerCase().includes(recherche.toLowerCase())
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
            placeholder="Rechercher par titre, domaine ou parcours..."
            className="w-full max-w-sm border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
          />
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Formation</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Domaine</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Statut</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Modules</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Apprenants</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {formationsFiltrees.map((f) => {
                const niveauMeta = getNiveauMeta(f.niveau)
                return (
                  <tr key={f.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                    <td className="px-4 py-3 max-w-[260px]">
                      <div className="flex items-start gap-1.5 flex-wrap">
                        <p className="font-medium text-[#1B2D5B] truncate max-w-full">{f.titre}</p>
                        {f.est_nouveau && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#3DBFA0] text-white uppercase tracking-wide flex-shrink-0">Nouveau</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        <p className="text-xs text-gray-400 font-mono">/{f.slug}</p>
                        {f.niveau && (
                          <span
                            className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full flex-shrink-0 text-white"
                            style={{ backgroundColor: niveauMeta.couleur }}
                          >
                            {niveauMeta.label}
                          </span>
                        )}
                      </div>
                      {f.parcours_nom && (
                        <p className="text-[10px] text-gray-400 mt-0.5 truncate">↳ {f.parcours_nom}</p>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-gray-600 text-xs">{getDomaineLabel(f.domaine)}</p>
                      {f.thematique && <p className="text-gray-400 text-xs mt-0.5">{f.thematique}</p>}
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
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-2 text-xs">
                        <span className="text-[#1B2D5B] font-semibold">{f.nb_commences}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-[#3DBFA0] font-semibold">{f.nb_termines} ✓</span>
                      </div>
                    </td>
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
                          Éditer
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
                          title="Supprimer"
                        >
                          ✕
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
              {formationsFiltrees.length === 0 && (
                <tr><td colSpan={6} className="px-4 py-10 text-center text-gray-400">Aucune formation trouvée.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* ── Modal Métadonnées ─────────────────────────────────────────────────── */}
      {metadataModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#1B2D5B]">Éditer la formation</h3>
              <button onClick={() => setMetadataModal(null)} className="text-gray-400 hover:text-gray-600 text-xl leading-none">×</button>
            </div>
            <p className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2 mb-5 font-medium truncate">{metadataModal.titre}</p>

            <div className="space-y-5">

              {/* Afficher sur l'accueil */}
              <label
                className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors ${formMetadata.afficher_accueil ? "border-[#1B2D5B] bg-[#1B2D5B]/5" : "border-gray-200 hover:border-gray-300"}`}
                onClick={() => { setFormMetadata(prev => ({ ...prev, afficher_accueil: !prev.afficher_accueil })); setMetadataSaveOk(false) }}
              >
                <div className={`w-11 h-6 rounded-full relative transition-colors flex-shrink-0 ${formMetadata.afficher_accueil ? "bg-[#1B2D5B]" : "bg-gray-200"}`}>
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${formMetadata.afficher_accueil ? "left-6" : "left-1"}`} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Afficher sur la page d&apos;accueil</p>
                  <p className="text-xs text-gray-400">Inclus dans les 3 formations mises en avant sur l&apos;accueil publique</p>
                </div>
              </label>

              {/* Badge Nouveau */}
              <label
                className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors ${formMetadata.est_nouveau ? "border-[#3DBFA0] bg-[#3DBFA0]/5" : "border-gray-200 hover:border-gray-300"}`}
                onClick={() => { setFormMetadata(prev => ({ ...prev, est_nouveau: !prev.est_nouveau })); setMetadataSaveOk(false) }}
              >
                <div className={`w-11 h-6 rounded-full relative transition-colors flex-shrink-0 ${formMetadata.est_nouveau ? "bg-[#3DBFA0]" : "bg-gray-200"}`}>
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${formMetadata.est_nouveau ? "left-6" : "left-1"}`} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Badge "Nouveau"</p>
                  <p className="text-xs text-gray-400">Affiche un encadré "Nouveau" sur la formation dans le catalogue</p>
                </div>
              </label>

              {/* Niveau */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Niveau</label>
                <select
                  value={formMetadata.niveau}
                  onChange={(e) => { setFormMetadata(prev => ({ ...prev, niveau: e.target.value })); setMetadataSaveOk(false) }}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                >
                  {NIVEAUX.map((n) => (
                    <option key={n.value} value={n.value}>{n.label}</option>
                  ))}
                </select>
              </div>

              {/* Parcours */}
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Parcours</p>
                  <button
                    type="button"
                    onClick={() => { setFormMetadata(prev => ({ ...prev, parcours_actif: !prev.parcours_actif })); setMetadataSaveOk(false) }}
                    className="flex items-center gap-2"
                  >
                    <div className={`w-9 h-5 rounded-full relative transition-colors ${formMetadata.parcours_actif ? "bg-[#1B2D5B]" : "bg-gray-200"}`}>
                      <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${formMetadata.parcours_actif ? "left-4" : "left-0.5"}`} />
                    </div>
                    <span className="text-xs text-gray-500">{formMetadata.parcours_actif ? "Assigné" : "Non assigné"}</span>
                  </button>
                </div>

                {formMetadata.parcours_actif && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Parcours</label>
                      <select
                        value={formMetadata.parcours_nouveau ? "__nouveau__" : (formMetadata.parcours_id || "")}
                        onChange={(e) => handleSelectParcours(e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                      >
                        <option value="">— Choisir un parcours —</option>
                        {parcoursExistants.map((p) => (
                          <option key={p.id} value={p.id}>{p.nom}</option>
                        ))}
                        <option value="__nouveau__">+ Créer un nouveau parcours</option>
                      </select>
                    </div>

                    {formMetadata.parcours_nouveau && (
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Nom du nouveau parcours</label>
                        <input
                          type="text"
                          value={formMetadata.parcours_nom}
                          onChange={(e) => { setFormMetadata(prev => ({ ...prev, parcours_nom: e.target.value })); setMetadataSaveOk(false) }}
                          placeholder="ex: Parcours Handicap"
                          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">Position dans le parcours</label>
                      <div className="flex gap-2">
                        {NIVEAUX_PARCOURS.map((np) => {
                          const isActive = formMetadata.parcours_ordre === np.value || formMetadata.niveau === np.niveau
                          return (
                            <button
                              key={np.value}
                              type="button"
                              onClick={() => {
                                setFormMetadata(prev => ({ ...prev, parcours_ordre: np.value, niveau: np.niveau }))
                                setMetadataSaveOk(false)
                              }}
                              className={`flex-1 py-2 px-2 rounded-lg text-xs font-medium border-2 transition-all ${
                                isActive
                                  ? "border-[#1B2D5B] bg-[#1B2D5B] text-white"
                                  : "border-gray-200 text-gray-500 hover:border-gray-300 bg-white"
                              }`}
                            >
                              {np.label}
                            </button>
                          )
                        })}
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1.5">Met automatiquement à jour le niveau de la formation.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Domaine */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Domaine</label>
                <select
                  value={formMetadata.domaine}
                  onChange={(e) => { setFormMetadata(prev => ({ ...prev, domaine: e.target.value })); setMetadataSaveOk(false) }}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                >
                  <option value="">— Aucun —</option>
                  {DOMAINES.map((d) => (
                    <option key={d.value} value={d.value}>{d.label}</option>
                  ))}
                </select>
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
                {metadataSaving ? "Enregistrement..." : "Enregistrer"}
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
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Niveau</label>
                  <select
                    value={formCreate.niveau}
                    onChange={(e) => setFormCreate({ ...formCreate, niveau: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  >
                    {NIVEAUX.map((n) => <option key={n.value} value={n.value}>{n.label}</option>)}
                  </select>
                </div>
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

              <div className="flex items-center gap-6 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formCreate.est_publie}
                    onChange={(e) => setFormCreate({ ...formCreate, est_publie: e.target.checked })}
                    className="w-4 h-4 accent-[#3DBFA0]"
                  />
                  <span className="text-sm text-gray-700">Publier immédiatement</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formCreate.est_nouveau}
                    onChange={(e) => setFormCreate({ ...formCreate, est_nouveau: e.target.checked })}
                    className="w-4 h-4 accent-[#3DBFA0]"
                  />
                  <span className="text-sm text-gray-700">Badge "Nouveau"</span>
                </label>
              </div>

              <p className="text-xs text-gray-400 bg-blue-50 border border-blue-100 rounded-lg p-2">
                Domaines et parcours peuvent être assignés après création via le bouton "Éditer".
              </p>

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
