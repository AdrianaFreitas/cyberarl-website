
import React from 'react';
import { Hexagon, Twitter, Linkedin, Github, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-40">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-10 group">
              <Hexagon className="w-10 h-10 text-[#0f4d42] fill-[#0f4d42]/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter uppercase leading-none">CARL</span>
                <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-white/40">Cyber AI Research Lab</span>
              </div>
            </div>
            <p className="text-white/30 font-light leading-relaxed mb-10 uppercase text-[11px] tracking-wider">
              Advancing European intelligence and response through credible research, industry collaboration, and law enforcement partnership.
            </p>
            <div className="flex gap-8">
              <Twitter className="w-5 h-5 text-white/10 hover:text-white cursor-pointer transition-all" />
              <Linkedin className="w-5 h-5 text-white/10 hover:text-white cursor-pointer transition-all" />
              <Github className="w-5 h-5 text-white/10 hover:text-white cursor-pointer transition-all" />
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#0f4d42] mb-12">Organization</h4>
            <ul className="space-y-6">
              {['Dataspace', 'Training & Ed', 'Research Grants', 'Ecosystem'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs font-bold tracking-widest uppercase text-white/40 hover:text-white transition-all">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#0f4d42] mb-12">Compliance</h4>
            <ul className="space-y-6">
              {['EU AI Act', 'NIS2 Ops', 'CRA Practitioner', 'ISO/IEC 17025'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs font-bold tracking-widest uppercase text-white/40 hover:text-white transition-all">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#0f4d42] mb-12">Briefing</h4>
            <div className="bg-white/[0.02] border border-white/5 p-8">
               <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-6">Receive quarterly intelligence</p>
               <div className="relative group">
                 <input 
                   type="email" 
                   placeholder="INSTITUTIONAL EMAIL" 
                   className="w-full bg-transparent border-b border-white/10 pb-3 text-[10px] font-bold tracking-widest outline-none focus:border-[#0f4d42] transition-all mb-8 uppercase"
                 />
                 <button className="w-full py-4 bg-[#0f4d42] text-white font-bold text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-700">
                   Join Network
                 </button>
               </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="py-20 border-y border-white/5 mb-20">
           <span className="text-[9px] font-bold tracking-[0.5em] uppercase text-white/10 mb-12 block text-center">In Consortium With</span>
           <div className="flex flex-wrap justify-center gap-16 md:gap-32 opacity-20 grayscale hover:grayscale-0 transition-all">
              {['UNIVERSITIES', 'CERTs', 'LEAs', 'INDUSTRY'].map(p => (
                <span key={p} className="text-xs font-black tracking-[0.3em] uppercase">{p}</span>
              ))}
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] font-bold tracking-[0.4em] uppercase text-white/10">
          <div>&copy; 2026 CARL - Cyber AI Research Lab. European Community Protected.</div>
          <div className="flex gap-16">
            <a href="#" className="hover:text-[#0f4d42] transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-[#0f4d42] transition-colors">Legal Framework</a>
            <a href="#" className="hover:text-[#0f4d42] transition-colors flex items-center gap-2">Security <ExternalLink size={10}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
