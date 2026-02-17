
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Navigation2, ExternalLink } from 'lucide-react';
import SteelWipe from '../components/SteelWipe';
import LiquidButton from '../components/LiquidButton';

const Contact: React.FC = () => {
  return (
    <SteelWipe>
      <section className="pt-40 pb-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-[2px] w-12 bg-[#febd17]" />
                <span className="text-[#febd17] font-bold uppercase tracking-widest text-sm">Get In Touch</span>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-black uppercase mb-12 leading-none">Start Your <span className="text-[#febd17]">Project</span></h1>
              
              <div className="space-y-12">
                {[
                  { icon: <MapPin className="text-[#febd17]" />, title: 'Head Office', value: 'Plot No: 2279, Opp Northmead Police post, Great East Road, Lusaka' },
                  { icon: <Phone className="text-[#febd17]" />, title: 'Direct Line', value: '+260 966 935 884 / +260 975 209 999' },
                  { icon: <Mail className="text-[#febd17]" />, title: 'Email Support', value: 'hanumanmachines@gmail.com' },
                  { icon: <Clock className="text-[#febd17]" />, title: 'Business Hours', value: 'Mon - Fri: 08:00 - 17:00' }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-12 h-12 bg-[#111] border border-white/5 flex items-center justify-center transition-colors group-hover:border-[#febd17]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#febd17] mb-2">{item.title}</h4>
                      <p className="text-gray-400 font-medium leading-relaxed max-w-sm">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-20 border-t border-white/5 pt-12">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">Branch Locations</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 bg-[#111] border border-white/5">
                    <span className="text-[#febd17] text-[10px] font-bold uppercase mb-2 block">Solwezi Branch</span>
                    <p className="text-xs text-gray-500">Chingola Road, Near Mitech Traffic Control</p>
                  </div>
                  <div className="p-6 bg-[#111] border border-white/5">
                    <span className="text-[#febd17] text-[10px] font-bold uppercase mb-2 block">Kitwe Branch</span>
                    <p className="text-xs text-gray-500">#13-13th Street, Nkana East</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-[#111] p-12 border border-white/5 relative"
            >
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#febd17]" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#febd17]" />
              
              <h2 className="text-3xl font-black uppercase mb-12">Request <span className="text-[#febd17]">Quote</span></h2>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Full Name</label>
                    <input type="text" className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-4 focus:outline-none focus:border-[#febd17] transition-all text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Company</label>
                    <input type="text" className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-4 focus:outline-none focus:border-[#febd17] transition-all text-sm" placeholder="Industrial Corp" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Email Address</label>
                  <input type="email" className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-4 focus:outline-none focus:border-[#febd17] transition-all text-sm" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Service Required</label>
                  <select className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-4 focus:outline-none focus:border-[#febd17] transition-all text-sm appearance-none">
                    <option>Agriculture Infrastructure</option>
                    <option>Roads & Construction</option>
                    <option>Equipment Hiring</option>
                    <option>Equipment Sales</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Project Description</label>
                  <textarea rows={4} className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-4 focus:outline-none focus:border-[#febd17] transition-all text-sm" placeholder="Briefly describe your requirements..." />
                </div>

                <div className="pt-4">
                  <LiquidButton variant="primary" className="w-full flex items-center justify-center gap-3">
                    Send Message <Send size={16} />
                  </LiquidButton>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[600px] bg-[#111] relative overflow-hidden group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.925206963495!2d28.2738797!3d-15.4153751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f3408a0d7f1d%3A0xc3f982823861208!2sNorthmead%20Police%20Post!5e0!3m2!1sen!2szm!4v1739345241415!5m2!1sen!2szm"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0.6) invert(0.9) contrast(1.1) brightness(0.9)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hanuman Earth Movers Lusaka Office"
        ></iframe>
        
        {/* Custom Place Card Overlay */}
        <div className="absolute top-10 left-10 z-20 max-w-sm w-full bg-[#111] p-8 border border-white/10 shadow-2xl backdrop-blur-md bg-opacity-95">
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#febd17]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#febd17]" />
          
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="text-[#febd17]" size={18} />
                <span className="text-[#febd17] text-[10px] font-black uppercase tracking-[0.2em]">Regional HQ</span>
              </div>
              <h3 className="text-white text-2xl font-black uppercase tracking-tighter leading-none mb-1">Hanuman Earth Movers</h3>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">& Construction Ltd</p>
            </div>
          </div>
          
          <div className="space-y-6 mb-10 border-t border-white/5 pt-6">
            <div className="flex items-start gap-4">
              <MapPin size={16} className="text-[#febd17] mt-1 flex-shrink-0" />
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed">
                Plot No: 2279, Opp Northmead Police post, Great East Road, Lusaka, Zambia
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-[#febd17] text-xs">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">5.0 | Premium Service</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <a 
               href="https://www.google.com/maps/dir/?api=1&destination=-15.4153751,28.2738797" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 bg-[#febd17] text-black py-4 text-[10px] font-black uppercase tracking-widest hover:bg-white transition-colors"
             >
               <Navigation2 size={14} /> Directions
             </a>
             <a 
               href="https://www.google.com/maps/search/?api=1&query=-15.4153751,28.2738797" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 border border-white/20 text-white py-4 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors"
             >
               <ExternalLink size={14} /> View Large
             </a>
          </div>
        </div>
        
        {/* Structural Blueprint Grid Overlay (Light) */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-5">
           <svg width="100%" height="100%" className="absolute inset-0">
             <pattern id="map-grid" width="60" height="60" patternUnits="userSpaceOnUse">
               <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
             </pattern>
             <rect width="100%" height="100%" fill="url(#map-grid)" />
           </svg>
        </div>
      </section>
    </SteelWipe>
  );
};

export default Contact;
