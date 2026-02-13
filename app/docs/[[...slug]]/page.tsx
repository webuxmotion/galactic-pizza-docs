// app/docs/[[...slug]]/page.tsx
import Link from 'next/link'

interface DocsPageProps {
  params: Promise<{
    slug?: string[]
  }>
}

// Компонент головної сторінки документації
function DocsHome() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1>Galactic Pizza Documentation</h1>
      <p className="lead">
        Welcome to the official documentation for Galactic Pizza API.
        Learn how to order pizzas across the galaxy!
      </p>

      <div className="not-prose grid gap-4 sm:grid-cols-2 mt-8">
        {[
          {
            title: 'Getting Started',
            description: 'Quick start guide to place your first order',
            href: '/docs/getting-started'
          },
          {
            title: 'Menu',
            description: 'Browse our cosmic pizza menu',
            href: '/docs/menu'
          },
          {
            title: 'Delivery',
            description: 'Learn about our delivery options',
            href: '/docs/delivery'
          },
          {
            title: 'API Reference',
            description: 'Complete API documentation',
            href: '/docs/api'
          }
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="block rounded-lg border border-gray-800 bg-gray-900/50 p-6 hover:border-orange-500/50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

// Компонент для підсторінок
function DocsContent({ slug }: { slug: string[] }) {
  const path = slug.join('/')

  return (
    <div className="prose prose-invert max-w-none">
      <h1>Documentation: {path}</h1>
      <p>This page will load MDX content for: <code>/docs/{path}</code></p>

      <div className="not-prose rounded-lg bg-gray-800/50 p-4 mt-4">
        <p className="text-sm text-gray-400">
          <strong>Debug info:</strong>
        </p>
        <pre className="text-xs text-gray-500">
          {JSON.stringify({ slug, path }, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default async function DocPage({ params }: DocsPageProps) {
  const { slug } = await params

  // Якщо slug відсутній — показуємо головну документації
  if (!slug || slug.length === 0) {
    return <DocsHome />
  }

  // Інакше показуємо контент підсторінки
  return <DocsContent slug={slug} />
}