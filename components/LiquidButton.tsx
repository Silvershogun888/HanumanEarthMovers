
import React from 'react';
import { motion } from 'framer-motion';

interface LiquidButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
}

const LiquidButton: React.FC<LiquidButtonProps> = ({ 
  children, 
  className = "", 
  onClick, 
  variant = 'primary' 
}) => {
  const isPrimary = variant === 'primary';
  
  return (
    <motion.button
      onClick={onClick}
      whileHover="hover"
      initial="initial"
      className={`relative overflow-hidden px-8 py-3 font-bold uppercase tracking-widest text-sm transition-colors duration-300 ${
        isPrimary ? 'text-black' : 'text-[#febd17] border border-[#febd17]'
      } ${className}`}
    >
      <motion.div
        variants={{
          initial: { y: '100%', borderRadius: '50% 50% 0 0' },
          hover: { y: '0%', borderRadius: '0% 0% 0 0' }
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={`absolute inset-0 z-0 ${isPrimary ? 'bg-white' : 'bg-[#febd17]'}`}
      />
      
      <span className={`relative z-10 transition-colors duration-300 ${
        isPrimary ? 'group-hover:text-black' : 'hover:text-black'
      }`}>
        {children}
      </span>
      
      {/* Structural "Stamp" animation container if needed */}
      <motion.div 
        className={`absolute inset-0 border-2 ${isPrimary ? 'border-transparent' : 'border-[#febd17] opacity-0'} pointer-events-none`}
        variants={{
          initial: { scale: 1.1, opacity: 0 },
          hover: { scale: 1, opacity: 1 }
        }}
      />
    </motion.button>
  );
};

export default LiquidButton;
