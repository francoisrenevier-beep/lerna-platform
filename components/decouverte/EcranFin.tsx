"use client"

import Link from "next/link"

import { PartagerModule } from "@/components/decouverte/PartagerModule"
import { mesure } from "@/lib/decouverte/analytics"
import type { ModuleLibre, QuestionQuiz } from "@/lib/decouverte/types"

/**
 * Écran de fin du module libre.
 *
 * L'ordre est le fond du sujet : ce que le visiteur a appris d'abord, ce que la
 * licence ajoute ensuite, les appels à l'action en dernier. Rien de commercial
 * ne s'interpose avant le résultat.
 *
 * Aucune adresse n'est demandée, à aucun moment. Un module isolé ne donne pas
 * lieu à une attestation, et il n'y avait pas d'autre motif de collecte qui
 * tienne : le visiteur repart avec ce qu'il est venu chercher, sans contrepartie.
 */
export function EcranFin({
  module: moduleLibre,
  score,
  total,
  detail,
  onRecommencer,
}: {
  module: ModuleLibre
  score: number
  total: number
  detail: { questions: QuestionQuiz[]; reponses: number[] } | null
  onRecommencer: () => void
}) {
  return (
    <section aria-labelledby="fin-titre" className="mb-8">
      {/* 1 — Le résultat, et ce que le module a couvert. */}
      <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8">
        <div className="mb-8 text-center">
          <p
            className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#3DBFA0] text-3xl font-bold text-white"
            aria-hidden="true"
          >
            {score}/{total}
          </p>
          <h2 id="fin-titre" className="mb-2 text-xl font-bold text-[#1B2D5B]">
            Module terminé
          </h2>
          <p className="text-sm text-gray-500">
            Vous avez répondu correctement à {score} question{score > 1 ? "s" : ""} sur {total}.
          </p>
        </div>

        <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-[#3DBFA0]">
          Ce que ce module a couvert
        </h3>
        <ul className="mb-6 space-y-2">
          {moduleLibre.acquis.map((acquis, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#3DBFA0]"
              />
              <span className="text-sm leading-relaxed text-gray-700">{acquis}</span>
            </li>
          ))}
        </ul>

        {detail && (
          <details className="rounded-lg border border-gray-200 p-4">
            <summary className="cursor-pointer text-sm font-medium text-[#1B2D5B]">
              Revoir le détail de mes réponses
            </summary>
            <div className="mt-4 space-y-3">
              {detail.questions.map((question, i) => {
                const juste = detail.reponses[i] === question.bonneReponse
                return (
                  <div
                    key={i}
                    className={`rounded-lg p-4 ${
                      juste
                        ? "border border-[#3DBFA0]/30 bg-[#3DBFA0]/10"
                        : "border border-red-200 bg-red-50"
                    }`}
                  >
                    <p className="mb-1 text-sm font-medium text-[#1B2D5B]">{question.question}</p>
                    <p className="mb-1 text-xs text-gray-500">
                      Votre réponse :{" "}
                      {detail.reponses[i] >= 0
                        ? question.reponses[detail.reponses[i]]
                        : "sans réponse"}
                    </p>
                    {!juste && (
                      <p className="text-xs font-medium text-[#3DBFA0]">
                        Bonne réponse : {question.reponses[question.bonneReponse]}
                      </p>
                    )}
                    <p className="mt-2 text-xs italic text-gray-500">{question.explication}</p>
                  </div>
                )
              })}
            </div>
          </details>
        )}

        <button
          type="button"
          onClick={onRecommencer}
          className="mt-4 rounded-lg px-2 py-1 text-sm font-medium text-gray-500 transition-colors hover:text-[#1B2D5B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3DBFA0]"
        >
          Refaire le questionnaire
        </button>
      </div>

      {/* 2 — Ce que la licence ajoute, et qui n'est pas dans cette version. */}
      <div className="mt-6 rounded-xl bg-[#1B2D5B] p-5 text-white sm:p-8">
        <h3 className="text-lg font-bold">Ce que vous venez de voir est la version libre</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          Elle est complète : ni extrait, ni démonstration. Trois choses n&apos;y sont pourtant
          pas, et ce sont elles que la licence ajoute.
        </p>
        <dl className="mt-6 space-y-5">
          {moduleLibre.licenceAjoute.map((element, i) => (
            <div key={i}>
              <dt className="text-sm font-semibold text-[#3DBFA0]">{element.titre}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-white/70">{element.texte}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* 3 — Les appels à l'action. */}
      <div className="mt-6 space-y-6">
        <div>
          <h3 className="mb-1 text-base font-semibold text-[#1B2D5B]">
            Envoyer ce module à mes collègues
          </h3>
          <p className="mb-3 text-sm text-gray-600">
            Il s&apos;ouvre sans compte : le lien suffit, y compris pour les équipes de nuit,
            l&apos;intendance et l&apos;administratif.
          </p>
          <PartagerModule module={moduleLibre} />
        </div>

        <div>
          <h3 className="mb-1 text-base font-semibold text-[#1B2D5B]">
            Échanger sur les besoins de mon institution
          </h3>
          <p className="mb-3 text-sm text-gray-600">
            Trente minutes pour parler de vos équipes, de vos priorités de formation et de ce
            qu&apos;une licence changerait chez vous.
          </p>
          <Link
            href={`/contact?sujet=${moduleLibre.contactSujet}`}
            onClick={() => mesure.contact(moduleLibre.slug)}
            className="inline-block rounded-lg bg-[#3DBFA0] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2ea88b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3DBFA0]"
          >
            Prendre contact →
          </Link>
        </div>
      </div>

    </section>
  )
}
