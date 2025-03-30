import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { Users, Target, Award, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const About: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

  const values = [
    {
      icon: <Target size={40} className="text-amber-400" />,
      title: 'Excellence',
      description: 'We strive for excellence in every placement and service we provide, ensuring the highest standards of quality and professionalism.',
    },
    {
      icon: <Users size={40} className="text-amber-400" />,
      title: 'Integrity',
      description: 'We uphold the highest standards of integrity and professionalism, building trust through transparent and ethical practices.',
    },
    {
      icon: <Award size={40} className="text-amber-400" />,
      title: 'Quality',
      description: 'We are committed to quality in all our recruitment solutions, delivering exceptional service that exceeds expectations.',
    },
    {
      icon: <TrendingUp size={40} className="text-amber-400" />,
      title: 'Growth',
      description: 'We focus on growth for both our clients and candidates, fostering long-term success and continuous development.',
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
              ABOUT <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">US</span>
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
              Learn more about Skill Specialist Mannat Foundation and our mission to connect talent with opportunity.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <AnimatedSection delay={0.2}>
                <h2 className="text-3xl md:text-5xl font-extralight uppercase text-indigo-950 mb-4">OUR STORY</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-300 mb-6"></div>
                <p className="text-slate-700 mb-6 text-lg leading-relaxed">
                  At Skill Specialist Mannat Foundation, we are dedicated to bridging the gap between talent and opportunity. 
                  As a premier recruiting agency, and career consultancy, we specialize in connecting skilled professionals 
                  with the right employers across various industries.
                </p>
                <p className="text-slate-700 mb-6 text-lg leading-relaxed">
                  With a deep understanding of workforce dynamics and a commitment to excellence, we provide businesses 
                  with top-tier talent while helping job seekers find rewarding career paths. Our tailored recruitment 
                  solutions ensure that every placement aligns with the needs and aspirations of both employers and candidates.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Driven by our slogan, "Where Talent Meets Opportunity," we uphold the highest standards of integrity, 
                  professionalism, and efficiency. Whether you're a company looking for the perfect hire or a job seeker 
                  searching for your next big break, Skill Specialist Mannat Foundation is your trusted partner in success.
                </p>
              </AnimatedSection>
            </div>

            <div className="md:w-1/2 flex items-center justify-center">
              <AnimatedSection delay={0.4}>
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                  alt="Business meeting" 
                  className="rounded-xl shadow-xl w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300 border border-slate-200"
                />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto mb-6"></div>
              <p className="text-slate-200 max-w-3xl mx-auto text-lg">
                Our core values guide everything we do at Skill Specialist Mannat Foundation.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={0.2 * index}>
                <div className="bg-white/10 p-8 rounded-lg shadow-md backdrop-blur-sm border border-white/10 group hover:shadow-xl transition-shadow hover:shadow-amber-500/10 h-full">
                  <div className="mb-4 group-hover:scale-110 transform transition-transform duration-300">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-300">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-white to-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extralight uppercase text-indigo-950 mb-4">OUR MISSION & VISION</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto"></div>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-r from-violet-700 to-indigo-600 text-white p-8 rounded-xl shadow-lg hover:shadow-violet-500/30 hover:scale-105 transition-all transform duration-300">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-slate-100 leading-relaxed">
                  To connect exceptional talent with outstanding opportunities, creating value for both 
                  businesses and professionals through our expertise in recruitment and career consultancy.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-900 text-white p-8 rounded-xl shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition-all transform duration-300">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-slate-100 leading-relaxed">
                  To be the leading recruitment and career consultancy, recognized for our excellence, 
                  integrity, and the positive impact we make on businesses and careers across India.
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
                Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-400">Future Together!</span>
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-slate-700 leading-relaxed">
                Whether you're looking to hire top talent or find your dream job,
                <span className="block mt-2">we're here to help you succeed.</span>
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-amber-400 to-amber-300 text-indigo-950 font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/30 hover:scale-105 transform group"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;