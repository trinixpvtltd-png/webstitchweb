"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, BookOpen, Lightbulb, Search, Video, UserCheck, Share2 } from "lucide-react"

interface AIFeature {
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

const features: AIFeature[] = [
  {
    title: "AI Logo Generator",
    description: "Generate unique, professional logos in seconds",
    icon: <Sparkles className="w-8 h-8" />,
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    title: "AI Content Writer",
    description: "Create engaging content for any platform",
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-zinc-500/20 to-zinc-600/20",
  },
  {
    title: "AI Bot Builder",
    description: "Build intelligent chatbots without coding",
    icon: <Zap className="w-8 h-8" />,
    color: "from-green-500/20 to-green-600/20",
  },
  {
    title: "AI Marketing Creator",
    description: "Design marketing campaigns automatically",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "from-orange-500/20 to-orange-600/20",
  },
  {
    title: "AI SEO Analyzer",
    description: "Optimize your content for search engines",
    icon: <Search className="w-8 h-8" />,
    color: "from-red-500/20 to-red-600/20",
  },
  {
    title: "PPT → AI Video Generator",
    description: "Convert presentations into videos instantly",
    icon: <Video className="w-8 h-8" />,
    color: "from-indigo-500/20 to-indigo-600/20",
  },
  {
    title: "AI Portfolio Wizard",
    description: "Build stunning portfolios with AI assistance",
    icon: <UserCheck className="w-8 h-8" />,
    color: "from-neutral-500/20 to-neutral-600/20",
  },
  {
    title: "AI Social Media Post Generator",
    description: "Generate viral social media content",
    icon: <Share2 className="w-8 h-8" />,
    color: "from-cyan-500/20 to-cyan-600/20",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function AIPage() {
  return (
    <main className="w-full min-h-screen bg-background overflow-hidden pt-16">
      {/* Hero Section */}
      <section className="w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
        <motion.div
          className="text-center max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-12 h-12 text-primary" />
          </motion.div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 via-white to-zinc-200">
            AI Powered Tools
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Unlock the power of artificial intelligence with our comprehensive suite of AI-powered tools designed to transform your business
          </p>
          <motion.button
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* Features Grid Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Explore Our AI Suite</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our powerful AI tools to accelerate your workflow and boost productivity
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
               
                className={`group p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer bg-gradient-to-br ${feature.color} backdrop-blur-sm hover:shadow-lg`}
                whileHover={{ y: -8 }}
              >
                <div className="mb-4 p-3 rounded-lg bg-background/50 w-fit group-hover:bg-primary/10 transition-colors">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  {feature.description}
                </p>
                <motion.div
                  className="mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  Try Now →
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Showcase Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Our AI Tools?</h2>
            <p className="text-lg text-muted-foreground">
              Experience the next generation of AI-powered automation
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              { title: "Auto-fill Business Details", desc: "Automatically populate your business information" },
              { title: "Auto-generate Content", desc: "Let AI create content tailored to your needs" },
              { title: "Step-by-step Guidance", desc: "Get guided through each feature with ease" },
              { title: "Real-time Suggestions", desc: "Receive intelligent suggestions as you work" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg border border-border/30 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ x: 8 }}
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background/50 to-neutral-950">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">Ready to Transform?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users leveraging AI to supercharge their workflow
          </p>
          <motion.button
            className="px-8 py-4 rounded-lg bg-white text-black font-semibold hover:shadow-lg hover:shadow-white/20 transition-all text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </section>
    </main>
  )
}
