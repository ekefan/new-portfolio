import React, { useState, useEffect } from 'react';
import { Menu, X, Layers, Cpu, FolderGit2, MessageSquare } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
  };

  const getIcon = (label: string) => {
    const l = label.toUpperCase();
    if (l.includes('EXPERIENCE')) return <Layers className="w-4 h-4" />;
    if (l.includes('TECH')) return <Cpu className="w-4 h-4" />;
    if (l.includes('CASE')) return <FolderGit2 className="w-4 h-4" />;
    if (l.includes('CONTACT')) return <MessageSquare className="w-4 h-4" />;
    return null;
  };

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
      isScrolled 
        ? 'top-4 w-[92%] md:w-[85%] lg:w-[65%] xl:w-[55%] glass-island rounded-full px-4 md:px-8 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)]' 
        : 'top-0 w-full bg-transparent py-6 md:py-10 px-6 md:px-12'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div 
          className="flex items-center gap-2 group cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className={`font-mono-tech font-bold tracking-tighter transition-all sm:inline-block ${
            isScrolled ? 'text-sm' : 'text-xl'
          }`}>
            ekefan<span className="text-blue-500">.</span>dev
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`group relative flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 hover:bg-white/5`}
              >
                <span className={`transition-colors duration-300 ${
                  isScrolled ? 'text-blue-500/80 group-hover:text-blue-400' : 'text-gray-400 group-hover:text-white'
                }`}>
                  {getIcon(link.label)}
                </span>
                <span className={`text-[10px] lg:text-xs font-mono-tech uppercase tracking-widest hidden lg:inline-block transition-all ${
                  isScrolled ? 'text-gray-400 group-hover:text-white' : 'text-gray-500 group-hover:text-white'
                }`}>
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          <button 
            className="w-10 h-10 flex md:hidden items-center justify-center text-gray-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full mt-4 left-0 right-0 glass-island rounded-[2rem] p-6 flex flex-col gap-3 items-stretch shadow-2xl animate-in fade-in zoom-in-95 duration-500">
          <div className="text-[8px] font-mono-tech text-gray-600 uppercase tracking-[0.4em] mb-2 px-4">Navigation_Index</div>
          {NAV_LINKS.map((link) => (
            <button 
              key={link.href} 
              onClick={() => {
                const id = link.href.replace('#', '');
                if (onNavigate) onNavigate(id);
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-4 px-4 py-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-blue-600/10 hover:border-blue-500/30 transition-all text-gray-300 hover:text-white group text-left w-full"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                {getIcon(link.label)}
              </div>
              <span className="text-xs font-mono-tech uppercase tracking-[0.2em]">{link.label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;