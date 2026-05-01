import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import CustomScrollbar from './components/CustomScrollbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden bg-primary text-secondary selection:bg-accent selection:text-white">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {/* Fixed Background Logo */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img 
          src="/noventra core logo dark.png" 
          alt="Background Logo" 
          className="w-3/4 md:w-1/2 lg:w-1/3 object-contain opacity-[0.05]"
        />
      </div>

      <CustomCursor />
      <CustomScrollbar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
