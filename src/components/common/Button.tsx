interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  href: string
}

export default function Button({ children, variant = 'primary', href }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-base transition transform focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants: Record<string, string> = {
    primary: `${baseStyles} bg-primary text-deep-blue hover:shadow-lg hover:scale-105 focus:ring-teal border border-transparent`,
    outline: `${baseStyles} bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-primary hover:shadow-md focus:ring-primary`,
  }

  return (
    <a
      href={href}
      className={variants[variant]}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </a>
  )
}
