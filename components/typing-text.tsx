'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface TypingTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  typingSpeed?: number
  wordDelay?: number
}

export function TypingText({ text, typingSpeed = 60, wordDelay = 200, className }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!text) return

    let charIndex = 0
    let displayIndex = 0

    const type = () => {
      if (charIndex < text.length) {
        // Add one character at a time
        displayIndex = charIndex + 1
        setDisplayedText(text.substring(0, displayIndex))
        charIndex++

        // Pause at word boundaries
        if (text[charIndex - 1] === ' ') {
          setTimeout(type, typingSpeed + wordDelay)
        } else {
          setTimeout(type, typingSpeed)
        }
      } else {
        setIsTyping(false)
      }
    }

    const timer = setTimeout(type, 300)
    return () => clearTimeout(timer)
  }, [text, typingSpeed, wordDelay])

  return (
    <div className={cn('inline-block', className)}>
      <span>{displayedText}</span>
      {isTyping && <span className="typing-cursor"></span>}
    </div>
  )
}
