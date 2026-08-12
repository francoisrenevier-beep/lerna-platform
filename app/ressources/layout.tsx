import type { Metadata } from "next"

// app/ressources/page.tsx est un composant client et ne peut pas exporter de
// metadata : ce layout de passage porte les balises de la route.
export const metadata: Metadata = {
  title: "Ressources pratiques — LEARNA",
  description:
    "Fiches, mémos et supports téléchargeables pour les équipes des institutions sociales et médico-sociales de Suisse romande, à mobiliser directement sur le terrain.",
}

export default function RessourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
