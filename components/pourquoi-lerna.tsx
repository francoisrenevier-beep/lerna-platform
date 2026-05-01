import { Users, Zap, TrendingUp, RefreshCw } from "lucide-react"

const cartes = [
  {
    icon: Users,
    titre: "Ancré dans le terrain",
    texte:
      "Chaque formation est développée avec des experts et professionnels du travail social.",
  },
  {
    icon: Zap,
    titre: "Format adapté aux nouvelles générations",
    texte:
      "Le e-learning est le format attendu par les nouveaux collaborateurs. LERNA s'y adapte pleinement.",
  },
  {
    icon: TrendingUp,
    titre: "Parcours progressifs",
    texte:
      "Les formations se complètent et s'approfondissent selon une logique de parcours structurée.",
  },
  {
    icon: RefreshCw,
    titre: "Développement continu",
    texte:
      "De nouvelles formations sont ajoutées régulièrement selon les besoins identifiés sur le terrain.",
  },
]

export function PourquoiLerna() {
  return (
    <section id="institutions" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">
            Pourquoi LERNA&nbsp;?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Une plateforme conçue pour les réalités du secteur social
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {cartes.map((carte, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3DBFA0]/15">
                <carte.icon className="h-6 w-6 text-[#3DBFA0]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1B2D5B]">{carte.titre}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{carte.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
