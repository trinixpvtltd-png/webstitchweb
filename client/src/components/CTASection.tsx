import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-section font-semibold mb-4" data-testid="text-cta-title">
          Ready to Transform Your Business?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8" data-testid="text-cta-subtitle">
          Join 50+ successful companies transforming their operations with our AI solutions
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="group" data-testid="button-cta-primary">
            Get Free Strategy Consultation
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" data-testid="button-cta-secondary">
            <Phone className="mr-2 w-4 h-4" />
            Call: 800-646-4222
          </Button>
        </div>

        <div className="flex flex-wrap gap-8 justify-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2" data-testid="trust-indicator-1">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>50+ Companies Trust Us</span>
          </div>
          <div className="flex items-center gap-2" data-testid="trust-indicator-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>340% Average ROI</span>
          </div>
          <div className="flex items-center gap-2" data-testid="trust-indicator-3">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>99.7% AI Accuracy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
