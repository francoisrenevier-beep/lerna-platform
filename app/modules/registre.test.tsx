import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"

import { Quiz } from "@/components/module/Quiz"
import { ModeFicheFourni } from "@/components/module/ModeFiche"

import { MODULE_COMPONENTS } from "./registre"

const QUESTIONS = [
  { question: "Première question ?", reponses: ["Un", "Deux", "Trois"], bonneReponse: 1, explication: "Parce que deux." },
  { question: "Seconde question ?", reponses: ["Oui", "Non"], bonneReponse: 0, explication: "Parce que oui." },
]

describe("quiz en mode fiche", () => {
  it("imprime toutes les questions, dans l'ordre du module", () => {
    const html = renderToStaticMarkup(
      <ModeFicheFourni corrige={false}>
        <Quiz questions={QUESTIONS} />
      </ModeFicheFourni>,
    )
    expect(html.indexOf("Première question ?")).toBeGreaterThan(-1)
    expect(html.indexOf("Seconde question ?")).toBeGreaterThan(html.indexOf("Première question ?"))
    expect(html.indexOf("Un")).toBeLessThan(html.indexOf("Deux"))
    expect(html.indexOf("Deux")).toBeLessThan(html.indexOf("Trois"))
  })

  it("n'imprime le corrigé que s'il est demandé", () => {
    const sans = renderToStaticMarkup(
      <ModeFicheFourni corrige={false}>
        <Quiz questions={QUESTIONS} />
      </ModeFicheFourni>,
    )
    const avec = renderToStaticMarkup(
      <ModeFicheFourni corrige>
        <Quiz questions={QUESTIONS} />
      </ModeFicheFourni>,
    )
    expect(sans).not.toContain("Parce que deux.")
    expect(sans).not.toContain("bonne réponse")
    expect(avec).toContain("Parce que deux.")
    expect(avec).toContain("Parce que oui.")
  })

  it("reste interactif hors de la fiche", () => {
    const html = renderToStaticMarkup(<Quiz questions={QUESTIONS} />)
    expect(html).toContain("Valider ma reponse")
  })
})

describe("registre des modules", () => {
  it.each(Object.entries(MODULE_COMPONENTS))("le module %s se rend en fiche, quiz déplié", (_, Module) => {
    const html = renderToStaticMarkup(
      <ModeFicheFourni corrige>
        <Module />
      </ModeFicheFourni>,
    )
    expect(html).toContain("Quiz du module")
    expect(html).not.toContain("Valider ma reponse")
    expect(html).not.toContain("<iframe")
  })
})
