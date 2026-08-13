import { describe, expect, it } from "vitest"

import {
  calculerTarif,
  bornerEtp,
  ETP_DEFAUT,
  ETP_INCLUS,
  ETP_MAX,
  ETP_MIN,
  formaterCHF,
  formaterCoutMensuel,
  formaterCoutParEtp,
  LIGNES_REFERENCE,
  prixCatalogue,
  prixLancement,
  PRIX_PAR_ETP_SUPPLEMENTAIRE,
  SEUIL_DEVIS,
  SOCLE_CHF,
} from "./tarifs"

// Prix catalogue avant arrondi, reconstruit depuis les constantes du module.
// Sert aux tests de monotonie : c'est sur cette valeur exacte que les
// propriétés strictes se vérifient, l'arrondi à la centaine introduisant par
// nature des paliers de quelques francs (voir le bloc « monotonie »).
function prixBrut(etp: number): number {
  return etp <= ETP_INCLUS
    ? SOCLE_CHF
    : SOCLE_CHF + PRIX_PAR_ETP_SUPPLEMENTAIRE * (etp - ETP_INCLUS)
}

// Le tableau publié sur /tarifs. Ces valeurs sont la référence commerciale :
// si un changement de barème les fait bouger, c'est ici que ça doit casser.
const TABLEAU_REFERENCE = [
  { etp: 10, catalogue: 2000, lancement: 1400, coutParEtp: "200" },
  { etp: 20, catalogue: 2300, lancement: 1700, coutParEtp: "115" },
  { etp: 30, catalogue: 2500, lancement: 1800, coutParEtp: "83" },
  { etp: 50, catalogue: 3000, lancement: 2100, coutParEtp: "60" },
  { etp: 75, catalogue: 3700, lancement: 2600, coutParEtp: "49" },
  { etp: 100, catalogue: 4300, lancement: 3100, coutParEtp: "43" },
  { etp: 150, catalogue: 5500, lancement: 3900, coutParEtp: "37" },
  { etp: 200, catalogue: 6800, lancement: 4800, coutParEtp: "34" },
  { etp: 300, catalogue: 9300, lancement: 6600, coutParEtp: "31" },
  { etp: 400, catalogue: 11800, lancement: 8300, coutParEtp: "29.50" },
] as const

describe("tableau de référence", () => {
  it("couvre exactement les effectifs affichés sur la page", () => {
    expect(TABLEAU_REFERENCE.map((l) => l.etp)).toEqual([...LIGNES_REFERENCE])
  })

  it.each(TABLEAU_REFERENCE)(
    "$etp ETP → $catalogue catalogue / $lancement lancement / $coutParEtp par ETP",
    ({ etp, catalogue, lancement, coutParEtp }) => {
      const tarif = calculerTarif(etp)

      expect(tarif.surDevis).toBe(false)
      if (tarif.surDevis) return

      expect(tarif.catalogue).toBe(catalogue)
      expect(tarif.lancement).toBe(lancement)
      expect(formaterCoutParEtp(tarif.coutParEtpCatalogue)).toBe(coutParEtp)
    }
  )
})

describe("prixCatalogue", () => {
  it("applique le seul socle jusqu'à 10 ETP inclus", () => {
    expect(prixCatalogue(1)).toBe(2000)
    expect(prixCatalogue(5)).toBe(2000)
    expect(prixCatalogue(10)).toBe(2000)
  })

  // Borne 10/11 : le premier ETP supplémentaire coûte 25 CHF, arrondis à la
  // centaine supérieure. Un barème par tranches ferait ici un saut brutal.
  it("franchit la borne 10/11 sans effet de seuil", () => {
    expect(prixCatalogue(11)).toBe(2100)
    expect(prixCatalogue(11) - prixCatalogue(10)).toBe(100)
  })

  it("croît continûment au-delà du socle", () => {
    expect(prixCatalogue(30)).toBe(2500)
    expect(prixCatalogue(50)).toBe(3000)
    expect(prixCatalogue(75)).toBe(3700)
    expect(prixCatalogue(100)).toBe(4300)
    expect(prixCatalogue(150)).toBe(5500)
    expect(prixCatalogue(200)).toBe(6800)
    expect(prixCatalogue(300)).toBe(9300)
    expect(prixCatalogue(400)).toBe(11800)
  })

  it("ne renvoie que des multiples de 100", () => {
    for (let etp = ETP_MIN; etp <= SEUIL_DEVIS; etp++) {
      expect(prixCatalogue(etp) % 100).toBe(0)
    }
  })
})

describe("prixLancement", () => {
  it("applique 30 % de remise sur le catalogue déjà arrondi", () => {
    expect(prixLancement(1)).toBe(1400)
    expect(prixLancement(10)).toBe(1400)
    expect(prixLancement(11)).toBe(1500)
    expect(prixLancement(30)).toBe(1800)
    expect(prixLancement(50)).toBe(2100)
    expect(prixLancement(100)).toBe(3100)
    expect(prixLancement(400)).toBe(8300)
  })

  it("ne renvoie que des multiples de 100", () => {
    for (let etp = ETP_MIN; etp <= SEUIL_DEVIS; etp++) {
      expect(prixLancement(etp) % 100).toBe(0)
    }
  })

  it("reste toujours inférieur au catalogue", () => {
    for (let etp = ETP_MIN; etp <= SEUIL_DEVIS; etp++) {
      expect(prixLancement(etp)).toBeLessThan(prixCatalogue(etp))
    }
  })
})

