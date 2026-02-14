// components/docs/PaginationCards.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getPaginationLinks } from '@/lib/pagination'

export function PaginationCards() {
  const pathname = usePathname()
  const { prev, next } = getPaginationLinks(pathname)

  return (
    <div className="mt-16 grid gap-4 sm:grid-cols-2">
      {/* Previous card */}
      {prev ? (
        <Link
          href={prev.href}
          className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-900/50 p-6 hover:border-orange-500/50 transition-all"
        >
          <div className="absolute -right-4 -top-4 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">
            ⬅️
          </div>
          <ArrowLeft className="mb-4 h-5 w-5 text-gray-500 group-hover:text-orange-500 transition-colors" />
          <div className="text-xs text-gray-500 mb-1">Previous</div>
          <div className="font-semibold text-white group-hover:text-orange-500 transition-colors">
            {prev.title}
          </div>
        </Link>
      ) : (
        <div />
      )}

      {/* Next card */}
      {next ? (
        <Link
          href={next.href}
          className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-900/50 p-6 hover:border-orange-500/50 transition-all text-right"
        >
          <div className="absolute -left-4 -top-4 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">
            ➡️
          </div>
          <ArrowRight className="mb-4 h-5 w-5 text-gray-500 group-hover:text-orange-500 transition-colors ml-auto" />
          <div className="text-xs text-gray-500 mb-1">Next</div>
          <div className="font-semibold text-white group-hover:text-orange-500 transition-colors">
            {next.title}
          </div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}