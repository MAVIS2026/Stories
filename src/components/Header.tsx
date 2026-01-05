import { Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full py-4 px-6 md:px-12">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Moon className="w-8 h-8 text-primary animate-float" />
            <div className="absolute inset-0 blur-lg bg-primary/30" />
          </div>
          <span className="font-display text-2xl font-bold text-foreground">
            Dreamtime
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#stories" className="font-display text-foreground/80 hover:text-primary transition-colors">
            Stories
          </a>
          <a href="#categories" className="font-display text-foreground/80 hover:text-primary transition-colors">
            Categories
          </a>
          <a href="#about" className="font-display text-foreground/80 hover:text-primary transition-colors">
            About
          </a>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Start Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-lg border-b border-border p-6 flex flex-col gap-4">
          <a href="#stories" className="font-display text-foreground/80 hover:text-primary transition-colors py-2">
            Stories
          </a>
          <a href="#categories" className="font-display text-foreground/80 hover:text-primary transition-colors py-2">
            Categories
          </a>
          <a href="#about" className="font-display text-foreground/80 hover:text-primary transition-colors py-2">
            About
          </a>
          <div className="flex flex-col gap-2 pt-4">
            <Button variant="outline" className="w-full">
              Sign In
            </Button>
            <Button variant="hero" className="w-full">
              Start Free
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
