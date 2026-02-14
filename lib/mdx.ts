// lib/mdx.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

const contentDirectory = path.join(process.cwd(), 'content')

export interface DocMeta {
  title: string
  description?: string
  slug: string
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

  // Parse frontmatter
  const { data, content } = matter(fileContent)

  // Compile MDX
  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  })

  return {
    meta: {
      title: data.title || slug[slug.length - 1],
      description: data.description || '',
      slug: slug.join('/'),
    } as DocMeta,
    content: mdxContent,
  }
}