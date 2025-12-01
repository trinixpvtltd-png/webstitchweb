import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Universe3D from "@/components/Universe3D";
import { motion } from "framer-motion";
import { Users, MessageCircle, Sparkles } from "lucide-react";

export default function Community() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black pt-24 ">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Universe3D />
      </div>

      <div className="relative z-10">
        <Navigation />
        <main className="min-h-screen flex items-center justify-center px-4 pb-12">
          <div className="text-center max-w-4xl mx-auto">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg shadow-purple-500/30">
                <Users className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Community
            </motion.h1>

            {/* Coming Soon Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 mb-8"
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Coming Soon
              </span>
              <Sparkles className="w-5 h-5 text-pink-400" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
            >
              We're building something amazing! Join our community to connect with developers, 
              designers, and creators from around the world. Stay tuned for updates.
            </motion.p>

            {/* Features Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <MessageCircle className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
                <h3 className="text-white font-semibold mb-2">Discussions</h3>
                <p className="text-gray-500 text-sm">Share ideas and get feedback</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Users className="w-8 h-8 text-pink-400 mb-4 mx-auto" />
                <h3 className="text-white font-semibold mb-2">Networking</h3>
                <p className="text-gray-500 text-sm">Connect with like-minded people</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-white font-semibold mb-2">Exclusive Content</h3>
                <p className="text-gray-500 text-sm">Access members-only resources</p>
              </div>
            </motion.div>
          </div>
        </main >
        <Footer />
      </div>
    </div>
  );
}
