import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SystemStack from './components/SystemStack';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import { FrictionAIVisual } from './components/ProjectVisuals';
import { ChevronUp, Satellite } from 'lucide-react';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowScrollToTop(window.scrollY > 400);

      // Section Monitoring
      const sections = ['hero', 'architecture', 'stack', 'cases', 'ai-projects', 'contact'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      // Triggering Bouncy Reveal
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-blue-600/30">
      {/* Immersive Deep Space Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-600/[0.03] blur-[150px] rounded-full"
          style={{ transform: `translateY(${scrollProgress * -0.4}px)` }}
        ></div>
        <div 
          className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-purple-600/[0.02] blur-[180px] rounded-full"
          style={{ transform: `translateY(${scrollProgress * 0.15}px)` }}
        ></div>
      </div>

      {/* Nano-Footprint Side Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col gap-6 items-center p-2 group/nav">
        {[
          { id: 'hero', label: 'ROOT' },
          { id: 'architecture', label: 'INFRA' },
          { id: 'stack', label: 'STACK' },
          { id: 'cases', label: 'DEPLOY' },
          { id: 'ai-projects', label: 'LABS' },
          { id: 'contact', label: 'CONN' }
        ].map((sec) => (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className="group relative flex items-center justify-center transition-all duration-300"
          >
             {/* Invisible label that appears on hover */}
            <span className={`absolute right-10 text-[8px] font-mono-tech tracking-[0.2em] transition-all duration-500 opacity-0 group-hover:opacity-100 whitespace-nowrap bg-blue-600 text-white px-2 py-0.5 rounded pointer-events-none translate-x-2 group-hover:translate-x-0`}>
              {sec.label}
            </span>
            
            {/* The actual dot */}
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ${
              activeSection === sec.id 
                ? 'bg-blue-500 scale-[2.5] shadow-[0_0_15px_rgba(59,130,246,1)]' 
                : 'bg-white/10 group-hover:bg-blue-400 group-hover:scale-150'
            }`}></div>
            
            {/* Minimal connecting line that only appears between dots */}
            <div className="absolute top-4 w-[1px] h-4 bg-white/[0.05]"></div>
          </button>
        ))}
      </div>

      {/* Floating Nano Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-40 p-3 rounded-full glass-island border-none text-blue-500 transition-all duration-700 hover:scale-110 group ${
          showScrollToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <Navbar />
      
      <main className="relative z-10 space-y-32 md:space-y-48">
        <div id="hero" className="reveal active">
          <Hero />
        </div>

        {/* Section: Architecture Overview - Reverted to Former Design */}
        <section id="architecture" className="py-32 max-w-7xl mx-auto px-6 reveal">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {[
                { title: "Infrastructure", val: "AWS / GCP / TF", sub: "Cloud-Native Provisioning" },
                { title: "Databases", val: "PostgreSQL / Mongo", sub: "Distributed Availability" },
                { title: "Streaming", val: "Kafka / Redis", sub: "Event-Driven Backbone" },
                { title: "Clusters", val: "K8s / Docker", sub: "Container Orchestration" },
                { title: "Security", val: "SAST / CI-Scan", sub: "DevSecOps Hardening" },
                { title: "Observability", val: "OTEL / Jaeger", sub: "Tracing & Telemetry" }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] glass-island border-white/5 hover:border-blue-500/40 transition-all duration-700 group flex flex-col justify-between hover:-translate-y-4 hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
                  <div>
                    <div className="text-[9px] font-mono-tech text-blue-500 uppercase tracking-[0.3em] mb-6 group-hover:translate-x-2 transition-transform duration-500">{item.title}</div>
                    <div className="text-white font-bold text-lg mb-2 leading-tight tracking-tight">{item.val}</div>
                  </div>
                  <div className="text-[10px] text-gray-500 mt-6 font-mono-tech leading-relaxed uppercase tracking-tighter">{item.sub}</div>
                </div>
              ))}
           </div>
        </section>

        <div className="reveal">
          <SystemStack />
        </div>
        
        <div className="reveal">
          <CaseStudies />
        </div>

        <section id="ai-projects" className="max-w-7xl mx-auto px-6 reveal">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-blue-500 text-[10px] font-mono-tech uppercase tracking-[0.4em]">
                <Satellite size={12} className="animate-pulse" /> R&D_CHANNEL
              </div>
              <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">AI Core</h3>
            </div>
          </div>

          <div className="group flex flex-col lg:flex-row gap-12 items-center p-10 rounded-[3rem] glass-island border-white/5 transition-all duration-1000 hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
            <div className="w-full lg:w-1/2 h-[450px] rounded-[2.5rem] overflow-hidden border border-white/5 relative group-hover:scale-[1.01] transition-transform duration-1000 shadow-2xl">
              <FrictionAIVisual />
            </div>

            <div className="w-full lg:w-1/2 space-y-10">
              <div className="space-y-4">
                <h4 className="text-5xl font-extrabold text-white tracking-tighter">FrictionAI</h4>
                <p className="text-xl text-blue-100/60 font-medium">Autonomous Wealth Logic</p>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Engineering self-healing financial agents that use recursive reasoning loops to optimize liquidity across distributed bank APIs.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
                  <span className="text-[9px] font-mono-tech text-gray-500 uppercase tracking-widest mb-1">Architecture</span>
                  <span className="text-sm font-bold text-white">Event-Led Agents</span>
                </div>
                <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
                  <span className="text-[9px] font-mono-tech text-gray-500 uppercase tracking-widest mb-1">State Mgmt</span>
                  <span className="text-sm font-bold text-white">Durable Workflows</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="reveal">
          <Contact />
        </div>

        <footer className="py-24 border-t border-white/5 relative z-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 glass-island rounded-xl flex items-center justify-center text-blue-500 font-bold border-white/10">e</div>
              <span className="font-mono-tech text-gray-300 font-bold tracking-tighter uppercase text-sm">ekefan<span className="text-blue-500">.</span>dev</span>
            </div>
            <div className="flex gap-8 text-[9px] text-gray-500 font-mono-tech uppercase tracking-[0.3em] font-bold">
              <a href="#" className="hover:text-blue-400 transition-colors">POLICY.LOG</a>
              <a href="#" className="hover:text-blue-400 transition-colors">ACCESS_CONTROL</a>
              <a href="#" className="hover:text-blue-400 transition-colors">SITEMAP.SYS</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;