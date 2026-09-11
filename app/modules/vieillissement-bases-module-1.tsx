import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"
import {
  hero,
  sIntroduction,
  sDefinitions,
  sDemographie,
  sPrematurite,
  sProfils,
  sAllerPlusLoin,
  sConclusion,
  quiz,
} from "@/content/vieillissement-bases-module-1"

function gras(texte: string) {
  return texte.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  )
}

function ListeGras({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-[#3DBFA0]" />
          <span className="text-gray-700 leading-relaxed">{gras(item)}</span>
        </li>
      ))}
    </ul>
  )
}

function Statistiques({ items }: { items: { valeur: string; libelle: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 my-8">
      {items.map((stat, i) => (
        <div key={i} className="bg-[#1B2D5B] text-white rounded-xl p-6 text-center">
          <p className="text-4xl font-bold text-[#3DBFA0] mb-2">{stat.valeur}</p>
          <p className="text-sm text-white/70 leading-snug">{stat.libelle}</p>
        </div>
      ))}
    </div>
  )
}

function Scenario({
  titre,
  situation,
  question,
  reponse,
}: {
  titre: string
  situation: string
  question: string
  reponse: string
}) {
  return (
    <div className="space-y-3 my-6">
      <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
        <p className="text-gray-700 text-sm font-semibold mb-2">{titre}</p>
        <p className="text-gray-700 text-sm leading-relaxed">{gras(situation)}</p>
      </div>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
        <p className="text-gray-700 text-sm leading-relaxed italic">{question}</p>
      </div>
      <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
        <p className="text-gray-700 text-sm leading-relaxed">{gras(reponse)}</p>
      </div>
    </div>
  )
}

export function Module1VieillissementBases({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={hero.numero}
        categorie={hero.categorie}
        titre={hero.titre}
        titrePart2={hero.titrePart2}
        sousTitre={hero.sousTitre}
        duree={hero.duree}
        niveau={hero.niveau}
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow={sIntroduction.eyebrow} titre={sIntroduction.titre}>
          <ConceptBox label={sIntroduction.objectifs_label} titre={sIntroduction.objectifs_titre}>
            <ListeGras items={sIntroduction.objectifs} />
          </ConceptBox>
          <Texte>{gras(sIntroduction.texte1)}</Texte>
          <Texte>{gras(sIntroduction.texte2)}</Texte>
          <PullQuote source={sIntroduction.pullquote_source}>
            {sIntroduction.pullquote_texte}
          </PullQuote>
          <Texte>{gras(sIntroduction.texte3)}</Texte>
        </SectionModule>

        <SectionModule eyebrow={sDefinitions.eyebrow} titre={sDefinitions.titre}>
          <HighlightBox label={sDefinitions.definition_label} couleur="bleu">
            <Texte>{gras(sDefinitions.definition_texte)}</Texte>
          </HighlightBox>
          <Texte>{gras(sDefinitions.texte1)}</Texte>

          <TableauComparaison
            titre={sDefinitions.tableau_titre}
            colonnes={[
              { titre: sDefinitions.tableau_col1_titre, contenu: sDefinitions.tableau_col1_items },
              { titre: sDefinitions.tableau_col2_titre, contenu: sDefinitions.tableau_col2_items },
            ]}
          />

          <HighlightBox label={sDefinitions.seuil_label} couleur="jaune">
            <Texte>{gras(sDefinitions.seuil_texte1)}</Texte>
            <Texte>{gras(sDefinitions.seuil_texte2)}</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow={sDemographie.eyebrow} titre={sDemographie.titre}>
          <Texte>{gras(sDemographie.texte1)}</Texte>

          <Statistiques items={sDemographie.stats} />

          <Texte>{gras(sDemographie.texte2)}</Texte>

          <HighlightBox label={sDemographie.facteurs_label} couleur="vert">
            <ListeGras items={sDemographie.facteurs_items} />
          </HighlightBox>

          <HighlightBox label={sDemographie.ai_label} couleur="bleu">
            <Texte>{gras(sDemographie.ai_texte1)}</Texte>
            <Texte>{gras(sDemographie.ai_texte2)}</Texte>
          </HighlightBox>

          <HighlightBox label={sDemographie.avs_label} couleur="jaune">
            <Texte>{gras(sDemographie.avs_texte1)}</Texte>
            <Texte>{gras(sDemographie.avs_texte2)}</Texte>
          </HighlightBox>

          <Texte>{gras(sDemographie.texte3)}</Texte>
          <Texte>{gras(sDemographie.texte4)}</Texte>
        </SectionModule>

        <SectionModule eyebrow={sPrematurite.eyebrow} titre={sPrematurite.titre}>
          <HighlightBox label={sPrematurite.concept_label} couleur="bleu">
            <Texte>{gras(sPrematurite.concept_texte)}</Texte>
          </HighlightBox>

          <SchemaEtapes
            titre={sPrematurite.schema_titre}
            etapes={sPrematurite.schema_etapes}
            note={sPrematurite.schema_note}
          />

          <Scenario
            titre={sPrematurite.scenario_titre}
            situation={sPrematurite.scenario_situation}
            question={sPrematurite.scenario_question}
            reponse={sPrematurite.scenario_reponse}
          />

          <Texte>{gras(sPrematurite.texte_fin)}</Texte>
        </SectionModule>

        <SectionModule eyebrow={sProfils.eyebrow} titre={sProfils.titre}>
          <Texte>{gras(sProfils.texte1)}</Texte>

          <TableauComparaison
            titre={sProfils.tableau_titre}
            colonnes={[
              { titre: sProfils.tableau_col1_titre, contenu: sProfils.tableau_col1_items },
              { titre: sProfils.tableau_col2_titre, contenu: sProfils.tableau_col2_items },
              { titre: sProfils.tableau_col3_titre, contenu: sProfils.tableau_col3_items },
            ]}
          />

          <Texte>{gras(sProfils.texte2)}</Texte>

          <HighlightBox label={sProfils.trisomie_label} couleur="vert">
            <Texte>{gras(sProfils.trisomie_texte)}</Texte>
          </HighlightBox>

          <HighlightBox label={sProfils.autisme_label} couleur="bleu">
            <Texte>{gras(sProfils.autisme_texte1)}</Texte>
            <Texte>{gras(sProfils.autisme_texte2)}</Texte>
            <Texte>{gras(sProfils.autisme_texte3)}</Texte>
            <Texte>{gras(sProfils.autisme_texte4)}</Texte>
          </HighlightBox>

          <HighlightBox label={sProfils.di_label} couleur="vert">
            <Texte>{gras(sProfils.di_texte1)}</Texte>
            <Texte>{gras(sProfils.di_texte2)}</Texte>
            <Texte>{gras(sProfils.di_texte3)}</Texte>
            <Texte>{gras(sProfils.di_texte4)}</Texte>
          </HighlightBox>

          <PullQuote>{sProfils.pullquote_texte}</PullQuote>

          <Scenario
            titre={sProfils.scenario_titre}
            situation={sProfils.scenario_situation}
            question={sProfils.scenario_question}
            reponse={sProfils.scenario_reponse}
          />
        </SectionModule>

        <SectionModule eyebrow={sAllerPlusLoin.eyebrow} titre={sAllerPlusLoin.titre}>
          <Texte>{gras(sAllerPlusLoin.texte1)}</Texte>
          <Texte>{gras(sAllerPlusLoin.texte2)}</Texte>
          <Texte>{gras(sAllerPlusLoin.texte3)}</Texte>
          <PullQuote>{sAllerPlusLoin.pullquote_texte}</PullQuote>
          <Texte>{gras(sAllerPlusLoin.texte4)}</Texte>
        </SectionModule>

        <SectionModule eyebrow={sConclusion.eyebrow} titre={sConclusion.titre}>
          <Texte>{gras(sConclusion.texte1)}</Texte>
          <Texte>{gras(sConclusion.texte2)}</Texte>
          <HighlightBox label={sConclusion.retenir_label} couleur="vert">
            <ListeGras items={sConclusion.retenir_items} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz questions={quiz} onValiderModule={onValiderModule} />
    </div>
  )
}
