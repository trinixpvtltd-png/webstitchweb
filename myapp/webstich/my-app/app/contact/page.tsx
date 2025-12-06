"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "hello@example.com",
      desc: "Response within 24 hours",
      color: "from-blue-500/20 to-blue-600/20",
      textColor: "text-blue-400",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      desc: "Mon-Fri 9AM-6PM EST",
      color: "from-zinc-500/20 to-zinc-600/20",
      textColor: "text-zinc-300",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      info: "San Francisco, CA",
      desc: "Visit us anytime",
      color: "from-neutral-500/20 to-neutral-600/20",
      textColor: "text-neutral-300",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Chat",
      info: "Live Support",
      desc: "Click the chat button below",
      color: "from-green-500/20 to-green-600/20",
      textColor: "text-green-400",
    },
  ]

  return (
    <main className="w-full min-h-screen overflow-hidden pt-16 relative">
      {/* Background 3D Spline */}
      <div className="fixed inset-0 -z-10">
        <iframe 
          src='https://my.spline.design/retrofuturismbganimation-9nBKbDDjWEmaifUKUFITZbO3/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
        />
      </div>
      {/* CTA Section */}
      <section className="w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-600/10 to-transparent" />
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold mb-6">Don't Be a Stranger</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'd love to hear what you're working on. Let's connect and create something incredible together.
          </p>
          <motion.button
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            Contact Us Now
          </motion.button>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div id="contact-form" className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">Why Reach Out?</h2>

            <div className="space-y-6">
              {[
                {
                  icon: <Clock className="w-5 h-5" />,
                  title: "Fast Response",
                  desc: "Get answers quickly from our team",
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5" />,
                  title: "Expert Support",
                  desc: "Dedicated support professionals",
                },
                {
                  icon: <MessageSquare className="w-5 h-5" />,
                  title: "Always Available",
                  desc: "Contact us anytime, anywhere",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-cyan-400 flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm">
                <strong>Fun fact:</strong> The fastest response times are typically received during business hours. We'll get back to you as soon as possible!
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-cyan-500/20 bg-background/50 focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-cyan-500/20 bg-background/50 focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-cyan-500/20 bg-background/50 focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="What's this about?"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-cyan-500/20 bg-background/50 focus:border-cyan-500 focus:outline-none transition-colors resize-none h-32"
                placeholder="Tell us more..."
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </section>

     
    </main>
  )
}
