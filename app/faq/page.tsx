import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FaqDirecteurs } from "@/components/faq-directeurs"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Questions fréquentes — LEARNA",
  description:
    "Réponses aux questions des directions : fonctionnement, contenus, licences, formation propre à votre institution, suivi des équipes, efficacité du e-learning.",
}

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <FaqDirecteurs />
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            Vous ne trouvez pas la réponse à votre question&nbsp;?{" "}
            <Link href="/contact" className="font-semibold text-[#3DBFA0] hover:underline">
              Contactez-nous →
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
