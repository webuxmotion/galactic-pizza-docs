// app/docs/layout.tsx
import { Sidebar } from '@/components/docs/Sidebar'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4">
      <div className="flex gap-8 py-8">
        <Sidebar />
        <main className="min-w-0 flex-1 max-w-3xl">
          {children}
        </main>
      </div>
    </div>
  )
}