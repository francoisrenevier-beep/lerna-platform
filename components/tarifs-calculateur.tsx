"use client"

import { useState } from "react"
import Link from "next/link"

import {
  bornerEtp,
  calculerTarif,
  COLLABORATEURS_MAX,
  COLLABORATEURS_MIN,
  coutParCollaborateur,
  ETP_DEFAUT,
  ETP_MAX,
  ETP_MIN,
  formaterCHF,
  formaterCoutMensuel,
  formaterCoutParEtp,
  SEUIL_DEVIS,
} from "@/lib/tarifs"

/**
 * Calculateur de licence — unique îlot client de la page /tarifs.
 *
 * Le calcul est strictement local : `lib/tarifs` est un module pur, aucun appel
 * réseau n'est nécessaire pour afficher un prix. Isoler ce composant évite de
 * basculer toute la page en rendu client pour un seul champ de saisie.
 */
export function TarifsCalculateur() {
  // La saisie est conservée en texte : borner à chaque frappe empêcherait
  // d'effacer le champ pour retaper un nombre. Le bornage a lieu à la lecture,
  // et au blur pour recaler visuellement une valeur hors bornes.
  const [saisie, setSaisie] = useState(String(ETP_DEFAUT))

  // Champ facultatif : vide par défaut, et jamais pré-rempli ni déduit des ETP.
  // Un effectif proposé par le site serait un ratio implicite que nous
  // n'avançons pas ; c'est à l'institution de donner son propre chiffre. Pas de
  // recalage au blur non plus : le champ doit pouvoir rester vide.
  const [saisieCollaborateurs, setSaisieCollaborateurs] = useState("")

  const etp = bornerEtp(Number.parseInt(saisie, 10))
  const tarif = calculerTarif(etp)

  // `null` dès que la saisie est vide, nulle, non numérique, hors bornes ou
  // inférieure aux ETP : aucun coût par collaborateur n'est alors affiché.
  const parCollaborateur = tarif.surDevis
    ? null
    : coutParCollaborateur(
        tarif.catalogue,
        Number.parseInt(saisieCollaborateurs, 10),
        etp
      )

  return (
    <div className="rounded-2xl border border-[#1B2D5B]/10 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-8 sm:grid-cols-2 sm:items-start">
        {/* Saisie */}
        <div className="space-y-6">
          <div>
            <label
              htmlFor="etp"
              className="block text-sm font-medium text-[#1B2D5B]"
            >
              Nombre d&apos;ETP
            </label>
            <input
              id="etp"
              name="etp"
              type="number"
              inputMode="numeric"
              min={ETP_MIN}
              max={ETP_MAX}
              step={1}
              value={saisie}
              onChange={(e) => setSaisie(e.target.value)}
              onBlur={() => setSaisie(String(etp))}
              className="mt-3 w-full rounded-lg border border-[#1B2D5B]/20 bg-white px-4 py-3 text-2xl font-bold text-[#1B2D5B] tabular-nums outline-none transition-colors focus:border-[#3DBFA0] focus:ring-2 focus:ring-[#3DBFA0]/30"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              De {ETP_MIN} à {formaterCHF(ETP_MAX)} ETP.
            </p>
          </div>

          <div>
            <label
              htmlFor="collaborateurs"
              className="block text-sm font-medium text-[#1B2D5B]"
            >
              Nombre de collaborateurs (facultatif)
            </label>
            <input
              id="collaborateurs"
              name="collaborateurs"
              type="number"
              inputMode="numeric"
              min={COLLABORATEURS_MIN}
              max={COLLABORATEURS_MAX}
              step={1}
              value={saisieCollaborateurs}
              onChange={(e) => setSaisieCollaborateurs(e.target.value)}
              className="mt-3 w-full rounded-lg border border-[#1B2D5B]/20 bg-white px-4 py-3 text-2xl font-bold text-[#1B2D5B] tabular-nums outline-none transition-colors focus:border-[#3DBFA0] focus:ring-2 focus:ring-[#3DBFA0]/30"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              De {COLLABORATEURS_MIN} à {formaterCHF(COLLABORATEURS_MAX)}{" "}
              collaborateurs. La licence les couvre tous ; le montant ne change
              pas.
            </p>
          </div>
        </div>

        {/* Résultat */}
        <div>
          {tarif.surDevis ? (
            <div className="rounded-xl bg-[#F8FAFC] p-5">
              <p className="text-base leading-relaxed text-[#1B2D5B]">
                Au-delà de {SEUIL_DEVIS} ETP, contactez-nous pour une proposition
                adaptée.
              </p>
              <Link
                href="/contact?sujet=licence-institutionnelle"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#3DBFA0] transition-colors hover:text-[#2ea88b]"
              >
                Nous contacter →
              </Link>
            </div>
          ) : (
            <dl className="space-y-3">
              <div className="flex items-baseline justify-between gap-4 rounded-lg bg-[#3DBFA0]/10 px-4 py-3">
                <dt className="text-sm font-semibold text-[#1B2D5B]">
                  Licence annuelle
                </dt>
                <dd className="text-2xl font-bold text-[#1B2D5B] tabular-nums">
                  {formaterCHF(tarif.catalogue)} CHF
                </dd>
              </div>

              <div className="flex items-baseline justify-between gap-4 border-t border-[#1B2D5B]/10 pt-3">
                <dt className="text-sm text-muted-foreground">Soit</dt>
                <dd className="text-right text-sm text-[#1B2D5B] tabular-nums">
                  {formaterCoutParEtp(tarif.coutParEtp)} CHF par ETP et par an
                  <span className="mt-0.5 block text-muted-foreground">
                    {formaterCoutMensuel(tarif.coutParEtpMois)} CHF par ETP et
                    par mois
                  </span>
                </dd>
              </div>

              {parCollaborateur && (
                <div className="flex items-baseline justify-between gap-4 border-t border-[#1B2D5B]/10 pt-3">
                  <dt className="text-sm text-muted-foreground">Ou encore</dt>
                  <dd className="text-right text-sm text-[#1B2D5B] tabular-nums">
                    {formaterCoutParEtp(parCollaborateur.an)} CHF par
                    collaborateur et par an
                    <span className="mt-0.5 block text-muted-foreground">
                      {formaterCoutMensuel(parCollaborateur.mois)} CHF par
                      collaborateur et par mois
                    </span>
                  </dd>
                </div>
              )}
            </dl>
          )}
        </div>
      </div>

      <p className="mt-6 border-t border-[#1B2D5B]/10 pt-4 text-sm text-muted-foreground">
        Ce tarif est garanti pendant toute la durée de votre contrat.
      </p>
    </div>
  )
}
