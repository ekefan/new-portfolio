
import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal as TerminalIcon } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center glow-blue transition-transform group-hover:rotate-12">
            <TerminalIcon className="text-white w-6 h-6" />
          </div>
          <span className="font-mono-tech font-bold text-xl tracking-tighter">
            ekefan<span className="text-blue-500">.</span>dev
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 bg-white text-black text-xs font-bold rounded hover:bg-blue-500 hover:text-white transition-all transform active:scale-95 uppercase tracking-wider"
          >
            INIT_YOUR_PROJECT()
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-6 items-center animate-in slide-in-from-top duration-300">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-lg font-mono-tech text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="w-full py-4 bg-blue-600 text-center text-white font-bold rounded uppercase text-sm tracking-widest"
            onClick={() => setMobileMenuOpen(false)}
          >
            INIT_YOUR_PROJECT()
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
