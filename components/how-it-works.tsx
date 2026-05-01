import { Building2, UserPlus, BookOpen } from "lucide-react"

const steps = [
  {
    icon: Building2,
    number: "1",
    title: "Votre institution souscrit une licence annuelle",
    description:
      "Un abonnement simple et tout inclus qui donne accès à l'ensemble des formations pour votre équipe.",
  },
  {
    icon: UserPlus,
    number: "2",
    title: "Vos collaborateurs s'inscrivent avec le code institutionnel",
    description:
      "Chaque membre de l'équipe crée son compte en quelques secondes grâce au code fourni par l'institution.",
  },
  {
    icon: BookOpen,
    number: "3",
    title: "Chacun accède aux formations et progresse à son rythme",
    description:
      "Des parcours flexibles, accessibles en tout temps, pour se former sans perturber l'organisation du service.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">
            Comment ça fonctionne&nbsp;?
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
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-[#3DBFA0] text-sm font-bold text-white">
                {step.number}
              </div>

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1B2D5B]/10">
                <step.icon className="h-7 w-7 text-[#1B2D5B]" />
              </div>

              <h3 className="text-balance text-lg font-semibold text-[#1B2D5B]">
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
