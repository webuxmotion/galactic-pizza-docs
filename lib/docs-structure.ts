// lib/docs-structure.ts
import fs from 'fs'
import path from 'path'
import { NavSection, NavItem } from './navigation'

const contentDir = path.join(process.cwd(), 'content/docs')

interface MetaItem {
  title?: string
  icon?: string
  badge?: string
  description?: string
}

type MetaConfig = Record<string, string | MetaItem>

function readMeta(dir: string): MetaConfig {
  const metaPath = path.join(dir, '_meta.json')
  if (fs.existsSync(metaPath)) {
    return JSON.parse(fs.readFileSync(metaPath, 'utf8'))
  }
  return {}
}

function getNavItems(dir: string, basePath: string = '/docs'): NavItem[] {
  const meta = readMeta(dir)
  const items: NavItem[] = []

  // Process in meta order first
  for (const [key, value] of Object.entries(meta)) {
    const fullPath = path.join(dir, key)
    const isDirectory = fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()
    const mdxPath = path.join(dir, `${key}.mdx`)
    const hasMdx = fs.existsSync(mdxPath)

    const metaValue = typeof value === 'string' ? { title: value } : value

    const item: NavItem = {
      title: metaValue.title || key,
      icon: metaValue.icon,
      badge: metaValue.badge,
    }

    if (isDirectory) {
      const indexPath = path.join(fullPath, 'index.mdx')
      if (fs.existsSync(indexPath)) {
        item.href = `${basePath}/${key}`
      }
      item.items = getNavItems(fullPath, `${basePath}/${key}`)
    } else if (hasMdx || key === 'index') {
      item.href = key === 'index' ? basePath : `${basePath}/${key}`
    }

    items.push(item)
  }

  return items
}

export function getDocsNavigation(): NavSection[] {
  const meta = readMeta(contentDir)
  const sections: NavSection[] = []

  for (const [key, value] of Object.entries(meta)) {
    if (key === 'index') continue

    const metaValue = typeof value === 'string' ? { title: value } : value
    const fullPath = path.join(contentDir, key)

    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
      sections.push({
        title: metaValue.title || key,
        items: getNavItems(fullPath, `/docs/${key}`),
      })
    }
  }

  return sections
}