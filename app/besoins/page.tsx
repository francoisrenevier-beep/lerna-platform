"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Lightbulb, Plus, Sparkles, Users, TrendingUp, Search } from "lucide-react"
import { Sidebar } from "@/components/Sidebar"
import { BottomNav } from "@/components/BottomNav"
import { PageHeader } from "@/components/PageHeader"
import { BesoinModal } from "@/components/BesoinModal"
import { BesoinCarte } from "@/components/BesoinCard"
import { DOMAINES } from "@/lib/formationMeta"
import { STATUTS_BESOIN, basculerVote, chargerBesoins, type Besoin } from "@/lib/besoins"

type Tri = "demandes" | "recents"

// Le statut « écarté » ne remonte jamais côté utilisateur : il est filtré par
// get_besoins_formations(). Pas de filtre correspondant ici.
const STATUTS_FILTRABLES = STATUTS_BESOIN.filter((s) => s.value !== "ecarte")

// ─── Étapes du parcours d'un besoin ──────────────────────────────────────────
// Affichées en clair : une boîte à idées sans preuve d'aboutissement cesse
// d'être alimentée au bout de quelques semaines.

const ETAPES = [
  { titre: "Vous proposez", texte: "Un besoin en une phrase, en moins d'une minute." },
  { titre: "Vos pairs votent", texte: "Les voix se cumulent et dessinent les priorités." },
  { titre: "Nous répondons", texte: "Chaque besoin retenu reçoit un statut et une réponse." },
  { titre: "La formation sort", texte: "Elle arrive au catalogue et le besoin est marqué disponible." },
]

