// components/docs/Breadcrumbs.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { generateBreadcrumbs } from '@/lib/breadcrumbs'

export function Breadcrumbs() {
  const pathname = usePathname()
  const breadcrumbs = generateBreadcrumbs(pathname)

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol
        className="flex items-center gap-2 text-sm"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {/* Home link */}
        <li
          itemScope
          itemProp="itemListElement"
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            itemProp="item"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only" itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {breadcrumbs.map((item, index) => (
          <li
            key={item.href}
            className="flex items-center gap-2"
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
          >
            <ChevronRight className="h-4 w-4 text-gray-600" />
            {index === breadcrumbs.length - 1 ? (
              <span
                className="text-white font-medium"
                itemProp="name"
              >
                {item.title}
              </span>
            ) : (
              <Link
                href={item.href}
                itemProp="item"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span itemProp="name">{item.title}</span>
              </Link>
            )}
            <meta itemProp="position" content={`${index + 2}`} />
          </li>
        ))}
      </ol>
    </nav>
  )
}