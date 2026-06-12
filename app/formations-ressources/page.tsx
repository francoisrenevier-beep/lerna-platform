import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookOpen, FileText, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Formations & Ressources — LEARNA",
  description:
    "Découvrez l'ensemble des formations et ressources LEARNA pour les professionnels du travail social en Suisse romande.",
}

export default function FormationsRessourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="bg-[#1B2D5B] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Formations &amp; Ressources
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Des formations ancrées dans les réalités du travail social, et une bibliothèque de
            ressources pratiques pour aller plus loin.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">

            {/* Formations */}
            <div className="rounded-2xl border border-border bg-card p-8 flex flex-col">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3DBFA0]/15">
                <BookOpen className="h-6 w-6 text-[#3DBFA0]" />
              </div>
              <h2 className="text-xl font-bold text-[#1B2D5B]">Formations</h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                Des parcours progressifs sur les thématiques du handicap, de l&apos;éthique,
                de l&apos;accompagnement et du droit. Conçus avec des professionnel·les du terrain,
                accessibles à tout moment, sur tous les supports.
              </p>
              <div className="mt-6 rounded-xl bg-[#3DBFA0]/10 px-5 py-4 text-center">
                <p className="text-sm font-semibold text-[#3DBFA0]">
                  Catalogue complet bientôt accessible ici
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Connectez-vous pour accéder à l&apos;ensemble des formations
                </p>
              </div>
              <Link
                href="/connexion"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-[#3DBFA0] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3DBFA0]/90"
              >
                Accéder à mes formations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Ressources */}
            <div className="rounded-2xl border border-border bg-card p-8 flex flex-col">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B2D5B]/10">
                <FileText className="h-6 w-6 text-[#1B2D5B]" />
              </div>
              <h2 className="text-xl font-bold text-[#1B2D5B]">Ressources</h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                Fiches mémo, outils terrain, références officielles et documents pratiques
                liés aux formations. Une bibliothèque structurée pour approfondir et appliquer
                directement dans la pratique.
              </p>
              <div className="mt-6 rounded-xl bg-[#1B2D5B]/5 px-5 py-4 text-center">
                <p className="text-sm font-semibold text-[#1B2D5B]">
                  Bibliothèque complète bientôt accessible ici
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Connectez-vous pour accéder à l&apos;ensemble des ressources
                </p>
              </div>
              <Link
                href="/connexion"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-[#1B2D5B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1B2D5B]/90"
              >
                Accéder à mes ressources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* CTA institution */}
          <div className="mt-12 rounded-2xl bg-[#1B2D5B] p-8 text-center">
            <p className="text-base font-semibold text-white">
              Votre institution n&apos;a pas encore de licence&nbsp;?
            </p>
            <p className="mt-2 text-sm text-white/70">
              Demandez une démonstration — nous vous présentons la plateforme en 30 minutes.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#3DBFA0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3DBFA0]/90"
            >
              Demander une démonstration →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
