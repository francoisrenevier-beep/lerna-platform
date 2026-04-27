import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { HowItWorks } from "@/components/how-it-works"
import { FormationsPreview } from "@/components/formations-preview"
import { ForInstitutions } from "@/components/for-institutions"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsBar />
      <HowItWorks />
      <FormationsPreview />
      <ForInstitutions />
      <Testimonials />
      <Footer />
    </main>
  )
}
