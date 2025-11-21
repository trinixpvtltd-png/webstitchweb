//ANIMATION
"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { label: "Happy Clients", value: "50+" },
    { label: "Projects Completed", value: "150+" },
    { label: "Success Rate", value: "98%" },
    { label: "Countries Served", value: "12+" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <motion.div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
