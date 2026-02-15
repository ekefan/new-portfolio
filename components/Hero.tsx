import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Layers, Activity } from 'lucide-react';
import TerminalOutput from './TerminalOutput';

const Hero: React.FC = () => {
  const [interactivePos, setInteractivePos] = useState({ x: 0, y: 0 });
  // Fix: Removed invalid ref initialization that passed a function as initial value
  const sectionRefReal = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Handle Mouse & Touch Interaction
  useEffect(() => {
    const handleInteraction = (e: MouseEvent | TouchEvent) => {
      if (!sectionRefReal.current) return;
      const rect = sectionRefReal.current.getBoundingClientRect();
      let clientX, clientY;

      if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      setInteractivePos({ x, y });
    };

    window.addEventListener('mousemove', handleInteraction);
    window.addEventListener('touchmove', handleInteraction, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchmove', handleInteraction);
    };
  }, []);

  // Canvas Particle System for the "faint balls"
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = window.innerWidth < 768 ? 15 : 30;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 3.5 + 1,
          color: i % 2 === 0 ? 'rgba(59, 130, 246, 0.38)' : 'rgba(147, 51, 234, 0.28)'
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        const dx = (interactivePos.x * canvas.width) - p.x;
        const dy = (interactivePos.y * canvas.height) - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 400) {
          p.x += dx * 0.003;
          p.y += dy * 0.003;
        }

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [interactivePos]);

  return (
    <section 
      ref={sectionRefReal}
      className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 overflow-hidden bg-[#030303]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-[0.78]" />
        <div 
          className="absolute w-[800px] h-[800px] bg-blue-600/[0.035] rounded-full blur-[160px] transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translate(${(interactivePos.x - 0.5) * 180}px, ${(interactivePos.y - 0.5) * 180}px)`,
            left: '5%',
            top: '5%'
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.045)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[8px] md:text-[10px] font-mono-tech tracking-wider uppercase">
            <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-blue-500/70"></span>
            </span>
            System Ingress Active: OK
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
            Build <span className="text-blue-500">Scale</span>. <br/>
            Own <span className="text-purple-500">Reliability.</span>
          </h1>

          <p className="text-base md:text-xl text-gray-400 max-w-lg leading-relaxed font-light">
            Engineering robust, distributed systems and cloud infrastructure. Specializing in 
            <span className="text-white font-medium"> high-performance backends</span> that don't fail under pressure.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
            <a 
              href="#architecture" 
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded flex items-center justify-center gap-2 transition-all glow-blue group text-xs md:text-sm tracking-widest"
            >
              EXPLORE_POSSIBILITIES()
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#cases" 
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-bold rounded text-center transition-all text-xs md:text-sm tracking-widest"
            >
              VIEW_SYSTEMS()
            </a>
          </div>

          <div className="flex items-center gap-6 md:gap-8 pt-6 md:pt-8 border-t border-white/5">
             <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-white/95">3+</span>
                <span className="text-[7px] md:text-[9px] uppercase tracking-widest text-gray-500 font-mono-tech">Years Exp</span>
             </div>
             <div className="h-8 md:h-10 w-px bg-white/10"></div>
             <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-white/95">50k+</span>
                <span className="text-[7px] md:text-[9px] uppercase tracking-widest text-gray-500 font-mono-tech">Reqs / Second</span>
             </div>
             <div className="h-8 md:h-10 w-px bg-white/10"></div>
             <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-white/95">70%</span>
                <span className="text-[7px] md:text-[9px] uppercase tracking-widest text-gray-500 font-mono-tech">Infra Savings</span>
             </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
          <TerminalOutput />
          
          <div className="absolute -top-4 -right-2 md:-top-6 md:-right-6 hidden xs:block p-3 md:p-4 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl animate-bounce duration-[4000ms] shadow-2xl z-20">
            <Layers className="text-purple-400/70 mb-1 md:mb-2 w-4 h-4 md:w-5 md:h-5" />
            <div className="text-[7px] md:text-[9px] font-mono-tech text-gray-400 uppercase tracking-tighter">Kubernetes</div>
            <div className="text-[10px] md:text-xs font-bold text-white/80">Orchestration</div>
          </div>
          
          <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 hidden xs:block p-3 md:p-4 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl animate-bounce duration-[5000ms] shadow-2xl z-20">
            <Activity className="text-emerald-400/70 mb-1 md:mb-2 w-4 h-4 md:w-5 md:h-5" />
            <div className="text-[7px] md:text-[9px] font-mono-tech text-gray-400 uppercase tracking-tighter">Observability</div>
            <div className="text-[10px] md:text-xs font-bold text-white/80">Telemetry</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;