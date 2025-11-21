import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Globe2,
  Heart,
  Sparkles,
  Users,
  BadgeCheck,
  Handshake,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
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
        {/* <main className="pt-24 pb-16 flex flex-col items-center"> */}
        {/* Studio-style Hero Section */}
        {/* About WebStitch */}
        <section className="w-full flex flex-col items-center justify-center min-h-[60vh] px-4">
          {/* <About3D /> */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(15, 10, 30, 0.85) 0%, rgba(25, 15, 45, 0.8) 100%)",
              backdropFilter: "blur(16px) contrast(120%) brightness(90%)",
              WebkitBackdropFilter: "blur(16px) contrast(120%) brightness(90%)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              boxShadow: `
      0 8px 32px 0 rgba(0, 0, 0, 0.6),
      0 2px 8px 0 rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.25),
      inset 0 -1px 0 rgba(0, 0, 0, 0.2)
    `,
              borderRadius: "20px",
              padding: "40px 30px",
            }}
          >
            {/* Your card content */}

            <motion.div
              className="relative max-w-3xl w-full mx-auto rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl px-8 py-16 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 60, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] bg-clip-text text-transparent drop-shadow-2xl mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
              >
                About WebStitch
              </motion.h1>
              <motion.p
                className="mt-2 text-lg text-[#a5b4fc]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              >
                powered by Trinix Pvt Ltd
              </motion.p>
              <motion.p
                className="mt-6 text-xl md:text-2xl text-[#e3e8f0] max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
              >
                We're a passionate team of innovators, designers, and developers
                dedicated to transforming businesses through cutting-edge
                digital solutions. Based in Greater Noida, we serve clients
                globally.
              </motion.p>
            </motion.div>
          </div>
        </section>
        {/* Mission & Why Choose Us */}
        <section className="max-w-3xl w-full mx-auto flex flex-col items-center py-12">
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(15, 10, 30, 0.85) 0%, rgba(25, 15, 45, 0.8) 100%)",
              backdropFilter: "blur(16px) contrast(120%) brightness(90%)",
              WebkitBackdropFilter: "blur(16px) contrast(120%) brightness(90%)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              boxShadow: `
      0 8px 32px 0 rgba(0, 0, 0, 0.6),
      0 2px 8px 0 rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.25),
      inset 0 -1px 0 rgba(0, 0, 0, 0.2)
    `,
              borderRadius: "20px",
              padding: "40px 30px",
            }}
          >
            <div className="relative w-full flex flex-col items-center">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] opacity-30 rounded-full -translate-x-1/2" />
              <motion.div
                className="relative z-10 w-full max-w-xl mx-auto mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#a78bfa] to-[#7c3aed] text-white shadow-lg">
                    <Sparkles className="w-6 h-6" />
                  </span>
                  <span className="text-lg font-semibold tracking-wide text-[#a5b4fc]">
                    Our Mission
                  </span>
                </div>
                <div className="bg-white/10 dark:bg-[#23263a]/80 rounded-2xl p-6 shadow-xl border border-white/10 backdrop-blur-xl">
                  <div className="text-lg text-[#e3e8f0]">
                    To empower businesses with innovative digital solutions that
                    drive growth, enhance user experiences, and create lasting
                    competitive advantages in the digital landscape.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Vision */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-6 grid grid-cols-1">
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(15, 10, 30, 0.85) 0%, rgba(25, 15, 45, 0.8) 100%)",
              backdropFilter: "blur(16px) contrast(120%) brightness(90%)",
              WebkitBackdropFilter: "blur(16px) contrast(120%) brightness(90%)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              boxShadow: `
      0 8px 32px 0 rgba(0, 0, 0, 0.6),
      0 2px 8px 0 rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.25),
      inset 0 -1px 0 rgba(0, 0, 0, 0.2)
    `,
              borderRadius: "20px",
              padding: "40px 30px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary dark:text-[#a78bfa]" />
                    <CardTitle className="dark:text-white">
                      Our Vision
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-foreground/80 dark:text-[#a5b4fc]">
                  To be the leading technology partner for businesses seeking to
                  transform their digital presence and achieve unprecedented
                  success through innovation and excellence.
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
        {/* Achievements */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 mb-5">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a237e] mb-2 drop-shadow-lg dark:text-white">
              Our Achievements
            </h2>
            <p className="text-[#5c6bc0] mt-2 dark:text-[#a5b4fc]">
              Numbers that reflect our commitment to excellence and client
              success
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(15, 10, 30, 0.85) 0%, rgba(25, 15, 45, 0.8) 100%)",
                    backdropFilter: "blur(16px) contrast(120%) brightness(90%)",
                    WebkitBackdropFilter:
                      "blur(16px) contrast(120%) brightness(90%)",
                    border: "2px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: `
      0 8px 32px 0 rgba(0, 0, 0, 0.6),
      0 2px 8px 0 rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.25),
      inset 0 -1px 0 rgba(0, 0, 0, 0.2)
    `,
                    borderRadius: "20px",
                    padding: "40px 30px",
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-3xl text-[#1a237e] dark:text-white">
                      50+
                    </CardTitle>
                    <CardDescription className="mt-1 text-[#3f51b5] dark:text-[#a5b4fc]">
                      Happy Clients
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-[#5c6bc0] dark:text-[#a5b4fc]">
                    Across various industries
                  </CardContent>
                </div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(15, 10, 30, 0.85) 0%, rgba(25, 15, 45, 0.8) 100%)",
                    backdropFilter: "blur(16px) contrast(120%) brightness(90%)",
                    WebkitBackdropFilter:
                      "blur(16px) contrast(120%) brightness(90%)",
                    border: "2px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: `
      0 8px 32px 0 rgba(0, 0, 0, 0.6),
      0 2px 8px 0 rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.25),
      inset 0 -1px 0 rgba(0, 0, 0, 0.2)
    `,
                    borderRadius: "20px",
                    padding: "40px 30px",
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-3xl text-[#1a237e] dark:text-white">
                      150+
                    </CardTitle>
                    <CardDescription className="mt-1 text-[#3f51b5] dark:text-[#a5b4fc]">
                      Projects Completed
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-[#5c6bc0] dark:text-[#a5b4fc]">
                    Successfully delivered
                  </CardContent>
                </div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(15, 10, 30, 0.85) 0%, rgba(25, 15, 45, 0.8) 100%)",
                    backdropFilter: "blur(16px) contrast(120%) brightness(90%)",
                    WebkitBackdropFilter:
                      "blur(16px) contrast(120%) brightness(90%)",
                    border: "2px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: `
      0 8px 32px 0 rgba(0, 0, 0, 0.6),
      0 2px 8px 0 rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.25),
      inset 0 -1px 0 rgba(0, 0, 0, 0.2)
    `,
                    borderRadius: "20px",
                    padding: "40px 30px",
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-3xl text-[#1a237e] dark:text-white">
                      98%
                    </CardTitle>
                    <CardDescription className="mt-1 text-[#3f51b5] dark:text-[#a5b4fc]">
                      Success Rate
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-[#5c6bc0] dark:text-[#a5b4fc]">
                    Client satisfaction
                  </CardContent>
                </div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(15, 10, 30, 0.85) 0%, rgba(25, 15, 45, 0.8) 100%)",
                    backdropFilter: "blur(16px) contrast(120%) brightness(90%)",
                    WebkitBackdropFilter:
                      "blur(16px) contrast(120%) brightness(90%)",
                    border: "2px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: `
      0 8px 32px 0 rgba(0, 0, 0, 0.6),
      0 2px 8px 0 rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.25),
      inset 0 -1px 0 rgba(0, 0, 0, 0.2)
    `,
                    borderRadius: "20px",
                    padding: "40px 30px",
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-3xl text-[#1a237e] dark:text-white">
                      12+
                    </CardTitle>
                    <CardDescription className="mt-1 text-[#3f51b5] dark:text-[#a5b4fc]">
                      Countries Served
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-[#5c6bc0] dark:text-[#a5b4fc]">
                    Global reach
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.08, boxShadow: "0 0 24px #7c3aed" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              size="lg"
              className="group shadow-xl shadow-purple-800/30"
              data-testid="button-hero-primary"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.08, boxShadow: "0 0 24px #60a5fa" }}
            transition={{ type: "spring", stiffness: 300 }}
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
              transition: { staggerChildren: 0.18 },
            },
          }}
        >
          {[
            { value: "50+", label: "Clients", testid: "stat-clients" },
            { value: "4.9/5", label: "Rating", testid: "stat-rating" },
            { value: "99.7%", label: "AI Accuracy", testid: "stat-accuracy" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white/10 backdrop-blur-md rounded-xl px-8 py-4 border border-white/20 shadow-lg shadow-blue-400/10"
              data-testid={stat.testid}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1 + i * 0.2,
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <div className="text-2xl font-semibold text-blue-200 drop-shadow-md">
                {stat.value}
              </div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
