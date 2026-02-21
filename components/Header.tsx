// components/Header.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">🍕</span>
            <span className="font-bold text-sm sm:text-base">Galactic Pizza</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/docs" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Documentation
            </Link>
            <Link href="/docs/api" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              API
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeSwitcher />

            {/* CTA - hidden on smallest screens */}
            <Link
              href="/docs/getting-started"
              className="hidden sm:inline-flex rounded-full bg-accent px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white hover:bg-accent/90 transition-colors"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-2">
              <Link
                href="/docs"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="/docs/api"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                API Reference
              </Link>
              <Link
                href="/docs/getting-started"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white text-center hover:bg-accent/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}