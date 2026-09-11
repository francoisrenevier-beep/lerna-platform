import { Clock, PenLine } from "lucide-react"
import Link from "next/link"

import { formationSignature, moduleSurMesure } from "@/content/site"

/**
 * Section « Votre formation signature » de la page /tarifs.
 *
 * Pleine largeur sur fond navy : c'est l'argument central de la page, et le
 * contraste le détache des sections tarifaires qui l'entourent.
 *
 * Deux prestations y sont distinguées, et la distinction est le sujet de la
 * section, pas un détail de mise en page :
 *
 * - l'adaptation contextuelle — « votre formation signature » — est comprise
 *   dans toute licence. Aucun montant n'est affiché à son sujet : y faire
 *   figurer un prix la ferait lire comme une option facturée. Ne jamais y
 *   réintroduire de chiffre, à l'exception de l'enveloppe de travail, qui doit
 *   au contraire rester visible ;
 * - le module entièrement sur mesure est facturé à part, et porte donc sa
 *   fourchette indicative. Elle vient de `lib/tarifs` via `content/site`.
 *
 * Confondre les deux, c'était promettre une production sans limite pour le prix
 * du socle.
 */

const etapes = [
  {
    numero: "1",
    titre: "Choix du module",
    description:
      "Vous désignez, dans le catalogue, la formation qui compte le plus pour vos équipes.",
  },
  {
    numero: "2",
    titre: "Vos éléments",
    description:
      "Vous nous transmettez vos situations, votre vocabulaire interne et vos références.",
  },
  {
    numero: "3",
    titre: "Adaptation",
    description:
      "Nous retravaillons le module : les exemples génériques laissent place aux vôtres.",
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
          Comprise dans toutes les licences
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Votre formation signature
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
          Le catalogue traite ce qui est commun au secteur. {formationSignature.definition}{" "}
          Un module qui parle de votre maison est suivi autrement qu&apos;un
          module qui parle du secteur en général.
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

        {/* L'enveloppe est annoncée, pas sous-entendue : c'est ce qui rend la
            prestation tenable d'un côté et vérifiable de l'autre. */}
        <div className="mt-10 flex items-start gap-3 rounded-xl border border-[#3DBFA0]/40 bg-[#3DBFA0]/[0.12] p-5">
          <Clock aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-[#3DBFA0]" />
          <p className="leading-relaxed text-white">
            Une adaptation par année de licence, ouverte{" "}
            {formationSignature.disponibilite}, pour une enveloppe de{" "}
            {formationSignature.enveloppe} de travail. Les premiers mois servent
            à repérer les modules qui comptent pour vos équipes.
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
            le prépare et ancre ce qui a été transmis.
          </p>
        </div>

        {/* Prestation distincte, présentée comme telle : encadré à part, titre
            qui la nomme, montant annoncé. Une institution doit pouvoir dire, en
            lisant cette page, ce qui est compris et ce qui ne l'est pas. */}
        <div className="mt-12 rounded-2xl border border-white/20 bg-white/[0.06] p-7 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Prestation distincte, facturée à part
          </p>
          <h3 className="mt-3 flex items-center gap-3 text-xl font-bold text-white">
            <PenLine aria-hidden className="h-5 w-5 shrink-0 text-[#3DBFA0]" />
            Un module entièrement sur mesure
          </h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-white/75">
            {moduleSurMesure.definition} C&apos;est un travail d&apos;écriture
            complet, sans commune mesure avec une adaptation : il fait
            l&apos;objet d&apos;un forfait selon l&apos;ampleur, arrêté sur
            devis. Comptez {moduleSurMesure.delaiBorne}.
          </p>

          <dl className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl bg-[#1B2D5B]/40 p-5">
              <dt className="text-sm text-white/60">Fourchette indicative</dt>
              <dd className="mt-1.5 text-lg font-bold text-white tabular-nums">
                {moduleSurMesure.fourchette}
              </dd>
            </div>
            <div className="rounded-xl bg-[#1B2D5B]/40 p-5">
              <dt className="text-sm text-white/60">Compris sans supplément</dt>
              <dd className="mt-1.5 leading-relaxed text-white">
                {moduleSurMesure.inclusionSansSupplement}
              </dd>
            </div>
          </dl>

          <Link
            href="/contact?sujet=formation-institution"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#3DBFA0] transition-colors hover:text-white"
          >
            Nous parler de ce sujet →
          </Link>
        </div>
      </div>
    </section>
  )
}
