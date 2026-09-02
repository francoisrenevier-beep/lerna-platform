import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Check, ChevronDown, PenLine } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TarifsFormule } from "@/components/tarifs-formule"
import { TarifsTableau } from "@/components/tarifs-tableau"
import { TarifsCalculateur } from "@/components/tarifs-calculateur"
import { TarifsFormationSignature } from "@/components/tarifs-formation-signature"
import { TarifsQuestions } from "@/components/tarifs-questions"
import { SEUIL_DEVIS } from "@/lib/tarifs"

// Pas de données structurées Offer/Product : le tarif dépend de l'effectif de
// l'institution, ce n'est pas un prix fixe. Les annoncer comme tel exposerait
// un montant faux dans les résultats de recherche. Le seul balisage de la page
// est le FAQPage émis par `TarifsQuestions`, qui ne porte aucun montant.
//
// La description ne cite plus de montant plancher non plus : « dès 2’000 CHF »
// se lisait comme une offre accessible à toutes les tailles d'institution.
export const metadata: Metadata = {
  title:
    "Tarifs : Learna, formation continue pour les institutions sociales et médico-sociales",
  description:
    "Licence annuelle Learna : le catalogue pour tous vos collaborateurs et votre formation signature, conçue pour votre institution. Un tarif calculé sur votre effectif, garanti pendant toute la durée du contrat.",
}

const garanties = [
  "Nouvelles formations comprises",
  "Attestations individuelles",
  "Suivi institutionnel pour la direction",
  "Aucune licence nominative",
]

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* 1 — Accroche. Aucun montant : le prix se lit plus bas, avec le terme
             qui le complète. */}
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
            Votre licence annuelle, votre formation signature.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Une licence annuelle, calculée sur votre effectif. Elle ouvre le
            catalogue à l&apos;ensemble de vos collaborateurs et finance la
            production de votre formation signature.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#tarif"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1B2D5B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1B2D5B]/90"
            >
              Calculer notre tarif
            </Link>
            <Link
              href="/contact?sujet=licence-institutionnelle"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1B2D5B]/20 px-6 py-3 text-sm font-semibold text-[#1B2D5B] transition-colors hover:border-[#1B2D5B]/40 hover:bg-[#1B2D5B]/[0.04]"
            >
              Demander une proposition →
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — Les deux prestations, d'un coup d'œil. */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
            Deux prestations, un seul contrat
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Accent émeraude : la formation signature est l'argument de la
                page, pas une prestation de second rang. */}
            <div className="rounded-2xl border border-[#3DBFA0]/40 bg-[#3DBFA0]/[0.08] p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3DBFA0]/20">
                <PenLine aria-hidden className="h-6 w-6 text-[#1B2D5B]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#1B2D5B]">
                Votre formation signature
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Un sujet que vous choisissez, construit à partir de vos documents
                et avec vos équipes. Visible par vos seuls collaborateurs. Une
                par an, comprise dans la licence.
              </p>
            </div>

            <div className="rounded-2xl border border-[#1B2D5B]/10 bg-card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B2D5B]/10">
                <BookOpen aria-hidden className="h-6 w-6 text-[#1B2D5B]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#1B2D5B]">
                Le catalogue, pour tout le monde
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Tous vos collaborateurs y accèdent, y compris les équipes de
                nuit, l&apos;intendance et l&apos;administration. Sans limite de
                nombre, sans compte nominatif à gérer.
              </p>
            </div>
          </div>

          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {garanties.map((garantie) => (
              <li key={garantie} className="flex items-start gap-2.5">
                <Check
                  aria-hidden
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#3DBFA0]"
                />
                <span className="text-muted-foreground">{garantie}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 — Le tarif. La formule d'abord, pour que le socle ne soit jamais lu
             seul, puis le simulateur, puis la grille en repli. */}
      <section
        id="tarif"
        className="scroll-mt-40 border-y border-[#1B2D5B]/[0.06] bg-gradient-to-br from-[#3DBFA0]/[0.09] via-[#F8FAFC] to-[#1B2D5B]/[0.05] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
            Ce que ça coûte
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Un seul contrat, calculé de la même manière pour toutes les
            institutions. Pas de palier, pas de conditions particulières selon
            l&apos;interlocuteur.
          </p>

          <div className="mt-10">
            <TarifsFormule />
          </div>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            Le socle couvre les institutions jusqu&apos;à dix ETP&nbsp;;
            au-delà, le tarif suit l&apos;effectif. La formation signature et
            l&apos;accès au catalogue ne se souscrivent pas séparément. Le calcul
            se fait sur les ETP par simplicité&nbsp;: aucun collaborateur
            n&apos;est décompté.
          </p>

          <div className="mt-10">
            <TarifsCalculateur />
          </div>

          {/* Grille repliée : le simulateur répond mieux à la question que le
              tableau, qui reste une référence à vérifier. Un `details` natif
              plutôt qu'un accordéon — le contenu reste dans le HTML servi. */}
          <details className="group mt-6 rounded-2xl border border-[#1B2D5B]/10 bg-white/70">
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 list-none text-sm font-semibold text-[#1B2D5B] marker:content-none [&::-webkit-details-marker]:hidden">
              Voir la grille complète, de 20 à {SEUIL_DEVIS} ETP
              <ChevronDown
                aria-hidden
                className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="border-t border-[#1B2D5B]/10 px-6 pb-6 pt-6">
              <TarifsTableau />
            </div>
          </details>

          {/* Ces deux mentions doivent rester lisibles sans ouvrir la grille :
              la première cadre l'attente des grandes institutions, la seconde
              ouvre la porte à celles qui ne peuvent pas suivre le barème. */}
          <p className="mt-8 text-sm text-muted-foreground">
            Au-delà de {SEUIL_DEVIS} ETP, nous établissons une proposition
            adaptée à votre organisation.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Les institutions dont la situation le justifie peuvent nous contacter
            pour examiner ensemble les conditions d&apos;un partenariat.
          </p>
        </div>
      </section>

      {/* 4 — Votre formation signature */}
      <TarifsFormationSignature />

      {/* 5 — Questions sur la licence */}
      <TarifsQuestions />

      {/* 6 — Appel à l'action */}
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
            Dites-nous lequel. Vous recevez une proposition chiffrée pour votre
            institution et une première esquisse de ce que cette formation
            pourrait couvrir.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact?sujet=licence-institutionnelle"
              className="inline-flex items-center gap-2 rounded-lg bg-[#3DBFA0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3DBFA0]/90"
            >
              Recevoir une proposition →
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
