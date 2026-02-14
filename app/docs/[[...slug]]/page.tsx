// app/docs/[[...slug]]/page.tsx
import { Breadcrumbs } from '@/components/docs/Breadcrumbs'
import { getDocBySlug } from '@/lib/mdx'
import { notFound } from 'next/navigation'

interface DocsPageProps {
  params: Promise<{ slug?: string[] }>
}

export default async function DocPage({ params }: DocsPageProps) {
  const { slug = ['index'] } = await params
  const doc = await getDocBySlug(slug)

  if (!doc) {
    notFound()
  }

  return (
    <article>
      <Breadcrumbs />

      <div className="prose prose-invert max-w-none">
        <h1>{doc.meta.title}</h1>
        {doc.meta.description && (
          <p className="lead text-gray-400">{doc.meta.description}</p>
        )}
        <hr className="my-8 border-gray-800" />
        {doc.content}
      </div>
    </article>
  )
}