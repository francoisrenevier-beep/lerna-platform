import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DemoForm } from "@/components/demo-form"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Demander une démonstration — LEARNA",
  description:
    "Découvrez LEARNA en 30 minutes. Nous répondons à vos questions et vous présentons la plateforme selon les besoins spécifiques de votre institution.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <DemoForm />
      <Footer />
    </main>
  )
}
