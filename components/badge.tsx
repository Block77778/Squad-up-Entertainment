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
    ...props 
  }, ref) => {
    const baseStyles = 'nav-label inline-block rounded-full backdrop-blur-md transition-all duration-300'
    
    const variants = {
      purple: 'bg-gradient-to-r from-gray-400/30 to-gray-500/10 text-gray-300 border border-gray-400/50 hover:border-gray-400 shadow-lg hover:shadow-purple-light/20',
      teal: 'bg-gradient-to-r from-teal/30 to-teal/10 text-teal-light border border-teal/50 hover:border-teal shadow-lg hover:shadow-teal-light/20',
      gold: 'bg-gradient-to-r from-gold/30 to-gold/10 text-gold-light border border-gold/50 hover:border-gold shadow-lg hover:shadow-gold/20',
      outline: 'border border-white/30 text-white/80 backdrop-blur-lg hover:bg-white/10 hover:border-white/50',
    }
    
    const sizes = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1.5 text-xs',
    }
    
    return (
      <span
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = 'Badge'

export { Badge }
