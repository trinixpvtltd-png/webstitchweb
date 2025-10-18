import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Blog from "@/pages/blog";
import Portfolio from "@/pages/portfolio";
//import Careers from "@/pages/careers";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import LoginPage from '@/pages/login';
import AdminDashboard from '@/pages/admin_dashboard';

function Router() {
  return (
    <Switch>
    <Route path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/services" component={Services} />
    <Route path="/portfolio" component={Portfolio} />
   {/* <Route path="/careers" component={Careers} /> */}
    <Route path="/blog" component={Blog} />
    <Route path="/contact" component={Contact} />
    <Route path="/login" component={LoginPage} />
    <Route path="/admin_dashboard" component={AdminDashboard} />
    <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
