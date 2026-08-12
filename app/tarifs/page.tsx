import type { Metadata } from "next"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TarifsTableau } from "@/components/tarifs-tableau"
import { TarifsCalculateur } from "@/components/tarifs-calculateur"
import {
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
    "Tarifs — Learna, formation continue pour les institutions sociales et médico-sociales",
  description:
    "Une licence annuelle donne accès à l'ensemble du catalogue Learna à tous vos collaborateurs. Tarif proportionnel à la taille de l'institution, dès 3'000 CHF par an.",
}

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Bloc 1 — Accroche */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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
      <section className="bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
            Un tarif proportionnel, sans effet de seuil
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Le tarif Learna se compose d&apos;un socle institutionnel de{" "}
            {formaterCHF(SOCLE_CHF)} francs, qui couvre l&apos;accès de
            l&apos;institution à la plateforme, et de {PRIX_PAR_ETP_SUPPLEMENTAIRE}{" "}
            francs par collaborateur
            au-delà de cinquante équivalents plein temps. Plus l&apos;institution
            est grande, moins elle paie par collaborateur.
          </p>
        </div>
      </section>

      {/* Bloc 3 — Tableau de référence */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <TarifsTableau />
        </div>
      </section>

      {/* Bloc 4 — Calculateur */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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

          {/*
            ⚠️ BLOQUANT AVANT MISE EN PRODUCTION
            Une offre de lancement sans condition de fin annoncée n'est pas une
            offre de lancement : il faut une date d'échéance ou un nombre
            d'institutions. Remplacer le bloc ci-dessous par la mention retenue,
            puis supprimer ce commentaire.
          */}
          <p className="mt-8 rounded-lg border border-dashed border-[#1B2D5B]/30 bg-[#F8FAFC] p-4 text-sm text-[#1B2D5B]">
            <span className="font-semibold">À compléter avant publication</span>{" "}
            — la condition de fin de l&apos;offre reste à définir : date
            d&apos;échéance ou nombre d&apos;institutions bénéficiaires. Ce bloc
            ne doit pas être publié en l&apos;état.
          </p>
        </div>
      </section>

      {/* Bloc 6 — Stabilité tarifaire */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
            Un tarif qui ne bouge pas
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Le tarif est calculé à la signature sur la base des équivalents plein
            temps déclarés, et garanti pour toute la durée du contrat. Il
            n&apos;est réexaminé qu&apos;au renouvellement, et uniquement si
            l&apos;effectif de l&apos;institution a varié de plus de vingt pour
            cent.
          </p>
        </div>
      </section>

      {/* Bloc 7 — Appel à l'action */}
      <section className="bg-[#1B2D5B] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
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
