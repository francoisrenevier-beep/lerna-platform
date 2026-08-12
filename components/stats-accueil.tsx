import { arrondirDizaineInferieure, getStatsPubliques } from "@/lib/stats-publiques"

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

  const professionnels = stats
    ? arrondirDizaineInferieure(stats.professionnelsFormes)
    : null

  const entrees = [
    {
      // Sous dix professionnels, « + de 0 » ne veut rien dire : mieux vaut
      // taire le chiffre que d'afficher une valeur creuse.
      chiffre: professionnels && professionnels >= 10 ? `+ de ${professionnels}` : null,
      libelle: "professionnels ont déjà suivi une formation sur Learna",
    },
    {
      chiffre: stats ? String(stats.formationsPubliees) : null,
      libelle: "formations disponibles sur la plateforme",
    },
  ]

  return (
    <section className="border-y border-[#1B2D5B]/10 bg-[#F8FAFC] py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
          {entrees.map((entree) => (
            <div key={entree.libelle} className="text-center sm:text-left">
              {entree.chiffre && (
                <p className="text-4xl font-bold tracking-tight text-[#1B2D5B] tabular-nums sm:text-5xl">
                  {entree.chiffre}
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
