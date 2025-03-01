import React from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/logo.jpeg"

const Logo: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center"
    >
      <img 
        src={logo}
        alt="Skill Specialist Mannat Foundation Logo" 
        className="h-12 mr-3"
      />
      <div className="flex flex-col">
        <span className="text-xl font-medium text-gray-900">SKILL SPECIALIST</span>
        <span className="text-sm text-gray-600">MANNAT FOUNDATION</span>
      </div>
    </motion.div>
  );
};

export default Logo;