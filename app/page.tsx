import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { DefiSection } from "@/components/defi-section"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <DefiSection />
      <HowItWorks />

      {/* Formations — section prose */}
      <section className="bg-[#F8FAFC] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">
              Des formations ancrées dans le travail social
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Nos formations explorent les réalités du travail social, de l&apos;accompagnement
              du handicap à l&apos;éthique de l&apos;intervention, et bien au-delà. Le catalogue
              s&apos;enrichit régulièrement, au fil des besoins identifiés sur le terrain. Chaque
              formation part d&apos;une question concrète et se construit avec un·e
              professionnel·le qui exerce dans ce champ, pour rester au plus près de la pratique.
            </p>
            <Link
              href="/formations-ressources"
              className="mt-6 inline-flex items-center gap-1.5 text-base font-medium text-[#3DBFA0] transition-colors hover:text-[#2ea88b]"
            >
              Découvrir l&apos;ensemble des formations →
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Teaser licences */}
      <section className="bg-[#1B2D5B] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Une licence pour tous vos collaborateurs
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Tarif annuel tout inclus — accès illimité pour l&apos;ensemble de vos collaborateurs,
            nouvelles formations comprises.
          </p>
          <Link
            href="/tarifs"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#3DBFA0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3DBFA0]/90"
          >
            Voir les tarifs →
          </Link>
        </div>
      </section>

      {/* CTA contact */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
            Vous souhaitez en savoir plus&nbsp;?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez LEARNA en 30 minutes avec l&apos;un de nos responsables.
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
