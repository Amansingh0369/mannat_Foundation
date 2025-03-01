import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { Users, Briefcase, Building, Award } from 'lucide-react';
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
      icon: <Users size={40} className="text-blue-600" />,
      title: 'Recruitment & Staffing',
      description: 'End-to-end recruitment services ensuring businesses find the right talent efficiently.',
    },
    {
      icon: <Briefcase size={40} className="text-blue-600" />,
      title: 'Manpower Supply',
      description: 'Supply of skilled and semi-skilled manpower for various industries.',
    },
    {
      icon: <Building size={40} className="text-blue-600" />,
      title: 'Local Job Placements',
      description: 'Assisting candidates in securing job opportunities both locally and PAN India.',
    },
    {
      icon: <Award size={40} className="text-blue-600" />,
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

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extralight uppercase text-gray-900 mb-4">About Us</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <AnimatedSection delay={0.2}>
              <div className="md:w-1/2 flex justify-center items-center">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Team meeting" 
                  className="rounded-lg shadow-lg items-center w-full h-auto"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="md:w-1/2 ">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Where Talent Meets Opportunity
                </h3>
                <p className="text-gray-700 mb-6">
                  At Skill Specialist Mannat Foundation, we are dedicated to bridging the gap between talent and opportunity. 
                  As a premier recruiting agency and career consultancy, we specialize in connecting skilled professionals 
                  with the right employers across various industries.
                </p>
                <Link 
                  to="/about" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                We offer a comprehensive range of recruitment and career consultancy services tailored to meet 
                the needs of businesses and job seekers alike.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={0.2 * index}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/services" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
            </div>
          </AnimatedSection>

          <animated.div style={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{industry}</h3>
              </motion.div>
            ))}
          </animated.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you're a company looking for the perfect hire or a job seeker searching for your next big break, 
              Skill Specialist Mannat Foundation is your trusted partner in success.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors shadow-lg"
            >
              Contact Us Today
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;