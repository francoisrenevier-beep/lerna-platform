import { getStatsPubliques } from "@/lib/stats-publiques"

/**
 * Bandeau de chiffres clés de l'accueil — Server Component.
 *
 * Les deux valeurs viennent de la base (cf. lib/stats-publiques) et se
 * rafraîchissent avec la revalidation de la page. Ne jamais y écrire de
 * constante : le catalogue évolue, un chiffre en dur se met à mentir.
 *
 * Deux entrées, pas trois : le décompte de domaines vieillit mal.
 */
export async function StatsAccueil() {
  const stats = await getStatsPubliques()

  const entrees = [
    {
      // Chiffre exact, pas d'arrondi : il peut retarder d'une heure au plus
      // (revalidation de la page), jamais surestimer.
      chiffre: stats ? String(stats.professionnelsFormes) : null,
      libelle: "professionnels ont déjà suivi une formation sur Learna",
    },
    {
      chiffre: stats ? String(stats.formationsPubliees) : null,
      libelle: "formations disponibles sur la plateforme",
    },
  ]

  return (
    <section className="relative overflow-hidden border-y border-[#1B2D5B]/[0.08] bg-gradient-to-r from-[#3DBFA0]/[0.08] via-[#F8FAFC] to-[#1B2D5B]/[0.05] py-10 sm:py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-[15%] h-48 w-48 rounded-full bg-[#3DBFA0]/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
          {entrees.map((entree) => (
            <div key={entree.libelle} className="text-center sm:text-left">
              {entree.chiffre && (
                <p className="text-4xl font-bold tracking-tight text-[#1B2D5B] tabular-nums sm:text-5xl">
                  {entree.chiffre}
                  <span className="ml-1 inline-block h-2.5 w-2.5 rounded-full bg-[#3DBFA0] align-baseline" />
                </p>
              )}
              <p
                className={`text-base leading-relaxed text-muted-foreground ${
                  entree.chiffre ? "mt-2" : ""
                }`}
              >
                {entree.libelle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
