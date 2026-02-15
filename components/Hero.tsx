
import React from 'react';
import { ArrowRight, Code2, Layers, Cpu, Activity } from 'lucide-react';
import TerminalOutput from './TerminalOutput';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-mono-tech tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Engineering Uptime: 99.99%
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Build <span className="text-blue-500">Scale</span>. <br/>
            Own <span className="text-purple-500">Reliability.</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            I design and build secure, distributed backend systems and the automated infrastructure that powers them. 
            The high-performance solution for <span className="text-white font-medium">server-side engineering</span>.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#architecture" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded flex items-center gap-2 transition-all glow-blue group"
            >
              EXPLORE_CAPABILITIES()
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#cases" 
              className="px-8 py-4 bg-transparent border border-white/10 hover:border-white/30 text-white font-bold rounded transition-all"
            >
              VIEW_SYSTEMS()
            </a>
          </div>

          <div className="flex items-center gap-8 pt-8">
             <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">3+</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono-tech">Years Build Exp</span>
             </div>
             <div className="h-10 w-px bg-white/10"></div>
             <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">50k+</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono-tech">Reqs / Second</span>
             </div>
             <div className="h-10 w-px bg-white/10"></div>
             <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">70%</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono-tech">Infra Savings</span>
             </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <TerminalOutput />
          
          {/* Floating UI Badges */}
          <div className="absolute -top-6 -right-6 hidden sm:block p-4 bg-[#121212]/80 backdrop-blur-sm border border-white/10 rounded-lg animate-bounce duration-[3000ms]">
            <Layers className="text-purple-400 mb-2" />
            <div className="text-[10px] font-mono-tech text-gray-400 uppercase">Kubernetes</div>
            <div className="text-sm font-bold">Cluster Engineering</div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 hidden sm:block p-4 bg-[#121212]/80 backdrop-blur-sm border border-white/10 rounded-lg animate-bounce duration-[4000ms]">
            <Activity className="text-emerald-400 mb-2" />
            <div className="text-[10px] font-mono-tech text-gray-400 uppercase">Observability</div>
            <div className="text-sm font-bold">Full-Stack Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
