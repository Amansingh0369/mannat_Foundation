import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4 bg-white p-3 rounded-lg inline-block">
              <Logo />
            </div>
            <p className="text-gray-300 mb-4">
              Where Talent meets Opportunities
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Recruitment & Staffing</li>
              <li className="text-gray-300">Manpower Supply</li>
              <li className="text-gray-300">Local Job Placements</li>
              <li className="text-gray-300">HR & Payroll Services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0 text-blue-400" size={18} />
                <span className="text-gray-300">
                  # 850, Mohali walk 8th floor, SAS Nagar, PB(160062)
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-blue-400" size={18} />
                <a href="tel:7696679006" className="text-gray-300 hover:text-white transition-colors">
                  7696679006
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-blue-400" size={18} />
                <a href="mailto:mannatskillfoundation@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  mannatskillfoundation@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Skill Specialist Mannat Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;