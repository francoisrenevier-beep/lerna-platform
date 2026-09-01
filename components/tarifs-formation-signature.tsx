import { Clock } from "lucide-react"

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
    numero: "1",
    titre: "Cadrage",
    description:
      "Un entretien avec la direction : le sujet, le public, ce que la formation doit changer sur le terrain.",
  },
  {
    numero: "2",
    titre: "Conception",
    description:
      "Nous rédigeons la formation à partir de vos documents et des échanges avec vos équipes.",
  },
  {
    numero: "3",
    titre: "Validation",
    description: "Vous relisez, vous corrigez, vous validez.",
  },
  {
    numero: "4",
    titre: "Mise en ligne",
    description:
      "Publication sur votre espace, accès réservé à vos collaborateurs, attestation individuelle.",
  },
]

const sujets = [
  "Accueil des nouveaux collaborateurs",
  "Projet institutionnel",
  "Une procédure interne",
  "Remplaçants et intérimaires",
  "La population que vous accompagnez",
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
        <p className="text-sm font-semibold uppercase tracking-wide text-[#3DBFA0]">
          Ce que le catalogue ne peut pas transmettre
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Votre formation signature
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
          Le catalogue traite ce qui est commun au secteur. Votre projet
          institutionnel, vos procédures, votre façon d&apos;accueillir un
          nouveau collaborateur n&apos;appartiennent qu&apos;à vous, et aucun
          catalogue ne peut les couvrir. Chaque année, votre licence finance une
          formation sur ce terrain-là.
        </p>

        {/* Les quatre étapes, en frise. Le trait de liaison n'apparaît qu'à
            partir de lg, où les cartes sont réellement alignées. */}
        <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-4 hidden h-px bg-white/15 lg:block"
          />
          {etapes.map((etape) => (
            <li key={etape.numero} className="relative">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3DBFA0] text-sm font-bold text-[#1B2D5B] ring-8 ring-[#1B2D5B]">
                {etape.numero}
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">
                {etape.titre}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {etape.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex items-start gap-3 rounded-xl border border-[#3DBFA0]/40 bg-[#3DBFA0]/[0.12] p-5">
          <Clock aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-[#3DBFA0]" />
          <p className="leading-relaxed text-white">
            Comptez {formationSignature.delaiBorne}. Une formation signature se
            construit avec le terrain, pas contre le calendrier.
          </p>
        </div>

        <div className="mt-14 border-t border-white/15 pt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#3DBFA0]">
            Des sujets possibles
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {sujets.map((sujet) => (
              <li
                key={sujet}
                className="rounded-full border border-white/20 bg-white/[0.07] px-4 py-2 text-sm text-white/85"
              >
                {sujet}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-3xl leading-relaxed text-white/70">
            Elle reste dans le champ social, relationnel et éthique : ni contenu
            clinique, ni avis juridique. Elle ne remplace pas le présentiel, elle
            le prépare et ancre ce qui a été transmis. Une par an est comprise
            dans la licence ; les suivantes sont réalisées sur mandat.
          </p>
        </div>
      </div>
    </section>
  )
}
