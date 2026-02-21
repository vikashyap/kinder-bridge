"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Play,
  User,
  ChevronDown,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { UnlockProfileModal } from "@/components/locations/unlock-profile-modal"

export interface CaregiverProfile {
  name: string
  neighborhood: string
  bio: string
  specialties: string[]
  videoRefs: number
  experience: string
  category: "Nanny" | "Manny" | "Senior Companion"
  languages: string[]
  availability: "Full-Time" | "Part-Time" | "Weekends" | "Live-In"
}

interface ProfilesPageProps {
  cityName: string
  citySlug: string
  profiles: CaregiverProfile[]
}

const categories = ["All", "Nanny", "Manny", "Senior Companion"] as const
const availabilities = [
  "All",
  "Full-Time",
  "Part-Time",
  "Weekends",
  "Live-In",
] as const

export function ProfilesPageLayout({
  cityName,
  citySlug,
  profiles,
}: ProfilesPageProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedName, setSelectedName] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("All")
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("All")
  const [languageFilter, setLanguageFilter] = useState<string>("All")

  // Collect unique languages
  const allLanguages = useMemo(() => {
    const set = new Set<string>()
    profiles.forEach((p) => p.languages.forEach((l) => set.add(l)))
    return ["All", ...Array.from(set).sort()]
  }, [profiles])

  // Filter profiles
  const filtered = useMemo(() => {
    return profiles.filter((p) => {
      if (categoryFilter !== "All" && p.category !== categoryFilter) return false
      if (availabilityFilter !== "All" && p.availability !== availabilityFilter)
        return false
      if (languageFilter !== "All" && !p.languages.includes(languageFilter))
        return false
      return true
    })
  }, [profiles, categoryFilter, availabilityFilter, languageFilter])

  function handleUnlock(name: string) {
    setSelectedName(name)
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky header */}
      <header className="sticky top-0 z-50 glass">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <span className="font-serif text-lg font-bold text-primary-foreground">
                K
              </span>
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              Kindred Bridge
            </span>
          </Link>

          <Link
            href={`/locations/${citySlug}`}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">
              Back to {cityName} Overview
            </span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </header>

      {/* Page title */}
      <section className="border-b border-border bg-card pt-12 pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Caregiver Discovery
            </p>
            <h1 className="mt-3 text-balance font-serif text-4xl font-bold text-foreground md:text-5xl">
              Trusted Caregivers in {cityName}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Every profile below has been AI-verified, police-cleared, and
              reference-checked. Full bios and video references are unlocked
              after booking.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-[72px] z-40 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 py-4">
            {/* Category filter */}
            <div className="relative">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="appearance-none rounded-xl border border-border bg-background py-2.5 pr-9 pl-4 text-sm font-medium text-foreground transition-colors focus:border-primary focus:outline-none"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c === "All" ? "All Categories" : c}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>

            {/* Availability filter */}
            <div className="relative">
              <select
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value)}
                className="appearance-none rounded-xl border border-border bg-background py-2.5 pr-9 pl-4 text-sm font-medium text-foreground transition-colors focus:border-primary focus:outline-none"
              >
                {availabilities.map((a) => (
                  <option key={a} value={a}>
                    {a === "All" ? "All Availability" : a}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>

            {/* Language filter */}
            <div className="relative">
              <select
                value={languageFilter}
                onChange={(e) => setLanguageFilter(e.target.value)}
                className="appearance-none rounded-xl border border-border bg-background py-2.5 pr-9 pl-4 text-sm font-medium text-foreground transition-colors focus:border-primary focus:outline-none"
              >
                {allLanguages.map((l) => (
                  <option key={l} value={l}>
                    {l === "All" ? "All Languages" : l}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>

            <span className="ml-auto text-sm text-muted-foreground">
              {filtered.length} caregiver{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      {/* Profile grid */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif text-2xl text-muted-foreground">
                No caregivers match your filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCategoryFilter("All")
                  setAvailabilityFilter("All")
                  setLanguageFilter("All")
                }}
                className="mt-4 text-sm font-medium text-primary hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((profile, i) => (
                <AnimatedSection key={profile.name} delay={i * 80}>
                  <div className="group flex h-full flex-col rounded-3xl bg-card shadow-xl transition-all hover:shadow-2xl">
                    {/* Avatar header */}
                    <div className="relative flex items-center gap-4 rounded-t-3xl bg-secondary/50 px-6 pt-6 pb-5">
                      {/* Blurred silhouette avatar */}
                      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/15">
                        <User className="h-8 w-8 text-primary/40" />
                        <div className="absolute inset-0 rounded-2xl backdrop-blur-[2px]" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-serif text-lg font-bold text-foreground">
                          {profile.name}
                        </h3>
                        <div className="flex items-center gap-1.5">
                          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                            {profile.neighborhood}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {profile.experience} exp.
                          </span>
                        </div>
                      </div>
                      {/* Privacy badge */}
                      <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-foreground/80 px-2.5 py-1">
                        <ShieldCheck className="h-3 w-3 text-primary-foreground" />
                        <span className="text-[10px] font-semibold text-primary-foreground">
                          Privacy Protected
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex grow flex-col gap-4 px-6 pt-5 pb-6">
                      {/* Trust badges */}
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                          <span className="text-xs font-semibold text-blue-700">
                            ID Verified
                          </span>
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1">
                          <ShieldCheck className="h-3.5 w-3.5 text-amber-600" />
                          <span className="text-xs font-semibold text-amber-700">
                            Police Clear
                          </span>
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-1">
                          <Play className="h-3 w-3 text-indigo-600" />
                          <span className="text-xs font-semibold text-indigo-700">
                            {profile.videoRefs} Video Ref
                            {profile.videoRefs !== 1 ? "s" : ""}
                          </span>
                        </div>
                      </div>

                      {/* Bio snippet */}
                      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {profile.bio}
                      </p>

                      {/* Specialties */}
                      <div className="flex flex-wrap gap-1.5">
                        {profile.specialties.map((s) => (
                          <span
                            key={s}
                            className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Availability + category */}
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">
                          {profile.category}
                        </span>
                        <span>{profile.availability}</span>
                      </div>

                      {/* CTA */}
                      <button
                        type="button"
                        onClick={() => handleUnlock(profile.name)}
                        className="mt-auto flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 hover:shadow-lg"
                      >
                        {"View Full Profile & Video References"}
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-secondary py-16">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              {"Don\u2019t see the perfect match?"}
            </h2>
            <p className="mt-4 text-muted-foreground">
              New caregivers are verified and added weekly. Tell us what you
              need and our {cityName} team will proactively match you.
            </p>
            <Link
              href="/for-families"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              Request a Custom Match
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <UnlockProfileModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        caregiverName={selectedName}
      />
    </div>
  )
}
