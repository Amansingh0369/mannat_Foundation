import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { Users, Briefcase, Building, Award, Database, Shield, Globe, Sparkles, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Services: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

  const mainServices = [
    {
      icon: <Users size={48} className="text-amber-400" />,
      title: 'Recruitment & Staffing Solutions',
      description: 'We provide end-to-end recruitment services, ensuring businesses find the right talent efficiently.',
      details: [
        'Permanent & Contract Staffing',
        'Executive Search & Head-hunting',
        'Bulk & Project-Based Hiring',
        'Industry-Specific Talent Acquisition',
      ],
      gradient: 'from-violet-500/20 to-fuchsia-500/20'
    },
    {
      icon: <Briefcase size={48} className="text-amber-400" />,
      title: 'Manpower Supply',
      description: 'We supply skilled, and semi-skilled manpower for various industries, ensuring businesses have the workforce they need to operate seamlessly.',
      details: [
        'Skilled Labor Supply',
        'Temporary Staffing Solutions',
        'On-demand Workforce',
        'Specialized Industry Workers',
      ],
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: <Globe size={48} className="text-amber-400" />,
      title: 'Local Job Placements',
      description: 'We assist candidates in securing job opportunities both locally and PAN India, helping them achieve career success beyond borders.',
      details: [
        'Local Market Expertise',
        'PAN India Opportunities',
        'Career Counseling',
        'Interview Preparation',
      ],
      gradient: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      icon: <Database size={48} className="text-amber-400" />,
      title: 'HR & Payroll Services',
      description: 'Our HR solutions help businesses manage employee relations, payroll processing, and compliance, allowing them to focus on growth.',
      details: [
        'Payroll Management',
        'HR Compliance',
        'Employee Relations',
        'HR Documentation',
      ],
      gradient: 'from-rose-500/20 to-pink-500/20'
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
    {
      name: 'BPO & Telecalling industry,',
      roles: [
        'Talent Acquisition',
        'Bulk Hiring',
        'Pre-Screening & Assessment',
        'End-to-End Recruitment Solutions',
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-900 text-white py-24 min-h-[30vh] flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiNmZmYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 bg-violet-600 rounded-full opacity-30 blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500 rounded-full opacity-20 blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-60 left-1/3 w-[30rem] h-[30rem] bg-fuchsia-600 rounded-full opacity-20 blur-3xl"
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Premium overlay with subtle noise texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Subtle diagonal lines */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:20px_20px] opacity-10"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative"
          >
            <h1 className="text-5xl md:text-7xl font-extralight uppercase mb-6 tracking-tight text-white">
              OUR <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">SERVICES</span>
            </h1>
            
            <motion.div
              className="absolute left-1/2 -bottom-4 h-0.5 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              style={{ x: "-50%" }}
              transition={{ delay: 0.8, duration: 1.2 }}
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl max-w-3xl mx-auto text-slate-200 mt-8"
            >
              We offer a comprehensive range of recruitment and career consultancy services tailored to meet 
              the needs of businesses and job seekers alike.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extralight uppercase text-indigo-950 mb-4">WHAT WE OFFER</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto mb-6"></div>
              <p className="text-slate-700 max-w-3xl mx-auto text-lg leading-relaxed">
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
                    <div className={`bg-gradient-to-br ${service.gradient} p-8 rounded-full border border-amber-200/50 shadow-lg hover:shadow-amber-300/20 transition-shadow group hover:scale-105 transform transition-transform duration-300`}>
                      {service.icon}
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-indigo-950 mb-4">{service.title}</h3>
                    <p className="text-slate-700 mb-6 text-lg leading-relaxed">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="bg-gradient-to-r from-amber-400 to-amber-300 rounded-full w-2 h-2 mr-2"></span>
                          <span className="text-slate-700">{detail}</span>
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
      <section className="py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto mb-6"></div>
              <p className="text-slate-200 max-w-3xl mx-auto text-lg leading-relaxed">
                At Skill Specialist Mannat Foundation, we cater to a wide range of industries, ensuring that 
                businesses get the right talent and job seekers find the best opportunities.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/10 h-full hover:bg-white/10 hover:border-amber-300/30 hover:shadow-xl hover:shadow-amber-500/10 hover:scale-105 transition-all duration-500 ease-in-out">
                  <h3 className="text-xl font-semibold text-amber-300 mb-4">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.roles.map((role, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="bg-amber-400 rounded-full w-2 h-2 mt-2 mr-2"></span>
                        <span className="text-slate-200">{role}</span>
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
      <section className="py-20 bg-gradient-to-br from-white to-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extralight uppercase text-indigo-950 mb-4">WHY CHOOSE US</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto mb-6"></div>
              <p className="text-slate-700 max-w-3xl mx-auto text-lg leading-relaxed">
                We stand out through our commitment to excellence, industry expertise and personalized approach.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-r from-violet-700 to-indigo-600 text-white p-6 rounded-xl shadow-lg h-full hover:shadow-violet-500/30 hover:scale-105 transition-all transform duration-300">
                <Shield size={40} className="mb-4 text-amber-300" />
                <h3 className="text-xl font-bold mb-4">Industry Expertise</h3>
                <p className="text-slate-100 leading-relaxed">
                  Our deep understanding of various industries allows us to provide specialized recruitment solutions 
                  tailored to your specific sector.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-900 text-white p-6 rounded-xl shadow-lg h-full hover:shadow-indigo-500/30 hover:scale-105 transition-all transform duration-300">
                <Users size={40} className="mb-4 text-amber-300" />
                <h3 className="text-xl font-bold mb-4">Extensive Network</h3>
                <p className="text-slate-100 leading-relaxed">
                  We have built a vast network of qualified professionals across India, allowing us to quickly 
                  connect you with the right talent.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-gradient-to-r from-indigo-600 to-violet-700 text-white p-6 rounded-xl shadow-lg h-full hover:shadow-indigo-500/30 hover:scale-105 transition-all transform duration-300">
                <Award size={40} className="mb-4 text-amber-300" />
                <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
                <p className="text-slate-100 leading-relaxed">
                  We maintain rigorous quality standards in our recruitment process, ensuring that you get 
                  only the best candidates for your organization.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-slate-200 to-purple-100 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%)] bg-[length:20px_20px] opacity-30"></div>
        
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200 rounded-full opacity-10 blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-indigo-950 leading-tight">
                Ready to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-400">Started?</span>
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-slate-700 leading-relaxed">
                Contact us today to discuss how we can help you
                <span className="block mt-2">with your recruitment and HR needs.</span>
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-amber-400 to-amber-300 text-indigo-950 font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/30 hover:scale-105 transform group"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;