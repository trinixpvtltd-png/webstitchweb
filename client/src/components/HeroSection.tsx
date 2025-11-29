import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-blue-900/30 to-transparent" />
        <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-blue-500 via-purple-600 to-fuchsia-500 animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center pt-24 pb-32">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-hero font-bold text-white mb-6 drop-shadow-xl"
          data-testid="text-hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Powering Digital Orbits That Never Stop
        </motion.h1>
        <motion.p
          className="text-lg md:text-body-lg text-white/90 max-w-3xl mx-auto mb-8"
          data-testid="text-hero-subtitle"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          Intelligent automation and AI-powered solutions that deliver 85% cost
          reduction and 340% ROI
        </motion.p>
      </div>
    </section>
  );
}
