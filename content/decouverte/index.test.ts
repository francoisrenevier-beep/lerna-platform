import { describe, expect, it } from "vitest"

import { MODULES_LIBRES, moduleLibre, moduleLibreDeFormation } from "./index"

describe("registre des modules libres", () => {
  it("expose des slugs uniques", () => {
    const slugs = MODULES_LIBRES.map((m) => m.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it("retrouve un module par son slug", () => {
    expect(moduleLibre("comprendre-la-violence")?.slug).toBe("comprendre-la-violence")
    expect(moduleLibre("inexistant")).toBeUndefined()
  })

  it("rattache le module à la formation dont le catalogue porte le badge", () => {
    // Le slug vient de la migration 20260713_formation_violence_professionnels.sql.
    // S'il change en base sans changer ici, le badge disparaît silencieusement
    // de la carte : c'est ce que ce test protège.
    expect(moduleLibreDeFormation("violence-envers-professionnels")?.slug).toBe(
      "comprendre-la-violence",
    )
  })

  it("ne renvoie rien pour une formation sans module ouvert", () => {
    expect(moduleLibreDeFormation("sommeil-enfant")).toBeUndefined()
    expect(moduleLibreDeFormation(null)).toBeUndefined()
  })
})

describe("descripteurs", () => {
  it("déclare des identifiants de section uniques et non vides", () => {
    for (const m of MODULES_LIBRES) {
      const ids = m.sections.map((s) => s.id)
      expect(ids.every((id) => id.length > 0)).toBe(true)
      expect(new Set(ids).size).toBe(ids.length)
    }
  })

  it("déclare un questionnaire dont chaque bonne réponse existe", () => {
    for (const m of MODULES_LIBRES) {
      expect(m.quiz.length).toBeGreaterThan(0)
      for (const question of m.quiz) {
        expect(question.bonneReponse).toBeGreaterThanOrEqual(0)
        expect(question.bonneReponse).toBeLessThan(question.reponses.length)
        expect(question.explication.length).toBeGreaterThan(0)
      }
    }
  })

  it("annonce les trois apports de la licence sur l'écran de fin", () => {
    for (const m of MODULES_LIBRES) {
      expect(m.licenceAjoute.length).toBe(3)
      expect(m.acquis.length).toBeGreaterThan(0)
    }
  })
})
