"use client"

import Link from "next/link"
import Image from "next/image"
import { Fingerprint, Shield, Clock, ChevronLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function CaregiverStep1() {
    return (
        <main className="flex min-h-screen bg-[#FDFBF7]">
            {/* Left Side: Image (Hidden on mobile) */}
            <div className="relative hidden w-1/2 lg:block">
                <Image
                    src="/images/caregiver-portrait.jpg"
                    alt="Professional caregiver"
                    fill
                    className="object-cover brightness-90 blur-[1px]"
                    priority
                />
                <div className="absolute inset-0 bg-primary/10" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="max-w-md text-center">
                        <h2 className="font-serif text-4xl font-semibold text-white drop-shadow-lg">
                            Join the Elite 1%.
                        </h2>
                        <p className="mt-4 text-white/90 font-medium">
                            We connect the world's best caregivers with families who value quality.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side: Form Content */}
            <div className="relative flex w-full flex-col p-6 lg:w-1/2 lg:p-16">
                {/* Top Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-border/40">
                    <div className="h-full w-1/5 bg-[#8BA889] shadow-[0_0_10px_rgba(139,168,137,0.5)]" />
                </div>

                {/* Navigation */}
                <header className="mb-12 flex items-center justify-between">
                    <Link href="/register" className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                        <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back
                    </Link>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Process: 1 / 5</span>
                </header>

                <div className="mx-auto flex w-full max-w-md flex-grow flex-col justify-center">
                    <Link href="/" className="mb-10 inline-block">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary">
                            <span className="font-serif text-xl font-bold text-primary-foreground">K</span>
                        </div>
                    </Link>

                    <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                        Begin your Professional Application.
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Apply to join caregivers in <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-4">Berlin</span>, <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-4">Dubai</span>, and <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-4">Bangkok</span>.
                    </p>

                    <div className="mt-12 w-full space-y-4">
                        {/* Main Auth Hook */}
                        <div className="relative group">
                            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-[#8BA889]/20 to-transparent opacity-0 blur transition-opacity group-hover:opacity-100" />
                            <button className="relative flex w-full items-center justify-center gap-3 rounded-[2rem] bg-foreground px-8 py-5 text-xl font-medium text-background transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] active:scale-[0.98]">
                                <Fingerprint className="h-7 w-7" />
                                Register with Passkey
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 rounded-[2rem] border-2 border-border bg-white px-6 py-4 text-base font-medium text-foreground transition-all hover:border-primary/20 hover:bg-[#FDFBF7] active:scale-[0.98]">
                                <svg className="h-5 w-5" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
                                </svg>
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-2 rounded-[2rem] border-2 border-border bg-white px-6 py-4 text-base font-medium text-foreground transition-all hover:border-primary/20 hover:bg-[#FDFBF7] active:scale-[0.98]">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.11.74.82 0 1.99-.83 3.52-.69 1.49.14 2.61.73 3.29 1.74-3.15 1.92-2.63 6.09.52 7.35-.61 1.54-1.43 2.91-2.44 3.83zM12.04 7.2c-.13-1.94 1.5-3.64 3.48-3.79.25 2.38-2.21 3.99-3.48 3.79z" />
                                </svg>
                                Apple
                            </button>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex items-center gap-3 rounded-2xl bg-[#8BA889]/10 px-6 py-3 border border-[#8BA889]/20">
                            <Clock className="h-4 w-4 text-[#8BA889]" />
                            <span className="text-sm font-medium text-[#8BA889]">
                                Most caregivers complete this step in under 45 seconds.
                            </span>
                        </div>
                    </div>

                    <div className="mt-12 flex items-start gap-4 rounded-3xl bg-white p-6 text-left shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-border/50">
                        <Shield className="h-6 w-6 text-primary shrink-0" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            <strong>Secure & Private.</strong> Your application is private. Identity scans are processed instantly and deleted after verification.
                        </p>
                    </div>
                </div>

                <footer className="mt-auto pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
                    <p>© 2026 Kindred Bridge. Professional Network for Elite Care.</p>
                </footer>
            </div>
        </main>
    )
}
