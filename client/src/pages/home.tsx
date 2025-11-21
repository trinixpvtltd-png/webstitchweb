// import Navigation from "@/components/Navigation";
// import FuturisticThreeBackground from "../components/FuturisticThreeBackground";
// import HeroSection from "@/components/HeroSection";
// import StatsSection from "@/components/StatsSection";
// import ServicesSection from "@/components/ServicesSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import InsightsSection from "@/components/InsightsSection";
// import FAQSection from "@/components/FAQSection";
// import CTASection from "@/components/CTASection";
// import Footer from "@/components/Footer";
// import { Shield, Zap, LineChart } from "lucide-react";
// import Scene3D from "../components/Scene3D";
// // Use public folder paths for images
// const img1 = "/technology_business__1ccc13d3.jpg";
// const img2 = "/technology_business__86480d1f.jpg";
// const img3 = "/technology_business__efabd85e.jpg";

// export default function Home() {
//   const features = [
//     {
//       title: "Automations that scale",
//       description: "Cut manual ops by up to 85%.",
//       icon: <Zap className="w-5 h-5" />,
//       imageSrc: img1,
//     },
//     {
//       title: "Enterprise-grade security",
//       description: "SOC2-ready workflows and audit trails.",
//       icon: <Shield className="w-5 h-5" />,
//       imageSrc: img2,
//     },
//     {
//       title: "Weeks to value",
//       description: "Deploy in days, not quarters.",
//       icon: <LineChart className="w-5 h-5" />,
//       imageSrc: img3,
//     },
//   ];
//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       <FuturisticThreeBackground />
//       <div className="relative z-10">
//         <Navigation />
//         <main>
//           <HeroSection />
//           <StatsSection />
//           <ServicesSection />
//           <TestimonialsSection />
//           <InsightsSection />
//           <FAQSection />
//           <CTASection />
//         </main>
//         <Footer />
//       </div>
//     </div>
//   );
// }

//ANIMATION

// import Navigation from "@/components/Navigation";
// // import FuturisticThreeBackground from "../components/FuturisticThreeBackground"; // ← REMOVE THIS
// import HeroSection from "@/components/HeroSection";
// import StatsSection from "@/components/StatsSection";
// import ServicesSection from "@/components/ServicesSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import InsightsSection from "@/components/InsightsSection";
// import FAQSection from "@/components/FAQSection";
// import CTASection from "@/components/CTASection";
// import Footer from "@/components/Footer";
// import { Shield, Zap, LineChart } from "lucide-react";
// import Scene3D from "../components/Scene3D";

// const img1 = "/technology_business__1ccc13d3.jpg";
// const img2 = "/technology_business__86480d1f.jpg";
// const img3 = "/technology_business__efabd85e.jpg";

// export default function Home() {
//   const features = [
//     {
//       title: "Automations that scale",
//       description: "Cut manual ops by up to 85%.",
//       icon: <Zap className="w-5 h-5" />,
//       imageSrc: img1,
//     },
//     {
//       title: "Enterprise-grade security",
//       description: "SOC2-ready workflows and audit trails.",
//       icon: <Shield className="w-5 h-5" />,
//       imageSrc: img2,
//     },
//     {
//       title: "Weeks to value",
//       description: "Deploy in days, not quarters.",
//       icon: <LineChart className="w-5 h-5" />,
//       imageSrc: img3,
//     },
//   ];

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       <Scene3D />
//       <div className="relative z-10">
//         <Navigation />
//         <main>
//           <HeroSection />
//           <StatsSection />
//           <ServicesSection />
//           <TestimonialsSection />
//           <InsightsSection />
//           <FAQSection />
//           <CTASection />
//         </main>
//         <Footer />
//       </div>
//     </div>
//   );
// }

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsSection from "@/components/InsightsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Scene3D from "../components/Scene3D";
import Universe3D from "@/components/Universe3D";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Universe3D />
      </div>

      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <StatsSection />
          <ServicesSection />
          <TestimonialsSection />
          <InsightsSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
