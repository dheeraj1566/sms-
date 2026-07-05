import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonBaseProps {
  variant?: Variant
  className?: string
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    'bg-ink text-cream hover:bg-gold hover:text-ink border border-ink hover:border-gold',
  secondary:
    'bg-transparent text-cream border border-cream/50 hover:bg-cream hover:text-ink hover:border-cream',
  ghost:
    'bg-transparent text-ink border border-ink/20 hover:border-gold hover:text-bronze',
}

const base =
  'relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.8rem] uppercase tracking-[0.14em] font-medium transition-colors duration-300 overflow-hidden active:scale-[0.98]'

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', children, ...props }, ref) => (
    <button ref={ref} className={`${base} ${VARIANT_CLASSES[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
)
Button.displayName = 'Button'

type LinkButtonProps = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement>

export function LinkButton({ variant = 'primary', className = '', children, ...props }: LinkButtonProps) {
  return (
    <a className={`${base} ${VARIANT_CLASSES[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
