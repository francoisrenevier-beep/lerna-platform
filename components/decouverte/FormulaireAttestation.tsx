"use client"

import { useState } from "react"

import { mesure } from "@/lib/decouverte/analytics"
import type { ModuleLibre } from "@/lib/decouverte/types"

/**
 * Champ e-mail facultatif de l'écran de fin.
 *
 * Il n'apparaît qu'après le résultat, jamais avant : rien dans le module ne
 * doit se payer d'une adresse. Le consentement est une case distincte, non
 * cochée par défaut et sans laquelle l'envoi est refusé — la nLPD demande un
 * accord actif, et une case pré-cochée n'en est pas un.
 *
 * Le nom est facultatif dans le facultatif : sans lui l'attestation reste
 * valable, elle nomme simplement le module, la date et le résultat.
 */
export function FormulaireAttestation({
  module: moduleLibre,
  score,
  total,
}: {
  module: ModuleLibre
  score: number
  total: number
}) {
  const [email, setEmail] = useState("")
  const [nom, setNom] = useState("")
  const [consent, setConsent] = useState(false)
  const [envoi, setEnvoi] = useState(false)
  const [envoye, setEnvoye] = useState(false)
  const [erreur, setErreur] = useState<string | null>(null)

  const soumettre = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnvoi(true)
    setErreur(null)
    try {
      const reponse = await fetch("/api/decouverte-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          nom: nom.trim() || null,
          consentement: consent,
          module: moduleLibre.slug,
          score,
          total,
        }),
      })
      const donnees = await reponse.json()
      if (!reponse.ok) throw new Error(donnees.error ?? "Erreur inconnue")
      mesure.emailDepose(moduleLibre.slug)
      setEnvoye(true)
    } catch (err) {
      setErreur(
        err instanceof Error && err.message
          ? err.message
          : "L'envoi a échoué. Merci d'écrire directement à contact@learna.ch.",
      )
    } finally {
      setEnvoi(false)
    }
  }

  if (envoye) {
    return (
      <div
        className="rounded-xl border border-[#3DBFA0]/30 bg-[#3DBFA0]/10 p-5"
        role="status"
      >
        <p className="text-sm font-semibold text-[#1B2D5B]">C&apos;est envoyé.</p>
        <p className="mt-1 text-sm text-gray-600">
          Votre attestation de suivi part à l&apos;instant vers {email}. Si elle n&apos;arrive pas,
          pensez au dossier des indésirables.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={soumettre} className="rounded-xl border border-gray-200 p-5">
      <h3 className="text-base font-semibold text-[#1B2D5B]">
        Recevoir une attestation de suivi
      </h3>
      <p className="mt-1 text-sm text-gray-600">
        Facultatif. Le module reste accessible sans cela, et vous venez d&apos;en voir le
        résultat sans avoir rien donné.
      </p>

      <div className="mt-4 space-y-3">
        <div>
          <label htmlFor="decouverte-email" className="mb-1 block text-sm font-medium text-[#1B2D5B]">
            Votre adresse e-mail
          </label>
          <input
            id="decouverte-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-[#1B2D5B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3DBFA0]"
          />
        </div>

        <div>
          <label htmlFor="decouverte-nom" className="mb-1 block text-sm font-medium text-[#1B2D5B]">
            Nom à faire figurer sur l&apos;attestation{" "}
            <span className="font-normal text-gray-400">(facultatif)</span>
          </label>
          <input
            id="decouverte-nom"
            type="text"
            autoComplete="name"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-[#1B2D5B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3DBFA0]"
          />
        </div>

        <label className="flex items-start gap-3 rounded-lg p-1 text-sm text-gray-600 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#3DBFA0]">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-gray-300 accent-[#3DBFA0]"
          />
          <span>
            J&apos;accepte que LEARNA utilise mon adresse pour m&apos;envoyer cette attestation et
            m&apos;informer de ses nouvelles formations. Mon adresse n&apos;est ni revendue ni
            transmise à des tiers, et je peux retirer mon accord à tout moment en écrivant à{" "}
            <span className="whitespace-nowrap font-medium text-[#1B2D5B]">contact@learna.ch</span>.
          </span>
        </label>
      </div>

      <div aria-live="polite">
        {erreur && <p className="mt-3 text-sm text-red-600">{erreur}</p>}
      </div>

      <button
        type="submit"
        disabled={envoi}
        className="mt-4 w-full rounded-lg bg-[#3DBFA0] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2ea88b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3DBFA0] disabled:opacity-50 sm:w-auto"
      >
        {envoi ? "Envoi en cours…" : "Recevoir mon attestation"}
      </button>
    </form>
  )
}
