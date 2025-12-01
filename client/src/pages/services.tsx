import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
// import StarVideoBackground from "@/components/StarVideoBackground";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  BrainCircuit,
  Cpu,
  Database,
  Code,
  BarChart3,
  Globe2,
  MonitorSmartphone,
  Zap,
  Heart,
  Sparkles,
  BadgeCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import { getServices } from "../lib/Api";
import Astro3D from "../components/Astro3D";

const portfolioUrl =
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_PORTFOLIO_URL) ||
  (typeof process !== "undefined" && process.env && process.env.VITE_PORTFOLIO_URL) ||
  "http://webstitchnextjs.s3-website.ap-south-1.amazonaws.com";

export default function Services() {
  // State for services data
  const [services, setServices] = useState<any[]>([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [servicesError, setServicesError] = useState<string | null>(null);

  // Fetch services from backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setServicesLoading(true);
        const servicesData = await getServices();
        setServices(servicesData);
      } catch (error: any) {
        setServicesError(error.message || "Failed to fetch services");
      } finally {
        setServicesLoading(false);
      }
    };

    fetchServices();
  }, []);

  // AI Solutions delivery process steps
  const aiSolutionsSteps = [
    {
      id: "01",
      title: "AI Requirements Analysis",
      time: "1 week",
      icon: <BrainCircuit className="h-6 w-6" />,
      description:
        "Understanding your business goals and technical requirements",
    },
    {
      id: "02",
      title: "Design & Prototyping",
      time: "2-3 weeks",
      icon: <Code className="h-6 w-6" />,
      description:
        "Creating stunning visual designs and interactive prototypes",
    },
    {
      id: "03",
      title: "Development & Testing",
      time: "4-6 weeks",
      icon: <Cpu className="h-6 w-6" />,
      description:
        "Building your website with modern technologies and thorough testing",
    },
    {
      id: "04",
      title: "Launch & Optimization",
      time: "1 week",
      icon: <Zap className="h-6 w-6" />,
      description: "Deploying your website and optimizing for performance",
    },
  ];

  // Web Development delivery process steps
  const webDevelopmentSteps = [
    {
      id: "01",
      title: "Discovery & Planning",
      time: "1 week",
      icon: <BrainCircuit className="h-6 w-6" />,
      description:
        "Understanding your business goals and technical requirements",
    },
    {
      id: "02",
      title: "Design & Prototyping",
      time: "2-3 weeks",
      icon: <Code className="h-6 w-6" />,
      description:
        "Creating stunning visual designs and interactive prototypes",
    },
    {
      id: "03",
      title: "Development & Testing",
      time: "4-6 weeks",
      icon: <Cpu className="h-6 w-6" />,
      description:
        "Building your website with modern technologies and thorough testing",
    },
    {
      id: "04",
      title: "Launch & Optimization",
      time: "1 week",
      icon: <Zap className="h-6 w-6" />,
      description: "Deploying your website and optimizing for performance",
    },
  ];

  // Mobile Apps delivery process steps
  const mobileAppsSteps = [
    {
      id: "01",
      title: "App Strategy & Planning",
      time: "1-2 weeks",
      icon: <BrainCircuit className="h-6 w-6" />,
      description:
        "Defining app features, user experience, and technical approach",
    },
    {
      id: "02",
      title: "UI/UX Design",
      time: "2-3 weeks",
      icon: <Code className="h-6 w-6" />,
      description: "Creating intuitive and engaging mobile app interfaces",
    },
    {
      id: "03",
      title: "App Development",
      time: "6-8 weeks",
      icon: <Cpu className="h-6 w-6" />,
      description: "Building native or cross-platform mobile applications",
    },
    {
      id: "04",
      title: "App Store Launch",
      time: "1-2 weeks",
      icon: <Zap className="h-6 w-6" />,
      description: "Publishing your app to app stores and ongoing support",
    },
  ];

  // State for active delivery process tab
  const [activeDeliveryTab, setActiveDeliveryTab] = useState("ai");

  const requirements = [
    "Process Mapping",
    "Technical Review",
    "User Research",
    "Feasibility Study",
    "Technical Specifications",
  ];

  const testimonials = [
    {
      text: "WebStitch completely transformed the way our business operates with their AI solution. The results have far exceeded our expectations and the ROI has been incredible.",
      author: "David Foster",
      position: "CTO, DigitalEdge Solutions",
    },
    {
      text: "The automation system implemented by WebStitch has increased our productivity by over 40%. Their team was professional, knowledgeable, and delivered on time.",
      author: "Maria Wright",
      position: "Operations Director, Nexus Technologies",
    },
    {
      text: "WebStitch's AI-powered analytics platform has given us insights we never thought possible. Their team truly understands how to leverage data for business growth.",
      author: "John Patel",
      position: "CEO, DataSmart Analytics",
    },
  ];

  // Quote calculator state
  const [selectedService, setSelectedService] = useState("");
  const [businessSize, setBusinessSize] = useState("");
  const [mobileApp, setMobileApp] = useState("");
  const [requirementsText, setRequirementsText] = useState("");
  const [complexity, setComplexity] = useState("Standard");
  const [timeline, setTimeline] = useState("12 months");
  const [quote, setQuote] = useState(185000);

  // Quote calculation logic
  function calculateQuote() {
    let base = 70000;
    let features = 50000;
    let maintenance = 30000;
    let testing = 20000;
    let security = 15000;

    // Service type modifier
    if (selectedService === "AI Solutions & Machine Learning") base += 20000;
    if (selectedService === "AI-Driven Data Analytics") base += 15000;

    // Business size modifier
    if (businessSize === "startup") base -= 10000;
    if (businessSize === "enterprise") base += 20000;

    // Mobile app modifier
    if (mobileApp === "basic") features += 20000;
    if (mobileApp === "advanced") features += 40000;

    // Complexity modifier
    if (complexity === "Basic") base -= 10000;
    if (complexity === "Advanced") base += 20000;

    // Timeline modifier
    if (timeline === "3 months") base += 10000;
    if (timeline === "6 months") base += 5000;

    return base + features + maintenance + testing + security;
  }

  // Update quote when inputs change
  useEffect(() => {
    setQuote(calculateQuote());
  }, [selectedService, businessSize, mobileApp, complexity, timeline]);
  return (
    <div className="min-h-screen relative text-[#e3e8f0] overflow-x-hidden">
      <Astro3D />
      {/* <StarVideoBackground /> */}
      <Navigation />
      <main className="pt-24 pb-16 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center min-h-[40vh] px-4">
          <motion.div
            className="relative max-w-3xl w-full mx-auto text-center space-y-4"
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] bg-clip-text text-transparent drop-shadow-2xl mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="mt-2 text-lg text-[#a5b4fc]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            >
              powered by Trinix Pvt Ltd
            </motion.p>
            <motion.p
              className="mt-6 text-xl md:text-2xl text-[#e3e8f0] max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            >
              Comprehensive digital solutions to transform your business with
              cutting-edge technology and exceptional design.
            </motion.p>
          </motion.div>
        </section>
        {/* Premium Services */}
        <section className="py-16">
          <div className="px-4 py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold mb-4 text-white">
                  Our Premium Services
                </h2>
                <p className="text-white/80">
                  Comprehensive digital solutions designed to transform your
                  business.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesLoading ? (
                  <div className="col-span-full text-center py-8">
                    <p className="text-[#a5b4fc]">Loading services...</p>
                  </div>
                ) : servicesError ? (
                  <div className="col-span-full text-center py-8">
                    <p className="text-red-500">{servicesError}</p>
                  </div>
                ) : (
                  services.map((service, index) => (
                    <Reveal as="div" delay={index * 100} key={service.title}>
                      <Card className="transition-all h-full flex flex-col text-white bg-white/10 backdrop-blur-md border-white/10">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="p-3">
                              {service.icon ? (
                                <img
                                  src={service.icon}
                                  alt={service.title}
                                  className="w-8 h-8"
                                />
                              ) : (
                                <div className="w-8 h-8 flex items-center justify-center">
                                  {index === 0 ? (
                                    <BrainCircuit className="w-6 h-6" />
                                  ) : index === 1 ? (
                                    <Cpu className="w-6 h-6" />
                                  ) : index === 2 ? (
                                    <Database className="w-6 h-6" />
                                  ) : index === 3 ? (
                                    <MonitorSmartphone className="w-6 h-6" />
                                  ) : index === 4 ? (
                                    <Code className="w-6 h-6" />
                                  ) : (
                                    <BarChart3 className="w-6 h-6" />
                                  )}
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col gap-2 items-end">
                              {service.tag && service.tag.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                  {service.tag
                                    .slice(0, 2)
                                    .map((tag: string, tagIndex: number) => (
                                      <Badge
                                        key={tagIndex}
                                        variant="outline"
                                        className="text-xs text-white"
                                      >
                                        {tag}
                                      </Badge>
                                    ))}
                                </div>
                              )}
                              {service.isPopular && (
                                <Badge
                                  variant="secondary"
                                  className="bg-white/20 text-white font-bold px-3 py-1 rounded-full shadow"
                                >
                                  Popular
                                </Badge>
                              )}
                            </div>
                          </div>
                          <CardTitle className="mt-4 text-white font-bold">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="mb-4 text-white/80">
                            {service.description}
                          </p>
                          <div>
                            <h4 className="font-medium mb-2 text-white">
                              Key Benefits:
                            </h4>
                            <ul className="space-y-2">
                              {service.keyBenefits?.map(
                                (benefit: string, i: number) => (
                                  <li
                                    key={i}
                                    className="flex items-center gap-2 text-white/80"
                                  >
                                    <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
                                    {benefit}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            className="w-full bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white font-bold shadow-lg hover:from-[#7c3aed]/80 hover:to-[#6366f1]/80 transition dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1]"
                            onClick={() => (window.location.href = "/contact")}
                          >
                            {service.ctaText || "Get Started"}
                          </Button>
                        </CardFooter>
                      </Card>
                    </Reveal>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
        {/* Mid-page CTA */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="px-8 py-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Build with WebStitch</h3>
              <p className="text-white/80 max-w-3xl mx-auto mb-8">
                From AI automations to full product builds, we design and ship software that keeps your business ahead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-neutral-900 hover:bg-white/90"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Start a project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                                  className="border-white text-white hover:bg-white/10"
                                  onClick={() => window.open(portfolioUrl, "_blank")}
                                >
                                  See our work
                                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Custom Quote Section */}
        <section className="py-16">
          <div className="px-4 py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white">Get Your Custom Quote</h2>
                <p className="text-white/80 mt-2">
                  Use our interactive calculator to get an instant estimate for
                  your project
                </p>
              </div>

              <div className="p-0 text-white">
                <h3 className="text-xl font-semibold mb-6">
                  Interactive Pricing Calculator
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Inputs */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Select Service
                      </label>
                      <Select
                        value={selectedService}
                        onValueChange={setSelectedService}
                      >
                        <SelectTrigger className="bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-[#7c3aed]">
                          <SelectValue
                            placeholder="Choose a service"
                            className="text-white"
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-900/90 text-white backdrop-blur-xl border border-white/10">
                          {services.map((service) => (
                            <SelectItem
                              key={service.title}
                              value={service.title}
                              className="hover:bg-white/10 focus:bg-white/10"
                            >
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Business Size
                      </label>
                      <Select
                        value={businessSize}
                        onValueChange={setBusinessSize}
                      >
                        <SelectTrigger className="bg-white text-black border border-white focus:ring-2 focus:ring-[#7c3aed]">
                          <SelectValue
                            placeholder="Select business size"
                            className="text-black"
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black">
                          <SelectItem
                            value="startup"
                            className="bg-white text-black hover:bg-[#ede9fe]"
                          >
                            Startup (1-10 employees)
                          </SelectItem>
                          <SelectItem
                            value="small"
                            className="bg-white text-black hover:bg-[#ede9fe]"
                          >
                            Small Business (11-50 employees)
                          </SelectItem>
                          <SelectItem
                            value="medium"
                            className="bg-white text-black hover:bg-[#ede9fe]"
                          >
                            Medium Business (51-200 employees)
                          </SelectItem>
                          <SelectItem
                            value="enterprise"
                            className="bg-white text-black hover:bg-[#ede9fe]"
                          >
                            Enterprise (200+ employees)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Mobile App
                      </label>
                      <Select value={mobileApp} onValueChange={setMobileApp}>
                        <SelectTrigger className="bg-white text-black border border-white focus:ring-2 focus:ring-[#7c3aed]">
                          <SelectValue
                            placeholder="Select option"
                            className="text-black"
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black">
                          <SelectItem
                            value="none"
                            className="bg-white text-black hover:bg-[#ede9fe]"
                          >
                            Not Required
                          </SelectItem>
                          <SelectItem
                            value="basic"
                            className="bg-white text-black hover:bg-[#ede9fe]"
                          >
                            Basic App
                          </SelectItem>
                          <SelectItem
                            value="advanced"
                            className="bg-white text-black hover:bg-[#ede9fe]"
                          >
                            Advanced App
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Additional Requirements
                      </label>
                      <Textarea
                        className="bg-white text-black"
                        value={requirementsText}
                        onChange={(e) => setRequirementsText(e.target.value)}
                        placeholder="Describe any specific requirements or features you need"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Project Complexity
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          variant={
                            complexity === "Basic" ? "secondary" : "outline"
                          }
                          className="w-full"
                          onClick={() => setComplexity("Basic")}
                        >
                          Basic
                        </Button>
                        <Button
                          variant={
                            complexity === "Standard" ? "secondary" : "outline"
                          }
                          className="w-full"
                          onClick={() => setComplexity("Standard")}
                        >
                          Standard
                        </Button>
                        <Button
                          variant={
                            complexity === "Advanced" ? "secondary" : "outline"
                          }
                          className="w-full"
                          onClick={() => setComplexity("Advanced")}
                        >
                          Advanced
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Timeline
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          variant={
                            timeline === "3 months" ? "secondary" : "outline"
                          }
                          className="w-full"
                          onClick={() => setTimeline("3 months")}
                        >
                          3 months
                        </Button>
                        <Button
                          variant={
                            timeline === "6 months" ? "secondary" : "outline"
                          }
                          className="w-full"
                          onClick={() => setTimeline("6 months")}
                        >
                          6 months
                        </Button>
                        <Button
                          variant={
                            timeline === "12 months" ? "secondary" : "outline"
                          }
                          className="w-full"
                          onClick={() => setTimeline("12 months")}
                        >
                          12 months
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Summary */}
                  <div className="bg-primary/5 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold dark:text-white">
                        Project Summary
                      </h3>
                    </div>
                    <div className="text-center my-6">
                      <p className="text-sm text-muted-foreground mb-1 dark:text-[#a5b4fc]">
                        {selectedService
                          ? selectedService
                          : "Select a service to continue"}
                      </p>
                    </div>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-[#a5b4fc]">
                          Business Size
                        </span>
                        <span className="font-medium dark:text-white">
                          {businessSize || "-"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-[#a5b4fc]">
                          Mobile App
                        </span>
                        <span className="font-medium dark:text-white">
                          {mobileApp || "-"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-[#a5b4fc]">
                          Complexity
                        </span>
                        <span className="font-medium dark:text-white">
                          {complexity}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-[#a5b4fc]">
                          Timeline
                        </span>
                        <span className="font-medium dark:text-white">
                          {timeline}
                        </span>
                      </div>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex items-center justify-between font-semibold">
                        <span className="dark:text-white">Total Estimate</span>
                        <span className="dark:text-white">
                          ₹{quote.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 dark:text-[#a5b4fc]">
                        This is an estimate. Contact us for a precise quote.
                      </p>
                    </div>
                    <Button
                      className="w-full mt-6 dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1]"
                      onClick={() =>
                        alert(
                          `Your estimated quote is ₹${quote.toLocaleString()}`
                        )
                      }
                    >
                      Get Full Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Delivery Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2 dark:text-white">
                How We Deliver Excellence
              </h2>
              <p className="text-muted-foreground dark:text-[#a5b4fc]">
                Our proven methodology ensures successful project delivery every time.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Button
                variant={activeDeliveryTab === "ai" ? "default" : "outline"}
                onClick={() => setActiveDeliveryTab("ai")}
              >
                AI Solutions
              </Button>
              <Button
                variant={activeDeliveryTab === "web" ? "default" : "outline"}
                onClick={() => setActiveDeliveryTab("web")}
              >
                Web Development
              </Button>
              <Button
                variant={activeDeliveryTab === "mobile" ? "default" : "outline"}
                onClick={() => setActiveDeliveryTab("mobile")}
              >
                Mobile Apps
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {(activeDeliveryTab === "ai"
                  ? aiSolutionsSteps
                  : activeDeliveryTab === "web"
                  ? webDevelopmentSteps
                  : mobileAppsSteps
                ).map((step, index) => (
                  <Reveal key={step.id} delay={index * 100}>
                    <div className="flex gap-4 p-4 transition-all">
                      <div className="flex items-center justify-center h-9 w-9 shrink-0 rounded-full bg-neutral-900 text-white font-medium text-sm">
                        {step.id}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{step.title}</h3>
                          <div className="text-xs py-0.5 px-2 bg-neutral-800/40 rounded-full">
                            {step.time}
                          </div>
                        </div>
                        <p className="text-foreground/80 mt-1 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="p-0">
                <h3 className="text-lg font-semibold mb-4">Discovery & Planning</h3>
                <p className="text-foreground/80 text-sm mb-4">
                  Understanding your business goals and technical requirements.
                </p>
                <div className="space-y-2 mb-4">
                  {["Requirements Document", "Architecture", "Technology Stack", "Project Timeline"].map((req) => (
                    <div key={req} className="flex items-center gap-2 text-foreground/80 text-sm">
                      <span className="w-2 h-2 rounded-full bg-neutral-500" />
                      {req}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-sm">
                  <span>Duration: 1-2 weeks</span>
                  <span className="bg-neutral-800/40 py-0.5 px-2 rounded-full">Step 1 of 4</span>
                </div>
                <div className="flex justify-between gap-3 mt-4">
                  <Button variant="outline" disabled className="flex-1">
                    Previous
                  </Button>
                  <Button className="flex-1">Next</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br /> <br />
        {/* Why Our Process Works */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12 text-white">
              <h2 className="text-3xl font-bold mb-2 dark:text-white">
                Why Our Process Works
              </h2>
              <p className="opacity-80 dark:text-[#a5b4fc]">
                Our structured approach ensures consistent delivery and
                exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Reveal>
                <div className="text-center p-0">
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M12 19c0-4.2-2.8-7-7-7M5 19c0-8.4 5.6-14 14-14M5 19h14" />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">
                    Initial Consultation
                  </h3>
                  <p className="text-white/80">
                    Every step begins with your business objectives
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="text-center p-0">
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M17 6.1H3" />
                      <path d="M21 12.1H3" />
                      <path d="M15.1 18H3" />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">
                    Collaboration
                  </h3>
                  <p className="text-white/80">
                    Continuous communication and feedback loops
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="text-center p-0">
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="m8 3 4 8 5-5 5 15H2L8 3Z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">
                    Measurable Results
                  </h3>
                  <p className="text-white/80">
                    Quantified outcomes to track success
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        {/* Testimonials removed */}
      </main>
      <Footer />
    </div>
  );
}
