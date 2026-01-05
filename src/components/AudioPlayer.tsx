import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface AudioPlayerProps {
  isVisible: boolean;
  currentStory: {
    title: string;
    imageUrl: string;
    duration: string;
  } | null;
  onClose: () => void;
}

const AudioPlayer = ({ isVisible, currentStory, onClose }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.5;
        });
      }, 500);
    } else {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    }
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying]);

  useEffect(() => {
    if (currentStory) {
      setIsPlaying(true);
      setProgress(0);
    }
  }, [currentStory]);

  if (!isVisible || !currentStory) return null;

  const formatTime = (percentage: number) => {
    const totalMinutes = 8; // Simulated duration
    const currentSeconds = (percentage / 100) * totalMinutes * 60;
    const mins = Math.floor(currentSeconds / 60);
    const secs = Math.floor(currentSeconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border shadow-float">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4 md:gap-6">
          {/* Story Info */}
          <div className="flex items-center gap-3 min-w-0 flex-1 md:flex-none md:w-64">
            <img
              src={currentStory.imageUrl}
              alt={currentStory.title}
              className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-cover shadow-card"
            />
            <div className="min-w-0">
              <h4 className="font-display font-semibold text-foreground text-sm md:text-base truncate">
                {currentStory.title}
              </h4>
              <p className="text-muted-foreground text-xs md:text-sm">
                {currentStory.duration}
              </p>
            </div>
          </div>

          {/* Controls - Desktop */}
          <div className="hidden md:flex flex-col items-center flex-1 gap-2">
            <div className="flex items-center gap-4">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <SkipBack className="w-5 h-5" />
              </button>
              <Button
                variant="player"
                size="icon"
                onClick={() => setIsPlaying(!isPlaying)}
                className={isPlaying ? "animate-pulse-glow" : ""}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-current" />
                ) : (
                  <Play className="w-5 h-5 fill-current" />
                )}
              </Button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <SkipForward className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-3 w-full max-w-md">
              <span className="text-xs text-muted-foreground w-10 text-right">
                {formatTime(progress)}
              </span>
              <Slider
                value={[progress]}
                onValueChange={(value) => setProgress(value[0])}
                max={100}
                step={0.1}
                className="flex-1"
              />
              <span className="text-xs text-muted-foreground w-10">
                {currentStory.duration}
              </span>
            </div>
          </div>

          {/* Mobile Play Button */}
          <div className="md:hidden">
            <Button
              variant="player"
              size="icon"
              onClick={() => setIsPlaying(!isPlaying)}
              className={isPlaying ? "animate-pulse-glow" : ""}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current" />
              )}
            </Button>
          </div>

          {/* Volume - Desktop */}
          <div className="hidden md:flex items-center gap-2 w-32">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
            <Slider
              value={[isMuted ? 0 : volume]}
              onValueChange={(value) => {
                setVolume(value[0]);
                setIsMuted(value[0] === 0);
              }}
              max={100}
              step={1}
              className="flex-1"
            />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Progress Bar */}
        <div className="md:hidden mt-3">
          <Slider
            value={[progress]}
            onValueChange={(value) => setProgress(value[0])}
            max={100}
            step={0.1}
            className="w-full"
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-muted-foreground">
              {formatTime(progress)}
            </span>
            <span className="text-xs text-muted-foreground">
              {currentStory.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
