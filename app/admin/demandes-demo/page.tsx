"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { AdminSidebar } from "@/components/AdminSidebar"

type DemandDemo = {
  id: string
  prenom: string
  nom: string
  institution: string
  email: string
  telephone: string | null
  message: string | null
  created_at: string
  traite: boolean
}

function dateFormat(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
}

export default function AdminDemandesDemoPage() {
  const [demandes, setDemandes] = useState<DemandDemo[]>([])
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState<string | null>(null)
  const router = useRouter()

  const chargerDemandes = async () => {
    const { data } = await supabase
      .from("demandes_demo")
      .select("id, prenom, nom, institution, email, telephone, message, created_at, traite")
      .order("traite", { ascending: true })
      .order("created_at", { ascending: false })
    setDemandes(data || [])
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

      await chargerDemandes()
      setLoading(false)
    }
    getData()
  }, [router])

  const marquerTraite = async (id: string) => {
    setActionLoading(id)
    await supabase.from("demandes_demo").update({ traite: true }).eq("id", id)
    await chargerDemandes()
    setActionLoading(null)
  }

  const demandesEnAttente = demandes.filter((d) => !d.traite)
  const demandesTraitees = demandes.filter((d) => d.traite)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#1B2D5B] text-sm">Chargement...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar pageActive="demandes-demo" />
      <main className="flex-1 p-8 overflow-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">Demandes de démonstration</h2>
          <p className="text-gray-500 mt-1">
            {demandesEnAttente.length} en attente · {demandesTraitees.length} traité{demandesTraitees.length !== 1 ? "es" : "e"}
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Statut</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Contact</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Institution</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Email / Tél.</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Message</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {demandes.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-gray-400">Aucune demande de démonstration.</td>
                </tr>
              )}
              {demandes.map((d) => (
                <tr
                  key={d.id}
                  className={`border-b border-gray-50 last:border-0 transition-opacity ${d.traite ? "opacity-40" : ""}`}
                >
                  <td className="px-4 py-3">
                    {d.traite ? (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">Traité</span>
                    ) : (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-600">En attente</span>
                    )}
                  </td>
                  <td className="px-4 py-3 font-medium text-[#1B2D5B]">{d.prenom} {d.nom}</td>
                  <td className="px-4 py-3 text-gray-600">{d.institution}</td>
                  <td className="px-4 py-3">
                    <p className="text-gray-600">{d.email}</p>
                    {d.telephone && <p className="text-gray-400 text-xs mt-0.5">{d.telephone}</p>}
                  </td>
                  <td className="px-4 py-3 max-w-[220px]">
                    {d.message ? (
                      <p className="text-gray-500 text-xs line-clamp-2">{d.message}</p>
                    ) : (
                      <span className="text-gray-300 italic text-xs">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">{dateFormat(d.created_at)}</td>
                  <td className="px-4 py-3 text-right">
                    {!d.traite && (
                      <button
                        onClick={() => marquerTraite(d.id)}
                        disabled={actionLoading === d.id}
                        className="text-xs px-3 py-1.5 rounded-lg bg-[#3DBFA0]/10 text-[#3DBFA0] hover:bg-[#3DBFA0]/20 transition-colors font-medium disabled:opacity-50 whitespace-nowrap"
                      >
                        {actionLoading === d.id ? "..." : "Marquer traité"}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
