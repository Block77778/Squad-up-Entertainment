import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'purple' | 'teal' | 'gold' | 'outline'
  size?: 'sm' | 'md'
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ 
    className, 
    variant = 'purple',
    size = 'sm',
    style,
    ...props 
  }, ref) => {
    const baseStyles = 'nav-label inline-block rounded-full backdrop-blur-md transition-all duration-300'
    
    const variants = {
      purple: 'text-white border border-transparent',
      teal: 'bg-gradient-to-r from-emerald-500/30 to-emerald-600/10 text-emerald-300 border border-emerald-500/50 hover:border-emerald-400 shadow-lg',
      gold: 'bg-gradient-to-r from-gold/30 to-gold/10 text-gold-light border border-gold/50 hover:border-gold shadow-lg hover:shadow-gold/20',
      outline: 'border border-white/30 text-white/80 backdrop-blur-lg hover:bg-white/10 hover:border-white/50',
    }
    
    const sizes = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1.5 text-xs',
    }

    const variantStyle: React.CSSProperties =
      variant === 'purple'
        ? { background: 'linear-gradient(to right, rgba(139,92,246,0.3), rgba(16,185,129,0.2))', borderColor: 'rgba(139,92,246,0.5)', boxShadow: '0 2px 12px rgba(139,92,246,0.2)' }
        : {}
    
    return (
      <span
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        style={{ ...variantStyle, ...style }}
        {...props}
      />
    )
  }
)
Badge.displayName = 'Badge'

export { Badge }
