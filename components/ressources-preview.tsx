import { CheckSquare, StickyNote, Landmark, Star, ArrowRight, Wrench } from "lucide-react"

const CATEGORIES = [
  {
    icon: Star,
    titre: "Ressources recommandées",
    description: "Sélectionnées par nos experts pour chaque formation, ces ressources sont directement liées à votre parcours.",
    types: ["PDF", "Fiches mémo", "Outils"],
    couleur: "bg-amber-50 text-amber-600",
    href: "/ressources?section=recommandees",
  },
  {
    icon: Wrench,
    titre: "Outils terrain",
    description: "Check-lists, modèles et outils pratiques directement utilisables dans votre pratique quotidienne.",
    types: ["Check-liste", "Modèles", "Outils"],
    couleur: "bg-[#3DBFA0]/10 text-[#1B8B72]",
    href: "/ressources?section=outils",
  },
  {
    icon: StickyNote,
    titre: "Fiches mémo",
    description: "Des synthèses rapides pour mémoriser l'essentiel et retrouver les points-clés en un coup d'œil.",
    types: ["Fiche mémo", "Aide-mémoire"],
    couleur: "bg-blue-50 text-blue-600",
    href: "/ressources?section=memo",
  },
  {
    icon: Landmark,
    titre: "Ressources officielles",
    description: "Textes légaux, références théoriques et articles pour approfondir vos connaissances.",
    types: ["Officiel", "Article", "Vidéo", "Lien"],
    couleur: "bg-[#EEF2FF] text-[#3730A3]",
    href: "/ressources?section=officielles",
  },
]

export function RessourcesPreview() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">
              Bibliothèque de ressources
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Outils pratiques, fiches et références liés à vos formations
            </p>
          </div>
          <a
            href="/connexion"
            className="flex items-center gap-2 rounded-lg bg-[#3DBFA0] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2ea88b] whitespace-nowrap"
          >
            Accéder à la bibliothèque
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat, i) => (
            <a
              key={i}
              href={cat.href}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${cat.couleur}`}>
                <cat.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#1B2D5B] group-hover:text-[#3DBFA0] transition-colors">
                {cat.titre}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                {cat.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {cat.types.map(t => (
                  <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          Connectez-vous pour accéder à l'ensemble des ressources et les filtrer par domaine, type ou niveau.
        </p>
      </div>
    </section>
  )
}
