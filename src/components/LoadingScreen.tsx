import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        document.body.style.overflow = 'auto';
        onComplete();
      }, 1000); // Wait for exit animation
    }, 2500); // 2.5 seconds loading duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, backdropFilter: 'blur(20px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] bg-[#050505] flex items-center justify-center pointer-events-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <img 
              src="/noventra core logo dark.png" 
              alt="NoventraCore Logo" 
              className="w-48 md:w-64 h-auto object-contain drop-shadow-[0_0_30px_rgba(177,18,38,0.5)]"
            />
            {/* Glowing ring around logo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-50%] border border-accent/20 rounded-full border-t-accent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
