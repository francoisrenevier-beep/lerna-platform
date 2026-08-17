import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TarifsTableau } from "@/components/tarifs-tableau"
import { TarifsCalculateur } from "@/components/tarifs-calculateur"
import {
  ETP_INCLUS,
  formaterCHF,
  PRIX_PAR_ETP_SUPPLEMENTAIRE,
  REMISE_LANCEMENT,
  SOCLE_CHF,
} from "@/lib/tarifs"

// Pas de données structurées Offer/Product : le tarif dépend de l'effectif de
// l'institution, ce n'est pas un prix fixe. Les annoncer comme tel exposerait
// un montant faux dans les résultats de recherche.
export const metadata: Metadata = {
  title:
    "Tarifs : Learna, formation continue pour les institutions sociales et médico-sociales",
  description: `Licence annuelle Learna : accès au catalogue pour tous vos collaborateurs et une formation propre à votre institution. Tarif proportionnel, dès ${formaterCHF(SOCLE_CHF)} CHF par an.`,
}

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Bloc 1 — Accroche */}
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
            La formation continue accessible à toute votre institution
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Une licence annuelle donne à l&apos;ensemble de vos collaborateurs
            l&apos;accès au catalogue Learna, ainsi qu&apos;à toutes les
            formations publiées pendant la durée de votre abonnement.
          </p>
        </div>
      </section>

      {/* Bloc 2 — Principe tarifaire */}
      <section className="border-y border-[#1B2D5B]/[0.06] bg-gradient-to-r from-[#1B2D5B]/[0.04] to-[#3DBFA0]/[0.05] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
            Un tarif proportionnel, sans effet de seuil
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Le tarif Learna se compose d&apos;un socle institutionnel de{" "}
            {formaterCHF(SOCLE_CHF)}&nbsp;CHF, qui couvre l&apos;accès de
            l&apos;institution à la plateforme, et de{" "}
            {PRIX_PAR_ETP_SUPPLEMENTAIRE}&nbsp;CHF par ETP au-delà de{" "}
            {ETP_INCLUS}&nbsp;ETP. Plus l&apos;institution est grande, moins
            elle paie par ETP.
          </p>
        </div>
      </section>

      {/* Bloc 3 — Tableau de référence */}
      <section className="relative overflow-hidden bg-background py-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/4 right-[-10%] h-96 w-96 rounded-full bg-[#3DBFA0]/[0.07] blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <TarifsTableau />

          {/* Ce que la licence comprend. Aucun tarif pour les formations sur
              mandat : le devis est établi au cas par cas. */}
          <div className="mt-10 rounded-xl border border-[#3DBFA0]/30 bg-[#3DBFA0]/[0.06] p-6">
            <p className="font-semibold text-[#1B2D5B]">
              Ce que comprend la licence annuelle
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Accès illimité pour tous vos collaborateurs",
                "Nouvelles formations incluses, sans supplément",
                "Une formation propre à votre institution, produite chaque année et réservée à vos équipes",
                "Formations supplémentaires disponibles sur mandat",
              ].map((mention) => (
                <li key={mention} className="flex items-start gap-3">
                  <Check
                    aria-hidden
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#3DBFA0]"
                  />
                  <span className="text-muted-foreground">{mention}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bloc 4 — Calculateur */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3DBFA0]/[0.09] via-[#F8FAFC] to-[#1B2D5B]/[0.05] py-16 sm:py-20">
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

      {/* Bloc 5 — Tarif de lancement */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
            Tarif de lancement
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Les institutions qui rejoignent Learna durant sa phase de lancement
            bénéficient de {REMISE_LANCEMENT * 100} % de réduction sur leur
            licence annuelle, avec un tarif garanti pendant trois ans.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Une manière de rejoindre Learna dès aujourd&apos;hui tout en
            bénéficiant durablement de conditions privilégiées.
          </p>

          <div className="mt-8 rounded-xl border border-[#3DBFA0]/30 bg-[#3DBFA0]/[0.06] p-6">
            <p className="font-semibold text-[#1B2D5B]">
              Offre de lancement réservée aux 10 premières institutions
              partenaires
            </p>
            <p className="mt-1.5 text-muted-foreground">
              –30&nbsp;% sur la licence annuelle, tarif garanti pendant 3 ans.
            </p>
          </div>
        </div>
      </section>

      {/* Bloc 6 — Stabilité tarifaire */}
      <section className="border-y border-[#1B2D5B]/[0.06] bg-gradient-to-l from-[#1B2D5B]/[0.04] to-[#3DBFA0]/[0.05] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
            Un tarif qui ne bouge pas
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Le tarif est calculé à la signature sur la base des ETP déclarés, et
            garanti pour toute la durée du contrat. Il
            n&apos;est réexaminé qu&apos;au renouvellement, et uniquement si
            l&apos;effectif de l&apos;institution a varié de plus de vingt pour
            cent.
          </p>
        </div>
      </section>

      {/* Bloc 7 — Appel à l'action */}
      <section className="relative overflow-hidden bg-[#1B2D5B] py-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 right-[10%] h-64 w-64 rounded-full bg-[#3DBFA0]/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact?sujet=licence-institutionnelle"
              className="inline-flex items-center gap-2 rounded-lg bg-[#3DBFA0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3DBFA0]/90"
            >
              Échanger sur les besoins de mon institution →
            </Link>
            <Link
              href="/formations-ressources"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Voir les formations
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
