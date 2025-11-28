"use client"
import Image from "next/image"
import Link from "next/link"

export default function Featured() {
  return (
    <div className="w-full h-full">
      {/* Featured Hero Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 pt-40 pb-12 lg:py-0">
        {/* Image Section - Right side on desktop */}
        <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
          <Image
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
            alt="Developer working on code"
            width={600}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section - Left side on desktop */}
        <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
          <h3 className="uppercase text-xs md:text-sm text-gray-400 mb-6 tracking-widest">What We Do</h3>
          
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            We build complete web solutions.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed">
            From stunning landing pages to full-stack web applications — with a focus on performance, user experience, and modern design. Custom websites, e-commerce, SaaS platforms, and more.
          </p>

          <Link href="/3d-template">
            <button className="bg-white text-black border border-white px-6 py-3 text-sm font-semibold transition-all duration-300 hover:bg-transparent hover:text-white cursor-pointer uppercase tracking-wide">
              View Our Projects
            </button>
          </Link>

          {/* Scroll Indicator */}
          <div className="mt-12 flex flex-col items-start animate-bounce">
            <span className="text-sm opacity-70 mb-2">Scroll down</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 opacity-70">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
