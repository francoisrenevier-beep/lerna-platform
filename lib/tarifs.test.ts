import { describe, expect, it } from "vitest"

import {
  calculerTarif,
  bornerEtp,
  COLLABORATEURS_MAX,
  COLLABORATEURS_MIN,
  coutParCollaborateur,
  ETP_DEFAUT,
  ETP_MAX,
  ETP_MIN,
  formaterCHF,
  formaterCoutParEtp,
  LIGNES_REFERENCE,
  PLAFOND_DEVIS_ETP,
  prixCatalogue,
  RATIO_COLLABORATEURS_PAR_ETP,
  SEUIL_SOCLE_ETP,
  SOCLE_CHF,
  TAUX_PAR_ETP,
} from "./tarifs"

// Prix catalogue avant arrondi, reconstruit depuis les constantes du module.
// Sert aux tests de monotonie : c'est sur cette valeur exacte que les
// propriétés strictes se vérifient, l'arrondi à la centaine introduisant par
// nature des paliers de quelques francs (voir le bloc « monotonie »).
function prixBrut(etp: number): number {
  return etp <= SEUIL_SOCLE_ETP
    ? SOCLE_CHF
    : SOCLE_CHF + TAUX_PAR_ETP * (etp - SEUIL_SOCLE_ETP)
}

// ─── Pivots du barème ────────────────────────────────────────────────────────
//
// Les valeurs arrêtées avec la direction, y compris celles que la page
// n'affiche pas. Elles sont écrites en clair, et non dérivées des constantes :
// un test qui recalculerait le barème avec la formule du module validerait
// n'importe quelle erreur de barème. C'est ici que doit casser tout changement
// de socle ou de taux qui n'aurait pas été décidé.
const PIVOTS = [
  { etp: 1, licence: 1500 },
  { etp: 10, licence: 1500 },
  { etp: 11, licence: 1600 },
  { etp: 25, licence: 2000 },
  { etp: 50, licence: 2600 },
  { etp: 100, licence: 4000 },
  { etp: 150, licence: 5300 },
  { etp: 200, licence: 6700 },
  { etp: 300, licence: 9400 },
  { etp: 400, licence: 12100 },
] as const

describe("pivots du barème", () => {
  it.each(PIVOTS)("$etp ETP → $licence CHF", ({ etp, licence }) => {
    const tarif = calculerTarif(etp)

    expect(tarif.surDevis).toBe(false)
    if (tarif.surDevis) return

    expect(tarif.catalogue).toBe(licence)
  })

  it("renvoie vers le devis à 401 ETP", () => {
    expect(calculerTarif(401)).toEqual({ surDevis: true, etp: 401 })
  })
})

// Le tableau publié sur /tarifs. Ces valeurs sont la référence commerciale :
// si un changement de barème les fait bouger, c'est ici que ça doit casser.
const TABLEAU_REFERENCE = [
  { etp: 20, catalogue: 1800, coutParEtp: "90" },
  { etp: 30, catalogue: 2100, coutParEtp: "70" },
  { etp: 50, catalogue: 2600, coutParEtp: "52" },
  { etp: 75, catalogue: 3300, coutParEtp: "44" },
  { etp: 100, catalogue: 4000, coutParEtp: "40" },
  { etp: 150, catalogue: 5300, coutParEtp: "35" },
  { etp: 200, catalogue: 6700, coutParEtp: "33.50" },
  { etp: 300, catalogue: 9400, coutParEtp: "31" },
  { etp: 400, catalogue: 12100, coutParEtp: "30.25" },
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
    expect(prixCatalogue(1)).toBe(1500)
    expect(prixCatalogue(5)).toBe(1500)
    expect(prixCatalogue(10)).toBe(1500)
  })

  // Borne 10/11 : le premier ETP supplémentaire coûte 27 CHF, arrondis à la
  // centaine supérieure. Un barème par tranches ferait ici un saut brutal.
  it("franchit la borne 10/11 sans effet de seuil", () => {
    expect(prixCatalogue(11)).toBe(1600)
    expect(prixCatalogue(11) - prixCatalogue(10)).toBe(100)
  })

  it("ne renvoie que des multiples de 100", () => {
    for (let etp = ETP_MIN; etp <= PLAFOND_DEVIS_ETP; etp++) {
      expect(prixCatalogue(etp) % 100).toBe(0)
    }
  })
})

