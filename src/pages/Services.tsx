import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { Users, Briefcase, Building, Award, Database, Shield, Globe } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Services: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

  const mainServices = [
    {
      icon: <Users size={48} className="text-blue-600" />,
      title: 'Recruitment & Staffing Solutions',
      description: 'We provide end-to-end recruitment services, ensuring businesses find the right talent efficiently.',
      details: [
        'Permanent & Contract Staffing',
        'Executive Search & Head-hunting',
        'Bulk & Project-Based Hiring',
        'Industry-Specific Talent Acquisition',
      ],
    },
    {
      icon: <Briefcase size={48} className="text-blue-600" />,
      title: 'Manpower Supply',
      description: 'We supply skilled, and semi-skilled manpower for various industries, ensuring businesses have the workforce they need to operate seamlessly.',
      details: [
        'Skilled Labor Supply',
        'Temporary Staffing Solutions',
        'On-demand Workforce',
        'Specialized Industry Workers',
      ],
    },
    {
      icon: <Globe size={48} className="text-blue-600" />,
      title: 'Local Job Placements',
      description: 'We assist candidates in securing job opportunities both locally and PAN India, helping them achieve career success beyond borders.',
      details: [
        'Local Market Expertise',
        'PAN India Opportunities',
        'Career Counseling',
        'Interview Preparation',
      ],
    },
    {
      icon: <Database size={48} className="text-blue-600" />,
      title: 'HR & Payroll Services',
      description: 'Our HR solutions help businesses manage employee relations, payroll processing, and compliance, allowing them to focus on growth.',
      details: [
        'Payroll Management',
        'HR Compliance',
        'Employee Relations',
        'HR Documentation',
      ],
    },
  ];

  const industries = [
    {
      name: 'Information Technology',
      roles: [
        'Software Engineers & Developers',
        'IT Support & Networking Professionals',
        'Data Analysts & Cybersecurity Experts',
      ],
    },
    {
      name: 'Engineering & Construction',
      roles: [
        'Civil, Mechanical, and Electrical Engineers',
        'Project Managers & Site Supervisors',
      ],
    },
    {
      name: 'Oil & Gas / Energy Sector',
      roles: [
        'Engineers & Technicians',
        'Rig Workers & Operators',
        'Safety & Compliance Officers',
      ],
    },
    {
      name: 'Banking & Finance',
      roles: [
        'Accountants & Financial Analysts',
        'Loan Officers & Banking Executives',
        'Auditors & Compliance Specialists',
      ],
    },
    {
      name: 'Retail & E-commerce',
      roles: [
        'Sales & Marketing Professionals',
        'Store Managers & Customer Service Representatives',
        'Logistics & Supply Chain Experts',
      ],
    },
    {
      name: 'Automobile Industry',
      roles: [
        'Automobile Engineers & Technicians',
        'Production & Assembly Line Workers',
        'Sales & Service Advisors',
      ],
    },
    {
      name: 'Pharmaceutical',
      roles: [
        'Pharmacist & Lab Technicians',
        'Research & Development (R&D) Professionals',
        'Medical Sales Representatives',
      ],
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We offer a comprehensive range of recruitment and career consultancy services tailored to meet 
              the needs of businesses and job seekers alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                At Skill Specialist Mannat Foundation, we provide tailored solutions to meet your recruitment 
                and HR needs with expertise and precision.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <AnimatedSection key={index} delay={0.2}>
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  <div className="md:w-1/3 flex justify-center">
                    <div className="bg-blue-50 p-8 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="bg-blue-600 rounded-full w-2 h-2 mr-2"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                At Skill Specialist Mannat Foundation, we cater to a wide range of industries, ensuring that 
                businesses get the right talent and job seekers find the best opportunities.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.roles.map((role, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="bg-blue-600 rounded-full w-2 h-2 mt-2 mr-2"></span>
                        <span className="text-gray-700">{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md h-full">
                <Shield size={40} className="mb-4" />
                <h3 className="text-xl font-bold mb-4">Industry Expertise</h3>
                <p>
                  Our deep understanding of various industries allows us to provide specialized recruitment solutions 
                  tailored to your specific sector.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-blue-700 text-white p-6 rounded-lg shadow-md h-full">
                <Users size={40} className="mb-4" />
                <h3 className="text-xl font-bold mb-4">Extensive Network</h3>
                <p>
                  We have built a vast network of qualified professionals across India, allowing us to quickly 
                  connect you with the right talent.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md h-full">
                <Award size={40} className="mb-4" />
                <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
                <p>
                  We maintain rigorous quality standards in our recruitment process, ensuring that you get 
                  only the best candidates for your organization.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how we can help you with your recruitment and HR needs.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-lg"
            >
              Contact Us
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;