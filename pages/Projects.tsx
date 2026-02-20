import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers } from 'lucide-react';
import SteelWipe from '../components/SteelWipe';
import SEO from '../components/SEO';
import { PROJECTS } from '../constants';
import LiquidButton from '../components/LiquidButton';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Agri' | 'Infrastructure' | 'Energy'>('All');

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <SteelWipe>
      <SEO
        title="Projects"
        description="Browse our portfolio of successful agribusiness and infrastructure projects across Zambia, including collaborations with Mansa Sugar, ZESCO, and Sterling & Wilson."
        keywords="Hanuman Earth Movers projects, Mansa Sugar Chembe, Sterling and Wilson solar plant, Zambia infrastructure case studies, Agribusiness development portfolio"
        url="/projects"
      />
      <section className="pt-40 pb-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="h-[2px] w-12 bg-[#febd17]" />
                <span className="text-[#febd17] font-bold uppercase tracking-widest text-sm">Portfolio</span>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">Global <span className="text-[#febd17]">Footprint</span></h1>
            </div>

            <div className="flex flex-wrap gap-2">
              {['All', 'Agri', 'Infrastructure', 'Energy'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f as any)}
                  className={`px-6 py-2 text-[10px] uppercase font-bold tracking-[0.2em] border transition-all ${filter === f
                      ? 'bg-[#febd17] text-black border-[#febd17]'
                      : 'border-white/10 text-gray-500 hover:border-[#febd17]/50'
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatePresence mode='wait'>
              <motion.div
                key={filter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-12"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative h-[600px] group overflow-hidden border border-white/5 bg-[#111]"
                  >
                    {/* Background Image */}
                    <img
                      src={project.image}
                      alt={project.client}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.id}/800/600`;
                      }}
                    />

                    {/* Dark Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

                    {/* Top Badge */}
                    <div className="absolute top-8 left-8">
                      <span className="bg-[#febd17] text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>

                    {/* Content Overlays */}
                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-4 h-[1px] bg-[#febd17]" />
                        <span className="text-[10px] text-[#febd17] font-bold uppercase tracking-widest">{project.location}</span>
                      </div>

                      <h3 className="text-4xl font-black text-white uppercase mb-6 leading-none">
                        {project.client}
                      </h3>

                      <p className="text-gray-300 mb-8 leading-relaxed text-sm max-w-md line-clamp-2 transition-all group-hover:line-clamp-none">
                        {project.description}
                      </p>

                      <div className="pt-8 border-t border-white/20 flex flex-wrap gap-4 items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.params.slice(0, 2).map(p => (
                            <span key={p} className="text-[9px] bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 text-gray-300 uppercase tracking-widest font-bold">
                              {p}
                            </span>
                          ))}
                        </div>
                        <LiquidButton variant="outline" className="text-xs py-3 px-6 border-white/30 text-white hover:border-[#febd17]">View Full Specs</LiquidButton>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Stats Board */}
      <section className="py-32 border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 bg-[#111] p-12 relative overflow-hidden border border-white/5">
            {/* Industrial Accents */}
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Layers size={100} className="text-[#febd17]" />
            </div>

            {[
              { label: 'Total Volume Moved', value: '250,000+', unit: 'CBM' },
              { label: 'Trenching Completed', value: '150+', unit: 'KMS' },
              { label: 'Satisfied Clients', value: '45+', unit: 'COMPANIES' },
              { label: 'Safety Record', value: '100%', unit: 'COMPLIANCE' }
            ].map((s, idx) => (
              <div key={idx} className="relative z-10 border-l border-[#febd17]/30 pl-8">
                <div className="text-3xl font-black text-white mb-2 font-mono">{s.value}</div>
                <div className="text-[10px] text-[#febd17] font-bold uppercase tracking-widest mb-1">{s.unit}</div>
                <div className="text-xs text-gray-500 uppercase font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SteelWipe>
  );
};

export default Projects;
