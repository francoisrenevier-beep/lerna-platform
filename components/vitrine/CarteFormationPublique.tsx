import type { FormationPublique } from "@/lib/catalogue-public"
import { BandeauDomaine, getDomaineVitrine } from "@/components/vitrine/domaines"

/**
 * Carte de formation du catalogue public.
 *
 * Server Component : aucun état, aucun hook. La carte ne connaît que le type
 * `FormationPublique` — elle ignore d'où viennent les données.
 *
 * Toute métadonnée absente est simplement omise : ni tiret, ni « — », ni
 * valeur approchée. Sur une page commerciale, une information manquante se
 * tait.
 */

function formaterDuree(minutes: number): string {
  if (minutes < 60) return `${minutes} min`
  const heures = Math.floor(minutes / 60)
  const reste = minutes % 60
  return reste > 0 ? `${heures} h ${reste}` : `${heures} h`
}

export function CarteFormationPublique({ formation }: { formation: FormationPublique }) {
  const domaine = getDomaineVitrine(formation.domaine)

  const metadonnees: string[] = []
  if (formation.nbModules !== null) {
    metadonnees.push(`${formation.nbModules} module${formation.nbModules > 1 ? "s" : ""}`)
  }
  if (formation.dureeMinutes !== null) {
    metadonnees.push(formaterDuree(formation.dureeMinutes))
  }
  metadonnees.push(...formation.niveaux)

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="h-24 w-full sm:h-28">
        <BandeauDomaine domaine={domaine?.value ?? null} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        {domaine && (
          <span className="self-start rounded-full bg-[#1B2D5B]/[0.07] px-3 py-1 text-xs font-semibold text-[#1B2D5B]">
            {domaine.label}
          </span>
        )}

        <h3 className="mt-3 text-base font-semibold leading-snug text-[#1B2D5B]">
          {formation.titre}
        </h3>

        {formation.description && (
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {formation.description}
          </p>
        )}

        {metadonnees.length > 0 && (
          <ul className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-border pt-4 text-xs text-gray-500">
            {metadonnees.map((valeur, i) => (
              <li key={valeur} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true" className="text-gray-300">·</span>}
                {valeur}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
