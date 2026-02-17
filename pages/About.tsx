
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, History, ShieldCheck } from 'lucide-react';
import SteelWipe from '../components/SteelWipe';
import { QUALITY_PILLARS } from '../constants';

const About: React.FC = () => {
  return (
    <SteelWipe>
      {/* Intro */}
      <section className="pt-40 pb-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-[2px] w-12 bg-[#febd17]" />
                <span className="text-[#febd17] font-bold uppercase tracking-widest text-sm">Our Legacy</span>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-[0.9]">
                Since <span className="text-[#febd17]">2013</span>, Engineering the Future.
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Hanuman Earth Movers and Construction Ltd is an India and USA-based results-driven investment group specializing in Agribusiness and heavy-duty infrastructure projects.
              </p>
              <p className="text-gray-500 leading-relaxed mb-12">
                We are known for our client proximity, unfailing commitment to excellence, practical knowledge, and unmatched ethical behavior. Our core competence lies in mobilizing skilled professionals to add massive value to client projects.
              </p>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border-4 border-[#febd17] p-4"
              >
                <img src="https://picsum.photos/seed/about/800/1000" alt="Site Work" className="w-full grayscale brightness-75" />
              </motion.div>
              <div className="absolute -bottom-10 -left-10 bg-[#febd17] text-black p-10 font-black text-4xl hidden md:block">
                ZAMBIA • INDIA • USA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">Pillars of <span className="text-[#febd17]">Quality</span></h2>
            <div className="w-24 h-1 bg-[#febd17] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {QUALITY_PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-white/5 bg-[#111] hover:border-[#febd17]/30 transition-all group"
              >
                <div className="mb-6 flex justify-between items-start">
                  <span className="text-5xl font-black text-white/5 group-hover:text-[#febd17]/10 transition-colors">0{i + 1}</span>
                  <ShieldCheck className="text-[#febd17]" size={24} />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-white">{pillar.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase">Leadership <span className="text-[#febd17]">Team</span></h2>
            <p className="text-gray-500 max-w-sm">Our leadership brings over 40 years of combined experience in construction and plant hire.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Mr. G. Sravan', role: 'Director', exp: '14 Years in Earth Moving & Roads' },
              { name: 'Mr. B. Chaitanya', role: 'Director - Admin', exp: '13 Years in Sales & Marketing' },
              { name: 'Mr. G. Anudeep Reddy', role: 'Director - Technical', exp: '13 Years in Technical Fleet Ops' }
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-[#111]">
                  <img src={`https://picsum.photos/seed/${member.name}/600/800`} className="w-full h-full object-cover grayscale transition-all group-hover:scale-105 group-hover:grayscale-0" />
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#febd17]/50 transition-all" />
                </div>
                <h3 className="text-2xl font-black uppercase text-white group-hover:text-[#febd17] transition-colors">{member.name}</h3>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2">{member.role}</div>
                <p className="text-sm text-gray-400 italic">"{member.exp}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SteelWipe>
  );
};

export default About;
