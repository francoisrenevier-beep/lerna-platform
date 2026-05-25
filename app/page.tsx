import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { DefiSection } from "@/components/defi-section"
import { HowItWorks } from "@/components/how-it-works"
import { FormationsPreview } from "@/components/formations-preview"
import { RessourcesPreview } from "@/components/ressources-preview"
import { PourquoiLerna } from "@/components/pourquoi-lerna"
import { TarifsSection } from "@/components/tarifs-section"
import { DemoForm } from "@/components/demo-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <DefiSection />
      <HowItWorks />
      <FormationsPreview />
      <RessourcesPreview />
      <PourquoiLerna />
      <TarifsSection />
      <DemoForm />
      <Footer />
    </main>
  )
}
