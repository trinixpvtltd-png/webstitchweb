"use client"
import Image from "next/image"
import Link from "next/link"
import TemplateCategories from "./template-categories"
import TemplateCarousel from "./template-carousel"

export default function Featured() {
  return (
    <div className="w-full h-full overflow-y-auto">
      {/* Featured Hero Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0">
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

      {/* Template Categories Section */}
      <TemplateCategories />

      {/* Template Carousel */}
      <TemplateCarousel />

      {/* Footer Section */}
      <footer className="w-full bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Services */}
            <div>
              <h3 className="text-gray-400 uppercase text-sm font-semibold tracking-wider mb-6">Services</h3>
              <ul className="space-y-4">
                <li><Link href="/3d-template" className="text-white hover:text-purple-400 transition-colors">3D Websites</Link></li>
                <li><Link href="/2d-template" className="text-white hover:text-purple-400 transition-colors">2D Websites</Link></li>
                <li><Link href="/app-template" className="text-white hover:text-purple-400 transition-colors">Web Apps</Link></li>
                <li><Link href="/chatbot" className="text-white hover:text-purple-400 transition-colors">AI Chatbots</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-gray-400 uppercase text-sm font-semibold tracking-wider mb-6">Company</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-white hover:text-purple-400 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-white hover:text-purple-400 transition-colors">Contact</Link></li>
                <li><Link href="/ai" className="text-white hover:text-purple-400 transition-colors">AI Assistant</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-gray-400 uppercase text-sm font-semibold tracking-wider mb-6">Connect</h3>
              <ul className="space-y-4">
                <li><a href="mailto:contact@webstitch.com" className="text-white hover:text-purple-400 transition-colors">contact@webstitch.com</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">LinkedIn</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800 text-right">
            <p className="text-gray-500 text-sm">© 2025 WebStitch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
