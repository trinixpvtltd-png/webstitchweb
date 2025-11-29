import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Globe, ArrowRight } from "lucide-react";
import { cachedFetch } from "@/lib/cachedFetch";

// Fallback static services (your original data)
const fallbackServices = [
  {
    icon: Brain,
    title: "AI Solutions & Machine Learning",
    description: "Intelligent AI systems with 99.7% accuracy",
    stats: [
      { label: "Accuracy", value: "99.7%" },
      { label: "Speed", value: "2.3s" },
      { label: "Cost Reduction", value: "85%" },
    ],
    benefits: [
      "Automated decision making",
      "Predictive insights",
      "Reduced human error",
      "Scalable intelligence",
    ],
  },
  {
    icon: Zap,
    title: "Intelligent Process Automation",
    description: "AI-driven automation with 85% time savings",
    stats: [
      { label: "Time Saved", value: "85%" },
      { label: "Error Reduction", value: "94%" },
      { label: "ROI", value: "340%" },
    ],
    benefits: [
      "Eliminate manual tasks",
      "Improve accuracy",
      "Scale operations",
      "Reduce costs",
    ],
  },
  {
    icon: Globe,
    title: "Next-Gen Web Applications",
    description: "High-performance web apps with AI integration",
    stats: [
      { label: "Load Time", value: "<1s" },
      { label: "Performance", value: "98/100" },
      { label: "Engagement", value: "+150%" },
    ],
    benefits: [
      "Lightning-fast performance",
      "Mobile-first design",
      "SEO optimized",
      "Scalable architecture",
    ],
  },
];

// Icon mapping for backend services
const iconMap: { [key: string]: any } = {
  Brain,
  Zap,
  Globe,
};

export default function ServicesSection() {
  const [services, setServices] = useState(fallbackServices);
  const [loading, setLoading] = useState(true);
  const [isFromCache, setIsFromCache] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const result = await cachedFetch<any[]>(
          "/api/services", // Update with your actual API endpoint
          "services_cache",
          3600000 // Cache for 1 hour
        );

        // Map backend data to include icons
        const mappedServices = result.data.map((service: any) => ({
          ...service,
          icon: iconMap[service.iconName] || Brain, // Default to Brain icon
        }));

        setServices(mappedServices);
        setIsFromCache(result.fromCache);
      } catch (err) {
        console.warn("Using fallback services:", err);
        // Keep fallback services if fetch fails
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section id="services" className="py-24 md:py-32 bg-muted/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-section font-semibold mb-4"
            data-testid="text-services-title"
          >
            Our Core Services
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-services-subtitle"
          >
            Comprehensive AI and digital solutions designed to transform your
            business operations
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            <p className="text-muted-foreground mt-4">Loading services...</p>
          </div>
        )}

        {/* Cache Warning */}
        {!loading && isFromCache && (
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-8 text-center">
            <p className="text-sm text-yellow-600 dark:text-yellow-400">
              Showing cached services. Connect to server for latest updates.
            </p>
          </div>
        )}

        {/* Services Grid */}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:-translate-y-1 transition-transform duration-300 bg-black/40 backdrop-blur-sm border-white/10"
                data-testid={`card-service-${index}`}
              >
                <service.icon
                  className="w-12 h-12 text-primary mb-4"
                  data-testid={`icon-service-${index}`}
                />
                <h3
                  className="text-xl font-semibold mb-2"
                  data-testid={`text-service-title-${index}`}
                >
                  {service.title}
                </h3>
                <p
                  className="text-muted-foreground mb-6"
                  data-testid={`text-service-desc-${index}`}
                >
                  {service.description}
                </p>

                {service.stats && service.stats.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {service.stats.map((stat: any, statIndex: number) => (
                      <div
                        key={statIndex}
                        className="text-center"
                        data-testid={`stat-${index}-${statIndex}`}
                      >
                        <div className="text-lg font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {service.benefits && service.benefits.length > 0 && (
                  <div className="space-y-2 mb-6">
                    {service.benefits.map(
                      (benefit: string, benefitIndex: number) => (
                        <div
                          key={benefitIndex}
                          className="flex items-start gap-2"
                          data-testid={`benefit-${index}-${benefitIndex}`}
                        >
                          <div className="w-1 h-1 rounded-full bg-primary mt-2" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      )
                    )}
                  </div>
                )}

                <Button
                  className="w-full group bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white font-bold shadow-lg hover:from-[#7c3aed]/80 hover:to-[#6366f1]/80 transition dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1]"
                  data-testid={`button-service-${index}`}
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
