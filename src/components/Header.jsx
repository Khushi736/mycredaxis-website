import React, { useState } from 'react';
import { 
  Menu, X, 
  User, Briefcase, Users, ShieldCheck, Code, 
  Smartphone, LogIn 
} from 'lucide-react';

import appLogo from '../assets/logos/app-logo.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <header className="w-full bg-white/90 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-gray-100">
      <div className="w-full px-6 lg:px-16 h-20 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={appLogo} alt="MyCredAxis Logo" className="w-9 h-9 rounded-lg shadow-sm object-cover" />
          <span className="font-bold text-xl tracking-tight text-gray-900">MyCredAxis</span>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-gray-900 font-semibold border-b-2 border-black pb-1">Individuals</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Business</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Partners</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Security</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">API</a>
        </nav>

        {/* Right: Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#" className="text-sm text-gray-600 hover:text-black font-medium transition-colors">Get app</a>
          <a href="#" className="text-sm text-gray-600 hover:text-black font-medium transition-colors">Login</a>
          <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-sm">
            Get Started for Business
          </button>
        </div>
        
        {/* Mobile Hamburger Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
        
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white w-full h-[calc(100vh-5rem)] absolute top-20 left-0 flex flex-col py-6 px-6 z-50 overflow-y-auto">
          
          {/* Top Links */}
          <div className="flex flex-col space-y-5">
            <a href="#" className="flex items-center gap-3 text-gray-900 font-semibold text-lg">
              <User className="w-5 h-5 text-gray-400" />
              Individuals
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 font-medium hover:text-gray-900 text-lg">
              <Briefcase className="w-5 h-5 text-gray-400" />
              Business
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 font-medium hover:text-gray-900 text-lg">
              <Users className="w-5 h-5 text-gray-400" />
              Partners
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 font-medium hover:text-gray-900 text-lg">
              <ShieldCheck className="w-5 h-5 text-gray-400" />
              Security
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 font-medium hover:text-gray-900 text-lg">
              <Code className="w-5 h-5 text-gray-400" />
              API
            </a>
          </div>
          
          {/* Bottom Actions - Wrapped in a div with mt-auto to push it down */}
          <div className="flex flex-col space-y-5 mt-auto pt-10 pb-6">
            <hr className="border-gray-200" />
            
            <a href="#" className="flex items-center gap-3 text-gray-600 font-medium hover:text-gray-900 text-lg">
              <Smartphone className="w-5 h-5 text-gray-400" />
              Get app
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 font-medium hover:text-gray-900 text-lg">
              <LogIn className="w-5 h-5 text-gray-400" />
              Login
            </a>
            
            <button className="bg-black text-white px-5 py-3 mt-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-sm w-full text-center flex items-center justify-center gap-2">
              Get Started for Business
            </button>
          </div>

        </div>
      )}
    </header>
  );
};

export default Header;