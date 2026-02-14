// components/docs/KeyboardNavigation.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
interface PaginationLink {
  title: string
  href: string
}

interface KeyboardNavigationProps {
  prev: PaginationLink | null
  next: PaginationLink | null
}

export function KeyboardNavigation({ prev, next }: KeyboardNavigationProps) {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      if (e.key === 'ArrowLeft' && prev) {
        router.push(prev.href)
      } else if (e.key === 'ArrowRight' && next) {
        router.push(next.href)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [router, prev, next])

  return null // Компонент не рендерить UI, тільки слухає клавіші
}