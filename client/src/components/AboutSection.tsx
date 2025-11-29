import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-24 px-6 lg:py-28 lg:px-12 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.28),_rgba(10,12,26,0.85))]" />
      <div className="absolute -left-10 top-10 w-56 h-56 rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="absolute right-6 bottom-6 w-64 h-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" />

      <div className="relative max-w-5xl mx-auto space-y-14 text-center">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
            About WebStitch
          </h2>
          <p className="text-lg md:text-xl text-white/80">powered by Trinix Pvt Ltd</p>
          <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-4xl mx-auto">
            We're a passionate team of innovators, designers, and developers dedicated to transforming
            businesses through cutting-edge digital solutions. Based in Greater Noida, we serve clients
            globally.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 text-left md:text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              To empower businesses with innovative digital solutions that drive growth, enhance user
              experiences, and create lasting competitive advantages in the digital landscape.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              To be the leading technology partner for businesses seeking to transform their digital presence
              and achieve success through innovation and excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
