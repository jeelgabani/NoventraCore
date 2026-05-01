import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import LegalOverlay from './LegalOverlay';

type LegalTab = 'Privacy Policy' | 'Terms of Service' | 'Cookie Policy';

const Footer = () => {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState<LegalTab>('Privacy Policy');

  const openLegal = (e: React.MouseEvent<HTMLAnchorElement>, tab: string) => {
    e.preventDefault();
    setActiveLegalTab(tab as LegalTab);
    setIsLegalOpen(true);
  };

  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 blur-[120px] pointer-events-none rounded-t-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block group mb-6">
              <img 
                src="/noventra core logo dark.png" 
                alt="NoventraCore Logo" 
                className="h-10 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(177,18,38,0.3)]"
              />
            </a>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Crafting premium digital experiences that define the future of technology and design. Your vision, our expertise.
            </p>
            <div className="flex gap-4">
              {/* Social Links Placeholders */}
              {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-accent transition-colors flex items-center gap-1 group">
                    {link}
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    onClick={(e) => openLegal(e, link)}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NoventraCore Infotech LLP. All rights reserved.
          </p>
          <div className="text-gray-500 text-sm flex items-center gap-2">
            Designed with <span className="text-accent animate-pulse">❤</span> for the Future
          </div>
        </div>
      </div>

      <LegalOverlay 
        isOpen={isLegalOpen} 
        onClose={() => setIsLegalOpen(false)} 
        initialTab={activeLegalTab} 
      />
    </footer>
  );
};

export default Footer;
