// components/docs/TableOfContents.tsx
'use client'

import { useEffect, useState } from 'react'
import { TocItem } from '@/lib/mdx'

interface TableOfContentsProps {
  headings: TocItem[]
  className?: string
}

export function TableOfContents({ headings, className = '' }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    )

    // Observe all headings
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className={`${className}`}>
      <div className="sticky top-20">
        <h4 className="mb-4 text-sm font-semibold text-foreground">
          On this page
        </h4>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }}
                className={`block py-1 transition-colors hover:text-foreground ${
                  activeId === heading.id
                    ? 'text-accent font-medium'
                    : 'text-muted-foreground'
                }`}
              >
                {heading.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}