import type { Metadata } from "next"
import { ProfilesPageLayout } from "@/components/locations/profiles-page-layout"
import type { CaregiverProfile } from "@/components/locations/profiles-page-layout"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Trusted Caregivers in Bangkok | Kindred Bridge",
  description:
    "Browse verified nannies, mannies, and senior companions in Bangkok. ID-verified, police-cleared, and video-referenced caregivers in Sukhumvit, Silom, Sathorn, and across Bangkok.",
}

const bangkokProfiles: CaregiverProfile[] = [
  {
    name: "Nong P.",
    neighborhood: "Sukhumvit",
    bio: "Bilingual Thai-English nanny with 5 years of experience serving expat families in Sukhumvit. Trained in first aid and Montessori-inspired play for toddlers and pre-schoolers.",
    specialties: ["Bilingual TH/EN", "Montessori", "First Aid", "Toddler Care"],
    videoRefs: 2,
    experience: "5 years",
    category: "Nanny",
    languages: ["Thai", "English"],
    availability: "Full-Time",
  },
  {
    name: "Kaew S.",
    neighborhood: "Thonglor",
    bio: "Senior companion providing daily support for elderly retirees. Experienced with Western and Japanese clients. Assists with grocery runs, cooking, and appointment accompaniment.",
    specialties: ["Senior Care", "Grocery Runs", "Thai Cooking", "Appointment Escort"],
    videoRefs: 3,
    experience: "8 years",
    category: "Senior Companion",
    languages: ["Thai", "English", "Japanese"],
    availability: "Full-Time",
  },
  {
    name: "Mai T.",
    neighborhood: "Silom",
    bio: "Full-time nanny specializing in newborn and infant care. Speaks Thai, English, and basic Japanese. Hospital-certified in infant CPR and breastfeeding support.",
    specialties: ["Newborn Care", "Infant CPR", "Night Nanny", "Non-Smoker"],
    videoRefs: 2,
    experience: "6 years",
    category: "Nanny",
    languages: ["Thai", "English", "Japanese"],
    availability: "Full-Time",
  },
  {
    name: "Ploy R.",
    neighborhood: "Ekkamai",
    bio: "After-school nanny and homework tutor for international school students ages 6\u201314. Background in primary education. Creative, energetic, and fluent in English and Thai.",
    specialties: ["After-School", "Tutoring", "Arts & Sports", "International Schools"],
    videoRefs: 1,
    experience: "4 years",
    category: "Nanny",
    languages: ["Thai", "English"],
    availability: "Part-Time",
  },
  {
    name: "Lek W.",
    neighborhood: "Sathorn",
    bio: "Experienced live-in companion for elderly expats and retirees. Trained in basic physiotherapy exercises and medication management. Warm, patient, and highly reliable.",
    specialties: ["Live-In", "Light Physio", "Medication Mgmt", "Companionship"],
    videoRefs: 2,
    experience: "10 years",
    category: "Senior Companion",
    languages: ["Thai", "English"],
    availability: "Live-In",
  },
  {
    name: "Fah N.",
    neighborhood: "Ari",
    bio: "Weekend and vacation nanny for expat families. Experienced with multi-child households and outdoor activities. Certified in water safety and children\u2019s nutrition.",
    specialties: ["Weekend Coverage", "Multi-Child", "Water Safety", "Nutrition"],
    videoRefs: 2,
    experience: "3 years",
    category: "Nanny",
    languages: ["Thai", "English"],
    availability: "Weekends",
  },
  {
    name: "Chai M.",
    neighborhood: "Phrom Phong",
    bio: "Male caregiver (manny) with a background in youth sports coaching. Specializes in active outdoor play, swimming lessons, and structured fitness activities for children ages 4\u201312.",
    specialties: ["Sports Coaching", "Swimming", "Outdoor Play", "First Aid"],
    videoRefs: 2,
    experience: "5 years",
    category: "Manny",
    languages: ["Thai", "English"],
    availability: "Full-Time",
  },
  {
    name: "Wan K.",
    neighborhood: "On Nut",
    bio: "Trilingual nanny experienced with Chinese and Korean expat families. Speaks Thai, English, and Mandarin. Specializes in bilingual language immersion and creative play.",
    specialties: ["Trilingual", "Language Immersion", "Creative Play", "Cooking"],
    videoRefs: 1,
    experience: "4 years",
    category: "Nanny",
    languages: ["Thai", "English", "Mandarin"],
    availability: "Full-Time",
  },
  {
    name: "Som O.",
    neighborhood: "Ladprao",
    bio: "Compassionate senior companion specializing in post-hospital recovery care. Experienced with medication schedules, mobility exercises, and creating a safe, comfortable home environment.",
    specialties: ["Recovery Care", "Medication Mgmt", "Mobility Support", "Non-Smoker"],
    videoRefs: 3,
    experience: "12 years",
    category: "Senior Companion",
    languages: ["Thai", "English"],
    availability: "Full-Time",
  },
]

export default function BangkokProfilesPage() {
  return (
    <>
      <ProfilesPageLayout
        cityName="Bangkok"
        citySlug="bangkok"
        profiles={bangkokProfiles}
      />
      <Footer />
    </>
  )
}
