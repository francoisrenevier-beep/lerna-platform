"use client"

/**
 * Bandeau de progression, collé sous la navigation (`h-36`, d'où `top-36`).
 *
 * Il porte trois choses et rien d'autre : où en est la lecture, la possibilité
 * de reprendre où l'on s'était arrêté, et la mention — discrète, mais toujours
 * visible — que cet avancement ne quitte pas l'appareil.
 *
 * Si le stockage est indisponible (navigation privée, cookies bloqués, quota
 * atteint), la mention change plutôt que de disparaître : promettre une reprise
 * qui n'aura pas lieu serait pire que de ne rien promettre.
 */
export function BandeauProgression({
  pourcentage,
  peutReprendre,
  onReprendre,
  stockageDisponible,
}: {
  pourcentage: number
  peutReprendre: boolean
  onReprendre: () => void
  stockageDisponible: boolean
}) {
  return (
    <div className="sticky top-36 z-30 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div
        className="h-1 bg-gray-100"
        role="progressbar"
        aria-valuenow={pourcentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progression dans le module"
      >
        <div
          className="h-1 bg-[#3DBFA0] transition-[width] duration-300"
          style={{ width: `${pourcentage}%` }}
        />
      </div>

      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-2 sm:px-8">
        <p className="text-xs text-gray-500">
          <span className="font-semibold text-[#1B2D5B]">{pourcentage} %</span>{" "}
          {stockageDisponible ? (
            <>· progression enregistrée sur cet appareil</>
          ) : (
            <>· progression non enregistrée sur cet appareil</>
          )}
        </p>

        {peutReprendre && (
          <button
            type="button"
            onClick={onReprendre}
            className="rounded-lg px-2 py-1 text-xs font-semibold text-[#3DBFA0] transition-colors hover:bg-[#3DBFA0]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3DBFA0]"
          >
            Reprendre où j&apos;en étais →
          </button>
        )}
      </div>
    </div>
  )
}
