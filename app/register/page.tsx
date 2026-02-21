"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, Heart, User, Shield, CheckCircle2, ArrowRight, Lock, Check, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function RegisterPage() {
    return (
        <main className="min-h-screen bg-[#FDFBF7]">
            <Navigation />

            {/* Hero Section */}
            <div className="relative pt-32 pb-16 text-center px-6">
                <div className="mx-auto max-w-3xl">
                    <h1 className="font-serif text-5xl font-semibold tracking-tight text-foreground md:text-6xl mb-6">
                        A Community Built on Trust.
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Whether you’re seeking world-class care or providing it, you’re in safe hands.
                    </p>
                </div>
            </div>

            {/* Role Cards Section */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid gap-12 lg:grid-cols-2 lg:px-12">
                    {/* Family Card */}
                    <RegistrationCard
                        title="Register as a Family"
                        image="/images/family-together.jpg"
                        icon={<Home className="h-10 w-10 text-primary" />}
                        steps={[
                            "Account Basics (1 min)",
                            "Verify Identity (Passport/ID Scan)",
                            "Define your Care Needs",
                            "Match with nearby Companions"
                        ]}
                        buttonText="Join as a Family"
                        href="/register/family/step-1"
                    />

                    {/* Caregiver Card */}
                    <RegistrationCard
                        title="Apply as a Caregiver"
                        image="/images/caregiver-portrait.jpg"
                        icon={<User className="h-10 w-10 text-primary" />}
                        steps={[
                            "Professional Profile Setup",
                            "AI Identity & Liveness Scan",
                            "Police Certificate Upload",
                            "Record Video Introduction"
                        ]}
                        buttonText="Apply to Join"
                        href="/register/caregiver/step-1"
                        variant="caregiver"
                    />
                </div>
            </div>

            {/* Trust Strip */}
            <div className="w-full bg-white border-y border-border/50 py-12 mt-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                        <div className="flex flex-col items-center gap-3 text-center">
                            <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                                <Shield className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-sm font-semibold text-foreground">GDPR Compliant</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 text-center">
                            <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                                <Lock className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-sm font-semibold text-foreground">Secure ID Scanning</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 text-center">
                            <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                                <Check className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-sm font-semibold text-foreground">Official Police Checks</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 text-center">
                            <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                                <Star className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-sm font-semibold text-foreground">Verified References</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Kindred Bridge Section */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl font-semibold mb-4">Why Kindred Bridge?</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 px-4">
                    <div className="flex flex-col gap-4 p-8 rounded-3xl bg-white shadow-sm border border-border/50 transition-all hover:shadow-md">
                        <h3 className="text-xl font-bold font-serif text-primary">For Families</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Access an elite, pre-vetted pool of companions without the stress of manual background checks. We handle the hard part so you can focus on connection.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 p-8 rounded-3xl bg-white shadow-sm border border-border/50 transition-all hover:shadow-md">
                        <h3 className="text-xl font-bold font-serif text-primary">For Caregivers</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Join a premium network where your professional skills are respected and rewarded. Build your reputation and work with families who value your expertise.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}

function RegistrationCard({
    title,
    icon,
    steps,
    buttonText,
    href,
    image,
    variant = "family"
}: {
    title: string
    icon: React.ReactNode
    steps: string[]
    buttonText: string
    href: string
    image: string
    variant?: "family" | "caregiver"
}) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [rotate, setRotate] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 20
        const rotateY = (centerX - x) / 20
        setRotate({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 })
        setIsHovered(false)
    }

    return (
        <div
            className="perspective-1000 h-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
        >
            <div
                ref={cardRef}
                style={{
                    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                    transition: isHovered ? "none" : "transform 0.5s ease-out"
                }}
                className={cn(
                    "group relative flex h-full flex-col items-center overflow-hidden rounded-[2.5rem] transition-all duration-500",
                    "border border-white/40",
                    "shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(107,143,113,0.12)]"
                )}
            >
                {/* Background Layer */}
                <div className="absolute inset-0 z-0 bg-white">
                    <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover transition-all duration-700 scale-105 group-hover:scale-110 opacity-30 group-hover:opacity-50 blur-[1px] group-hover:blur-0"
                    />
                    {/* Soft white overlay */}
                    <div className="absolute inset-0 bg-white/60 transition-colors duration-500 group-hover:bg-white/40" />
                </div>

                <div className="relative z-10 flex h-full flex-col items-center p-10 lg:p-12 text-center">
                    <div className="mb-8 mt-2 flex h-24 w-24 shrink-0 items-center justify-center rounded-[2rem] bg-white transition-all duration-500 group-hover:scale-110 shadow-[0_10px_20px_rgba(0,0,0,0.05)] border border-white/50">
                        <div className="transition-transform duration-500 group-hover:scale-110">
                            {icon}
                        </div>
                    </div>

                    <h2 className="shrink-0 font-serif text-3xl font-semibold text-foreground tracking-tight mb-2">
                        {title}
                    </h2>
                    <p className="text-sm text-primary font-medium tracking-wide uppercase mb-10">What to expect</p>

                    <div className="flex w-full flex-grow flex-col gap-5 text-left mb-12">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-center gap-4 group/step">
                                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/5 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                                    <CheckCircle2 className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-base font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                                    {step}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="w-full shrink-0">
                        <Link
                            href={href}
                            className="group/btn relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#8BA889] px-8 py-5 text-lg font-bold text-white transition-all hover:bg-[#7A9778] active:scale-95 shadow-xl shadow-[#8BA889]/20"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {buttonText}
                                <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                        </Link>
                    </div>
                </div>

                {/* Interactive Progress Teaser */}
                <div className="absolute bottom-0 left-0 z-20 h-2 w-full bg-[#FDFBF7]">
                    <div
                        className="h-full bg-gradient-to-r from-[#8BA889] via-[#A8C5AD] to-[#8BA889] transition-all duration-1000 ease-in-out"
                        style={{ width: isHovered ? "100%" : "0%" }}
                    />
                </div>
            </div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1500px;
                }
            `}</style>
        </div>
    )
}
