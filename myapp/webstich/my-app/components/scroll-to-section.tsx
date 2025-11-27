"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function ScrollToSection() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Only auto-scroll if explicitly requested via query param `?scroll=true`.
    // This prevents unexpected auto-scrolling when a hash is present in the URL.
    const allowAuto = searchParams.get("scroll") === "true"
    if (!allowAuto) return

    const hash = window.location.hash.slice(1)
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        // small delay so layout has settled
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [searchParams])

  return null
}
