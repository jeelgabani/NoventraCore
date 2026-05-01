import { motion } from 'framer-motion';
import Hero3D from './Hero3D';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      
      <Hero3D />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-black leading-[1.05] mb-6 md:mb-8 tracking-tight"
          >
            Crafting Digital
            <br />
            Experiences That
            <br />
            <span className="text-gradient-accent">Define the Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-10 md:mb-12 max-w-2xl leading-relaxed"
          >
            Web, App, UI/UX, Branding & Digital Innovation. We build high-performance solutions for visionary brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-accent text-white font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(177,18,38,0.5)] flex items-center gap-2"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 h-full w-0 bg-red-700 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
            </a>
            
            <a
              href="#portfolio"
              className="px-8 py-4 border border-white/20 hover:border-accent hover:bg-accent/10 text-white font-bold rounded-full transition-all duration-300"
            >
              View Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
