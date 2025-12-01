import Navigation from "@/components/Navigation";
// import StarVideoBackground from "@/components/StarVideoBackground";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Scene3D from "@/components/Scene3D";
export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    setSent(false);
    try {
      await emailjs.sendForm(
        "service_f4erbvf",
        "template_bt5wjav",
        formRef.current!,
        "UTtwWjkOSFubxuIs4"
      );
      setSent(true);
      if (formRef.current) formRef.current.reset();
    } catch (err: any) {
      setError("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen relative text-[#e3e8f0] overflow-x-hidden">
      {/* <StarVideoBackground /> */}
      <Scene3D />
      <Navigation />
      <main className="pt-24 pb-16 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center min-h-[30vh] px-4 mb-12 text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] bg-clip-text text-transparent drop-shadow-2xl">
            Where Innovation Moves at the Speed of Light
          </h1>
          <p className="mt-2 text-lg text-[#a5b4fc]">
            WebStitch - powered by Trinix Pvt Ltd
          </p>
          <p className="mt-4 text-xl md:text-2xl text-[#e3e8f0] max-w-2xl mx-auto">
            Get a free consultation and discover how our AI-powered solutions
            can revolutionize your operations and drive unprecedented growth.
          </p>
        </section>

        {/* Main Contact Form & Side Info */}
        <section className="w-full max-w-6xl mx-auto mb-16 px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:items-start">
          {/* Form */}
          <div className="lg:col-span-2 bg-white/10 p-8 border border-white/10 rounded-2xl lg:-mt-6">
            <h2 className="text-xl font-bold mb-4 text-white dark:text-white">
              Start Your Project
            </h2>
            <p className="text-blue-900 mb-6 dark:text-[#a5b4fc]">
              Tell us about your vision and we'll make it reality
            </p>
            <form
              ref={formRef}
              onSubmit={handleSend}
              className="grid grid-cols-1 gap-4"
            >
              <div>
                <label className="block text-sm mb-1">Full Name *</label>
                <input
                  name="user_name"
                  className="w-full rounded-lg bg-[#ede9fe] text-[#1a237e] px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] dark:bg-[#353a50] dark:text-white"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email Address *</label>
                <input
                  name="user_email"
                  type="email"
                  className="w-full rounded-lg bg-[#ede9fe] text-[#1a237e] px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] dark:bg-[#353a50] dark:text-white"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Company</label>
                <input
                  name="company"
                  className="w-full rounded-lg bg-[#ede9fe] text-[#1a237e] px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] dark:bg-[#353a50] dark:text-white"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Your Message *</label>
                <textarea
                  name="message"
                  className="w-full rounded-lg bg-[#ede9fe] text-[#1a237e] px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] dark:bg-[#353a50] dark:text-white"
                  rows={4}
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  required
                />
              </div>
              <div className="mt-2">
                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white font-bold py-3 text-lg shadow-lg hover:from-[#7c3aed]/80 hover:to-[#6366f1]/80 transition dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1]"
                >
                  <span className="flex items-center gap-2 justify-center">
                    {sending
                      ? "Sending..."
                      : sent
                      ? "Message Sent!"
                      : "Send Message & Get Free Quote"}
                  </span>
                </Button>
                {error && (
                  <div className="text-red-400 text-center mt-2">{error}</div>
                )}
                {sent && !error && (
                  <div className="text-green-400 text-center mt-2">
                    Thank you! Your message has been sent.
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Info Cards (stacked vertically) */}
          <div className="space-y-4 lg:mt-0">
            <div className="bg-white/10 border border-white/10 rounded-2xl p-5 text-left shadow-lg">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <Mail className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">Email</div>
                  <div className="text-blue-200">webstitchh@gmail.com</div>
                  <div className="text-xs text-blue-300 mt-1">
                    We reply within 24 hours
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-2xl p-5 text-left shadow-lg">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <MessageCircle className="w-6 h-6 text-orange-300" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">Live Chat</div>
                  <div className="text-green-300">Available Now</div>
                  <div className="text-xs text-blue-300 mt-1">Instant support</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-2xl p-5 text-left shadow-lg">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <MapPin className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">Location</div>
                  <div className="text-blue-200">Greater Noida, India</div>
                  <div className="text-xs text-blue-300 mt-1">Serving clients globally</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
