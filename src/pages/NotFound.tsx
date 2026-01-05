import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Moon, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import StarryBackground from "@/components/StarryBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-night flex items-center justify-center px-6">
      <StarryBackground />
      <div className="relative z-10 text-center max-w-md">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Moon className="w-20 h-20 text-primary animate-float" />
            <div className="absolute inset-0 blur-xl bg-primary/30" />
          </div>
        </div>
        
        <h1 className="font-display text-7xl font-bold text-primary text-glow mb-4">
          404
        </h1>
        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
          Story Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          This magical story seems to have wandered off into the dreamland. 
          Let's find our way back home.
        </p>
        
        <Link to="/">
          <Button variant="hero" size="lg" className="group">
            <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
