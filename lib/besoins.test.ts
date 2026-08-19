import { describe, expect, it } from "vitest"

import { besoinsSimilaires, getStatutMeta, scoreSimilarite, type Besoin } from "./besoins"

// Le mur ne vaut que si les voix se cumulent : dix reformulations du même
// besoin, c'est dix besoins à 1 voix et aucune priorité lisible. Ces tests
// couvrent la détection de doublons qui oriente vers le vote.

function besoin(titre: string, description: string | null = null): Besoin {
  return {
    id: titre,
    titre,
    description,
    domaine: null,
    statut: "propose",
    reponse_admin: null,
    formation_slug: null,
    formation_titre: null,
    votes_count: 1,
    a_vote: false,
    est_auteur: false,
    created_at: "2026-08-19T10:00:00Z",
  }
}

describe("scoreSimilarite", () => {
  it("ignore accents, casse et ponctuation", () => {
    expect(scoreSimilarite("Épuisement professionnel", "epuisement professionnel !")).toBe(1)
  })

  it("ignore les mots outils, dont « formation »", () => {
    // « formation » et « sur » sont écartés : seul « contention » compte.
    expect(scoreSimilarite("Formation sur la contention", "Contention")).toBe(1)
  })

  it("renvoie 0 quand rien ne correspond", () => {
    expect(scoreSimilarite("Contention physique", "Gestion de projet")).toBe(0)
  })

  it("renvoie 0 sur une saisie sans mot significatif", () => {
    expect(scoreSimilarite("les des une", "Contention physique")).toBe(0)
  })
})

describe("besoinsSimilaires", () => {
  const mur = [
    besoin("Accompagner un résident qui refuse les soins"),
    besoin("Gestion de projet en institution"),
    besoin("Prévenir l'épuisement des équipes", "Comment repérer un collègue en difficulté"),
  ]

  it("repère une reformulation du même besoin", () => {
    const trouves = besoinsSimilaires("Résident qui refuse les soins", mur)
    expect(trouves.map((b) => b.titre)).toEqual(["Accompagner un résident qui refuse les soins"])
  })

  it("cherche aussi dans la description", () => {
    const trouves = besoinsSimilaires("Repérer un collègue en difficulté", mur)
    expect(trouves.map((b) => b.titre)).toEqual(["Prévenir l'épuisement des équipes"])
  })

  it("ne propose rien sur un besoin réellement nouveau", () => {
    expect(besoinsSimilaires("Directives anticipées et fin de vie", mur)).toEqual([])
  })

  it("reste silencieux au début de la frappe", () => {
    // Un seul mot significatif : trop tôt pour interrompre la personne.
    expect(besoinsSimilaires("résident", mur)).toEqual([])
  })

  it("ne remonte jamais plus de trois suggestions", () => {
    const murLarge = Array.from({ length: 8 }, (_, i) => besoin(`Contention physique variante ${i}`))
    expect(besoinsSimilaires("Contention physique", murLarge).length).toBe(3)
  })
})

describe("getStatutMeta", () => {
  it("rend le libellé attendu", () => {
    expect(getStatutMeta("en_production").label).toBe("En production")
  })

  it("retombe sur « Proposé » pour un statut inconnu ou absent", () => {
    expect(getStatutMeta(null).value).toBe("propose")
    expect(getStatutMeta("statut_inexistant").value).toBe("propose")
  })
})
