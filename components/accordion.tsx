'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

export interface AccordionItem {
  id: string
  title: string
  content: string
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[]
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ 
    className,
    items,
    ...props 
  }, ref) => {
    const [openId, setOpenId] = useState<string | null>(items[0]?.id || null)
    
    return (
      <div ref={ref} className={cn('space-y-4', className)} {...props}>
        {items.map((item) => (
          <div
            key={item.id}
            className="border border-white/5 rounded-lg overflow-hidden hover:border-white/10 transition-colors"
          >
            <button
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/2.5 transition-colors"
            >
              <h3 className="text-lg font-serif font-bold text-white">
                {item.title}
              </h3>
              <span
                className={cn(
                  'text-gray-300 transition-transform duration-200',
                  openId === item.id ? 'rotate-180' : ''
                )}
              >
                ▼
              </span>
            </button>
            
            {openId === item.id && (
              <div className="px-6 py-4 border-t border-white/5 bg-white/2 text-text-secondary">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }
)
Accordion.displayName = 'Accordion'

export { Accordion }
