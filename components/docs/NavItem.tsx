// components/docs/NavItem.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import type { NavItem as NavItemType } from '@/lib/navigation'

interface NavItemProps {
  item: NavItemType
  depth?: number
}

export function NavItem({ item, depth = 0 }: NavItemProps) {
  const pathname = usePathname()
  const isActive = item.href === pathname
  const hasChildren = item.items && item.items.length > 0

  // Check if any child is active
  const isChildActive = hasChildren && item.items!.some(
    child => child.href === pathname ||
    (child.items?.some(grandchild => grandchild.href === pathname))
  )

  const [isOpen, setIsOpen] = useState(isChildActive || isActive)

  const baseStyles = "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors"
  const activeStyles = isActive
    ? "bg-orange-500/10 text-orange-500 font-medium"
    : "text-gray-400 hover:text-white hover:bg-gray-800/50"

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${baseStyles} ${isChildActive ? 'text-white' : 'text-gray-400 hover:text-white'} w-full justify-between`}
        >
          <span className="flex items-center gap-2">
            {item.icon && <span>{item.icon}</span>}
            {item.title}
          </span>
          <ChevronRight
            className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`}
          />
        </button>
        {isOpen && (
          <div className="ml-4 mt-1 space-y-1 border-l border-gray-800 pl-2">
            {item.items!.map((child) => (
              <NavItem key={child.href || child.title} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={item.href || '#'}
      className={`${baseStyles} ${activeStyles}`}
    >
      {item.icon && <span>{item.icon}</span>}
      {item.title}
      {item.badge && (
        <span className="ml-auto rounded-full bg-orange-500/20 px-2 py-0.5 text-xs text-orange-400">
          {item.badge}
        </span>
      )}
    </Link>
  )
}