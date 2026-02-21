"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const cities = [
  {
    name: "Berlin",
    slug: "berlin",
    image: "/images/city-berlin.jpg",
    tagline: "Vetted Care for the Expat & Local Community",
    stats: "140+ Verified Companions",
    description:
      "From Prenzlauer Berg to Charlottenburg, trusted nannies and senior companions who understand both German precision and multicultural family life.",
  },
  {
    name: "Dubai",
    slug: "dubai",
    image: "/images/city-dubai.jpg",
    tagline: "Premium Nannies & Senior Support in the UAE",
    stats: "90+ Verified Companions",
    description:
      "Serving the expat communities of Jumeirah, Downtown, and beyond with caregivers who speak your language and understand your culture.",
  },
  {
    name: "Bangkok",
    slug: "bangkok",
    image: "/images/city-bangkok.jpg",
    tagline: "Safe, Trusted Companionship in the Heart of Thailand",
    stats: "75+ Verified Companions",
    description:
      "For expat families and retirees in Sukhumvit, Silom, and across Greater Bangkok. Police-cleared, identity-verified care you can trust.",
  },
]

export function CityHubSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Where We Operate
            </p>
            <h2 className="mt-4 text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
              Global Reach, Local Trust
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Kindred Bridge is not a faceless global app. We operate in
              cities we know, with local teams who understand your community.
            </p>
            <Link
              href="/where-we-operate"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              View All Locations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cities.map((city, i) => (
            <AnimatedSection key={city.slug} delay={100 + i * 150}>
              <Link
                href={`/locations/${city.slug}`}
                className="group relative flex h-[520px] flex-col justify-end overflow-hidden rounded-3xl"
              >
                {/* City image */}
                <Image
                  src={city.image}
                  alt={`${city.name} skyline`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Stats badge top-right */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-primary/90 px-4 py-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary-foreground" />
                  <span className="text-xs font-semibold text-primary-foreground">
                    {city.stats}
                  </span>
                </div>

                {/* Content overlay with glassmorphism */}
                <div className="relative z-10 p-6">
                  <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
                    <h3 className="font-serif text-2xl font-semibold text-white">
                      {city.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-white/80">
                      {city.tagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {city.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary-foreground transition-colors">
                      <span className="text-white">Explore {city.name}</span>
                      <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
