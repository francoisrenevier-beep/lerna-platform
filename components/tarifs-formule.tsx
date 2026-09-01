import { Plus, Equal } from "lucide-react"

import {
  ETP_INCLUS,
  formaterCHF,
  PRIX_PAR_ETP_SUPPLEMENTAIRE,
  SOCLE_CHF,
} from "@/lib/tarifs"

/**
 * Le barème posé comme une opération, sur la page /tarifs.
 *
 * Le socle était auparavant annoncé seul, en tête de page (« Dès 2’000 CHF »).
 * Une grande institution pouvait en conclure qu’elle obtiendrait la formation
 * signature pour ce montant : le socle se lisait comme une offre, alors qu’il
 * n’est que le premier terme d’une addition.
 *
 * Le montrer comme une opération rend cette lecture impossible : le socle n’est
 * jamais visible sans le terme qui le suit, et le libellé « jusqu’à 10 ETP »
 * dit à qui il suffit.
 */
export function TarifsFormule() {
  return (
    <div className="grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:gap-4">
      <div className="rounded-2xl border border-[#1B2D5B]/10 bg-white p-5 text-center">
        <p className="text-2xl font-bold text-[#1B2D5B] tabular-nums sm:text-3xl">
          {formaterCHF(SOCLE_CHF)}&nbsp;CHF
        </p>
        <p className="mt-1.5 text-sm text-muted-foreground">
          jusqu&apos;à {ETP_INCLUS}&nbsp;ETP
        </p>
      </div>

      <div className="flex items-center justify-center" aria-hidden>
        <Plus className="h-5 w-5 text-[#1B2D5B]/40" />
      </div>

      <div className="rounded-2xl border border-[#1B2D5B]/10 bg-white p-5 text-center">
        <p className="text-2xl font-bold text-[#1B2D5B] tabular-nums sm:text-3xl">
          {PRIX_PAR_ETP_SUPPLEMENTAIRE}&nbsp;CHF
        </p>
        <p className="mt-1.5 text-sm text-muted-foreground">
          par ETP au-delà de {ETP_INCLUS}
        </p>
      </div>

      <div className="flex items-center justify-center" aria-hidden>
        <Equal className="h-5 w-5 text-[#1B2D5B]/40" />
      </div>

      <div className="rounded-2xl border border-[#3DBFA0]/40 bg-[#3DBFA0]/[0.10] p-5 text-center">
        <p className="text-lg font-bold text-[#1B2D5B]">Votre licence</p>
        <p className="mt-1.5 text-sm text-muted-foreground">
          annuelle, tout compris
        </p>
      </div>
    </div>
  )
}
