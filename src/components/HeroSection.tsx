import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ from, to, duration = 2 }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
};

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 min-h-screen via-blue-700 to-blue-500 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiNmZmYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="relative container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center z-10">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extralight mb-6 leading-tight"
          >
            SKILL <span className="font-semibold text-orange-500 inline-block transform hover:scale-105 transition-transform duration-300">SPECIALIST</span> MANNAT FOUNDATION
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl lg:text-3xl mb-12 font-light text-neutral-200 max-w-3xl mx-auto"
          >
            Where Talent meets Opportunities
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/services"
              className="group relative bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold uppercase py-4 px-10 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transform"
            >
              <span className="relative z-10">Our Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/contact"
              className="group relative bg-transparent uppercase text-white font-semibold py-4 px-10 rounded-full border-2 border-white transition-all duration-300 hover:bg-white hover:text-blue-700 hover:scale-105 transform hover:shadow-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Achievements Section */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-3xl md:text-4xl font-light mb-12 text-center"
        >
          Our <span className="text-orange-500 font-semibold">Achievements</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl transition-all duration-300 hover:bg-white/15 hover:shadow-xl hover:shadow-black/5"
            >
              <h3 className="text-4xl font-bold text-orange-500 mb-4 group-hover:text-orange-400 transition-colors">
                {typeof achievement.value === 'number' ? (
                  <><Counter from={0} to={achievement.value} />{achievement.suffix}</>
                ) : (
                  achievement.value
                )}
              </h3>
              <p className="text-base text-neutral-200 leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const achievements = [
  {
    value: 5000,
    suffix: '+',
    description: 'Successful Placements in reputable companies across various industries'
  },
  {
    value: 30,
    suffix: '+',
    description: 'Trusted Companies partnered for recruitment and manpower services'
  },
  {
    value: 100,
    suffix: '+',
    description: 'Training programs organized to improve employability'
  },
  {
    value: 5000,
    suffix: '+',
    description: 'Unemployed individuals helped to secure jobs and build stable careers'
  },
  {
    value: 'Expanding',
    description: 'Network with established connections with top employers in multiple regions'
  },
  {
    value: 'Career',
    description: 'Development through consultancy sessions, helping professionals enhance skills'
  }
];

export default HeroSection;