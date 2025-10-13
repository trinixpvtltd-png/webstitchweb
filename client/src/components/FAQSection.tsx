import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How quickly can you implement AI automation in our business?',
    answer: 'Typically, we can implement AI automation solutions within 4-8 weeks, depending on the complexity of your requirements. Our streamlined process includes assessment, development, testing, and deployment phases.',
  },
  {
    question: 'What kind of ROI can we expect from AI automation?',
    answer: 'Our clients typically see an average ROI of 340% within the first year. This includes significant cost reductions (up to 85%), improved efficiency, and reduced error rates of up to 94%.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, performance optimization, and dedicated support teams to ensure your AI systems run smoothly.',
  },
  {
    question: 'Can AI automation integrate with our existing systems?',
    answer: 'Absolutely. Our AI solutions are designed to seamlessly integrate with your existing infrastructure, whether it\'s legacy systems, modern cloud platforms, or hybrid environments.',
  },
  {
    question: 'How secure are your AI solutions?',
    answer: 'Security is our top priority. We implement enterprise-grade security measures, including ISO 27001 compliance, end-to-end encryption, and regular security audits to protect your data.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We serve a wide range of industries including FinTech, Healthcare, Manufacturing, E-commerce, and more. Our AI solutions are customizable to meet specific industry requirements.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-section font-semibold mb-4" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-faq-subtitle">
            Everything you need to know about our AI solutions and implementation process
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} data-testid={`accordion-item-${index}`}>
              <AccordionTrigger className="text-left hover:no-underline" data-testid={`accordion-trigger-${index}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground" data-testid={`accordion-content-${index}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
