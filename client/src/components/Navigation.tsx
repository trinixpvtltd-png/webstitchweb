//navigation.tsx
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check login state from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("userRole");
    setIsLoggedIn(!!token);
    setUserRole(role);
    const handleStorage = () => {
      const newToken = localStorage.getItem("token");
      const newRole = localStorage.getItem("userRole");
      setIsLoggedIn(!!newToken);
      setUserRole(newRole);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    setUserRole(null);
    window.location.href = "/home";
  };

  const servicesData = {
    ai: [
      "Intelligent Process Automations",
      "AI Anaylysis of Data",
      "Smart Devices",
      "Solutions by Ai",
    ],
    seo: ["Ecommerce SEO", "Technical SEO"],
    paidAds: ["Google Ads", "Meta Ads"],
    other: ["Web Development", "Social Media Marketing", "Graphic Designing"],
  };

  // Portfolio URL from env (Vite). Falls back to local route so app doesn't crash when not set.
  const portfolioUrl =
    (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_PORTFOLIO_URL) ||
    (typeof process !== "undefined" && process.env && process.env.VITE_PORTFOLIO_URL) ||
    "http://webstitchnextjs.s3-website.ap-south-1.amazonaws.com";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div
            className="text-xl font-bold tracking-tight"
            data-testid="text-logo"
          >
            WebStitch
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/home"
              className="text-sm font-bold hover-elevate px-3 py-1 rounded-md transition-colors"
              data-testid="link-home"
            >
              Home
            </a>

            <div
              className="relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <a
                href="/services"
                className="text-sm font-bold hover-elevate px-3 py-1 rounded-md transition-colors flex items-center gap-1"
                data-testid="link-services"
              >
                Services
                <ChevronDown className="w-3 h-3" />
              </a>

              {showServicesDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-background border border-border rounded-lg shadow-2xl p-6 grid grid-cols-3 gap-6 min-w-[800px]">
                  {/* Marketing Services */}
                  <div>
                    <h3 className="font-semibold text-sm mb-3 text-foreground">
                      Artificial Intelligence
                    </h3>
                    <ul className="space-y-2">
                      {servicesData.ai.map((service, index) => (
                        <li key={index}>
                          <a
                            href="/services"
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors block"
                          >
                            {service}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SEO & Paid Ads Services */}
                  <div>
                    <h3 className="font-semibold text-sm mb-3 text-foreground">
                      SEO Services
                    </h3>
                    <ul className="space-y-2">
                      {servicesData.seo.map((service, index) => (
                        <li key={index}>
                          <a
                            href="/contact"
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors block"
                          >
                            {service}
                          </a>
                        </li>
                      ))}
                    </ul>

                    <h3 className="font-semibold text-sm mt-4 mb-3 text-foreground">
                      Paid Ads Services
                    </h3>
                    <ul className="space-y-2">
                      {servicesData.paidAds.map((service, index) => (
                        <li key={index}>
                          <a
                            href="/contact"
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors block"
                          >
                            {service}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Other Services */}
                  <div>
                    <h3 className="font-semibold text-sm mb-3 text-foreground">
                      Other Services
                    </h3>
                    <ul className="space-y-2">
                      {servicesData.other.map((service, index) => (
                        <li key={index}>
                          <a
                            href="/portfolio"
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors block"
                          >
                            {service}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* <a
              href="/portfolio"
              className="text-sm hover-elevate px-3 py-1 rounded-md transition-colors"
              data-testid="link-portfolio"
            >
              Portfolio
            </a> */}
            
            <a
              href="/blog"
              className="text-sm font-bold hover-elevate px-3 py-1 rounded-md transition-colors"
              data-testid="link-blog"
            >
              Updates
            </a>
            <a
              href="/contact"
              className="text-sm font-bold hover-elevate px-3 py-1 rounded-md transition-colors"
              data-testid="link-contact"
            >
              Contact
            </a>
            <a
              href="/community"
              className="text-sm font-bold hover-elevate px-3 py-1 rounded-md transition-colors"
              data-testid="link-community"
            >
              Community
            </a>

            <Button
              size="sm"
              className="font-bold"
              asChild
              data-testid="link-build-software"
            >
              <a href={portfolioUrl}>Build your software</a>
            </Button>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {/* <ThemeToggle /> */}
            {isLoggedIn && userRole === "admin" && (
              <Button
                size="sm"
                variant="outline"
                className="font-bold"
                onClick={() => (window.location.href = "/admin_dashboard")}
              >
                Admin Dashboard
              </Button>
            )}
            {!isLoggedIn ? (
              <Button
                size="sm"
                className="font-bold"
                data-testid="button-cta"
                onClick={() => (window.location.href = "/login")}
              >
                Get Started
              </Button>
            ) : (
              <Button
                size="sm"
                variant="outline"
                className="font-bold"
                data-testid="button-logout"
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden py-4 border-t border-border mt-2"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-2">
              <a
                href="/home"
                className="text-sm font-bold hover-elevate px-3 py-2 rounded-md"
                data-testid="link-mobile-home"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-sm font-bold hover-elevate px-3 py-2 rounded-md"
                data-testid="link-mobile-about"
              >
                About
              </a>
              <a
                href="/services"
                className="text-sm font-bold hover-elevate px-3 py-2 rounded-md"
                data-testid="link-mobile-services"
              >
                Services
              </a>
              <a
                href="/portfolio"
                className="text-sm font-bold hover-elevate px-3 py-2 rounded-md"
                data-testid="link-mobile-portfolio"
              >
                Portfolio
              </a>
              <a
                href="/blog"
                className="text-sm font-bold hover-elevate px-3 py-2 rounded-md"
              data-testid="link-mobile-blog"
            >
              Updates
            </a>
              <a
                href="/community"
                className="text-sm font-bold hover-elevate px-3 py-2 rounded-md"
                data-testid="link-mobile-community"
              >
                Community
              </a>
              <a
                href="/careers"
                className="text-sm font-bold hover-elevate px-3 py-2 rounded-md"
                data-testid="link-mobile-careers"
              >
                Careers
              </a>
              <a
                href="/contact"
                className="text-sm font-bold hover-elevate px-3 py-2 rounded-md"
                data-testid="link-mobile-contact"
              >
                Contact
              </a>
              {isLoggedIn && userRole === "admin" && (
                <Button
                  size="sm"
                  className="mt-2 font-bold"
                  variant="outline"
                  onClick={() => (window.location.href = "/admin_dashboard")}
                >
                  Admin Dashboard
                </Button>
              )}
              {!isLoggedIn ? (
                <Button
                  size="sm"
                  className="mt-2 font-bold"
                  data-testid="button-mobile-cta"
                  onClick={() => (window.location.href = "/login")}
                >
                  Get Started
                </Button>
              ) : (
                <Button
                  size="sm"
                  className="mt-2 font-bold"
                  variant="outline"
                  data-testid="button-mobile-logout"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
