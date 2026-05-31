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
    ...props 
  }, ref) => {
    const baseStyles = 'font-mono uppercase tracking-widest transition-all duration-300 font-semibold rounded-lg relative overflow-hidden hover-lift'
    
    const variants = {
      primary: 'bg-gradient-to-b from-gray-400 to-gray-500-700 text-white hover:from-gray-400-400 hover:to-gray-500-600 hover:box-glow-purple shadow-xl hover:shadow-2xl active:shadow-lg active:scale-95',
      secondary: 'bg-gradient-to-b from-teal to-teal-700 text-white hover:from-teal-400 hover:to-teal-600 hover:box-glow-teal shadow-xl hover:shadow-2xl active:shadow-lg active:scale-95',
      outline: 'border-2 border-gray-400/60 text-white hover:bg-gradient-to-r hover:from-gray-400/20 hover:to-transparent hover:border-gray-400 hover:box-glow-purple',
      ghost: 'text-white hover:bg-white/10 hover:text-gray-300 hover:box-glow-purple',
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
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
