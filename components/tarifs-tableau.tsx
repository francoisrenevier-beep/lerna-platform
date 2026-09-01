import {
  calculerTarif,
  formaterCHF,
  formaterCoutParEtp,
  LIGNES_REFERENCE,
  SEUIL_DEVIS,
} from "@/lib/tarifs"

/**
 * Tableau de référence de la page /tarifs.
 *
 * Chaque montant est calculé par `lib/tarifs` au rendu : le tableau ne peut pas
 * diverger du calculateur ni du contrat. Ne jamais y réintroduire de valeur
 * saisie à la main.
 *
 * Le coût par ETP est calculé sur la licence annuelle pleine : c'est la
 * grandeur structurelle du barème.
 */
export function TarifsTableau() {
  const lignes = LIGNES_REFERENCE.map((etp) => {
    const tarif = calculerTarif(etp)

    // LIGNES_REFERENCE s'arrête au seuil de devis ; le garde-fou n'est là que
    // pour le typage, et pour casser visiblement si quelqu'un ajoute 500.
    if (tarif.surDevis) {
      return { etp, catalogue: "—", coutParEtp: "sur devis" }
    }

    return {
      etp,
      catalogue: formaterCHF(tarif.catalogue),
      coutParEtp: formaterCoutParEtp(tarif.coutParEtp),
    }
  })

  return (
    <div>
      <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
        Le tarif est calculé de la même manière pour toutes les institutions.
        Pas de palier, pas de conditions particulières selon
        l&apos;interlocuteur.
      </p>

      {/* Tableau — à partir de 640 px */}
      <div className="hidden overflow-hidden rounded-2xl border border-[#1B2D5B]/10 sm:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#1B2D5B] text-left text-white">
              <th scope="col" className="px-5 py-4 font-semibold">
                ETP
              </th>
              <th scope="col" className="px-5 py-4 text-right font-semibold">
                Licence annuelle
              </th>
              <th
                scope="col"
                className="px-5 py-4 text-right font-semibold text-[#3DBFA0]"
              >
                Coût par ETP / an
              </th>
            </tr>
          </thead>
          <tbody>
            {lignes.map((ligne, i) => (
              <tr
                key={ligne.etp}
                className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
              >
                <th
                  scope="row"
                  className="px-5 py-4 text-left font-semibold text-[#1B2D5B] tabular-nums"
                >
                  {ligne.etp}
                </th>
                <td className="px-5 py-4 text-right font-bold text-[#1B2D5B] tabular-nums">
                  {ligne.catalogue} CHF
                </td>
                <td className="px-5 py-4 text-right font-semibold text-[#2ea88b] tabular-nums">
                  {ligne.coutParEtp} CHF
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cartes empilées — sous 640 px, où le tableau devient illisible */}
      <ul className="space-y-3 sm:hidden">
        {lignes.map((ligne) => (
          <li
            key={ligne.etp}
            className="rounded-xl border border-[#1B2D5B]/10 bg-white p-4"
          >
            <p className="text-base font-bold text-[#1B2D5B] tabular-nums">
              {ligne.etp} ETP
            </p>
            <dl className="mt-3 space-y-1.5 text-sm">
              <div className="flex items-baseline justify-between gap-3">
                <dt className="font-medium text-[#1B2D5B]">Licence annuelle</dt>
                <dd className="font-bold text-[#1B2D5B] tabular-nums">
                  {ligne.catalogue} CHF
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <dt className="font-medium text-[#2ea88b]">Coût par ETP / an</dt>
                <dd className="font-semibold text-[#2ea88b] tabular-nums">
                  {ligne.coutParEtp} CHF
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-muted-foreground">
        Au-delà de {SEUIL_DEVIS} ETP, nous établissons une proposition adaptée à
        votre organisation.
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        Les institutions dont la situation le justifie peuvent nous contacter
        pour examiner ensemble les conditions d&apos;un partenariat.
      </p>
    </div>
  )
}
