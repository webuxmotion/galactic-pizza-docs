// components/docs/BreadcrumbsJsonLd.tsx
import { generateBreadcrumbs } from '@/lib/breadcrumbs'

export function BreadcrumbsJsonLd({ pathname }: { pathname: string }) {
  const breadcrumbs = generateBreadcrumbs(pathname)
  const baseUrl = 'https://galactic-pizza.docs'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      ...breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.title,
        item: `${baseUrl}${item.href}`,
      })),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}