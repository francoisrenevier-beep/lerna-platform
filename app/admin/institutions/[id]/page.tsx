"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { AdminSidebar } from "@/components/AdminSidebar"

type Institution = {
  id: string
  nom: string
  code_acces: string
  statut: string
  licence_expiration: string | null
}

type Membre = {
  profil_id: string
  prenom: string
  nom: string
  email: string | null
  role: string
  statut: string
  secteur: string | null
  nb_attestations: number
}

type ProfilDisponible = {
  id: string
  prenom: string
  nom: string
  email: string | null
}

type Onglet = "infos" | "collaborateurs" | "responsables"

function genererCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join("")
}

function statutBadge(statut: string) {
  if (statut === "actif") return { label: "Active", cls: "bg-green-100 text-green-700" }
  if (statut === "essai") return { label: "Essai", cls: "bg-yellow-100 text-yellow-700" }
  if (statut === "expire") return { label: "Expirée", cls: "bg-red-100 text-red-700" }
  return { label: "Inactive", cls: "bg-gray-100 text-gray-500" }
}

export default function AdminInstitutionDetailPage() {
  const router = useRouter()
  const params = useParams()
  const institutionId = params.id as string

  const [institution, setInstitution] = useState<Institution | null>(null)
  const [membres, setMembres] = useState<Membre[]>([])
  const [loading, setLoading] = useState(true)
  const [onglet, setOnglet] = useState<Onglet>("collaborateurs")
  const [actionLoading, setActionLoading] = useState<string | null>(null)

  // Formulaire infos
  const [formInfos, setFormInfos] = useState({ nom: "", statut: "actif", licence_expiration: "", code_acces: "" })
  const [saveInfosLoading, setSaveInfosLoading] = useState(false)
  const [saveInfosOk, setSaveInfosOk] = useState(false)

  // Modal ajout membre
  const [showAjout, setShowAjout] = useState(false)
  const [roleAjout, setRoleAjout] = useState<"collaborateur" | "responsable">("collaborateur")
  const [rechercheProfil, setRechercheProfil] = useState("")
  const [profilsDisponibles, setProfilsDisponibles] = useState<ProfilDisponible[]>([])
  const [ajoutLoading, setAjoutLoading] = useState(false)

  const chargerMembres = async () => {
    const { data: ips } = await supabase
      .from("institution_profils")
      .select("profil_id, role, statut, secteur")
      .eq("institution_id", institutionId)

    if (!ips || ips.length === 0) { setMembres([]); return }

    const profilIds = ips.map((ip) => ip.profil_id)
    const { data: profils } = await supabase
      .from("profils")
      .select("id, prenom, nom, email")
      .in("id", profilIds)

    const profilMap = new Map(profils?.map((p) => [p.id, p]) ?? [])

    const enrichis = await Promise.all(
      ips.map(async (ip) => {
        const p = profilMap.get(ip.profil_id)
        const { count } = await supabase
          .from("attestations")
          .select("id", { count: "exact" })
          .eq("profil_id", ip.profil_id)
        return {
          profil_id: ip.profil_id,
          prenom: p?.prenom || "",
          nom: p?.nom || "",
          email: p?.email || null,
          role: ip.role,
          statut: ip.statut,
          secteur: ip.secteur || null,
          nb_attestations: count || 0,
        }
      })
    )
    setMembres(enrichis)
  }

  useEffect(() => {
    const getData = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      const user = session?.user
      if (!user) { router.push("/connexion"); return }

      const { data: profil } = await supabase
        .from("profils").select("est_super_admin").eq("id", user.id).single()
      if (!profil?.est_super_admin) { router.push("/dashboard"); return }

      const { data: inst } = await supabase
        .from("institutions")
        .select("id, nom, code_acces, statut, licence_expiration")
        .eq("id", institutionId)
        .single()

      if (!inst) { router.push("/admin/institutions"); return }
      setInstitution(inst)
      setFormInfos({
        nom: inst.nom,
        statut: inst.statut,
        licence_expiration: inst.licence_expiration?.split("T")[0] || "",
        code_acces: inst.code_acces,
      })

      await chargerMembres()
      setLoading(false)
    }
    getData()
  }, [institutionId, router])

  const sauvegarderInfos = async () => {
    setSaveInfosLoading(true)
    await supabase.from("institutions").update({
      nom: formInfos.nom,
      statut: formInfos.statut,
      licence_expiration: formInfos.licence_expiration || null,
      code_acces: formInfos.code_acces,
    }).eq("id", institutionId)
    setInstitution((prev) => prev ? { ...prev, nom: formInfos.nom, statut: formInfos.statut, code_acces: formInfos.code_acces, licence_expiration: formInfos.licence_expiration || null } : prev)
    setSaveInfosLoading(false)
    setSaveInfosOk(true)
    setTimeout(() => setSaveInfosOk(false), 2000)
  }

  const changerStatutMembre = async (profilId: string, newStatut: "actif" | "inactif") => {
    setActionLoading(profilId + "_statut")
    await supabase.from("institution_profils").update({ statut: newStatut })
      .eq("profil_id", profilId).eq("institution_id", institutionId)
    await chargerMembres()
    setActionLoading(null)
  }

  const changerRoleMembre = async (profilId: string, newRole: "collaborateur" | "responsable") => {
    setActionLoading(profilId + "_role")
    await supabase.from("institution_profils").update({ role: newRole })
      .eq("profil_id", profilId).eq("institution_id", institutionId)
    await chargerMembres()
    setActionLoading(null)
  }

  const retirerMembre = async (profilId: string) => {
    setActionLoading(profilId + "_retirer")
    await supabase.from("institution_profils").delete()
      .eq("profil_id", profilId).eq("institution_id", institutionId)
    await chargerMembres()
    setActionLoading(null)
  }

  const chargerProfilsDisponibles = async (search: string) => {
    if (search.length < 2) { setProfilsDisponibles([]); return }
    const membresIds = membres.map((m) => m.profil_id)
    const { data } = await supabase
      .from("profils")
      .select("id, prenom, nom, email")
      .or(`prenom.ilike.%${search}%,nom.ilike.%${search}%,email.ilike.%${search}%`)
      .limit(10)
    const filtre = (data || []).filter((p) => !membresIds.includes(p.id))
    setProfilsDisponibles(filtre)
  }

  const ajouterMembre = async (profilId: string) => {
    setAjoutLoading(true)
    await supabase.from("institution_profils").insert({
      profil_id: profilId,
      institution_id: institutionId,
      role: roleAjout,
      statut: "actif",
    })
    setShowAjout(false)
    setRechercheProfil("")
    setProfilsDisponibles([])
    await chargerMembres()
    setAjoutLoading(false)
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><p className="text-[#1B2D5B] text-sm">Chargement...</p></div>
  }

  const collaborateurs = membres.filter((m) => m.role === "collaborateur")
  const responsables = membres.filter((m) => m.role === "responsable")
  const badge = institution ? statutBadge(institution.statut) : null

  const TabbedRow = ({ label, actif, onClick }: { label: string; actif: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${actif ? "border-[#3DBFA0] text-[#1B2D5B]" : "border-transparent text-gray-400 hover:text-gray-600"}`}
    >
      {label}
    </button>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar pageActive="institutions" />
      <main className="flex-1 p-8 overflow-auto">

        {/* En-tête institution */}
        <div className="mb-6">
          <a href="/admin/institutions" className="text-xs text-gray-400 hover:text-[#1B2D5B] transition-colors">← Retour aux institutions</a>
          <div className="flex items-center gap-4 mt-2">
            <h2 className="text-2xl font-bold text-[#1B2D5B]">{institution?.nom}</h2>
            {badge && <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badge.cls}`}>{badge.label}</span>}
          </div>
          <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
            <span>Code : <span className="font-mono font-semibold text-gray-700">{institution?.code_acces}</span></span>
            <span>·</span>
            <span>{collaborateurs.length} collaborateur{collaborateurs.length !== 1 ? "s" : ""}</span>
            <span>·</span>
            <span>{responsables.length} responsable{responsables.length !== 1 ? "s" : ""}</span>
          </div>
        </div>

        {/* Onglets */}
        <div className="flex gap-6 border-b border-gray-200 mb-6">
          <TabbedRow label="Collaborateurs" actif={onglet === "collaborateurs"} onClick={() => setOnglet("collaborateurs")} />
          <TabbedRow label={`Responsables (${responsables.length})`} actif={onglet === "responsables"} onClick={() => setOnglet("responsables")} />
          <TabbedRow label="Informations" actif={onglet === "infos"} onClick={() => setOnglet("infos")} />
        </div>

        {/* Onglet Collaborateurs */}
        {onglet === "collaborateurs" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-500">{collaborateurs.length} collaborateur{collaborateurs.length !== 1 ? "s" : ""}</p>
              <button
                onClick={() => { setRoleAjout("collaborateur"); setShowAjout(true) }}
                className="bg-[#3DBFA0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2ea88b] transition-colors"
              >
                + Ajouter un collaborateur
              </button>
            </div>
            <MembreTable
              membres={collaborateurs}
              autreRole="responsable"
              autreRoleLabel="Promouvoir responsable"
              onChangerStatut={changerStatutMembre}
              onChangerRole={changerRoleMembre}
              onRetirer={retirerMembre}
              actionLoading={actionLoading}
            />
          </div>
        )}

        {/* Onglet Responsables */}
        {onglet === "responsables" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-500">{responsables.length} responsable{responsables.length !== 1 ? "s" : ""}</p>
              <button
                onClick={() => { setRoleAjout("responsable"); setShowAjout(true) }}
                className="bg-[#3DBFA0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2ea88b] transition-colors"
              >
                + Ajouter un responsable
              </button>
            </div>
            <MembreTable
              membres={responsables}
              autreRole="collaborateur"
              autreRoleLabel="Rétrograder collaborateur"
              onChangerStatut={changerStatutMembre}
              onChangerRole={changerRoleMembre}
              onRetirer={retirerMembre}
              actionLoading={actionLoading}
            />
          </div>
        )}

        {/* Onglet Informations */}
        {onglet === "infos" && (
          <div className="max-w-lg bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-base font-semibold text-[#1B2D5B] mb-5">Informations de l'institution</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Nom</label>
                <input type="text" value={formInfos.nom} onChange={(e) => setFormInfos({ ...formInfos, nom: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Code d'accès</label>
                <div className="flex gap-2">
                  <input type="text" value={formInfos.code_acces}
                    onChange={(e) => setFormInfos({ ...formInfos, code_acces: e.target.value.toUpperCase().slice(0, 8) })}
                    className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] uppercase" maxLength={8} />
                  <button onClick={() => setFormInfos({ ...formInfos, code_acces: genererCode() })}
                    className="px-3 py-2 text-xs rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 font-medium">
                    Régénérer
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-1">Attention : changer le code empêche les nouvelles inscriptions avec l'ancien code.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Statut licence</label>
                <select value={formInfos.statut} onChange={(e) => setFormInfos({ ...formInfos, statut: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]">
                  <option value="actif">Active</option>
                  <option value="essai">Essai</option>
                  <option value="expire">Expirée</option>
                  <option value="inactif">Inactive</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Date d'expiration</label>
                <input type="date" value={formInfos.licence_expiration}
                  onChange={(e) => setFormInfos({ ...formInfos, licence_expiration: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]" />
              </div>
              <button onClick={sauvegarderInfos} disabled={saveInfosLoading}
                className="w-full bg-[#1B2D5B] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#152347] transition-colors disabled:opacity-50">
                {saveInfosOk ? "✓ Sauvegardé" : saveInfosLoading ? "Sauvegarde..." : "Sauvegarder les modifications"}
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Modal ajout membre */}
      {showAjout && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold text-[#1B2D5B] mb-1">
              Ajouter un {roleAjout === "responsable" ? "responsable" : "collaborateur"}
            </h3>
            <p className="text-sm text-gray-400 mb-4">Recherchez un utilisateur déjà inscrit sur la plateforme.</p>
            <input
              type="text"
              value={rechercheProfil}
              onChange={(e) => { setRechercheProfil(e.target.value); chargerProfilsDisponibles(e.target.value) }}
              placeholder="Prénom, nom ou email..."
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] mb-3"
            />
            {profilsDisponibles.length > 0 && (
              <div className="border border-gray-100 rounded-lg overflow-hidden mb-3">
                {profilsDisponibles.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => ajouterMembre(p.id)}
                    disabled={ajoutLoading}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-[#3DBFA0]/10 transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between"
                  >
                    <div>
                      <span className="font-medium text-[#1B2D5B]">{p.prenom} {p.nom}</span>
                      {p.email && <span className="block text-xs text-gray-400">{p.email}</span>}
                    </div>
                    <span className="text-xs text-[#3DBFA0] font-medium shrink-0 ml-2">Ajouter →</span>
                  </button>
                ))}
              </div>
            )}
            {rechercheProfil.length >= 2 && profilsDisponibles.length === 0 && (
              <p className="text-sm text-gray-400 text-center py-3">Aucun utilisateur trouvé (déjà membre ou inexistant).</p>
            )}
            <div className="flex justify-end">
              <button onClick={() => { setShowAjout(false); setRechercheProfil(""); setProfilsDisponibles([]) }}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function MembreTable({
  membres, autreRole, autreRoleLabel, onChangerStatut, onChangerRole, onRetirer, actionLoading
}: {
  membres: Membre[]
  autreRole: "collaborateur" | "responsable"
  autreRoleLabel: string
  onChangerStatut: (id: string, s: "actif" | "inactif") => void
  onChangerRole: (id: string, r: "collaborateur" | "responsable") => void
  onRetirer: (id: string) => void
  actionLoading: string | null
}) {
  if (membres.length === 0) {
    return <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-10 text-center text-gray-400 text-sm">Aucun membre.</div>
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50">
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Membre</th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Secteur</th>
            <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Formations</th>
            <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Statut</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {membres.map((m) => (
            <tr key={m.profil_id} className={`border-b border-gray-50 last:border-0 ${m.statut === "inactif" ? "opacity-40" : ""}`}>
              <td className="px-4 py-3 font-medium text-[#1B2D5B]">{m.prenom} {m.nom}</td>
              <td className="px-4 py-3 text-gray-400 text-xs">{m.email || "—"}</td>
              <td className="px-4 py-3 text-gray-400 text-xs">{m.secteur || "—"}</td>
              <td className="px-4 py-3 text-center font-semibold text-[#3DBFA0]">{m.nb_attestations}</td>
              <td className="px-4 py-3 text-center">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${m.statut === "actif" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                  {m.statut === "actif" ? "Actif" : "Inactif"}
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-1.5 justify-end flex-wrap">
                  {m.statut === "actif" ? (
                    <button
                      onClick={() => onChangerStatut(m.profil_id, "inactif")}
                      disabled={actionLoading === m.profil_id + "_statut"}
                      className="text-xs px-2.5 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 font-medium transition-colors disabled:opacity-50"
                    >
                      Désactiver
                    </button>
                  ) : (
                    <button
                      onClick={() => onChangerStatut(m.profil_id, "actif")}
                      disabled={actionLoading === m.profil_id + "_statut"}
                      className="text-xs px-2.5 py-1.5 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 font-medium transition-colors disabled:opacity-50"
                    >
                      Réactiver
                    </button>
                  )}
                  <button
                    onClick={() => onChangerRole(m.profil_id, autreRole)}
                    disabled={actionLoading === m.profil_id + "_role"}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 font-medium transition-colors disabled:opacity-50 whitespace-nowrap"
                  >
                    {autreRoleLabel}
                  </button>
                  <button
                    onClick={() => onRetirer(m.profil_id)}
                    disabled={actionLoading === m.profil_id + "_retirer"}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 font-medium transition-colors disabled:opacity-50"
                  >
                    Retirer
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
