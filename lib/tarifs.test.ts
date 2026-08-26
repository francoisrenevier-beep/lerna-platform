import { describe, expect, it } from "vitest"

import {
  calculerTarif,
  bornerEtp,
  COLLABORATEURS_MAX,
  COLLABORATEURS_MIN,
  coutParCollaborateur,
  ETP_DEFAUT,
  ETP_INCLUS,
  ETP_MAX,
  ETP_MIN,
  formaterCHF,
  formaterCoutMensuel,
  formaterCoutParEtp,
  LIGNES_REFERENCE,
  prixCatalogue,
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
  { etp: 20, catalogue: 2300, coutParEtp: "115" },
  { etp: 30, catalogue: 2500, coutParEtp: "83" },
  { etp: 50, catalogue: 3000, coutParEtp: "60" },
  { etp: 75, catalogue: 3700, coutParEtp: "49" },
  { etp: 100, catalogue: 4300, coutParEtp: "43" },
  { etp: 150, catalogue: 5500, coutParEtp: "37" },
  { etp: 200, catalogue: 6800, coutParEtp: "34" },
  { etp: 300, catalogue: 9300, coutParEtp: "31" },
  { etp: 400, catalogue: 11800, coutParEtp: "29.50" },
] as const

describe("tableau de référence", () => {
  it("couvre exactement les effectifs affichés sur la page", () => {
    expect(TABLEAU_REFERENCE.map((l) => l.etp)).toEqual([...LIGNES_REFERENCE])
  })

  it.each(TABLEAU_REFERENCE)(
    "$etp ETP → $catalogue de licence / $coutParEtp par ETP",
    ({ etp, catalogue, coutParEtp }) => {
      const tarif = calculerTarif(etp)

      expect(tarif.surDevis).toBe(false)
      if (tarif.surDevis) return

      expect(tarif.catalogue).toBe(catalogue)
      expect(formaterCoutParEtp(tarif.coutParEtp)).toBe(coutParEtp)
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
      return tarif.surDevis ? Infinity : tarif.coutParEtp
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
  it("calcule le coût annuel sur la licence annuelle pleine", () => {
    const tarif = calculerTarif(100)
    if (tarif.surDevis) throw new Error("100 ETP devrait être chiffré")

    expect(tarif.coutParEtp).toBe(43)
  })

  it("dérive le coût mensuel de la licence annuelle", () => {
    const tarif = calculerTarif(100)
    if (tarif.surDevis) throw new Error("100 ETP devrait être chiffré")

    expect(formaterCoutMensuel(tarif.coutParEtpMois)).toBe("3.60")
  })
})

// ─── Coût par collaborateur ──────────────────────────────────────────────────
//
// Le champ « collaborateurs » du calculateur est facultatif et purement
// informatif : il ne doit jamais changer le montant de la licence, et doit
// rester muet dès que la saisie ne permet pas un affichage honnête.
describe("coutParCollaborateur", () => {
  const licence = 4300 // 100 ETP

  it("divise la licence par l'effectif déclaré", () => {
    const cout = coutParCollaborateur(licence, 150, 100)
    expect(cout).not.toBeNull()
    expect(cout?.an).toBeCloseTo(4300 / 150)
    expect(cout?.mois).toBeCloseTo(4300 / 150 / 12)
  })

  it("accepte un effectif égal au nombre d'ETP", () => {
    expect(coutParCollaborateur(licence, 100, 100)?.an).toBe(43)
  })

  // Moins de collaborateurs que d'ETP : le chiffre serait calculable mais
  // trompeur. On n'affiche rien, sans bloquer la saisie.
  it("reste muet si l'effectif est inférieur au nombre d'ETP", () => {
    expect(coutParCollaborateur(licence, 80, 100)).toBeNull()
    expect(coutParCollaborateur(licence, 1, 100)).toBeNull()
  })

  it("reste muet sur une saisie vide, nulle ou non numérique", () => {
    expect(coutParCollaborateur(licence, Number.NaN, 100)).toBeNull()
    expect(coutParCollaborateur(licence, 0, 100)).toBeNull()
    expect(coutParCollaborateur(licence, -20, 100)).toBeNull()
    expect(coutParCollaborateur(licence, Number.POSITIVE_INFINITY, 100)).toBeNull()
  })

  it("ne renvoie jamais NaN ni Infinity quand il renvoie un montant", () => {
    for (let effectif = COLLABORATEURS_MIN; effectif <= 500; effectif++) {
      const cout = coutParCollaborateur(licence, effectif, 1)
      expect(cout).not.toBeNull()
      expect(Number.isFinite(cout!.an)).toBe(true)
      expect(Number.isFinite(cout!.mois)).toBe(true)
    }
  })

  it("respecte ses bornes", () => {
    expect(coutParCollaborateur(licence, COLLABORATEURS_MIN - 1, 1)).toBeNull()
    expect(coutParCollaborateur(licence, COLLABORATEURS_MAX, 1)).not.toBeNull()
    expect(coutParCollaborateur(licence, COLLABORATEURS_MAX + 1, 1)).toBeNull()
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
