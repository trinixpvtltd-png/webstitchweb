import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, ShieldCheck, Globe2, Heart, Sparkles, Users, BadgeCheck, Handshake } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Page hero - styled like home (left-aligned, spacious, neutral background) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-14 md:py-20">
          <Reveal>
            <div className="max-w-4xl text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">About WebStitch</h1>
              <p className="mt-2 text-sm text-muted-foreground">powered by Trinix Pvt Ltd</p>
              <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-2xl">
                We're a passionate team of innovators, designers, and developers dedicated to transforming businesses through cutting-edge digital solutions. Based in Greater Noida, we serve clients globally.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Mission / Why choose us */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-4 md:mt-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Reveal>
          <Card className="bg-white/5 hover:bg-white/10 border-neutral-200/10 hover-elevate transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <CardTitle>Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-foreground/80">
              To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting competitive advantages in the digital landscape.
            </CardContent>
          </Card>
          </Reveal>
          <Reveal delay={100}>
          <Card className="bg-white/5 hover:bg-white/10 border-neutral-200/10 hover-elevate transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-primary" />
                <CardTitle>Why Choose Us?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-foreground/80">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="font-medium">Lightning-Fast Delivery</p>
                    <p>We deliver projects 40% faster than industry average without compromising quality.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BadgeCheck className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="font-medium">100% Satisfaction Guarantee</p>
                    <p>We're not satisfied until you're thrilled with the results.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe2 className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="font-medium">Global Standards, Local Touch</p>
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
          <Card className="bg-white/5 hover:bg-white/10 border-neutral-200/10 hover-elevate transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <CardTitle>Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-foreground/80">
              To be the leading technology partner for businesses seeking to transform their digital presence and achieve unprecedented success through innovation and excellence.
            </CardContent>
          </Card>
          </Reveal>
        </section>

        {/* Achievements */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Our Achievements</h2>
            <p className="text-muted-foreground mt-2">Numbers that reflect our commitment to excellence and client success</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Reveal as="div">
            <Card className="text-center bg-white/5 hover:bg-white/10 border-neutral-200/10 hover-elevate transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl">50+</CardTitle>
                <CardDescription className="mt-1">Happy Clients</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">Across various industries</CardContent>
            </Card>
            </Reveal>
            <Reveal as="div" delay={75}>
            <Card className="text-center bg-white/5 hover:bg-white/10 border-neutral-200/10 hover-elevate transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl">150+</CardTitle>
                <CardDescription className="mt-1">Projects Completed</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">Successfully delivered</CardContent>
            </Card>
            </Reveal>
            <Reveal as="div" delay={150}>
            <Card className="text-center bg-white/5 hover:bg-white/10 border-neutral-200/10 hover-elevate transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl">98%</CardTitle>
                <CardDescription className="mt-1">Success Rate</CardDescription>
              </CardHeader>
              <CardContent className="text-foreground/80">Client satisfaction</CardContent>
            </Card>
            </Reveal>
            <Reveal as="div" delay={225}>
            <Card className="text-center bg-white/5 hover:bg-white/10 border-neutral-200/10 hover-elevate transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl">12+</CardTitle>
                <CardDescription className="mt-1">Countries Served</CardDescription>
              </CardHeader>
              <CardContent className="text-foreground/80">Global reach</CardContent>
            </Card>
            </Reveal>
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Our Core Values</h2>
            <p className="text-muted-foreground mt-2">The principles that guide our work and shape our company culture</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Reveal as="div">
            <Card className="bg-white/5 hover:bg-white/10 border-neutral-200/10 hover-elevate transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <CardTitle>Innovation First</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-foreground/80">
                We embrace cutting-edge technologies and creative solutions to solve complex challenges.
              </CardContent>
            </Card>
            </Reveal>
            <Reveal as="div" delay={75}>
            <Card className="bg-white/5 hover:bg-white/10 border-neutral-200/10 hover-elevate transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BadgeCheck className="w-5 h-5 text-primary" />
                  <CardTitle>Quality Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-foreground/80">
                We maintain the highest standards in every line of code and pixel of design.
              </CardContent>
            </Card>
            </Reveal>
            <Reveal as="div" delay={150}>
            <Card className="bg-white/5 hover:bg-white/10 border-neutral-200/10 hover-elevate transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <CardTitle>Collaborative Spirit</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-foreground/80">
                Great work happens when talented people work together towards a common goal.
              </CardContent>
            </Card>
            </Reveal>
            <Reveal as="div" delay={225}>
            <Card className="bg-white/5 hover:bg-white/10 border-neutral-200/10 hover-elevate transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Handshake className="w-5 h-5 text-primary" />
                  <CardTitle>Trust & Transparency</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-foreground/80">
                We build lasting relationships through honest communication and reliable delivery.
              </CardContent>
            </Card>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 mb-16">
          <Reveal>
          <div className="rounded-2xl bg-white/5 hover:bg-white/10 border border-neutral-200/10 p-8 md:p-10 text-center shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold">Ready to Work Together?</h3>
            <p className="text-foreground/80 mt-2">Let's discuss how we can help transform your business with innovative digital solutions</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button size="lg">Start Your Project</Button>
              <Button size="lg" variant="outline">View Our Work</Button>
            </div>
          </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
