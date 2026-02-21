// app/docs/[[...slug]]/page.tsx
import { Breadcrumbs } from '@/components/docs/Breadcrumbs'
import { Pagination } from '@/components/docs/Pagination'
import { KeyboardNavigation } from '@/components/docs/KeyboardNavigation'
import { getDocBySlug } from '@/lib/mdx'
import { getPaginationLinks } from '@/lib/pagination'
import { notFound } from 'next/navigation'
import { TableOfContents } from '@/components/docs/TableOfContents'
import { MobileToc } from '@/components/docs/MobileToc'

interface DocsPageProps {
  params: Promise<{ slug?: string[] }>
}

export default async function DocPage({ params }: DocsPageProps) {
  const { slug = ['index'] } = await params
  const doc = await getDocBySlug(slug)

  if (!doc) {
    notFound()
  }

  // Обчислюємо pagination на сервері
  const slugPath = slug.join('/')
  const pathname = slugPath === 'index' ? '/docs' : `/docs/${slugPath}`
  const { prev, next } = getPaginationLinks(pathname)

  return (
    <div className="flex gap-8">
      {/* Main content */}
      <article className="min-w-0 flex-1">
        <Breadcrumbs />
        <MobileToc headings={doc.headings} />  {/* TOC для мобільних */}

        <div className="prose prose-invert max-w-none">
          <h1>{doc.meta.title}</h1>
          {doc.meta.description && (
            <p className="lead text-muted-foreground">{doc.meta.description}</p>
          )}
          <hr className="my-8 border-border" />
          {doc.content}
        </div>

        {/* Ваші існуючі Pagination та KeyboardNavigation залишаються тут */}
        <Pagination prev={prev} next={next} />
        <KeyboardNavigation prev={prev} next={next} />
      </article>

      {/* TOC для десктопу — показується тільки на xl екранах */}
      <TableOfContents
        headings={doc.headings}
        className="hidden xl:block w-56 shrink-0"
      />
    </div>
  )
}