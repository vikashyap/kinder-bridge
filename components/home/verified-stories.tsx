"use client"

import { useState } from "react"
import { Lock, Play } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { PrivacyShieldModal } from "@/components/privacy-shield-modal"

const stories = [
  {
    name: "Sarah",
    location: "Berlin",
    role: "Mother of 2",
    gradient: "from-[#6B8F71]/60 to-[#6B8F71]/30",
  },
  {
    name: "Omar",
    location: "Dubai",
    role: "Senior Care for Father",
    gradient: "from-[#8B7355]/60 to-[#8B7355]/30",
  },
  {
    name: "Elena",
    location: "Vienna",
    role: "Mother of 3",
    gradient: "from-[#6B8F71]/50 to-[#6B8F71]/20",
  },
  {
    name: "James",
    location: "London",
    role: "Elderly Parent Care",
    gradient: "from-[#8B7355]/50 to-[#8B7355]/20",
  },
  {
    name: "Aisha",
    location: "Munich",
    role: "Mother & Daughter Care",
    gradient: "from-[#6B8F71]/60 to-[#6B8F71]/25",
  },
]

export function VerifiedStories() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Verified Stories
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
              Hear from the families who found their match.
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              To protect our families&apos; privacy, full video testimonials are
              exclusively available to our verified community.
            </p>
          </div>
        </AnimatedSection>

        {/* Horizontal scroll row */}
        <AnimatedSection delay={150}>
          <div className="-mx-6 flex gap-5 overflow-x-auto px-6 pb-4 scrollbar-none lg:mx-0 lg:px-0">
            {stories.map((story, i) => (
              <button
                type="button"
                key={story.name}
                onClick={() => setModalOpen(true)}
                className="group relative flex h-[420px] w-[260px] shrink-0 cursor-pointer flex-col justify-end overflow-hidden rounded-3xl text-left transition-transform hover:scale-[1.02]"
              >
                {/* Blurred background gradient simulating video */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${story.gradient}`}
                />
                <div className="absolute inset-0 bg-[#2C2C2C]/40 backdrop-blur-[2px]" />

                {/* Play button with lock */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-card/30 bg-card/20 backdrop-blur-sm">
                      <Play className="ml-1 h-7 w-7 text-card" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                      <Lock className="h-3.5 w-3.5 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Bottom info overlay */}
                <div className="relative z-10 p-5">
                  <p className="font-serif text-lg font-semibold text-card">
                    {story.name}, {story.location}
                  </p>
                  <p className="mt-0.5 text-sm text-card/80">{story.role}</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary/90 px-3 py-1">
                    <Lock className="h-3 w-3 text-primary-foreground" />
                    <span className="text-xs font-medium text-primary-foreground">
                      Unlocked for Verified Members
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <PrivacyShieldModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  )
}
