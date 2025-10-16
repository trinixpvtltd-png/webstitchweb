

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Transform Your Business with AI Solutions
        </motion.h1>
        <motion.p
          className="text-lg md:text-body-lg text-white/90 max-w-3xl mx-auto mb-8"
          data-testid="text-hero-subtitle"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
        >
          Intelligent automation and AI-powered solutions that deliver 85% cost reduction and 340% ROI
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            whileHover={{ scale: 1.08, boxShadow: '0 0 24px #7c3aed' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button size="lg" className="group shadow-xl shadow-purple-800/30" data-testid="button-hero-primary">
              Get Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.08, boxShadow: '0 0 24px #60a5fa' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 shadow-xl shadow-blue-400/20"
              data-testid="button-hero-secondary"
            >
              View Success Stories
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-wrap gap-8 justify-center mt-16 text-white/80"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18 }
            }
          }}
        >
          {[
            { value: '50+', label: 'Clients', testid: 'stat-clients' },
            { value: '4.9/5', label: 'Rating', testid: 'stat-rating' },
            { value: '99.7%', label: 'AI Accuracy', testid: 'stat-accuracy' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white/10 backdrop-blur-md rounded-xl px-8 py-4 border border-white/20 shadow-lg shadow-blue-400/10"
              data-testid={stat.testid}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.2, duration: 0.7, ease: 'easeOut' }}
            >
              <div className="text-2xl font-semibold text-blue-200 drop-shadow-md">{stat.value}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
