import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          
          {/* Brand & Description (Takes 2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl tracking-tight">MyCredAxis</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-xs leading-relaxed">
              A smarter, safer, and more rewarding way to manage your finances. Pay Smarter. Get Rewarded. Bank Simpler.
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex gap-4">
              <div className="w-9 h-9 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700 transition-colors flex items-center justify-center">In</div>
              <div className="w-9 h-9 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700 transition-colors flex items-center justify-center">Tw</div>
              <div className="w-9 h-9 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700 transition-colors flex items-center justify-center">Fb</div>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-5 text-sm">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-5 text-sm">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Individuals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Business</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-5 text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-5 text-sm">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Developer API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Partner Portal</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 MyCredAxis. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Security</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Privacy</span>
            <span>Made in India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;