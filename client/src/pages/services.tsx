import { useState } from 'react';
import Navigation from '@/components/Navigation';
import StarVideoBackground from '@/components/StarVideoBackground';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { BrainCircuit, Cpu, Database, Code, BarChart3, Globe2, MonitorSmartphone, Zap, Heart, Sparkles, BadgeCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { motion } from 'framer-motion';

export default function Services() {
  // Stats for achievements
  const stats = [
    { number: '150+', label: 'Projects Completed', icon: <Zap className="h-10 w-10 text-primary" /> },
    { number: '50+', label: 'Expert Specialists', icon: <Globe2 className="h-10 w-10 text-primary" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <BrainCircuit className="h-10 w-10 text-primary" /> },
    { number: '4.9/5', label: 'Average Rating', icon: <BarChart3 className="h-10 w-10 text-primary" /> },
  ];

  const premiumServices = [
    {
      title: 'AI Solutions & Machine Learning',
      badge: 'Popular',
      icon: <BrainCircuit className="h-10 w-10 text-primary" />,
      description: 'Leverage the power of artificial intelligence and machine learning to optimize business processes, gain insights from data, and enhance decision-making.',
      benefits: [
        'Predictive analytics and forecasting',
        'Natural language processing solutions',
        'Computer vision implementations',
        'Machine learning model development'
      ]
    },
    {
      title: 'Intelligent Process Automation',
      badge: 'Featured',
      icon: <Cpu className="h-10 w-10 text-primary" />,
      description: 'Streamline workflows and reduce manual workloads with our automation solutions that combine RPA, AI, and workflow orchestration.',
      benefits: [
        'Robotic Process Automation (RPA)',
        'Business process optimization',
        'Workflow management systems',
        'Integration with existing systems'
      ]
    },
    {
      title: 'AI-Powered Risk Applications',
      badge: 'Enterprise',
      icon: <Database className="h-10 w-10 text-primary" />,
      description: 'Identify potential risks in your business with our AI-powered risk assessment and management solutions.',
      benefits: [
        'Risk identification and assessment',
        'Fraud detection and prevention',
        'Compliance monitoring',
        'Real-time risk analytics'
      ]
    },
    {
      title: 'Smart Mobile Applications',
      badge: 'Trending',
      icon: <MonitorSmartphone className="h-10 w-10 text-primary" />,
      description: 'Create intuitive mobile experiences that delight users and drive engagement with our custom app development services.',
      benefits: [
        'Cross-platform mobile development',
        'Progressive web applications',
        'Native iOS and Android apps',
        'Mobile UX/UI design'
      ]
    },
    {
      title: 'AR Solutions & Virtual Assistance',
      badge: 'New',
      icon: <Code className="h-10 w-10 text-primary" />,
      description: 'Transform customer experiences and improve operational efficiency with AR and virtual assistance technologies.',
      benefits: [
        'Augmented reality applications',
        'Virtual product demonstrations',
        'Interactive training solutions',
        'AR-powered remote assistance'
      ]
    },
    {
      title: 'AI-Driven Data Analytics',
      badge: 'Advanced',
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      description: 'Unlock the full potential of your data with our advanced analytics solutions powered by artificial intelligence.',
      benefits: [
        'Data visualization and dashboards',
        'Predictive and prescriptive analytics',
        'Big data processing and analysis',
        'Custom reporting solutions'
      ]
    }
  ];

  // AI Solutions delivery process steps
  const aiSolutionsSteps = [
    { 
      id: '01', 
      title: 'AI Requirements Analysis',
      time: '1 week',
      icon: <BrainCircuit className="h-6 w-6" />,
      description: 'Understanding your business goals and technical requirements'
    },
    { 
      id: '02', 
      title: 'Design & Prototyping',
      time: '2-3 weeks',
      icon: <Code className="h-6 w-6" />,
      description: 'Creating stunning visual designs and interactive prototypes'
    },
    { 
      id: '03', 
      title: 'Development & Testing',
      time: '4-6 weeks',
      icon: <Cpu className="h-6 w-6" />,
      description: 'Building your website with modern technologies and thorough testing'
    },
    { 
      id: '04', 
      title: 'Launch & Optimization',
      time: '1 week',
      icon: <Zap className="h-6 w-6" />,
      description: 'Deploying your website and optimizing for performance'
    }
  ];

  // Web Development delivery process steps
  const webDevelopmentSteps = [
    { 
      id: '01', 
      title: 'Discovery & Planning',
      time: '1 week',
      icon: <BrainCircuit className="h-6 w-6" />,
      description: 'Understanding your business goals and technical requirements'
    },
    { 
      id: '02', 
      title: 'Design & Prototyping',
      time: '2-3 weeks',
      icon: <Code className="h-6 w-6" />,
      description: 'Creating stunning visual designs and interactive prototypes'
    },
    { 
      id: '03', 
      title: 'Development & Testing',
      time: '4-6 weeks',
      icon: <Cpu className="h-6 w-6" />,
      description: 'Building your website with modern technologies and thorough testing'
    },
    { 
      id: '04', 
      title: 'Launch & Optimization',
      time: '1 week',
      icon: <Zap className="h-6 w-6" />,
      description: 'Deploying your website and optimizing for performance'
    }
  ];

  // Mobile Apps delivery process steps
  const mobileAppsSteps = [
    { 
      id: '01', 
      title: 'App Strategy & Planning',
      time: '1-2 weeks',
      icon: <BrainCircuit className="h-6 w-6" />,
      description: 'Defining app features, user experience, and technical approach'
    },
    { 
      id: '02', 
      title: 'UI/UX Design',
      time: '2-3 weeks',
      icon: <Code className="h-6 w-6" />,
      description: 'Creating intuitive and engaging mobile app interfaces'
    },
    { 
      id: '03', 
      title: 'App Development',
      time: '6-8 weeks',
      icon: <Cpu className="h-6 w-6" />,
      description: 'Building native or cross-platform mobile applications'
    },
    { 
      id: '04', 
      title: 'App Store Launch',
      time: '1-2 weeks',
      icon: <Zap className="h-6 w-6" />,
      description: 'Publishing your app to app stores and ongoing support'
    }
  ];

  // State for active delivery process tab
  const [activeDeliveryTab, setActiveDeliveryTab] = useState("ai");

  const requirements = [
    'Process Mapping',
    'Technical Review',
    'User Research',
    'Feasibility Study',
    'Technical Specifications'
  ];

  const testimonials = [
    {
      text: 'WebStitch completely transformed the way our business operates with their AI solution. The results have far exceeded our expectations and the ROI has been incredible.',
      author: 'David Foster',
      position: 'CTO, DigitalEdge Solutions'
    },
    {
      text: 'The automation system implemented by WebStitch has increased our productivity by over 40%. Their team was professional, knowledgeable, and delivered on time.',
      author: 'Maria Wright',
      position: 'Operations Director, Nexus Technologies'
    },
    {
      text: 'WebStitch\'s AI-powered analytics platform has given us insights we never thought possible. Their team truly understands how to leverage data for business growth.',
      author: 'John Patel',
      position: 'CEO, DataSmart Analytics'
    }
  ];

  return (
    <div className="min-h-screen relative text-[#e3e8f0] overflow-x-hidden">
      <StarVideoBackground />
      <Navigation />
      <main className="pt-24 pb-16 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center min-h-[60vh] px-4">
          <motion.div
            className="relative max-w-3xl w-full mx-auto rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl px-8 py-16 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] bg-clip-text text-transparent drop-shadow-2xl mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="mt-2 text-lg text-[#a5b4fc]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
            >
              powered by Trinix Pvt Ltd
            </motion.p>
            <motion.p
              className="mt-6 text-xl md:text-2xl text-[#e3e8f0] max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }}
            >
              Comprehensive digital solutions to transform your business with cutting-edge technology and exceptional design.
            </motion.p>
          </motion.div>
        </section>

        {/* ...existing code... (timeline section removed) */}

        {/* Achievements Section (Stats) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col justify-between h-full bg-[#23263a] rounded-2xl shadow-xl border-none px-8 py-10 text-center dark:bg-[#23263a]" style={{minHeight:'260px'}}>
                  <div className="flex justify-center mb-6">{stat.icon}</div>
                  <div>
                    <div className="text-5xl font-extrabold text-white mb-2" style={{fontFamily:'inherit'}}>{stat.number}</div>
                    <div className="text-lg font-medium text-[#a5b4fc] mb-8" style={{fontFamily:'inherit'}}>{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Premium Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold mb-4 text-[#1a237e] drop-shadow-lg dark:text-white">Our Premium Services</h2>
              <p className="text-[#5c6bc0] dark:text-[#a5b4fc]">Comprehensive digital solutions designed to transform your business.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {premiumServices.map((service, index) => (
                <Reveal as="div" delay={index * 100} key={service.title}>
                  <Card className="bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-all h-full flex flex-col dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="p-2 bg-[#ede9fe] rounded-lg dark:bg-[#353a50]">{service.icon}</div>
                        <Badge variant="secondary" className="bg-[#7c3aed] text-white font-bold px-3 py-1 rounded-full shadow dark:bg-[#a78bfa]">{service.badge}</Badge>
                      </div>
                      <CardTitle className="mt-4 text-[#1a237e] font-bold dark:text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="mb-4 text-[#3f51b5] dark:text-[#a5b4fc]">{service.description}</p>
                      <div>
                        <h4 className="font-medium mb-2 text-[#1a237e] dark:text-white">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-2 text-[#3f51b5] dark:text-[#a5b4fc]">
                              <div className="w-1 h-1 bg-[#7c3aed] rounded-full dark:bg-[#a78bfa]"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white font-bold shadow-lg hover:from-[#7c3aed]/80 hover:to-[#6366f1]/80 transition dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1]">Get Started</Button>
                    </CardFooter>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Quote Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Get Your Custom Quote</h2>
              <p className="text-muted-foreground mt-2">Use our interactive calculator to get an instant estimate for your project</p>
            </div>

            <div className="bg-white/5 rounded-xl border border-neutral-200/10 p-6 md:p-10 dark:bg-[#23263a] dark:border-[#353a50]">
              <h3 className="text-xl font-semibold mb-6 dark:text-white">Interactive Pricing Calculator</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Inputs */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium">Select Service</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {premiumServices.map((service) => (
                          <SelectItem key={service.title} value={service.title}>{service.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium">Business Size</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                        <SelectItem value="small">Small Business (11-50 employees)</SelectItem>
                        <SelectItem value="medium">Medium Business (51-200 employees)</SelectItem>
                        <SelectItem value="enterprise">Enterprise (200+ employees)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium">Mobile App</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Not Required</SelectItem>
                        <SelectItem value="basic">Basic App</SelectItem>
                        <SelectItem value="advanced">Advanced App</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium">Additional Requirements</label>
                    <Textarea placeholder="Describe any specific requirements or features you need" />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium">Project Complexity</label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" className="w-full">Basic</Button>
                      <Button variant="secondary" className="w-full">Standard</Button>
                      <Button variant="outline" className="w-full">Advanced</Button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium">Timeline</label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" className="w-full">3 months</Button>
                      <Button variant="outline" className="w-full">6 months</Button>
                      <Button variant="secondary" className="w-full">12 months</Button>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Summary */}
                <div className="bg-primary/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold dark:text-white">Project Summary</h3>
                    <Button variant="ghost" size="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                    </Button>
                  </div>
                  
                    <div className="text-center my-6">
                      <p className="text-sm text-muted-foreground mb-1 dark:text-[#a5b4fc]">Select a service to continue</p>
                    </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm dark:text-[#a5b4fc]">Base Cost</span>
                      <span className="font-medium dark:text-white">₹70,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm dark:text-[#a5b4fc]">Additional Features</span>
                      <span className="font-medium dark:text-white">₹50,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm dark:text-[#a5b4fc]">Technical Maintenance</span>
                      <span className="font-medium dark:text-white">₹30,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm dark:text-[#a5b4fc]">User Testing</span>
                      <span className="font-medium dark:text-white">₹20,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm dark:text-[#a5b4fc]">Security Audit</span>
                      <span className="font-medium dark:text-white">₹15,000</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between font-semibold">
                      <span className="dark:text-white">Total Estimate</span>
                      <span className="dark:text-white">₹185,000</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 dark:text-[#a5b4fc]">This is an estimate. Contact us for a precise quote.</p>
                  </div>
                  
                  <Button className="w-full mt-6 dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1]">Get Full Quote</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Process */}
  <section className="py-16 bg-white/5 dark:bg-[#23263a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2 dark:text-white">How We Deliver Excellence</h2>
              <p className="text-muted-foreground dark:text-[#a5b4fc]">Our proven methodology ensures successful project delivery every time</p>
            </div>

            {/* Service type tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Button 
                variant={activeDeliveryTab === "ai" ? "default" : "outline"} 
                className={`flex items-center gap-2 min-w-[160px] ${activeDeliveryTab === "ai" ? "bg-neutral-800 hover:bg-neutral-700" : ""}`}
                onClick={() => setActiveDeliveryTab("ai")}
              >
                <BrainCircuit className="h-5 w-5" />
                AI Solutions
              </Button>
              <Button 
                variant={activeDeliveryTab === "web" ? "default" : "outline"} 
                className={`flex items-center gap-2 min-w-[160px] ${activeDeliveryTab === "web" ? "bg-neutral-800 hover:bg-neutral-700" : ""}`}
                onClick={() => setActiveDeliveryTab("web")}
              >
                <Globe2 className="h-5 w-5" />
                Web Development
              </Button>
              <Button 
                variant={activeDeliveryTab === "mobile" ? "default" : "outline"} 
                className={`flex items-center gap-2 min-w-[160px] ${activeDeliveryTab === "mobile" ? "bg-neutral-800 hover:bg-neutral-700" : ""}`}
                onClick={() => setActiveDeliveryTab("mobile")}
              >
                <MonitorSmartphone className="h-5 w-5" />
                Mobile Apps
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left column - process steps */}
              <div className="space-y-6">
                {activeDeliveryTab === "ai" && aiSolutionsSteps.map((step, index) => (
                  <Reveal key={step.id} delay={index * 100}>
                    <div className="flex gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-neutral-200/10 hover-elevate transition-all dark:bg-[#181a20] dark:hover:bg-[#23263a] dark:border-[#353a50]">
                      <div className="flex items-center justify-center h-9 w-9 shrink-0 rounded-full bg-neutral-900 text-white font-medium text-sm">
                        {step.id}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{step.title}</h3>
                          <div className="text-xs py-0.5 px-2 bg-neutral-800/40 rounded-full">{step.time}</div>
                        </div>
                        <p className="text-foreground/80 mt-1 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}

                {activeDeliveryTab === "web" && webDevelopmentSteps.map((step, index) => (
                  <Reveal key={step.id} delay={index * 100}>
                    <div className="flex gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-neutral-200/10 hover-elevate transition-all">
                      <div className="flex items-center justify-center h-9 w-9 shrink-0 rounded-full bg-neutral-900 text-white font-medium text-sm">
                        {step.id}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{step.title}</h3>
                          <div className="text-xs py-0.5 px-2 bg-neutral-800/40 rounded-full">{step.time}</div>
                        </div>
                        <p className="text-foreground/80 mt-1 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}

                {activeDeliveryTab === "mobile" && mobileAppsSteps.map((step, index) => (
                  <Reveal key={step.id} delay={index * 100}>
                    <div className="flex gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-neutral-200/10 hover-elevate transition-all">
                      <div className="flex items-center justify-center h-9 w-9 shrink-0 rounded-full bg-neutral-900 text-white font-medium text-sm">
                        {step.id}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{step.title}</h3>
                          <div className="text-xs py-0.5 px-2 bg-neutral-800/40 rounded-full">{step.time}</div>
                        </div>
                        <p className="text-foreground/80 mt-1 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Right column - requirements analysis */}
              <div className="bg-white/5 rounded-xl border border-neutral-200/10 p-6 dark:bg-[#23263a] dark:border-[#353a50]">
                {activeDeliveryTab === "ai" && (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-neutral-800/40 p-3 rounded-full">
                        <BrainCircuit className="h-8 w-8 text-neutral-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Discovery & Planning</h3>
                        <p className="text-foreground/80 text-sm">Understanding your business goals and technical requirements</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {['Requirements Document', 'Site Architecture', 'Technology Stack', 'Project Timeline'].map((req, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <svg className="text-neutral-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="currentColor"/>
                        </svg>
                        <span className="text-foreground/80">{req}</span>
                      </div>
                    ))}
                    </div>

                    <div className="bg-background/20 p-4 rounded-lg mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Duration: 1 week</span>
                        <span className="text-xs bg-neutral-800/40 py-0.5 px-2 rounded-full">Step 1 of 4</span>
                      </div>
                    </div>

                    <div className="flex justify-between gap-3">
                      <Button variant="outline" disabled className="flex-1">Previous</Button>
                      <Button className="flex-1">Next →</Button>
                    </div>
                  </>
                )}

                {activeDeliveryTab === "web" && (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-neutral-800/40 p-3 rounded-full">
                        <Globe2 className="h-8 w-8 text-neutral-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Discovery & Planning</h3>
                        <p className="text-foreground/80 text-sm">Understanding your business goals and technical requirements</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {['Requirements Document', 'Site Architecture', 'Technology Stack', 'Project Timeline'].map((req, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <svg className="text-neutral-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="currentColor"/>
                          </svg>
                          <span className="text-foreground/80">{req}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-background/20 p-4 rounded-lg mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Duration: 1 week</span>
                        <span className="text-xs bg-neutral-800/40 py-0.5 px-2 rounded-full">Step 1 of 4</span>
                      </div>
                    </div>

                    <div className="flex justify-between gap-3">
                      <Button variant="outline" disabled className="flex-1">Previous</Button>
                      <Button className="flex-1">Next →</Button>
                    </div>
                  </>
                )}

                {activeDeliveryTab === "mobile" && (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-neutral-800/40 p-3 rounded-full">
                        <MonitorSmartphone className="h-8 w-8 text-neutral-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">App Strategy & Planning</h3>
                        <p className="text-foreground/80 text-sm">Defining app features, user experience, and technical approach</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {['App Strategy', 'Feature Specifications', 'User Journey Maps', 'Technical Architecture'].map((req, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <svg className="text-neutral-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="currentColor"/>
                          </svg>
                          <span className="text-foreground/80">{req}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-background/20 p-4 rounded-lg mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Duration: 1-2 weeks</span>
                        <span className="text-xs bg-neutral-800/40 py-0.5 px-2 rounded-full">Step 1 of 4</span>
                      </div>
                    </div>

                    <div className="flex justify-between gap-3">
                      <Button variant="outline" disabled className="flex-1">Previous</Button>
                      <Button className="flex-1">Next →</Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Process Works */}
  <section className="py-16 bg-neutral-700 dark:bg-[#181a20]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12 text-white">
              <h2 className="text-3xl font-bold mb-2 dark:text-white">Why Our Process Works</h2>
              <p className="opacity-80 dark:text-[#a5b4fc]">Our structured approach ensures consistent delivery and exceptional results</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Reveal>
                <div className="text-center p-6">
                  <div className="bg-white/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 19c0-4.2-2.8-7-7-7M5 19c0-8.4 5.6-14 14-14M5 19h14" /></svg>
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">Initial Consultation</h3>
                  <p className="text-white/80">Every step begins with your business objectives</p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="text-center p-6">
                  <div className="bg-white/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M17 6.1H3" /><path d="M21 12.1H3" /><path d="M15.1 18H3" /></svg>
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">Collaboration</h3>
                  <p className="text-white/80">Continuous communication and feedback loops</p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="text-center p-6">
                  <div className="bg-white/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m8 3 4 8 5-5 5 15H2L8 3Z" /></svg>
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">Measurable Results</h3>
                  <p className="text-white/80">Quantified outcomes to track success</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Testimonials */}
  <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
              <p className="text-muted-foreground">Don't just take our word for it. Here's what our clients have to say about our services.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Reveal key={index} delay={index * 100}>
                  <Card className="bg-white/5 hover:bg-white/10 border-neutral-200/10 h-full flex flex-col dark:bg-[#23263a] dark:hover:bg-[#353a50] dark:border-[#353a50]">
                    <CardContent className="pt-6 flex-grow">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-foreground/80 dark:text-[#a5b4fc]">{testimonial.text}</p>
                    </CardContent>
                    <CardFooter className="border-t border-neutral-200/10 pt-4 dark:border-[#353a50]">
                      <div>
                        <div className="font-medium dark:text-white">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground dark:text-[#a5b4fc]">{testimonial.position}</div>
                      </div>
                    </CardFooter>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
  <section className="py-16 bg-neutral-700 dark:bg-[#181a20]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4 dark:text-white">Ready to Transform Your Business?</h2>
              <p className="text-white/80 mb-8 dark:text-[#a5b4fc]">Let's create your digital future with innovative solutions for your unique needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" className="bg-white text-neutral-900 hover:bg-white/90 dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1] dark:text-white dark:hover:bg-[#7c3aed]/80">Start Your Project</Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 dark:border-[#a78bfa] dark:text-[#a78bfa] dark:hover:bg-[#23263a]/80">View Our Work</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}