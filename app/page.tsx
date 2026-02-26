import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { WhoItsForSection } from "@/components/who-its-for-section"
import { ProductScreensSection } from "@/components/product-screens-section"
import { TrustSection } from "@/components/trust-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function FluxLandingPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhoItsForSection />
      <ProductScreensSection />
      <TrustSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
