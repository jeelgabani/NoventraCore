import { motion } from 'framer-motion';
import { MonitorSmartphone, Code2, Smartphone, Palette, PenTool, Rocket, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <MonitorSmartphone size={40} className="stroke-1" />,
    title: 'Web Design',
    description: 'Stunning, responsive interfaces that captivate users and elevate your brand identity.',
    color: 'from-blue-900/20 to-black',
    accent: 'group-hover:text-blue-400'
  },
  {
    icon: <Code2 size={40} className="stroke-1" />,
    title: 'Web Development',
    description: 'Robust, scalable, and high-performance web applications built with modern frameworks.',
    color: 'from-red-900/20 to-black',
    accent: 'group-hover:text-accent'
  },
  {
    icon: <Smartphone size={40} className="stroke-1" />,
    title: 'App Development',
    description: 'Native and cross-platform mobile experiences that users love to interact with.',
    color: 'from-purple-900/20 to-black',
    accent: 'group-hover:text-purple-400'
  },
  {
    icon: <Palette size={40} className="stroke-1" />,
    title: 'UI/UX Design',
    description: 'Intuitive user journeys and magnetic interactions designed for maximum conversion.',
    color: 'from-emerald-900/20 to-black',
    accent: 'group-hover:text-emerald-400'
  },
  {
    icon: <PenTool size={40} className="stroke-1" />,
    title: 'Graphic Design',
    description: 'Striking visuals and marketing assets that communicate your core message effectively.',
    color: 'from-amber-900/20 to-black',
    accent: 'group-hover:text-amber-400'
  },
  {
    icon: <Rocket size={40} className="stroke-1" />,
    title: 'Branding',
    description: 'Comprehensive brand strategies that establish dominance in your industry niche.',
    color: 'from-pink-900/20 to-black',
    accent: 'group-hover:text-pink-400'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Our Expertise</h2>
            <h3 className="text-5xl md:text-6xl font-black leading-tight">Digital Solutions <br className="hidden md:block"/> Tailored for Excellence</h3>
          </div>
          <p className="text-gray-400 text-xl max-w-md">
            We combine cutting-edge technology with world-class design to deliver products that outperform the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 cursor-pointer`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              {/* Inner content wrapper */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className={`text-gray-500 transition-colors duration-500 ${service.accent} transform group-hover:scale-110 group-hover:-rotate-3`}>
                      {service.icon}
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 bg-white/5 backdrop-blur-sm">
                      <ArrowUpRight size={20} className="text-white" />
                    </div>
                  </div>
                  
                  <h4 className="text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500">{service.title}</h4>
                </div>
                
                <p className="text-gray-400 leading-relaxed text-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
              </div>

              {/* Animated bottom border on hover */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-in-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
