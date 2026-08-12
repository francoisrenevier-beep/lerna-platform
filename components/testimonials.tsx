import { Quote } from "lucide-react"
import { temoignages } from "@/content/site"

// Les témoignages sont éditables dans content/site.ts.
// Un emplacement dont le champ `quote` est vide n'est pas rendu : cela permet
// de réserver une place (témoignage de direction) sans afficher de carte vide.
const actifs = temoignages.filter((t) => t.quote.trim() !== "")

export function Testimonials() {
  if (actifs.length === 0) return null

  // La grille reste équilibrée en trois comme en quatre témoignages :
  // 4 → deux rangées de deux ; 3 (ou toute autre valeur) → trois colonnes.
  const grille =
    actifs.length % 4 === 0
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-2 lg:grid-cols-3"

  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">
            Ce qu&apos;en disent les collaborateurs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Des professionnels du travail social qui ont suivi une formation LEARNA
          </p>
        </div>

        <div className={`mt-16 grid gap-8 ${grille}`}>
          {actifs.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#3DBFA0]/20">
                <Quote className="h-5 w-5 text-[#3DBFA0]" />
              </div>

              <p className="flex-1 text-balance leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-border pt-6">
                <div className="font-semibold text-[#1B2D5B]">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.typeInstitution
                    ? `${testimonial.role} — ${testimonial.typeInstitution}`
                    : testimonial.role}
                </div>
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
