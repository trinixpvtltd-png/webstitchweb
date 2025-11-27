"use client"

import Link from "next/link"
import TemplateCategories from "./template-categories"
import TemplateCarousel from "./template-carousel"

export default function Footer() {
  return (
    <div className="w-full h-full overflow-y-auto">
      {/* Footer Hero Section */}
      <div className="w-full min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-background to-black relative">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col justify-center items-start gap-8">
            {/* Main CTA */}
            <div className="w-full">
              <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight font-bold text-white mb-6">
                Ready to Build Your Dream Website?
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                Let&apos;s collaborate on your next project. Whether you need a complete website, a redesign, or custom web application — WebStitch is here to bring your vision to life.
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full hover:opacity-90 transition-all">
                  Start Your Project
                </button>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-8 flex flex-col items-start animate-bounce">
              <span className="text-sm text-gray-400 mb-2">Scroll down</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
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
