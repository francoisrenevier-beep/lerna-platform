import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module4Demence({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={4}
        categorie="Démence : sensibilisation générale"
        titre="Mon rôle"
        titrePart2="et le réseau"
        sousTitre="Se situer dans son rôle, savoir quand et vers qui transmettre, et prendre soin de soi dans un accompagnement exigeant."
        duree="25 minutes"
        niveau="Sensibilisation"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Chacun·e a un rôle">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre votre rôle dans l'accompagnement, quel que soit votre poste",
              "Formuler une observation factuelle et utile pour l'équipe",
              "Identifier les situations qui nécessitent une transmission rapide",
              "Connaître les ressources disponibles en Suisse",
              "Reconnaître l'importance de prendre soin de soi",
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Se situer dans son rôle">
          <Texte>Toute personne en contact avec un·e résident·e ou usager·ère a un rôle dans l&apos;accompagnement : un agent d&apos;entretien, un cuisinier, un membre du pool de remplacement contribuent au <strong>climat de sécurité et de respect</strong> qui fait la différence au quotidien.</Texte>

          <HighlightBox label="Le principe constant" couleur="bleu">
            <Texte>Chaque rôle a ses <strong>limites de compétence</strong>. Selon l&apos;institution et la fonction, ces limites varient — elles ne sont pas figées. Le principe reste constant : <strong>on accompagne dans son périmètre, et on transmet ce qui dépasse ce périmètre.</strong></Texte>
          </HighlightBox>

          <Texte>Les éléments cliniques (médicaments, traitements, diagnostic) relèvent strictement du médecin et de l&apos;équipe soignante. Toute situation complexe doit être référée aux professionnels compétents. Le rôle de chacun·e n&apos;est pas de décider — c&apos;est d&apos;observer, d&apos;accompagner avec justesse, et de transmettre.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Observer et transmettre">
          <Texte>Le rôle de chacun·e inclut souvent d&apos;<strong>observer et de transmettre</strong> des éléments utiles, sans interpréter ni diagnostiquer.</Texte>

          <Texte>Une bonne transmission est <strong>factuelle</strong> — elle décrit ce qui a été observé, pas une conclusion ou un jugement.</Texte>

          <div className="space-y-3 my-6">
            <div className="border-l-4 border-red-300 bg-red-50 rounded-r-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-1">❌ Transmission à éviter</p>
              <p className="text-sm text-gray-700 italic">«Madame R. fait sa difficile / commence à perdre la tête.»</p>
              <p className="text-sm text-gray-500 mt-1">→ Jugement subjectif, peu utile pour l&apos;équipe médicale</p>
            </div>
            <div className="border-l-4 border-[#3DBFA0] bg-[#F0FDF4] rounded-r-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-1">✓ Transmission factuelle</p>
              <p className="text-sm text-gray-700 italic">«Madame R. a refusé de déjeuner trois fois cette semaine et semble plus repliée depuis lundi.»</p>
              <p className="text-sm text-gray-500 mt-1">→ Faits précis, datés, observables — utiles pour l&apos;équipe soignante</p>
            </div>
          </div>

          <HighlightBox label="Repère LEARNA" couleur="jaune">
            <Texte>On transmet les <strong>faits observés</strong>, pas un jugement ni une conclusion médicale.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Quand alerter, et vers qui ?">
          <Texte>Transmettre rapidement aux professionnels compétents (équipe soignante, infirmier·ère référent·e, médecin) dans les situations suivantes :</Texte>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
            <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-xl p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-2">⚠ Alerter rapidement</p>
              <Liste items={[
                "Changement brusque de comportement ou de l'état général",
                "Douleur suspectée, chute, blessure",
                "Refus de boire ou de manger qui se répète",
                "Propos ou comportements faisant craindre pour la sécurité",
              ]} />
            </div>
            <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-xl p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-700 mb-2">📋 Transmettre à l&apos;équipe</p>
              <Liste items={[
                "Tout changement durable dans les habitudes ou l'humeur",
                "Comportement inhabituel répété plusieurs jours",
                "Refus de soins ou d'activités sans cause apparente",
                "Observation qui vous inquiète, même si vous n'êtes pas sûr·e",
              ]} />
            </div>
          </div>

          <HighlightBox label="Repère LEARNA" couleur="vert">
            <Texte>En cas de doute, on transmet. Mieux vaut une transmission «pour rien» qu&apos;un signe d&apos;alerte ignoré.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Prendre soin de soi">
          <Texte>Accompagner la démence est exigeant émotionnellement. L&apos;OMS rappelle que cela a un impact réel sur la santé et le bien-être de l&apos;aidant. C&apos;est vrai pour les proches aidants, mais aussi pour les professionnels.</Texte>

          <HighlightBox label="Ce qui fait la différence" couleur="bleu">
            <Liste items={[
              "Reconnaître sa fatigue et ses émotions, en parler en équipe — pas les minimiser",
              "S'appuyer sur le collectif : on n'accompagne jamais seul·e",
              "Faire des pauses, utiliser les espaces d'échange et de soutien proposés par l'institution",
              "Distinguer ce qui est dans son périmètre de ce qui ne l'est pas — s'autoriser à ne pas tout porter",
            ]} />
          </HighlightBox>

          <Texte>Prendre soin de soi n&apos;est pas un luxe — c&apos;est une condition pour accompagner durablement avec justesse. Un professionnel épuisé prend des risques : pour lui-même, et pour les personnes qu&apos;il accompagne.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 5" titre="Les ressources de référence en Suisse">
          <div className="space-y-3 my-4">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-sm font-bold text-[#1B2D5B] mb-1">Alzheimer Suisse et ses sections cantonales</p>
              <p className="text-sm text-gray-600">Information, conseil, soutien aux proches. <strong>Téléphone Alzheimer</strong> : ligne d&apos;écoute et de conseil pour les proches et les professionnels.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-sm font-bold text-[#1B2D5B] mb-1">Plateforme nationale démence (OFSP)</p>
              <p className="text-sm text-gray-600">Amélioration des prestations pour les personnes concernées et leurs proches. Ressources et guides pratiques.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-sm font-bold text-[#1B2D5B] mb-1">Au sein de votre institution</p>
              <p className="text-sm text-gray-600">Équipe soignante, référent·e, direction, dispositifs de soutien internes. En cas de doute sur à qui s&apos;adresser, commencez par votre responsable direct·e.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Synthèse de la formation" titre="Ce que vous avez parcouru">
          <HighlightBox label="Les 6 points essentiels" couleur="vert">
            <Liste items={[
              "La démence est un enjeu majeur : ~161'100 personnes en Suisse, en forte hausse",
              "C'est une maladie du cerveau, pas une fatalité du vieillissement ni de la folie",
              "Alzheimer est la forme la plus fréquente ; les formes mixtes sont courantes",
              "Le comportement est une communication : on cherche le besoin derrière le signe",
              "Une posture calme, simple et rassurante fait la différence au quotidien",
              "Chacun·e accompagne dans son rôle, observe et transmet des faits — et prend soin de soi",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Transmettre une observation à l'équipe soignante, c'est :",
            reponses: [
              "Poser un diagnostic sur l'état de la personne",
              "Rapporter des faits observés sans les interpréter",
              "Donner son opinion personnelle sur la situation",
              "Prendre une décision médicale à la place du médecin",
            ],
            bonneReponse: 1,
            explication: "Transmettre une observation, c'est rapporter des faits précis et observables — «Monsieur T. n'a pas mangé depuis hier soir et refuse qu'on entre dans sa chambre» — sans les interpréter ni en déduire un diagnostic. C'est ce que le médecin ou l'infirmier·ère attend de vous.",
          },
          {
            question: "Un agent d'entretien ou un membre du pool n'a aucun rôle dans l'accompagnement des personnes atteintes de démence.",
            reponses: [
              "Vrai — seul le personnel soignant a un rôle",
              "Faux — toute personne en contact contribue au climat de sécurité et de respect",
              "Vrai — sans formation spécialisée, il vaut mieux ne pas intervenir",
              "Faux — mais uniquement pour signaler des urgences médicales",
            ],
            bonneReponse: 1,
            explication: "Faux. Toute personne en contact avec un·e résident·e a un rôle : un agent d'entretien, un cuisinier, un membre du pool contribuent au climat de sécurité et de respect. Bien sûr, chaque rôle a ses limites — on accompagne dans son périmètre et on transmet ce qui le dépasse.",
          },
          {
            question: "En cas de doute sur un changement de comportement d'une personne, il faut :",
            reponses: [
              "Attendre que la situation se stabilise avant d'agir",
              "Transmettre aux professionnels compétents, même si on n'est pas certain·e",
              "Décider seul·e de la marche à suivre pour ne pas déranger l'équipe",
              "Attendre que le comportement se reproduise plusieurs semaines",
            ],
            bonneReponse: 1,
            explication: "En cas de doute, on transmet. Le repère LEARNA est clair : mieux vaut une transmission «pour rien» qu'un signe d'alerte ignoré. L'équipe soignante est formée pour évaluer — votre rôle est de lui donner l'information.",
          },
          {
            question: "Prendre soin de soi en tant qu'accompagnant·e est :",
            reponses: [
              "Un luxe que les professionnels ne peuvent pas se permettre",
              "Une nécessité pour bien accompagner dans la durée",
              "Un signe de faiblesse à ne pas montrer à l'équipe",
              "Utile seulement pour les proches aidants, pas pour les professionnels",
            ],
            bonneReponse: 1,
            explication: "L'OMS le confirme : accompagner la démence a un impact réel sur la santé et le bien-être des aidants — professionnels comme proches. Prendre soin de soi n'est pas un luxe : c'est une condition pour accompagner durablement avec justesse. Un professionnel épuisé prend des risques pour lui-même et pour les personnes accompagnées.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
