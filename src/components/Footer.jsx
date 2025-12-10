import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id='contact' className="py-16 text-white bg-neutral-900">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <span className="block mb-4 text-2xl font-bold text-white">
              Spark Digital
            </span>
            <p className="mb-6 leading-relaxed text-neutral-400">
              Digital marketing agency helping small local businesses grow through proven strategies and measurable results.
            </p>
          </div>
          
          <div>
            <span className="block mb-4 text-lg font-bold text-white">
              Contact Us
            </span>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-[#2563EB] mr-3 mt-1 flex-shrink-0" />
                <span className="text-neutral-400">hello@sparkdigital.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-[#2563EB] mr-3 mt-1 flex-shrink-0" />
                <span className="text-neutral-400">(555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#2563EB] mr-3 mt-1 flex-shrink-0" />
                <span className="text-neutral-400">123 Main Street, Your City, ST 12345</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-12 text-center border-t border-neutral-800">
          <p className="text-sm text-neutral-400">
            © 2025 Spark Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;