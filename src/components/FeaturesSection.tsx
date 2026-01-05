import { Headphones, Heart, Clock, Shield, Download, Sparkles } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Professional Narration",
    description: "Soothing voices that bring stories to life with emotion and magic.",
  },
  {
    icon: Heart,
    title: "Curated Content",
    description: "Age-appropriate stories that teach values and spark imagination.",
  },
  {
    icon: Clock,
    title: "Sleep Timer",
    description: "Stories automatically fade out as your child drifts to sleep.",
  },
  {
    icon: Shield,
    title: "Parental Controls",
    description: "Manage content, set time limits, and monitor listening history.",
  },
  {
    icon: Download,
    title: "Offline Access",
    description: "Download stories for trips, car rides, or areas without WiFi.",
  },
  {
    icon: Sparkles,
    title: "New Stories Weekly",
    description: "Fresh adventures added every week to keep bedtime exciting.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything Parents Need
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We built Dreamtime with busy families in mind, 
            so bedtime stories can happen every night.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-float transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-accent/30 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
