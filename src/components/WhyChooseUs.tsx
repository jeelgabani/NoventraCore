import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck, Users } from 'lucide-react';

const reasons = [
  {
    icon: <Target className="text-white" size={32} />,
    title: 'Result-Driven Approach',
    description: 'We focus on metrics that matter. Every pixel and line of code is optimized for conversion and growth.',
    colSpan: 'md:col-span-2',
    bg: 'bg-gradient-to-br from-red-950/40 to-black',
  },
  {
    icon: <Zap className="text-white" size={32} />,
    title: 'High Performance',
    description: 'Lightning-fast load times and smooth interactions.',
    colSpan: 'md:col-span-1',
    bg: 'bg-white/[0.03]',
  },
  {
    icon: <ShieldCheck className="text-white" size={32} />,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols to ensure your data is safe.',
    colSpan: 'md:col-span-1',
    bg: 'bg-white/[0.03]',
  },
  {
    icon: <Users className="text-white" size={32} />,
    title: 'Dedicated Team',
    description: 'A passionate team of senior developers and designers acting as your technical partners.',
    colSpan: 'md:col-span-2',
    bg: 'bg-gradient-to-tr from-accent/20 to-black',
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-32 relative bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-end justify-between mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Why Choose Us</h2>
            <h3 className="text-5xl md:text-6xl font-black mb-6 leading-tight">The NoventraCore Advantage</h3>
            <p className="text-gray-400 text-xl leading-relaxed">
              We don't just execute tasks; we partner with you to understand your business objectives. Our holistic approach ensures that the digital products we build are perfectly aligned with your long-term vision.
            </p>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="shrink-0"
          >
             <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">
               250<span className="text-accent">+</span>
             </div>
             <div className="text-2xl font-bold text-white mt-2">Projects Delivered</div>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-3xl p-8 border border-white/5 overflow-hidden transition-all duration-500 hover:border-accent/40 ${reason.colSpan} ${reason.bg}`}
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-500">
                  {reason.icon}
                </div>
                
                <div className="mt-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <h4 className="text-2xl font-bold text-white mb-3">{reason.title}</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
