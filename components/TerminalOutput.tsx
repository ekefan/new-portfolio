import React, { useState, useEffect } from 'react';

const TerminalOutput: React.FC = () => {
  const lines = [
    { text: "> Initializing Backend...", color: "text-blue-400" },
    { text: "[OK] Spring Boot / Go Runtime Loaded", color: "text-gray-400" },
    { text: "> Provisioning Infrastructure...", color: "text-purple-400" },
    { text: "[OK] AWS/GCP Multi-cloud Terraform Cluster Active", color: "text-gray-400" },
    { text: "> Optimizing Observability...", color: "text-emerald-400" },
    { text: "[OK] Jaeger/OTEL Tracing 100% Ingress Coverage", color: "text-gray-400" },
    { text: "> Handshake Established. Welcome to ekefan.dev.", color: "text-white font-bold" },
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const fullText = lines[currentLineIndex].text;
      let charIndex = 0;
      
      const interval = setInterval(() => {
        setDisplayedText(fullText.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === fullText.length) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentLineIndex(prev => prev + 1);
            setDisplayedText("");
          }, 600);
        }
      }, 30);
      
      return () => clearInterval(interval);
    } else {
        setIsTyping(false);
    }
  }, [currentLineIndex]);

  return (
    <div className="bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden shadow-2xl w-full max-w-2xl transform scale-[0.95] sm:scale-100">
      <div className="bg-[#121212] px-4 py-2 border-b border-white/10 flex items-center justify-between">
        <div className="flex gap-1.5 md:gap-2">
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/50"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/50"></div>
        </div>
        <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-500 font-mono-tech">sh — x64 — production</span>
      </div>
      <div className="p-4 md:p-6 h-[180px] md:h-[240px] font-mono-tech text-[10px] md:text-sm leading-relaxed overflow-y-auto scrollbar-hide">
        {lines.slice(0, currentLineIndex).map((line, idx) => (
          <div key={idx} className={`${line.color} mb-1 whitespace-pre-wrap`}>{line.text}</div>
        ))}
        {currentLineIndex < lines.length && (
          <div className={`${lines[currentLineIndex].color} flex`}>
            {displayedText}
            <span className="w-1.5 h-3 md:w-2 md:h-5 bg-blue-500 ml-1 animate-pulse"></span>
          </div>
        )}
        {!isTyping && (
          <div className="text-gray-500 mt-4 animate-pulse italic text-[8px] md:text-[10px]">
            Waiting for commands...
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalOutput;