import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Mentions légales | LEARNA",
  description: "Mentions légales et informations juridiques de la plateforme LEARNA.",
}

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">
            Mentions légales
          </h1>
          <div className="mt-8 space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-[#1B2D5B]">Éditeur</h2>
              <p className="mt-2">
                Learna<br />
                Suisse romande<br />
                contact@learna.ch
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#1B2D5B]">Hébergement</h2>
              <p className="mt-2">
                Cette plateforme est hébergée sur des infrastructures sécurisées.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#1B2D5B]">Propriété intellectuelle</h2>
              <p className="mt-2">
                L&apos;ensemble des contenus présents sur la plateforme LEARNA (textes, formations,
                ressources) est la propriété exclusive de Learna. Toute reproduction, même partielle,
                est interdite sans autorisation préalable.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#1B2D5B]">Protection des données</h2>
              <p className="mt-2">
                Les données personnelles collectées dans le cadre de l&apos;utilisation de la
                plateforme sont traitées conformément à la loi fédérale sur la protection des données
                (LPD) et au Règlement général sur la protection des données (RGPD).
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
