// lib/pagination.ts
import { getDocsNavigation } from './docs-structure'
import type { NavItem } from './navigation'

interface FlatNavItem {
  title: string
  href: string
}

// Flatten navigation tree to array
function flattenNavigation(): FlatNavItem[] {
  const items: FlatNavItem[] = []
  const seen = new Set<string>() // Prevent duplicates

  function addItem(title: string, href: string) {
    if (!seen.has(href)) {
      seen.add(href)
      items.push({ title, href })
    }
  }

  function processItem(item: NavItem) {
    if (item.href) {
      addItem(item.title, item.href)
    }
    if (item.items) {
      item.items.forEach(processItem)
    }
  }

  // Add docs index first
  addItem('Introduction', '/docs')

  // Get dynamic navigation from docs-structure
  const sections = getDocsNavigation()

  // Process all sections
  sections.forEach(section => {
    section.items.forEach(processItem)
  })

  return items
}

export interface PaginationLinks {
  prev: FlatNavItem | null
  next: FlatNavItem | null
}

export function getPaginationLinks(pathname: string): PaginationLinks {
  const flatNav = flattenNavigation()

  const currentIndex = flatNav.findIndex(item => item.href === pathname)

  if (currentIndex === -1) {
    return { prev: null, next: null }
  }

  return {
    prev: currentIndex > 0 ? flatNav[currentIndex - 1] : null,
    next: currentIndex < flatNav.length - 1 ? flatNav[currentIndex + 1] : null,
  }
}