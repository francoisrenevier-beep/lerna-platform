import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { CommentConcu } from "@/components/comment-concu"
import { PourquoiLerna } from "@/components/pourquoi-lerna"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Notre approche : des formations co-construites avec le terrain | LEARNA",
  description:
    "Nos formations naissent de besoins réels, développées avec des professionnels du travail social. Une démarche ancrée dans la pratique, du besoin identifié à la formation disponible pour toute l'équipe.",
}

export default function ModelePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <CommentConcu />
      <PourquoiLerna />
      <section className="bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
            Envie de découvrir nos formations&nbsp;?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Toutes co-construites avec des professionnel·les du terrain.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/formations"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1B2D5B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1B2D5B]/90"
            >
              Voir les formations →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-[#1B2D5B] px-6 py-3 text-sm font-semibold text-[#1B2D5B] transition-colors hover:bg-[#1B2D5B]/10"
            >
              Demander une démonstration
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
