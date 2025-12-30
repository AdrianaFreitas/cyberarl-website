
import React from 'react';
import { INTELLIGENCE_DATA } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const IntelligenceGrid: React.FC = () => {
  return (
    <section id="intelligence" className="py-32 px-6 border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-xs font-bold text-blue-500 tracking-[0.3em] uppercase mb-4 block">Archive</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-none">Security <br/> Intelligence</h2>
          </div>
          <p className="max-w-md text-white/50 text-lg font-light leading-relaxed">
            Our research division documents the evolving landscape of cyber threats and artificial intelligence vulnerabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {INTELLIGENCE_DATA.map((item) => (
            <div 
              key={item.id} 
              className="group bg-[#050505] p-10 flex flex-col min-h-[500px] hover:bg-[#0a0a0a] transition-all duration-500 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-bold text-blue-500 tracking-[0.2em] uppercase border-b border-blue-500/30 pb-1">
                  {item.category}
                </span>
                <span className="text-[10px] font-bold text-white/30 tracking-[0.2em]">
                  {item.date}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold tracking-tight uppercase leading-tight mb-6 group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/40 leading-relaxed font-light mb-8 group-hover:text-white/60 transition-colors duration-300">
                  {item.description}
                </p>
              </div>

              <div className="mt-auto relative z-10 flex items-center justify-between">
                <button className="text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 group/btn">
                  Read Analysis
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
              </div>

              {/* Subtle hover background image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 -z-0">
                 <img src={item.image} alt="" className="w-full h-full object-cover grayscale" />
              </div>
            </div>
          ))}
          {/* Fill card to maintain grid feel if needed */}
          <div className="hidden lg:flex bg-[#050505] p-10 flex-col items-center justify-center border-l border-white/10">
            <span className="text-[10px] font-bold text-white/20 tracking-[0.2em] uppercase italic">Next Report Incoming...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceGrid;
