import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
const blog1 = '/technology_business__efabd85e.jpg';
const blog2 = '/technology_business__1ccc13d3.jpg';
const blog3 = '/technology_business__86480d1f.jpg';

const insights = [
  {
    category: 'AI & Automation',
    title: 'AI Automation: Transforming Business Operations in 2025',
    excerpt: 'Discover how AI automation is revolutionizing business processes, reducing costs by 85%, and creating unprecedented opportunities.',
    image: blog1,
    readTime: '10 min read',
  },
  {
    category: 'Web Development',
    title: 'Why Progressive Web Apps Are the Future of Mobile Engagement',
    excerpt: 'Explore how Progressive Web Apps are transforming mobile experiences with native app functionality and lightning-fast performance.',
    image: blog2,
    readTime: '8 min read',
  },
  {
    category: 'SEO',
    title: 'A Guide to SEO in 2025: Trends and Best Practices',
    excerpt: 'Stay ahead of the curve with the latest SEO strategies, from Core Web Vitals to AI-powered search optimization.',
    image: blog3,
    readTime: '12 min read',
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-section font-semibold mb-4" data-testid="text-insights-title">
            Latest Insights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-insights-subtitle">
            Stay ahead with expert insights on AI, automation, and digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:-translate-y-1 transition-transform duration-300 group cursor-pointer"
              data-testid={`card-insight-${index}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`img-insight-${index}`}
                />
              </div>
              <div className="p-6">
                <Badge variant="secondary" className="mb-3" data-testid={`badge-category-${index}`}>
                  {insight.category}
                </Badge>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2" data-testid={`text-insight-title-${index}`}>
                  {insight.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2" data-testid={`text-insight-excerpt-${index}`}>
                  {insight.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground" data-testid={`text-readtime-${index}`}>
                    {insight.readTime}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
