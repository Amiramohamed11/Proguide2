import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Unsere Leistungen', path: '/services' },
    { name: 'Unser Team', path: '/team' },
    { name: 'Kontaktieren Sie uns', path: '/contact' },
    { name: 'Karriere', path: '/karriere' },
  ];

  return (
    <nav className="fixed z-[100] w-full border-b border-white/10 bg-navy shadow-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* تم تغيير الارتفاع h-16 إلى h-24 ليتناسب مع حجم اللوجو الجديد */}
        <div className="flex h-24 items-center justify-between">

          {/* Logo - ضبط الحجم ليكون 130*130 */}
          <div className="flex-shrink-0">
            <Link to="/" className="block transition-transform hover:scale-105">
              <img 
                src={logo} 
                alt="Proaktiv" 
                className="h-[130px] w-[130px] object-contain" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-10 lg:gap-12">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                
                return (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className={cn(
                      // text-[18px] لتحديد حجم الخط المطلوب بدقة
                      'group relative text-[18px] font-semibold tracking-tight transition-colors font-amiko',
                      isActive ? 'text-sky' : 'text-white/95 hover:text-sky'
                    )}
                  >
                    {link.name}
                    <span
                      className={cn(
                        'absolute -bottom-1 left-0 h-0.5 bg-sky transition-all duration-300',
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      )}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white transition-colors hover:text-sky"
              aria-expanded={isOpen}
              aria-label="Menü"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'absolute left-0 w-full overflow-hidden border-b border-white/10 bg-navy/98 backdrop-blur-md transition-all duration-300 md:hidden',
          isOpen ? 'max-h-[420px] py-8' : 'max-h-0'
        )}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-[18px] font-semibold transition-colors font-amiko',
                location.pathname === link.path ? 'text-sky' : 'text-white hover:text-sky'
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;