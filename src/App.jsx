import Background from './components/layout/Background';
import Sidebar from './components/layout/Sidebar';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#080b14] text-slate-100">
      <Background />
      <div className="relative z-10 flex flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 px-6 py-12 lg:ml-72 lg:px-16 lg:py-20">
          <About />
          <Skills />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
