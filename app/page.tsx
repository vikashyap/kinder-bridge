import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/home/hero-section"
import { VerifiedStories } from "@/components/home/verified-stories"
import { FeaturesBento } from "@/components/home/features-bento"
import { TrustStrip } from "@/components/home/trust-strip"
import { WhyUsSection } from "@/components/home/why-us-section"
import { SeniorCareSection } from "@/components/home/senior-care-section"
import { CityHubSection } from "@/components/home/city-hub-section"
import { CtaSection } from "@/components/home/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VerifiedStories />
      <FeaturesBento />
      <TrustStrip />
      <WhyUsSection />
      <SeniorCareSection />
      <CityHubSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
