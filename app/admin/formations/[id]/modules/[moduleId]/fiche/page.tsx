"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { MODULE_COMPONENTS } from "@/app/modules/registre"
import { ModeFicheFourni } from "@/components/module/ModeFiche"
import { TitreFormationFourni } from "@/components/module/TitreFormation"

type Formation = {
  id: string
  titre: string
}

type ModuleFiche = {
  id: string
  titre: string
  ordre: number
  formation_id: string
}

// Réglages d'impression propres à la fiche. Le <style> n'est monté que sur
// cette page : la règle @page ne touche pas l'impression du reste du site.
// Les encadrés des modules sont tous en `rounded-xl` ; on évite de les couper
// en deux pages quand ils tiennent sur une seule.
const STYLE_IMPRESSION = `
@page { size: A4; margin: 14mm 12mm; }
@media print {
  .fiche-module { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .fiche-module h1, .fiche-module h2, .fiche-module h3 { break-after: avoid; }
  .fiche-module table, .fiche-module tr, .fiche-module blockquote, .fiche-module .rounded-xl { break-inside: avoid; }
}
`

export default function FicheModulePage() {
  const router = useRouter()
  const params = useParams()
  const formationId = params.id as string
  const moduleId = params.moduleId as string

  const [formation, setFormation] = useState<Formation | null>(null)
  const [moduleFiche, setModuleFiche] = useState<ModuleFiche | null>(null)
  const [corrige, setCorrige] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      const user = session?.user
      if (!user) { router.push("/connexion"); return }

      const { data: profil } = await supabase.from("profils").select("est_super_admin").eq("id", user.id).single()
      if (!profil?.est_super_admin) { router.push("/dashboard"); return }

      const [{ data: form }, { data: mod }] = await Promise.all([
        supabase.from("formations").select("id, titre").eq("id", formationId).single(),
        supabase.from("modules").select("id, titre, ordre, formation_id").eq("id", moduleId).single(),
      ])

      if (!form) { router.push("/admin/formations"); return }
      if (!mod || mod.formation_id !== form.id) { router.push("/admin/formations/" + formationId); return }

      setFormation(form)
      setModuleFiche(mod)
      setLoading(false)
    }
    getData()
  }, [formationId, moduleId, router])

  // Le navigateur propose le titre de la page comme nom du fichier PDF.
  useEffect(() => {
    if (!formation || !moduleFiche) return
    const precedent = document.title
    document.title = `${formation.titre} – Module ${moduleFiche.ordre} – ${moduleFiche.titre}`
    return () => { document.title = precedent }
  }, [formation, moduleFiche])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><p className="text-[#1B2D5B] text-sm">Chargement...</p></div>
  }

  const ModuleContent = MODULE_COMPONENTS[moduleId]

  return (
    <div className="min-h-screen bg-gray-50 print:bg-white">
      <style>{STYLE_IMPRESSION}</style>

      {/* Barre d'outils, absente de l'impression */}
      <div className="print:hidden sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-3 flex flex-wrap items-center gap-4">
          <a href={"/admin/formations/" + formationId} className="text-xs text-gray-400 hover:text-[#1B2D5B] transition-colors">
            ← Retour à la formation
          </a>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-400 truncate">{formation?.titre}</p>
            <p className="text-sm font-semibold text-[#1B2D5B] truncate">Module {moduleFiche?.ordre}, {moduleFiche?.titre}</p>
          </div>
          {ModuleContent && (
            <>
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={corrige}
                  onChange={(e) => setCorrige(e.target.checked)}
                  className="accent-[#3DBFA0]"
                />
                Inclure le corrigé du quiz
              </label>
              <button
                onClick={() => window.print()}
                className="bg-[#1B2D5B] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#152347] transition-colors"
              >
                Imprimer / PDF
              </button>
            </>
          )}
        </div>
        {ModuleContent && (
          <p className="max-w-4xl mx-auto px-6 pb-2 text-xs text-gray-400">
            Pour obtenir un PDF, choisissez « Enregistrer au format PDF » comme destination dans la fenêtre d'impression.
          </p>
        )}
      </div>

      <div className="fiche-module max-w-4xl mx-auto my-8 bg-white shadow-sm print:my-0 print:max-w-none print:shadow-none">
        {ModuleContent ? (
          <TitreFormationFourni titre={formation?.titre ?? null}>
            <ModeFicheFourni corrige={corrige}>
              <ModuleContent />
            </ModeFicheFourni>
          </TitreFormationFourni>
        ) : (
          <p className="px-8 py-12 text-gray-500 text-center">Ce module n'a pas encore de contenu à imprimer.</p>
        )}
      </div>
    </div>
  )
}
