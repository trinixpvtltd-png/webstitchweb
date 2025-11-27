"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export default function LazyImage({ src, alt, className = "", priority = false }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: "50px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [priority])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-secondary ${className}`}
      style={{
        opacity: isLoaded ? 1 : 0.5,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      {isVisible && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          onLoadingComplete={() => setIsLoaded(true)}
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
      )}
    </div>
  )
}
