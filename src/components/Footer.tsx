import { Moon, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Moon className="w-6 h-6 text-primary" />
            <span className="font-display text-xl font-bold text-foreground">
              Dreamtime
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>for little dreamers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