// ─── Monotonie : la garantie « sans effet de seuil », balayée sur 1–400 ─────
//
// Les propriétés strictes se testent sur le prix exact (avant arrondi) : sur
// les valeurs arrondies à la centaine, la monotonie stricte point par point est
// mathématiquement impossible — le prix stagne entre deux paliers (2'100 CHF de
// 11 à 14 ETP), et le coût par ETP arrondi remonte de quelques centimes au
// passage d'un palier (2'400/26 = 92.31 < 2'500/27 = 92.59). L'arrondi borne
// ces effets à moins de 100 CHF, ce que vérifient les tests sur les valeurs
// arrondies.
describe("monotonie sur l'intervalle 1–400", () => {
  it("le prix exact ne décroît jamais, et croît strictement au-delà du socle", () => {
    for (let etp = ETP_MIN + 1; etp <= SEUIL_DEVIS; etp++) {
      if (etp <= ETP_INCLUS) {
        expect(prixBrut(etp)).toBe(prixBrut(etp - 1))
      } else {
        expect(prixBrut(etp)).toBeGreaterThan(prixBrut(etp - 1))
      }
    }
  })

  it("le coût exact par ETP décroît strictement", () => {
    for (let etp = ETP_MIN + 1; etp <= SEUIL_DEVIS; etp++) {
      expect(prixBrut(etp) / etp).toBeLessThan(prixBrut(etp - 1) / (etp - 1))
    }
  })

  it("le prix arrondi ne décroît jamais et ne saute jamais plus d'un palier de 100", () => {
    for (let etp = ETP_MIN + 1; etp <= SEUIL_DEVIS; etp++) {
      const saut = prixCatalogue(etp) - prixCatalogue(etp - 1)
      expect(saut).toBeGreaterThanOrEqual(0)
      expect(saut).toBeLessThanOrEqual(100)
    }
  })

  it("le coût par ETP arrondi décroît strictement sur les lignes du tableau", () => {
    const couts = LIGNES_REFERENCE.map((etp) => {
      const tarif = calculerTarif(etp)
      return tarif.surDevis ? Infinity : tarif.coutParEtpCatalogue
    })

    for (let i = 1; i < couts.length; i++) {
      expect(couts[i]).toBeLessThan(couts[i - 1])
    }
  })
})

describe("seuil de devis", () => {
  it("chiffre encore 400 ETP", () => {
    expect(calculerTarif(400).surDevis).toBe(false)
  })

  it("bascule sur devis dès 401 ETP", () => {
    expect(calculerTarif(401)).toEqual({ surDevis: true, etp: 401 })
    expect(calculerTarif(2000).surDevis).toBe(true)
  })
})

describe("coûts par ETP", () => {
  it("calcule le coût annuel sur le catalogue et sur le lancement", () => {
    const tarif = calculerTarif(100)
    if (tarif.surDevis) throw new Error("100 ETP devrait être chiffré")

    expect(tarif.coutParEtpCatalogue).toBe(43)
    expect(tarif.coutParEtpLancement).toBe(31)
  })

  it("dérive le coût mensuel du tarif de lancement", () => {
    const tarif = calculerTarif(100)
    if (tarif.surDevis) throw new Error("100 ETP devrait être chiffré")

    expect(formaterCoutMensuel(tarif.coutParEtpMoisLancement)).toBe("2.60")
  })
})

describe("formatage", () => {
  it("sépare les milliers par une apostrophe suisse", () => {
    expect(formaterCHF(2000)).toBe("2’000")
    expect(formaterCHF(11800)).toBe("11’800")
    expect(formaterCHF(900)).toBe("900")
  })

  it("affiche le coût par ETP au centime seulement s'il tombe juste", () => {
    expect(formaterCoutParEtp(200)).toBe("200")
    expect(formaterCoutParEtp(115)).toBe("115")
    expect(formaterCoutParEtp(29.5)).toBe("29.50")
    expect(formaterCoutParEtp(2500 / 30)).toBe("83")
    expect(formaterCoutParEtp(5500 / 150)).toBe("37")
  })

  it("arrondit le coût mensuel aux 5 centimes", () => {
    expect(formaterCoutMensuel(2.5833)).toBe("2.60")
    expect(formaterCoutMensuel(5.8333)).toBe("5.85")
    expect(formaterCoutMensuel(3)).toBe("3.00")
  })
})

describe("bornerEtp", () => {
  it("contraint la saisie aux bornes du calculateur", () => {
    expect(bornerEtp(0)).toBe(ETP_MIN)
    expect(bornerEtp(-40)).toBe(ETP_MIN)
    expect(bornerEtp(5000)).toBe(ETP_MAX)
    expect(bornerEtp(80)).toBe(80)
  })

  it("retombe sur la valeur par défaut si la saisie n'est pas un nombre", () => {
    expect(bornerEtp(Number.NaN)).toBe(ETP_DEFAUT)
  })
})
