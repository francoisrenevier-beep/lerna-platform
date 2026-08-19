"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { AdminSidebar } from "@/components/AdminSidebar"
import { getDomaineMeta } from "@/lib/formationMeta"
import { STATUTS_BESOIN, getStatutMeta, type BesoinAdmin, type StatutBesoin } from "@/lib/besoins"

type FormationOption = { id: string; titre: string }

function dateFormat(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })
}

export default function AdminBesoinsPage() {
  const [besoins, setBesoins] = useState<BesoinAdmin[]>([])
  const [formations, setFormations] = useState<FormationOption[]>([])
  const [loading, setLoading] = useState(true)
  const [filtre, setFiltre] = useState<string>("")
  const [ouvert, setOuvert] = useState<string | null>(null)
  const router = useRouter()

  const charger = async () => {
    const { data, error } = await supabase.rpc("get_besoins_admin")
    if (error) {
      console.error("Erreur chargement besoins admin:", error.message)
      return
    }
    setBesoins((data as BesoinAdmin[]) ?? [])
  }

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      const user = session?.user
      if (!user) { router.push("/connexion"); return }

      const { data: profil } = await supabase
        .from("profils")
        .select("est_super_admin")
        .eq("id", user.id)
        .single()

      if (!profil?.est_super_admin) { router.push("/dashboard"); return }

      const { data: fs } = await supabase
        .from("formations")
        .select("id, titre")
        .order("titre")

      setFormations((fs as FormationOption[]) ?? [])
      await charger()
      setLoading(false)
    }
    init()
  }, [router])

  const compteurs = useMemo(() => {
    const map: Record<string, number> = {}
    for (const b of besoins) map[b.statut] = (map[b.statut] ?? 0) + 1
    return map
  }, [besoins])

  const affiches = filtre ? besoins.filter((b) => b.statut === filtre) : besoins
  const totalVoix = besoins.reduce((s, b) => s + b.votes_count, 0)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#1B2D5B] text-sm">Chargement...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar pageActive="besoins" />
      <main className="flex-1 p-8 overflow-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">Besoins du terrain</h2>
          <p className="text-gray-500 mt-1">
            {besoins.length} besoin{besoins.length !== 1 ? "s" : ""} exprimé{besoins.length !== 1 ? "s" : ""} · {totalVoix} voix au total.
            Le statut et la réponse saisis ici s'affichent sur le mur, côté utilisateur.
          </p>
        </div>

        {/* Filtres par statut */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFiltre("")}
            className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all"
            style={!filtre
              ? { backgroundColor: "#1B2D5B", color: "#ffffff", borderColor: "#1B2D5B" }
              : { backgroundColor: "#ffffff", color: "#64748B", borderColor: "#E2E8F0" }}
          >
            Tous ({besoins.length})
          </button>
          {STATUTS_BESOIN.map((s) => (
            <button
              key={s.value}
              onClick={() => setFiltre(filtre === s.value ? "" : s.value)}
              className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all"
              style={filtre === s.value
                ? { backgroundColor: s.fond, color: s.couleur, borderColor: s.couleur }
                : { backgroundColor: "#ffffff", color: "#64748B", borderColor: "#E2E8F0" }}
            >
              {s.label} ({compteurs[s.value] ?? 0})
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {affiches.length === 0 && (
            <div className="bg-white rounded-xl border border-gray-100 p-10 text-center text-gray-400 text-sm">
              Aucun besoin pour ce filtre.
            </div>
          )}

          {affiches.map((b) => (
            <LigneBesoin
              key={b.id}
              besoin={b}
              formations={formations}
              ouvert={ouvert === b.id}
              onToggle={() => setOuvert(ouvert === b.id ? null : b.id)}
              onEnregistre={async () => {
                await charger()
                setOuvert(null)
              }}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

// ─── Une ligne, avec son éditeur dépliable ───────────────────────────────────

function LigneBesoin({
  besoin,
  formations,
  ouvert,
  onToggle,
  onEnregistre,
}: {
  besoin: BesoinAdmin
  formations: FormationOption[]
  ouvert: boolean
  onToggle: () => void
  onEnregistre: () => void
}) {
  const [statut, setStatut] = useState<StatutBesoin>(besoin.statut)
  const [reponse, setReponse] = useState(besoin.reponse_admin ?? "")
  const [formationId, setFormationId] = useState(besoin.formation_id ?? "")
  const [enregistrement, setEnregistrement] = useState(false)
  const [erreur, setErreur] = useState<string | null>(null)

  const statutMeta = getStatutMeta(besoin.statut)
  const domaine = besoin.domaine ? getDomaineMeta(besoin.domaine) : null
  const auteur = [besoin.auteur_prenom, besoin.auteur_nom].filter(Boolean).join(" ") || "Auteur inconnu"

  const enregistrer = async () => {
    setEnregistrement(true)
    setErreur(null)
    const { error } = await supabase.rpc("maj_besoin_formation", {
      p_id: besoin.id,
      p_statut: statut,
      p_reponse: reponse.trim() || null,
      p_formation_id: formationId || null,
    })
    setEnregistrement(false)
    if (error) {
      setErreur(error.message)
      return
    }
    onEnregistre()
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-4 flex items-start gap-4">
        <div
          className="w-12 flex-shrink-0 rounded-lg py-2 text-center"
          style={{ backgroundColor: "#F1F5F9" }}
        >
          <div className="text-base font-bold text-[#1B2D5B] leading-none">{besoin.votes_count}</div>
          <div className="text-[10px] text-gray-400 mt-0.5">voix</div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span
              className="text-[11px] font-bold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: statutMeta.fond, color: statutMeta.couleur }}
            >
              {statutMeta.label}
            </span>
            {domaine && domaine.value && (
              <span
                className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: domaine.badgeBg, color: domaine.badgeText }}
              >
                {domaine.label}
              </span>
            )}
            <span className="text-[11px] text-gray-400">{dateFormat(besoin.created_at)}</span>
          </div>

          <h3 className="text-sm font-bold text-[#1B2D5B]">{besoin.titre}</h3>

          {besoin.description && (
            <p className="text-sm text-gray-500 mt-1.5 leading-relaxed" style={{ whiteSpace: "pre-wrap" }}>
              {besoin.description}
            </p>
          )}

          <p className="text-xs text-gray-400 mt-2">
            {auteur}
            {besoin.auteur_institution ? ` · ${besoin.auteur_institution}` : ""}
            {besoin.auteur_email ? " · " : ""}
            {besoin.auteur_email && (
              <a href={`mailto:${besoin.auteur_email}`} className="text-[#3DBFA0] hover:underline">
                {besoin.auteur_email}
              </a>
            )}
          </p>

          {besoin.reponse_admin && (
            <p className="text-xs text-gray-500 mt-2 pl-3 border-l-2" style={{ borderColor: "#3DBFA0" }}>
              <strong className="text-[#1B2D5B]">Réponse affichée :</strong> {besoin.reponse_admin}
            </p>
          )}
        </div>

        <button
          onClick={onToggle}
          className="flex-shrink-0 px-3 py-2 rounded-lg text-xs font-semibold border border-gray-200 text-[#1B2D5B] hover:bg-gray-50 transition-colors"
        >
          {ouvert ? "Fermer" : "Traiter"}
        </button>
      </div>

      {ouvert && (
        <div className="border-t border-gray-100 bg-gray-50 p-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#1B2D5B] mb-1.5">Statut</label>
              <select
                value={statut}
                onChange={(e) => setStatut(e.target.value as StatutBesoin)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm text-[#1B2D5B] focus:outline-none focus:border-[#3DBFA0]"
              >
                {STATUTS_BESOIN.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1B2D5B] mb-1.5">
                Formation rattachée{" "}
                <span className="font-normal text-gray-400">(requise pour « Disponible »)</span>
              </label>
              <select
                value={formationId}
                onChange={(e) => setFormationId(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm text-[#1B2D5B] focus:outline-none focus:border-[#3DBFA0]"
              >
                <option value="">Aucune</option>
                {formations.map((f) => (
                  <option key={f.id} value={f.id}>{f.titre}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1B2D5B] mb-1.5">
              Réponse publique{" "}
              <span className="font-normal text-gray-400">
                (affichée sur la carte du besoin, à défaut le libellé du statut suffit)
              </span>
            </label>
            <textarea
              value={reponse}
              onChange={(e) => setReponse(e.target.value)}
              rows={3}
              placeholder="Ex. Retenu pour le premier trimestre, le cadrage a commencé avec deux institutions."
              className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm text-[#1B2D5B] placeholder:text-gray-400 focus:outline-none focus:border-[#3DBFA0] resize-none"
            />
          </div>

          {erreur && (
            <p className="text-xs font-medium px-3 py-2 rounded-lg" style={{ backgroundColor: "#FEF2F2", color: "#BE123C" }}>
              {erreur}
            </p>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={enregistrer}
              disabled={enregistrement}
              className="px-4 py-2 rounded-lg text-sm font-bold text-white transition-all disabled:opacity-50"
              style={{ backgroundColor: "#3DBFA0" }}
            >
              {enregistrement ? "Enregistrement..." : "Enregistrer"}
            </button>
            <button
              onClick={onToggle}
              className="px-4 py-2 rounded-lg text-sm font-semibold border border-gray-200 text-[#1B2D5B] hover:bg-white transition-colors"
            >
              Annuler
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
