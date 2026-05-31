import React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'ghost'
  border?: 'purple' | 'teal' | 'gold' | 'subtle' | 'none'
  glow?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant = 'default',
    border = 'subtle',
    glow = false,
    ...props 
  }, ref) => {
    const baseStyles = 'rounded-lg transition-all duration-300 hover-lift'
    
    const variants = {
      default: 'glassmorphic-premium',
      elevated: 'glassmorphic-premium shadow-2xl',
      ghost: 'bg-transparent hover:bg-white/5',
    }
    
    const borders = {
      purple: 'border-premium-purple',
      teal: 'border-premium-teal',
      gold: 'border-premium-gold',
      subtle: 'border border-white/8 hover:border-white/15',
      none: '',
    }
    
    const glowClass = glow ? 'box-glow-purple-animated' : ''
    
    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          borders[border],
          glowClass,
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = 'Card'

export { Card }
