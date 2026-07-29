import type { AnchorHTMLAttributes, PropsWithChildren, ReactNode } from 'react'

interface ButtonProps extends PropsWithChildren, AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'light'
  icon?: ReactNode
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-primary text-white shadow-[0_10px_24px_rgba(111,99,217,0.28)] hover:bg-primary-dark',
  secondary: 'border border-primary/25 bg-white text-primary-dark hover:border-primary/50',
  light: 'border border-white/70 bg-white/85 text-ink hover:bg-white',
}

export function Button({
  children,
  variant = 'primary',
  icon,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transform-none ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </a>
  )
}
