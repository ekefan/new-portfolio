import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal as TerminalIcon } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
      isScrolled 
        ? 'top-4 w-[95%] md:w-[70%] lg:w-[60%] glass-island !border-none rounded-full px-8 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
        : 'top-0 w-full bg-transparent py-8 px-8'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className={`transition-all duration-500 flex items-center justify-center glow-blue bg-blue-600 rounded-lg group-hover:rotate-12 ${
            isScrolled ? 'w-8 h-8' : 'w-10 h-10'
          }`}>
            <TerminalIcon className={`text-white transition-all ${isScrolled ? 'w-4 h-4' : 'w-6 h-6'}`} />
          </div>
          <span className={`font-mono-tech font-bold tracking-tighter transition-all ${isScrolled ? 'text-base' : 'text-xl'}`}>
            ekefan<span className="text-blue-500">.</span>dev
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`text-sm font-medium transition-all ${
                isScrolled ? 'text-gray-300 hover:text-blue-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className={`px-5 py-2 rounded-full font-bold transition-all transform active:scale-95 uppercase tracking-wider text-[10px] ${
              isScrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-500' 
                : 'bg-white text-black hover:bg-blue-500 hover:text-white'
            }`}
          >
            INIT_YOUR_PROJECT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full mt-4 left-0 right-0 glass-island !border-none rounded-3xl p-8 flex flex-col gap-6 items-center shadow-2xl animate-in zoom-in-95 duration-300">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-lg font-mono-tech text-gray-300 hover:text-blue-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="w-full py-4 bg-blue-600 text-center text-white font-bold rounded-full uppercase text-sm tracking-widest"
            onClick={() => setMobileMenuOpen(false)}
          >
            INIT_YOUR_PROJECT
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;