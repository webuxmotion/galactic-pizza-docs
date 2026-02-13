// components/ui/Badge.tsx
interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'orange' | 'green' | 'red'
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-space-700 text-gray-300',
    orange: 'bg-pizza-500/20 text-pizza-400',
    green: 'bg-green-500/20 text-green-400',
    red: 'bg-red-500/20 text-red-400',
  }

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}