import type { Metadata } from "next"
import { ProfilesPageLayout } from "@/components/locations/profiles-page-layout"
import type { CaregiverProfile } from "@/components/locations/profiles-page-layout"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Trusted Caregivers in Dubai | Kindred Bridge",
  description:
    "Browse verified nannies, mannies, and senior companions in Dubai. ID-verified, police-cleared, and video-referenced caregivers in Jumeirah, Marina, Downtown, and across the UAE.",
}

const dubaiProfiles: CaregiverProfile[] = [
  {
    name: "Maria G.",
    neighborhood: "Jumeirah",
    bio: "Filipino nanny specializing in newborn and infant care for high-net-worth families. Speaks English and Tagalog fluently. Hospital-trained in neonatal care and baby nutrition.",
    specialties: ["Newborn Specialist", "Night Nanny", "Baby Nutrition", "First Aid"],
    videoRefs: 3,
    experience: "9 years",
    category: "Nanny",
    languages: ["English", "Tagalog"],
    availability: "Live-In",
  },
  {
    name: "Priya S.",
    neighborhood: "Dubai Marina",
    bio: "Hindi and English speaking senior companion for elderly parents. Experienced with NRI families. Provides daily check-ins, appointment accompaniment, and emotional support.",
    specialties: ["Hindi Speaking", "Senior Care", "Appointment Escort", "Cooking"],
    videoRefs: 2,
    experience: "6 years",
    category: "Senior Companion",
    languages: ["English", "Hindi", "Marathi"],
    availability: "Full-Time",
  },
  {
    name: "Fatima A.",
    neighborhood: "Arabian Ranches",
    bio: "Bilingual Arabic-English nanny with experience in international school routines. Skilled in tutoring, creative arts, and managing after-school activities for multiple children.",
    specialties: ["Bilingual AR/EN", "Tutoring", "Arts & Crafts", "Multi-Child"],
    videoRefs: 2,
    experience: "7 years",
    category: "Nanny",
    languages: ["English", "Arabic"],
    availability: "Full-Time",
  },
  {
    name: "Joy L.",
    neighborhood: "Palm Jumeirah",
    bio: "Live-in household manager and nanny for expatriate families. Certified in child safety, meal planning, and maintaining structured daily schedules for toddlers and pre-schoolers.",
    specialties: ["Live-In", "Meal Planning", "Child Safety", "Household Mgmt"],
    videoRefs: 1,
    experience: "5 years",
    category: "Nanny",
    languages: ["English", "Tagalog"],
    availability: "Live-In",
  },
  {
    name: "Sunita D.",
    neighborhood: "Downtown Dubai",
    bio: "Experienced companion for elderly visitors and residents from India. Fluent in Hindi, Marathi, and English. Specializes in post-surgery recovery support and daily mobility assistance.",
    specialties: ["Post-Surgery Care", "Mobility Support", "Hindi/Marathi", "Non-Smoker"],
    videoRefs: 3,
    experience: "11 years",
    category: "Senior Companion",
    languages: ["English", "Hindi", "Marathi"],
    availability: "Full-Time",
  },
  {
    name: "Ahmed R.",
    neighborhood: "Business Bay",
    bio: "Male caregiver (manny) experienced with active boys ages 5\u201314. Former PE teacher with certifications in water safety and outdoor adventure leadership. Fluent in Arabic and English.",
    specialties: ["Sports & Fitness", "Water Safety", "Driver\u2019s License", "Tutoring"],
    videoRefs: 2,
    experience: "6 years",
    category: "Manny",
    languages: ["English", "Arabic"],
    availability: "Full-Time",
  },
  {
    name: "Rosa M.",
    neighborhood: "JBR",
    bio: "Weekend and holiday nanny with a background in early years education. Perfect for families needing flexible, reliable coverage for social events and travel weekends.",
    specialties: ["Weekend Coverage", "Travel Nanny", "Early Years Ed", "Swimming"],
    videoRefs: 2,
    experience: "4 years",
    category: "Nanny",
    languages: ["English", "Tagalog", "Spanish"],
    availability: "Weekends",
  },
  {
    name: "Deepa K.",
    neighborhood: "Al Barsha",
    bio: "Full-time nanny with deep experience in Indian expat households. Vegetarian meal prep specialist. Experienced with newborns through school-age children.",
    specialties: ["Indian Cooking", "Newborn Care", "Homework Help", "Non-Smoker"],
    videoRefs: 2,
    experience: "8 years",
    category: "Nanny",
    languages: ["English", "Hindi", "Kannada"],
    availability: "Full-Time",
  },
  {
    name: "Lina T.",
    neighborhood: "Emirates Hills",
    bio: "Premium live-in nanny and household coordinator for UHNW families. Trained in etiquette, silver service, and high-end household management alongside childcare.",
    specialties: ["UHNW Experience", "Etiquette", "Household Coordinator", "Driver\u2019s License"],
    videoRefs: 3,
    experience: "12 years",
    category: "Nanny",
    languages: ["English", "French", "Arabic"],
    availability: "Live-In",
  },
]

export default function DubaiProfilesPage() {
  return (
    <>
      <ProfilesPageLayout
        cityName="Dubai"
        citySlug="dubai"
        profiles={dubaiProfiles}
      />
      <Footer />
    </>
  )
}
