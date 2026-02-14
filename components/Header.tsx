// components/Header.tsx
import Link from 'next/link'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🍕</span>
            <span className="font-bold">Galactic Pizza</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link href="/docs/api" className="text-muted-foreground hover:text-foreground transition-colors">
              API Reference
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <Link
              href="/docs/getting-started"
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}