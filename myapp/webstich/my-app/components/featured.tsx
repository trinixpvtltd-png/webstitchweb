"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "A full-featured online store with real-time inventory and seamless checkout.",
    link: "/3d-template"
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description: "Analytics dashboard with interactive charts and real-time data visualization.",
    link: "/3d-template"
  },
  {
    title: "Corporate Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    description: "Modern corporate site with CMS integration and multi-language support.",
    link: "/3d-template"
  },
  {
    title: "Mobile App Landing",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    description: "High-converting landing page for a mobile application launch.",
    link: "/3d-template"
  },
  {
    title: "Restaurant Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    description: "Beautiful restaurant website with online reservations and menu display.",
    link: "/3d-template"
  },
  {
    title: "Portfolio Site",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1545665277-5937489579f2?w=800&h=600&fit=crop",
    description: "Creative portfolio showcasing artwork with smooth animations.",
    link: "/3d-template"
  }
]

export default function Featured() {
  return (
    <section className="w-full py-24 px-6 relative overflow-hidden">
      {/* Spline 3D Background Effect */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/hypnotism-6qVe76Nx3eKfkO4xejzh9XRu/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="absolute inset-0 scale-150 opacity-50"
          style={{ pointerEvents: 'none' }}
        />
        {/* Overlay to darken and blend */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-zinc-400 uppercase tracking-widest text-sm font-semibold">Our Work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Featured <span className="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Explore our latest work and see how we&apos;ve helped businesses transform their digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-zinc-400 text-sm font-medium">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2 group-hover:text-zinc-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-zinc-300"
                >
                  View Project <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/3d-template">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20">
              View All Projects
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
