import type { Metadata } from "next"
import { ProfilesPageLayout } from "@/components/locations/profiles-page-layout"
import type { CaregiverProfile } from "@/components/locations/profiles-page-layout"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Trusted Caregivers in Berlin | Kindred Bridge",
  description:
    "Browse verified nannies, mannies, and senior companions in Berlin. ID-verified, police-cleared, and video-referenced caregivers in Prenzlauer Berg, Mitte, Charlottenburg, and beyond.",
}

const berlinProfiles: CaregiverProfile[] = [
  {
    name: "Marta K.",
    neighborhood: "Charlottenburg",
    bio: "Specialist in early childhood development with 6 years experience in Berlin. Fluent in German, English, and Spanish. Trained in Montessori methods and positive discipline.",
    specialties: ["First Aid", "Newborn Care", "Cooking", "Montessori"],
    videoRefs: 2,
    experience: "6 years",
    category: "Nanny",
    languages: ["German", "English", "Spanish"],
    availability: "Full-Time",
  },
  {
    name: "Sofia R.",
    neighborhood: "Prenzlauer Berg",
    bio: "Experienced nanny and household manager for expat families. Speaks German, English, and Russian fluently. Certified in infant CPR and nutrition planning.",
    specialties: ["Bilingual DE/EN", "Meal Prep", "Infant CPR", "Homework Help"],
    videoRefs: 3,
    experience: "8 years",
    category: "Nanny",
    languages: ["German", "English", "Russian"],
    availability: "Full-Time",
  },
  {
    name: "Elena V.",
    neighborhood: "Mitte",
    bio: "Senior companion specializing in elderly care and daily accompaniment. Experienced with dementia support and light physiotherapy exercises. Warm, patient demeanor.",
    specialties: ["Senior Care", "Appointment Escort", "Light Physio", "Dementia Support"],
    videoRefs: 2,
    experience: "10 years",
    category: "Senior Companion",
    languages: ["German", "English"],
    availability: "Full-Time",
  },
  {
    name: "Anika P.",
    neighborhood: "Kreuzberg",
    bio: "After-school nanny with a background in child psychology. Experienced with children ages 4\u201312, homework support, and creative play in multicultural settings.",
    specialties: ["After-School", "Child Psychology", "Arts & Crafts", "Swimming"],
    videoRefs: 1,
    experience: "4 years",
    category: "Nanny",
    languages: ["German", "English", "Turkish"],
    availability: "Part-Time",
  },
  {
    name: "Leila M.",
    neighborhood: "Friedrichshain",
    bio: "Full-time nanny with strong experience in bilingual households. Speaks Turkish, German, and English. Known for creating structured, nurturing daily routines.",
    specialties: ["Trilingual", "Routine Builder", "Cooking", "Potty Training"],
    videoRefs: 2,
    experience: "7 years",
    category: "Nanny",
    languages: ["German", "English", "Turkish"],
    availability: "Full-Time",
  },
  {
    name: "Thomas B.",
    neighborhood: "Sch\u00f6neberg",
    bio: "Male caregiver (manny) specializing in active play and outdoor education for boys ages 3\u201310. Former sports instructor, certified in first aid and child safety.",
    specialties: ["Outdoor Play", "Sports", "First Aid", "Driver\u2019s License"],
    videoRefs: 2,
    experience: "5 years",
    category: "Manny",
    languages: ["German", "English"],
    availability: "Full-Time",
  },
  {
    name: "Helga T.",
    neighborhood: "Zehlendorf",
    bio: "Retired nurse turned senior companion. Provides daily check-ins, medication reminders, grocery runs, and warm companionship for elderly clients living alone.",
    specialties: ["Nursing Background", "Medication Mgmt", "Grocery Runs", "Non-Smoker"],
    videoRefs: 3,
    experience: "15 years",
    category: "Senior Companion",
    languages: ["German", "English"],
    availability: "Part-Time",
  },
  {
    name: "Katya S.",
    neighborhood: "Wilmersdorf",
    bio: "Bilingual Russian-German nanny with experience in high-net-worth families. Specializes in structured educational activities for toddlers and managing household routines.",
    specialties: ["Bilingual RU/DE", "Household Mgmt", "Educational Play", "Cooking"],
    videoRefs: 2,
    experience: "9 years",
    category: "Nanny",
    languages: ["German", "Russian", "English"],
    availability: "Live-In",
  },
  {
    name: "Markus W.",
    neighborhood: "Pankow",
    bio: "Weekend and evening manny for families needing flexible, reliable coverage. Background in early childhood education and youth mentoring programs.",
    specialties: ["Weekend Coverage", "Youth Mentoring", "Driver\u2019s License", "Cooking"],
    videoRefs: 1,
    experience: "3 years",
    category: "Manny",
    languages: ["German", "English"],
    availability: "Weekends",
  },
]

export default function BerlinProfilesPage() {
  return (
    <>
      <ProfilesPageLayout
        cityName="Berlin"
        citySlug="berlin"
        profiles={berlinProfiles}
      />
      <Footer />
    </>
  )
}
