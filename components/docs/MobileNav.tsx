// components/docs/MobileNav.tsx
'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X, ChevronRight } from 'lucide-react'
import { docsNavigation, NavItem as NavItemType } from '@/lib/navigation'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Open navigation menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 z-50 h-full w-80 max-w-[calc(100vw-3rem)] bg-background border-r border-border shadow-xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <span className="text-xl">🍕</span>
            <span className="font-bold">Galactic Pizza</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation content */}
        <div className="overflow-y-auto h-[calc(100%-4rem)] p-4">
          {/* Main link */}
          <Link
            href="/docs"
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md mb-4 ${
              pathname === '/docs'
                ? 'bg-accent/10 text-accent'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <span>👋</span>
            Introduction
          </Link>

          {/* Sections */}
          {docsNavigation.map((section) => (
            <MobileNavSection
              key={section.title}
              section={section}
              pathname={pathname}
              onNavigate={() => setIsOpen(false)}
            />
          ))}
        </div>
      </nav>
    </>
  )
}

// Секції та елементи навігації

interface MobileNavSectionProps {
  section: { title: string; items: NavItemType[] }
  pathname: string
  onNavigate: () => void
}

function MobileNavSection({ section, pathname, onNavigate }: MobileNavSectionProps) {
  return (
    <div className="mb-6">
      <h3 className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {section.title}
      </h3>
      <div className="space-y-1">
        {section.items.map((item) => (
          <MobileNavItem
            key={item.href || item.title}
            item={item}
            pathname={pathname}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  )
}

interface MobileNavItemProps {
  item: NavItemType
  pathname: string
  onNavigate: () => void
  depth?: number
}

function MobileNavItem({ item, pathname, onNavigate, depth = 0 }: MobileNavItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isActive = item.href === pathname
  const hasChildren = item.items && item.items.length > 0

  // Auto-expand if child is active
  useEffect(() => {
    if (hasChildren && item.items?.some(child =>
      child.href === pathname || child.items?.some(gc => gc.href === pathname)
    )) {
      setIsExpanded(true)
    }
  }, [pathname, hasChildren, item.items])

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-left transition-colors ${
            isActive ? 'bg-accent/10 text-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
          style={{ paddingLeft: `${depth * 12 + 12}px` }}
        >
          <span className="flex items-center gap-2">
            {item.icon && <span>{item.icon}</span>}
            {item.title}
          </span>
          <ChevronRight className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
          {item.items?.map((child) => (
            <MobileNavItem
              key={child.href || child.title}
              item={child}
              pathname={pathname}
              onNavigate={onNavigate}
              depth={depth + 1}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <Link
      href={item.href || '#'}
      onClick={onNavigate}
      className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
        isActive ? 'bg-accent/10 text-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
      }`}
      style={{ paddingLeft: `${depth * 12 + 12}px` }}
    >
      {item.icon && <span>{item.icon}</span>}
      {item.title}
      {item.badge && (
        <span className="ml-auto text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
          {item.badge}
        </span>
      )}
    </Link>
  )
}