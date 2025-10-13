export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-services-title">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover-elevate px-2 py-1 rounded-md -ml-2" data-testid="link-ai-solutions">AI Solutions</a></li>
              <li><a href="#" className="hover-elevate px-2 py-1 rounded-md -ml-2" data-testid="link-automation">Automation</a></li>
              <li><a href="#" className="hover-elevate px-2 py-1 rounded-md -ml-2" data-testid="link-web-dev">Web Development</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-company-title">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover-elevate px-2 py-1 rounded-md -ml-2" data-testid="link-about">About Us</a></li>
              <li><a href="#" className="hover-elevate px-2 py-1 rounded-md -ml-2" data-testid="link-contact">Contact</a></li>
              <li><a href="#" className="hover-elevate px-2 py-1 rounded-md -ml-2" data-testid="link-careers">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-resources-title">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover-elevate px-2 py-1 rounded-md -ml-2" data-testid="link-blog">Blog</a></li>
              <li><a href="#" className="hover-elevate px-2 py-1 rounded-md -ml-2" data-testid="link-case-studies">Case Studies</a></li>
              <li><a href="#" className="hover-elevate px-2 py-1 rounded-md -ml-2" data-testid="link-documentation">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-legal-title">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover-elevate px-2 py-1 rounded-md -ml-2" data-testid="link-privacy">Privacy Policy</a></li>
              <li><a href="#" className="hover-elevate px-2 py-1 rounded-md -ml-2" data-testid="link-terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground" data-testid="text-copyright">
          © {currentYear} WebStitch. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
