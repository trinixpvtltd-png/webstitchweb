"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface Template {
  id: number
  title: string
  image: string
  href: string
}

const templates1: Template[] = [
  { id: 1, title: "3D Portfolio", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80", href: "/3d-template" },
  { id: 2, title: "Modern Dashboard", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80", href: "/app-template" },
  { id: 3, title: "Creative Agency", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&q=80", href: "/2d-template" },
  { id: 4, title: "E-commerce Pro", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80", href: "/app-template" },
  { id: 5, title: "3D Product Showcase", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80", href: "/3d-template" },
  { id: 6, title: "Blog Template", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80", href: "/2d-template" },
  { id: 7, title: "SaaS Landing", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80", href: "/app-template" },
  { id: 8, title: "3D Interactive", image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400&q=80", href: "/3d-template" },
]

const templates2: Template[] = [
  { id: 9, title: "Minimal Portfolio", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", href: "/2d-template" },
  { id: 10, title: "Tech Startup", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80", href: "/app-template" },
  { id: 11, title: "3D Animation", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&q=80", href: "/3d-template" },
  { id: 12, title: "Photography", image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&q=80", href: "/2d-template" },
  { id: 13, title: "Restaurant Site", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80", href: "/2d-template" },
  { id: 14, title: "Fitness App", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80", href: "/app-template" },
  { id: 15, title: "3D Gaming", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80", href: "/3d-template" },
  { id: 16, title: "Corporate Site", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80", href: "/2d-template" },
]

function TemplateCard({ template }: { template: Template }) {
  return (
    <Link href={template.href} className="flex-shrink-0 group">
      <div 
        className="relative w-64 h-40 rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105"
        style={{
          transform: "perspective(1000px) rotateY(-5deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src={template.image}
          alt={template.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white text-sm font-semibold truncate">{template.title}</p>
        </div>
      </div>
    </Link>
  )
}

export default function TemplateCarousel() {
  // Double the templates for seamless infinite scroll
  const doubledTemplates1 = [...templates1, ...templates1]
  const doubledTemplates2 = [...templates2, ...templates2]

  return (
    <div className="w-full py-12 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Explore Our Templates</h2>
        <p className="text-gray-400">Discover stunning designs for every project</p>
      </div>

      {/* First Row - Left to Right */}
      <div className="relative mb-8">
        <div className="flex">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -50 * 16 * templates1.length / templates1.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {doubledTemplates1.map((template, index) => (
              <TemplateCard key={`row1-${template.id}-${index}`} template={template} />
            ))}
          </motion.div>
        </div>
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative">
        <div className="flex justify-end">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [-50 * 16 * templates2.length / templates2.length, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {doubledTemplates2.map((template, index) => (
              <TemplateCard key={`row2-${template.id}-${index}`} template={template} />
            ))}
          </motion.div>
        </div>
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>

      {/* See All Templates Link */}
      <div className="text-center mt-10">
        <Link 
          href="/3d-template" 
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-lg transition-colors"
        >
          See all templates
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
