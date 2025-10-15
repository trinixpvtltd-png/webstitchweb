import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, ShieldCheck, Globe2, Heart, Sparkles, Users, BadgeCheck, Handshake } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f8fb] to-[#e9eefa] text-[#1a237e] dark:bg-gradient-to-br dark:from-[#181a20] dark:to-[#23263a] dark:text-[#e3e8f0]">
      <Navigation />
      <main className="pt-20">
        {/* Page hero - styled like home (left-aligned, spacious, neutral background) */}
        <section className="w-full bg-gradient-to-r from-[#ede9fe] via-[#c7d2fe] to-[#e9eefa] px-6 lg:px-12 py-14 md:py-20 mb-8 dark:bg-gradient-to-r dark:from-[#23263a] dark:via-[#23263a] dark:to-[#181a20]">
          <Reveal>
            <div className="max-w-4xl text-left mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1a237e] drop-shadow-lg dark:text-white">About WebStitch</h1>
              <p className="mt-2 text-sm text-[#5c6bc0] dark:text-[#a5b4fc]">powered by Trinix Pvt Ltd</p>
              <p className="mt-6 text-base md:text-lg text-[#3f51b5] max-w-2xl dark:text-[#a5b4fc]">
                We're a passionate team of innovators, designers, and developers dedicated to transforming businesses through cutting-edge digital solutions. Based in Greater Noida, we serve clients globally.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Mission / Why choose us */}
  <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-4 md:mt-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
    <Reveal>
    <Card className="bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary dark:text-[#a78bfa]" />
                <CardTitle className="dark:text-white">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-foreground/80 dark:text-[#a5b4fc]">
              To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting competitive advantages in the digital landscape.
            </CardContent>
          </Card>
          </Reveal>
          <Reveal delay={100}>
          <Card className="bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-primary dark:text-[#a78bfa]" />
                <CardTitle className="dark:text-white">Why Choose Us?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-foreground/80 dark:text-[#a5b4fc]">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 mt-0.5 dark:text-[#a78bfa]" />
                  <div>
                    <p className="font-medium dark:text-white">Lightning-Fast Delivery</p>
                    <p>We deliver projects 40% faster than industry average without compromising quality.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BadgeCheck className="w-5 h-5 mt-0.5 dark:text-[#a78bfa]" />
                  <div>
                    <p className="font-medium dark:text-white">100% Satisfaction Guarantee</p>
                    <p>We're not satisfied until you're thrilled with the results.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe2 className="w-5 h-5 mt-0.5 dark:text-[#a78bfa]" />
                  <div>
                    <p className="font-medium dark:text-white">Global Standards, Local Touch</p>
                    <p>International quality with personalized service and cultural understanding.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          </Reveal>
        </section>

        {/* Vision */}
  <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-6 grid grid-cols-1">
    <Reveal>
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
          </Reveal>
        </section>

        {/* Achievements */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a237e] mb-2 drop-shadow-lg dark:text-white">Our Achievements</h2>
            <p className="text-[#5c6bc0] mt-2 dark:text-[#a5b4fc]">Numbers that reflect our commitment to excellence and client success</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Reveal as="div">
            <Card className="text-center bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-[#1a237e] dark:text-white">50+</CardTitle>
                <CardDescription className="mt-1 text-[#3f51b5] dark:text-[#a5b4fc]">Happy Clients</CardDescription>
              </CardHeader>
              <CardContent className="text-[#5c6bc0] dark:text-[#a5b4fc]">Across various industries</CardContent>
            </Card>
            </Reveal>
            <Reveal as="div" delay={75}>
            <Card className="text-center bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-[#1a237e] dark:text-white">150+</CardTitle>
                <CardDescription className="mt-1 text-[#3f51b5] dark:text-[#a5b4fc]">Projects Completed</CardDescription>
              </CardHeader>
              <CardContent className="text-[#5c6bc0] dark:text-[#a5b4fc]">Successfully delivered</CardContent>
            </Card>
            </Reveal>
            <Reveal as="div" delay={150}>
            <Card className="text-center bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-[#1a237e] dark:text-white">98%</CardTitle>
                <CardDescription className="mt-1 text-[#3f51b5] dark:text-[#a5b4fc]">Success Rate</CardDescription>
              </CardHeader>
              <CardContent className="text-[#5c6bc0] dark:text-[#a5b4fc]">Client satisfaction</CardContent>
            </Card>
            </Reveal>
            <Reveal as="div" delay={225}>
            <Card className="text-center bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-[#1a237e] dark:text-white">12+</CardTitle>
                <CardDescription className="mt-1 text-[#3f51b5] dark:text-[#a5b4fc]">Countries Served</CardDescription>
              </CardHeader>
              <CardContent className="text-[#5c6bc0] dark:text-[#a5b4fc]">Global reach</CardContent>
            </Card>
            </Reveal>
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a237e] mb-2 drop-shadow-lg dark:text-white">Our Core Values</h2>
            <p className="text-[#5c6bc0] mt-2 dark:text-[#a5b4fc]">The principles that guide our work and shape our company culture</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Reveal as="div">
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
            </Reveal>
            <Reveal as="div" delay={75}>
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
            </Reveal>
            <Reveal as="div" delay={150}>
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
            </Reveal>
            <Reveal as="div" delay={225}>
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
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 mb-16">
          <Reveal>
          <div className="rounded-2xl bg-white border border-[#e3e8f0] p-8 md:p-10 text-center shadow-lg dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#1a237e] mb-2 drop-shadow-lg dark:text-white">Ready to Work Together?</h3>
            <p className="text-[#3f51b5] mt-2 dark:text-[#a5b4fc]">Let's discuss how we can help transform your business with innovative digital solutions</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button size="lg" className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white font-bold shadow-lg hover:from-[#7c3aed]/80 hover:to-[#6366f1]/80 transition dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1]">Start Your Project</Button>
              <Button size="lg" variant="outline" className="border-[#7c3aed] text-[#7c3aed] hover:bg-[#ede9fe] dark:border-[#a78bfa] dark:text-[#a78bfa] dark:hover:bg-[#23263a]/80">View Our Work</Button>
            </div>
          </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
