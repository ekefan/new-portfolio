import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SystemStack from './components/SystemStack';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import { FrictionAIVisual } from './components/ProjectVisuals';
import { ChevronUp } from 'lucide-react';

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

      const sections = ['hero', 'architecture', 'stack', 'cases', 'contact'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 400 && rect.bottom >= 400) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // Slightly early reveal for smoother feel as you scroll
        if (rect.top < window.innerHeight * 0.95) {
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
      const offset = 100; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-blue-600/30 bg-[#030303]">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Even more dampened parallax for a buttery smooth background feel */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-600/[0.03] blur-[150px] rounded-full" style={{ transform: `translateY(${scrollProgress * -0.15}px)` }}></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-purple-600/[0.02] blur-[180px] rounded-full" style={{ transform: `translateY(${scrollProgress * 0.05}px)` }}></div>
      </div>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col gap-6 items-center p-2 group/nav">
        {[
          { id: 'hero', label: 'ROOT' },
          { id: 'architecture', label: 'EXPERIENCE' },
          { id: 'stack', label: 'TECH STACK' },
          { id: 'cases', label: 'CASE STUDIES' },
          { id: 'contact', label: 'CONTACT' }
        ].map((sec) => (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className="group relative flex items-center justify-center transition-all duration-300"
          >
            <span className={`absolute right-10 text-[8px] font-mono-tech tracking-[0.2em] transition-all duration-500 opacity-0 group-hover:opacity-100 whitespace-nowrap bg-blue-600 text-white px-2 py-0.5 rounded pointer-events-none translate-x-2 group-hover:translate-x-0`}>
              {sec.label}
            </span>
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-1000 ${
              activeSection === sec.id 
                ? 'bg-blue-500 scale-[2.5] shadow-[0_0_15px_rgba(59,130,246,1)]' 
                : 'bg-white/10 group-hover:bg-blue-400 group-hover:scale-150'
            }`}></div>
            <div className="absolute top-4 w-[1px] h-4 bg-white/[0.05]"></div>
          </button>
        ))}
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-40 p-3 rounded-full glass-island text-blue-500 transition-all duration-700 hover:scale-110 group ${
          showScrollToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <Navbar onNavigate={scrollToSection} />
      
      <main className="relative z-10 space-y-12 md:space-y-32 lg:space-y-48">
        <div id="hero" className="reveal active bg-[#030303]">
          <Hero />
        </div>

        <section id="architecture" className="py-16 md:py-32 max-w-7xl mx-auto px-6 reveal">
           <div className="text-left mb-12 md:mb-16">
              <h2 className="text-[10px] md:text-sm font-mono-tech text-blue-500 uppercase tracking-[0.3em] mb-4">Architecture Ingress</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">EXPERIENCE</h3>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
              {[
                { title: "Infrastructure", val: "AWS / GCP / Terraform", sub: "Cloud-Native Provisioning" },
                { title: "Databases", val: "PostgreSQL / Mongo", sub: "Distributed Availability" },
                { title: "Streaming", val: "Kafka / Redis", sub: "Event-Driven Backbone" },
                { title: "Clusters", val: "K8s / Docker", sub: "Container Orchestration" },
                { title: "Security", val: "SAST / SCA / DAST", sub: "DevSecOps Hardening" },
                { title: "Observability", val: "OTEL / Jaeger", sub: "Tracing & Telemetry" }
              ].map((item, i) => (
                <div key={i} className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] glass-island border-white/5 hover:border-blue-500/40 transition-all duration-700 group flex flex-col justify-between hover:-translate-y-2 md:hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                  <div>
                    <div className="text-[8px] md:text-[9px] font-mono-tech text-blue-500 uppercase tracking-[0.3em] mb-4 md:mb-6 group-hover:translate-x-2 transition-transform duration-500">{item.title}</div>
                    <div className="text-white font-bold text-base md:text-lg mb-2 leading-tight tracking-tight">{item.val}</div>
                  </div>
                  <div className="text-[9px] md:text-[10px] text-gray-500 mt-4 md:mt-6 font-mono-tech leading-relaxed uppercase tracking-tighter">{item.sub}</div>
                </div>
              ))}
           </div>
        </section>

        <div id="stack" className="reveal">
          <SystemStack />
        </div>
        
        <div id="cases" className="reveal">
          <CaseStudies />
        </div>

        <section className="py-24 md:py-48 bg-[#030303] reveal overflow-hidden border-y border-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
             <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-4">
                      <h2 className="text-[10px] md:text-sm font-mono-tech text-blue-500 uppercase tracking-[0.4em]">Laboratory_Environment</h2>
                      <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">ENGINEERING_SANDBOX</h3>
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                         An experimental playground for emerging backend paradigms. Currently building an agentic execution runtime for personal finance.
                      </p>
                   </div>
                   
                   <div className="p-4 md:p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
                      <div className="text-[9px] md:text-[11px] font-mono-tech text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                         Project_Status: WIP / ALPHA_0.9.5
                      </div>
                      <p className="text-[11px] md:text-sm text-gray-400 leading-relaxed italic">
                         "Developing a cognitive orchestration layer that interprets user intent, analyses previous behaviours, and fine-tunes responses tailored to each user's experience."
                      </p>
                   </div>
                </div>

                <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] border border-white/5 relative shadow-2xl overflow-hidden group">
                   <FrictionAIVisual />
                   <div className="absolute top-6 right-6 px-3 py-1 bg-black/40 backdrop-blur-md rounded border border-white/10 text-[8px] font-mono-tech text-blue-500 uppercase tracking-widest">Live_Simulation</div>
                </div>
             </div>
          </div>
        </section>

        <div id="contact" className="reveal">
          <Contact />
        </div>

        <footer className="py-16 md:py-24 border-t border-white/5 relative z-20 bg-[#030303] reveal">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 glass-island rounded-xl flex items-center justify-center text-blue-500 font-bold border-white/10">e</div>
              <span className="font-mono-tech text-gray-300 font-bold tracking-tighter uppercase text-sm">ekefan<span className="text-blue-500">.</span>dev</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[8px] md:text-[9px] text-gray-500 font-mono-tech uppercase tracking-[0.3em] font-bold">
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