"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center">
          <Image
            src="/images/flux-logo.png"
            alt="Flux"
            width={100}
            height={36}
            className="h-8 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#problem" className="text-sm font-medium text-muted-foreground transition-colors hover:text-flux-violet">
            Why Flux
          </a>
          <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-flux-violet">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-flux-violet">
            How It Works
          </a>
          <a href="#who-its-for" className="text-sm font-medium text-muted-foreground transition-colors hover:text-flux-violet">
            Use Cases
          </a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#how-it-works"
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[#F5F0FF]"
          >
            See How It Works
          </a>
          <a
            href="#cta"
            className="rounded-lg bg-flux-violet px-5 py-2 text-sm font-semibold text-[#ffffff] transition-shadow hover:shadow-md"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#problem" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-flux-violet">
              Why Flux
            </a>
            <a href="#features" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-flux-violet">
              Features
            </a>
            <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-flux-violet">
              How It Works
            </a>
            <a href="#who-its-for" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-flux-violet">
              Use Cases
            </a>
            <div className="mt-2 flex flex-col gap-3">
              <a
                href="#how-it-works"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg border border-border px-4 py-2.5 text-center text-sm font-medium text-foreground"
              >
                See How It Works
              </a>
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-flux-violet px-5 py-2.5 text-center text-sm font-semibold text-[#ffffff]"
              >
                Book a Demo
              </a>
              <a
              href="fermion"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Fermion AI Group
                </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
