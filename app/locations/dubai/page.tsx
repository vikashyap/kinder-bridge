import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { CityPageLayout } from "@/components/locations/city-page-layout"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Kindred Bridge Dubai — Premium Nannies & Senior Companions in the UAE",
  description:
    "Find verified, premium nannies and senior companions in Dubai. Serving Jumeirah, Downtown, Marina, and across the UAE. AI-verified, moderated video calls, police-cleared.",
}

const dubaiData = {
  name: "Dubai",
  slug: "dubai",
  country: "United Arab Emirates",
  image: "/images/city-dubai.jpg",
  heroTagline: "Premium Care for Dubai\u2019s Global Families",
  heroDescription:
    "From Jumeirah to the Marina, connect with police-verified nannies and senior companions who understand the multicultural, fast-paced lifestyle of Dubai.",
  stats: [
    { label: "Verified Caregivers", value: "90+" },
    { label: "Nationalities Represented", value: "18" },
    { label: "Successful Matches", value: "180+" },
    { label: "Average Match Time", value: "4 Days" },
  ],
  neighborhoods: [
    "Jumeirah",
    "Downtown Dubai",
    "Dubai Marina",
    "Palm Jumeirah",
    "Arabian Ranches",
    "JBR",
    "Business Bay",
    "Al Barsha",
    "Mirdif",
    "Dubai Hills",
    "Emirates Hills",
    "Deira",
  ],
  services: [
    "Live-in & live-out nannies",
    "Senior companions & elderly care",
    "Bilingual caregivers (EN/AR/HI/TL)",
    "Newborn & infant specialists",
    "Appointment accompaniment for elderly",
    "Weekend & holiday coverage",
    "After-school care & tutoring support",
    "Household management support",
  ],
  localInsight:
    "Dubai families often need caregivers who can navigate a high-standard, multicultural environment. Whether you need a Filipino nanny who speaks English fluently, or a Hindi-speaking companion for your aging parent visiting from India, our Dubai team matches you with precision.",
  testimonial: {
    quote:
      "As an NRI family in Dubai, finding a trustworthy companion for my mother visiting from Mumbai was a nightmare until Kindred Bridge. The video reference and police clearance made all the difference. She felt at home from Day 1.",
    name: "Omar & Priya K.",
    role: "NRI Family, Dubai Marina",
  },
}

export default function DubaiPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CityPageLayout city={dubaiData} />
      <Footer />
    </main>
  )
}
