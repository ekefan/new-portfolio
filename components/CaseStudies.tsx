
import React from 'react';
import { CASE_STUDIES } from '../constants';
import { TelexVisual, JamForteVisual, JaegerVisual } from './ProjectVisuals';

const CaseStudies: React.FC = () => {
  const renderVisual = (id: string) => {
    switch (id) {
      case 'telex':
        return <TelexVisual />;
      case 'jam-forte':
        return <JamForteVisual />;
      case 'jaeger':
        return <JaegerVisual />;
      default:
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/20 font-mono-tech text-[10px] tracking-widest uppercase mb-2">Internal Visualization Engine</div>
          </div>
        );
    }
  };

  return (
    <section id="cases" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-mono-tech text-purple-500 uppercase tracking-[0.3em]">Recent Deployments</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Case Studies</h3>
          </div>
          <p className="text-gray-400 max-w-md md:text-right leading-relaxed">
            Tangible business results through robust engineering. I don't just ship features; I solve enterprise-scale constraints.
          </p>
        </div>

        <div className="space-y-12">
          {CASE_STUDIES.map((study, idx) => (
            <div 
              key={study.id} 
              className={`group flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all`}
            >
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono-tech uppercase text-gray-400 tracking-widest rounded-full">
                    {study.category}
                  </span>
                  <div className="h-px flex-grow bg-white/5"></div>
                </div>

                <h4 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {study.title}
                </h4>
                
                <p className="text-lg font-medium text-blue-100/80">
                  {study.headline}
                </p>

                <p className="text-gray-400 leading-relaxed">
                  {study.context}
                </p>

                <div className="flex flex-wrap gap-2">
                  {study.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-[#121212] rounded border border-white/5 text-xs text-gray-500 font-mono-tech">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-6">
                  <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-[10px] uppercase font-mono-tech text-emerald-500/70 mb-1">Impact Metric</div>
                    <div className="text-xl font-bold text-emerald-400">{study.metrics}</div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 h-80 bg-[#121212] rounded-2xl overflow-hidden border border-white/5 relative group">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  {renderVisual(study.id)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
