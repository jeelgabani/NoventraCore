import { motion } from 'framer-motion';
import { ArrowRight, Database, Box, Smartphone, LayoutGrid, Terminal } from 'lucide-react';
import { useState } from 'react';
import ProjectDetailOverlay from './ProjectDetailOverlay';

const projects = [
  {
    id: 1,
    title: 'NeonVoid Architecture',
    category: '3D Geometric Design',
    description: 'An abstract, interactive 3D web experience built to showcase spatial computing capabilities.',
    longDescription: 'NeonVoid is a flagship project exploring the boundaries of WebGL and React Three Fiber. By abstracting complex data structures into geometric representations, it allows users to navigate data spatially. The architecture is built for extreme performance, maintaining 60FPS across devices.',
    tech: ['React Three Fiber', 'WebGL', 'GSAP', 'Next.js'],
    color: 'from-red-900 to-black',
    icon: <Box size={120} className="stroke-1" />,
    gridClass: 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-black to-red-950/20'
  },
  {
    id: 2,
    title: 'Quantum Data Viz',
    category: 'UI/UX & Analytics',
    description: 'A premium, hyper-detailed dashboard interface designed for deep data insights.',
    longDescription: 'This enterprise analytics dashboard processes millions of rows of data into sleek, real-time visual streams. The dark-mode interface utilizes glassmorphism to establish a clear visual hierarchy, ensuring traders and analysts can parse information instantly without cognitive overload.',
    tech: ['D3.js', 'React', 'Tailwind CSS', 'WebSockets'],
    color: 'from-gray-900 to-black',
    icon: <Database size={80} className="stroke-1" />,
    gridClass: 'md:col-span-1 md:row-span-1 bg-white/[0.02]'
  },
  {
    id: 3,
    title: 'Aero Luxury App',
    category: 'Mobile Experience',
    description: 'Ultra-modern automotive companion app blending sleek aesthetics with vehicle controls.',
    longDescription: 'Aero redefines the luxury car ownership experience. Acting as a digital key and control hub, the app features 3D car models, real-time telemetry, and climate control, all wrapped in a striking crimson and deep black UI that matches the physical vehicle interior.',
    tech: ['React Native', 'Reanimated', 'Firebase', 'BLE'],
    color: 'from-red-950 to-black',
    icon: <Smartphone size={80} className="stroke-1" />,
    gridClass: 'md:col-span-1 md:row-span-1 bg-white/[0.02]'
  },
  {
    id: 4,
    title: 'Neural Network API',
    category: 'Backend Infrastructure',
    description: 'High-performance API routing for distributed machine learning models.',
    longDescription: 'A robust backend architecture designed to handle thousands of requests per second. It routes payloads to distributed GPU clusters for fast inference, returning results to the frontend in milliseconds. Features an elegant developer dashboard for API key management.',
    tech: ['Node.js', 'Go', 'Redis', 'Docker'],
    color: 'from-zinc-900 to-black',
    icon: <Terminal size={80} className="stroke-1" />,
    gridClass: 'md:col-span-1 md:row-span-2 bg-gradient-to-b from-white/[0.05] to-transparent'
  },
  {
    id: 5,
    title: 'Design System',
    category: 'UI Architecture',
    description: 'A comprehensive, scalable component library for enterprise teams.',
    longDescription: 'A full-scale design system ensuring brand consistency across 12 distinct digital products. It includes React components, Figma tokens, and automated testing, drastically reducing time-to-market for new features.',
    tech: ['Storybook', 'Figma API', 'React', 'Tailwind'],
    color: 'from-black to-red-900/40',
    icon: <LayoutGrid size={80} className="stroke-1" />,
    gridClass: 'md:col-span-2 md:row-span-1 bg-gradient-to-r from-transparent to-red-950/20'
  }
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="portfolio" className="py-32 relative overflow-hidden bg-[#050505] border-t border-white/5">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Selected Work</h2>
              <h3 className="text-5xl md:text-6xl font-black">Featured Projects</h3>
            </div>
            <button 
              onClick={() => setActiveProject(projects[0])}
              className="inline-flex items-center gap-2 text-white hover:text-accent font-medium transition-colors group bg-transparent border-none cursor-pointer"
            >
              View All Projects 
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveProject(project)}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 cursor-pointer transition-all duration-500 hover:border-accent/50 hover:shadow-[0_0_40px_rgba(177,18,38,0.15)] flex flex-col p-8 ${project.gridClass}`}
              >
                {/* Abstract Visual Background */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 flex items-center justify-center transform group-hover:scale-110">
                  <div className={`text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] ${project.id === 1 ? 'animate-spin-slow' : ''}`}>
                    {project.icon}
                  </div>
                </div>

                <div className="relative z-10 flex flex-col h-full justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-accent font-bold text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                    <h4 className="text-2xl lg:text-3xl font-black text-white mb-2">{project.title}</h4>
                    <p className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectDetailOverlay 
        project={activeProject} 
        isOpen={activeProject !== null} 
        onClose={() => setActiveProject(null)} 
      />
    </>
  );
};

export default Portfolio;
