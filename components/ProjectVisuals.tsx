import React, { useEffect, useState } from 'react';
import { Activity, Server, Shield, Zap, Database, Terminal, GitBranch, Cpu, Brain, MessageSquare, Cog } from 'lucide-react';

export const TelexVisual: React.FC = () => {
  const [throughput, setThroughput] = useState(420);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setThroughput(prev => Math.max(380, Math.min(prev + (Math.random() * 20 - 10), 500)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full p-6 flex flex-col justify-between bg-[#080808]">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="text-[10px] font-mono-tech text-blue-500 uppercase tracking-widest">Efficiency_Metrics</div>
          <div className="text-xl font-bold text-white">Cost Optimization Engine</div>
        </div>
        <div className="flex gap-2">
          <div className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] text-emerald-500 font-mono-tech uppercase">-70% SPEND</div>
        </div>
      </div>

      <div className="flex-1 flex items-end gap-1 px-2 py-8">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="flex-1 bg-blue-600/30 rounded-t-sm transition-all duration-500"
            style={{ 
              height: `${20 + Math.random() * 60}%`,
              opacity: 0.3 + (i / 20) * 0.7 
            }}
          ></div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
        <div className="flex items-center gap-2">
          <Activity size={14} className="text-blue-500" />
          <div className="text-[10px] font-mono-tech text-gray-500">TPS: <span className="text-white">{throughput.toFixed(1)}</span></div>
        </div>
        <div className="flex items-center gap-2">
          <Zap size={14} className="text-yellow-500" />
          <div className="text-[10px] font-mono-tech text-gray-500">LATENCY: <span className="text-white">14ms</span></div>
        </div>
      </div>
    </div>
  );
};

export const JamForteVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["COMMIT", "SAST", "DOCKER", "K8S_DEPLOY"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full p-6 flex flex-col bg-[#080808] relative overflow-hidden">
      <div className="text-[10px] font-mono-tech text-purple-500 uppercase tracking-[0.3em] mb-8 text-center">Infrastructure_Pipeline_Live</div>
      
      <div className="flex flex-col gap-4 relative z-10">
        {steps.map((step, i) => (
          <div 
            key={step}
            className={`flex items-center gap-4 p-3 rounded-lg border transition-all duration-500 ${
              activeStep === i 
                ? 'bg-purple-600/10 border-purple-500/50 translate-x-2' 
                : 'bg-white/5 border-white/5 opacity-40'
            }`}
          >
            <div className={`w-8 h-8 rounded flex items-center justify-center ${activeStep === i ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-500'}`}>
              {i === 0 && <GitBranch size={16} />}
              {i === 1 && <Shield size={16} />}
              {i === 2 && <Database size={16} />}
              {i === 3 && <Server size={16} />}
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-mono-tech text-gray-400">STAGE_{i+1}</div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">{step}</div>
            </div>
            {activeStep === i && (
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-ping"></div>
                <span className="text-[8px] font-mono-tech text-emerald-500 uppercase">RUNNING</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="absolute right-4 bottom-4 grid grid-cols-2 gap-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-3 h-3 rounded-sm bg-emerald-500/20 border border-emerald-500/30 animate-pulse"></div>
        ))}
      </div>
    </div>
  );
};

export const JaegerVisual: React.FC = () => {
  return (
    <div className="w-full h-full p-3 md:p-6 bg-[#080808] font-mono-tech overflow-hidden">
      <div className="flex justify-between mb-4">
        <div className="text-[7px] md:text-[10px] text-emerald-500 uppercase tracking-widest">Distributed_Trace_Explorer</div>
        <div className="text-[7px] text-gray-500 hidden sm:block">ID: trace-82f-11c9</div>
      </div>
      
      <div className="space-y-3 md:space-y-4">
        <div className="relative">
          <div className="h-5 md:h-6 bg-blue-500/20 border-l-2 border-blue-500 w-[95%] sm:w-[90%] flex items-center px-2 text-[7px] md:text-[10px] text-blue-400 whitespace-nowrap overflow-hidden">api-gateway :: GET /api/v1/auth</div>
          <div className="mt-2 ml-1 md:ml-4 space-y-2">
            <div className="h-4 md:h-5 bg-purple-500/20 border-l-2 border-purple-500 w-[55%] sm:w-[40%] flex items-center px-2 text-[7px] md:text-[10px] text-purple-400 whitespace-nowrap overflow-hidden">auth-service :: VerifyToken</div>
            <div className="h-4 md:h-5 bg-purple-500/20 border-l-2 border-purple-500 w-[45%] sm:w-[30%] flex items-center px-2 text-[7px] md:text-[10px] text-purple-400 ml-2 md:ml-4 whitespace-nowrap overflow-hidden text-ellipsis">redis :: GET session_832</div>
            <div className="h-4 md:h-5 bg-emerald-500/20 border-l-2 border-emerald-500 w-[60%] sm:w-[45%] flex items-center px-2 text-[7px] md:text-[10px] text-emerald-400 whitespace-nowrap overflow-hidden">user-service :: GetProfile</div>
            <div className="h-4 md:h-5 bg-emerald-500/20 border-l-2 border-emerald-500 w-[50%] sm:w-[35%] flex items-center px-2 text-[7px] md:text-[10px] text-emerald-400 ml-2 md:ml-4 whitespace-nowrap overflow-hidden text-ellipsis">postgres :: SELECT * FROM users</div>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-8 flex justify-center">
        <div className="flex items-center gap-2 md:gap-8 scale-75 md:scale-100">
          <div className="flex flex-col items-center">
            <Cpu className="text-gray-700 mb-1" size={12} />
            <span className="text-[6px] md:text-[8px] text-gray-600 uppercase">Gateway</span>
          </div>
          <div className="h-px w-4 md:w-8 bg-gray-800 relative">
             <div className="absolute top-1/2 left-0 w-1 h-1 bg-emerald-500 rounded-full animate-flow"></div>
          </div>
          <div className="flex flex-col items-center">
            <Server className="text-gray-700 mb-1" size={12} />
            <span className="text-[6px] md:text-[8px] text-gray-600 uppercase">Svc_Auth</span>
          </div>
          <div className="h-px w-4 md:w-8 bg-gray-800"></div>
          <div className="flex flex-col items-center">
            <Database className="text-gray-700 mb-1" size={12} />
            <span className="text-[6px] md:text-[8px] text-gray-600 uppercase">DB_Primary</span>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes flow {
          0% { left: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .animate-flow {
          animation: flow 2s infinite linear;
        }
      `}</style>
    </div>
  );
};

export const FrictionAIVisual: React.FC = () => {
  const [log, setLog] = useState<string[]>([]);
  const [activeStage, setActiveStage] = useState(0);
  
  const stages = [
    { label: "Parsing Input", icon: MessageSquare },
    { label: "Memory Sync", icon: Database },
    { label: "Reasoning Loop", icon: Brain },
    { label: "Executing Tools", icon: Cog },
    { label: "Synthesizing", icon: Zap }
  ];

  useEffect(() => {
    const logs = [
      "> INGRESS: User intent identified.",
      "> MEMORY: Fetching transaction context...",
      "> ANALYSIS: Executing reasoning chains.",
      "> TOOLCALL: Generating system commands...",
      "> RESPONSE: Optimizing state for delivery."
    ];
    
    let i = 0;
    const logInterval = setInterval(() => {
      setLog(prev => [...prev.slice(-3), logs[i % logs.length]]);
      setActiveStage(i % stages.length);
      i++;
    }, 2500);

    return () => clearInterval(logInterval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080808] p-4 relative overflow-hidden">
      {/* Background Neural Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center h-full">
        {/* Uniform Orbital System */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 256 256">
            {stages.map((_, i) => {
              // Exact uniform calculation
              const angle = (i * 72 - 90) * (Math.PI / 180);
              const radius = 90;
              const x2 = 128 + Math.cos(angle) * radius;
              const y2 = 128 + Math.sin(angle) * radius;
              
              return (
                <g key={i}>
                  <line 
                    x1="128" y1="128" x2={x2} y2={y2}
                    stroke={activeStage === i ? "#3b82f6" : "#ffffff08"}
                    strokeWidth={activeStage === i ? "2" : "1"}
                    className="transition-all duration-700"
                  />
                  {activeStage === i && (
                    <circle r="2.5" fill="#3b82f6">
                      <animateMotion 
                        path={`M 128 128 L ${x2} ${y2}`} 
                        dur="0.8s" 
                        repeatCount="indefinite" 
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Central Brain Core */}
          <div className="relative z-20 w-20 h-20 rounded-full bg-[#0a0a0a] border border-blue-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.15)]">
            <Brain size={36} className={`text-blue-500 transition-all duration-700 ${activeStage % 2 === 0 ? 'scale-110 opacity-100' : 'scale-100 opacity-80'}`} />
            {/* Rotating dashed ring */}
            <div className="absolute -inset-3 border border-blue-500/10 border-dashed rounded-full animate-[spin_20s_linear_infinite]"></div>
          </div>
          
          {/* Uniformly Distributed Orbital Nodes */}
          {stages.map((stage, i) => {
            const angle = (i * 72 - 90) * (Math.PI / 180);
            const radius = 90;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const Icon = stage.icon;
            
            return (
              <div 
                key={i}
                style={{
                  transform: `translate(${x}px, ${y}px)`
                }}
                className={`absolute w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-700 ${
                  activeStage === i 
                    ? 'bg-blue-600 border-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.6)] scale-110 z-30' 
                    : 'bg-[#0f0f0f]/80 backdrop-blur-sm border-white/10 opacity-30 scale-90'
                }`}
              >
                <Icon size={18} className={activeStage === i ? 'text-white' : 'text-gray-400'} />
                
                {activeStage === i && (
                   <div className="absolute -bottom-8 whitespace-nowrap bg-blue-600 text-[8px] font-mono-tech px-2 py-0.5 rounded text-white tracking-widest uppercase animate-in fade-in zoom-in duration-300">
                      {stage.label}
                   </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Live Logs Component */}
        <div className="mt-12 w-full max-w-[280px] bg-[#0a0a0a] rounded-lg border border-white/5 p-3 font-mono-tech text-[9px] leading-relaxed shadow-xl">
          <div className="flex justify-between items-center text-gray-600 border-b border-white/5 pb-1.5 mb-2">
            <span className="tracking-tighter">AGENTIC_TRACE_CORE</span>
            <span className="flex items-center gap-1.5">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
               ACTIVE
            </span>
          </div>
          <div className="space-y-1">
            {log.map((line, idx) => (
              <div key={idx} className={`${idx === log.length - 1 ? 'text-blue-400' : 'text-gray-500'} transition-colors duration-500`}>
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};