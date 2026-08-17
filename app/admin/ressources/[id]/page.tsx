"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter, useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { AdminSidebar } from "@/components/AdminSidebar"

// ─── Constants ────────────────────────────────────────────────────────────────

const TYPES_LABELS: Record<string, string> = {
  pdf: "PDF", link: "Lien", checklist: "Check-list", memo: "Fiche mémo",
  tool: "Outil", official: "Officiel", article: "Article", video: "Vidéo", template: "Modèle",
}

// ─── Types ────────────────────────────────────────────────────────────────────

type Resource = {
  id: string
  title: string
  type: string
  category: string | null
  domain: string | null
  is_active: boolean
}

type Formation = { id: string; titre: string; slug: string }
type Module = { id: string; titre: string; ordre: number; formation_id: string }

type FormationLink = {
  formation_id: string
  formation_titre: string
  display_order: number
  is_featured: boolean
  context_note: string
}

type ModuleLink = {
  module_id: string
  module_titre: string
  module_ordre: number
  formation_titre: string
  display_order: number
  context_note: string
}

type Onglet = "formations" | "modules"

const inputCls = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AdminRessourceDetailPage() {
  const router = useRouter()
  const params = useParams()
  const resourceId = params.id as string

  const [resource, setResource]           = useState<Resource | null>(null)
  const [loading, setLoading]             = useState(true)
  const [onglet, setOnglet]               = useState<Onglet>("formations")

  // Formation links
  const [formationLinks, setFormationLinks]   = useState<FormationLink[]>([])
  const [formations, setFormations]           = useState<Formation[]>([])
  const [newFormationId, setNewFormationId]   = useState("")
  const [addingFormation, setAddingFormation] = useState(false)
  const [editingFormLinks, setEditingFormLinks] = useState<Record<string, FormationLink>>({})

  // Module links
  const [moduleLinks, setModuleLinks]         = useState<ModuleLink[]>([])
  const [allModules, setAllModules]           = useState<Module[]>([])
  const [filterFormationId, setFilterFormationId] = useState("")
  const [newModuleFormationId, setNewModuleFormationId] = useState("")
  const [newModuleId, setNewModuleId]         = useState("")
  const [newModuleNote, setNewModuleNote]     = useState("")
  const [addingModule, setAddingModule]       = useState(false)
  const [editingModLinks, setEditingModLinks] = useState<Record<string, ModuleLink>>({})

  const chargerFormationLinks = useCallback(async () => {
    const { data } = await supabase
      .from("formation_resources")
      .select("formation_id, display_order, is_featured, context_note, formations(titre)")
      .eq("resource_id", resourceId)
      .order("display_order")
    if (data) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const links: FormationLink[] = data.map((r: any) => ({
        formation_id: r.formation_id,
        formation_titre: r.formations?.titre ?? "—",
        display_order: r.display_order,
        is_featured: r.is_featured,
        context_note: r.context_note ?? "",
      }))
      setFormationLinks(links)
      const init: Record<string, FormationLink> = {}
      links.forEach(l => { init[l.formation_id] = { ...l } })
      setEditingFormLinks(init)
    }
  }, [resourceId])

  const chargerModuleLinks = useCallback(async () => {
    const { data } = await supabase
      .from("module_resources")
      .select("module_id, display_order, context_note, modules(titre, ordre, formation_id, formations(titre))")
      .eq("resource_id", resourceId)
      .order("display_order")
    if (data) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const links: ModuleLink[] = data.map((r: any) => ({
        module_id: r.module_id,
        module_titre: r.modules?.titre ?? "—",
        module_ordre: r.modules?.ordre ?? 0,
        formation_titre: r.modules?.formations?.titre ?? "—",
        display_order: r.display_order,
        context_note: r.context_note ?? "",
      }))
      setModuleLinks(links)
      const init: Record<string, ModuleLink> = {}
      links.forEach(l => { init[l.module_id] = { ...l } })
      setEditingModLinks(init)
    }
  }, [resourceId])

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session?.user) { router.push("/connexion"); return }
      const { data: profil } = await supabase
        .from("profils").select("est_super_admin").eq("id", session.user.id).single()
      if (!profil?.est_super_admin) { router.push("/dashboard"); return }

      const { data: res } = await supabase
        .from("resources")
        .select("id, title, type, category, domain, is_active")
        .eq("id", resourceId)
        .single()
      if (!res) { router.push("/admin/ressources"); return }
      setResource(res)

      const [{ data: formsData }, { data: modsData }] = await Promise.all([
        supabase.from("formations").select("id, titre, slug").order("titre"),
        supabase.from("modules").select("id, titre, ordre, formation_id").order("ordre"),
      ])
      if (formsData) setFormations(formsData)
      if (modsData) setAllModules(modsData)

      await Promise.all([chargerFormationLinks(), chargerModuleLinks()])
      setLoading(false)
    }
    init()
  }, [resourceId, router, chargerFormationLinks, chargerModuleLinks])

  // ── Formation links handlers ───────────────────────────────────────────────

  const ajouterLiaisonFormation = async () => {
    if (!newFormationId) return
    setAddingFormation(true)
    await supabase.from("formation_resources").insert({
      formation_id: newFormationId,
      resource_id: resourceId,
      display_order: formationLinks.length,
    })
    setNewFormationId("")
    await chargerFormationLinks()
    setAddingFormation(false)
  }

  const retirerLiaisonFormation = async (formationId: string) => {
    await supabase.from("formation_resources")
      .delete()
      .eq("formation_id", formationId)
      .eq("resource_id", resourceId)
    await chargerFormationLinks()
  }

  const sauvegarderLiaisonFormation = async (formationId: string) => {
    const edit = editingFormLinks[formationId]
    if (!edit) return
    await supabase.from("formation_resources")
      .update({
        display_order: edit.display_order,
        is_featured: edit.is_featured,
        context_note: edit.context_note || null,
      })
      .eq("formation_id", formationId)
      .eq("resource_id", resourceId)
    await chargerFormationLinks()
  }

  // ── Module links handlers ──────────────────────────────────────────────────

  const modulesForFormation = (formId: string) =>
    allModules.filter(m => m.formation_id === formId)

  const linkedModuleIds = new Set(moduleLinks.map(l => l.module_id))

  const ajouterLiaisonModule = async () => {
    if (!newModuleId) return
    setAddingModule(true)
    await supabase.from("module_resources").insert({
      module_id: newModuleId,
      resource_id: resourceId,
      display_order: moduleLinks.length,
      context_note: newModuleNote || null,
    })
    setNewModuleId("")
    setNewModuleFormationId("")
    setNewModuleNote("")
    await chargerModuleLinks()
    setAddingModule(false)
  }

  const retirerLiaisonModule = async (moduleId: string) => {
    await supabase.from("module_resources")
      .delete()
      .eq("module_id", moduleId)
      .eq("resource_id", resourceId)
    await chargerModuleLinks()
  }

  const sauvegarderLiaisonModule = async (moduleId: string) => {
    const edit = editingModLinks[moduleId]
    if (!edit) return
    await supabase.from("module_resources")
      .update({
        display_order: edit.display_order,
        context_note: edit.context_note || null,
      })
      .eq("module_id", moduleId)
      .eq("resource_id", resourceId)
    await chargerModuleLinks()
  }

  // ── Rendu ──────────────────────────────────────────────────────────────────

  const linkedFormationIds = new Set(formationLinks.map(l => l.formation_id))
  const availableFormations = formations.filter(f => !linkedFormationIds.has(f.id))

  const filteredModuleLinks = filterFormationId
    ? moduleLinks.filter(l => {
        const mod = allModules.find(m => m.id === l.module_id)
        return mod?.formation_id === filterFormationId
      })
    : moduleLinks

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#1B2D5B] text-sm">Chargement...</p>
      </div>
    )
  }

  if (!resource) return null

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar pageActive="ressources" />
      <main className="flex-1 p-8 overflow-auto">

        {/* En-tête */}
        <div className="mb-6">
          <a href="/admin/ressources" className="text-sm text-[#3DBFA0] hover:text-[#2ea88b] transition-colors mb-3 inline-block">
            ← Ressources
          </a>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium bg-[#3DBFA0]/10 text-[#1B8B72] px-2 py-0.5 rounded-full">
                  {TYPES_LABELS[resource.type] ?? resource.type}
                </span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  resource.is_active ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-400"
                }`}>
                  {resource.is_active ? "Actif" : "Inactif"}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-[#1B2D5B]">{resource.title}</h2>
            </div>
            <a href={`/admin/ressources`} onClick={e => { e.preventDefault(); window.history.back() }}
              className="text-xs px-3 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">
              ← Retour
            </a>
          </div>
        </div>

        {/* Onglets */}
        <div className="flex border-b border-gray-200 mb-6">
          {([
            { id: "formations", label: `Formations liées (${formationLinks.length})` },
            { id: "modules",    label: `Modules liés (${moduleLinks.length})` },
          ] as const).map(tab => (
            <button
              key={tab.id}
              onClick={() => setOnglet(tab.id)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${
                onglet === tab.id
                  ? "border-[#3DBFA0] text-[#1B2D5B]"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Tab: Formations liées ──────────────────────────────────────────── */}
        {onglet === "formations" && (
          <div className="space-y-4">
            {formationLinks.length === 0 ? (
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center">
                <p className="text-[#1B2D5B] font-semibold">Aucune formation liée</p>
                <p className="text-gray-400 text-sm mt-1">Ajoutez une liaison via le formulaire ci-dessous.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {formationLinks.map(link => {
                  const edit = editingFormLinks[link.formation_id]
                  if (!edit) return null
                  return (
                    <div key={link.formation_id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <p className="font-semibold text-[#1B2D5B] text-sm">{link.formation_titre}</p>
                        </div>
                        <button
                          onClick={() => retirerLiaisonFormation(link.formation_id)}
                          className="text-xs px-2.5 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-medium transition-colors flex-shrink-0"
                        >
                          Retirer
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-3">
                        <div>
                          <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Ordre</label>
                          <input
                            type="number" min="0" value={edit.display_order}
                            onChange={e => setEditingFormLinks(prev => ({
                              ...prev, [link.formation_id]: { ...edit, display_order: parseInt(e.target.value) || 0 }
                            }))}
                            className={inputCls}
                          />
                        </div>
                        <div className="col-span-2 flex items-end pb-1">
                          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                            <input
                              type="checkbox" checked={edit.is_featured}
                              onChange={e => setEditingFormLinks(prev => ({
                                ...prev, [link.formation_id]: { ...edit, is_featured: e.target.checked }
                              }))}
                              className="w-4 h-4 accent-[#3DBFA0]"
                            />
                            Mettre en avant (recommandée)
                          </label>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Note contextuelle</label>
                        <textarea
                          value={edit.context_note}
                          onChange={e => setEditingFormLinks(prev => ({
                            ...prev, [link.formation_id]: { ...edit, context_note: e.target.value }
                          }))}
                          rows={2}
                          placeholder="Expliquer pourquoi cette ressource est utile dans cette formation…"
                          className={inputCls}
                        />
                      </div>

                      <div className="flex justify-end">
                        <button
                          onClick={() => sauvegarderLiaisonFormation(link.formation_id)}
                          className="text-xs px-3 py-1.5 rounded-lg bg-[#3DBFA0] text-white hover:bg-[#2ea88b] font-medium transition-colors"
                        >
                          Mettre à jour
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Ajouter une liaison formation */}
            {availableFormations.length > 0 && (
              <div className="bg-white rounded-xl border border-dashed border-[#3DBFA0]/40 p-5">
                <p className="text-sm font-semibold text-[#1B2D5B] mb-3">Ajouter une formation</p>
                <div className="flex gap-3">
                  <select
                    value={newFormationId}
                    onChange={e => setNewFormationId(e.target.value)}
                    className={inputCls + " flex-1"}
                  >
                    <option value="">— Choisir une formation —</option>
                    {availableFormations.map(f => (
                      <option key={f.id} value={f.id}>{f.titre}</option>
                    ))}
                  </select>
                  <button
                    onClick={ajouterLiaisonFormation}
                    disabled={!newFormationId || addingFormation}
                    className="px-4 py-2 text-sm rounded-lg bg-[#3DBFA0] text-white hover:bg-[#2ea88b] disabled:opacity-50 font-medium transition-colors whitespace-nowrap"
                  >
                    {addingFormation ? "Ajout…" : "Ajouter"}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Tab: Modules liés ──────────────────────────────────────────────── */}
        {onglet === "modules" && (
          <div className="space-y-4">
            {/* Filtre par formation */}
            {moduleLinks.length > 0 && (
              <div className="flex items-center gap-3">
                <label className="text-xs font-semibold text-gray-400 uppercase whitespace-nowrap">Filtrer par formation :</label>
                <select
                  value={filterFormationId}
                  onChange={e => setFilterFormationId(e.target.value)}
                  className={inputCls + " max-w-[280px]"}
                >
                  <option value="">Toutes les formations</option>
                  {formations.map(f => (
                    <option key={f.id} value={f.id}>{f.titre}</option>
                  ))}
                </select>
              </div>
            )}

            {filteredModuleLinks.length === 0 && moduleLinks.length === 0 ? (
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center">
                <p className="text-[#1B2D5B] font-semibold">Aucun module lié</p>
                <p className="text-gray-400 text-sm mt-1">Ajoutez une liaison via le formulaire ci-dessous.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredModuleLinks.map(link => {
                  const edit = editingModLinks[link.module_id]
                  if (!edit) return null
                  return (
                    <div key={link.module_id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">{link.formation_titre}</p>
                          <p className="font-semibold text-[#1B2D5B] text-sm">
                            Module {link.module_ordre}, {link.module_titre}
                          </p>
                        </div>
                        <button
                          onClick={() => retirerLiaisonModule(link.module_id)}
                          className="text-xs px-2.5 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-medium transition-colors flex-shrink-0"
                        >
                          Retirer
                        </button>
                      </div>

                      <div className="grid grid-cols-4 gap-4 mb-3">
                        <div>
                          <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Ordre</label>
                          <input
                            type="number" min="0" value={edit.display_order}
                            onChange={e => setEditingModLinks(prev => ({
                              ...prev, [link.module_id]: { ...edit, display_order: parseInt(e.target.value) || 0 }
                            }))}
                            className={inputCls}
                          />
                        </div>
                        <div className="col-span-3">
                          <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Note contextuelle</label>
                          <input
                            type="text"
                            value={edit.context_note}
                            onChange={e => setEditingModLinks(prev => ({
                              ...prev, [link.module_id]: { ...edit, context_note: e.target.value }
                            }))}
                            placeholder="Pourquoi cette ressource est utile dans ce module…"
                            className={inputCls}
                          />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button
                          onClick={() => sauvegarderLiaisonModule(link.module_id)}
                          className="text-xs px-3 py-1.5 rounded-lg bg-[#3DBFA0] text-white hover:bg-[#2ea88b] font-medium transition-colors"
                        >
                          Mettre à jour
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Ajouter une liaison module */}
            <div className="bg-white rounded-xl border border-dashed border-[#3DBFA0]/40 p-5">
              <p className="text-sm font-semibold text-[#1B2D5B] mb-3">Ajouter un module</p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <select
                  value={newModuleFormationId}
                  onChange={e => { setNewModuleFormationId(e.target.value); setNewModuleId("") }}
                  className={inputCls}
                >
                  <option value="">— Choisir une formation —</option>
                  {formations.map(f => <option key={f.id} value={f.id}>{f.titre}</option>)}
                </select>
                <select
                  value={newModuleId}
                  onChange={e => setNewModuleId(e.target.value)}
                  disabled={!newModuleFormationId}
                  className={inputCls + " disabled:opacity-50"}
                >
                  <option value="">— Choisir un module —</option>
                  {modulesForFormation(newModuleFormationId)
                    .filter(m => !linkedModuleIds.has(m.id))
                    .map(m => (
                      <option key={m.id} value={m.id}>Module {m.ordre}, {m.titre}</option>
                    ))
                  }
                </select>
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newModuleNote}
                  onChange={e => setNewModuleNote(e.target.value)}
                  placeholder="Note contextuelle (optionnel)"
                  className={inputCls + " flex-1"}
                />
                <button
                  onClick={ajouterLiaisonModule}
                  disabled={!newModuleId || addingModule}
                  className="px-4 py-2 text-sm rounded-lg bg-[#3DBFA0] text-white hover:bg-[#2ea88b] disabled:opacity-50 font-medium transition-colors whitespace-nowrap"
                >
                  {addingModule ? "Ajout…" : "Ajouter"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
