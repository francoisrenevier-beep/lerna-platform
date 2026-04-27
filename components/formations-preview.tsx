import { Heart, GraduationCap, Briefcase, ArrowRight } from "lucide-react"

const formations = [
  {
    icon: Heart,
    title: "Handicap et accompagnement",
    description:
      "Formations dédiées à l'accompagnement des personnes en situation de handicap, axées sur les pratiques inclusives et le respect de l'autonomie.",
  },
  {
    icon: GraduationCap,
    title: "Éducation spécialisée",
    description:
      "Parcours conçus pour les éducateurs spécialisés, couvrant les approches pédagogiques adaptées et l'accompagnement éducatif.",
  },
  {
    icon: Briefcase,
    title: "Pratiques professionnelles",
    description:
      "Développement des compétences transversales essentielles : communication, éthique, travail en équipe et gestion de situations complexes.",
  },
]

export function FormationsPreview() {
  return (
    <section id="formations" className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nos domaines de formation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Des parcours adaptés aux réalités du travail social en Suisse
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {formations.map((formation, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20 transition-colors group-hover:bg-accent/30">
                <formation.icon className="h-7 w-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground">
                {formation.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {formation.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
              >
                Voir les formations
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
