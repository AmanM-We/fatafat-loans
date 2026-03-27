import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm">
      <div className="container-narrow flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center">
          <img src="/fatakpay-logo.png" alt="Fatakpay logo" className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How It Works</a>
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#testimonials" className="hover:text-slate-900 transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
        </div>

        <div className="hidden md:block">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-cta font-semibold rounded-full px-6">
            Apply Now
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-900">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pb-4 space-y-3">
          <a href="#how-it-works" className="block py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#features" className="block py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setOpen(false)}>Features</a>
          <a href="#testimonials" className="block py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setOpen(false)}>Reviews</a>
          <a href="#faq" className="block py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setOpen(false)}>FAQ</a>
          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-cta font-semibold rounded-full">
            Apply Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
