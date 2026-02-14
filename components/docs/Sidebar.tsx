// components/docs/Sidebar.tsx
import { docsNavigation } from '@/lib/navigation'
import { NavItem } from './NavItem'

export function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <nav className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto pb-10 pr-4">
        {docsNavigation.map((section) => (
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