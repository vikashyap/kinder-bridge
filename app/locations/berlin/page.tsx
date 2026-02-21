import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { CityPageLayout } from "@/components/locations/city-page-layout"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Kindred Bridge Berlin — Verified Nannies & Senior Companions",
  description:
    "Find trusted, police-verified nannies, mannies, and senior companions in Berlin. Serving Prenzlauer Berg, Mitte, Charlottenburg, and beyond. AI-verified, moderated video calls, full dossier.",
}

const berlinData = {
  name: "Berlin",
  slug: "berlin",
  country: "Germany",
  image: "/images/city-berlin.jpg",
  heroTagline: "Trusted Care in the Heart of Berlin",
  heroDescription:
    "Whether you\u2019re a local family in Prenzlauer Berg or an expat in Mitte, find police-verified nannies and senior companions who understand Berlin\u2019s multicultural family life.",
  stats: [
    { label: "Verified Caregivers", value: "140+" },
    { label: "Languages Spoken", value: "12" },
    { label: "Successful Matches", value: "320+" },
    { label: "Average Match Time", value: "5 Days" },
  ],
  neighborhoods: [
    "Prenzlauer Berg",
    "Mitte",
    "Charlottenburg",
    "Friedrichshain",
    "Kreuzberg",
    "Sch\u00F6neberg",
    "Wilmersdorf",
    "Steglitz",
    "Zehlendorf",
    "Pankow",
    "Spandau",
    "Neuk\u00F6lln",
  ],
  services: [
    "Full-time & part-time nannies",
    "Senior companions (Alltagsbegleiter)",
    "After-school childcare",
    "Bilingual caregivers (DE/EN/RU/TR)",
    "Appointment accompaniment for elderly",
    "Household support & light cooking",
    "Weekend & evening nanny coverage",
    "Emergency / short-notice bookings",
  ],
  localInsight:
    "Berlin\u2019s expat community is one of the largest in Europe. Many families need caregivers who speak multiple languages and navigate both the German bureaucracy and international lifestyles. Our Berlin team personally vets every caregiver for local cultural fit.",
  testimonial: {
    quote:
      "We moved from London to Prenzlauer Berg and needed a bilingual nanny who understood both cultures. Kindred Bridge found us Maria within a week. The police clearance and video reference gave us total peace of mind.",
    name: "Sarah T.",
    role: "Expat Mother, Berlin-Prenzlauer Berg",
  },
}

export default function BerlinPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CityPageLayout city={berlinData} />
      <Footer />
    </main>
  )
}
