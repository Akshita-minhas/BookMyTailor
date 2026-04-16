import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold">BookMyTailor</span>
            </div>
            <p className="text-gray-300 mb-4">
             Professional tailoring made simple. Book appointments for custom designs, alterations, and more.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-500 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-500 transition-colors">Services</Link></li>
              <li><Link to="/tailors" className="text-gray-300 hover:text-primary-500 transition-colors">Our Tailors</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-500 pb-2">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-primary-500 transition-colors">Custom Designs</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-500 transition-colors">Alterations</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-500 transition-colors">Wedding Outfits</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-500 transition-colors">Formal Wear</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-500 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                <span className="text-gray-300">Himachal Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-gray-300">+91 8894344661</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-gray-300">BookMyTailor@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TailorDoor. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;