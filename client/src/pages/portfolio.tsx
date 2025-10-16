import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, CheckCircle, TrendingUp, Users, Briefcase, Smartphone, Layout, ShoppingCart, Brain } from 'lucide-react';
const img1 = '/technology_business__1ccc13d3.jpg';
const img2 = '/technology_business__86480d1f.jpg';
const img3 = '/technology_business__efabd85e.jpg';
const img4 = '/technology_business__1ccc13d3.jpg';

const stats = [
  { icon: <Briefcase className="w-7 h-7" />, label: 'Projects Delivered', value: '150+' },
  { icon: <CheckCircle className="w-7 h-7" />, label: 'Client Satisfaction', value: '98%' },
  { icon: <TrendingUp className="w-7 h-7" />, label: 'Average Performance', value: '96/100' },
  { icon: <Users className="w-7 h-7" />, label: 'Industries Served', value: '12+' },
];

const filters = [
  'All',
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'E-commerce',
  'AI Solutions',
];

const featuredProjects = [
  {
    title: 'EcoCommerce Platform',
    image: img1,
    tags: ['E-commerce', 'Featured'],
    description: 'Sustainable e-commerce platform with advanced inventory management, AI-powered recommendations, and open shipping options.',
    stats: [
      { label: 'Conversion Rate', value: '+45%' },
      { label: 'Load Time', value: '0.8s' },
      { label: 'User Rating', value: '4.8/5' },
    ],
    tech: ['React', 'Node.js', 'MongoDB', '+1 more'],
  },
  {
    title: 'Tyre Service Website',
    image: img2,
    tags: ['Web Development', 'Featured'],
    description: 'Modern, responsive tyre service website featuring product listings, service booking, location-based support, and real-time inventory tracking.',
    stats: [
      { label: 'Performance', value: '96/100' },
      { label: 'Mobile Score', value: '98/100' },
      { label: 'SEO Score', value: '94/100' },
    ],
    tech: ['TypeScript', 'Tailwind CSS', 'Node.js', '+1 more'],
  },
];

