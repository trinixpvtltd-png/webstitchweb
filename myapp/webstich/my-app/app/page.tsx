"use client"

import Hero from "@/components/hero"
import TemplateShowcase from "@/components/template-showcase"
import PromoSection from "@/components/promo-section"
import Featured from "@/components/featured"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background">
      <Hero />
      <TemplateShowcase />
      <PromoSection />
      <Featured />
      <CTASection />
      <Footer />
    </main>
  )
}
