import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { Mail, Phone, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Contact: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-blue-500" />,
      title: 'Our Location',
      details: '# 850, Mohali walk 8th floor, SAS Nagar, PB(160062)',
      href: 'https://maps.google.com/?q=Mohali+Punjab',
      actionText: 'View on Map',
    },
    {
      icon: <Phone size={24} className="text-green-500" />,
      title: 'Phone Number',
      details: '7696679006',
      href: 'tel:7696679006',
      actionText: 'Call Now',
    },
    {
      icon: <Mail size={24} className="text-amber-400" />,
      title: 'Email Address',
      details: 'mannatskillfoundation@gmail.com',
      href: 'mailto:mannatskillfoundation@gmail.com',
      actionText: 'Send Email',
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
              CONTACT <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">US</span>
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
              Get in touch with our team to discuss how we can help you with your recruitment and HR needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extralight uppercase text-indigo-950 mb-4">GET IN TOUCH</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto mb-6"></div>
              <p className="text-slate-700 max-w-3xl mx-auto text-lg leading-relaxed">
                We're here to answer any questions you may have about our services.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              // Determine colors based on contact type
              let textColor = "text-amber-500";
              let hoverTextColor = "hover:text-amber-600";
              let hoverShadow = "hover:shadow-amber-500/10";
              let iconBgColor = "bg-amber-50";
              let iconBorder = "border border-amber-200";
              
              if (info.title === 'Our Location') {
                textColor = "text-blue-500";
                hoverTextColor = "hover:text-blue-600";
                hoverShadow = "hover:shadow-blue-500/10";
                iconBgColor = "bg-blue-50";
                iconBorder = "border border-blue-200";
              } else if (info.title === 'Phone Number') {
                textColor = "text-green-500";
                hoverTextColor = "hover:text-green-600";
                hoverShadow = "hover:shadow-green-500/10";
                iconBgColor = "bg-green-50";
                iconBorder = "border border-green-200";
              }
              
              return (
                <AnimatedSection key={index} delay={0.2 * index}>
                  <div className={`bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow ${hoverShadow} border border-slate-200 group hover:scale-105 transform transition-transform duration-300 h-64 flex flex-col justify-between`}>
                    <div>
                      <div className={`inline-flex items-center justify-center w-16 h-16 ${iconBgColor} ${iconBorder} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-indigo-950 mb-2">{info.title}</h3>
                      <p className="text-slate-700 line-clamp-3">{info.details}</p>
                    </div>
                    
                    <a 
                      href={info.href}
                      className={`inline-block mt-4 ${textColor} ${hoverTextColor} font-medium transition-colors flex items-center justify-center gap-2`}
                    >
                      {info.actionText}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Map */}
            <div className="lg:w-full">
              <AnimatedSection delay={0.5}>
                <div className="bg-white p-8 rounded-xl shadow-lg h-full border border-slate-200">
                  <h2 className="text-2xl font-bold text-indigo-950 mb-6">Our Location</h2>
                  <div className="h-96 bg-slate-200 rounded-lg overflow-hidden shadow-inner">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0377365312513!2d76.7042!3d30.7046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee9a3c0d7e8f%3A0xe7b5f16b6d0a0dc1!2sMohali%2C%20Punjab!5e0!3m2!1sen!2sin!4v1656565400671!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto mb-6"></div>
              <p className="text-slate-200 max-w-3xl mx-auto text-lg leading-relaxed">
                Find answers to common questions about our services and how we can help you.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/10 mb-6 hover:bg-white/10 transition-colors hover:border-amber-300/30 hover:shadow-xl transition-shadow hover:shadow-amber-500/10">
                <h3 className="text-xl font-semibold text-amber-300 mb-3">How quickly can you provide candidates for a position?</h3>
                <p className="text-slate-200 leading-relaxed">
                  Depending on the position and requirements, we can typically provide a shortlist of qualified candidates within 
                  1-2 weeks. For urgent requirements, we can expedite the process.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/10 mb-6 hover:bg-white/10 transition-colors hover:border-amber-300/30 hover:shadow-xl transition-shadow hover:shadow-amber-500/10">
                <h3 className="text-xl font-semibold text-amber-300 mb-3">What industries do you specialize in?</h3>
                <p className="text-slate-200 leading-relaxed">
                  We specialize in multiple industries including IT, Engineering, Oil & Gas, Banking & Finance, 
                  Retail, Automobile, and Pharmaceutical sectors. Our expertise allows us to find the right talent 
                  for various roles within these industries.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors hover:border-amber-300/30 hover:shadow-xl transition-shadow hover:shadow-amber-500/10">
                <h3 className="text-xl font-semibold text-amber-300 mb-3">How do you ensure the quality of candidates?</h3>
                <p className="text-slate-200 leading-relaxed">
                  We have a rigorous screening process that includes skills assessment, background verification, 
                  reference checks, and multiple interview rounds to ensure that we only present the most qualified 
                  candidates to our clients.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Contact us today and discover how we can help you
                <span className="block mt-2">find the perfect talent or career opportunity.</span>
              </p>
              <a 
                href="tel:7696679006" 
                className="inline-flex items-center bg-gradient-to-r from-amber-400 to-amber-300 text-indigo-950 font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/30 hover:scale-105 transform group"
              >
                Call Us Now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;