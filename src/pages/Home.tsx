import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { Users, Briefcase, Building, Award,ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';

const Home: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

  const services = [
    {
      icon: <Users size={40} className="text-amber-400" />,
      title: 'Recruitment & Staffing',
      description: 'End-to-end recruitment services ensuring businesses find the right talent efficiently.',
    },
    {
      icon: <Briefcase size={40} className="text-amber-400" />,
      title: 'Manpower Supply',
      description: 'Supply of skilled and semi-skilled manpower for various industries.',
    },
    {
      icon: <Building size={40} className="text-amber-400" />,
      title: 'Local Job Placements',
      description: 'Assisting candidates in securing job opportunities both locally and PAN India.',
    },
    {
      icon: <Award size={40} className="text-amber-400" />,
      title: 'HR & Payroll Services',
      description: 'HR solutions to help businesses manage employee relations and compliance.',
    },
  ];

  const industries = [
    'Information Technology',
    'Engineering & Construction',
    'Oil & Gas / Energy Sector', 
    'Banking & Finance',
    'Retail & E-commerce',
    'Automobile Industry',
    'Pharmaceutical',
  ];

  return (
    <div className="pt-16">
      <HeroSection />

      {/* About Section - Light Theme */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extralight uppercase text-indigo-950 mb-4">WHO WE ARE</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-6xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="md:w-full lg:w-[600px] flex justify-center items-center">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Team meeting" 
                  className="rounded-xl shadow-xl w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300 border border-slate-200"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="md:w-full lg:w-[600px] text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-amber-500 mb-6">
                  Where Talent Meets Opportunity
                </h3>
                <p className="text-slate-700 mb-8 text-lg leading-relaxed">
                  At Skill Specialist Mannat Foundation, we are dedicated to bridging the gap between talent and opportunity. 
                  As a premier recruiting agency and career consultancy, we specialize in connecting skilled professionals 
                  with the right employers across various industries.
                </p>
                <Link 
                  to="/about" 
                  className="inline-block bg-gradient-to-r from-amber-400 to-amber-300 text-indigo-950 font-medium uppercase py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 transform"
                >
                  Learn More
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section - Dark Theme */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-900">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto mb-6"></div>
              <p className="text-slate-200 max-w-3xl mx-auto">
                We offer a comprehensive range of recruitment and career consultancy services tailored to meet 
                the needs of businesses and job seekers alike.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={0.2 * index}>
                <div className="bg-white/10 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow hover:shadow-amber-500/10 border border-white/20 group">
                  <div className="mb-4 group-hover:scale-110 transform transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-300">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/services" 
              className="inline-block bg-gradient-to-r from-amber-400 to-amber-300 text-indigo-950 font-medium uppercase py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 transform"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section - Light Theme */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">Industries We Serve</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto"></div>
            </div>
          </AnimatedSection>

          <animated.div style={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg text-center border border-slate-200 hover:border-amber-300 hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-semibold text-indigo-950 mb-2">{industry}</h3>
              </motion.div>
            ))}
          </animated.div>
        </div>
      </section>

      {/* Stats Section - Dark Theme */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-900">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '5000+', label: 'Successful Placements' },
              { value: '100+', label: 'Corporate Partners' },
              { value: '30+', label: 'Industries Served' },
              { value: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={0.2 * index}>
                <div className="bg-white/10 p-8 rounded-xl shadow-lg border border-white/20 text-center hover:shadow-xl transition-shadow hover:shadow-amber-500/10 group">
                  <h3 className="text-4xl md:text-5xl font-bold text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">
                    {stat.value}
                  </h3>
                  <p className="text-slate-200 font-medium">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Light Theme */}
      <section className="py-24 bg-gradient-to-br from-slate-200 to-purple-100 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%)] bg-[length:20px_20px] opacity-30"></div>
        
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200 rounded-full opacity-10 blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-indigo-950 leading-tight">
                Ready to Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-400">Perfect Match</span>?
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-slate-700 leading-relaxed">
                Whether you're a company looking for the perfect hire or a job seeker searching for your next big break, 
                <span className="block mt-2">Skill Specialist Mannat Foundation is your trusted partner in success.</span>
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-amber-400 to-amber-300 text-indigo-950 font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/30 hover:scale-105 transform group"
              >
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;