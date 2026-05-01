import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Get In Touch</h2>
            <h3 className="text-5xl md:text-6xl font-black mb-6">Let's Build the Future</h3>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help you navigate the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <motion.a 
              href="mailto:team.noventracore@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover-target"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Mail className="text-white" size={28} />
              </div>
              <h4 className="text-white font-bold text-xl mb-2">Email Us</h4>
              <p className="text-gray-400 group-hover:text-white transition-colors">team.noventracore@gmail.com</p>
            </motion.a>

            {/* Phone */}
            <motion.a 
              href="tel:+916352120158"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover-target"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Phone className="text-white" size={28} />
              </div>
              <h4 className="text-white font-bold text-xl mb-2">Call Us</h4>
              <p className="text-gray-400 group-hover:text-white transition-colors">+91 6352 120 158</p>
            </motion.a>

            {/* Location */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:border-accent/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <MapPin className="text-white" size={28} />
              </div>
              <h4 className="text-white font-bold text-xl mb-2">Location</h4>
              <p className="text-accent font-medium">Currently Online Only</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
