import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"
import {
  hero,
  sFilRouge,
  sIntroduction,
  sApprenante,
  sArbre,
  sSituations,
  sConclusion,
  quiz,
} from "@/content/violence-module-2"

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

export function Module2Violence({ onValiderModule }: { onValiderModule?: () => void } = {}) {
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

        <SectionModule eyebrow={sFilRouge.eyebrow} titre={sFilRouge.titre}>
          <HighlightBox label={sFilRouge.highlight_label} couleur="bleu">
            <Texte>{sFilRouge.texte1}</Texte>
            <Texte>{gras(sFilRouge.texte2)}</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow={sIntroduction.eyebrow} titre={sIntroduction.titre}>
          <ConceptBox label={sIntroduction.objectifs_label} titre={sIntroduction.objectifs_titre}>
            <Liste items={sIntroduction.objectifs} />
          </ConceptBox>
          <Texte>{gras(sIntroduction.texte1)}</Texte>
          <Texte>{gras(sIntroduction.texte2)}</Texte>
          <PullQuote>{sIntroduction.pullquote_texte}</PullQuote>
        </SectionModule>

        <SectionModule eyebrow={sApprenante.eyebrow} titre={sApprenante.titre}>
          <Texte>{gras(sApprenante.texte_intro)}</Texte>

          <TableauComparaison
            titre={sApprenante.tableau_titre}
            colonnes={[
              { titre: sApprenante.tableau_col1_titre, contenu: sApprenante.tableau_col1_items },
              { titre: sApprenante.tableau_col2_titre, contenu: sApprenante.tableau_col2_items },
            ]}
          />

          <HighlightBox label={sApprenante.highlight_label} couleur="jaune">
            <Texte>{gras(sApprenante.highlight_texte)}</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow={sArbre.eyebrow} titre={sArbre.titre}>
          <Texte>{gras(sArbre.texte_intro)}</Texte>

          <SchemaEtapes titre={sArbre.schema_titre} etapes={sArbre.schema_etapes} />

          <Texte>{sArbre.texte_milieu}</Texte>

          <ConceptBox label={sArbre.concept_label} titre={sArbre.concept_titre}>
            <ListeGras items={sArbre.concept_items} />
          </ConceptBox>

          <HighlightBox label={sArbre.highlight_label} couleur="vert">
            <Texte>{gras(sArbre.highlight_texte)}</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow={sSituations.eyebrow} titre={sSituations.titre}>
          <Texte>{gras(sSituations.texte_intro)}</Texte>

          <TableauComparaison
            titre={sSituations.tableau_titre}
            colonnes={[
              { titre: sSituations.tableau_col1_titre, contenu: sSituations.tableau_col1_items },
              { titre: sSituations.tableau_col2_titre, contenu: sSituations.tableau_col2_items },
            ]}
          />

          <Texte>{gras(sSituations.texte_milieu)}</Texte>
          <Texte>{gras(sSituations.texte_fin)}</Texte>
          <PullQuote>{sSituations.pullquote_texte}</PullQuote>
        </SectionModule>

        <SectionModule eyebrow={sConclusion.eyebrow} titre={sConclusion.titre}>
          <Texte>{sConclusion.texte}</Texte>
          <HighlightBox label={sConclusion.retenir_label} couleur="vert">
            <Liste items={sConclusion.retenir_items} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz questions={quiz} onValiderModule={onValiderModule} />
    </div>
  )
}
