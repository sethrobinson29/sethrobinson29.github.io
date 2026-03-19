import { useState, useCallback } from 'react';
import Background from './components/layout/Background';
import TopNav from './components/layout/TopNav';
import Carousel from './components/Carousel';
import Footer from './components/sections/Footer';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onNavigate = useCallback((i) => setCurrentIndex(i), []);

  return (
    <div className="min-h-screen bg-[#0c1022] text-slate-100">
      <Background />
      <div className="relative z-10 flex flex-col" style={{ paddingTop: '4rem' }}>
        <TopNav currentIndex={currentIndex} onNavigate={onNavigate} />
        <Carousel currentIndex={currentIndex} onNavigate={onNavigate} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
