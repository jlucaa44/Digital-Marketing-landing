import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleNavClick = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  setMobileMenuOpen(false);
};


  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' 
        : 'bg-white md:bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto max-w-7xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center transform rotate-3">
             <span className="text-lg font-bold text-white">S</span>
          </div>
          <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
            Spark Digital
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="items-center hidden gap-8 md:flex">
          <button 
            onClick={() => handleNavClick('home')}
            className={`text-sm font-medium transition-colors hover:text-[#2563EB] ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('services')}
            className={`text-sm font-medium transition-colors hover:text-[#2563EB] ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
          >
            Services
          </button>
          <button 
            onClick={() => handleNavClick('case-studies')}
            className={`text-sm font-medium transition-colors hover:text-[#2563EB] ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
          >
            Results
          </button>
          <Button 
            onClick={() => handleNavClick('contact')}
            variant={scrolled ? "default" : "secondary"}
            className={!scrolled ? "bg-white text-[#2563EB] hover:bg-slate-100" : "bg-[#2563EB] text-white hover:bg-blue-700"}
          >
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="p-2 md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 flex flex-col gap-4 p-4 bg-white border-t shadow-lg top-full border-slate-100 md:hidden">
           <button 
            onClick={() => handleNavClick('home')}
            className="px-4 py-2 font-medium text-left rounded-md hover:bg-slate-50 text-slate-600"
          >
            Home
          </button>
          <button 
             onClick={() => handleNavClick('services')}
            className="px-4 py-2 font-medium text-left rounded-md hover:bg-slate-50 text-slate-600"
          >
            Services
          </button>
          <button 
             onClick={() => handleNavClick('case-studies')}
            className="px-4 py-2 font-medium text-left rounded-md hover:bg-slate-50 text-slate-600"
          >
            Results
          </button>
           <Button 
            onClick={() => handleNavClick('contact')}
            className="w-full bg-[#2563EB] text-white"
          >
            Contact Us
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;