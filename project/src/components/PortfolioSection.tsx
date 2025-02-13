import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VideoModal from './VideoModal';

export default function PortfolioSection() {
  // Ссылка на контейнер с карточками
  const scrollRef = useRef<HTMLDivElement>(null);

  // Храним текущую позицию прокрутки
  const [scrollPosition, setScrollPosition] = useState(0);

  // Храним выбранный для просмотра видео URL
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Массив элементов портфолио
  const portfolioItems = [
    {
      thumbnail:
        'https://images.unsplash.com/photo-1607968565043-36af90dde238?auto=format&fit=crop&q=80&w=1935',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Product Demo'
    },
    {
      thumbnail:
        'https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=1974',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Company Overview'
    },
    {
      thumbnail:
        'https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&fit=crop&q=80&w=1964',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Tutorial Series'
    },
    {
      thumbnail:
        'https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?auto=format&fit=crop&q=80&w=2070',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Marketing Campaign'
    },
    {
      thumbnail:
        'https://images.unsplash.com/photo-1642132652075-2b0d0ae80e61?auto=format&fit=crop&q=80&w=2070',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Social Media Ad'
    }
  ];

  // Функция для прокрутки контейнера влево или вправо
  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 300;
    const newPosition =
      direction === 'left'
        ? scrollPosition - scrollAmount
        : scrollPosition + scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });

    setScrollPosition(newPosition);
  };

  return (
    <section id="portfolio" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Our Portfolio
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Explore our collection of AI-powered video content that has helped businesses grow
        </p>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 p-2 rounded-full hover:bg-black/90 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 p-2 rounded-full hover:bg-black/90 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 pb-8 -mx-4 px-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="flex-none w-[270px] aspect-[9/16] relative rounded-xl overflow-hidden cursor-pointer group"
                style={{ scrollSnapAlign: 'start' }}
                onClick={() => setSelectedVideo(item.videoUrl)}
              >
                <img
                  src={item.thumbnail}
                  alt={`Portfolio video ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-all duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300">Click to play</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <VideoModal
          videoUrl={selectedVideo || ''}
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      </div>
    </section>
  );
}
