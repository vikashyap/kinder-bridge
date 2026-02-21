import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CaregiversHero } from "@/components/caregivers/caregivers-hero"
import { BenefitsGrid } from "@/components/caregivers/benefits-grid"
import { ProfileLevelUp } from "@/components/caregivers/profile-level-up"
import { ModeratedCallExplainer } from "@/components/caregivers/moderated-call-explainer"
import { CaregiversFaq } from "@/components/caregivers/caregivers-faq"
import { CaregiversCta } from "@/components/caregivers/caregivers-cta"

export const metadata: Metadata = {
  title: "For Caregivers — Kindred Bridge",
  description:
    "Join our elite network of verified caregivers. Get paid per interview, receive a professional dossier, and work with dignity.",
}

export default function ForCaregiversPage() {
  return (
    <main>
      <Navigation />
      <CaregiversHero />
      <BenefitsGrid />
      <ProfileLevelUp />
      <ModeratedCallExplainer />
      <CaregiversFaq />
      <CaregiversCta />
      <Footer />
    </main>
  )
}
