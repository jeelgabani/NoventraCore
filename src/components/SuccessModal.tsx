import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  const [showSparkle, setShowSparkle] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setShowSparkle(true);
      setTimeout(() => {
        setShowSparkle(false);
        setShowContent(true);
      }, 800);
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
        animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-black/60 pointer-events-auto"
        onClick={handleClose}
      />

      {/* Center Sparkle Animation */}
      <AnimatePresence>
        {showSparkle && (
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0], rotate: 180 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute z-[110] text-accent flex items-center justify-center"
          >
            <div className="relative">
              <Sparkles size={120} className="animate-spin-slow drop-shadow-[0_0_30px_rgba(177,18,38,1)]" />
              <div className="absolute inset-0 bg-accent rounded-full blur-[60px] opacity-60"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Modal */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-[105] w-full max-w-md mx-4 bg-[#0a0a0a]/90 border border-accent/20 rounded-3xl p-8 pointer-events-auto shadow-[0_0_50px_rgba(177,18,38,0.2)] flex flex-col items-center text-center"
          >
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6 border border-accent/30 shadow-[0_0_30px_rgba(177,18,38,0.4)]">
              <CheckCircle size={40} className="text-accent" />
            </div>

            <h3 className="text-3xl font-black text-white mb-4">Message Sent!</h3>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              Thank you for reaching out to <span className="text-accent font-bold">NoventraCore</span>. We have received your inquiry and our team will get back to you shortly. We look forward to building the future with you.
            </p>

            <button 
              onClick={handleClose}
              className="w-full py-4 bg-accent hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(177,18,38,0.4)]"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SuccessModal;
