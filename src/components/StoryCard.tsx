import { Play, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StoryCardProps {
  title: string;
  description: string;
  duration: string;
  category: string;
  imageUrl: string;
  rating: number;
  onPlay: () => void;
  isPlaying?: boolean;
}

const StoryCard = ({
  title,
  description,
  duration,
  category,
  imageUrl,
  rating,
  onPlay,
  isPlaying = false,
}: StoryCardProps) => {
  return (
    <div className="group relative bg-gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-float transition-all duration-500 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="player"
            size="icon-lg"
            onClick={onPlay}
            className={isPlaying ? "animate-pulse-glow" : ""}
          >
            <Play className="w-6 h-6 fill-current" />
          </Button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-accent/80 backdrop-blur-sm text-accent-foreground text-xs font-display font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-foreground mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-foreground">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
