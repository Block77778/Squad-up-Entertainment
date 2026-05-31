import React from 'react'
import { cn } from '@/lib/utils'

export interface StatItem {
  value: string | number
  label: string
  accent?: 'purple' | 'teal' | 'gold'
}

export interface StatBarProps extends React.HTMLAttributes<HTMLDivElement> {
  stats: StatItem[]
}

const StatBar = React.forwardRef<HTMLDivElement, StatBarProps>(
  ({ 
    className,
    stats,
    ...props 
  }, ref) => {
    const accentMap = {
      purple: {
        text: 'text-gray-300',
        border: 'hover:border-gray-400/50',
      },
      teal: {
        text: 'text-teal-light',
        border: 'hover:border-teal/50',
      },
      gold: {
        text: 'text-gold-light',
        border: 'hover:border-gold/50',
      },
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          'grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8',
          className
        )}
        {...props}
      >
        {stats.map((stat, index) => {
          const accent = stat.accent || 'purple'
          return (
            <div
              key={index}
              className={cn(
                'text-center p-6 md:p-8 rounded-lg group hover-lift transition-all duration-300 animate-slide-up',
                'border border-white/10',
                'glassmorphic-premium',
                accentMap[accent].border
              )}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className={cn(
                'text-4xl md:text-5xl font-bold mb-3 transition-all group-hover:scale-110',
                accentMap[accent].text
              )}>
                {stat.value}
              </div>
              <div className="nav-label text-xs text-white/70 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
)
StatBar.displayName = 'StatBar'

export { StatBar }
