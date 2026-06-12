import { Quote } from "lucide-react"

// ─── Témoignages réels ────────────────────────────────────────────────────────
// Ajouter ici d'autres témoignages au fil des retours :
// { quote: "…", author: "Prénom N.", role: "Rôle", institution: "Institution" }

const testimonials = [
  {
    quote:
      "Je travaille depuis quinze ans et j'ai quand même appris des choses. Le découpage en niveaux m'a permis d'aller à mon rythme sans me sentir perdue.",
    author: "Nathalie C.",
    role: "Éducatrice",
    institution: "",
  },
  {
    quote:
      "J'ai suivi une formation en trois fois, sans perdre le fil. Le découpage en sections aide à reprendre là où on s'est arrêté.",
    author: "Patrick",
    role: "Assistant socio-éducatif",
    institution: "",
  },
  {
    quote:
      "Pouvoir avancer quand je veux, sans date imposée, ça correspond à mon emploi du temps en horaires décalés.",
    author: "Samira",
    role: "Veilleuse",
    institution: "",
  },
]

export function Testimonials() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">
            Ce qu'en disent les collaborateurs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Des professionnels du travail social qui ont suivi une formation LEARNA
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#3DBFA0]/20">
                <Quote className="h-5 w-5 text-[#3DBFA0]" />
              </div>

              <p className="text-balance leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-border pt-6">
                <div className="font-semibold text-[#1B2D5B]">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                {testimonial.institution && (
                  <div className="mt-1 text-sm font-medium text-[#3DBFA0]">
                    {testimonial.institution}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
