"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { usePathname } from "next/navigation"
import type React from "react"

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  const pageVariants: Variants = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        // Use a built-in easing name to satisfy TypeScript/ESLint types.
        ease: "easeInOut",
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  }

  const getDirection = (path: string) => {
    const order = ["/", "/about", "/projects", "/experience", "/skills", "/blog", "/contact"]
    const currentIndex = order.findIndex((p) => p === path)
    return currentIndex > 0 ? 1 : -1
  }

  return (
    <motion.div
      key={pathname}
      custom={getDirection(pathname)}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
