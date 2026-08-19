import type { Metadata } from "next"

// app/besoins/page.tsx est un composant client et ne peut pas exporter de
// metadata : ce layout de passage porte les balises de la route.
export const metadata: Metadata = {
  title: "Le mur des besoins | LEARNA",
  description:
    "Proposez la formation qui manque à votre équipe et votez pour les besoins exprimés par les autres professionnels. Le catalogue LEARNA se construit à partir du terrain.",
}

export default function BesoinsLayout({ children }: { children: React.ReactNode }) {
  return children
}
