// components/ui/CardGrid.tsx
interface CardGridProps {
  children: React.ReactNode
  columns?: 1 | 2 | 3 | 4
}

export function CardGrid({ children, columns = 2 }: CardGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid gap-4 ${gridCols[columns]}`}>
      {children}
    </div>
  )
}