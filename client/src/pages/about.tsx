
import Navigation from '@/components/Navigation';
import StarVideoBackground from '@/components/StarVideoBackground';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, ShieldCheck, Globe2, Heart, Sparkles, Users, BadgeCheck, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

// Remove AnimatedAboutBackground for a new immersive background
export default function About() {
  return (
    <div className="min-h-screen relative  text-[#e3e8f0] overflow-x-hidden">
      <StarVideoBackground />
      <Navigation />
      
      <main className="pt-24 pb-16 flex flex-col items-center">
        {/* Studio-style Hero Section */}
        <section className="w-full flex flex-col items-center justify-center min-h-[60vh] px-4">
          <motion.div
            className="relative max-w-3xl w-full mx-auto rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl px-8 py-16 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] bg-clip-text text-transparent drop-shadow-2xl mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
            >
              About WebStitch
            </motion.h1>
            <motion.p
              className="mt-2 text-lg text-[#a5b4fc]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
            >
              powered by Trinix Pvt Ltd
            </motion.p>
            <motion.p
              className="mt-6 text-xl md:text-2xl text-[#e3e8f0] max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }}
            >
              We're a passionate team of innovators, designers, and developers dedicated to transforming businesses through cutting-edge digital solutions. Based in Greater Noida, we serve clients globally.
            </motion.p>
          </motion.div>
        </section>

        {/* Studio-style vertical timeline for Mission & Why Choose Us */}
        <section className="max-w-3xl w-full mx-auto flex flex-col items-center py-12">
          <div className="relative w-full flex flex-col items-center">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] opacity-30 rounded-full -translate-x-1/2" />
            <motion.div
              className="relative z-10 w-full max-w-xl mx-auto mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#a78bfa] to-[#7c3aed] text-white shadow-lg">
                  <Sparkles className="w-6 h-6" />
                </span>
                <span className="text-lg font-semibold tracking-wide text-[#a5b4fc]">Our Mission</span>
              </div>
              <div className="bg-white/10 dark:bg-[#23263a]/80 rounded-2xl p-6 shadow-xl border border-white/10 backdrop-blur-xl">
                <div className="text-lg text-[#e3e8f0]">To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting competitive advantages in the digital landscape.</div>
              </div>
            </motion.div>
            <motion.div
              className="relative z-10 w-full max-w-xl mx-auto mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#6366f1] to-[#a5b4fc] text-white shadow-lg">
                  <Heart className="w-6 h-6" />
                </span>
                <span className="text-lg font-semibold tracking-wide text-[#a5b4fc]">Why Choose Us?</span>
              </div>
              <div className="bg-white/10 dark:bg-[#23263a]/80 rounded-2xl p-6 shadow-xl border border-white/10 backdrop-blur-xl">
                <ul className="space-y-4 text-[#e3e8f0]">
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 mt-0.5 text-[#a5b4fc] animate-pulse" />
                    <div>
                      <p className="font-medium">Lightning-Fast Delivery</p>
                      <p className="text-[#a5b4fc]">We deliver projects 40% faster than industry average without compromising quality.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <BadgeCheck className="w-5 h-5 mt-0.5 text-[#a5b4fc] animate-spin-slow" />
                    <div>
                      <p className="font-medium">100% Satisfaction Guarantee</p>
                      <p className="text-[#a5b4fc]">We're not satisfied until you're thrilled with the results.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe2 className="w-5 h-5 mt-0.5 text-[#a5b4fc]" />
                    <div>
                      <p className="font-medium">Global Standards, Local Touch</p>
                      <p className="text-[#a5b4fc]">International quality with personalized service and cultural understanding.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision */}
  <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-6 grid grid-cols-1">
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
    <Card className="bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary dark:text-[#a78bfa]" />
                <CardTitle className="dark:text-white">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-foreground/80 dark:text-[#a5b4fc]">
              To be the leading technology partner for businesses seeking to transform their digital presence and achieve unprecedented success through innovation and excellence.
            </CardContent>
          </Card>
  </motion.div>
        </section>

        {/* Achievements */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a237e] mb-2 drop-shadow-lg dark:text-white">Our Achievements</h2>
            <p className="text-[#5c6bc0] mt-2 dark:text-[#a5b4fc]">Numbers that reflect our commitment to excellence and client success</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
            <Card className="text-center bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-[#1a237e] dark:text-white">50+</CardTitle>
                <CardDescription className="mt-1 text-[#3f51b5] dark:text-[#a5b4fc]">Happy Clients</CardDescription>
              </CardHeader>
              <CardContent className="text-[#5c6bc0] dark:text-[#a5b4fc]">Across various industries</CardContent>
            </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
            <Card className="text-center bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-[#1a237e] dark:text-white">150+</CardTitle>
                <CardDescription className="mt-1 text-[#3f51b5] dark:text-[#a5b4fc]">Projects Completed</CardDescription>
              </CardHeader>
              <CardContent className="text-[#5c6bc0] dark:text-[#a5b4fc]">Successfully delivered</CardContent>
            </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
            <Card className="text-center bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-[#1a237e] dark:text-white">98%</CardTitle>
                <CardDescription className="mt-1 text-[#3f51b5] dark:text-[#a5b4fc]">Success Rate</CardDescription>
              </CardHeader>
              <CardContent className="text-[#5c6bc0] dark:text-[#a5b4fc]">Client satisfaction</CardContent>
            </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
            <Card className="text-center bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-[#1a237e] dark:text-white">12+</CardTitle>
                <CardDescription className="mt-1 text-[#3f51b5] dark:text-[#a5b4fc]">Countries Served</CardDescription>
              </CardHeader>
              <CardContent className="text-[#5c6bc0] dark:text-[#a5b4fc]">Global reach</CardContent>
            </Card>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a237e] mb-2 drop-shadow-lg dark:text-white">Our Core Values</h2>
            <p className="text-[#5c6bc0] mt-2 dark:text-[#a5b4fc]">The principles that guide our work and shape our company culture</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
            <Card className="bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
                  <CardTitle className="text-[#1a237e] dark:text-white">Innovation First</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-[#3f51b5] dark:text-[#a5b4fc]">
                We embrace cutting-edge technologies and creative solutions to solve complex challenges.
              </CardContent>
            </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
            <Card className="bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BadgeCheck className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
                  <CardTitle className="text-[#1a237e] dark:text-white">Quality Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-[#3f51b5] dark:text-[#a5b4fc]">
                We maintain the highest standards in every line of code and pixel of design.
              </CardContent>
            </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
            <Card className="bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
                  <CardTitle className="text-[#1a237e] dark:text-white">Collaborative Spirit</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-[#3f51b5] dark:text-[#a5b4fc]">
                Great work happens when talented people work together towards a common goal.
              </CardContent>
            </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
            <Card className="bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Handshake className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
                  <CardTitle className="text-[#1a237e] dark:text-white">Trust & Transparency</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-[#3f51b5] dark:text-[#a5b4fc]">
                We build lasting relationships through honest communication and reliable delivery.
              </CardContent>
            </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
          <div className="rounded-2xl bg-white border border-[#e3e8f0] p-8 md:p-10 text-center shadow-lg dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#1a237e] mb-2 drop-shadow-lg dark:text-white">Ready to Work Together?</h3>
            <p className="text-[#3f51b5] mt-2 dark:text-[#a5b4fc]">Let's discuss how we can help transform your business with innovative digital solutions</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button size="lg" className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white font-bold shadow-lg hover:from-[#7c3aed]/80 hover:to-[#6366f1]/80 transition dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1]">Start Your Project</Button>
              <Button size="lg" variant="outline" className="border-[#7c3aed] text-[#7c3aed] hover:bg-[#ede9fe] dark:border-[#a78bfa] dark:text-[#a78bfa] dark:hover:bg-[#23263a]/80">View Our Work</Button>
            </div>
          </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
