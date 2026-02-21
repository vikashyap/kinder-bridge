import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FamiliesHero } from "@/components/families/families-hero"
import { ProcessTimeline } from "@/components/families/process-timeline"
import { TrustBadgeShowcase } from "@/components/families/trust-badge-showcase"
import { PeaceOfMindVideo } from "@/components/families/peace-of-mind-video"
import { ScopeOfService } from "@/components/families/scope-of-service"
import { SatisfactionGuarantee } from "@/components/families/satisfaction-guarantee"
import { FamiliesFaq } from "@/components/families/families-faq"

export const metadata: Metadata = {
  title: "For Families — Kindred Bridge",
  description:
    "Find a verified nanny, manny, or senior companion in three simple steps. Browse verified profiles, book a moderated call, and receive a full dossier. Built for the Sandwich Generation.",
}

export default function ForFamiliesPage() {
  return (
    <main>
      <Navigation />
      <FamiliesHero />
      <ProcessTimeline />
      <TrustBadgeShowcase />
      <PeaceOfMindVideo />
      <ScopeOfService />
      <SatisfactionGuarantee />
      <FamiliesFaq />
      <Footer />
    </main>
  )
}
