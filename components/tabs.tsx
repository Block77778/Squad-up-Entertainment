'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: {
    id: string
    label: string
    content: React.ReactNode
  }[]
  defaultTab?: string
  variant?: 'default' | 'underline'
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ 
    className,
    tabs,
    defaultTab,
    variant = 'default',
    ...props 
  }, ref) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || '')
    
    const activeTabData = tabs.find(tab => tab.id === activeTab)
    
    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        {/* Tab Headers */}
        <div className={cn(
          'flex gap-6 border-b',
          variant === 'underline' ? 'border-white/5' : 'border-white/5'
        )}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'nav-label text-xs py-4 px-2 transition-all border-b-2',
                activeTab === tab.id
                  ? 'text-gray-300 border-gray-400-light'
                  : 'text-white/50 border-transparent hover:text-white/70'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="mt-8">
          {activeTabData && activeTabData.content}
        </div>
      </div>
    )
  }
)
Tabs.displayName = 'Tabs'

export { Tabs }
