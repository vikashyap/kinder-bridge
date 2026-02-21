import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Globe,
  Users,
  CheckCircle2,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

export const metadata: Metadata = {
  title: "Where We Operate | Kindred Bridge",
  description:
    "Kindred Bridge operates in Berlin, Dubai, and Bangkok with local teams and verified caregivers. Find trusted nannies and senior companions in your city.",
}

const cities = [
  {
    name: "Berlin",
    slug: "berlin",
    country: "Germany",
    image: "/images/city-berlin.jpg",
    tagline: "Vetted Care for the Expat & Local Community",
    count: "140+",
    description:
      "From Prenzlauer Berg to Charlottenburg, trusted nannies and senior companions who understand both German precision and multicultural family life.",
    neighborhoods: ["Charlottenburg", "Prenzlauer Berg", "Mitte", "Kreuzberg", "Friedrichshain"],
    highlights: [
      "German & English-speaking caregivers",
      "Kita backup & after-school nannies",
      "Senior companions for elderly parents",
    ],
  },
  {
    name: "Dubai",
    slug: "dubai",
    country: "United Arab Emirates",
    image: "/images/city-dubai.jpg",
    tagline: "Premium Nannies & Senior Support in the UAE",
    count: "90+",
    description:
      "Serving the expat communities of Jumeirah, Downtown, and beyond with caregivers who speak your language and understand your culture.",
    neighborhoods: ["Jumeirah", "Dubai Marina", "Downtown", "Arabian Ranches", "Palm Jumeirah"],
    highlights: [
      "Multilingual: English, Arabic, Hindi, Filipino",
      "Live-in & live-out options available",
      "NRI family specialist companions",
    ],
  },
  {
    name: "Bangkok",
    slug: "bangkok",
    country: "Thailand",
    image: "/images/city-bangkok.jpg",
    tagline: "Safe, Trusted Companionship in the Heart of Thailand",
    count: "75+",
    description:
      "For expat families and retirees in Sukhumvit, Silom, and across Greater Bangkok. Police-cleared, identity-verified care you can trust.",
    neighborhoods: ["Sukhumvit", "Thonglor", "Silom", "Sathorn", "Ekkamai"],
    highlights: [
      "Thai & English bilingual caregivers",
      "Retiree companion specialists",
      "International school pickup & drop-off",
    ],
  },
]

const globalStats = [
  { value: "305+", label: "Verified Caregivers" },
  { value: "3", label: "Cities & Growing" },
  { value: "30+", label: "Countries Represented" },
  { value: "100%", label: "ID & Police Verified" },
]

export default function WhereWeOperatePage() {
  return (
    <main className="min-h-screen pt-20">
      <Navigation />

      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Currently in 3 Cities
                </span>
              </div>
              <h1 className="text-balance font-serif text-5xl font-semibold leading-tight text-foreground md:text-6xl lg:text-7xl">
                Global Reach, Local Trust
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {"Kindred Bridge is not a faceless global app. We operate in cities we know, with local teams who understand your community, your language, and your standards."}
              </p>
            </div>
          </AnimatedSection>

          {/* Global stats strip */}
          <AnimatedSection delay={200}>
            <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
              {globalStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-6 text-center"
                >
                  <span className="font-serif text-3xl font-bold text-primary">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* City Cards — expanded */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {cities.map((city, i) => (
              <AnimatedSection key={city.slug} delay={100 + i * 100}>
                <div
                  className={`flex flex-col gap-8 overflow-hidden rounded-3xl border border-border bg-card lg:flex-row ${
                    i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* City image */}
                  <div className="relative h-[320px] lg:h-auto lg:w-1/2">
                    <Image
                      src={city.image}
                      alt={`${city.name}, ${city.country} skyline`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-primary/90 px-4 py-1.5">
                      <MapPin className="h-3.5 w-3.5 text-primary-foreground" />
                      <span className="text-xs font-semibold text-primary-foreground">
                        {city.count} Verified Companions
                      </span>
                    </div>
                  </div>

                  {/* City details */}
                  <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                      {city.country}
                    </p>
                    <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground md:text-4xl">
                      {city.name}
                    </h2>
                    <p className="mt-1 font-medium text-muted-foreground">
                      {city.tagline}
                    </p>
                    <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                      {city.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-6 flex flex-col gap-2.5">
                      {city.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm leading-relaxed text-foreground">
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Neighborhoods */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {city.neighborhoods.map((n) => (
                        <span
                          key={n}
                          className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {n}
                        </span>
                      ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href={`/locations/${city.slug}`}
                        className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
                      >
                        Explore {city.name}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <Link
                        href={`/locations/${city.slug}/profiles`}
                        className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30"
                      >
                        <Users className="h-4 w-4 text-primary" />
                        Browse Caregivers
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon / Expansion tease */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-3xl border border-border bg-secondary/50 p-10 text-center md:p-16">
              <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
                  Expanding Soon
                </h2>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {"We\u2019re carefully expanding to new cities where we can maintain our gold standard of vetting and local trust. Singapore, London, and Mumbai are on our roadmap. Want us in your city?"}
                </p>
                <Link
                  href="/for-families"
                  className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Request Your City
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
