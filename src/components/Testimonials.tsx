import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "NoventraCore transformed our completely outdated platform into a sleek, modern powerhouse. Their attention to detail and design aesthetics are unmatched in the industry.",
    author: "Sarah Jenkins",
    role: "CTO, FinTech Next",
  },
  {
    quote: "Working with them was a breeze. They understood our vision immediately and delivered a mobile app that our users absolutely love. The 3D elements they added were the cherry on top.",
    author: "David Chen",
    role: "Founder, StyleCommerce",
  },
  {
    quote: "If you want a premium digital presence, look no further. Their team doesn't just write code; they craft digital experiences that actually convert visitors into customers.",
    author: "Elena Rodriguez",
    role: "Marketing Director, Horizon Agency",
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Client Success</h2>
          <h3 className="text-4xl md:text-5xl font-black">What They Say</h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Quote className="absolute -top-10 -left-10 text-white/5 w-32 h-32" />
          
          <div className="min-h-[250px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl text-gray-300 font-medium leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].author}</h4>
                  <p className="text-accent">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-colors hover-target"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-colors hover-target"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
