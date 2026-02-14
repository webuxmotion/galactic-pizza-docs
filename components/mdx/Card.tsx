// components/mdx/Card.tsx
import Link from 'next/link'
import { ReactNode } from 'react'

interface CardProps {
  title: string
  description?: string
  href?: string
  icon?: string
  children?: ReactNode
}

export function Card({ title, description, href, icon, children }: CardProps) {
  const content = (
    <>
      {icon && <span className="text-3xl mb-3 block">{icon}</span>}
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-gray-400 mb-0">{description}</p>
      )}
      {children}
    </>
  )

  const className = "block rounded-lg border border-gray-800 bg-gray-900/50 p-6 hover:border-orange-500/50 transition-colors"

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    )
  }

  return <div className={className}>{content}</div>
}

// Grid wrapper for cards
export function CardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 my-6 not-prose">
      {children}
    </div>
  )
}