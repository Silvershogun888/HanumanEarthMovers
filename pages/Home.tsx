import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Add Truck to the imports from lucide-react
import { HardHat, Tractor, Construction, ArrowRight, Gauge, Truck } from 'lucide-react';
import SteelWipe from '../components/SteelWipe';
import LiquidButton from '../components/LiquidButton';
import SEO from '../components/SEO';
import { SERVICES, PROJECTS, FLEET } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simple odometer effect for hero
    const timer = setInterval(() => {
      setCount(prev => prev < 11 ? prev + 1 : 11);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <SteelWipe>
      <SEO
        title="Home"
        description="Hanuman Earth Movers specializes in large scale earth moving, agribusiness projects, and infrastructure development in Zambia, India, and USA. Established leaders in agricultural land preparation and heavy equipment hiring."
        keywords="Hanuman Earth Movers, Earthmoving equipment Zambia, Agribusiness projects Africa, Infrastructure development Zambia, Bush Clearance, Land Preparation"
        url="/"
      />
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src="https://i.imgur.com/sDDGtt4.png"
            className="w-full h-full object-cover"
          />
          {/* Blueprint Line Overlays */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg width="100%" height="100%" className="absolute inset-0">
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase mb-8 leading-[0.9]">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="block"
              >
                Building
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block text-[#febd17]"
              >
                Heavy Duty
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block"
              >
                Foundations
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-lg md:text-xl max-w-xl mb-12 border-l border-white/20 pl-6"
            >
              A leading results-driven investment group specializing in Agribusiness, Infrastructure, and heavy-duty Earth Moving projects across India, USA, and Africa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <Link to="/projects">
                <LiquidButton>Explore Projects</LiquidButton>
              </Link>
              <Link to="/contact">
                <LiquidButton variant="outline">Request Quote</LiquidButton>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-gray-500"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#febd17] to-transparent" />
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Years Experience', value: 11 },
              { label: 'Active Fleet', value: 50 },
              { label: 'Global Offices', value: 3 },
              { label: 'Team Members', value: 100 }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-black text-white mb-2 font-mono">
                  {stat.value}+
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#febd17] font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-none">
                Our Core <span className="text-[#febd17]">Competence</span>
              </h2>
              <p className="text-gray-400">
                We provide end-to-end solutions for large-scale construction and agricultural infrastructure development.
              </p>
            </div>
            <Link to="/services">
              <LiquidButton variant="outline">View All Services</LiquidButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <Link
                key={service.id}
                to={service.id === 'hiring' ? '/hiring' : (service.id === 'agri' ? '/agri' : (service.id === 'infra' ? '/infrastructure' : `/services#${service.id}`))}
                className="group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="h-full p-10 bg-[#111] border border-white/5 hover:border-[#febd17]/50 transition-all duration-500 relative"
                >
                  <div className="mb-8 p-4 bg-[#febd17] inline-block text-black">
                    {service.id === 'agri' && <Tractor size={32} />}
                    {service.id === 'infra' && <Construction size={32} />}
                    {service.id === 'hiring' && <Truck size={32} />}
                  </div>
                  <h3 className="text-2xl font-bold uppercase mb-4 text-white group-hover:text-[#febd17] transition-colors">{service.title}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-10">
                    {service.details.map(detail => (
                      <li key={detail} className="flex items-center gap-3 text-sm text-gray-400">
                        <div className="w-1 h-1 bg-[#febd17]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="text-[#febd17]" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Highlights */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">Project <span className="text-[#febd17]">Portfolios</span></h2>
            <div className="w-24 h-1 bg-[#febd17]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {PROJECTS.slice(0, 2).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-[600px] group overflow-hidden"
              >
                <img src={project.image} alt={project.client} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-12 w-full">
                  <span className="text-[#febd17] font-bold uppercase tracking-widest text-xs mb-4 block">
                    {project.category} • {project.location}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6">{project.client}</h3>
                  <p className="text-gray-400 mb-8 max-w-md line-clamp-2">
                    {project.description}
                  </p>
                  <Link to={`/projects`}>
                    <LiquidButton variant="outline">Case Study</LiquidButton>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-20 border border-white/10 relative overflow-hidden bg-[#111]"
          >
            {/* Structural grid lines */}
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5" />
            <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5" />

            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 relative z-10">
              Ready to <span className="text-[#febd17]">Modernize</span><br />Your Operations?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12 relative z-10">
              Join leading organizations like ZESCO, Mansa Sugar, and Sterling & Wilson. Let's build something substantial together.
            </p>
            <div className="flex justify-center gap-6 relative z-10">
              <Link to="/contact">
                <LiquidButton>Get in Touch</LiquidButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SteelWipe>
  );
};

export default Home;
