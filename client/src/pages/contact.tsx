import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, MessageCircle, Star, Users, CheckCircle, Clock, Info } from 'lucide-react';

export default function Contact() {
  return (
  <div className="min-h-screen bg-gradient-to-br from-[#f6f8fb] to-[#e9eefa] text-[#1a237e] dark:bg-gradient-to-br dark:from-[#181a20] dark:to-[#23263a] dark:text-[#e3e8f0]">
      <Navigation />
      <main className="pt-20 pb-12">
        {/* Hero Section */}
  <section className="w-full bg-gradient-to-r from-[#ede9fe] via-[#c7d2fe] to-[#e9eefa] py-16 text-center mb-12 dark:bg-gradient-to-r dark:from-[#23263a] dark:via-[#23263a] dark:to-[#181a20]">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-[#1a237e] drop-shadow-lg tracking-tight dark:text-white">Ready to Transform Your Business?</h1>
          <p className="text-lg text-[#5c6bc0] mb-2 font-medium dark:text-[#a5b4fc]">WebStitch - powered by Trinix Pvt Ltd</p>
          <p className="text-base text-[#3f51b5] max-w-2xl mx-auto dark:text-[#a5b4fc]">Get a free consultation and discover how our AI-powered solutions can revolutionize your operations and drive unprecedented growth.</p>
        </section>

        {/* Contact Info Cards */}
  <section className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg border border-[#e3e8f0] dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
            <Phone className="w-8 h-8 text-green-400 mb-2" />
            <div className="text-lg font-bold mb-1">Phone</div>
            <div className="text-blue-700 mb-1">9899721172</div>
            <div className="text-xs text-blue-300">Mon-Fri 9AM-6PM IST</div>
          </div>
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg border border-[#e3e8f0] dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
            <Mail className="w-8 h-8 text-blue-400 mb-2" />
            <div className="text-lg font-bold mb-1">Email</div>
            <div className="text-blue-700 mb-1">webstitchh@gmail.com</div>
            <div className="text-xs text-blue-300">We reply within 24 hours</div>
          </div>
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg border border-[#e3e8f0] dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
            <MapPin className="w-8 h-8 text-purple-400 mb-2" />
            <div className="text-lg font-bold mb-1">Location</div>
            <div className="text-blue-700 mb-1">Greater Noida, India</div>
            <div className="text-xs text-blue-300">Visit our office</div>
          </div>
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg border border-[#e3e8f0] dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
            <MessageCircle className="w-8 h-8 text-orange-400 mb-2" />
            <div className="text-lg font-bold mb-1">Live Chat</div>
            <div className="text-green-700 mb-1">Available Now</div>
            <div className="text-xs text-blue-300">Instant support</div>
          </div>
        </section>

        {/* Main Contact Form & Side Info */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-xl border border-[#e3e8f0] dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
            <h2 className="text-xl font-bold mb-4 text-white dark:text-white">Start Your Project</h2>
            <p className="text-blue-900 mb-6 dark:text-[#a5b4fc]">Tell us about your vision and we'll make it reality</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Name *</label>
                <input className="w-full rounded-lg bg-[#ede9fe] text-[#1a237e] px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] dark:bg-[#353a50] dark:text-white" placeholder="Your full name" required />
              </div>
              <div>
                <label className="block text-sm mb-1">Email *</label>
                <input className="w-full rounded-lg bg-[#ede9fe] text-[#1a237e] px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] dark:bg-[#353a50] dark:text-white" placeholder="your@email.com" required />
              </div>
              <div>
                <label className="block text-sm mb-1">Company</label>
                <input className="w-full rounded-lg bg-[#ede9fe] text-[#1a237e] px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] dark:bg-[#353a50] dark:text-white" placeholder="Your company name" />
              </div>
              <div>
                <label className="block text-sm mb-1">Project Type</label>
                <select className="w-full rounded-lg bg-[#ede9fe] text-[#1a237e] px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] dark:bg-[#353a50] dark:text-white">
                  <option>Select project type</option>
                  <option>AI Solutions</option>
                  <option>Web Development</option>
                  <option>Mobile Apps</option>
                  <option>UI/UX Design</option>
                  <option>E-commerce</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm mb-1">Budget Range</label>
                <select className="w-full rounded-lg bg-[#ede9fe] text-[#1a237e] px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] dark:bg-[#353a50] dark:text-white">
                  <option>Select budget range</option>
                  <option>Below $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000+</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm mb-1">Project Details *</label>
                <textarea className="w-full rounded-lg bg-[#ede9fe] text-[#1a237e] px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] dark:bg-[#353a50] dark:text-white" rows={4} placeholder="Tell us about your project, goals, timeline, and any specific requirements..." required />
              </div>
              <div className="md:col-span-2 mt-2">
                <Button type="submit" className="w-full bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white font-bold py-3 text-lg shadow-lg hover:from-[#7c3aed]/80 hover:to-[#6366f1]/80 transition dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1]"> 
                  <span className="flex items-center gap-2 justify-center"><span>Send Message & Get Free Quote</span></span>
                </Button>
              </div>
            </form>
          </div>

          {/* Side Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-gradient-to-br from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] rounded-2xl p-6 shadow-xl dark:bg-gradient-to-br dark:from-[#23263a] dark:via-[#353a50] dark:to-[#181a20]">
              <h3 className="text-lg font-bold mb-2 text-white">Why Choose WebStitch?</h3>
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6 text-white" />
                <span className="text-white font-bold">50+ Happy Clients</span>
                <span className="text-blue-100 text-xs">98% Satisfaction</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-6 h-6 text-white" />
                <span className="text-white font-bold">150+ Projects</span>
                <span className="text-blue-100 text-xs">100% Success Rate</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-white" />
                <span className="text-white font-bold">4.9/5 Rating</span>
                <span className="text-blue-100 text-xs">Verified Reviews</span>
              </div>
            </div>
            <div className="bg-[#c7d2fe] rounded-2xl p-6 shadow-lg border border-[#23263a] dark:bg-[#353a50] dark:border-[#6366f1]">
              <h3 className="text-lg font-bold mb-2 text-[#1a237e] dark:text-white">Office Hours</h3>
              <div className="flex flex-col gap-1 text-[#1a237e] text-sm dark:text-[#a5b4fc]">
                <div className="flex justify-between"><span>Monday - Friday</span><span>9:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span>10:00 AM - 2:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-red-400">Closed</span></div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#22d3ee] to-[#6366f1] rounded-2xl p-6 shadow-lg dark:bg-gradient-to-r dark:from-[#23263a] dark:to-[#6366f1]">
              <h3 className="text-lg font-bold mb-2 text-white">Need Immediate Help?</h3>
              <p className="text-white mb-2">For urgent matters or quick questions, call us directly:</p>
              <div className="text-2xl font-bold text-white flex items-center gap-2"><Phone className="w-6 h-6" /> 9899721172</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
