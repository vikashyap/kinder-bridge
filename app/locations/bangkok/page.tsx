import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { CityPageLayout } from "@/components/locations/city-page-layout"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Kindred Bridge Bangkok — Trusted Companions & Nannies in Thailand",
  description:
    "Find verified nannies, mannies, and senior companions in Bangkok. Serving Sukhumvit, Silom, Sathorn, and across Greater Bangkok. AI-verified, police-cleared, video-referenced.",
}

const bangkokData = {
  name: "Bangkok",
  slug: "bangkok",
  country: "Thailand",
  image: "/images/city-bangkok.jpg",
  heroTagline: "Safe, Trusted Care in the Heart of Thailand",
  heroDescription:
    "For expat families and retirees across Sukhumvit, Silom, and beyond. Police-verified nannies and senior companions who bring safety and warmth to your home.",
  stats: [
    { label: "Verified Caregivers", value: "75+" },
    { label: "Languages Spoken", value: "8" },
    { label: "Successful Matches", value: "120+" },
    { label: "Average Match Time", value: "6 Days" },
  ],
  neighborhoods: [
    "Sukhumvit",
    "Silom",
    "Sathorn",
    "Thonglor",
    "Ekkamai",
    "Asoke",
    "Ari",
    "Phrom Phong",
    "On Nut",
    "Bangna",
    "Ladprao",
    "Ratchadaphisek",
  ],
  services: [
    "Full-time & part-time nannies",
    "Senior companions for retirees",
    "Bilingual caregivers (TH/EN/JP/CN)",
    "After-school childcare",
    "Appointment accompaniment for elderly",
    "Light household support",
    "Weekend & evening coverage",
    "Short-term / vacation nannies",
  ],
  localInsight:
    "Bangkok\u2019s growing expat community and retiree population need caregivers who bridge cultural gaps. Our Thailand team sources caregivers with hospital-grade background checks and verifies them through our AI identity scan plus local police clearance.",
  testimonial: {
    quote:
      "My father retired to Bangkok and I live in London. Finding someone I could trust to check on him daily was impossible until Kindred Bridge. The moderated video call let me interview the companion myself, and the police clearance gave me peace of mind from 9,000km away.",
    name: "James L.",
    role: "Son of Retiree, Bangkok-Sukhumvit",
  },
}

export default function BangkokPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CityPageLayout city={bangkokData} />
      <Footer />
    </main>
  )
}
