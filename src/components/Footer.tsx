import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-900 text-white pt-12 pb-6 relative overflow-hidden">
      {/* Subtle diagonal lines for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:20px_20px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4 bg-white p-3 rounded-lg inline-block shadow-lg hover:shadow-amber-500/20 transition-shadow duration-300">
              <Logo />
            </div>
            <p className="text-slate-200 mb-4">
              Where Talent meets Opportunities
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors transform hover:scale-110 duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors transform hover:scale-110 duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors transform hover:scale-110 duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors transform hover:scale-110 duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">Quick Links</h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 mb-4"></div>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-200 hover:text-amber-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-200 hover:text-amber-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-200 hover:text-amber-300 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-200 hover:text-amber-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">Our Services</h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 mb-4"></div>
            <ul className="space-y-2">
              <li className="text-slate-200">Recruitment & Staffing</li>
              <li className="text-slate-200">Manpower Supply</li>
              <li className="text-slate-200">Local Job Placements</li>
              <li className="text-slate-200">HR & Payroll Services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">Contact Info</h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 mb-4"></div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0 text-amber-400" size={18} />
                <span className="text-slate-200">
                  # 850, Mohali walk 8th floor, SAS Nagar, PB(160062)
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-amber-400" size={18} />
                <a href="tel:7696679006" className="text-slate-200 hover:text-amber-300 transition-colors">
                  +91 7696679006
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-amber-400" size={18} />
                <a href="tel:7696679006" className="text-slate-200 hover:text-amber-300 transition-colors">
                +91 9988391869
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-amber-400" size={18} />
                <a href="mailto:mannatskillfoundation@gmail.com" className="text-slate-200 hover:text-amber-300 transition-colors">
                  mannatskillfoundation@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-slate-300">
          <p>&copy; {new Date().getFullYear()} Skill Specialist Mannat Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;