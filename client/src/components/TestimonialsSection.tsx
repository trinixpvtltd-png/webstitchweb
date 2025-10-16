import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useState } from 'react';
const avatar1 = '/professional_busines_fd08bdf3.jpg';
const avatar2 = '/professional_busines_e2755571.jpg';
const avatar3 = '/professional_busines_6bc32d7b.jpg';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CTO, FinTech Innovations',
    image: avatar1,
    rating: 5,
    text: "WebStitch's AI automation reduced our manual processing time by 85% and improved accuracy to 99.7%. Their machine learning models have transformed how we handle customer data and risk assessment.",
  },
  {
    name: 'Priya Singh',
    role: 'CEO, Manufacturing Plus',
    image: avatar2,
    rating: 5,
    text: 'The AI-powered predictive maintenance system WebStitch developed has prevented 12 major equipment failures and saved us over ₹12 crores in downtime costs. Their intelligent automation is game-changing.',
  },
  {
    name: 'Amit Patel',
    role: 'Director, Healthcare Analytics',
    image: avatar3,
    rating: 5,
    text: "WebStitch's AI chatbot handles 78% of our customer inquiries automatically with 96% satisfaction rate. The natural language processing is so advanced, customers often don't realize they're talking to AI.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-section font-semibold mb-4" data-testid="text-testimonials-title">
            Client Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-subtitle">
            Discover how we've helped businesses achieve remarkable growth through AI-powered solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:-translate-y-1 transition-transform duration-300"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" data-testid={`star-${index}-${i}`} />
                ))}
              </div>
              <p className="text-sm mb-6 leading-relaxed" data-testid={`text-testimonial-${index}`}>
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  data-testid={`img-avatar-${index}`}
                />
                <div>
                  <div className="font-semibold text-sm" data-testid={`text-name-${index}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground" data-testid={`text-role-${index}`}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
