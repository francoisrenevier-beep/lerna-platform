"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { AdminSidebar } from "@/components/AdminSidebar"

export default function AdminDashboardPage() {
  const router = useRouter()

  useEffect(() => {
    const check = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      const user = session?.user
      if (!user) { router.push("/connexion"); return }

      const { data: ip } = await supabase
        .from("institution_profils")
        .select("role")
        .eq("profil_id", user.id)
        .eq("statut", "actif")
        .limit(1)
        .single()

      if (!ip || ip.role !== "admin") { router.push("/dashboard"); return }
    }
    check()
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar pageActive="dashboard" />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">Administration</h2>
          <p className="text-gray-500 mt-1">Espace super administrateur LERNA360.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 max-w-sm">
          <a
            href="/admin/evaluations"
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-[#3DBFA0]/10 flex items-center justify-center mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3DBFA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <p className="font-semibold text-[#1B2D5B] text-sm mb-0.5">Évaluations de satisfaction</p>
            <p className="text-xs text-gray-400">Résultats des questionnaires post-formation</p>
          </a>
        </div>
      </main>
    </div>
  )
}
