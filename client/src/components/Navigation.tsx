import { useState, useEffect } from 'react';
import { Button } from './ui/button';
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

  // Check login state from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('userRole');
    setIsLoggedIn(!!token);
    setUserRole(role);
    const handleStorage = () => {
      const newToken = localStorage.getItem('token');
      const newRole = localStorage.getItem('userRole');
      setIsLoggedIn(!!newToken);
      setUserRole(newRole);
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    setIsLoggedIn(false);
    setUserRole(null);
    window.location.href = '/home';
  };

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
            {/* ...existing code... */}
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
            {/* <a href="/careers" className="text-sm hover-elevate px-3 py-1 rounded-md transition-colors" data-testid="link-careers">
              Careers
            </a> */}
            <a href="/contact" className="text-sm hover-elevate px-3 py-1 rounded-md transition-colors" data-testid="link-contact">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {/* <ThemeToggle /> */}
            {isLoggedIn && userRole === 'admin' && (
              <Button size="sm" variant="outline" onClick={() => window.location.href = '/admin_dashboard'}>
                Admin Dashboard
              </Button>
            )}
            {!isLoggedIn ? (
              <Button size="sm" data-testid="button-cta" onClick={() => window.location.href = '/login'}>
                Get Started
              </Button>
            ) : (
              <Button size="sm" variant="outline" data-testid="button-logout" onClick={handleLogout}>
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
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border mt-2" data-testid="mobile-menu">
            <div className="flex flex-col gap-2">
              {/* ...existing code... */}
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
              {isLoggedIn && userRole === 'admin' && (
                <Button size="sm" className="mt-2" variant="outline" onClick={() => window.location.href = '/admin_dashboard'}>
                  Admin Dashboard
                </Button>
              )}
              {!isLoggedIn ? (
                <Button size="sm" className="mt-2" data-testid="button-mobile-cta" onClick={() => window.location.href = '/login'}>
                  Get Started
                </Button>
              ) : (
                <Button size="sm" className="mt-2" variant="outline" data-testid="button-mobile-logout" onClick={handleLogout}>
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
