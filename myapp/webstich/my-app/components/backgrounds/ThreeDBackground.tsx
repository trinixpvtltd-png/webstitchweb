"use client"

import { motion } from "framer-motion"

export default function ThreeDBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#020617] to-black" />
      
      {/* Nebula Clouds */}
      <motion.div 
        className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -60, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Twinkling Stars */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random(),
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
          }}
        />
      ))}
    </div>
  )
}
