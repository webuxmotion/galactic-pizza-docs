// app/docs/layout.tsx
// Примітка: ці компоненти будуть створені в наступних уроках
// import { Sidebar } from '@/components/docs/Sidebar'        // Урок 17
import { MobileNav } from '@/components/docs/MobileNav'    // Урок 16
// import { TableOfContents } from '@/components/docs/TableOfContents' // Урок 18

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Mobile header with menu button - буде замінено на MobileNav */}
      <div className="sticky top-16 z-40 flex items-center gap-4 border-b border-border bg-background py-4 lg:hidden">
        <MobileNav />
        <span className="text-sm font-medium">Documentation</span>
      </div>

      <div className="flex gap-8 py-8">
        {/* Sidebar - hidden on mobile, буде замінено на компонент */}
        <aside className="hidden lg:block w-64 shrink-0">
          {/* Placeholder для Sidebar */}
        </aside>

        {/* Main content - full width on mobile */}
        <main className="min-w-0 flex-1">
          {children}
        </main>

        {/* Table of contents - hidden on small screens */}
        <aside className="hidden xl:block w-64 shrink-0">
          {/* Placeholder для TableOfContents */}
        </aside>
      </div>
    </div>
  )
}