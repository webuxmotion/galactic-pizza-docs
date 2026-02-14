// lib/breadcrumbs.ts
import { docsNavigation, NavItem } from './navigation'

export interface BreadcrumbItem {
  title: string
  href: string
}

export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Docs', href: '/docs' }
  ]

  if (pathname === '/docs') {
    return breadcrumbs
  }

  // Split path into segments
  const segments = pathname.replace('/docs/', '').split('/')
  let currentPath = '/docs'

  // Find titles from navigation
  function findTitle(items: NavItem[], href: string): string | null {
    for (const item of items) {
      if (item.href === href) return item.title
      if (item.items) {
        const found = findTitle(item.items, href)
        if (found) return found
      }
    }
    return null
  }

  // Build breadcrumb for each segment
  for (const segment of segments) {
    currentPath += `/${segment}`

    // Search all sections for matching item
    let title: string | null = null
    for (const section of docsNavigation) {
      title = findTitle(section.items, currentPath)
      if (title) break
    }

    breadcrumbs.push({
      title: title || segment.replace(/-/g, ' '),
      href: currentPath
    })
  }

  return breadcrumbs
}