// components/ProseWrapper.tsx
interface ProseWrapperProps {
  children: React.ReactNode
}

export function ProseWrapper({ children }: ProseWrapperProps) {
  return (
    <div className="prose prose-invert max-w-none">
      {children}
    </div>
  )
}