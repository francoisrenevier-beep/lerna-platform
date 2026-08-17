import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DemoForm } from "@/components/demo-form"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Demander une démonstration | LEARNA",
  description:
    "Découvrez LEARNA en 30 minutes. Nous répondons à vos questions et vous présentons la plateforme selon les besoins spécifiques de votre institution.",
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ sujet?: string }>
}) {
  // Le CTA « Discuter d'un parcours sur mesure » arrive avec ?sujet=… ; le lire
  // ici plutôt que dans le composant client garde le formulaire rendu côté
  // serveur.
  const { sujet } = await searchParams

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <DemoForm sujetInitial={sujet} />
      <Footer />
    </main>
  )
}
