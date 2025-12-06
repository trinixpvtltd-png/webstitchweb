"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Services */}
            <div>
              <h3 className="text-neutral-400 uppercase text-sm font-semibold tracking-wider mb-6">Services</h3>
              <ul className="space-y-4">
                <li><Link href="/3d-template" className="text-neutral-400 hover:text-white transition-colors">3D Websites</Link></li>
                <li><Link href="/2d-template" className="text-neutral-400 hover:text-white transition-colors">2D Websites</Link></li>
                <li><Link href="/app-template" className="text-neutral-400 hover:text-white transition-colors">Web Apps</Link></li>
                <li><Link href="/chatbot" className="text-neutral-400 hover:text-white transition-colors">AI Chatbots</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-neutral-400 uppercase text-sm font-semibold tracking-wider mb-6">Company</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/ai" className="text-neutral-400 hover:text-white transition-colors">AI Assistant</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-neutral-400 uppercase text-sm font-semibold tracking-wider mb-6">Connect</h3>
              <ul className="space-y-4">
                <li><a href="mailto:contact@webstitch.com" className="text-neutral-400 hover:text-white transition-colors">contact@webstitch.com</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
        <div className="pt-8 border-t border-neutral-800 text-right">
          <p className="text-neutral-500 text-sm">© 2025 WebStitch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
