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
  sSeSituer,
  sReperes,
  sSecurite,
  sConclusion,
  quiz,
} from "@/content/violence-module-3"

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

export function Module3Violence({ onValiderModule }: { onValiderModule?: () => void } = {}) {
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
            <Texte>{sFilRouge.texte2}</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow={sIntroduction.eyebrow} titre={sIntroduction.titre}>
          <ConceptBox label={sIntroduction.objectifs_label} titre={sIntroduction.objectifs_titre}>
            <Liste items={sIntroduction.objectifs} />
          </ConceptBox>
          <Texte>{gras(sIntroduction.texte1)}</Texte>
          <Texte>{sIntroduction.texte2}</Texte>
          <Texte>{gras(sIntroduction.texte3)}</Texte>
          <PullQuote>{sIntroduction.pullquote_texte}</PullQuote>
        </SectionModule>

        <SectionModule eyebrow={sSeSituer.eyebrow} titre={sSeSituer.titre}>
          <Texte>{gras(sSeSituer.texte_intro)}</Texte>

          <SchemaEtapes titre={sSeSituer.schema_titre} etapes={sSeSituer.schema_etapes} />

          <HighlightBox label={sSeSituer.highlight_label} couleur="jaune">
            <Texte>{gras(sSeSituer.highlight_texte)}</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow={sReperes.eyebrow} titre={sReperes.titre}>
          <Texte>{sReperes.texte_intro}</Texte>

          <ConceptBox label={sReperes.concept_label} titre={sReperes.concept_titre}>
            <ListeGras items={sReperes.concept_items} />
          </ConceptBox>

          <TableauComparaison
            titre={sReperes.tableau_titre}
            colonnes={[
              { titre: sReperes.tableau_col1_titre, contenu: sReperes.tableau_col1_items },
              { titre: sReperes.tableau_col2_titre, contenu: sReperes.tableau_col2_items },
            ]}
          />

          <HighlightBox label={sReperes.highlight_label} couleur="jaune">
            <Texte>{gras(sReperes.highlight_texte)}</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow={sSecurite.eyebrow} titre={sSecurite.titre}>
          <Texte>{gras(sSecurite.texte_intro)}</Texte>

          <ConceptBox label={sSecurite.concept_label} titre={sSecurite.concept_titre}>
            <ListeGras items={sSecurite.concept_items} />
          </ConceptBox>

          <HighlightBox label={sSecurite.highlight_label} couleur="jaune">
            <Texte>{gras(sSecurite.highlight_texte)}</Texte>
          </HighlightBox>

          <PullQuote>{sSecurite.pullquote_texte}</PullQuote>
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
