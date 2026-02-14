// components/mdx/Callout.tsx
import { ReactNode } from 'react'

interface CalloutProps {
  children: ReactNode
  type?: 'info' | 'warning' | 'danger' | 'success'
  title?: string
}

const icons = {
  info: '💡',
  warning: '⚠️',
  danger: '🚨',
  success: '✅',
}

const styles = {
  info: 'border-blue-500 bg-blue-500/10',
  warning: 'border-yellow-500 bg-yellow-500/10',
  danger: 'border-red-500 bg-red-500/10',
  success: 'border-green-500 bg-green-500/10',
}

export function Callout({ children, type = 'info', title }: CalloutProps) {
  return (
    <div className={`my-6 rounded-lg border-l-4 p-4 ${styles[type]}`}>
      <div className="flex items-start gap-3">
        <span className="text-xl">{icons[type]}</span>
        <div className="flex-1">
          {title && (
            <p className="font-semibold text-white mb-1">{title}</p>
          )}
          <div className="text-gray-300 text-sm [&>p]:m-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}