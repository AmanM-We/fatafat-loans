const Footer = () => (
  <footer className="bg-transparent text-primary-foreground/75 py-12">
    <div className="container-narrow px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="inline-flex bg-white rounded-lg px-2 py-1 mb-3">
            <img src="/fatakpay-logo.png" alt="Fatakpay logo" className="h-10 w-auto" />
          </div>
          <p className="text-sm leading-relaxed">
            Making personal loans simple, fast, and accessible for every Indian.
          </p>
        </div>

        <div>
          <p className="font-heading font-semibold text-primary-foreground mb-3 text-sm">Company</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#how-it-works" className="hover:text-primary-foreground transition-colors">About Us</a></li>
            <li>Careers</li>
            <li>Blog & Media</li>
          </ul>
        </div>

        <div>
          <p className="font-heading font-semibold text-primary-foreground mb-3 text-sm">Legal</p>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
            <li><a href="/grievance-redressal" className="hover:text-primary-foreground transition-colors">Grievance Redressal</a></li>
          </ul>
        </div>

        <div>
          <p className="font-heading font-semibold text-primary-foreground mb-3 text-sm">Contact</p>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:support@fatafatloans.in" className="hover:text-primary-foreground transition-colors">support@fatafatloans.in</a></li>
            <li><a href="tel:+9118001234567" className="hover:text-primary-foreground transition-colors">+91 1800-123-4567</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 mt-10 pt-6 text-center text-xs">
        © {new Date().getFullYear()} Fatafat Loans. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
