"use client"

import { useState } from "react"
import { Lightbulb } from "lucide-react"
import { BesoinModal } from "@/components/BesoinModal"
import { basculerVote, chargerBesoins, type Besoin } from "@/lib/besoins"

// Bouton autonome pour ouvrir la proposition de besoin depuis n'importe quel
// écran. Le mur n'est chargé qu'à l'ouverture de la modale (détection des
// doublons) : les pages qui portent ce bouton ne paient rien tant que personne
// ne clique.

export function BesoinCTA({
  titreInitial = "",
  label = "Proposer cette formation",
}: {
  /** Préremplit le champ « besoin », par exemple avec la recherche restée sans résultat. */
  titreInitial?: string
  label?: string
}) {
  const [besoins, setBesoins] = useState<Besoin[]>([])
  const [open, setOpen] = useState(false)

  const ouvrir = async () => {
    setOpen(true)
    setBesoins(await chargerBesoins())
  }

  const voter = async (id: string) => {
    const res = await basculerVote(id)
    if (!res) return
    setBesoins((prev) =>
      prev.map((b) => (b.id === id ? { ...b, a_vote: res.a_vote, votes_count: res.votes_count } : b))
    )
  }

  return (
    <>
      <button
        onClick={ouvrir}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:brightness-95 active:scale-95"
        style={{ backgroundColor: "#3DBFA0" }}
      >
        <Lightbulb className="w-4 h-4" />
        {label}
      </button>

      <BesoinModal
        open={open}
        onClose={() => setOpen(false)}
        besoins={besoins}
        onCree={() => chargerBesoins().then(setBesoins)}
        onVote={voter}
        titreInitial={titreInitial}
      />
    </>
  )
}
