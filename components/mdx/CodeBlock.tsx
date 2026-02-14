// components/mdx/CodeBlock.tsx
'use client'

import { useState } from 'react'

interface CodeBlockProps {
  children: React.ReactNode
  className?: string
  title?: string
}

export function CodeBlock({ children, className, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    const code = document.querySelector('pre code')?.textContent || ''
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      {title && (
        <div className="text-sm text-gray-400 bg-gray-900 px-4 py-2 rounded-t-lg border border-b-0 border-gray-800 font-mono">
          {title}
        </div>
      )}
      <button
        onClick={copyCode}
        className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 hover:bg-gray-700 text-gray-400 px-2 py-1 rounded text-xs"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre className={className}>{children}</pre>
    </div>
  )
}