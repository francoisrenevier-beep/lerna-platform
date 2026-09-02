import { describe, expect, it } from "vitest"

import { etatInitial, jalonsAEmettre, pourcentage } from "./progression"

describe("pourcentage", () => {
  it("vaut 0 tant qu'aucune section n'est atteinte", () => {
    expect(pourcentage(-1, 8)).toBe(0)
  })

  it("compte la section atteinte comme lue", () => {
    expect(pourcentage(0, 4)).toBe(25)
    expect(pourcentage(1, 4)).toBe(50)
  })

  it("atteint 100 sur la dernière section", () => {
    expect(pourcentage(7, 8)).toBe(100)
  })

  it("ne dépasse jamais 100, même si l'index enregistré est trop grand", () => {
    expect(pourcentage(99, 8)).toBe(100)
  })

  it("renvoie 0 plutôt que NaN si le module n'a aucune section", () => {
    expect(pourcentage(0, 0)).toBe(0)
  })
})

describe("jalonsAEmettre", () => {
  it("n'émet rien avant le premier quart", () => {
    expect(jalonsAEmettre(20, [])).toEqual([])
  })

  it("rattrape tous les jalons franchis d'un coup", () => {
    // Un visiteur qui reprend en bas de page saute plusieurs jalons à la fois :
    // aucun ne doit être perdu.
    expect(jalonsAEmettre(80, [])).toEqual([25, 50, 75])
  })

  it("ne réémet pas un jalon déjà signalé", () => {
    expect(jalonsAEmettre(100, [25, 50, 75])).toEqual([100])
    expect(jalonsAEmettre(100, [25, 50, 75, 100])).toEqual([])
  })
})

describe("etatInitial", () => {
  it("décrit un module jamais commencé", () => {
    const etat = etatInitial()
    expect(etat.sectionMax).toBe(-1)
    expect(etat.demarre).toBe(false)
    expect(etat.quiz).toBeNull()
    expect(etat.jalons).toEqual([])
  })
})
