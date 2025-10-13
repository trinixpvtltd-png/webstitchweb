import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Zap, Globe, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Solutions & Machine Learning',
    description: 'Intelligent AI systems with 99.7% accuracy',
    stats: [
      { label: 'Accuracy', value: '99.7%' },
      { label: 'Speed', value: '2.3s' },
      { label: 'Cost Reduction', value: '85%' },
    ],
    benefits: [
      'Automated decision making',
      'Predictive insights',
      'Reduced human error',
      'Scalable intelligence',
    ],
  },
  {
    icon: Zap,
    title: 'Intelligent Process Automation',
    description: 'AI-driven automation with 85% time savings',
    stats: [
      { label: 'Time Saved', value: '85%' },
      { label: 'Error Reduction', value: '94%' },
      { label: 'ROI', value: '340%' },
    ],
    benefits: [
      'Eliminate manual tasks',
      'Improve accuracy',
      'Scale operations',
      'Reduce costs',
    ],
  },
  {
    icon: Globe,
    title: 'Next-Gen Web Applications',
    description: 'High-performance web apps with AI integration',
    stats: [
      { label: 'Load Time', value: '<1s' },
      { label: 'Performance', value: '98/100' },
      { label: 'Engagement', value: '+150%' },
    ],
    benefits: [
      'Lightning-fast performance',
      'Mobile-first design',
      'SEO optimized',
      'Scalable architecture',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-section font-semibold mb-4" data-testid="text-services-title">
            Our Core Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Comprehensive AI and digital solutions designed to transform your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:-translate-y-1 transition-transform duration-300"
              data-testid={`card-service-${index}`}
            >
              <service.icon className="w-12 h-12 text-primary mb-4" data-testid={`icon-service-${index}`} />
              <h3 className="text-xl font-semibold mb-2" data-testid={`text-service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6" data-testid={`text-service-desc-${index}`}>
                {service.description}
              </p>

              <div className="grid grid-cols-3 gap-2 mb-6">
                {service.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center" data-testid={`stat-${index}-${statIndex}`}>
                    <div className="text-lg font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                {service.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start gap-2" data-testid={`benefit-${index}-${benefitIndex}`}>
                    <div className="w-1 h-1 rounded-full bg-primary mt-2" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button variant="ghost" className="w-full group" data-testid={`button-service-${index}`}>
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
