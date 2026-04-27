import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "LERNA a transformé notre approche de la formation continue. Nos équipes peuvent se former à leur rythme, sans perturber l'accompagnement des résidents.",
    author: "Marie Dupont",
    role: "Directrice",
    institution: "Fondation Arc-en-Ciel",
  },
  {
    quote:
      "Les contenus sont parfaitement adaptés aux réalités du terrain suisse. Une ressource précieuse pour nos éducateurs spécialisés.",
    author: "Jean-Pierre Muller",
    role: "Responsable RH",
    institution: "Institution Les Oliviers",
  },
  {
    quote:
      "La flexibilité de la plateforme et la qualité des formations nous ont convaincus. Un investissement qui profite à toute notre équipe.",
    author: "Sophie Reymond",
    role: "Coordinatrice pédagogique",
    institution: "Centre Espoir",
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ils font confiance à LERNA
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Des institutions suisses qui ont choisi LERNA pour la formation de
            leurs équipes
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-8"
            >
              {/* Quote icon */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                <Quote className="h-5 w-5 text-accent" />
              </div>

              {/* Quote text */}
              <p className="text-balance leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 border-t border-border pt-6">
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
                <div className="mt-1 text-sm font-medium text-accent">
                  {testimonial.institution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
