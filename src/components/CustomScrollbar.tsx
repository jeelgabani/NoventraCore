import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const CustomScrollbar = () => {
  const { scrollYProgress } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Smooth out the scroll progress slightly for the bar
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate the thumb's top position percentage
  const thumbY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // Hide sparkles shortly after scroll stops
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* Scrollbar Track */}
      <div className="fixed top-0 right-0 w-[3px] h-full bg-white/5 z-[999] pointer-events-none hidden md:block" />
      
      {/* Scrollbar Progress Fill */}
      <motion.div
        className="fixed top-0 right-0 w-[3px] bg-gradient-to-b from-accent/20 via-accent to-red-500 z-[999] origin-top pointer-events-none hidden md:block shadow-[0_0_10px_rgba(177,18,38,0.5)]"
        style={{ scaleY }}
      />

      {/* Sparkling Thumb */}
      <motion.div
        className="fixed right-[-10px] z-[1000] pointer-events-none hidden md:flex items-center justify-center transform -translate-y-1/2"
        style={{ top: thumbY }}
      >
        <div className="relative">
          {/* Main glowing orb */}
          <div className="w-2 h-6 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_30px_rgba(177,18,38,1)]" />
          
          {/* Sparkling effect when scrolling */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: isScrolling ? 1 : 0, 
              scale: isScrolling ? 1 : 0,
              rotate: isScrolling ? 180 : 0
            }}
            transition={{ duration: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent"
          >
            <Sparkles size={24} className="animate-spin-slow drop-shadow-[0_0_15px_rgba(177,18,38,0.8)]" />
          </motion.div>
          
          {/* Secondary trailing sparkles */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isScrolling ? 0.6 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-4 -left-2 text-white/80"
          >
            <Sparkles size={12} className="animate-bounce" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isScrolling ? 0.6 : 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="absolute -bottom-4 -left-1 text-accent/80"
          >
            <Sparkles size={10} className="animate-pulse" />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default CustomScrollbar;
