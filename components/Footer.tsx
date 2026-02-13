// components/Footer.tsx
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍕</span>
              <span className="font-bold text-white">Galactic Pizza</span>
            </Link>
            <p className="text-sm text-gray-400">
              The best intergalactic pizza delivery service in the known universe.
            </p>
          </div>

          {/* Documentation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Documentation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs/getting-started" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/docs/api" className="text-sm text-gray-400 hover:text-white transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/docs/examples" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Examples
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/galactic-pizza" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Galactic Pizza. All rights reserved across the universe.
        </div>
      </div>
    </footer>
  )
}