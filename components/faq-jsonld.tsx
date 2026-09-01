type QuestionReponse = { question: string; reponse: string }

/**
 * Balisage FAQPage, alimenté par le tableau qui rend l'accordéon voisin.
 *
 * Radix ne monte pas le contenu d'un `AccordionItem` fermé : les réponses sont
 * absentes du HTML servi, donc invisibles des moteurs. Le JSON-LD les leur rend
 * sans toucher au composant d'accordéon ni au comportement de la page.
 *
 * Toujours le construire à partir de la liste effectivement rendue — jamais de
 * la liste complète quand la page n'en affiche qu'une partie. Un balisage qui
 * annonce des questions absentes de la page est une non-conformité aux règles
 * de Google, pas un gain de visibilité.
 */
export function FaqJsonLd({ questions }: { questions: QuestionReponse[] }) {
  const donnees = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.reponse },
    })),
  }

  return (
    <script
      type="application/ld+json"
      // `<` échappé : une réponse qui contiendrait « </script> » fermerait la
      // balise et casserait la page.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(donnees).replace(/</g, "\\u003c"),
      }}
    />
  )
}
