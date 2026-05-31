import React from 'react'
import { cn } from '@/lib/utils'
import { TypingText } from './typing-text'

export interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  glowColor?: 'purple' | 'teal' | 'gold'
  height?: 'sm' | 'md' | 'lg'
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ 
    className,
    title,
    subtitle,
    glowColor = 'purple',
    height = 'lg',
    children,
    ...props 
  }, ref) => {
    const heights = {
      sm: 'min-h-[400px]',
      md: 'min-h-[600px]',
      lg: 'min-h-[700px]',
    }
    
    const glowMap = {
      purple: 'text-glow-purple',
      teal: 'text-glow-teal',
      gold: 'text-glow-gold',
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full overflow-hidden flex items-center justify-center',
          heights[height],
          className
        )}
        {...props}
      >
        {/* COD Warzone Background */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/hero-bg-cod.jpg)'}} />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto animate-slide-up">
          <h1 className={cn(
            'text-5xl md:text-8xl font-serif font-black mb-6 leading-tight tracking-tighter uppercase text-white'
          )}>
            <TypingText text={title.toUpperCase()} typingSpeed={60} wordDelay={100} />
          </h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl text-text-secondary mb-10 font-light leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          
          {children && (
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              {children}
            </div>
          )}
        </div>
      </div>
    )
  }
)
HeroSection.displayName = 'HeroSection'

export { HeroSection }
