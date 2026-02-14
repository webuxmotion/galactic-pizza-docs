// app/docs/[[...slug]]/page.tsx
import { getDocBySlug } from '@/lib/mdx'
import { notFound } from 'next/navigation'

interface DocsPageProps {
  params: Promise<{
    slug?: string[]
  }>
}

export default async function DocPage({ params }: DocsPageProps) {
  const { slug } = await params

  // Для /docs завантажуємо index.mdx, для інших — відповідний файл
  const docSlug = !slug || slug.length === 0 ? ['index'] : slug

  const doc = await getDocBySlug(docSlug)

  if (!doc) {
    notFound()
  }

  return (
    <article className="prose prose-invert max-w-none">
      <h1>{doc.meta.title}</h1>
      {doc.meta.description && (
        <p className="lead text-gray-400">{doc.meta.description}</p>
      )}
      <hr className="my-8 border-gray-800" />
      {doc.content}
    </article>
  )
}