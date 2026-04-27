import { Building2, Users, Award } from "lucide-react"

const steps = [
  {
    icon: Building2,
    number: "1",
    title: "Votre institution souscrit une licence annuelle",
    description:
      "Un abonnement simple qui donne accès à toutes les formations pour votre équipe.",
  },
  {
    icon: Users,
    number: "2",
    title: "Vos collaborateurs accèdent librement à toutes les formations",
    description:
      "Chaque membre de votre équipe peut se former selon ses besoins et disponibilités.",
  },
  {
    icon: Award,
    number: "3",
    title: "Chacun progresse à son rythme et obtient ses attestations",
    description:
      "Des parcours flexibles avec des attestations de complétion pour valoriser les acquis.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Comment ça fonctionne ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Un processus simple pour former toute votre équipe
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              {/* Step number */}
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <step.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-balance text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
