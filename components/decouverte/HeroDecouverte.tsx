import type { HeroLibre } from "@/lib/decouverte/types"

/**
 * En-tête du module libre.
 *
 * Reprend la composition de components/module/HeroModule.tsx — fond navy,
 * cercles décoratifs, surtitre, titre en deux temps, durée et niveau — mais en
 * mobile d'abord : la version plateforme impose `px-16 py-20` et un titre en
 * `text-4xl`, ce qui ne laisse que 232 px de texte sur un écran de 360.
 *
 * S'y ajoute la seule chose que la plateforme n'a pas à dire : que ce module
 * s'ouvre sans compte et sans formulaire. C'est l'argument de la page, il se
 * lit avant le premier paragraphe.
 */
export function HeroDecouverte({ hero, dureeMinutes }: { hero: HeroLibre; dureeMinutes: number }) {
  return (
    <header className="relative overflow-hidden bg-[#1B2D5B] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-16 lg:py-20">
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-24 h-56 w-56 translate-y-1/2 rounded-full bg-[#3DBFA0]/20 sm:right-48"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="mb-5 inline-flex items-center rounded-full bg-[#3DBFA0] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
          Module complet en accès libre
        </p>

        <p className="mb-5 text-xs font-medium uppercase tracking-widest text-white/50">
          Module {hero.numero} · {hero.categorie}
        </p>

        <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl">
          {hero.titre}
          {hero.titrePart2 && (
            <>
              <br />
              <em className="font-normal italic text-white/70">{hero.titrePart2}</em>
            </>
          )}
        </h1>

        <p className="mb-8 max-w-xl text-base font-light leading-relaxed text-white/70 sm:text-lg">
          {hero.sousTitre}
        </p>

        <dl className="flex flex-wrap gap-x-8 gap-y-4">
          <div>
            <dt className="mb-1 text-xs uppercase tracking-widest text-white/40">Durée</dt>
            <dd className="text-sm font-medium text-white">{hero.duree}</dd>
          </div>
          <div>
            <dt className="mb-1 text-xs uppercase tracking-widest text-white/40">Niveau</dt>
            <dd className="text-sm font-medium text-white">{hero.niveau}</dd>
          </div>
          <div>
            <dt className="mb-1 text-xs uppercase tracking-widest text-white/40">Accès</dt>
            <dd className="text-sm font-medium text-white">Sans compte ni formulaire</dd>
          </div>
        </dl>

        <p className="sr-only">
          Ce module dure environ {dureeMinutes} minutes et se termine par un questionnaire corrigé
          immédiatement.
        </p>
      </div>
    </header>
  )
}
