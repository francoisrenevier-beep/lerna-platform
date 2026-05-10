import { XCircle, CheckCircle } from "lucide-react"

const problemes = [
  "Turnover élevé — les collaborateurs quittent avant d'avoir mis en pratique leur formation",
  "Libérer un professionnel pour une journée de formation, c'est le remplacer et désorganiser l'équipe",
  "Les nouveaux collaborateurs mettent du temps à s'intégrer à la culture et aux pratiques de l'institution",
]

const solutions = [
  "Des formations courtes suivies à son rythme, sans quitter son poste",
  "Un socle commun de réflexion pour toute l'équipe, y compris les nouveaux",
  "Une intégration rapide et autonome des nouveaux collaborateurs",
]

export function DefiSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Colonne gauche — problèmes */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">
              Former ses équipes : un enjeu majeur, des contraintes bien réelles
            </h2>
            <ul className="mt-8 space-y-5">
              {problemes.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" />
                  <span className="text-[#1B2D5B]/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne droite — solutions */}
          <div className="rounded-2xl bg-[#3DBFA0] p-8 text-white shadow-lg">
            <h3 className="text-xl font-bold">Learna répond à ces défis</h3>
            <ul className="mt-6 space-y-5">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-white/80" />
                  <span className="text-white/90">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
