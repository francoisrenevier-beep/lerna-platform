"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const questions = [
  {
    id: "q1",
    question: "Comment les institutions utilisent-elles concrètement LEARNA au quotidien ?",
    reponse:
      "Les usages sont variés et s'adaptent à votre organisation. Certaines institutions intègrent une formation dans le parcours d'accueil d'un nouveau collaborateur. D'autres consacrent un temps d'équipe à une thématique commune, ou laissent chacun avancer à son rythme entre deux interventions. LEARNA sert aussi de point d'entrée pour le personnel de nuit, l'intendance ou l'administratif, rarement touchés par les formats classiques. C'est un outil souple, que vous déployez selon vos priorités.",
  },
  {
    id: "q2",
    question: "LEARNA remplace-t-il nos formations présentielles ?",
    reponse:
      "Non, et ce n'est pas son rôle. LEARNA est complémentaire : il crée une base commune et un vocabulaire partagé à l'échelle de toute l'équipe, et ouvre la porte à un travail plus approfondi en présentiel ou en formation continue. C'est un point de départ qui valorise vos autres dispositifs, pas un substitut.",
  },
  {
    id: "q3",
    question:
      "Tous nos collaborateurs sont-ils concernés, même en dehors de l'accompagnement direct ?",
    reponse:
      "Oui. L'un des intérêts de LEARNA est précisément de sensibiliser l'ensemble des collaborateurs, y compris les équipes de nuit, l'intendance, le personnel technique et administratif. Ces personnes participent à la vie de l'institution et au quotidien des personnes accompagnées, mais restent souvent à l'écart des plans de formation. LEARNA leur donne accès à un socle commun de réflexion.",
  },
  {
    id: "q4",
    question: "Pouvons-nous faire produire une formation propre à notre institution ?",
    reponse:
      "Oui. Chaque licence annuelle comprend la production d'une formation propre à votre institution, visible uniquement par vos collaborateurs et hébergée sur la plateforme aux côtés du catalogue commun.\n\nL'usage le plus fréquent est l'accueil des nouveaux collaborateurs : présentation de l'institution, repères de fonctionnement, informations que vous souhaitez transmettre à chaque arrivée. Vous nous fournissez les contenus (documents internes, procédures, éléments de présentation), et nous les mettons en forme selon les standards pédagogiques de la plateforme. Le contenu reste votre propriété ; nous en assurons la mise en forme, l'hébergement et le suivi des consultations.\n\nComptez quelques semaines à partir de la réception des contenus validés. Une révision annuelle est comprise, pour tenir compte des évolutions de votre organisation. Des formations supplémentaires peuvent être produites sur mandat, sur devis.",
  },
  {
    id: "q5",
    question: "Comment suivons-nous la participation et les apprentissages ?",
    reponse:
      "Votre espace institution vous donne une vue d'ensemble de la participation de vos collaborateurs. Chaque formation suivie donne lieu à une attestation. Vous disposez ainsi d'une preuve concrète que vos équipes partagent une base commune, utile aussi bien pour le pilotage interne que pour vos démarches qualité.",
  },
  {
    id: "q6",
    question: "Comment se passe la mise en route ?",
    reponse:
      "Votre institution souscrit une licence annuelle, tout inclus. Vos collaborateurs créent leur compte en quelques secondes grâce à un code institutionnel, puis accèdent immédiatement à l'ensemble des formations. Aucune installation, aucune logistique complexe : l'accès est disponible en tout temps, sur tous les supports.",
  },
  {
    id: "q7",
    question: "Les contenus sont-ils fiables et à jour ?",
    reponse:
      "Chaque formation est conçue avec un·e professionnel·le du champ, ancré·e dans la pratique, à partir de besoins identifiés sur le terrain. De nouvelles formations sont ajoutées régulièrement selon l'évolution de ces besoins. Les références qui appuient les contenus sont présentes de façon discrète, au service de la pratique plutôt que de la démonstration.",
  },
  {
    id: "q8",
    question: "Le e-learning est-il vraiment efficace pour développer les compétences ?",
    reponse:
      "Oui, à condition de bien comprendre son rôle. LEARNA s'inscrit dans une logique de blended learning : la formation en ligne n'a pas vocation à remplacer le présentiel, mais à en être le socle. Les travaux de recherche sur la formation en ligne convergent sur ce point, combinée à d'autres modalités, elle est au moins aussi efficace que le présentiel seul pour l'acquisition de connaissances, et c'est précisément cette complémentarité qui produit les meilleurs résultats.\n\nLa vraie plus-value est double. D'abord, l'ancrage : nos formations alternent contenus concrets, exemples issus du terrain et questionnaires de validation, ce qui aide chacun à vérifier et consolider ce qu'il a retenu. Ensuite, et c'est sans doute l'essentiel, la portée : là où une journée de formation présentielle ne touche qu'une partie des équipes, LEARNA atteint l'ensemble des collaborateurs, y compris le personnel de nuit, les auxiliaires et le personnel administratif. Il devient ainsi un socle de diffusion bien plus large, qui installe un vocabulaire et des repères communs à toute l'institution, sur lesquels le travail en présentiel peut ensuite s'appuyer en profondeur.",
  },
  {
    id: "q9",
    question: "Quel est le format des formations ?",
    reponse:
      "Les formations se suivent en ligne, en tout temps et sur tous les supports (ordinateur, tablette, téléphone). Elles sont organisées en modules courts, généralement d'une vingtaine de minutes, que l'on peut suivre d'une traite ou reprendre en plusieurs fois. Chaque parcours alterne contenus, exemples concrets et points de validation, et donne lieu à une attestation une fois terminé. Certaines formations sont structurées en niveaux progressifs, pour avancer à son rythme sans décrochage.",
  },
]

export function FaqDirecteurs({ limit }: { limit?: number } = {}) {
  const liste = limit !== undefined ? questions.slice(0, limit) : questions

  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">
            Questions fréquentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Ce que les directions et coordinateur·trices de formation nous demandent le plus
            souvent
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card px-6 sm:px-8">
          <Accordion type="single" collapsible className="w-full">
            {liste.map((q) => (
              <AccordionItem key={q.id} value={q.id}>
                <AccordionTrigger className="text-left text-base font-semibold text-[#1B2D5B] hover:no-underline hover:text-[#3DBFA0] py-5">
                  {q.question}
                </AccordionTrigger>
                {/* whitespace-pre-line : les réponses séparent leurs paragraphes
                    par \n\n, que HTML réduirait sinon à une espace. */}
                <AccordionContent className="whitespace-pre-line text-muted-foreground leading-relaxed pb-5">
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
