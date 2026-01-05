import { useEffect, useState } from "react";

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
}

const StarryBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 3,
          duration: Math.random() * 2 + 2,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-star-gold animate-twinkle"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            boxShadow: `0 0 ${star.size * 2}px hsl(45 93% 58% / 0.5)`,
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
