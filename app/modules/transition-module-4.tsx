import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module4TransitionAgeAdulte({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={4}
        categorie="Transition vers l'âge adulte"
        titre="Le jeune adulte :"
        titrePart2="le grand oublié ?"
        sousTitre="Replacer le jeune au centre de la transition, et interroger nos pratiques quant à sa place réelle dans les décisions qui le concernent."
        duree="35 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Fil rouge" titre="Julien en réunion de réseau">
          <HighlightBox label="La scène" couleur="bleu">
            <Texte>Julien assiste à une réunion de réseau. Autour de la table : sa mère Nathalie, son éducatrice référente de l'EPS, une représentante de l'OFAS et la directrice de l'ESE pressentie. Pendant 45 minutes, tout le monde parle de son avenir. On discute de ses capacités, de ses besoins, de ce qui lui conviendrait. On mentionne ses difficultés. On évoque ses progrès. Personne ne lui demande son avis. Il regarde par la fenêtre.</Texte>
            <Texte>Ce n'est pas une scène exceptionnelle. C'est une scène ordinaire. Et c'est précisément ce qui pose problème.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="La personne au cœur du processus : pas au bord">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre pourquoi le jeune adulte est souvent absent de facto des décisions qui le concernent, même quand il est physiquement présent",
              "Identifier les mécanismes de surprotection et leur impact sur la construction identitaire du jeune",
              "Distinguer l'autonomie normative de l'autodétermination réelle",
              "Identifier des pratiques concrètes pour associer le jeune adulte à son propre projet de transition",
            ]} />
          </ConceptBox>
          <Texte>Il existe un paradoxe central dans l'accompagnement des personnes en situation de handicap lors des transitions : plus la personne a besoin de soutien, moins on lui demande son avis. Plus ses besoins sont importants, plus les adultes qui l'entourent (parents, professionnels, institutions) ont tendance à décider à sa place, avec les meilleures intentions du monde.</Texte>
          <Texte>Ce module ne plaide pas pour une autonomie illusoire qui nierait la réalité des besoins de soutien. Il plaide pour que le jeune adulte ait des prises réelles sur son existence (même partielles, même modestes), et pour que les institutions construisent activement les conditions de cette participation.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="L'adulte qui reste traité comme un enfant : le statut de sujet en question">
          <Texte>Régine Scelles, professeure de psychopathologie spécialisée dans la clinique du handicap, souligne une tension fondamentale dans l'accompagnement professionnel : la personne handicapée doit pouvoir dire d'elle-même des choses que ses accompagnateurs ne savent pas. Elle est un sujet qui a une expérience intérieure, des préférences, des peurs, des désirs, et cette expérience ne peut être connue qu'en lui posant la question.</Texte>

          <PullQuote source="Régine Scelles, Le Journal des psychologues, n°291">
            Cela suppose d'être persuadé que la personne handicapée, quelle que soit sa pathologie, peut et doit pouvoir dire d'elle des choses que vous ou ses accompagnateurs ne savez pas. Lui poser des questions dont on connaît déjà les réponses, ou ne pas faire "semblant" d'écouter en pensant que la "vérité" sera dite par un autre qui la connaît bien, ce sont des attitudes qui nient son statut de sujet.
          </PullQuote>

          <HighlightBox label="Ce qui nie le statut de sujet en pratique" couleur="jaune">
            <Texte>Le statut de sujet d'un jeune adulte en situation de handicap est nié de nombreuses façons, souvent sans intention malveillante :</Texte>
            <Liste items={[
              "Parler de lui en sa présence à la troisième personne : 'Julien il aime bien les activités manuelles', alors que Julien est assis à la table",
              "Poser des questions à ses parents plutôt qu'à lui sur ses préférences quotidiennes",
              "Prendre des décisions importantes (lieu de vie, groupe d'appartenance, organisation du quotidien) sans avoir d'abord cherché à connaître son avis",
              "Interpréter ses comportements sans vérifier l'interprétation avec lui",
              "Construire son projet personnalisé avec les adultes autour de lui, sans qu'il en soit l'acteur principal",
            ]} />
          </HighlightBox>

          <Texte>Ce qui est vrai dans le quotidien de l'accompagnement l'est encore plus lors des grandes transitions. L'entrée en ESE est un moment où l'identité adulte se construit, ou ne se construit pas. Lorsque les décisions essentielles sont prises sans que la parole du jeune soit réellement entendue, il fait l'expérience d'un parcours qui se construit <em>pour lui</em> plus qu'<em>avec lui</em>. Cette expérience laisse des traces, sur sa capacité à se penser comme acteur de sa propre vie, et sur sa relation avec les institutions qui suivront.</Texte>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Julien, après la réunion</p>
              <p className="text-gray-700 text-sm leading-relaxed">Sur le chemin du retour dans la voiture, Nathalie demande à Julien : "Ça va ? Tu as compris ce qu'on a dit ?" Il hoche la tête. Elle insiste doucement : "Tu sais que bientôt tu vas aller dans un autre endroit que l'école ?" Il répond : "Oui." Il y a une longue pause. Puis : "C'est bien ?" Elle ne sait pas quoi répondre. Elle réalise qu'elle n'a jamais vraiment demandé à Julien ce qu'il pensait de tout ça. Et que pendant toute la réunion, personne d'autre ne l'avait fait non plus.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="La surprotection : quand l'amour entrave l'identité">
          <Texte>La surprotection parentale, ou institutionnelle, est présentée socialement comme une marque d'amour et d'investissement. Elle l'est, en partie. Mais Françoise Peille, psychologue clinicienne, attire l'attention sur un paradoxe moins souvent nommé : la surprotection peut aussi masquer un rejet difficile à exprimer, induit par la fragilité et la dépendance engendrées par le handicap.</Texte>

          <ConceptBox label="La surprotection comme mécanisme paradoxal" titre="Entre amour et évitement">
            <Texte>Ce mécanisme fonctionne de façon non consciente. Le parent qui ne peut pas supporter de voir son enfant souffrir, échouer, ou prendre des risques, le protège de toute expérience difficile. Ce faisant, il protège aussi <em>lui-même</em> de la douleur de voir son enfant échouer. La surprotection est donc à la fois un acte d'amour et une stratégie de protection psychique du parent, ce qui la rend d'autant plus difficile à remettre en cause.</Texte>
          </ConceptBox>

          <HighlightBox label="La surprotection institutionnelle : un angle mort" couleur="jaune">
            <Texte>Ce mécanisme touche aussi les professionnels, et c'est là où il est le moins souvent identifié. Maintenir la personne dans une posture de bénéficiaire passif, prendre les décisions à sa place au nom de son "bien-être", organiser des réunions sur son avenir sans lui : tout cela peut être animé d'intentions bienveillantes tout en reproduisant une forme d'effacement de sa subjectivité.</Texte>
            <Texte>La surprotection institutionnelle opère notamment dans :</Texte>
            <Liste items={[
              "La tendance à simplifier ou filtrer les informations transmises au jeune 'pour ne pas l'angoisser'",
              "L'habitude de parler de la personne en dehors de sa présence, même pour des décisions qui la concernent directement",
              "La résistance à la prise de risque : interdire des expériences jugées trop difficiles, plutôt que d'évaluer ce risque avec la personne",
              "L'attribution d'un référent unique qui 'connaît bien' la personne, ce qui peut produire une forme de mainmise bienveillante",
            ]} />
          </HighlightBox>

          <div className="space-y-4 my-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-700 mb-2">Risque professionnel</p>
              <p className="text-gray-700 text-sm leading-relaxed">La surprotection institutionnelle (organiser, décider, anticiper à la place de la personne) est une forme d'accompagnement qui invalide l'autonomie psychique du jeune adulte, même lorsqu'elle est bien intentionnée. Elle reproduit, dans un nouveau contexte, la même expérience d'effacement que la personne a peut-être déjà vécue dans d'autres institutions. Et elle prive les parents d'un signal important : celui que l'institution traite leur enfant comme un adulte.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Autodétermination : de quoi s'agit-il vraiment ?">
          <Texte>L'autodétermination est un concept qui circule beaucoup dans le secteur du handicap. Il est souvent mal compris dans deux directions opposées : soit comme une autonomie totale, qui niegrait la réalité des besoins de soutien, soit comme une impossibilité, "Julien ne peut pas décider pour lui-même". Ces deux lectures manquent la réalité.</Texte>

          <ConceptBox label="Qu'est-ce que l'autodétermination ?" titre="Un continuum, pas un état binaire">
            <Texte>L'autodétermination ne signifie pas décider seul, sans aide, sans soutien. Elle signifie que la personne est l'auteur principal des décisions qui concernent sa vie, avec le soutien dont elle a besoin pour exercer ce rôle. Dans ce cadre, une personne avec une déficience intellectuelle modérée et TSA peut exercer une forme réelle d'autodétermination :</Texte>
            <Liste items={[
              "En choisissant entre deux ou trois options concrètes présentées avec des supports visuels",
              "En exprimant ses préférences sur son organisation quotidienne (quand se lever, avec qui manger, quelles activités)",
              "En visitant un lieu avant qu'une décision soit prise, et en pouvant exprimer si elle s'y sent bien ou non",
              "En pouvant dire 'non' à quelque chose : et que ce 'non' soit pris au sérieux",
            ]} />
          </ConceptBox>

          <HighlightBox label="L'autodétermination comme processus à construire" couleur="bleu">
            <Texte>L'enjeu n'est pas de placer le jeune adulte devant une liberté totale pour laquelle il n'est pas préparé. L'enjeu est de construire progressivement les conditions pour qu'il puisse exercer une influence réelle sur sa propre vie, en commençant par les domaines les plus accessibles, avec les outils les plus adaptés à ses capacités communicationnelles.</Texte>
            <Texte>Dans le contexte de la transition, cela peut commencer avant même l'entrée en ESE : Julien a-t-il visité des lieux ? A-t-il pu exprimer une préférence ? A-t-il reçu des informations sur ce qui va changer, sous une forme qu'il peut comprendre ? A-t-il un espace pour poser des questions ?</Texte>
          </HighlightBox>

          <SchemaEtapes
            titre="Favoriser l'autodétermination de Julien lors de la transition"
            etapes={[
              {
                niveau: "Avant la réunion",
                nom: "Préparer, pas informer",
                definition: "Préparer Julien à la réunion, en amont, dans un cadre préparatoire individuel. Lui expliquer ce qui va se passer, lui demander ce qui lui importe, identifier avec lui deux ou trois choses qu'il voudrait dire ou demander. Il est ainsi en état de participer, pas seulement de subir."
              },
              {
                niveau: "Pendant la réunion",
                nom: "Lui adresser la parole directement",
                definition: "Lui poser des questions directement, même si les réponses sont courtes ou prennent du temps. Lui donner le temps de répondre, sans que les adultes remplissent le silence à sa place. Utiliser des formulations accessibles, des supports visuels si nécessaire. S'assurer que quelqu'un dans la salle est spécifiquement attentif à ce qu'il exprime, verbalement et non verbalement."
              },
              {
                niveau: "Après la réunion",
                nom: "Débriefer avec lui",
                definition: "Reprendre avec lui, dans un cadre calme, ce qui a été décidé. Vérifier sa compréhension. Lui donner un espace pour exprimer ses réactions, satisfaction, inquiétude, questions. Consigner ce qu'il a exprimé dans les transmissions."
              },
              {
                niveau: "Pour les visites",
                nom: "Voir avant de décider",
                definition: "Toujours permettre au jeune de visiter les lieux avant qu'une décision définitive soit prise. Sa réaction pendant la visite (son langage corporel, ses questions, son niveau d'énergie) est une information précieuse que le dossier ne peut pas contenir."
              },
            ]}
            note="Ces pratiques ne nécessitent pas de ressources supplémentaires significatives. Elles nécessitent une conviction : que la parole et l'expérience de Julien sont une source d'information irremplaçable sur ce qui lui convient."
          />
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Le double bénéfice de l'émancipation : pour Julien et pour les parents">
          <Texte>Un point souvent sous-estimé : l'émancipation soutenue du jeune adulte ne bénéficie pas seulement à lui. Elle bénéficie aussi aux parents, et à la relation entre les parents et l'institution.</Texte>

          <HighlightBox label="Quand l'institution soutient l'émancipation" couleur="vert">
            <Texte>Quand une institution montre concrètement qu'elle traite Julien comme un adulte (en lui posant des questions, en tenant compte de ses préférences, en lui donnant des prises sur son quotidien), elle envoie aux parents un signal fort. Ce signal dit :</Texte>
            <Liste items={[
              "Leur enfant est respecté dans sa dignité d'adulte",
              "L'institution ne va pas le maintenir dans une posture d'enfant perpétuel",
              "Il est possible de déléguer sans craindre que leur enfant soit nié en tant que personne",
              "L'émancipation de leur enfant n'est pas une menace pour leur rôle parental, elle est une opportunité",
            ]} />
            <Texte>Ce signal aide les parents à relâcher progressivement leur posture de protection, non pas parce qu'on leur demande de le faire, mais parce qu'ils voient que quelqu'un d'autre prend le relais de façon digne.</Texte>
          </HighlightBox>

          <PullQuote>
            Maintenir la personne dans une posture d'enfant entrave les processus d'individuation et renforce les tensions familiales. Soutenir son émancipation, même partielle, offre aux parents un cadre pour relâcher leur posture de protection.
          </PullQuote>

          <TableauComparaison
            titre="Effets comparés de deux postures institutionnelles"
            colonnes={[
              {
                titre: "Maintenir dans la posture d'enfant",
                contenu: [
                  "Le jeune n'expérimente pas sa capacité à influencer son environnement",
                  "Les parents restent en alerte maximale, ils compensent le manque d'agentivité de leur enfant",
                  "Les tensions famille-institution augmentent : les parents sentent que leur enfant n'est pas respecté",
                  "L'identité adulte ne se construit pas : le risque de régression augmente",
                ]
              },
              {
                titre: "Soutenir l'émancipation",
                contenu: [
                  "Le jeune acquiert progressivement la confiance d'influencer sa propre vie",
                  "Les parents voient que leur enfant est traité comme un adulte, ils peuvent commencer à déléguer",
                  "Les tensions diminuent : l'institution montre qu'elle partage les valeurs parentales de respect",
                  "L'identité adulte se construit : le processus d'individuation peut s'engager",
                ]
              },
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Le jeune adulte est souvent le grand oublié de la transition, présent physiquement, absent symboliquement. Les mécanismes qui produisent cet oubli sont généralement bien intentionnés : surprotection parentale, gestion du temps en réunion, conviction (erronée) que la personne ne peut pas comprendre ou décider. Reconnaître ces mécanismes, c'est se donner les moyens de les dépasser, et de construire une transition qui ne se fait pas seulement pour Julien, mais avec lui.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Le statut de sujet d'une personne handicapée ne dépend pas de ses capacités cognitives, il dépend de la façon dont les autres s'adressent à elle",
              "La surprotection institutionnelle est une forme d'accompagnement qui invalide l'autonomie psychique du jeune adulte, même bien intentionnée",
              "L'autodétermination n'est pas une autonomie totale, c'est la capacité à exercer une influence réelle sur sa propre vie, avec le soutien dont on a besoin",
              "Préparer le jeune à la réunion, lui adresser la parole directement, débriefer avec lui : ces pratiques simples changent radicalement la qualité de la participation",
              "Quand l'institution soutient l'émancipation du jeune, elle offre aussi aux parents un signal qui leur permet de progressivement déléguer",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Julien est présent dans une réunion de réseau mais personne ne lui demande directement son avis. Quel est l'effet de cette situation sur son statut de sujet ?",
            reponses: [
              "Aucun effet, les personnes avec TSA ne perçoivent généralement pas ce qui se passe autour d'elles dans ces réunions",
              "Un effet positif : ne pas avoir à parler en réunion réduit son anxiété sociale",
              "Un effet négatif, il fait l'expérience que son avenir se construit pour lui sans lui, ce qui entrave la construction de son identité adulte",
              "L'effet dépend entièrement de sa déficience intellectuelle",
            ],
            bonneReponse: 2,
            explication: "Selon Régine Scelles, toute personne handicapée peut et doit pouvoir dire d'elle-même des choses que ses accompagnateurs ne savent pas. Quand personne ne le lui demande, la personne fait l'expérience d'être niée comme sujet. Cette expérience laisse des traces, sur la confiance en sa propre parole, sur la perception de son rôle dans sa propre vie, et sur sa relation aux institutions qui suivront.",
          },
          {
            question: "La surprotection parentale est souvent présentée comme une marque d'amour. Qu'est-ce que Françoise Peille ajoute à cette lecture ?",
            reponses: [
              "Que la surprotection est toujours une forme de pathologie parentale qui nécessite un suivi psychologique",
              "Qu'elle peut aussi masquer un rejet non exprimable, lui-même induit par la fragilité et la dépendance engendrées par le handicap",
              "Qu'elle est une réaction normale et universelle qui disparaît naturellement avec le temps",
              "Qu'elle ne concerne que les mères et jamais les pères",
            ],
            bonneReponse: 1,
            explication: "Françoise Peille souligne un paradoxe : la surprotection parentale peut être simultanément un acte d'amour et une stratégie de protection du parent lui-même, contre la douleur de voir son enfant souffrir ou échouer. Ce double registre rend la surprotection difficile à remettre en cause, parce qu'elle est ancrée dans quelque chose de profondément légitime : l'amour parental. Le comprendre aide à aborder la question avec les familles sans les culpabiliser.",
          },
          {
            question: "Qu'est-ce que l'autodétermination dans le contexte d'une personne avec une déficience intellectuelle modérée ?",
            reponses: [
              "La capacité à prendre toutes les décisions importantes de sa vie de façon totalement autonome",
              "Une impossibilité pour les personnes avec déficience intellectuelle, elles ne peuvent pas comprendre les enjeux de leurs choix",
              "La capacité à exercer une influence réelle sur sa propre vie, avec le soutien dont on a besoin pour exercer ce rôle",
              "Un objectif théorique jamais réalisable en pratique dans le secteur du handicap adulte",
            ],
            bonneReponse: 2,
            explication: "L'autodétermination n'est pas un état binaire, elle est un continuum. Elle ne signifie pas décider seul sans aide, mais être l'auteur principal des décisions qui concernent sa vie, avec le soutien nécessaire. Une personne avec déficience intellectuelle modérée peut exercer une forme réelle d'autodétermination : choisir entre options concrètes, exprimer ses préférences quotidiennes, dire non à quelque chose et être entendue. L'enjeu est de construire les conditions de cette participation, pas de la présupposer ou de la nier.",
          },
          {
            question: "Parmi les pratiques suivantes, laquelle favorise le mieux l'autodétermination de Julien lors de sa transition vers l'ESE ?",
            reponses: [
              "Lui lire le compte-rendu de la réunion après coup pour l'informer des décisions prises",
              "Le préparer individuellement avant la réunion, lui demander ce qui lui importe, et lui adresser la parole directement pendant la réunion",
              "Lui expliquer que les adultes prennent les décisions dans son intérêt",
              "L'exclure des réunions pour éviter qu'il soit angoissé par les enjeux qui y sont discutés",
            ],
            bonneReponse: 1,
            explication: "La préparation individuelle avant la réunion est un levier central : elle transforme Julien d'un spectateur passif en participant potentiel. En lui permettant d'identifier ce qu'il veut dire ou demander, on lui donne des prises réelles sur la réunion. Lui adresser la parole directement pendant la réunion, même pour des échanges courts, lui signifie qu'il est bien un acteur de son propre projet, et non l'objet de la discussion des adultes.",
          },
          {
            question: "En quoi soutenir l'émancipation de Julien bénéficie-t-il aussi à ses parents ?",
            reponses: [
              "Cela les soulage d'une charge quotidienne trop lourde",
              "Cela leur signifie que leur enfant est traité comme un adulte respecté, ce qui les aide à progressivement déléguer sans craindre que leur enfant soit nié",
              "Cela les oblige à réviser leur vision du handicap et à se former sur l'autodétermination",
              "Cela n'a aucun effet sur les parents : ce sont deux questions distinctes",
            ],
            bonneReponse: 1,
            explication: "Quand l'institution montre concrètement qu'elle traite Julien comme un adulte (en lui posant des questions, en tenant compte de ses préférences, en lui donnant des prises sur son quotidien), elle envoie un signal fort aux parents : leur enfant est respecté. Ce signal aide les parents à relâcher progressivement leur posture de protection. Non pas parce qu'on leur demande de le faire, mais parce qu'ils voient que quelqu'un d'autre prend le relais de façon digne.",
          },
          {
            question: "La surprotection institutionnelle est identifiée comme un 'risque professionnel'. Pourquoi ce terme est-il approprié ?",
            reponses: [
              "Parce qu'elle expose les professionnels à des sanctions légales",
              "Parce qu'elle est une forme d'accompagnement qui invalide l'autonomie psychique du jeune adulte, tout en étant bien intentionnée, ce qui la rend difficile à détecter et à corriger",
              "Parce qu'elle crée des dépendances affectives problématiques entre professionnels et résidents",
              "Parce qu'elle est contraire aux exigences du cahier des charges des ESE",
            ],
            bonneReponse: 1,
            explication: "La surprotection institutionnelle est un risque professionnel précisément parce qu'elle est bien intentionnée. Il ne s'agit pas d'une malveillance facile à identifier, c'est une dérive du soin vers l'effacement de la subjectivité de la personne accompagnée. Organiser, décider, anticiper à la place de quelqu'un 'pour son bien' invalide progressivement sa capacité à se penser comme acteur de sa propre vie. C'est un processus insidieux que seule une réflexion régulière sur les pratiques peut permettre de corriger.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
