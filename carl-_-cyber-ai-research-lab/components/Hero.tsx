
import React from 'react';
import { ArrowRight, Hexagon } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-32 px-6 min-h-screen flex flex-col justify-center max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col gap-10 max-w-5xl relative z-10">
        <div className="flex items-center gap-4">
          <div className="h-px w-16 bg-[#0f4d42]"></div>
          <span className="text-[10px] font-bold text-[#0f4d42] tracking-[0.5em] uppercase">
            Corporate Initiative
          </span>
        </div>
        
        <h1 className="text-6xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase mb-6">
          Security <br />
          For The <span className="text-outline">AI Age.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
          <div>
            <p className="text-2xl md:text-3xl text-white font-light leading-tight mb-8">
              Advancing global intelligence and response to AI-driven crime.
            </p>
            <p className="text-white/40 text-sm uppercase tracking-widest font-bold leading-relaxed">
              Protecting the digital future by driving innovation, knowledge, and action against crime in an AI-powered world.
            </p>
          </div>
          
          <div className="flex flex-col justify-end gap-12">
            <div className="flex flex-wrap gap-6">
              <button className="group px-10 py-6 bg-white text-black font-black uppercase text-xs tracking-[0.3em] flex items-center gap-4 hover:bg-[#0f4d42] hover:text-white transition-all duration-700">
                Join The Lab
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </button>
              <button className="px-10 py-6 border border-white/10 text-white font-black uppercase text-xs tracking-[0.3em] hover:bg-white/5 transition-all duration-700">
                Dataspace Access
              </button>
            </div>
            
            <div className="flex items-center gap-10">
               <div className="flex flex-col">
                  <span className="text-2xl font-black text-[#0f4d42]">47%</span>
                  <span className="text-[9px] font-bold text-white/30 tracking-widest uppercase">Crime Surge</span>
               </div>
               <div className="w-px h-8 bg-white/10"></div>
               <div className="flex flex-col">
                  <span className="text-2xl font-black text-[#0f4d42]">$193B</span>
                  <span className="text-[9px] font-bold text-white/30 tracking-widest uppercase">Global Loss</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Decor */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-px h-full bg-white/[0.03]"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-white/[0.03]"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-white/[0.03]"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-white/[0.03]"></div>
        
        {/* Logo Shadow */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-[0.02] scale-[2.5] rotate-12">
          <Hexagon size={400} className="text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
