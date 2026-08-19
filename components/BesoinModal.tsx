"use client"

import { useEffect, useMemo, useState } from "react"
import { X, Send, CheckCircle2, ArrowUp, Lightbulb, Lock } from "lucide-react"
import { DOMAINES } from "@/lib/formationMeta"
import { besoinsSimilaires, proposerBesoin, type Besoin } from "@/lib/besoins"

type BesoinModalProps = {
  open: boolean
  onClose: () => void
  /** Mur actuel : sert à repérer les doublons pendant la frappe. */
  besoins: Besoin[]
  /** Appelé après création pour recharger le mur. */
  onCree: () => void
  /** Vote sur un besoin proposé comme doublon. */
  onVote: (besoinId: string) => void
  /** Préremplissage depuis un autre écran (recherche du catalogue sans résultat). */
  titreInitial?: string
  /** Vrai sur /besoins : inutile de proposer d'aller voir le mur, on y est. */
  surLeMur?: boolean
}

export function BesoinModal({
  open,
  onClose,
  besoins,
  onCree,
  onVote,
  titreInitial = "",
  surLeMur = false,
}: BesoinModalProps) {
  const [titre, setTitre] = useState(titreInitial)
  const [domaine, setDomaine] = useState("")
  const [description, setDescription] = useState("")
  const [envoi, setEnvoi] = useState(false)
  const [erreur, setErreur] = useState<string | null>(null)
  const [succes, setSucces] = useState(false)

  // Le titre initial peut arriver après le premier rendu (ouverture depuis la
  // recherche du catalogue) : on le reprend à chaque ouverture.
  useEffect(() => {
    if (open) setTitre(titreInitial)
  }, [open, titreInitial])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const doublons = useMemo(() => besoinsSimilaires(titre, besoins), [titre, besoins])

  const reinitialiser = () => {
    setTitre("")
    setDomaine("")
    setDescription("")
    setErreur(null)
    setSucces(false)
  }

  const fermer = () => {
    onClose()
    // Laisse la transition de sortie se jouer avant de vider le formulaire.
    setTimeout(reinitialiser, 250)
  }

  const envoyer = async (e: React.FormEvent) => {
    e.preventDefault()
    if (titre.trim().length < 5) {
      setErreur("Décrivez le besoin en quelques mots (5 caractères minimum).")
      return
    }
    setEnvoi(true)
    setErreur(null)

    const res = await proposerBesoin({
      titre: titre.trim(),
      description: description.trim() || undefined,
      domaine: domaine || undefined,
    })

    if ("erreur" in res) {
      setErreur(res.erreur)
      setEnvoi(false)
      return
    }

    // Notification à l'équipe Learna : le mur ne sert à rien si personne ne
    // regarde. L'échec de l'e-mail ne doit pas faire échouer la proposition,
    // le besoin est déjà enregistré.
    fetch("/api/besoin-notification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ besoin_id: res.id }),
    }).catch(() => {})

    setEnvoi(false)
    setSucces(true)
    onCree()
  }

  if (!open) return null

  const restants = 1000 - description.length

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-[#1B2D5B]/50 backdrop-blur-sm"
        onClick={fermer}
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none overflow-y-auto">
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Proposer une formation"
          className="pointer-events-auto w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden mt-auto sm:my-auto"
        >
          {/* ── En-tête ──────────────────────────────────────────────────── */}
          <div
            className="relative px-6 py-5"
            style={{ background: "linear-gradient(135deg, #1B2D5B 0%, #243d7a 100%)" }}
          >
            <div
              className="absolute pointer-events-none"
              style={{
                top: -50, right: -40, width: 160, height: 160,
                borderRadius: "50%", background: "rgba(61,191,160,0.12)",
              }}
            />
            <button
              onClick={fermer}
              aria-label="Fermer"
              className="absolute top-4 right-4 z-10 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative z-10 flex items-start gap-3 pr-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(61,191,160,0.2)", color: "#3DBFA0" }}
              >
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#3DBFA0" }}>
                  Votre terrain, notre catalogue
                </p>
                <h2 className="text-lg font-bold text-white leading-tight mt-0.5">
                  {succes ? "C'est envoyé, merci." : "De quelle formation avez-vous besoin ?"}
                </h2>
              </div>
            </div>
          </div>

          {succes ? (
            /* ── Confirmation ───────────────────────────────────────────── */
            <div className="px-6 py-8 text-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#ECFDF5", color: "#1B8B72" }}
              >
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <p className="text-sm font-bold text-[#1B2D5B] mb-2">
                Votre besoin est en ligne, avec votre voix déjà comptée.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm mx-auto">
                Faites-le voter autour de vous : plus un besoin réunit de voix, plus il remonte
                dans les priorités de développement. Vous suivrez son avancement sur le mur.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center mt-6">
                <button
                  onClick={reinitialiser}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 text-[#1B2D5B] hover:bg-gray-50 transition-colors"
                >
                  Proposer un autre besoin
                </button>
                {surLeMur ? (
                  <button
                    onClick={fermer}
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors"
                    style={{ backgroundColor: "#3DBFA0" }}
                  >
                    Revenir au mur
                  </button>
                ) : (
                  <a
                    href="/besoins"
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors text-center"
                    style={{ backgroundColor: "#3DBFA0" }}
                  >
                    Voir le mur des besoins
                  </a>
                )}
              </div>
            </div>
          ) : (
            /* ── Formulaire ─────────────────────────────────────────────── */
            <form onSubmit={envoyer} className="px-6 py-5 space-y-5 max-h-[70vh] sm:max-h-[65vh] overflow-y-auto">
              <div>
                <label htmlFor="besoin-titre" className="block text-sm font-semibold text-[#1B2D5B] mb-1.5">
                  Le besoin, en une phrase
                </label>
                <input
                  id="besoin-titre"
                  type="text"
                  value={titre}
                  onChange={(e) => setTitre(e.target.value.slice(0, 120))}
                  autoFocus
                  placeholder="Ex. Accompagner un résident qui refuse les soins"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1B2D5B] placeholder:text-gray-400 focus:outline-none focus:border-[#3DBFA0] focus:ring-2 focus:ring-[#3DBFA0]/20 transition-all"
                />
                <p className="text-xs text-gray-400 mt-1.5">
                  Une situation concrète parle plus qu'un thème général.
                </p>
              </div>

              {/* Doublons : voter vaut mieux que republier le même besoin. */}
              {doublons.length > 0 && (
                <div className="rounded-xl p-4" style={{ backgroundColor: "#FFF7ED" }}>
                  <p className="text-xs font-bold mb-3" style={{ color: "#B45309" }}>
                    Ce besoin est peut-être déjà exprimé. Votez plutôt pour lui : les voix se
                    cumulent au lieu de se disperser.
                  </p>
                  <div className="space-y-2">
                    {doublons.map((b) => (
                      <div key={b.id} className="flex items-center gap-2.5 bg-white rounded-lg p-2.5">
                        <span className="flex-1 min-w-0 text-xs font-medium text-[#1B2D5B] line-clamp-2">
                          {b.titre}
                        </span>
                        <button
                          type="button"
                          onClick={() => onVote(b.id)}
                          className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors"
                          style={
                            b.a_vote
                              ? { backgroundColor: "#3DBFA0", color: "#ffffff" }
                              : { backgroundColor: "#F1F5F9", color: "#1B2D5B" }
                          }
                        >
                          <ArrowUp className="w-3 h-3" />
                          {b.votes_count}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <span className="block text-sm font-semibold text-[#1B2D5B] mb-2">
                  Domaine concerné <span className="font-normal text-gray-400">(optionnel)</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {DOMAINES.map((d) => {
                    const actif = domaine === d.value
                    return (
                      <button
                        key={d.value}
                        type="button"
                        onClick={() => setDomaine(actif ? "" : d.value)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all"
                        style={
                          actif
                            ? { backgroundColor: d.badgeBg, color: d.badgeText, borderColor: d.badgeText }
                            : { backgroundColor: "#ffffff", color: "#64748B", borderColor: "#E2E8F0" }
                        }
                      >
                        <d.icon className="w-3.5 h-3.5" />
                        {d.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="besoin-description" className="block text-sm font-semibold text-[#1B2D5B] mb-1.5">
                  Ce qui pose problème sur le terrain{" "}
                  <span className="font-normal text-gray-400">(optionnel)</span>
                </label>
                <textarea
                  id="besoin-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value.slice(0, 1000))}
                  rows={4}
                  placeholder="La situation que vous rencontrez, ce qui vous manque aujourd'hui pour y répondre. Deux lignes suffisent."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1B2D5B] placeholder:text-gray-400 focus:outline-none focus:border-[#3DBFA0] focus:ring-2 focus:ring-[#3DBFA0]/20 transition-all resize-none"
                />
                {restants < 200 && (
                  <p className="text-xs text-gray-400 mt-1 text-right">{restants} caractères restants</p>
                )}
              </div>

              {erreur && (
                <p className="text-xs font-medium px-3 py-2.5 rounded-lg" style={{ backgroundColor: "#FEF2F2", color: "#BE123C" }}>
                  {erreur}
                </p>
              )}

              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Lock className="w-3.5 h-3.5 flex-shrink-0" />
                <span>
                  Votre nom n'apparaît pas sur le mur. Seule l'équipe Learna le voit, pour
                  pouvoir vous recontacter.
                </span>
              </div>

              <button
                type="submit"
                disabled={envoi || titre.trim().length < 5}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-95"
                style={{ backgroundColor: "#3DBFA0" }}
              >
                <Send className="w-4 h-4" />
                {envoi ? "Envoi..." : "Envoyer mon besoin"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
