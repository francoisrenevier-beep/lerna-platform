import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { DefiSection } from "@/components/defi-section"
import { HowItWorks } from "@/components/how-it-works"
import { DirectionBloc } from "@/components/direction-bloc"
import { CommentConcu } from "@/components/comment-concu"
import { ParcoursPartenariat } from "@/components/parcours-partenariat"
import { PourquoiLerna } from "@/components/pourquoi-lerna"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "La solution | LEARNA",
  description:
    "Découvrez LEARNA : une plateforme de formation continue conçue pour les institutions du travail social. Des parcours ancrés dans la pratique, accessibles à toute l'équipe, à tout moment.",
}

export default function LaSolutionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Intro */}
      <section className="bg-[#1B2D5B] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-[#3DBFA0]">
            LEARNA : Formation continue e-learning
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Former les équipes, élargir les regards
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            LEARNA propose aux institutions sociales et médico-sociales une plateforme de formation
            en ligne pensée pour le terrain : des parcours courts, concrets, accessibles à
            l&apos;ensemble des collaborateurs, y compris ceux en périphérie des plans de
            formation habituels.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#3DBFA0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3DBFA0]/90"
            >
              Demander une démonstration →
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

      <DefiSection />
      <HowItWorks />
      <DirectionBloc />
      <CommentConcu />
      <ParcoursPartenariat />
      <PourquoiLerna />
      <Testimonials />

      {/* CTA final */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
            Prêt à découvrir LEARNA&nbsp;?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Rencontrons-nous 30 minutes pour explorer comment LEARNA s&apos;intègre à votre institution.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1B2D5B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1B2D5B]/90"
          >
            Demander une démonstration →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
