
import React from 'react';
import { motion } from 'framer-motion';

const SteelWipe: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div className="relative w-full min-h-screen">
      <motion.div
        initial={{ left: '-100%' }}
        animate={{ left: '100%' }}
        transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
        className="fixed inset-0 z-[100] bg-[#1a1a1a] border-r-4 border-[#febd17] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default SteelWipe;
