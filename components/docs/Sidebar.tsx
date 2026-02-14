// components/docs/Sidebar.tsx
import { getDocsNavigation } from '@/lib/docs-structure'
import { NavItem } from './NavItem'
import Link from 'next/link'

export function Sidebar() {
  const navigation = getDocsNavigation()

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <nav className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto pb-10 pr-4">
        {/* Introduction link */}
        <div className="mb-6">
          <Link
            href="/docs"
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white rounded-md hover:bg-gray-800/50"
          >
            <span>👋</span>
            Introduction
          </Link>
        </div>

        {/* Dynamic sections */}
        {navigation.map((section) => (
          <div key={section.title} className="mb-6">
            <h4 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              {section.title}
            </h4>
            <div className="space-y-1">
              {section.items.map((item) => (
                <NavItem key={item.href || item.title} item={item} />
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}