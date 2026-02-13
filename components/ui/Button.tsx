// components/ui/Button.tsx
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = ''
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-all'

  const variants = {
    primary: 'bg-pizza-500 text-white hover:bg-pizza-600 glow-orange',
    secondary: 'border border-space-600 text-white hover:border-space-500 hover:bg-space-800',
  }

  const styles = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return <Link href={href} className={styles}>{children}</Link>
  }

  return <button className={styles}>{children}</button>
}