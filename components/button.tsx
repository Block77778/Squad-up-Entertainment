import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  glow?: 'purple' | 'teal' | 'gold' | 'none'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md',
    glow = 'none',
    style,
    ...props 
  }, ref) => {
    const baseStyles = 'font-mono uppercase tracking-widest transition-all duration-300 font-semibold rounded-lg relative overflow-hidden hover-lift'
    
    const variants = {
      primary: 'text-white shadow-xl hover:shadow-2xl active:shadow-lg active:scale-95 hover:opacity-90',
      secondary: 'text-white shadow-xl hover:shadow-2xl active:shadow-lg active:scale-95 hover:opacity-90',
      outline: 'border-2 text-white hover:opacity-90',
      ghost: 'text-white hover:bg-white/10',
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    }
    
    const glows = {
      purple: 'text-glow-purple',
      teal: 'text-glow-teal',
      gold: 'text-glow-gold',
      none: '',
    }

    // Inline styles for gradient variants
    const variantStyles: React.CSSProperties =
      variant === 'primary'
        ? { background: 'linear-gradient(to right, #8B5CF6, #10B981)', boxShadow: '0 4px 20px rgba(139,92,246,0.35)' }
        : variant === 'secondary'
        ? { background: 'linear-gradient(to right, #10B981, #8B5CF6)', boxShadow: '0 4px 20px rgba(16,185,129,0.35)' }
        : variant === 'outline'
        ? { borderImage: 'linear-gradient(to right, #8B5CF6, #10B981)', borderImageSlice: 1 }
        : {}
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          glows[glow],
          className
        )}
        style={{ ...variantStyles, ...style }}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
