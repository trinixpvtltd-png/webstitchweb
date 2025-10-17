import Navigation from '@/components/Navigation';
import FuturisticThreeBackground from '../components/FuturisticThreeBackground';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import InsightsSection from '@/components/InsightsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Shield, Zap, LineChart } from 'lucide-react';
// Use public folder paths for images
const img1 = '/technology_business__1ccc13d3.jpg';
const img2 = '/technology_business__86480d1f.jpg';
const img3 = '/technology_business__efabd85e.jpg';


export default function Home() {
  const features = [
    {
      title: 'Automations that scale',
      description: 'Cut manual ops by up to 85%.',
      icon: <Zap className="w-5 h-5" />,
      imageSrc: img1,
    },
    {
      title: 'Enterprise-grade security',
      description: 'SOC2-ready workflows and audit trails.',
      icon: <Shield className="w-5 h-5" />,
      imageSrc: img2,
    },
    {
      title: 'Weeks to value',
      description: 'Deploy in days, not quarters.',
      icon: <LineChart className="w-5 h-5" />,
      imageSrc: img3,
    },
  ];
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FuturisticThreeBackground />
      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <StatsSection />
          <ServicesSection />
          <TestimonialsSection />
          <InsightsSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
