import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText, Cookie } from 'lucide-react';
import { useEffect, useState } from 'react';

type LegalTab = 'Privacy Policy' | 'Terms of Service' | 'Cookie Policy';

interface LegalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalTab;
}

const tabs: { name: LegalTab; icon: React.ReactNode }[] = [
  { name: 'Privacy Policy', icon: <Shield size={18} /> },
  { name: 'Terms of Service', icon: <FileText size={18} /> },
  { name: 'Cookie Policy', icon: <Cookie size={18} /> },
];

const LegalOverlay = ({ isOpen, onClose, initialTab = 'Privacy Policy' }: LegalOverlayProps) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (initialTab) setActiveTab(initialTab);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      {/* Blur Background */}
      <motion.div 
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-black/60 pointer-events-auto"
        onClick={onClose}
      />

      {/* Overlay Content Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-[105] w-full max-w-5xl h-[85vh] mx-4 bg-[#0a0a0a]/95 border border-white/10 rounded-3xl overflow-hidden pointer-events-auto shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col md:flex-row"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/5 hover:bg-accent rounded-full flex items-center justify-center text-white transition-colors md:hidden"
            >
              <X size={20} />
            </button>

            {/* Sidebar Navigation */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/5 p-6 md:p-8 flex flex-col pt-16 md:pt-8">
              <div className="hidden md:flex items-center justify-between mb-10">
                <h3 className="text-xl font-bold text-white">Legal Information</h3>
              </div>
              
              <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto custom-scrollbar pb-4 md:pb-0">
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 whitespace-nowrap md:whitespace-normal font-medium text-sm md:text-base ${
                      activeTab === tab.name 
                        ? 'bg-accent text-white shadow-[0_0_20px_rgba(177,18,38,0.3)]' 
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {tab.icon}
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 md:p-12 overflow-y-auto custom-scrollbar relative" data-lenis-prevent="true">
              <button 
                onClick={onClose}
                className="hidden md:flex absolute top-8 right-8 z-20 w-12 h-12 bg-white/5 hover:bg-accent rounded-full items-center justify-center text-white transition-colors"
              >
                <X size={24} />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-3xl pb-10"
                >
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-8">{activeTab}</h2>
                  
                  <div className="prose prose-invert prose-p:text-gray-400 prose-headings:text-white prose-a:text-accent hover:prose-a:text-red-400 prose-strong:text-gray-200 max-w-none">
                    
                    {activeTab === 'Privacy Policy' && (
                      <div className="space-y-6">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>
                        <p>
                          At NoventraCore Infotech LLP, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                        <h3 className="text-xl font-bold mt-8 mb-4 text-accent">Information We Collect</h3>
                        <p>
                          We may collect information about you in a variety of ways. The information we may collect includes personal data such as your name, email address, and demographic information that you voluntarily give to us when choosing to participate in various activities related to the Site.
                        </p>
                        <h3 className="text-xl font-bold mt-8 mb-4 text-accent">How We Use Your Information</h3>
                        <p>
                          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We may use information collected about you to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-400">
                          <li>Create and manage your account.</li>
                          <li>Email you regarding your account or order.</li>
                          <li>Fulfill and manage purchases, orders, payments, and other transactions.</li>
                          <li>Improve our website and services to better serve you.</li>
                        </ul>
                      </div>
                    )}

                    {activeTab === 'Terms of Service' && (
                      <div className="space-y-6">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>
                        <p>
                          Welcome to NoventraCore Infotech LLP. By accessing or using our website and services, you agree to be bound by these Terms of Service.
                        </p>
                        <h3 className="text-xl font-bold mt-8 mb-4 text-accent">Use License</h3>
                        <p>
                          Permission is granted to temporarily download one copy of the materials (information or software) on NoventraCore's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                        </p>
                        <h3 className="text-xl font-bold mt-8 mb-4 text-accent">Disclaimer</h3>
                        <p>
                          The materials on NoventraCore's website are provided on an 'as is' basis. NoventraCore makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                        <h3 className="text-xl font-bold mt-8 mb-4 text-accent">Limitations</h3>
                        <p>
                          In no event shall NoventraCore or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on NoventraCore's website.
                        </p>
                      </div>
                    )}

                    {activeTab === 'Cookie Policy' && (
                      <div className="space-y-6">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>
                        <p>
                          This Cookie Policy explains how NoventraCore Infotech LLP ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website.
                        </p>
                        <h3 className="text-xl font-bold mt-8 mb-4 text-accent">What are cookies?</h3>
                        <p>
                          Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                        </p>
                        <h3 className="text-xl font-bold mt-8 mb-4 text-accent">Why do we use cookies?</h3>
                        <p>
                          We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.
                        </p>
                        <h3 className="text-xl font-bold mt-8 mb-4 text-accent">How can I control cookies?</h3>
                        <p>
                          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject.
                        </p>
                      </div>
                    )}

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LegalOverlay;
