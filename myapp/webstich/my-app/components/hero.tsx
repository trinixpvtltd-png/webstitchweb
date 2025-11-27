"use client"
import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import TemplateCategories from "./template-categories"
import TemplateCarousel from "./template-carousel"

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])

  return (
    <div className="w-full h-full overflow-y-auto">
      {/* Hero Section */}
      <div className="w-full min-h-screen relative">
        <motion.div ref={container} style={{ y }} className="relative w-full h-screen">
          <Image
            src="https://images.unsplash.com/photo-1685558593626-686907d7ee4b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGNvbXB1dGVyJTIwZGFyayUyMGNvZGUlMjBzY3JlZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900"
            fill
            alt="Mountain landscape background"
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 flex items-center justify-start z-10 pt-20">
            <div className="text-left text-white max-w-3xl px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Crafting Stunning Websites That Drive Results.</h1>
              <p className="text-base md:text-lg leading-relaxed mb-2 opacity-95">
                We&apos;re <span className="font-bold text-purple-400">WebStitch</span> — a web development agency that builds fast, scalable, and visually stunning websites for businesses of all sizes.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-8 opacity-85">
                Transform your online presence with modern designs and cutting-edge technology.
              </p>

              {/* Social Proof Row */}
              <div className="flex flex-wrap gap-6 mb-8 text-sm md:text-base">
                <div>
                  <div className="font-bold">50+</div>
                  <div className="text-sm opacity-90">websites built</div>
                </div>
                <div>
                  <div className="font-bold">100+</div>
                  <div className="text-sm opacity-90">happy clients</div>
                </div>
                <div>
                  <div className="font-bold">24/7</div>
                  <div className="text-sm opacity-90">support</div>
                </div>
                <div>
                  <div className="font-bold">99%</div>
                  <div className="text-sm opacity-90">satisfaction</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-4">
                <Link href="/3d-template">
                  <button className="px-6 py-2 bg-white text-black font-medium text-sm transition-all duration-300 hover:bg-opacity-90 cursor-pointer">
                    View Our Projects
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-6 py-2 border-2 border-white bg-transparent text-white font-medium text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
                    Get in Touch
                  </button>
                </Link>
              </div>

              {/* Scroll Indicator */}
              <div className="mt-12 flex flex-col items-start animate-bounce">
                <span className="text-sm opacity-70 mb-2">Scroll down</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 opacity-70">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Template Categories Section - Appears on scroll */}
      <TemplateCategories />

      {/* Template Carousel - 3D Motion Effect */}
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
