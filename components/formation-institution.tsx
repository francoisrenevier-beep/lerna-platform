import Link from "next/link"
import { DoorOpen, Equal, ArrowUpRight } from "lucide-react"
import { formationInstitution } from "@/content/site"

// Même gabarit de cartes en trois colonnes que BlendedLearning : trois facettes
// complémentaires d'une même prestation, sans pastille numérotée. Le fond clair
// de la section précédente impose ici bg-background pour garder l'alternance.
const icones = [DoorOpen, Equal, ArrowUpRight]

export function FormationInstitution() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">
            {formationInstitution.titre}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            {formationInstitution.introduction}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {formationInstitution.colonnes.map((colonne, index) => {
            const Icon = icones[index]
            return (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1B2D5B]/10">
                  <Icon className="h-7 w-7 text-[#1B2D5B]" />
                </div>

                <h3 className="text-balance text-lg font-semibold text-[#1B2D5B]">
                  {colonne.titre}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {colonne.texte}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={formationInstitution.cta.href}
            className="inline-flex items-center gap-1.5 text-base font-medium text-[#3DBFA0] transition-colors hover:text-[#2ea88b]"
          >
            {formationInstitution.cta.libelle}
          </Link>
        </div>
      </div>
    </section>
  )
}
