"use client"

import { useState } from "react"
import { ArrowUp, ArrowRight, MessageSquareQuote } from "lucide-react"
import { getDomaineMeta } from "@/lib/formationMeta"
import { getStatutMeta, type Besoin } from "@/lib/besoins"

// ─── Bouton de vote ──────────────────────────────────────────────────────────
// Le geste central du mur : un clic, aucune saisie. C'est ce qui fait
// participer les personnes qui n'écriront jamais un formulaire.

export function BoutonVote({
  votes,
  aVote,
  onClick,
  compact = false,
}: {
  votes: number
  aVote: boolean
  onClick: () => void
  compact?: boolean
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={aVote}
      aria-label={aVote ? "Retirer ma voix" : "Ce besoin est aussi le mien"}
      title={aVote ? "Retirer ma voix" : "Ce besoin est aussi le mien"}
      className={
        "flex flex-col items-center justify-center rounded-xl border transition-all duration-150 active:scale-95 flex-shrink-0 " +
        (compact ? "w-11 py-1.5" : "w-14 py-2")
      }
      style={
        aVote
          ? { backgroundColor: "#3DBFA0", borderColor: "#3DBFA0", color: "#ffffff" }
          : { backgroundColor: "#ffffff", borderColor: "#E2E8F0", color: "#64748B" }
      }
    >
      <ArrowUp className={compact ? "w-3.5 h-3.5" : "w-4 h-4"} strokeWidth={2.5} />
      <span className={compact ? "text-xs font-bold leading-none mt-0.5" : "text-sm font-bold leading-none mt-0.5"}>
        {votes}
      </span>
    </button>
  )
}

// ─── Carte d'un besoin ───────────────────────────────────────────────────────

export function BesoinCarte({ besoin, onVote }: { besoin: Besoin; onVote: (id: string) => void }) {
  const [deplie, setDeplie] = useState(false)
  const statut = getStatutMeta(besoin.statut)
  const domaine = besoin.domaine ? getDomaineMeta(besoin.domaine) : null
  const descriptionLongue = (besoin.description?.length ?? 0) > 180

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 transition-shadow hover:shadow-md">
      <div className="flex gap-4">
        <BoutonVote votes={besoin.votes_count} aVote={besoin.a_vote} onClick={() => onVote(besoin.id)} />

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className="text-[11px] font-bold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: statut.fond, color: statut.couleur }}
            >
              {statut.label}
            </span>
            {domaine && domaine.value && (
              <span
                className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full"
                style={{ backgroundColor: domaine.badgeBg, color: domaine.badgeText }}
              >
                <domaine.icon className="w-3 h-3" />
                {domaine.label}
              </span>
            )}
            {besoin.est_auteur && (
              <span className="text-[11px] font-semibold text-gray-400">Votre proposition</span>
            )}
          </div>

          <h3 className="text-sm sm:text-base font-bold text-[#1B2D5B] leading-snug">{besoin.titre}</h3>

          {besoin.description && (
            <>
              <p
                className={
                  "text-sm text-gray-500 leading-relaxed mt-1.5 " +
                  (!deplie && descriptionLongue ? "line-clamp-3" : "")
                }
                style={{ whiteSpace: "pre-wrap" }}
              >
                {besoin.description}
              </p>
              {descriptionLongue && (
                <button
                  onClick={() => setDeplie(!deplie)}
                  className="text-xs font-semibold text-[#3DBFA0] hover:underline mt-1"
                >
                  {deplie ? "Réduire" : "Lire la suite"}
                </button>
              )}
            </>
          )}

          {/* Réponse de l'équipe : ce retour visible est ce qui entretient la
              participation. À défaut, on explique au moins ce que veut dire le statut. */}
          {besoin.reponse_admin ? (
            <div
              className="mt-3 rounded-xl p-3 border-l-2"
              style={{ backgroundColor: "#F8FAFC", borderColor: "#3DBFA0" }}
            >
              <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide mb-1" style={{ color: "#1B8B72" }}>
                <MessageSquareQuote className="w-3.5 h-3.5" />
                Réponse de Learna
              </p>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ whiteSpace: "pre-wrap" }}>
                {besoin.reponse_admin}
              </p>
            </div>
          ) : (
            <p className="text-xs text-gray-400 mt-2.5">{statut.aide}</p>
          )}

          {besoin.statut === "publiee" && besoin.formation_slug && (
            <a
              href={"/catalogue/" + besoin.formation_slug}
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold hover:gap-2 transition-all"
              style={{ color: "#1B8B72" }}
            >
              {besoin.formation_titre ?? "Voir la formation"}
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
