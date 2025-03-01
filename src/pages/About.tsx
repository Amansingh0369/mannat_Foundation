import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { Users, Target, Award, TrendingUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const About: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

  const values = [
    {
      icon: <Target size={40} className="text-blue-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in every placement and service we provide.',
    },
    {
      icon: <Users size={40} className="text-blue-600" />,
      title: 'Integrity',
      description: 'We uphold the highest standards of integrity and professionalism.',
    },
    {
      icon: <Award size={40} className="text-blue-600" />,
      title: 'Quality',
      description: 'We are committed to quality in all our recruitment solutions.',
    },
    {
      icon: <TrendingUp size={40} className="text-blue-600" />,
      title: 'Growth',
      description: 'We focus on growth for both our clients and candidates.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Learn more about Skill Specialist Mannat Foundation and our mission to connect talent with opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <AnimatedSection delay={0.2} className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 mb-6">
                At Skill Specialist Mannat Foundation, we are dedicated to bridging the gap between talent and opportunity. 
                As a premier recruiting agency, and career consultancy, we specialize in connecting skilled professionals 
                with the right employers across various industries.
              </p>
              <p className="text-gray-700 mb-6">
                With a deep understanding of workforce dynamics and a commitment to excellence, we provide businesses 
                with top-tier talent while helping job seekers find rewarding career paths. Our tailored recruitment 
                solutions ensure that every placement aligns with the needs and aspirations of both employers and candidates.
              </p>
              <p className="text-gray-700">
                Driven by our slogan, "Where Talent Meets Opportunity," we uphold the highest standards of integrity, 
                professionalism, and efficiency. Whether you're a company looking for the perfect hire or a job seeker 
                searching for your next big break, Skill Specialist Mannat Foundation is your trusted partner in success.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                alt="Business meeting" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Our core values guide everything we do at Skill Specialist Mannat Foundation.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={0.2 * index}>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection delay={0.2}>
              <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg">
                  To connect exceptional talent with outstanding opportunities, creating value for both 
                  businesses and professionals through our expertise in recruitment and career consultancy.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg">
                  To be the leading recruitment and career consultancy, recognized for our excellence, 
                  integrity, and the positive impact we make on businesses and careers across India.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Build the Future Together!</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Whether you're looking to hire top talent or find your dream job, we're here to help you succeed.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-lg"
            >
              Get in Touch
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;