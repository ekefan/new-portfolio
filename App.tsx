
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SystemStack from './components/SystemStack';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll handling
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id!);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Horizontal Line Break */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <section id="architecture" className="py-24 max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {[
                { title: "Infrastructure", val: "Terraform / AWS / GCP", sub: "Cloud-Native Provisioning" },
                { title: "Databases", val: "PostgreSQL / Mongo / ES", sub: "Highly-Available Persistence" },
                { title: "Distributed", val: "Kafka / Redis / PubSub", sub: "Event-Driven Backbone" },
                { title: "Scalability", val: "Kubernetes / Docker", sub: "Container Orchestration" },
                { title: "Security Ops", val: "SAST / SCA / DAST", sub: "Secured CI/CD pipelines" },
                { title: "Observability", val: "OTEL / Monitoring", sub: "Distributed Monitoring" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl border border-white/5 bg-[#0a0a0a]/50 hover:bg-[#0a0a0a] transition-all flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono-tech text-blue-500 uppercase tracking-widest mb-2">{item.title}</div>
                    <div className="text-white font-bold mb-1 leading-tight">{item.val}</div>
                  </div>
                  <div className="text-[11px] text-gray-500 mt-2">{item.sub}</div>
                </div>
              ))}
           </div>
        </section>

        <SystemStack />
        <CaseStudies />

        {/* Current Projects Section */}
        <section className="py-24 bg-gradient-to-b from-transparent to-[#0a0a0a] relative overflow-hidden">
           {/* Visual Background */}
           <div className="absolute inset-0 opacity-20 pointer-events-none">
             <svg className="w-full h-full" viewBox="0 0 1000 600">
                <defs>
                   <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                   </radialGradient>
                </defs>
                <circle cx="200" cy="100" r="2" fill="white" className="animate-pulse" />
                <circle cx="800" cy="400" r="2" fill="white" className="animate-pulse" />
                <path d="M200,100 Q500,300 800,400" stroke="#8B5CF6" strokeWidth="0.5" fill="none" className="animate-dash" strokeDasharray="5,5" />
                <circle cx="500" cy="300" r="15" fill="url(#nodeGrad)">
                   <animate attributeName="r" values="10;20;10" dur="4s" repeatCount="indefinite" />
                </circle>
             </svg>
           </div>

           <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
              <div className="inline-block p-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-4 animate-pulse">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Current Projects</h3>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto italic font-light leading-relaxed">
                Innovation isn't just about features; it's about building the invisible systems that make the impossible look effortless. I am currently focused on pioneering agentic workflows in finance.
              </p>
              <div className="flex flex-col items-center pt-8">
                 <div className="px-6 py-4 rounded border border-white/5 bg-white/5 backdrop-blur-sm max-w-lg">
                    <span className="text-xs font-mono-tech text-gray-500 uppercase tracking-widest block mb-2">Active Build</span>
                    <span className="text-2xl font-bold text-white block mb-3">FrictionAI — Agentic Personal Finance</span>
                    <p className="text-xs text-gray-400 leading-relaxed italic">
                      "I don't just maintain legacy code; I build the future of Agentic Systems through explicit state management and execution control."
                    </p>
                 </div>
              </div>
           </div>
        </section>

        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
              <span className="text-blue-500 font-bold text-xs">e</span>
            </div>
            <span className="font-mono-tech text-gray-400 text-xs">ekefan.dev &copy; 2025 // SYSTEM_UPTIME(31536000)</span>
          </div>
          
          <div className="flex gap-8 text-xs text-gray-500 font-mono-tech uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">POLICY.LOG</a>
            <a href="#" className="hover:text-white transition-colors">ACCESS_CONTROL</a>
            <a href="#" className="hover:text-white transition-colors">SITEMAP.SYS</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
