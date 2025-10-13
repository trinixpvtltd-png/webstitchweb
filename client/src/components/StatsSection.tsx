const stats = [
  { value: '99.7%', label: 'AI Accuracy' },
  { value: '85%', label: 'Cost Reduction' },
  { value: '340%', label: 'Average ROI' },
  { value: '50+', label: 'Happy Clients' },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-card-${index}`}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid={`stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
