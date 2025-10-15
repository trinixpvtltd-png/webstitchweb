import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, Star, TrendingUp, Lightbulb, Award, Users2, BookOpen, DollarSign, Heart, Laptop, Globe, Calendar, Clock, MapPin } from 'lucide-react';

const stats = [
  { icon: <Users className="w-7 h-7" />, label: 'Team Members', value: '50+' },
  { icon: <Briefcase className="w-7 h-7" />, label: 'Average Experience', value: '5+ Years' },
  { icon: <Star className="w-7 h-7" />, label: 'Employee Satisfaction', value: '4.8/5' },
  { icon: <TrendingUp className="w-7 h-7" />, label: 'Growth Rate', value: '200%' },
];

const values = [
  { icon: <Lightbulb className="w-8 h-8" />, title: 'Innovation First', desc: 'We embrace new technologies and creative solutions to solve complex problems.' },
  { icon: <Award className="w-8 h-8" />, title: 'Quality Excellence', desc: 'We maintain the highest standards in every line of code and pixel of design.' },
  { icon: <Users2 className="w-8 h-8" />, title: 'Collaborative Spirit', desc: 'We believe great work happens when talented people work together.' },
  { icon: <BookOpen className="w-8 h-8" />, title: 'Continuous Learning', desc: 'We invest in our team’s growth and encourage lifelong learning.' },
];

const benefits = [
  { icon: <DollarSign className="w-6 h-6" />, title: 'Competitive Compensation', desc: 'Industry-leading salaries with performance bonuses and equity options.' },
  { icon: <Briefcase className="w-6 h-6" />, title: 'Flexible Work', desc: 'Hybrid and remote work options with flexible hours.' },
  { icon: <Heart className="w-6 h-6" />, title: 'Health & Wellness', desc: 'Comprehensive health insurance and wellness programs.' },
  { icon: <BookOpen className="w-6 h-6" />, title: 'Learning & Growth', desc: 'Professional development budget and mentorship programs.' },
  { icon: <Laptop className="w-6 h-6" />, title: 'Latest Technology', desc: 'MacBook Pro, premium software, and cutting-edge tools.' },
  { icon: <Users2 className="w-6 h-6" />, title: 'Team Culture', desc: 'Inclusive environment with team events and retreats.' },
];

const perks = [
  { icon: <Clock className="w-5 h-5" />, title: 'Flexible Hours', desc: 'Work when you’re most productive' },
  { icon: <Globe className="w-5 h-5" />, title: 'Remote Work', desc: 'Work from anywhere in India' },
  { icon: <BookOpen className="w-5 h-5" />, title: 'Learning Budget', desc: '₹50,000 annual learning allowance' },
  { icon: <Calendar className="w-5 h-5" />, title: 'Team Events', desc: 'Regular team outings and retreats' },
];

const jobFilters = ['All', 'Engineering', 'Design', 'Infrastructure', 'Marketing'];

const jobs = [
  {
    title: 'Full Stack Developer',
    tags: ['Engineering', 'Featured'],
    location: 'Greater Noida / Remote',
    type: 'Full-time',
    exp: '3-5 years',
    salary: '₹8-15 LPA',
    desc: `Join our agile development team! You’ll build transformative digital experiences using React, Node.js, and cloud-native platforms. At WebStitch, your growth matters: competitive salary, hybrid work, and mentorship from industry veterans.`,
  },
  {
    title: 'UI/UX Designer',
    tags: ['Design', 'Featured'],
    location: 'Greater Noida / Remote',
    type: 'Full-time',
    exp: '2-4 years',
    salary: '₹6-12 LPA',
    desc: `Shape the future of digital experiences as our UI/UX Designer. Create intuitive, accessible, and beautiful interfaces that users love. Work with cutting-edge design tools and collaborate with world-class developers.`,
  },
  {
    title: 'DevOps Engineer',
    tags: ['Infrastructure'],
    location: 'Greater Noida / Remote',
    type: 'Full-time',
    exp: '3-6 years',
    salary: '₹10-18 LPA',
    desc: `Build and maintain the infrastructure that powers our applications. Work with cutting-edge cloud technologies, implement CI/CD pipelines, and ensure our systems are scalable, secure, and reliable.`,
  },
  {
    title: 'Digital Marketing Specialist',
    tags: ['Marketing'],
    location: 'Greater Noida / Remote',
    type: 'Full-time',
    exp: '2-4 years',
    salary: '₹5-10 LPA',
    desc: `Drive growth through data-driven digital marketing strategies. Manage SEO, content marketing, social media, and paid advertising campaigns to help our clients achieve their business goals.`,
  },
];

