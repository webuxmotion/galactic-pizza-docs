// lib/mdx.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import { mdxComponents } from './mdx-components'
import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
import { rehypeSlug } from './rehype-slug'

const contentDirectory = path.join(process.cwd(), 'content')

// Налаштування підсвітки синтаксису
const rehypePrettyCodeOptions = {
  theme: 'github-dark',
  keepBackground: true,
  defaultLang: 'plaintext',
  onVisitLine(node: any) {
    // Prevent lines from collapsing
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push('highlighted-line')
  },
  onVisitHighlightedChars(node: any) {
    node.properties.className = ['highlighted-chars']
  },
}

export interface DocMeta {
  title: string
  description?: string
  slug: string
}

export interface TocItem {
  id: string
  title: string
  level: number
}

// Remark plugin to extract headings
function extractHeadings(headings: TocItem[]) {
  return () => {
    return (tree: any) => {
      visit(tree, 'heading', (node) => {
        const text = toString(node)
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')

        headings.push({
          id,
          title: text,
          level: node.depth,
        })
      })
    }
  }
}

export async function getDocBySlug(slug: string[]) {
  // Build file path from slug
  const filePath = path.join(contentDirectory, 'docs', ...slug) + '.mdx'
  const indexPath = path.join(contentDirectory, 'docs', ...slug, 'index.mdx')

  // Check which file exists
  let fullPath = ''
  if (fs.existsSync(filePath)) {
    fullPath = filePath
  } else if (fs.existsSync(indexPath)) {
    fullPath = indexPath
  } else {
    return null
  }

  // Read file content
  const fileContent = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContent)

  const headings: TocItem[] = []

  const { content: mdxContent } = await compileMDX({
    source: content,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        // Додайте extractHeadings до remarkPlugins:
        remarkPlugins: [remarkGfm, extractHeadings(headings)],
        rehypePlugins: [
          rehypeSlug,
          [rehypePrettyCode, rehypePrettyCodeOptions],
        ],
      },
    },
  })

  return {
    meta: {
      title: data.title || 'Untitled',
      description: data.description || '',
      slug: slug.join('/'),
    },
    content: mdxContent,
    // Додайте headings до результату:
    headings: headings.filter(h => h.level > 1 && h.level <= 3), // h2 and h3 only
  }
}