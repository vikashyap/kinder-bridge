import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VettingHero } from "@/components/vetting/vetting-hero"
import { IdScanBreakdown } from "@/components/vetting/id-scan-breakdown"
import { BadgeSystem } from "@/components/vetting/badge-system"
import { MultiLayerVerification } from "@/components/vetting/multi-layer-verification"
import { SampleDossier } from "@/components/vetting/sample-dossier"
import { VettingFaq } from "@/components/vetting/vetting-faq"

export const metadata: Metadata = {
  title: "Trust & Vetting Lab — Kindred Bridge",
  description:
    "Explore our multi-layered vetting process: AI-powered ID scanning, police character verification, English proficiency testing, and more.",
}

export default function VettingLabPage() {
  return (
    <main>
      <Navigation />
      <VettingHero />
      <IdScanBreakdown />
      <BadgeSystem />
      <MultiLayerVerification />
      <SampleDossier />
      <VettingFaq />
      <Footer />
    </main>
  )
}
