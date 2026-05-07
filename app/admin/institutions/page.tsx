"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { AdminSidebar } from "@/components/AdminSidebar"

type Institution = {
  id: string
  nom: string
  code_acces: string
  statut: string
  licence_expiration: string | null
  nb_collaborateurs: number
}

type FormInstitution = {
  nom: string
  code_acces: string
  statut: string
  licence_expiration: string
}

type ModalModification = {
  institution: Institution
  statut: string
  licence_expiration: string
}

function genererCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let code = ""
  for (let i = 0; i < 8; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code
}

function statutBadge(statut: string) {
  if (statut === "actif") return { label: "Active", cls: "bg-green-100 text-green-700" }
  if (statut === "essai") return { label: "Essai", cls: "bg-yellow-100 text-yellow-700" }
  if (statut === "expire") return { label: "Expirée", cls: "bg-red-100 text-red-700" }
  return { label: "Inactive", cls: "bg-gray-100 text-gray-500" }
}

function dateFormat(d: string | null) {
  if (!d) return "—"
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })
}

export default function AdminInstitutionsPage() {
  const [institutions, setInstitutions] = useState<Institution[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState<FormInstitution>({ nom: "", code_acces: genererCode(), statut: "actif", licence_expiration: "" })
  const [formLoading, setFormLoading] = useState(false)
  const [formError, setFormError] = useState("")
  const [modalModif, setModalModif] = useState<ModalModification | null>(null)
  const [modifLoading, setModifLoading] = useState(false)
  const [actionLoading, setActionLoading] = useState<string | null>(null)
  const [rlsError, setRlsError] = useState("")
  const router = useRouter()

  const chargerInstitutions = async () => {
    const { data: insts, error } = await supabase
      .from("institutions")
      .select("id, nom, code_acces, statut, licence_expiration")
      .order("nom", { ascending: true })

    if (error) { setRlsError(`Erreur RLS (${error.code}): ${error.message}`); setInstitutions([]); return }
    setRlsError("")
    if (!insts || insts.length === 0) { setInstitutions([]); return }

    const avecCollabs = await Promise.all(
      insts.map(async (inst) => {
        const { count } = await supabase
          .from("institution_profils")
          .select("profil_id", { count: "exact" })
          .eq("institution_id", inst.id)
          .eq("role", "collaborateur")
          .eq("statut", "actif")
        return { ...inst, nb_collaborateurs: count || 0 }
      })
    )
    setInstitutions(avecCollabs)
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

      await chargerInstitutions()
      setLoading(false)
    }
    getData()
  }, [router])

  const creerInstitution = async () => {
    if (!form.nom.trim()) { setFormError("Le nom est requis."); return }
    setFormLoading(true)
    setFormError("")

    const { error } = await supabase.from("institutions").insert({
      nom: form.nom.trim(),
      code_acces: form.code_acces,
      statut: form.statut,
      licence_expiration: form.licence_expiration || null,
    })

    if (error) {
      setFormError("Erreur : " + error.message)
    } else {
      setShowForm(false)
      setForm({ nom: "", code_acces: genererCode(), statut: "actif", licence_expiration: "" })
      await chargerInstitutions()
    }
    setFormLoading(false)
  }

  const sauvegarderModification = async () => {
    if (!modalModif) return
    setModifLoading(true)
    await supabase
      .from("institutions")
      .update({
        statut: modalModif.statut,
        licence_expiration: modalModif.licence_expiration || null,
      })
      .eq("id", modalModif.institution.id)
    setModalModif(null)
    setModifLoading(false)
    await chargerInstitutions()
  }

  const desactiver = async (id: string) => {
    setActionLoading(id)
    await supabase.from("institutions").update({ statut: "inactif" }).eq("id", id)
    await chargerInstitutions()
    setActionLoading(null)
  }

  const reactiver = async (id: string) => {
    setActionLoading(id)
    await supabase.from("institutions").update({ statut: "actif" }).eq("id", id)
    await chargerInstitutions()
    setActionLoading(null)
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
      <AdminSidebar pageActive="institutions" />
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1B2D5B]">Institutions</h2>
            <p className="text-gray-500 mt-1">{institutions.length} institution{institutions.length !== 1 ? "s" : ""} enregistrée{institutions.length !== 1 ? "s" : ""}.</p>
          </div>
          <button
            onClick={() => { setShowForm(true); setFormError("") }}
            className="bg-[#3DBFA0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2ea88b] transition-colors"
          >
            + Créer une institution
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Institution</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Code accès</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Statut</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Expiration</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Collaborateurs</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {institutions.map((inst) => {
                const badge = statutBadge(inst.statut)
                const inactif = inst.statut === "inactif"
                return (
                  <tr key={inst.id} className={`border-b border-gray-50 last:border-0 ${inactif ? "opacity-50" : ""}`}>
                    <td className="px-4 py-3 font-medium text-[#1B2D5B]">{inst.nom}</td>
                    <td className="px-4 py-3 font-mono text-gray-600">{inst.code_acces}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${badge.cls}`}>{badge.label}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-500">{dateFormat(inst.licence_expiration)}</td>
                    <td className="px-4 py-3 text-center font-semibold text-[#3DBFA0]">{inst.nb_collaborateurs}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 justify-end">
                        <a
                          href={`/admin/institutions/${inst.id}`}
                          className="text-xs px-3 py-1.5 rounded-lg bg-[#1B2D5B]/10 text-[#1B2D5B] hover:bg-[#1B2D5B]/20 transition-colors font-medium"
                        >
                          Détail →
                        </a>
                        <button
                          onClick={() => setModalModif({
                            institution: inst,
                            statut: inst.statut,
                            licence_expiration: inst.licence_expiration?.split("T")[0] || "",
                          })}
                          className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors font-medium"
                        >
                          Modifier
                        </button>
                        {inactif ? (
                          <button
                            onClick={() => reactiver(inst.id)}
                            disabled={actionLoading === inst.id}
                            className="text-xs px-3 py-1.5 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors font-medium disabled:opacity-50"
                          >
                            {actionLoading === inst.id ? "..." : "Réactiver"}
                          </button>
                        ) : (
                          <button
                            onClick={() => desactiver(inst.id)}
                            disabled={actionLoading === inst.id}
                            className="text-xs px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors font-medium disabled:opacity-50"
                          >
                            {actionLoading === inst.id ? "..." : "Désactiver"}
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              })}
              {institutions.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center">
                    {rlsError ? (
                      <div className="text-sm">
                        <p className="text-red-600 font-medium mb-1">Politique RLS manquante</p>
                        <p className="text-red-400 text-xs font-mono">{rlsError}</p>
                        <p className="text-gray-400 text-xs mt-2">Exécute dans le SQL Editor Supabase :<br/>
                          <code className="bg-gray-100 px-1 rounded">CREATE POLICY "super_admin lit toutes les institutions" ON institutions FOR SELECT TO authenticated USING (is_super_admin());</code>
                        </p>
                      </div>
                    ) : (
                      <p className="text-gray-400">Aucune institution.</p>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal création institution */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold text-[#1B2D5B] mb-5">Créer une institution</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Nom de l'institution</label>
                <input
                  type="text"
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  placeholder="ex: Association AVOP"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Code d'accès (8 caractères)</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={form.code_acces}
                    onChange={(e) => setForm({ ...form, code_acces: e.target.value.toUpperCase().slice(0, 8) })}
                    className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] uppercase"
                    maxLength={8}
                  />
                  <button
                    onClick={() => setForm({ ...form, code_acces: genererCode() })}
                    className="px-3 py-2 text-xs rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors font-medium"
                  >
                    Générer
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Statut licence</label>
                <select
                  value={form.statut}
                  onChange={(e) => setForm({ ...form, statut: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                >
                  <option value="actif">Active</option>
                  <option value="essai">Essai</option>
                  <option value="expire">Expirée</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Date d'expiration</label>
                <input
                  type="date"
                  value={form.licence_expiration}
                  onChange={(e) => setForm({ ...form, licence_expiration: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                />
              </div>
              {formError && <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-2">{formError}</p>}
            </div>
            <div className="flex gap-3 justify-end mt-6">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={creerInstitution}
                disabled={formLoading}
                className="px-4 py-2 text-sm rounded-lg bg-[#3DBFA0] text-white hover:bg-[#2ea88b] transition-colors font-medium disabled:opacity-50"
              >
                {formLoading ? "Création..." : "Créer"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal modification institution */}
      {modalModif && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold text-[#1B2D5B] mb-1">Modifier l'institution</h3>
            <p className="text-sm text-gray-400 mb-5">{modalModif.institution.nom}</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Statut licence</label>
                <select
                  value={modalModif.statut}
                  onChange={(e) => setModalModif({ ...modalModif, statut: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                >
                  <option value="actif">Active</option>
                  <option value="essai">Essai</option>
                  <option value="expire">Expirée</option>
                  <option value="inactif">Inactive</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Date d'expiration</label>
                <input
                  type="date"
                  value={modalModif.licence_expiration}
                  onChange={(e) => setModalModif({ ...modalModif, licence_expiration: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                />
              </div>
            </div>
            <div className="flex gap-3 justify-end mt-6">
              <button
                onClick={() => setModalModif(null)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={sauvegarderModification}
                disabled={modifLoading}
                className="px-4 py-2 text-sm rounded-lg bg-[#1B2D5B] text-white hover:bg-[#152347] transition-colors font-medium disabled:opacity-50"
              >
                {modifLoading ? "Sauvegarde..." : "Sauvegarder"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
