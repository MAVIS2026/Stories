import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-treehouse.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Magical treehouse at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="font-display text-sm text-primary">
            Magical bedtime stories for little dreamers
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Sweet Dreams Begin with{" "}
          <span className="text-primary text-glow">Magical Stories</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          High-quality audio stories that spark imagination, develop language skills, 
          and create peaceful bedtime moments — even when you're too busy to read.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" className="group">
            <Play className="w-5 h-5 mr-2 fill-current group-hover:scale-110 transition-transform" />
            Start Listening Free
          </Button>
          <Button variant="outline" size="xl">
            Browse Stories
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16">
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-primary text-glow">
              200+
            </div>
            <div className="text-muted-foreground text-sm mt-1">Audio Stories</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-primary text-glow">
              50K+
            </div>
            <div className="text-muted-foreground text-sm mt-1">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-primary text-glow">
              4.9★
            </div>
            <div className="text-muted-foreground text-sm mt-1">Parent Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
