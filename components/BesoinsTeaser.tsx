"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Lightbulb, Plus } from "lucide-react"
import { BesoinModal } from "@/components/BesoinModal"
import { BoutonVote } from "@/components/BesoinCard"
import { basculerVote, chargerBesoins, getStatutMeta, type Besoin } from "@/lib/besoins"

// Bandeau du tableau de bord. Le mur ne vivra pas si on doit aller le chercher
// dans le menu : ici, les besoins les plus demandés sont votables en un clic
// depuis l'écran d'accueil, sans changer de page.

const APERCU = 3

export function BesoinsTeaser() {
  const [besoins, setBesoins] = useState<Besoin[]>([])
  const [modalOuverte, setModalOuverte] = useState(false)

  useEffect(() => {
    chargerBesoins().then(setBesoins)
  }, [])

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

  // Les besoins déjà publiés ne cherchent plus de voix : on met en avant ceux
  // qui sont encore en jeu.
  const enAttente = besoins.filter((b) => b.statut !== "publiee").slice(0, APERCU)

  return (
    <section className="pb-6">
      <div
        className="relative overflow-hidden rounded-2xl p-5 md:p-6"
        style={{ background: "linear-gradient(135deg, #1B2D5B 0%, #243d7a 100%)" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            top: -60, right: -40, width: 200, height: 200,
            borderRadius: "50%", background: "rgba(61,191,160,0.08)",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#3DBFA0" }}>
              Le catalogue se construit avec vous
            </p>
            <h2 className="text-xl font-bold text-white leading-tight">
              Une formation vous manque ?
            </h2>
            <p className="text-sm mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Dites en une phrase ce dont votre équipe a besoin. Les besoins les plus soutenus
              passent en développement. Votre nom n'apparaît pas sur le mur.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <button
                onClick={() => setModalOuverte(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:brightness-95 active:scale-95"
                style={{ backgroundColor: "#3DBFA0" }}
              >
                <Plus className="w-4 h-4" />
                Proposer une formation
              </button>
              <a
                href="/besoins"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Voir le mur des besoins
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {enAttente.length > 0 ? (
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-2.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                Les plus demandés en ce moment
              </p>
              <div className="space-y-2">
                {enAttente.map((b) => {
                  const statut = getStatutMeta(b.statut)
                  return (
                    <div key={b.id} className="flex items-center gap-3 bg-white rounded-xl p-2.5">
                      <BoutonVote votes={b.votes_count} aVote={b.a_vote} onClick={() => voter(b.id)} compact />
                      <div className="flex-1 min-w-0">
                        <a href="/besoins" className="block text-xs font-semibold text-[#1B2D5B] leading-snug line-clamp-2 hover:underline">
                          {b.titre}
                        </a>
                        <span
                          className="inline-block text-[10px] font-bold mt-1 px-1.5 py-0.5 rounded"
                          style={{ backgroundColor: statut.fond, color: statut.couleur }}
                        >
                          {statut.label}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
              <p className="text-[11px] mt-2.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                Un clic sur la flèche ajoute votre voix.
              </p>
            </div>
          ) : (
            <div
              className="rounded-xl p-5 flex items-center gap-4"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(61,191,160,0.15)", color: "#3DBFA0" }}
              >
                <Lightbulb className="w-5 h-5" />
              </div>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                Aucun besoin n'a encore été exprimé. Soyez la première personne à dire ce qui
                manque : la formation suivante peut partir de vous.
              </p>
            </div>
          )}
        </div>
      </div>

      <BesoinModal
        open={modalOuverte}
        onClose={() => setModalOuverte(false)}
        besoins={besoins}
        onCree={() => chargerBesoins().then(setBesoins)}
        onVote={voter}
      />
    </section>
  )
}
