import React from 'react'
import { cn } from '@/lib/utils'
import { Card } from './card'

export interface FeatureGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 2 | 3 | 4
  items: {
    title: string
    description: string
    icon?: React.ReactNode
    color?: 'purple' | 'teal' | 'gold'
  }[]
}

const FeatureGrid = React.forwardRef<HTMLDivElement, FeatureGridProps>(
  ({ 
    className,
    columns = 3,
    items,
    ...props 
  }, ref) => {
    const columnClasses = {
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    }
    
    const colorMap = {
      purple: {
        icon: 'text-gray-300',
        title: 'group-hover:text-gray-300',
      },
      teal: {
        icon: 'text-teal-light',
        title: 'group-hover:text-teal-light',
      },
      gold: {
        icon: 'text-gold-light',
        title: 'group-hover:text-gold-light',
      },
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          'grid gap-8',
          columnClasses[columns],
          className
        )}
        {...props}
      >
        {items.map((item, index) => {
          const color = item.color || 'purple'
          return (
            <Card
              key={index}
              border="subtle"
              className={cn(
                'p-8 group hover-lift transition-all duration-300 animate-slide-up'
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {item.icon && (
                <div className={cn('text-4xl mb-6 transition-all group-hover:scale-125 group-hover:animate-float', colorMap[color].icon)}>
                  {item.icon}
                </div>
              )}
              <h3 className={cn('text-2xl font-serif font-bold mb-3 text-white transition-all', colorMap[color].title)}>
                {item.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {item.description}
              </p>
            </Card>
          )
        })}
      </div>
    )
  }
)
FeatureGrid.displayName = 'FeatureGrid'

export { FeatureGrid }
