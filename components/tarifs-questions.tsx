import { formationSignature } from "@/content/site"
import { FaqJsonLd } from "@/components/faq-jsonld"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

/**
 * Section « Questions sur la licence » de la page /tarifs.
 *
 * Distincte de `FaqDirecteurs`, qui répond aux questions pédagogiques et
 * d'usage sur /faq et /institutions : celle-ci ne traite que du contrat et de
 * la formation signature. Deux listes séparées évitent d'imposer aux visiteurs
 * de /tarifs une FAQ générale, et à ceux de /faq des questions de facturation.
 *
 * Les entrées 1 et 2 portent la règle de stabilité tarifaire (garantie pendant
 * le contrat, réexamen au renouvellement au-delà de vingt pour cent de
 * variation d'effectif) : elle ne doit pas disparaître d'ici.
 */
const questions = [
  {
    id: "tarif-augmentation",
    question: "Le tarif peut-il augmenter en cours de contrat ?",
    reponse:
      "Non. Il est fixé à la signature et garanti pour toute la durée du contrat.",
  },
  {
    id: "effectif-evolution",
    question: "Que se passe-t-il si notre effectif évolue ?",
    reponse:
      "Le tarif n'est réexaminé qu'au renouvellement, et uniquement si l'effectif de l'institution a varié de plus de vingt pour cent.",
  },
  {
    id: "licences-utilisateur",
    question: "Faut-il acheter des licences par utilisateur ?",
    reponse:
      "Non. La licence est institutionnelle et couvre tous vos collaborateurs.",
  },
  {
    id: "delai-signature",
    question: "Combien de temps pour obtenir notre formation signature ?",
    reponse: formationSignature.reponseDelai,
  },
  {
    id: "plusieurs-signatures",
    question: "Peut-on en demander plusieurs ?",
    reponse:
      "Une formation signature est incluse chaque année. Les suivantes sont réalisées sur mandat.",
  },
  {
    id: "fin-de-licence",
    question: "Que devient notre formation signature si nous arrêtons ?",
    reponse:
      "Le contenu vous est remis sous forme de document complet, avec les ressources associées. Vous en conservez l'usage libre au sein de votre institution. Seuls l'hébergement en ligne, le suivi des parcours et les attestations cessent avec la licence.",
  },
  {
    id: "hebergement-donnees",
    question: "Où sont hébergées les données ?",
    reponse:
      "Les données sont hébergées en Europe, sur une infrastructure conforme au RGPD et à la nLPD. Aucune donnée n'est utilisée à d'autres fins que le fonctionnement de la plateforme.",
  },
]

export function TarifsQuestions() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-24">
      <FaqJsonLd questions={questions} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
          Questions sur la licence
        </h2>

        <div className="mt-10 rounded-2xl border border-border bg-card px-6 sm:px-8">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((q) => (
              <AccordionItem key={q.id} value={q.id}>
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-[#1B2D5B] hover:text-[#3DBFA0] hover:no-underline">
                  {q.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                  {q.reponse}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