// ─── Monotonie : la garantie « sans effet de seuil », balayée sur 1–400 ─────
//
// Les propriétés strictes se testent sur le prix exact (avant arrondi) : sur
// les valeurs arrondies à la centaine, la monotonie stricte point par point est
// mathématiquement impossible — le prix stagne entre deux paliers (1'600 CHF de
// 11 à 13 ETP), et le coût par ETP arrondi remonte de quelques centimes au
// passage d'un palier. L'arrondi borne ces effets à moins de 100 CHF, ce que
// vérifient les tests sur les valeurs arrondies.
describe("monotonie sur l'intervalle 1–400", () => {
  it("le prix exact ne décroît jamais, et croît strictement au-delà du socle", () => {
    for (let etp = ETP_MIN + 1; etp <= PLAFOND_DEVIS_ETP; etp++) {
      if (etp <= SEUIL_SOCLE_ETP) {
        expect(prixBrut(etp)).toBe(prixBrut(etp - 1))
      } else {
        expect(prixBrut(etp)).toBeGreaterThan(prixBrut(etp - 1))
      }
    }
  })

  it("le coût exact par ETP décroît strictement", () => {
    for (let etp = ETP_MIN + 1; etp <= PLAFOND_DEVIS_ETP; etp++) {
      expect(prixBrut(etp) / etp).toBeLessThan(prixBrut(etp - 1) / (etp - 1))
    }
  })

  it("le prix arrondi ne décroît jamais et ne saute jamais plus d'un palier de 100", () => {
    for (let etp = ETP_MIN + 1; etp <= PLAFOND_DEVIS_ETP; etp++) {
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

describe("coûts unitaires", () => {
  it("calcule le coût par ETP sur la licence annuelle pleine", () => {
    const tarif = calculerTarif(100)
    if (tarif.surDevis) throw new Error("100 ETP devrait être chiffré")

    expect(tarif.coutParEtp).toBe(40)
  })

  // Le coût par collaborateur estimé n'est pas un montant facturé : il rapporte
  // la licence à l'effectif que produit le ratio moyen du secteur.
  it("estime le coût par collaborateur sur le ratio moyen", () => {
    const tarif = calculerTarif(100)
    if (tarif.surDevis) throw new Error("100 ETP devrait être chiffré")

    expect(tarif.coutParCollaborateurEstime).toBeCloseTo(4000 / 140)
    expect(formaterCHF(tarif.coutParCollaborateurEstime)).toBe("29")
  })

  it("reste inférieur au coût par ETP, le ratio étant supérieur à 1", () => {
    expect(RATIO_COLLABORATEURS_PAR_ETP).toBeGreaterThan(1)

    for (const etp of LIGNES_REFERENCE) {
      const tarif = calculerTarif(etp)
      if (tarif.surDevis) throw new Error(`${etp} ETP devrait être chiffré`)

      expect(tarif.coutParCollaborateurEstime).toBeLessThan(tarif.coutParEtp)
    }
  })
})

// ─── Coût par collaborateur ──────────────────────────────────────────────────
//
// Le champ « collaborateurs » du calculateur est facultatif et purement
// informatif : il ne doit jamais changer le montant de la licence, et doit
// rester muet dès que la saisie ne permet pas un affichage honnête.
describe("coutParCollaborateur", () => {
  const licence = 4000 // 100 ETP

  it("divise la licence par l'effectif déclaré", () => {
    const cout = coutParCollaborateur(licence, 150, 100)
    expect(cout).not.toBeNull()
    expect(cout?.an).toBeCloseTo(4000 / 150)
    expect(cout?.mois).toBeCloseTo(4000 / 150 / 12)
  })

  it("accepte un effectif égal au nombre d'ETP", () => {
    expect(coutParCollaborateur(licence, 100, 100)?.an).toBe(40)
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
    expect(formaterCHF(1500)).toBe("1’500")
    expect(formaterCHF(12100)).toBe("12’100")
    expect(formaterCHF(900)).toBe("900")
  })

  it("affiche le coût par ETP au centime seulement s'il tombe juste", () => {
    expect(formaterCoutParEtp(200)).toBe("200")
    expect(formaterCoutParEtp(90)).toBe("90")
    expect(formaterCoutParEtp(33.5)).toBe("33.50")
    expect(formaterCoutParEtp(30.25)).toBe("30.25")
    expect(formaterCoutParEtp(5300 / 150)).toBe("35")
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
