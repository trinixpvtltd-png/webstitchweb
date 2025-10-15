import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-12">
          <div className="text-xl font-semibold tracking-tight" data-testid="text-logo">
            WebStitch
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/home" className="text-sm hover-elevate px-3 py-1 rounded-md transition-colors" data-testid="link-home">
              Home
            </a>
            <a href="/about" className="text-sm hover-elevate px-3 py-1 rounded-md transition-colors" data-testid="link-about">
              About
            </a>
            <a href="/services" className="text-sm hover-elevate px-3 py-1 rounded-md transition-colors" data-testid="link-services">
              Services
            </a>
            <a href="/portfolio" className="text-sm hover-elevate px-3 py-1 rounded-md transition-colors" data-testid="link-portfolio">
              Portfolio
            </a>
            
            <a href="/blog" className="text-sm hover-elevate px-3 py-1 rounded-md transition-colors" data-testid="link-blog">
              Blog
            </a>
            <a href="/careers" className="text-sm hover-elevate px-3 py-1 rounded-md transition-colors" data-testid="link-careers">
              Careers
            </a>
            <a href="/contact" className="text-sm hover-elevate px-3 py-1 rounded-md transition-colors" data-testid="link-contact">
              Contact
            </a>
           
          </div>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button size="sm" data-testid="button-cta">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border mt-2" data-testid="mobile-menu">
            <div className="flex flex-col gap-2">
              <a href="/home" className="text-sm hover-elevate px-3 py-2 rounded-md" data-testid="link-mobile-home">
                Home
              </a>
              <a href="/about" className="text-sm hover-elevate px-3 py-2 rounded-md" data-testid="link-mobile-about">
                About
              </a>
              <a href="/services" className="text-sm hover-elevate px-3 py-2 rounded-md" data-testid="link-mobile-services">
                Services
              </a>
              <a href="/portfolio" className="text-sm hover-elevate px-3 py-2 rounded-md" data-testid="link-mobile-portfolio">
                Portfolio
              </a>
             
              <a href="/blog" className="text-sm hover-elevate px-3 py-2 rounded-md" data-testid="link-mobile-blog">
                Blog
              </a>
              <a href="/careers" className="text-sm hover-elevate px-3 py-2 rounded-md" data-testid="link-mobile-careers">
                Careers
              </a>
              <a href="/contact" className="text-sm hover-elevate px-3 py-2 rounded-md" data-testid="link-mobile-contact">
                Contact
              </a>
             
              <Button size="sm" className="mt-2" data-testid="button-mobile-cta">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