export default function Careers() {
  return (
  <div className="min-h-screen bg-gradient-to-br from-[#f6f8fb] to-[#e9eefa] text-[#1a237e] dark:bg-gradient-to-br dark:from-[#181a20] dark:to-[#23263a] dark:text-[#e3e8f0]">
      <Navigation />
      <main className="pt-20 pb-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-[#1a237e] drop-shadow-lg tracking-tight dark:text-white">Join Our Team</h1>
          <p className="text-lg text-[#5c6bc0] mb-2 font-medium dark:text-[#a5b4fc]">WebStitch - powered by Trinix Pvt Ltd</p>
          <p className="text-base text-[#3f51b5] max-w-2xl mx-auto dark:text-[#a5b4fc]">Be part of a passionate team that’s shaping the future of web technology. We’re looking for talented individuals who share our vision of innovation and excellence.</p>
        </section>

        {/* Stats */}
        <section className="flex flex-wrap justify-center gap-8 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center bg-[#c8dbef] rounded-2xl px-10 py-7 min-w-[180px] shadow-xl border border-[#23263a] dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
              <div className="mb-2 text-[#7c3aed] dark:text-[#a5b4fc]">{stat.icon}</div>
              <div className="text-2xl font-extrabold text-[#1a237e] drop-shadow dark:text-white">{stat.value}</div>
              <div className="text-[#5c6bc0] text-sm mt-1 font-medium dark:text-[#a5b4fc]">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#3f51b5] text-center tracking-tight dark:text-[#a5b4fc]">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <div key={i} className="flex flex-col items-center bg-white rounded-2xl p-7 shadow-lg border border-[#e3e8f0] dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
                <div className="mb-3 text-[#7c3aed] dark:text-[#a5b4fc]">{value.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-[#1a237e] drop-shadow text-center tracking-tight dark:text-white">{value.title}</h3>
                <p className="text-[#3f51b5] text-sm text-center dark:text-[#a5b4fc]">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#3f51b5] text-center tracking-tight dark:text-[#a5b4fc]">Why Work With Us?</h2>
          <p className="text-[#5c6bc0] text-center mb-8 max-w-2xl mx-auto dark:text-[#a5b4fc]">We believe in taking care of our team with competitive benefits and a supportive work environment</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col items-start bg-white rounded-2xl p-7 shadow-lg border border-[#e3e8f0] dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
                <div className="mb-3 text-[#7c3aed] dark:text-[#a5b4fc]">{benefit.icon}</div>
                <h3 className="text-base font-bold mb-1 text-[#1a237e] drop-shadow tracking-tight dark:text-white">{benefit.title}</h3>
                <p className="text-[#3f51b5] text-sm dark:text-[#a5b4fc]">{benefit.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {perks.map((perk, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#ede9fe] rounded-full px-5 py-2 text-[#7c3aed] font-medium border border-[#c7d2fe] shadow dark:bg-[#353a50] dark:text-[#a5b4fc] dark:border-[#6366f1]">
                <span className="text-[#7c3aed] dark:text-[#a5b4fc]">{perk.icon}</span>
                <span>{perk.title}</span>
                <span className="text-xs text-[#5c6bc0] dark:text-[#a5b4fc]">{perk.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#3f51b5] text-center tracking-tight dark:text-[#a5b4fc]">Open Positions</h2>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {jobFilters.map((filter, i) => (
              <Badge key={i} className={`px-4 py-1 rounded-full text-base font-semibold tracking-wide shadow ${filter === 'All' ? 'bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white shadow-lg dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1]' : 'bg-[#e3e8f0] text-[#3f51b5] border border-[#c7d2fe] dark:bg-[#353a50] dark:text-[#a5b4fc] dark:border-[#6366f1]'}`}>{filter}</Badge>
            ))}
          </div>
          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            {jobs.map((job, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-xl border border-[#e3e8f0] flex flex-col md:flex-row md:items-center md:justify-between gap-4 dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {job.tags.map((tag, j) => (
                      <Badge key={j} className={`px-3 py-1 text-xs rounded-full font-bold shadow ${tag === 'Featured' ? 'bg-[#c7d2fe] text-[#1a237e] dark:bg-[#6366f1] dark:text-white' : 'bg-[#7c3aed] text-white dark:bg-[#a78bfa] dark:text-white'}`}>{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-[#1a237e] drop-shadow tracking-tight dark:text-white">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-[#5c6bc0] text-xs mb-2 dark:text-[#a5b4fc]">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />{job.type}</span>
                    <span className="flex items-center gap-1"><Star className="w-4 h-4" />{job.exp}</span>
                    <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" />{job.salary}</span>
                  </div>
                  <p className="text-[#3f51b5] text-sm mb-2 dark:text-[#a5b4fc]">{job.desc}</p>
                </div>
                <div className="flex flex-col gap-2 min-w-[140px]">
                  <Button size="sm" variant="outline" className="bg-[#ede9fe] text-[#7c3aed] border-[#c7d2fe] hover:bg-[#e9eefa] dark:bg-[#353a50] dark:text-[#a5b4fc] dark:border-[#6366f1]">View Details</Button>
                  <Button size="sm" className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white font-bold dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1]">Apply Now</Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] rounded-3xl text-center max-w-5xl mx-auto mb-12 shadow-2xl border border-[#e3e8f0] dark:bg-gradient-to-r dark:from-[#23263a] dark:via-[#353a50] dark:to-[#181a20] dark:border-[#353a50]">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white drop-shadow tracking-tight dark:text-white">Don't See Your Role?</h2>
          <p className="text-white/90 mb-8 dark:text-[#a5b4fc]">We're always looking for talented individuals. Send us your resume and let's talk about how you can contribute to our team.</p>
          <Button size="lg" className="bg-white text-[#7c3aed] font-bold px-8 py-3 text-lg shadow-lg hover:bg-[#ede9fe] transition dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1] dark:text-white dark:hover:bg-[#7c3aed]/80">Send Your Resume →</Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
