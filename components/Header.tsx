// components/Header.tsx
import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🍕</span>
            <span className="font-bold text-white">Galactic Pizza</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/docs"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="/docs/api"
              className="text-gray-400 hover:text-white transition-colors"
            >
              API Reference
            </Link>
            <a
              href="https://github.com/galactic-pizza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </nav>

          {/* CTA Button */}
          <Link
            href="/docs/getting-started"
            className="rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}