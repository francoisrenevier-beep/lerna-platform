import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { TarifsSection } from "@/components/tarifs-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Licences institutionnelles — LEARNA",
  description:
    "La licence institutionnelle LEARNA ouvre la plateforme à l'ensemble de vos collaborateurs, sans inscription individuelle ni frais par participant. Un abonnement annuel unique pour toute l'institution.",
}

export default function LicencesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <TarifsSection />
      <section className="bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
            Une question sur les tarifs&nbsp;?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nous répondons à toutes vos questions et établissons un devis adapté à votre institution.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#3DBFA0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3DBFA0]/90"
            >
              Demander une démonstration →
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 rounded-lg border border-[#1B2D5B]/30 px-6 py-3 text-sm font-semibold text-[#1B2D5B] transition-colors hover:border-[#1B2D5B] hover:bg-[#1B2D5B]/5"
            >
              Voir les questions fréquentes
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
