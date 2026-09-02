"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { BandeauProgression } from "@/components/decouverte/BandeauProgression"
import { HeroDecouverte } from "@/components/decouverte/HeroDecouverte"
import { RenduBloc } from "@/components/decouverte/RenduBloc"
import { SommaireModule } from "@/components/decouverte/SommaireModule"
import { mesure } from "@/lib/decouverte/analytics"
import {
  ecouterAutresOnglets,
  ecrire,
  etatInitial,
  jalonsAEmettre,
  lire,
  pourcentage,
  type EtatProgression,
} from "@/lib/decouverte/progression"
import type { ModuleLibre } from "@/lib/decouverte/types"

/**
 * Lecteur du module en accès libre.
 *
 * L'état de départ est toujours `etatInitial()` : le localStorage n'est lu
 * qu'après le montage, sans quoi le rendu client ne correspondrait pas au HTML
 * envoyé par le serveur.
 *
 * Une section compte pour atteinte lorsqu'elle entre dans les 45 % supérieurs
 * de l'écran — donc après un vrai défilement, l'en-tête occupant tout ce qui
 * précède. C'est ce qui distingue « arriver sur la page » de « commencer le
 * module ».
 */
export function Lecteur({ module: moduleLibre }: { module: ModuleLibre }) {
  const { slug, sections } = moduleLibre
  const total = sections.length

  const [etat, setEtat] = useState<EtatProgression>(etatInitial)
  const [sectionActive, setSectionActive] = useState(0)
  const [stockageDisponible, setStockageDisponible] = useState(true)
  const [charge, setCharge] = useState(false)

  const refsSections = useRef<(HTMLElement | null)[]>([])
  // Miroir de `etat` lisible immédiatement : plusieurs sections peuvent être
  // franchies avant que React n'ait rendu la mise à jour précédente, et un
  // jalon émis deux fois fausserait la mesure.
  const etatRef = useRef<EtatProgression>(etat)

  const appliquer = useCallback((suivant: EtatProgression) => {
    etatRef.current = suivant
    setEtat(suivant)
    setStockageDisponible(ecrire(slug, suivant))
  }, [slug])

  const franchir = useCallback(
    (index: number) => {
      const precedent = etatRef.current
      if (index <= precedent.sectionMax) return

      const atteint = pourcentage(index, total)
      const nouveauxJalons = jalonsAEmettre(atteint, precedent.jalons)

      if (!precedent.demarre) mesure.demarrage(slug)
      nouveauxJalons.forEach((jalon) => mesure.progression(slug, jalon))

      appliquer({
        ...precedent,
        sectionMax: index,
        demarre: true,
        jalons: [...precedent.jalons, ...nouveauxJalons],
      })
    },
    [appliquer, slug, total],
  )

  // Reprise de la progression et arrivée sur la page.
  useEffect(() => {
    const enregistre = lire(slug)
    etatRef.current = enregistre
    setEtat(enregistre)
    setCharge(true)
    // Réécrire l'état tel quel sert de test d'écriture : c'est ce qui permet de
    // ne pas promettre une reprise que le navigateur ne rendra pas possible.
    setStockageDisponible(ecrire(slug, enregistre))
    mesure.pageVue(slug)
  }, [slug])

  // Un même module lu dans deux onglets : on retient toujours l'avancement le
  // plus grand des deux, jamais le plus récent, pour qu'un onglet resté ouvert
  // sur l'introduction ne fasse pas reculer la progression.
  useEffect(
    () =>
      ecouterAutresOnglets(slug, (distant) => {
        const local = etatRef.current
        const fusion: EtatProgression = {
          ...local,
          sectionMax: Math.max(local.sectionMax, distant.sectionMax),
          jalons: Array.from(new Set([...local.jalons, ...distant.jalons])),
          demarre: local.demarre || distant.demarre,
          quiz: distant.quiz ?? local.quiz,
        }
        etatRef.current = fusion
        setEtat(fusion)
      }),
    [slug],
  )

  useEffect(() => {
    const elements = refsSections.current.filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const visibles = new Set<number>()
    const observateur = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((entree) => {
          const index = Number((entree.target as HTMLElement).dataset.index)
          if (entree.isIntersecting) visibles.add(index)
          else visibles.delete(index)
        })
        if (visibles.size === 0) return
        const plusAvancee = Math.max(...visibles)
        setSectionActive(plusAvancee)
        franchir(plusAvancee)
      },
      { rootMargin: "0px 0px -55% 0px", threshold: 0 },
    )

    elements.forEach((el) => observateur.observe(el))
    return () => observateur.disconnect()
  }, [franchir])

  const reprendre = useCallback(() => {
    refsSections.current[etatRef.current.sectionMax]?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const pourcentageLu = pourcentage(etat.sectionMax, total)
  // La reprise ne s'affiche que si elle mène quelque part : plus bas que la
  // section sous les yeux du visiteur.
  const peutReprendre = charge && etat.sectionMax > 0 && sectionActive < etat.sectionMax

  return (
    <>
      <HeroDecouverte hero={moduleLibre.hero} dureeMinutes={moduleLibre.dureeMinutes} />

      <BandeauProgression
        pourcentage={pourcentageLu}
        peutReprendre={peutReprendre}
        onReprendre={reprendre}
        stockageDisponible={stockageDisponible}
      />

      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-12">
        <SommaireModule
          sections={sections}
          sectionActive={sectionActive}
          sectionMax={etat.sectionMax}
        />

        {sections.map((section, i) => (
          <section
            key={section.id}
            id={section.id}
            data-index={i}
            ref={(el) => {
              refsSections.current[i] = el
            }}
            aria-labelledby={`${section.id}-titre`}
            className="mb-12 scroll-mt-48"
          >
            {section.eyebrow && (
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[#3DBFA0]">
                {section.eyebrow}
              </p>
            )}
            <h2
              id={`${section.id}-titre`}
              className="mb-6 text-2xl font-bold leading-tight text-[#1B2D5B]"
            >
              {section.titre}
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-700">
              {section.blocs.map((bloc, j) => (
                <RenduBloc key={j} bloc={bloc} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
