import React, { useEffect, useMemo, useRef, useState, forwardRef, type CSSProperties, type PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

type RevealVariant = 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out'

type RevealProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements
  className?: string
  once?: boolean
  /** Delay in ms before the animation starts */
  delay?: number
  /** Transition duration in ms */
  duration?: number
  /** Distance in px used by translate variants */
  distance?: number
  /** Intersection threshold (0..1) */
  threshold?: number
  /** Root margin bottom in px (how early to trigger) */
  offset?: number
  /** Animation variant */
  variant?: RevealVariant
  /** Called when element first reveals */
  onReveal?: () => void
}>

function getHiddenTransform(variant: RevealVariant, distance: number) {
  switch (variant) {
    case 'fade-up':
      return `translateY(${distance}px)`
    case 'fade-down':
      return `translateY(-${distance}px)`
    case 'fade-left':
      return `translateX(${distance}px)`
    case 'fade-right':
      return `translateX(-${distance}px)`
    case 'zoom-in':
      return 'scale(0.98)'
    case 'zoom-out':
      return 'scale(1.02)'
    default:
      return 'none'
  }
}

const Reveal = forwardRef<HTMLElement, RevealProps>(function Reveal(
  {
    as = 'div',
    className,
    once = true,
    delay = 0,
    duration = 700,
    distance = 24,
    threshold = 0.15,
    offset = 80,
    variant = 'fade-up',
    onReveal,
    children,
  },
  forwardedRef
) {
  const localRef = useRef<HTMLElement | null>(null)
  const setRefs = (node: HTMLElement | null) => {
    localRef.current = node
    if (typeof forwardedRef === 'function') forwardedRef(node)
    else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node
  }

  const [visible, setVisible] = useState(false)

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    const el = localRef.current
    if (!el) return

    // If user prefers reduced motion, reveal immediately.
    if (prefersReducedMotion) {
      setVisible(true)
      onReveal?.()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            onReveal?.()
            if (once) observer.disconnect()
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      {
        root: null,
        rootMargin: `0px 0px -${offset}px 0px`,
        threshold,
      }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [once, offset, threshold, onReveal, prefersReducedMotion])

  const Comp: any = as

  const baseStyle: CSSProperties = {
    transitionProperty: 'transform, opacity',
    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    transitionDuration: `${duration}ms`,
    transitionDelay: delay ? `${delay}ms` : undefined,
    willChange: 'transform, opacity',
  }

  const hiddenTransform = getHiddenTransform(variant, distance)
  const dynamicStyle: CSSProperties = visible
    ? { opacity: 1, transform: 'none' }
    : { opacity: 0, transform: hiddenTransform }

  return (
    <Comp
      ref={setRefs}
      style={{ ...baseStyle, ...dynamicStyle }}
      className={cn('transform-gpu', className)}
    >
      {children}
    </Comp>
  )
})

export default Reveal

