import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Globe, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  color: string;
  icon: React.ReactNode;
}

interface ProjectDetailOverlayProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailOverlay = ({ project, isOpen, onClose }: ProjectDetailOverlayProps) => {
  const [showSparkle, setShowSparkle] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setShowSparkle(true);
      setTimeout(() => {
        setShowSparkle(false);
        setShowContent(true);
      }, 800); // Sparkle duration
    } else {
      document.body.style.overflow = 'auto';
      setShowContent(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setShowContent(false);
    setShowSparkle(true);
    setTimeout(() => {
      setShowSparkle(false);
      onClose();
    }, 600);
  };

  if (!isOpen && !showSparkle) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      
      {/* Blur Background */}
      <motion.div 
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-black/60 pointer-events-auto"
        onClick={handleClose}
      />

      {/* Center Logo Loading Animation */}
      <AnimatePresence>
        {showSparkle && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            exit={{ scale: 1.2, opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute z-[110] flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center">
              <img 
                src="/noventra core logo dark.png" 
                alt="Loading Logo" 
                className="w-24 md:w-32 h-auto object-contain drop-shadow-[0_0_30px_rgba(177,18,38,0.8)]"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40%] border-2 border-transparent rounded-full border-t-accent border-r-accent/30"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Content Overlay */}
      <AnimatePresence>
        {showContent && project && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-[105] w-full max-w-6xl max-h-[90vh] mx-4 bg-[#0a0a0a]/90 border border-white/10 rounded-3xl overflow-hidden pointer-events-auto shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row"
          >
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/5 hover:bg-accent rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Visual Left Side */}
            <div className={`w-full lg:w-1/2 relative flex items-center justify-center p-12 lg:p-24 bg-gradient-to-br ${project.color} overflow-hidden`}>
               <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
               <motion.div 
                 initial={{ scale: 0.8, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ delay: 0.3, duration: 0.8 }}
                 className="relative z-10 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] transform hover:scale-110 transition-transform duration-500"
               >
                 {project.icon}
               </motion.div>
            </div>

            {/* Content Right Side */}
            <div className="w-full lg:w-1/2 p-8 lg:p-16 overflow-y-auto custom-scrollbar" data-lenis-prevent="true">
              <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.2 }}
              >
                <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-bold tracking-widest uppercase mb-6">
                  {project.category}
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  {project.title}
                </h2>
                
                <p className="text-xl text-gray-300 font-medium mb-8">
                  {project.description}
                </p>
                
                <div className="w-full h-px bg-white/10 mb-8" />
                
                <h3 className="text-lg font-bold text-white mb-4">Project Overview</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {project.longDescription}
                </p>

                <h3 className="text-lg font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3 mb-12">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-gray-300 text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 py-4 bg-accent hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                    Live Demo <ExternalLink size={18} />
                  </button>
                  <button className="px-6 py-4 border border-white/20 hover:border-white text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center">
                    <Globe size={20} />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetailOverlay;
