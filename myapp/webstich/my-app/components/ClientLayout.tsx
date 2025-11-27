"use client"

import type React from "react"

import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "next-themes"
import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence } from "framer-motion"
import Lenis from "@studio-freight/lenis"
import PageTransition from "@/components/page-transition"
import Navbar from "@/components/navbar"

const useLenisScroll = () => {
  const pathname = usePathname()
  
  useEffect(() => {
    // Lenis disabled for now as Home is horizontal scroll
    return

    /*
    // Only enable Lenis on home page
    if (pathname !== "/") {
      return
    }

    const lenis = new Lenis({
      duration: 2.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -12 * t)),
      lerp: 0.1,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
    */
  }, [pathname])
}

const useScrollRestoration = () => {
  const pathname = usePathname()
  const scrollPositionsRef = useRef<Map<string, number>>(new Map())

  useEffect(() => {
    const handleScroll = () => {
      scrollPositionsRef.current.set(pathname, window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  useEffect(() => {
    // Restore scroll position after route change
    const timer = requestAnimationFrame(() => {
      const savedPosition = scrollPositionsRef.current.get(pathname)
      window.scrollTo(0, savedPosition ?? 0)
    })

    return () => cancelAnimationFrame(timer)
  }, [pathname])
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useLenisScroll()
  useScrollRestoration()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if ("loading" in HTMLImageElement.prototype === false) {
      // Polyfill for older browsers
      console.warn("Native lazy loading not supported")
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition>{children}</PageTransition>
      </AnimatePresence>
      <Analytics />
    </ThemeProvider>
  )
}
