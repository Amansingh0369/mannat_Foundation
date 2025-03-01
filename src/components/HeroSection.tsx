import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 h-screen via-blue-700 to-blue-500 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 py-32 md:py-72 flex flex-col items-center text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-5xl font-extralight mb-6"
        >
          SKILL  <span className='className="text-4xl md:text-5xl lg:text-7xl font-semibold text-orange-500'>SPECIALIST </span>MANNAT FOUNDATION
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl mb-8 font-light text-neutral-200 max-w-3xl"
        >
          Where Talent meets Opportunities
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold uppercase py-3 px-8 rounded-full transition-colors shadow-lg"
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="bg-transparent hover:bg-white uppercase hover:text-blue-700 text-white font-semibold py-3 px-8 rounded-full border-2 border-white transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;