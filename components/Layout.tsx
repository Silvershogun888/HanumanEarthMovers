
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LOGO_URL } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll position and close menu on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
    
    // Ensure body overflow is reset
    document.body.style.overflow = 'auto';
  }, [location.pathname]);

  // Handle body scroll locking manually when menu state changes
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      {/* Header Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-500 ${
          isScrolled || mobileMenuOpen ? 'bg-black/95 backdrop-blur-md py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          <Link to="/" className="flex items-center gap-3 relative z-[160]">
            <img src={LOGO_URL} alt="Hanuman Logo" className="h-10 w-auto" />
            <div className="hidden md:block">
              <span className="text-xl font-bold text-[#febd17] block leading-none uppercase">Hanuman</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-tighter">Earth Movers & Construction</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center relative">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-semibold uppercase tracking-widest transition-colors relative py-2 ${
                    isActive ? 'text-[#febd17]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navLine"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#febd17]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden text-white p-2 hover:text-[#febd17] transition-colors relative z-[160] outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[140] md:hidden flex flex-col items-center justify-start pt-32 overflow-y-auto pb-12"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
              <svg width="100%" height="100%" className="absolute inset-0">
                <pattern id="grid-mobile-v2" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid-mobile-v2)" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8 w-full px-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (index * 0.05) }}
                  className="w-full text-center"
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-4xl font-black uppercase tracking-tighter block py-2 ${
                      location.pathname === item.path ? 'text-[#febd17]' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex flex-col items-center gap-4 text-center border-t border-white/10 pt-12 w-full max-w-xs"
              >
                <p className="text-[#febd17] text-[10px] uppercase tracking-[0.3em] font-bold">Inquiries</p>
                <a href="mailto:hanumanmachines@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors underline underline-offset-4 decoration-[#febd17]">hanumanmachines@gmail.com</a>
                <a href="tel:+260966935884" className="text-white text-lg font-black tracking-widest">+260 966 935 884</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black py-20 border-t border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <img src={LOGO_URL} alt="Hanuman Logo" className="h-12 mb-6 grayscale brightness-200" />
            <p className="text-gray-500 max-w-sm mb-8">
              Specializing in Agribusiness projects, Infrastructure development, and Large-scale earth moving across India, USA, and Zambia.
            </p>
            <div className="flex gap-4">
              {['FB', 'LI', 'IG', 'X'].map(social => (
                <a key={social} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-xs text-gray-500 hover:border-[#febd17] hover:text-[#febd17] transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[#febd17] font-bold uppercase tracking-widest mb-6 text-xs">Navigation</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              {navItems.map(item => (
                <li key={item.path}><Link to={item.path} className="hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#febd17] font-bold uppercase tracking-widest mb-6 text-xs">Contacts</h4>
            <p className="text-gray-500 text-sm mb-2">Plot No: 2279, Great East Road, Lusaka</p>
            <p className="text-gray-500 text-sm mb-4">+260 966 935 884</p>
            <p className="text-white font-bold text-sm">hanumanmachines@gmail.com</p>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-widest">
          <span>© 2024 HANUMAN EARTH MOVERS & CONSTRUCTION LTD.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
