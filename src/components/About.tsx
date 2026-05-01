import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Lightbulb, Code2, Globe2 } from 'lucide-react';

const AboutCard = ({ title, description, icon: Icon, delay }: { title: string, description: string, icon: any, delay: number }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/5 p-8 flex flex-col items-start"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(177,18,38,0.15), transparent 40%)`,
        }}
      />
      
      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent mb-6 z-10 shadow-[0_0_15px_rgba(177,18,38,0.2)]">
        <Icon size={28} />
      </div>
      
      <h4 className="text-2xl font-bold text-white mb-4 z-10">{title}</h4>
      <p className="text-gray-400 leading-relaxed z-10">
        {description}
      </p>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#0a0a0a]">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-accent tracking-widest uppercase mb-4"
          >
            About NoventraCore
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
          >
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-500">Digital Futures</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-400"
          >
            NoventraCore Infotech LLP is a premium digital agency specializing in transforming complex business challenges into elegant, high-performance digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <AboutCard 
            title="Strategic Vision" 
            description="We partner with visionary brands to understand their core objectives, crafting strategies that ensure long-term digital dominance and measurable ROI."
            icon={Lightbulb}
            delay={0.1}
          />
          <AboutCard 
            title="Modern Architecture" 
            description="Our solutions are engineered for excellence, utilizing scalable technologies and modern frameworks to guarantee lightning-fast performance."
            icon={Code2}
            delay={0.2}
          />
          <AboutCard 
            title="Global Impact" 
            description="From local startups to global enterprises, we design immersive experiences that resonate with users across the world, driving unparalleled engagement."
            icon={Globe2}
            delay={0.3}
          />
        </div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-around gap-12"
        >
          <div className="text-center">
            <h4 className="text-5xl md:text-6xl font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">10+</h4>
            <span className="text-sm text-accent font-bold tracking-widest uppercase">Years of Expertise</span>
          </div>
          <div className="w-px h-16 bg-white/10 hidden md:block"></div>
          <div className="text-center">
            <h4 className="text-5xl md:text-6xl font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">250+</h4>
            <span className="text-sm text-accent font-bold tracking-widest uppercase">Projects Delivered</span>
          </div>
          <div className="w-px h-16 bg-white/10 hidden md:block"></div>
          <div className="text-center">
            <h4 className="text-5xl md:text-6xl font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">99%</h4>
            <span className="text-sm text-accent font-bold tracking-widest uppercase">Client Satisfaction</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
