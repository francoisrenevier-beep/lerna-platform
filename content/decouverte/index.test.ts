import { describe, expect, it } from "vitest"

import {
  ACCES_LIBRE_OUVERT,
  MODULES_LIBRES,
  MODULES_LIBRES_PRETS,
  moduleLibre,
  moduleLibreDeFormation,
} from "./index"

const slugAttendu: Record<string, string> = {
  // Le slug vient de la migration 20260713_formation_violence_professionnels.sql.
  // S'il change en base sans changer ici, le badge disparaît silencieusement
  // de la carte : c'est ce que ces correspondances protègent.
  "violence-envers-professionnels": "comprendre-la-violence",
  // Slug issu de 20260515_formation_vieillissement_bases.sql.
  "vieillissement-bases": "vieillissement-et-handicap",
}

describe("registre des modules libres", () => {
  it("expose des slugs uniques", () => {
    const slugs = MODULES_LIBRES_PRETS.map((m) => m.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it("n'ouvre qu'un module par formation", () => {
    // `moduleLibreDeFormation` renvoie le premier trouvé : deux modules libres
    // issus de la même formation en rendraient un inatteignable depuis la carte.
    const slugs = MODULES_LIBRES_PRETS.map((m) => m.formationSlug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it("rattache chaque module à la formation dont le catalogue porte le badge", () => {
    for (const [formation, slug] of Object.entries(slugAttendu)) {
      expect(MODULES_LIBRES_PRETS.find((m) => m.formationSlug === formation)?.slug).toBe(slug)
    }
  })

  it("ne publie que si l'accès libre est ouvert", () => {
    expect(MODULES_LIBRES).toEqual(ACCES_LIBRE_OUVERT ? MODULES_LIBRES_PRETS : [])
  })

  it("ne retrouve un module que s'il est publié", () => {
    for (const m of MODULES_LIBRES_PRETS) {
      expect(moduleLibre(m.slug)).toBe(ACCES_LIBRE_OUVERT ? m : undefined)
      expect(moduleLibreDeFormation(m.formationSlug)).toBe(ACCES_LIBRE_OUVERT ? m : undefined)
    }
    expect(moduleLibre("inexistant")).toBeUndefined()
  })

  it("ne renvoie rien pour une formation sans module ouvert", () => {
    expect(moduleLibreDeFormation("sommeil-enfant")).toBeUndefined()
    expect(moduleLibreDeFormation(null)).toBeUndefined()
  })
})

describe("descripteurs", () => {
  it("déclare des identifiants de section uniques et non vides", () => {
    for (const m of MODULES_LIBRES_PRETS) {
      const ids = m.sections.map((s) => s.id)
      expect(ids.every((id) => id.length > 0)).toBe(true)
      expect(new Set(ids).size).toBe(ids.length)
    }
  })

  it("déclare un questionnaire dont chaque bonne réponse existe", () => {
    for (const m of MODULES_LIBRES_PRETS) {
      expect(m.quiz.length).toBeGreaterThan(0)
      for (const question of m.quiz) {
        expect(question.bonneReponse).toBeGreaterThanOrEqual(0)
        expect(question.bonneReponse).toBeLessThan(question.reponses.length)
        expect(question.explication.length).toBeGreaterThan(0)
      }
    }
  })

  it("annonce les trois apports de la licence sur l'écran de fin", () => {
    for (const m of MODULES_LIBRES_PRETS) {
      expect(m.licenceAjoute.length).toBe(3)
      expect(m.acquis.length).toBeGreaterThan(0)
    }
  })
})
