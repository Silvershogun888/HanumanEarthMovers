
import React from 'react';
import { motion } from 'framer-motion';
import { Tractor, Construction, Truck, HardHat, Pickaxe, Settings, ArrowRight } from 'lucide-react';
import SteelWipe from '../components/SteelWipe';
import { SERVICES, FLEET } from '../constants';
import LiquidButton from '../components/LiquidButton';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const getServicePath = (id: string) => {
    switch (id) {
      case 'agri': return '/agri';
      case 'infra': return '/infrastructure';
      case 'hiring': return '/hiring';
      default: return `/services#${id}`;
    }
  };

  return (
    <SteelWipe>
      <section className="pt-40 pb-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sticky Sidebar */}
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-40 space-y-2">
                <span className="text-[10px] text-[#febd17] font-black uppercase tracking-[0.3em] mb-4 block">Navigation</span>
                {SERVICES.map((s) => (
                  <Link
                    key={s.id}
                    to={getServicePath(s.id)}
                    className="block py-4 border-b border-white/5 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white hover:pl-2 transition-all"
                  >
                    {s.title}
                  </Link>
                ))}
                <a
                  href="#fleet"
                  className="block py-4 border-b border-white/5 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white hover:pl-2 transition-all"
                >
                  Our Fleet
                </a>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-40">
              {SERVICES.map((service, i) => (
                <div key={service.id} id={service.id} className="scroll-mt-40">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-16 h-16 bg-[#febd17] flex items-center justify-center text-black">
                        {service.id === 'agri' && <Tractor size={32} />}
                        {service.id === 'infra' && <Construction size={32} />}
                        {service.id === 'hiring' && <Truck size={32} />}
                      </div>
                      <h2 className="text-4xl md:text-6xl font-black uppercase">{service.title}</h2>
                    </div>
                    
                    <div className="w-full h-[2px] bg-white/5 mb-12 relative overflow-hidden">
                      <motion.div 
                        initial={{ left: '-100%' }}
                        whileInView={{ left: '0%' }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute inset-0 bg-[#febd17]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                      <div className="space-y-6">
                        <p className="text-xl text-gray-400 leading-relaxed italic border-l-2 border-[#febd17] pl-8">
                          {service.description}
                        </p>
                        <p className="text-gray-500 leading-relaxed">
                          We evolved from an agriculture value-chain investment philosophy. Our {service.title.toLowerCase()} encompasses detailed planning, bush clearance, and implementation with modernization at its core.
                        </p>
                        {service.id === 'hiring' && (
                          <div className="pt-6">
                            <Link to="/hiring">
                              <LiquidButton variant="outline" className="flex items-center gap-3">
                                View Full Hiring Fleet <ArrowRight size={18} />
                              </LiquidButton>
                            </Link>
                          </div>
                        )}
                        {service.id === 'agri' && (
                          <div className="pt-6">
                            <Link to="/agri">
                              <LiquidButton variant="outline" className="flex items-center gap-3">
                                View Agri Portfolio <ArrowRight size={18} />
                              </LiquidButton>
                            </Link>
                          </div>
                        )}
                        {service.id === 'infra' && (
                          <div className="pt-6">
                            <Link to="/infrastructure">
                              <LiquidButton variant="outline" className="flex items-center gap-3">
                                View Infrastructure Portfolio <ArrowRight size={18} />
                              </LiquidButton>
                            </Link>
                          </div>
                        )}
                      </div>
                      <div className="bg-[#111] p-10 border border-white/5">
                        <h4 className="text-[#febd17] font-bold uppercase tracking-widest text-xs mb-8">Key Capabilities</h4>
                        <ul className="space-y-4">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center justify-between text-sm group cursor-default">
                              <span className="text-gray-400 group-hover:text-white transition-colors">{detail}</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-[#febd17]" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="aspect-video bg-[#111] overflow-hidden group">
                      <img 
                        src={service.image || `https://picsum.photos/seed/${service.id}service/1200/600`} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                      />
                    </div>
                  </motion.div>
                </div>
              ))}

              {/* Fleet Section */}
              <div id="fleet" className="scroll-mt-40">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-6xl font-black uppercase mb-12">Our <span className="text-[#febd17]">Fleet</span></h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-white/5 border border-white/5">
                    {FLEET.map((item, idx) => (
                      <div key={idx} className="bg-[#0a0a0a] p-8 flex justify-between items-center group">
                        <div>
                          <h4 className="text-lg font-bold uppercase text-gray-400 group-hover:text-[#febd17] transition-colors">{item.name}</h4>
                          <span className="text-[10px] text-gray-600 uppercase tracking-widest">Available Units</span>
                        </div>
                        <div className="text-4xl font-black text-white/20 group-hover:text-white transition-colors">
                          {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-20 p-12 bg-[#febd17] text-black flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="max-w-xl">
                      <h3 className="text-3xl font-black uppercase mb-4 leading-none">Need specific equipment?</h3>
                      <p className="font-medium opacity-80">Our fleet includes JCB, CAT, KOMATSU, CASE, and more. Available for both hiring and direct purchase.</p>
                    </div>
                    <Link to="/hiring">
                      <LiquidButton variant="primary" className="bg-black text-white">View Hiring Options</LiquidButton>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SteelWipe>
  );
};

export default Services;
