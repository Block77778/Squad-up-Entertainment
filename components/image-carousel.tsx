'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImageCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  images: Array<{
    src: string
    alt: string
    objectPosition?: string
  }>
  interval?: number
  autoPlay?: boolean
}

export function ImageCarousel({ 
  images, 
  interval = 4000, 
  autoPlay = true,
  className 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay || images.length === 0) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval, autoPlay])

  if (images.length === 0) return null

  const currentImage = images[currentIndex]

  return (
    <div className={cn('relative w-full h-full overflow-hidden', className)}>
      {/* Background Images - All rendered for smooth crossfade */}
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000 ease-in-out',
            currentIndex === index ? 'opacity-100' : 'opacity-0'
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            style={{ objectPosition: image.objectPosition || 'center' }}
            priority={index === 0}
          />
        </div>
      ))}

      {/* Image Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-all duration-300',
              currentIndex === index 
                ? 'bg-gray-300 w-8' 
                : 'bg-gray-500 hover:bg-gray-400'
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
