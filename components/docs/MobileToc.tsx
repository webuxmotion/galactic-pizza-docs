// components/docs/MobileToc.tsx
'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { TocItem } from '@/lib/mdx'

export function MobileToc({ headings }: { headings: TocItem[] }) {
  const [isOpen, setIsOpen] = useState(false)

  if (headings.length === 0) return null

  return (
    <div className="xl:hidden mb-6 border border-border rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium"
      >
        On this page
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <ul className="px-4 pb-4 space-y-2 text-sm border-t border-border pt-3">
          {headings.map((heading) => (
            <li key={heading.id} style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}>
              <a
                href={`#${heading.id}`}
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                {heading.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}