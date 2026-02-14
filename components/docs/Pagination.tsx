// components/docs/Pagination.tsx
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationLink {
  title: string
  href: string
}

interface PaginationProps {
  prev: PaginationLink | null
  next: PaginationLink | null
}

export function Pagination({ prev, next }: PaginationProps) {

  if (!prev && !next) return null

  return (
    <nav
      aria-label="Pagination"
      className="mt-16 flex items-center justify-between border-t border-gray-800 pt-8"
    >
      {/* Previous */}
      {prev ? (
        <Link
          href={prev.href}
          className="group flex items-center gap-3 rounded-lg border border-gray-800 px-4 py-3 hover:border-gray-700 hover:bg-gray-900/50 transition-all"
        >
          <ChevronLeft className="h-5 w-5 text-gray-500 group-hover:text-orange-500 transition-colors" />
          <div className="text-right">
            <div className="text-xs text-gray-500">Previous</div>
            <div className="text-sm font-medium text-white group-hover:text-orange-500 transition-colors">
              {prev.title}
            </div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {/* Next */}
      {next ? (
        <Link
          href={next.href}
          className="group flex items-center gap-3 rounded-lg border border-gray-800 px-4 py-3 hover:border-gray-700 hover:bg-gray-900/50 transition-all"
        >
          <div>
            <div className="text-xs text-gray-500">Next</div>
            <div className="text-sm font-medium text-white group-hover:text-orange-500 transition-colors">
              {next.title}
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-orange-500 transition-colors" />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}