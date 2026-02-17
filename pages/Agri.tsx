
import React from 'react';
import { motion } from 'framer-motion';
import { Tractor, Sprout, Droplets, Mountain } from 'lucide-react';
import SteelWipe from '../components/SteelWipe';
import { AGRI_ASSETS } from '../constants';
import LiquidButton from '../components/LiquidButton';
import { Link } from 'react-router-dom';

const Agri: React.FC = () => {
  return (
    <SteelWipe>
      <section className="pt-40 pb-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[2px] w-12 bg-[#febd17]" />
              <span className="text-[#febd17] font-bold uppercase tracking-widest text-sm">Agribusiness Solutions</span>
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-black uppercase mb-8 leading-[0.9]">
              Agri <span className="text-[#febd17]">Infrastructure</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
              From raw bush clearance to modern irrigation networks, we provide the heavy-duty groundwork required to scale agricultural operations globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {AGRI_ASSETS.map((asset, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group border border-white/5 bg-[#111] overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={asset.image} 
                    alt={asset.name} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#febd17] flex items-center justify-center text-black">
                      <Tractor size={20} />
                    </div>
                    <span className="text-white font-black uppercase tracking-widest text-lg">{asset.name}</span>
                  </div>
                </div>
                <div className="p-10">
                  <p className="text-gray-400 leading-relaxed mb-8 border-l border-[#febd17] pl-6 italic">
                    {asset.description}
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <Droplets className="text-[#febd17]" size={16} />
                      <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Water Mgmt</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mountain className="text-[#febd17]" size={16} />
                      <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Land Prep</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div>
              <div className="text-5xl font-black text-[#febd17] mb-4">5000+</div>
              <div className="text-xs uppercase tracking-[0.3em] font-bold text-gray-500">Hectares Cleared</div>
            </div>
            <div>
              <div className="text-5xl font-black text-[#febd17] mb-4">200km+</div>
              <div className="text-xs uppercase tracking-[0.3em] font-bold text-gray-500">Irrigation Lines</div>
            </div>
            <div>
              <div className="text-5xl font-black text-[#febd17] mb-4">99%</div>
              <div className="text-xs uppercase tracking-[0.3em] font-bold text-gray-500">Project Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto p-16 border border-[#febd17]/20 relative">
             <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#febd17]" />
             <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#febd17]" />
             <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#febd17]" />
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#febd17]" />

            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">Modernize Your <span className="text-[#febd17]">Yield</span></h2>
            <p className="text-gray-400 mb-12">
              Our engineering team works closely with agricultural investors to design infrastructure that maximizes productivity and minimizes operational downtime.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact">
                <LiquidButton>Discuss Your Project</LiquidButton>
              </Link>
              <Link to="/projects">
                <LiquidButton variant="outline">View Case Studies</LiquidButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SteelWipe>
  );
};

export default Agri;
