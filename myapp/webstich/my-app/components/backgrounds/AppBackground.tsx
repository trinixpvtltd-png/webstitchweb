"use client"

import { useEffect, useRef } from "react"

export default function AppBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const stars: { x: number; y: number; z: number }[] = []
    const numStars = 400
    const speed = 2

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
      })
    }

    const animate = () => {
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, width, height)

      ctx.fillStyle = "white"
      stars.forEach((star) => {
        star.z -= speed
        if (star.z <= 0) {
          star.z = width
          star.x = Math.random() * width - width / 2
          star.y = Math.random() * height - height / 2
        }

        const x = (star.x / star.z) * width + width / 2
        const y = (star.y / star.z) * height + height / 2
        const radius = (1 - star.z / width) * 2

        if (x >= 0 && x <= width && y >= 0 && y <= height) {
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
