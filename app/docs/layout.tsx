// app/docs/layout.tsx
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4">
      <div className="flex gap-8 py-8">
        {/* Sidebar - поки що заглушка */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <nav className="sticky top-20">
            <h4 className="mb-4 font-semibold text-white">Documentation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/docs/getting-started" className="text-gray-400 hover:text-white">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="/docs/menu" className="text-gray-400 hover:text-white">
                  Menu
                </a>
              </li>
              <li>
                <a href="/docs/delivery" className="text-gray-400 hover:text-white">
                  Delivery
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}