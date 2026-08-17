import type { Metadata } from "next"

// app/catalogue/page.tsx est un composant client et ne peut pas exporter de
// metadata : ce layout de passage porte les balises de la route.
// Elles s'appliquent aussi à /catalogue/[slug] et /catalogue/domaine, qui sont
// eux aussi des composants client sans metadata propre.
export const metadata: Metadata = {
  title: "Catalogue des formations | LEARNA",
  description:
    "Parcourez les formations LEARNA destinées aux institutions sociales et médico-sociales : handicap, pédagogie spécialisée, accompagnement, éthique. Des modules courts accessibles à toute l'équipe.",
}

export default function CatalogueLayout({ children }: { children: React.ReactNode }) {
  return children
}
