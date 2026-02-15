import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const SystemStack: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left md:text-center mb-12 md:mb-20 space-y-3 md:space-y-4">
          <h2 className="text-[10px] md:text-sm font-mono-tech text-blue-500 uppercase tracking-[0.3em]">Architect's Index</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">TECH STACK</h3>
          <p className="text-gray-400 max-w-2xl md:mx-auto leading-relaxed text-sm md:text-base font-light">
            My engineering philosophy centers on the complete lifecycle of a service—from the first line of code to global scalability, maintainable architecture, and everything in between. My specialized experience in networking, Linux internals, and low-level programming enables me to achieve peak performance and bulletproof reliability across the entire stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div 
              key={idx} 
              className={`group p-6 md:p-8 rounded-[1.5rem] md:rounded-2xl bg-[#050505] border border-white/5 hover:border-${cat.accent}-500/50 transition-all duration-500 relative overflow-hidden`}
            >
              {/* Accent Glow */}
              <div className={`absolute -right-20 -top-20 w-40 h-40 bg-${cat.accent}-500/10 blur-[80px] transition-all group-hover:bg-${cat.accent}-500/20`}></div>
              
              <div className="mb-4 md:mb-6">{cat.icon}</div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">{cat.title}</h4>
              <p className="text-gray-400 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">
                {cat.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3">
                    <div className={`w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-${cat.accent}-500`}></div>
                    <span className="text-[10px] md:text-sm font-mono-tech text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemStack;