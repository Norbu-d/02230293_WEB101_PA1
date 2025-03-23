import { useState, useRef } from 'react';
import Story1 from '@/assets/images.jpg'; // Import your images
import Story2 from '@/assets/images2.jpg';
import Story3 from '@/assets/images3.jpg';
import Story4 from '@/assets/ProfilePic.png';
import Story5 from '@/assets/post2.jpg';

interface Story {
  id: number;
  name: string;
  image: string;
  user: {
    name: string;
    profilePic: string;
  };
  type?: string; // Add type for "Create Story"
}

export default function Stories() {
  const [stories, setStories] = useState<Story[]>([
    { id: 1, name: 'Create Story', image: Story1, user: { name: 'You', profilePic: Story1 }, type: 'create' },
    { id: 2, name: 'Vampire', image: Story2, user: { name: 'Alex', profilePic: Story2 } },
    { id: 3, name: 'Tube Story', image: Story3, user: { name: 'Maria', profilePic: Story3 } },
    { id: 4, name: 'Chill', image: Story4, user: { name: 'James', profilePic: Story4 } },
    { id: 5, name: 'Cracul', image: Story5, user: { name: 'Sarah', profilePic: Story5 } },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const loadMoreStories = () => {
    // Simulate loading more stories
    const newStories: Story[] = Array.from({ length: 5 }).map((_, i) => ({
      id: stories.length + i + 1,
      name: `Story ${stories.length + i + 1}`,
      image: Story1, 
      user: {
        name: `User ${stories.length + i + 1}`,
        profilePic: Story1, // Use a placeholder image or your own
      },
    }));
    setStories((prev) => [...prev, ...newStories]);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow relative">
      <div className="flex space-x-4 overflow-x-auto" ref={scrollRef}>
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center flex-shrink-0">
            {story.type === 'create' ? (
              <div className="relative w-32 h-48 rounded-lg bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <span className="text-2xl">+</span>
                  <p className="text-sm mt-2">{story.name}</p>
                </div>
              </div>
            ) : (
              <div className="relative">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-32 h-48 rounded-lg object-cover"
                />
                <div className="absolute top-2 left-2">
                  <img
                    src={story.user.profilePic}
                    alt={story.user.name}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
                <p className="text-sm mt-2 text-center">{story.user.name}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Scroll Buttons */}
      <button
        onClick={() => handleScroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
      >
        {"<"}
      </button>
      <button
        onClick={() => handleScroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
      >
        {">"}
      </button>

      {/* Load More Stories Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={loadMoreStories}
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          Load More Stories
        </button>
      </div>
    </div>
  );
}