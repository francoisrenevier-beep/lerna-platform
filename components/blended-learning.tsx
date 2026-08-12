import { Compass, Repeat, MessagesSquare } from "lucide-react"
import { blendedLearning } from "@/content/site"

// Même pattern de cartes en trois colonnes que HowItWorks / CommentConcu,
// sans la pastille numérotée : les trois temps sont complémentaires, pas
// successifs dans un processus d'achat.
const icones = [Compass, Repeat, MessagesSquare]

export function BlendedLearning() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">
            {blendedLearning.titre}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {blendedLearning.introduction}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {blendedLearning.colonnes.map((colonne, index) => {
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
      </div>
    </section>
  )
}
