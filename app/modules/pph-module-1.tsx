import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"

export function Module1PPH() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <HeroModule
        numero={1}
        categorie="Test"
        titre="Test module"
        sousTitre="Test"
        duree="40 min"
        niveau="Tous"
      />
      <SectionModule eyebrow="Test" titre="Test section">
        <Texte>Test contenu</Texte>
      </SectionModule>
    </div>
  )
}