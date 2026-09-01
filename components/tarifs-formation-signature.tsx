import { MessagesSquare, PenLine, CheckCheck, MonitorPlay, Clock } from "lucide-react"

import { formationSignature } from "@/content/site"

/**
 * Section « Votre formation signature » de la page /tarifs.
 *
 * Pleine largeur sur fond navy : c'est l'argument central de la page, et le
 * contraste le détache des sections tarifaires qui l'entourent.
 *
 * Aucun montant n'est affiché ici, volontairement. La formation signature est
 * comprise dans la licence ; y faire figurer un prix la ferait lire comme une
 * option facturée à part. Ne jamais y réintroduire de chiffre.
 */

const etapes = [
  {
    icon: MessagesSquare,
    numero: "1",
    titre: "Cadrage",
    description:
      "Un entretien avec la direction : le sujet, le public visé, ce que la formation doit changer sur le terrain. Le format est défini à ce moment-là, selon le sujet et la réalité de votre institution.",
  },
  {
    icon: PenLine,
    numero: "2",
    titre: "Conception",
    description:
      "LEARNA rédige la formation à partir de vos documents et des échanges avec le terrain.",
  },
  {
    icon: CheckCheck,
    numero: "3",
    titre: "Validation",
    description: "Vous relisez, vous corrigez, vous validez.",
  },
  {
    icon: MonitorPlay,
    numero: "4",
    titre: "Mise en ligne",
    description:
      "Publication sur votre espace, accès réservé à vos collaborateurs, attestation de suivi individuelle.",
  },
]

const sujets = [
  "L'accueil et l'intégration des nouveaux collaborateurs",
  "Le projet institutionnel traduit en situations concrètes du quotidien",
  "Une procédure interne : transmissions, signalement, gestion des situations difficiles",
  "L'intégration des remplaçants et des intérimaires",
  "Un thème lié à la population que vous accompagnez",
]

export function TarifsFormationSignature() {
  return (
    <section className="relative overflow-hidden bg-[#1B2D5B] py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-[#3DBFA0]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[-12%] h-96 w-96 rounded-full bg-[#3DBFA0]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Le manque que la formation signature vient combler, avant de la nommer */}
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#3DBFA0]">
            Ce que le catalogue ne peut pas transmettre
          </p>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/75">
            <p>
              Le catalogue LEARNA transmet ce qui est commun au secteur&nbsp;: le
              vieillissement, la protection de l&apos;adulte, l&apos;éthique, la
              collaboration avec les familles. Ces contenus sont conçus pour
              fonctionner dans toutes les institutions.
            </p>
            <p>
              Chaque institution a pourtant ce qui n&apos;appartient qu&apos;à
              elle. Un projet institutionnel, une charte, des procédures
              internes, une manière d&apos;accueillir les nouveaux
              collaborateurs, une population accueillie avec ses particularités.
              Aucun catalogue ne peut le couvrir.
            </p>
            <p className="font-medium text-white">
              Chaque année, votre licence finance la production d&apos;une
              formation sur ce terrain-là.
            </p>
          </div>
        </div>

        {/* Titre principal de la section */}
        <div className="mt-14 border-t border-white/15 pt-14">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Votre formation signature
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/75">
            Un sujet que vous choisissez. Construite à partir de vos documents,
            avec vos équipes. Visible uniquement par vos collaborateurs.
          </p>
        </div>

        {/* Comment elle se construit — même gabarit d'étapes numérotées que les
            sections publiques, transposé sur fond sombre. */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold text-white">
            Comment elle se construit
          </h3>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {etapes.map((etape) => (
              <li
                key={etape.numero}
                className="relative rounded-2xl border border-white/15 bg-white/[0.06] p-6"
              >
                <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-[#3DBFA0] text-sm font-bold text-[#1B2D5B]">
                  {etape.numero}
                </div>

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <etape.icon aria-hidden className="h-6 w-6 text-[#3DBFA0]" />
                </div>

                <h4 className="text-balance text-base font-semibold text-white">
                  {etape.titre}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {etape.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex items-start gap-4 rounded-xl border border-[#3DBFA0]/40 bg-[#3DBFA0]/[0.12] p-5 sm:p-6">
            <Clock aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-[#3DBFA0]" />
            <p className="text-base leading-relaxed text-white">
              Comptez {formationSignature.delaiBorne}. Une formation signature se
              construit avec le terrain, pas contre le calendrier.
            </p>
          </div>
        </div>

        {/* Sujets possibles et périmètre, côte à côte au-delà du mobile */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Des sujets possibles
            </h3>
            <ul className="mt-6 space-y-3">
              {sujets.map((sujet) => (
                <li key={sujet} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3DBFA0]"
                  />
                  <span className="leading-relaxed text-white/80">{sujet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              Ce qu&apos;elle n&apos;est pas
            </h3>
            <p className="mt-6 leading-relaxed text-white/75">
              Elle reste dans le champ social, relationnel et éthique. Elle ne
              produit ni contenu clinique, ni avis juridique. Et elle ne remplace
              pas une formation en présentiel&nbsp;: elle prépare le terrain, puis
              ancre ce qui a été transmis.
            </p>
          </div>
        </div>

        <p className="mt-14 border-t border-white/15 pt-8 text-base leading-relaxed text-white/75">
          Une formation signature est incluse chaque année dans la licence. Les
          formations supplémentaires sont réalisées sur mandat.
        </p>
      </div>
    </section>
  )
}
