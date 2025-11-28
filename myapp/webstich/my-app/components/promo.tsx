"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export default function Promo() {
  const container = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"])

  return (
    <div className="w-full h-full">
      {/* Promo Hero Section */}
      <div
        ref={container}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="absolute top-0 left-0 h-full w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <Image src="https://images.unsplash.com/photo-1493946947703-a0e68b050bee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBkYXJrfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900" fill alt="Abstract spiral circles" style={{ objectFit: "cover" }} />
          </motion.div>
        </div>

        <h3 className="absolute top-48 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg font-bold">
          Your Vision, Our Code.
        </h3>

        <p className="absolute bottom-32 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10">
          We transform your ideas into powerful digital experiences. From concept to launch, WebStitch delivers websites that captivate, convert, and scale with your business.
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-6 flex flex-col items-start animate-bounce z-10">
          <span className="text-white text-sm opacity-70 mb-2">Scroll down</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6 opacity-70">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}
