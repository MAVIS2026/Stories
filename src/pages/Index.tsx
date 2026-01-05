import { useState, useMemo } from "react";
import StarryBackground from "@/components/StarryBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StoryCard from "@/components/StoryCard";
import CategoryFilter from "@/components/CategoryFilter";
import AudioPlayer from "@/components/AudioPlayer";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

import storyCastle from "@/assets/story-castle.jpg";
import storyDragon from "@/assets/story-dragon.jpg";
import storyForest from "@/assets/story-forest.jpg";
import storyPirate from "@/assets/story-pirate.jpg";
import storyAnimals from "@/assets/story-animals.jpg";
import storyMermaid from "@/assets/story-mermaid.jpg";

const stories = [
  {
    id: 1,
    title: "The Princess and the Cloud Castle",
    description: "A brave princess discovers a magical castle floating among the stars and learns the true meaning of courage.",
    duration: "8:30",
    category: "Fairy Tales",
    imageUrl: storyCastle,
    rating: 4.9,
  },
  {
    id: 2,
    title: "Drako's Sleepy Adventure",
    description: "A friendly dragon named Drako can't fall asleep, so he goes on a journey to find the perfect lullaby.",
    duration: "6:45",
    category: "Adventures",
    imageUrl: storyDragon,
    rating: 4.8,
  },
  {
    id: 3,
    title: "The Enchanted Forest Path",
    description: "Follow little Lily as she discovers the magical creatures living in the glowing mushroom forest.",
    duration: "7:15",
    category: "Fantasy",
    imageUrl: storyForest,
    rating: 4.7,
  },
  {
    id: 4,
    title: "Captain Whiskers' Treasure",
    description: "A clever cat becomes a pirate captain and learns that the greatest treasure is friendship.",
    duration: "9:00",
    category: "Adventures",
    imageUrl: storyPirate,
    rating: 4.9,
  },
  {
    id: 5,
    title: "The Meadow Tea Party",
    description: "Bunny and Fox invite all their woodland friends to a magical tea party under the sunset sky.",
    duration: "5:30",
    category: "Classics",
    imageUrl: storyAnimals,
    rating: 4.6,
  },
  {
    id: 6,
    title: "Marina's Underwater Kingdom",
    description: "A curious mermaid explores her kingdom and discovers the beauty of being different.",
    duration: "8:00",
    category: "Fantasy",
    imageUrl: storyMermaid,
    rating: 4.8,
  },
];

const categories = ["All Stories", "Fairy Tales", "Adventures", "Fantasy", "Classics", "Morals"];

interface CurrentStory {
  title: string;
  imageUrl: string;
  duration: string;
}

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [currentStory, setCurrentStory] = useState<CurrentStory | null>(null);
  const [playerVisible, setPlayerVisible] = useState(false);

  const filteredStories = useMemo(() => {
    if (selectedCategory === "All Stories") {
      return stories;
    }
    return stories.filter((story) => story.category === selectedCategory);
  }, [selectedCategory]);

  const handlePlayStory = (story: typeof stories[0]) => {
    setCurrentStory({
      title: story.title,
      imageUrl: story.imageUrl,
      duration: story.duration,
    });
    setPlayerVisible(true);
  };

  const handleClosePlayer = () => {
    setPlayerVisible(false);
    setTimeout(() => setCurrentStory(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-night">
      <StarryBackground />
      <Header />
      <main>
        <HeroSection />

        {/* Stories Section */}
        <section id="stories" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tonight's Story Collection
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose from our library of enchanting tales, 
                each one crafted to inspire sweet dreams.
              </p>
            </div>

            {/* Category Filter */}
            <div id="categories" className="mb-12">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>

            {/* Story Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredStories.map((story) => (
                <StoryCard
                  key={story.id}
                  title={story.title}
                  description={story.description}
                  duration={story.duration}
                  category={story.category}
                  imageUrl={story.imageUrl}
                  rating={story.rating}
                  onPlay={() => handlePlayStory(story)}
                  isPlaying={currentStory?.title === story.title}
                />
              ))}
            </div>

            {filteredStories.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No stories found in this category yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        <FeaturesSection />
      </main>

      <Footer />

      {/* Audio Player */}
      <AudioPlayer
        isVisible={playerVisible}
        currentStory={currentStory}
        onClose={handleClosePlayer}
      />

      {/* Spacer for fixed player */}
      {playerVisible && <div className="h-32 md:h-24" />}
    </div>
  );
};

export default Index;
