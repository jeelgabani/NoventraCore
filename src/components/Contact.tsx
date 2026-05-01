import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import SuccessModal from './SuccessModal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Connect to Firestore collection 'contacts'
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: serverTimestamp()
      });

      setStatus('idle');
      setFormData({ name: '', email: '', message: '' });
      setIsSuccessModalOpen(true);
      
    } catch (error) {
      console.error("Error saving to Firebase: ", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <>
      <section id="contact" className="py-32 relative bg-[#050505] border-t border-white/5 overflow-hidden">
        {/* Background glow */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:w-5/12"
            >
              <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Get In Touch</h2>
              <h3 className="text-5xl md:text-6xl font-black mb-6">Let's Build the Future</h3>
              <p className="text-gray-400 text-xl leading-relaxed mb-12">
                Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help you navigate the digital landscape.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <a href="mailto:team.noventracore@gmail.com" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">Email Us</h4>
                    <p className="text-gray-400 group-hover:text-white transition-colors">team.noventracore@gmail.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+916352120158" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">Call Us</h4>
                    <p className="text-gray-400 group-hover:text-white transition-colors">+91 6352 120 158</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">Location</h4>
                    <p className="text-accent font-medium mt-1">Currently Online Only</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-7/12"
            >
              <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-3xl">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-accent hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(177,18,38,0.4)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover-target"
                >
                  {status === 'submitting' ? 'Sending to Firebase...' : 'Send Message'}
                  <Send size={18} />
                </button>

                {status === 'error' && (
                  <p className="text-red-400 mt-4 text-center font-medium">Please check your Firebase configuration in the .env file.</p>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <SuccessModal 
        isOpen={isSuccessModalOpen} 
        onClose={() => setIsSuccessModalOpen(false)} 
      />
    </>
  );
};

export default Contact;
