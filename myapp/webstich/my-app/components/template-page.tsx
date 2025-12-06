"use client"

import { motion } from "framer-motion"
import { Star, Download, Eye, Code } from "lucide-react"
import Image from "next/image"

interface TemplatePageProps {
  title: string
  subtitle: string
  description: string
  image: string
  features: string[]
  rating: number
  downloads: number
}

export default function TemplatePage({
  title,
  subtitle,
  description,
  image,
  features,
  rating,
  downloads,
}: TemplatePageProps) {
  return (
    <main className="w-full min-h-screen bg-background overflow-hidden pt-16">
      {/* Hero Section */}
      <section className="w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {subtitle}
            </motion.div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{description}</p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 mb-8 pb-8 border-b border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div>
                <div className="flex items-center gap-2 text-zinc-300 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-zinc-300" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{rating} Rating</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-primary text-lg font-semibold mb-1">
                  <Download className="w-5 h-5" />
                  {downloads}K
                </div>
                <p className="text-sm text-muted-foreground">Downloads</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Get Template
              </motion.button>
              <motion.button
                className="px-8 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-5 h-5" />
                Preview
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative h-96 lg:h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-500/20 to-neutral-500/20 rounded-2xl blur-3xl" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/30 bg-background/50">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Why This Template?</h2>
            <p className="text-lg text-muted-foreground">
              Packed with features and designed for performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Clean Code",
                desc: "Well-organized, production-ready code",
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Responsive Design",
                desc: "Perfect on mobile, tablet, and desktop",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Fully Customizable",
                desc: "Easy to modify and extend",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl border border-border/30 bg-background hover:border-primary/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-4 text-primary">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-black">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download this template and start building something amazing today
          </p>
          <motion.button
            className="px-8 py-4 rounded-lg bg-white text-black font-semibold hover:shadow-lg hover:shadow-white/20 transition-all text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Now
          </motion.button>
        </motion.div>
      </section>
    </main>
  )
}
