"use client"

import Link from "next/link"
import Image from "next/image"
import { Fingerprint, Mail, ArrowRight, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FamilyStep1() {
    return (
        <main className="flex min-h-screen bg-[#FDFBF7]">
            {/* Left Side: Image (Hidden on mobile) */}
            <div className="relative hidden w-1/2 lg:block">
                <Image
                    src="/images/family-together.jpg"
                    alt="Family laughing together"
                    fill
                    className="object-cover brightness-90 blur-[2px]"
                    priority
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="max-w-md text-center">
                        <h2 className="font-serif text-4xl font-semibold text-white drop-shadow-lg">
                            Peace of mind starts here.
                        </h2>
                    </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="flex w-full flex-col p-6 lg:w-1/2 lg:p-16">
                {/* Header */}
                <header className="flex items-center justify-between">
                    <Link href="/register" className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                        <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back
                    </Link>
                    <div className="flex flex-col items-end gap-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Step 1 of 3</span>
                        <div className="h-1 w-24 overflow-hidden rounded-full bg-border">
                            <div className="h-full w-1/3 bg-[#8BA889]" />
                        </div>
                    </div>
                </header>

                <div className="mx-auto flex w-full max-w-md flex-grow flex-col justify-center py-12">
                    <div className="mb-10">
                        <Link href="/" className="mb-8 inline-block">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                                <span className="font-serif text-lg font-bold text-primary-foreground">K</span>
                            </div>
                        </Link>
                        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground">
                            Let’s find your perfect match.
                        </h1>
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Passkey Button */}
                        <button className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-[2rem] bg-foreground px-6 py-5 text-lg font-medium text-background transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] active:scale-95">
                            <Fingerprint className="h-6 w-6" />
                            Continue with Passkey
                            <div className="absolute inset-0 -z-10 bg-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
                        </button>

                        {/* Social Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 rounded-[2rem] border-2 border-border bg-white px-6 py-4 text-base font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:bg-[#FDFBF7] active:scale-95">
                                <svg className="h-5 w-5" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
                                </svg>
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-2 rounded-[2rem] border-2 border-border bg-white px-6 py-4 text-base font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:bg-[#FDFBF7] active:scale-95">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.11.74.82 0 1.99-.83 3.52-.69 1.49.14 2.61.73 3.29 1.74-3.15 1.92-2.63 6.09.52 7.35-.61 1.54-1.43 2.91-2.44 3.83zM12.04 7.2c-.13-1.94 1.5-3.64 3.48-3.79.25 2.38-2.21 3.99-3.48 3.79z" />
                                </svg>
                                Apple
                            </button>
                        </div>

                        <p className="mt-2 text-center text-sm text-muted-foreground">
                            No passwords to remember. We use secure, biometric login to keep your family data safe.
                        </p>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-border"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-[#FDFBF7] px-4 text-muted-foreground font-medium">Or magic link</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full rounded-2xl border-2 border-border bg-white py-4 pl-12 pr-4 text-sm transition-focus outline-none focus:border-[#8BA889] focus:ring-4 focus:ring-[#8BA889]/10"
                                />
                            </div>
                            <button className="flex items-center justify-center gap-2 rounded-2xl bg-[#8BA889] py-4 text-base font-medium text-white transition-all hover:opacity-90 active:scale-95">
                                Send Magic Link
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <footer className="mt-auto pt-8 text-center text-xs text-muted-foreground">
                    By continuing, you agree to our <Link href="#" className="underline underline-offset-4 hover:text-foreground">Terms of Service</Link> and <Link href="#" className="underline underline-offset-4 hover:text-foreground">Privacy Policy</Link>.
                </footer>
            </div>
        </main>
    )
}
