import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"

import { formationSignature } from "@/content/site"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TarifsTableau } from "@/components/tarifs-tableau"
import { TarifsCalculateur } from "@/components/tarifs-calculateur"
import { TarifsFormationSignature } from "@/components/tarifs-formation-signature"
import { TarifsQuestions } from "@/components/tarifs-questions"
import {
  ETP_INCLUS,
  formaterCHF,
  PRIX_PAR_ETP_SUPPLEMENTAIRE,
  SOCLE_CHF,
} from "@/lib/tarifs"

// Pas de données structurées Offer/Product : le tarif dépend de l'effectif de
// l'institution, ce n'est pas un prix fixe. Les annoncer comme tel exposerait
// un montant faux dans les résultats de recherche. Le seul balisage de la page
// est le FAQPage émis par `TarifsQuestions`, qui ne porte aucun montant.
export const metadata: Metadata = {
  title:
    "Tarifs : Learna, formation continue pour les institutions sociales et médico-sociales",
  description: `Licence annuelle Learna : accès au catalogue pour tous vos collaborateurs et votre formation signature, conçue pour votre institution. Tarif proportionnel, dès ${formaterCHF(SOCLE_CHF)} CHF par an.`,
}

/** Ce que la licence comprend. Aucun tarif pour les formations sur mandat : le
 *  devis est établi au cas par cas. */
const inclus = [
  "Votre formation signature, produite chaque année et réservée à vos équipes",
  "L'accès illimité de tous vos collaborateurs au catalogue",
  "Toutes les formations publiées pendant la durée du contrat, sans supplément",
  "Les attestations de suivi individuelles",
  "Le suivi institutionnel pour la direction",
]

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Section 1 — Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#3DBFA0]/[0.08] to-background py-16 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[-8%] h-80 w-80 rounded-full bg-[#3DBFA0]/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-[-6%] h-72 w-72 rounded-full bg-[#1B2D5B]/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-pretty text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl lg:text-5xl">
            Une licence annuelle. Deux choses qui n&apos;existent nulle part
            ailleurs ensemble.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Un catalogue accessible à l&apos;ensemble de vos collaborateurs, sans
            limite de nombre. Et chaque année, une formation signature conçue
            pour votre institution, réservée à vos équipes.
          </p>
          <p className="mt-8 inline-flex items-baseline rounded-full border border-[#3DBFA0]/40 bg-[#3DBFA0]/10 px-5 py-2 text-base font-semibold text-[#1B2D5B]">
            Dès {formaterCHF(SOCLE_CHF)}&nbsp;CHF par an.
          </p>
        </div>
      </section>

      {/* Section 2 — Le socle institutionnel. Développe ce que le socle finance
          réellement : deux prestations, et non un droit d'accès. */}
      <section className="border-y border-[#1B2D5B]/[0.06] bg-gradient-to-r from-[#1B2D5B]/[0.04] to-[#3DBFA0]/[0.05] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
            Le socle institutionnel — {formaterCHF(SOCLE_CHF)}&nbsp;CHF
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Il ne finance pas un droit d&apos;accès. Il finance deux choses.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Accent émeraude sur la première colonne : la formation signature
                est l'argument de la page, pas une prestation de second rang. */}
            <div className="rounded-2xl border border-[#3DBFA0]/40 bg-[#3DBFA0]/[0.08] p-6 sm:p-7">
              <h3 className="text-balance text-lg font-semibold text-[#1B2D5B]">
                Votre formation signature, produite chaque année
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {formationSignature.delaiEnTete} de travail avec vous, sur un
                sujet que vous choisissez, réservée à vos équipes.
              </p>
            </div>

            <div className="rounded-2xl border border-[#1B2D5B]/10 bg-white p-6 sm:p-7">
              <h3 className="text-balance text-lg font-semibold text-[#1B2D5B]">
                L&apos;ouverture de la plateforme à tout votre personnel
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Le catalogue complet, pour l&apos;ensemble des collaborateurs,
                sans licence nominative et sans limite de nombre.
              </p>
            </div>
          </div>

          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            Au-delà de {ETP_INCLUS}&nbsp;ETP, chaque ETP supplémentaire est
            facturé {PRIX_PAR_ETP_SUPPLEMENTAIRE}&nbsp;CHF. Il n&apos;y a pas
            d&apos;autre ligne.
          </p>
        </div>
      </section>

      {/* Section 3 — Votre formation signature */}
      <TarifsFormationSignature />

      {/* Section 4 — Simulateur */}
      <section className="relative overflow-hidden bg-background py-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-[-6%] h-64 w-64 rounded-full bg-[#3DBFA0]/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
            Combien coûterait Learna pour votre institution&nbsp;?
          </h2>
          <div className="mt-8">
            <TarifsCalculateur />
          </div>
        </div>
      </section>

      {/* Section 5 — Grille tarifaire */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3DBFA0]/[0.09] via-[#F8FAFC] to-[#1B2D5B]/[0.05] py-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/4 right-[-10%] h-96 w-96 rounded-full bg-[#3DBFA0]/[0.07] blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
            La grille complète
          </h2>
          <TarifsTableau />
        </div>
      </section>

      {/* Section 6 — Ce que comprend la licence */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
            Ce que comprend la licence
          </h2>

          <ul className="mt-8 space-y-4">
            {inclus.map((mention) => (
              <li key={mention} className="flex items-start gap-3">
                <Check
                  aria-hidden
                  className="mt-1 h-5 w-5 shrink-0 text-[#3DBFA0]"
                />
                <span className="text-lg leading-relaxed text-muted-foreground">
                  {mention}
                </span>
              </li>
            ))}
          </ul>

          {/* Reprend, en encadré, la précision qui figurait sous le tableau :
              elle porte l'argument de couverture, pas une note de bas de page. */}
          <div className="mt-10 rounded-xl border border-[#3DBFA0]/30 bg-[#3DBFA0]/[0.06] p-6">
            <p className="leading-relaxed text-[#1B2D5B]">
              La licence couvre tout le personnel, y compris celui qui ne part
              jamais en formation&nbsp;: équipes de nuit, intendance,
              administration, remplaçants. Le tarif est calculé sur les ETP par
              simplicité, mais aucun collaborateur n&apos;est décompté.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 — Questions sur la licence */}
      <TarifsQuestions />

      {/* Section 8 — Appel à l'action */}
      <section className="relative overflow-hidden bg-[#1B2D5B] py-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 right-[10%] h-64 w-64 rounded-full bg-[#3DBFA0]/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Un sujet en tête pour votre formation signature&nbsp;?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            Dites-nous lequel. Nous vous répondons avec une proposition chiffrée
            pour votre institution et une première esquisse de ce que cette
            formation pourrait couvrir.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact?sujet=licence-institutionnelle"
              className="inline-flex items-center gap-2 rounded-lg bg-[#3DBFA0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3DBFA0]/90"
            >
              Recevoir une proposition pour mon institution →
            </Link>
            <Link
              href="/formations-ressources"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Voir les formations
            </Link>
          </div>

          <p className="mt-6 text-sm text-white/60">
            Réponse sous 48h ouvrables.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
