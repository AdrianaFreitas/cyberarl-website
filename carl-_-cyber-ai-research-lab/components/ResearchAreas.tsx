
import React from 'react';
import { RESEARCH_PRIORITIES } from '../constants';
import { ArrowUpRight, Cpu, Microscope } from 'lucide-react';

const ResearchAreas: React.FC = () => {
  return (
    <section id="research" className="py-32 px-6 bg-[#080808] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-32">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold text-[#0f4d42] tracking-[0.5em] uppercase mb-8 block">Driving Excellence</span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-12">Research <br/> Priorities</h2>
            <p className="text-white/40 text-2xl font-light leading-snug">
              Leadership in Horizon Europe Cluster 3 projects, collaborating with top universities, LEAs, and industry leaders.
            </p>
          </div>
          <div className="flex flex-col gap-12 lg:w-1/3">
             <div className="flex items-start gap-6">
                <Microscope className="text-[#0f4d42] shrink-0" size={32} />
                <div>
                   <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-2">Scientific Projects</h4>
                   <p className="text-white/30 text-xs leading-relaxed uppercase tracking-wider">Participate and prepare RDI activities in consortium with R&D centers.</p>
                </div>
             </div>
             <div className="flex items-start gap-6">
                <Cpu className="text-[#0f4d42] shrink-0" size={32} />
                <div>
                   <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-2">Cluster 3 Areas</h4>
                   <p className="text-white/30 text-xs leading-relaxed uppercase tracking-wider">FCT, INFRA, RES, BM, SSRI. Leadership in European digital deployment.</p>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {RESEARCH_PRIORITIES.map((priority) => (
            <div key={priority.id} className="group bg-[#080808] p-10 hover:bg-[#0c0c0c] transition-all duration-500 border-r border-b border-white/5">
              <span className="text-[9px] font-bold text-white/20 tracking-[0.3em] uppercase block mb-8">
                {priority.concern}
              </span>
              <h3 className="text-xl font-black tracking-tighter uppercase mb-6 leading-tight group-hover:text-[#0f4d42] transition-colors">
                {priority.area}
              </h3>
              <div className="h-px w-8 bg-[#0f4d42] mb-6"></div>
              <p className="text-white/30 font-light leading-relaxed text-xs uppercase tracking-wider">
                {priority.role}
              </p>
            </div>
          ))}
          <div className="bg-[#0f4d42]/5 p-10 flex flex-col justify-center items-center text-center">
             <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0f4d42] animate-pulse">Expanding Portfolio</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
