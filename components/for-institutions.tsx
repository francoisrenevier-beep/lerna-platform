import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const benefits = [
  "Accès illimité à toutes les formations",
  "Suivi de progression de chaque collaborateur",
  "Attestations de complétion personnalisées",
  "Mises à jour incluses sans frais supplémentaires",
  "Support dédié pour votre institution",
]

const features = [
  "Accès pour tous vos collaborateurs",
  "Formations illimitées",
  "Tableau de bord administrateur",
  "Attestations téléchargeables",
  "Support prioritaire",
  "Mises à jour incluses",
]

export function ForInstitutions() {
  return (
    <section id="institutions" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Benefits */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Une licence pour toute votre équipe
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Simplifiez la formation continue de vos collaborateurs avec un
              abonnement institutionnel tout compris.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - Pricing card */}
          <div id="tarifs" className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl border-2 border-accent bg-card p-8 shadow-xl">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">
                  Licence annuelle institution
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">
                    Tarif sur demande
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Adapté à la taille de votre équipe
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="mt-8 w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
