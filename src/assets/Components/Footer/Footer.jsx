import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="max-w-[1440px] mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-10 border-b border-gray-700 pb-10 mb-8">
          
          <div className="md:col-span-1">
            <h4 className="text-2xl font-bold text-blue-400 mb-4 border-l-4 border-blue-400 pl-3">
              CS — Ticket System
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              The CS Ticket System is an essential tool that centralizes all customer issues, assigning unique IDs and prioritizing them by urgency. It tracks statuses from 'Open' to 'Resolved,' guaranteeing fast, efficient problem resolution.
            </p>
          </div>

          <div className="md:col-span-1">
            <h5 className="text-lg font-semibold text-white mb-4">Company</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Our Mission</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Screen Sizes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact Sales</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h5 className="text-lg font-semibold text-white mb-4">Services</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Products & Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Customer Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Enterprise Apps</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h5 className="text-lg font-semibold text-white mb-4">Information</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Join Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Career Opportunities</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h5 className="text-lg font-semibold text-white mb-4">Social Links</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </span>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">@CS - Ticket System (FB)</a>
              </li>
              <li className="flex items-center space-x-2">
                 <span className="text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2 1.1-.9 1.8-2.2 2.1-3.7-.5 0-1.1-.2-1.6-.4-.4-.1-.7-.3-1.1-.6-.8-.6-1.4-1.5-1.7-2.7.4.1.8.2 1.3.2.4 0 .7-.1 1.1-.2-.4-1.2-.5-2.6-.2-4.1.7.5 1.5 1 2.3 1.3-2-.3-4.1-1.1-5.7-2.6.2-.2.4-.4.6-.7 1.4-1.7 3.3-2.6 5.3-2.6 1.1 0 2.2.3 3.1.9 1.3.8 2.3 2 2.6 3.6.4-.1.8-.2 1.2-.2.4 0 .8.1 1.2.3-.3.8-.8 1.5-1.5 2"/></svg>
                </span>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">@BCS - Ticket System (X)</a>
              </li>
              <li className="flex items-center space-x-2">
                 <span className="text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </span>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">CS on LinkedIn</a>
              </li>
              <li className="flex items-center space-x-2">
                 <span className="text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 7-10-7"/></svg>
                </span>
                <a href="mailto:support@cat.com" className="text-gray-400 hover:text-blue-400 transition-colors">support@cat.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-white">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
