import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@assets/stock_images/modern_technology_ab_12e17f85.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center pt-24 pb-32">
        <h1 className="text-4xl md:text-6xl lg:text-hero font-bold text-white mb-6" data-testid="text-hero-title">
          Transform Your Business with AI Solutions
        </h1>
        <p className="text-lg md:text-body-lg text-white/90 max-w-3xl mx-auto mb-8" data-testid="text-hero-subtitle">
          Intelligent automation and AI-powered solutions that deliver 85% cost reduction and 340% ROI
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group" data-testid="button-hero-primary">
            Get Free Consultation
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
            data-testid="button-hero-secondary"
          >
            View Success Stories
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap gap-8 justify-center mt-16 text-white/80">
          <div className="text-center" data-testid="stat-clients">
            <div className="text-2xl font-semibold">50+</div>
            <div className="text-sm">Clients</div>
          </div>
          <div className="text-center" data-testid="stat-rating">
            <div className="text-2xl font-semibold">4.9/5</div>
            <div className="text-sm">Rating</div>
          </div>
          <div className="text-center" data-testid="stat-accuracy">
            <div className="text-2xl font-semibold">99.7%</div>
            <div className="text-sm">AI Accuracy</div>
          </div>
        </div>
      </div>
    </section>
  );
}
