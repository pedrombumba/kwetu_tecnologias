interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-surface border border-gray-800 rounded-2xl p-6 transition-shadow ${className} hover:shadow-lg`}
    >
      <div className="rounded-xl overflow-hidden">
        {children}
      </div>
    </div>
  )
}
