import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { cn } from '../lib/utils';
import logo from '../assets/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Unsere Leistungen', href: '#services' },
    { name: 'Unser Team', href: '#team' },
    { name: 'Kontaktieren Sie uns', href: '#faq' },
    { name: 'Karriere', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-500",
      scrolled ? "bg-navy/95 backdrop-blur-md shadow-xl py-3" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-3 group">
             <img src={logo} alt="" />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/70 hover:text-sky text-sm font-bold uppercase tracking-widest transition-all hover:-translate-y-0.5"
                >
                  {link.name}
                </a>
              ))}
              
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-white hover:text-sky focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden bg-navy/98 backdrop-blur-xl absolute w-full transition-all duration-500 ease-in-out border-b border-white/10",
        isOpen ? "max-h-[500px] opacity-100 py-8" : "max-h-0 opacity-0 overflow-hidden py-0"
      )}>
        <div className="px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-sky block px-4 py-3 rounded-2xl text-lg font-bold uppercase tracking-widest border border-white/5 bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
