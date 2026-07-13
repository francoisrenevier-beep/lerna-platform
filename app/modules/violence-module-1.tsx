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
  sDefinir,
  sProcessus,
  sCycle,
  sEcologique,
  sConclusion,
  quiz,
} from "@/content/violence-module-1"

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

export function Module1Violence({ onValiderModule }: { onValiderModule?: () => void } = {}) {
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
            <Texte>{gras(sFilRouge.texte1)}</Texte>
            <Texte>{sFilRouge.texte2}</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow={sIntroduction.eyebrow} titre={sIntroduction.titre}>
          <ConceptBox label={sIntroduction.objectifs_label} titre={sIntroduction.objectifs_titre}>
            <Liste items={sIntroduction.objectifs} />
          </ConceptBox>
          <Texte>{sIntroduction.texte1}</Texte>
          <Texte>{gras(sIntroduction.texte2)}</Texte>
          <PullQuote>{sIntroduction.pullquote_texte}</PullQuote>
        </SectionModule>

        <SectionModule eyebrow={sDefinir.eyebrow} titre={sDefinir.titre}>
          <Texte>{gras(sDefinir.texte1)}</Texte>
          <Texte>{gras(sDefinir.texte2)}</Texte>
          <Texte>{gras(sDefinir.texte3)}</Texte>

          <TableauComparaison
            titre={sDefinir.tableau_titre}
            colonnes={[
              { titre: sDefinir.tableau_col1_titre, contenu: sDefinir.tableau_col1_items },
              { titre: sDefinir.tableau_col2_titre, contenu: sDefinir.tableau_col2_items },
            ]}
          />

          <HighlightBox label={sDefinir.highlight_label} couleur="jaune">
            <Texte>{gras(sDefinir.highlight_texte)}</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow={sProcessus.eyebrow} titre={sProcessus.titre}>
          <Texte>{gras(sProcessus.texte1)}</Texte>
          <Texte>{sProcessus.texte2}</Texte>

          <ConceptBox label={sProcessus.concept_label} titre={sProcessus.concept_titre}>
            <ListeGras items={sProcessus.concept_items} />
          </ConceptBox>

          <Texte>{gras(sProcessus.texte3)}</Texte>
          <PullQuote>{sProcessus.pullquote_texte}</PullQuote>
        </SectionModule>

        <SectionModule eyebrow={sCycle.eyebrow} titre={sCycle.titre}>
          <Texte>{sCycle.texte_intro}</Texte>

          <SchemaEtapes titre={sCycle.schema_titre} etapes={sCycle.schema_etapes} />

          <HighlightBox label={sCycle.highlight_label} couleur="jaune">
            <Texte>{gras(sCycle.highlight_texte)}</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow={sEcologique.eyebrow} titre={sEcologique.titre}>
          <Texte>{gras(sEcologique.texte_intro)}</Texte>

          <TableauComparaison
            titre={sEcologique.tableau_titre}
            colonnes={[
              { titre: sEcologique.tableau_col1_titre, contenu: sEcologique.tableau_col1_items },
              { titre: sEcologique.tableau_col2_titre, contenu: sEcologique.tableau_col2_items },
            ]}
          />

          <Texte>{gras(sEcologique.texte_milieu)}</Texte>

          <ConceptBox label={sEcologique.concept_label} titre={sEcologique.concept_titre}>
            <ListeGras items={sEcologique.concept_items} />
          </ConceptBox>

          <HighlightBox label={sEcologique.highlight_label} couleur="vert">
            <Texte>{gras(sEcologique.highlight_texte)}</Texte>
          </HighlightBox>
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
