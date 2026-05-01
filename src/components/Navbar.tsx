import { useState, useEffect, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sparklePos, setSparklePos] = useState<{ x: number, y: number, id: number }[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Sparkle effect logic
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newSparkle = { x, y, id: Date.now() };
    setSparklePos(prev => [...prev, newSparkle]);
    
    // Remove sparkle after animation
    setTimeout(() => {
      setSparklePos(prev => prev.filter(s => s.id !== newSparkle.id));
    }, 1000);

    // Smooth scroll navigation
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }, 300); // Wait for sparkle effect before jumping
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center ${
        isScrolled ? 'pt-4' : 'pt-6'
      }`}
    >
      <div 
        className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled 
            ? 'glass rounded-full px-6 py-3 w-[90%] md:w-[80%] max-w-5xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-white/10' 
            : 'w-full container px-6 py-2 bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group shrink-0">
          <img 
            src="/noventra core logo dark.png" 
            alt="NoventraCore Logo" 
            className="h-6 md:h-8 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(177,18,38,0.3)]"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group overflow-hidden rounded-full"
            >
              <span className="relative z-10 group-hover:text-accent transition-colors duration-300">{link.name}</span>
              
              {/* Hover background */}
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></span>
              
              {/* Sparkle Animations */}
              <AnimatePresence>
                {sparklePos.map(sparkle => (
                  <motion.div
                    key={sparkle.id}
                    initial={{ scale: 0, opacity: 1, x: sparkle.x - 12, y: sparkle.y - 12 }}
                    animate={{ scale: 2, opacity: 0, y: sparkle.y - 30 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute pointer-events-none z-20 text-accent"
                  >
                    <Sparkles size={16} className="animate-spin-slow" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-accent to-red-600 hover:from-red-600 hover:to-accent text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(177,18,38,0.3)] hover:shadow-[0_0_30px_rgba(177,18,38,0.6)] hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-[5%] w-[90%] bg-primary/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-6 py-10 rounded-3xl border border-white/10 shadow-2xl"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-2xl font-heading font-bold text-white hover:text-accent transition-colors relative"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
