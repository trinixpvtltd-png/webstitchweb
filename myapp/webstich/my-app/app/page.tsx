"use client"

import Hero from "@/components/hero"
import Featured from "@/components/featured"
import Promo from "@/components/promo"
import Footer from "@/components/footer"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const totalSections = 4

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth
      containerRef.current.scrollTo({
        left: index * width,
        behavior: "smooth",
      })
      setActiveIndex(index)
    }
  }

  const handlePrev = () => {
    const newIndex = activeIndex === 0 ? totalSections - 1 : activeIndex - 1
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = activeIndex === totalSections - 1 ? 0 : activeIndex + 1
    scrollToIndex(newIndex)
  }

  // Handle window resize to keep alignment
  useEffect(() => {
    const handleResize = () => {
        scrollToIndex(activeIndex)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [activeIndex])

  return (
    <main className="relative h-screen w-full overflow-hidden bg-background">
      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className="flex flex-row h-full w-full overflow-hidden"
      >
        {/* Section 1: Hero */}
        <section className="min-w-full h-full relative pt-16">
          <Hero />
        </section>

        {/* Section 2: Featured */}
        <section className="min-w-full h-full relative pt-16 bg-background">
          <Featured />
        </section>

        {/* Section 3: Promo */}
        <section className="min-w-full h-full relative pt-16">
          <Promo />
        </section>

        {/* Section 4: Footer */}
        <section className="min-w-full h-full relative pt-16 bg-gradient-to-b from-background to-black">
          <Footer />
        </section>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-4 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition-all border border-white/10 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
      </button>

      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-4 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition-all border border-white/10 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {[...Array(totalSections)].map((_, i) => (
            <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                    i === activeIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
            />
        ))}
      </div>
    </main>
  )
}