export default function BesoinsPage() {
  const [besoins, setBesoins] = useState<Besoin[]>([])
  const [institution, setInstitution] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const [modalOuverte, setModalOuverte] = useState(false)
  const [tri, setTri] = useState<Tri>("demandes")
  const [filtreStatut, setFiltreStatut] = useState<string>("")
  const [filtreDomaine, setFiltreDomaine] = useState<string>("")
  const [recherche, setRecherche] = useState("")
  const router = useRouter()

  useEffect(() => {
    const charger = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push("/connexion")
        return
      }

      const [liste, { data: ip }] = await Promise.all([
        chargerBesoins(),
        supabase
          .from("institution_profils")
          .select("institutions(nom)")
          .eq("profil_id", user.id)
          .eq("statut", "actif")
          .limit(1)
          .single(),
      ])

      setBesoins(liste)
      setInstitution((ip?.institutions as unknown as { nom: string } | null)?.nom)
      setLoading(false)
    }
    charger()
  }, [router])

  // Vote optimiste : le compteur bouge tout de suite, la fonction SQL fait
  // ensuite autorité sur le total (d'autres personnes votent en parallèle).
  const voter = async (id: string) => {
    setBesoins((prev) =>
      prev.map((b) =>
        b.id === id
          ? { ...b, a_vote: !b.a_vote, votes_count: b.votes_count + (b.a_vote ? -1 : 1) }
          : b
      )
    )
    const res = await basculerVote(id)
    if (!res) {
      setBesoins(await chargerBesoins())
      return
    }
    setBesoins((prev) =>
      prev.map((b) => (b.id === id ? { ...b, a_vote: res.a_vote, votes_count: res.votes_count } : b))
    )
  }

  const rafraichir = async () => setBesoins(await chargerBesoins())

  const totalVoix = besoins.reduce((somme, b) => somme + b.votes_count, 0)
  const nbPubliees = besoins.filter((b) => b.statut === "publiee").length

  const domainesPresents = useMemo(
    () => DOMAINES.filter((d) => besoins.some((b) => b.domaine === d.value)),
    [besoins]
  )

  const affiches = useMemo(() => {
    const terme = recherche.trim().toLowerCase()
    const liste = besoins.filter((b) => {
      if (filtreStatut && b.statut !== filtreStatut) return false
      if (filtreDomaine && b.domaine !== filtreDomaine) return false
      if (terme && !(b.titre + " " + (b.description ?? "")).toLowerCase().includes(terme)) return false
      return true
    })
    return liste.sort((a, b) =>
      tri === "demandes"
        ? b.votes_count - a.votes_count ||
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        : new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
  }, [besoins, filtreStatut, filtreDomaine, recherche, tri])

  const filtreActif = !!(filtreStatut || filtreDomaine || recherche.trim())

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex overflow-x-hidden">
      <Sidebar pageActive="besoins" institution={institution} />

      <main className="flex-1 min-w-0 pb-20 md:pb-0">
        <PageHeader
          gradient
          surtitre="Co-construction du catalogue"
          titre="Le mur des besoins"
          right={
            <button
              onClick={() => setModalOuverte(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:brightness-95 active:scale-95"
              style={{ backgroundColor: "#3DBFA0" }}
            >
              <Plus className="w-4 h-4" />
              Proposer une formation
            </button>
          }
        />

        <div className="px-4 md:px-8 py-5 md:py-7 space-y-6 max-w-5xl">

          {/* ── Invitation à proposer ──────────────────────────────────────── */}
          <section>
            <button
              onClick={() => setModalOuverte(true)}
              className="w-full group text-left bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 flex items-center gap-4 transition-all hover:shadow-md hover:border-[#3DBFA0]/40"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(61,191,160,0.12)", color: "#3DBFA0" }}
              >
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[#1B2D5B]">
                  Une formation vous manque ? Dites-le en une phrase.
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Moins d'une minute, sans votre nom sur le mur.
                </p>
              </div>
              <span
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white flex-shrink-0 transition-transform group-hover:scale-105"
                style={{ backgroundColor: "#1B2D5B" }}
              >
                <Plus className="w-3.5 h-3.5" />
                Proposer
              </span>
            </button>

            {/* Preuve sociale : ce qui donne envie d'ajouter sa voix. */}
            {besoins.length > 0 && (
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mt-3 px-1">
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                  <Sparkles className="w-3.5 h-3.5 text-[#3DBFA0]" />
                  <strong className="text-[#1B2D5B] font-bold">{besoins.length}</strong> besoins exprimés
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                  <Users className="w-3.5 h-3.5 text-[#3DBFA0]" />
                  <strong className="text-[#1B2D5B] font-bold">{totalVoix}</strong> voix au total
                </span>
                {nbPubliees > 0 && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                    <TrendingUp className="w-3.5 h-3.5 text-[#3DBFA0]" />
                    <strong className="text-[#1B2D5B] font-bold">{nbPubliees}</strong>{" "}
                    {nbPubliees > 1 ? "formations nées" : "formation née"} d'un besoin du terrain
                  </span>
                )}
              </div>
            )}
          </section>

          {/* ── Comment un besoin devient une formation ────────────────────── */}
          <section
            className="rounded-2xl p-5"
            style={{ background: "linear-gradient(135deg, #1B2D5B 0%, #243d7a 100%)" }}
          >
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#3DBFA0" }}>
              Comment un besoin devient une formation
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ETAPES.map((e, i) => (
                <li key={e.titre} className="flex gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                    style={{ backgroundColor: "rgba(61,191,160,0.2)", color: "#3DBFA0" }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white leading-tight">{e.titre}</p>
                    <p className="text-xs mt-1 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {e.texte}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ── Filtres ───────────────────────────────────────────────────── */}
          {besoins.length > 0 && (
            <section className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input
                    type="text"
                    value={recherche}
                    onChange={(e) => setRecherche(e.target.value)}
                    placeholder="Rechercher un besoin"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-[#1B2D5B] placeholder:text-gray-400 focus:outline-none focus:border-[#3DBFA0] focus:ring-2 focus:ring-[#3DBFA0]/20 transition-all"
                  />
                </div>
                <div className="flex rounded-xl border border-gray-200 bg-white p-0.5 flex-shrink-0">
                  {([["demandes", "Les plus demandés"], ["recents", "Les plus récents"]] as const).map(
                    ([valeur, label]) => (
                      <button
                        key={valeur}
                        onClick={() => setTri(valeur)}
                        className="px-3 py-2 rounded-lg text-xs font-semibold transition-colors"
                        style={
                          tri === valeur
                            ? { backgroundColor: "#1B2D5B", color: "#ffffff" }
                            : { color: "#64748B" }
                        }
                      >
                        {label}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <FiltreChip actif={!filtreStatut} onClick={() => setFiltreStatut("")} label="Tous les statuts" />
                {STATUTS_FILTRABLES.map((s) => {
                  const nb = besoins.filter((b) => b.statut === s.value).length
                  if (nb === 0) return null
                  return (
                    <FiltreChip
                      key={s.value}
                      actif={filtreStatut === s.value}
                      onClick={() => setFiltreStatut(filtreStatut === s.value ? "" : s.value)}
                      label={`${s.label} (${nb})`}
                      couleur={s.couleur}
                      fond={s.fond}
                    />
                  )
                })}
              </div>

              {domainesPresents.length > 1 && (
                <div className="flex flex-wrap gap-2">
                  <FiltreChip actif={!filtreDomaine} onClick={() => setFiltreDomaine("")} label="Tous les domaines" />
                  {domainesPresents.map((d) => (
                    <FiltreChip
                      key={d.value}
                      actif={filtreDomaine === d.value}
                      onClick={() => setFiltreDomaine(filtreDomaine === d.value ? "" : d.value)}
                      label={d.label}
                      couleur={d.badgeText}
                      fond={d.badgeBg}
                    />
                  ))}
                </div>
              )}
            </section>
          )}

          {/* ── Liste ─────────────────────────────────────────────────────── */}
          <section className="space-y-3 pb-6">
            {loading ? (
              [0, 1, 2].map((i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 animate-pulse">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gray-100 flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-24 bg-gray-100 rounded" />
                      <div className="h-4 w-3/4 bg-gray-100 rounded" />
                      <div className="h-3 w-full bg-gray-50 rounded" />
                    </div>
                  </div>
                </div>
              ))
            ) : affiches.length > 0 ? (
              affiches.map((b) => <BesoinCarte key={b.id} besoin={b} onVote={voter} />)
            ) : filtreActif ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center">
                <p className="text-sm font-semibold text-[#1B2D5B] mb-1">Aucun besoin ne correspond</p>
                <p className="text-xs text-gray-400 mb-4">
                  Personne ne l'a encore exprimé ? C'est peut-être à vous de le faire.
                </p>
                <button
                  onClick={() => setModalOuverte(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white"
                  style={{ backgroundColor: "#3DBFA0" }}
                >
                  <Plus className="w-4 h-4" />
                  Proposer ce besoin
                </button>
              </div>
            ) : (
              /* Premier visiteur : le mur est vide, l'invitation doit porter seule. */
              <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(61,191,160,0.12)", color: "#3DBFA0" }}
                >
                  <Lightbulb className="w-7 h-7" />
                </div>
                <p className="text-base font-bold text-[#1B2D5B] mb-1.5">Le mur n'attend que vous</p>
                <p className="text-sm text-gray-500 max-w-md mx-auto mb-5 leading-relaxed">
                  Le catalogue Learna se construit à partir des situations rencontrées sur le
                  terrain. Soyez la première personne à dire ce qui manque à votre équipe.
                </p>
                <button
                  onClick={() => setModalOuverte(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white"
                  style={{ backgroundColor: "#3DBFA0" }}
                >
                  <Plus className="w-4 h-4" />
                  Exprimer un besoin
                </button>
              </div>
            )}
          </section>
        </div>
      </main>

      <BesoinModal
        open={modalOuverte}
        onClose={() => setModalOuverte(false)}
        besoins={besoins}
        onCree={rafraichir}
        onVote={voter}
        surLeMur
      />

      <BottomNav pageActive="besoins" institution={institution} />
    </div>
  )
}

// ─── Puce de filtre ──────────────────────────────────────────────────────────

function FiltreChip({
  actif,
  onClick,
  label,
  couleur = "#1B2D5B",
  fond = "#E2E8F0",
}: {
  actif: boolean
  onClick: () => void
  label: string
  couleur?: string
  fond?: string
}) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all"
      style={
        actif
          ? { backgroundColor: fond, color: couleur, borderColor: couleur }
          : { backgroundColor: "#ffffff", color: "#64748B", borderColor: "#E2E8F0" }
      }
    >
      {label}
    </button>
  )
}