const allProjects = [
  featuredProjects[0],
  featuredProjects[1],
  {
    title: 'FinanceFlow Dashboard',
    image: img3,
    tags: ['Web Development'],
    description: 'Real-time financial analytics dashboard with advanced data visualization, predictive analytics, and reporting.',
    stats: [
      { label: 'Data Processing', value: '10TB/day' },
      { label: 'Response Time', value: '0.3s' },
      { label: 'Accuracy', value: '99.7%' },
    ],
    tech: ['Vue.js', 'D3.js', 'Express', '+2'],
  },
  {
    title: 'EduLearn Platform',
    image: img2,
    tags: ['Web Development', 'Featured'],
    description: 'Interactive online learning platform with video streaming, progress tracking, AI-powered recommendations, and gamification.',
    stats: [
      { label: 'User Engagement', value: '+80%' },
      { label: 'Completion Rate', value: '87%' },
      { label: 'Student Satisfaction', value: '4.9/5' },
    ],
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'Smart City IoT Dashboard',
    image: img4,
    tags: ['Mobile Apps'],
    description: 'IoT-based smart city management system with real-time monitoring, predictive maintenance, and citizen engagement.',
    stats: [
      { label: 'Sensors Connected', value: '10,000+' },
      { label: 'Energy Saving', value: '35%' },
      { label: 'Response Time', value: '2s' },
    ],
    tech: ['Flutter', 'Firebase', '+2'],
  },
  {
    title: 'Software Development UI/UX',
    image: img1,
    tags: ['UI/UX Design'],
    description: 'Complete brand redesign and user experience overhaul for a leading software development firm.',
    stats: [
      { label: 'User Satisfaction', value: '+85%' },
      { label: 'Task Completion', value: '4.7/5' },
      { label: 'Design Rating', value: '4/5' },
    ],
    tech: ['Figma', 'Adobe Creative Suite', 'Prototyping', '+1'],
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f8fb] to-[#e9eefa] text-[#1a237e] dark:bg-gradient-to-br dark:from-[#181a20] dark:to-[#23263a] dark:text-[#e3e8f0]">
      <Navigation />
      <main className="pt-20 pb-12">
        {/* Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-[#1a237e] drop-shadow-lg dark:text-white">Our Portfolio</h1>
          <p className="text-lg text-[#5c6bc0] mb-2 font-medium dark:text-[#a5b4fc]">WebStitch - powered by Trinix Pvt Ltd</p>
          <p className="text-base text-[#3f51b5] max-w-2xl mx-auto dark:text-[#a5b4fc]">Showcasing our finest work – innovative solutions that drive real business results</p>
        </section>

        {/* Stats */}
        <section className="flex flex-wrap justify-center gap-8 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center bg-white/90 rounded-2xl px-10 py-7 min-w-[180px] shadow-xl border border-[#e3e8f0] dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
              <div className="mb-2 text-[#5c6bc0] dark:text-[#a5b4fc]">{stat.icon}</div>
              <div className="text-2xl font-extrabold text-[#1a237e] drop-shadow dark:text-white">{stat.value}</div>
              <div className="text-[#5c6bc0] text-sm mt-1 font-medium dark:text-[#a5b4fc]">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Filters */}
        <section className="flex flex-wrap gap-3 justify-center mb-8">
          {filters.map((filter, i) => (
            <Badge key={i} className={`px-4 py-1 rounded-full text-base font-semibold tracking-wide shadow ${filter === 'All' ? 'bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white shadow-lg dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1]' : 'bg-[#e3e8f0] text-[#3f51b5] border border-[#c7d2fe] dark:bg-[#353a50] dark:text-[#a5b4fc] dark:border-[#6366f1]'}`}>{filter}</Badge>
          ))}
        </section>

        {/* Featured Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#3f51b5] dark:text-[#a5b4fc]">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-[#e3e8f0] dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
                <div className="relative h-56 w-full overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.tags.map((tag, j) => (
                      <Badge key={j} className={`px-3 py-1 text-xs rounded-full font-bold shadow ${tag === 'Featured' ? 'bg-[#c7d2fe] text-[#1a237e] dark:bg-[#6366f1] dark:text-white' : 'bg-[#7c3aed] text-white dark:bg-[#a78bfa] dark:text-white'}`}>{tag}</Badge>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-[#1a237e] drop-shadow dark:text-white">{project.title}</h3>
                  <p className="text-[#3f51b5] mb-4 flex-1 dark:text-[#a5b4fc]">{project.description}</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    {project.stats.map((stat, k) => (
                      <div key={k} className="bg-[#e3e8f0] rounded-lg px-3 py-1 text-sm text-[#3f51b5] font-semibold border border-[#c7d2fe] dark:bg-[#353a50] dark:text-[#a5b4fc] dark:border-[#6366f1]">
                        <span className="font-bold mr-1 text-[#1a237e] dark:text-white">{stat.value}</span>{stat.label}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, l) => (
                      <Badge key={l} className="bg-[#ede9fe] text-[#7c3aed] px-2 py-0.5 text-xs rounded-full border border-[#c7d2fe] font-semibold dark:bg-[#181a20] dark:text-[#a78bfa] dark:border-[#6366f1]">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#3f51b5] dark:text-[#a5b4fc]">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col border border-[#e3e8f0] dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
                <div className="relative h-44 w-full overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.tags.map((tag, j) => (
                      <Badge key={j} className={`px-3 py-1 text-xs rounded-full font-bold shadow ${tag === 'Featured' ? 'bg-[#c7d2fe] text-[#1a237e] dark:bg-[#6366f1] dark:text-white' : 'bg-[#7c3aed] text-white dark:bg-[#a78bfa] dark:text-white'}`}>{tag}</Badge>
                    ))}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2 text-[#1a237e] drop-shadow dark:text-white">{project.title}</h3>
                  <p className="text-[#3f51b5] mb-3 flex-1 dark:text-[#a5b4fc]">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-3">
                    {project.stats.map((stat, k) => (
                      <div key={k} className="bg-[#e3e8f0] rounded-lg px-2 py-0.5 text-xs text-[#3f51b5] font-semibold border border-[#c7d2fe] dark:bg-[#353a50] dark:text-[#a5b4fc] dark:border-[#6366f1]">
                        <span className="font-bold mr-1 text-[#1a237e] dark:text-white">{stat.value}</span>{stat.label}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, l) => (
                      <Badge key={l} className="bg-[#ede9fe] text-[#7c3aed] px-2 py-0.5 text-xs rounded-full border border-[#c7d2fe] font-semibold dark:bg-[#181a20] dark:text-[#a78bfa] dark:border-[#6366f1]">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] rounded-3xl text-center max-w-5xl mx-auto mb-12 shadow-2xl border border-[#e3e8f0] dark:bg-gradient-to-r dark:from-[#23263a] dark:via-[#353a50] dark:to-[#181a20] dark:border-[#353a50]">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white drop-shadow dark:text-white">Ready to Start Your Project?</h2>
          <p className="text-white/90 mb-8 dark:text-[#a5b4fc]">Let's create something amazing together. Contact us for a free consultation.</p>
          <Button size="lg" className="bg-white text-[#7c3aed] font-bold px-8 py-3 text-lg shadow-lg hover:bg-[#ede9fe] transition dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1] dark:text-white dark:hover:bg-[#7c3aed]/80">Start Your Project →</Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
