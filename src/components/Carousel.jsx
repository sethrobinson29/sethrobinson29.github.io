import { useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

const slides = [
  { id: 'about', Component: About },
  { id: 'skills', Component: Skills },
  { id: 'projects', Component: Projects },
];

const arrowClass = (enabled) =>
  `w-9 h-9 flex items-center justify-center rounded-full border border-white/10 backdrop-blur-md
   transition-all duration-200 pointer-events-auto
   ${enabled
     ? 'bg-white/[0.07] text-slate-300 hover:bg-white/[0.14] hover:text-orange-400 cursor-pointer shadow-lg shadow-black/40'
     : 'bg-white/[0.03] text-slate-700 cursor-default'}`;

const Carousel = ({ currentIndex, onNavigate }) => {
  const prev = (currentIndex - 1 + slides.length) % slides.length;
  const next = (currentIndex + 1) % slides.length;

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') onNavigate(prev);
      if (e.key === 'ArrowRight') onNavigate(next);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex, prev, next, onNavigate]);

  return (
    <div className="relative" style={{ height: 'calc(100vh - 4rem)' }}>
      {/* Slides viewport */}
      <div className="h-full overflow-hidden">
        <div
          className="flex h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.35s ease-in-out' }}
        >
          {slides.map(({ id, Component }) => (
            <div key={id} className="w-full h-full shrink-0 overflow-y-auto">
              <div className="max-w-3xl mx-auto px-6 py-12">
                <Component />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows overlaid, anchored to the edges of the max-w-3xl content column */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-full max-w-3xl">
          <button
            onClick={() => onNavigate(prev)}
            aria-label="Previous section"
            className={`absolute -left-5 -translate-x-full ${arrowClass(true)}`}
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            onClick={() => onNavigate(next)}
            aria-label="Next section"
            className={`absolute -right-5 translate-x-full ${arrowClass(true)}`}
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
