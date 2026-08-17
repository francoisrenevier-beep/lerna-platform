import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { DefiSection } from "@/components/defi-section"
import { HowItWorks } from "@/components/how-it-works"
import { DirectionBloc } from "@/components/direction-bloc"
import { FaqDirecteurs } from "@/components/faq-directeurs"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Former toutes vos équipes | LEARNA pour les institutions",
  description:
    "LEARNA aide les institutions du travail social à former l'ensemble de leurs collaborateurs, y compris les équipes de nuit et le personnel administratif, avec une licence annuelle simple.",
}

export default function InstitutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <DefiSection />
      <HowItWorks />
      <DirectionBloc />
      <FaqDirecteurs limit={4} />
      <section className="bg-[#1B2D5B] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Prêt à former toutes vos équipes&nbsp;?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Discutons de votre situation en 30 minutes.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#3DBFA0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3DBFA0]/90"
          >
            Demander une démonstration →
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
