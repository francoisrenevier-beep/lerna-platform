import { LayoutDashboard, FileText, Users2, Shield } from "lucide-react"

const benefices = [
  {
    icon: LayoutDashboard,
    titre: "Une vue d'ensemble sur vos équipes",
    texte:
      "Votre espace institution vous donne une vision claire de la participation de vos collaborateurs, par formation, par secteur, par période.",
  },
  {
    icon: FileText,
    titre: "Des attestations générées automatiquement",
    texte:
      "Chaque formation suivie donne lieu à une attestation nominative, disponible immédiatement. Utile pour vos démarches qualité et vos dossiers de formation.",
  },
  {
    icon: Users2,
    titre: "Une base commune pour toute l'équipe",
    texte:
      "Y compris le personnel de nuit, l'intendance et le personnel administratif. LEARNA touche les collaborateurs qui restent habituellement à l'écart des plans de formation.",
  },
  {
    icon: Shield,
    titre: "Une preuve concrète à portée de main",
    texte:
      "Montrez que vos équipes partagent un socle commun de réflexion, un appui tangible pour vos bilans, vos accréditations et votre pilotage interne.",
  },
]

export function DirectionBloc() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#3DBFA0]/15 px-4 py-1.5 text-sm font-semibold text-[#3DBFA0]">
            Pour les directions et coordinateur·trices
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">
            Suivez, attestez, pilotez
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            LEARNA ne se limite pas à la formation individuelle. Il vous donne les outils pour
            démontrer que vos équipes partagent une base commune.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {benefices.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3DBFA0]/15">
                <b.icon className="h-6 w-6 text-[#3DBFA0]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1B2D5B]">{b.titre}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{b.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
