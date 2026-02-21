// lib/rehype-slug.ts
import { visit } from 'unist-util-visit'
import { toString } from 'hast-util-to-string'

export function rehypeSlug() {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)) {
        const text = toString(node)
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')

        node.properties = node.properties || {}
        node.properties.id = id
      }
    })
  }
}