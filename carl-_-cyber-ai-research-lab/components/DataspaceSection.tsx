
import React from 'react';
import { Database, Shield, Zap, Globe, Lock, Share2 } from 'lucide-react';

const DataspaceSection: React.FC = () => {
  const values = [
    { title: "WHAT WE SHARE", content: "Deepfake detection, adversarial AI incidents, synthetic identity markers, and supply chain threats." },
    { title: "WHY IT WORKS", content: "Privacy-conscious, simple data sharing with no heavy maintenance—fostering trust and rapid learning." },
    { title: "THE IMPACT", content: "Reduce $193B in annual losses and protect critical infrastructure through collaborative intel." }
  ];

  return (
    <section id="dataspace" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-40">
          <div>
            <span className="text-[10px] font-bold text-[#0f4d42] tracking-[0.5em] uppercase mb-8 block underline underline-offset-8">Dataspace Clearinghouse</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-12">
              Collective <br/> <span className="text-[#0f4d42]">Intelligence.</span>
            </h2>
            <p className="text-white/40 text-2xl font-light leading-snug mb-16">
              A lightweight, community-first clearinghouse mobilizing collective defense against AI-powered cybercrime.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
               <div className="flex items-start gap-4">
                  <Lock className="text-[#0f4d42] shrink-0" size={20} />
                  <div>
                    <h4 className="text-[10px] font-bold tracking-widest uppercase mb-2">Privacy First</h4>
                    <p className="text-[11px] text-white/30 tracking-wider uppercase">Secure development & forensics integration.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <Share2 className="text-[#0f4d42] shrink-0" size={20} />
                  <div>
                    <h4 className="text-[10px] font-bold tracking-widest uppercase mb-2">Real-Time Sharing</h4>
                    <p className="text-[11px] text-white/30 tracking-wider uppercase">Accelerated detection and response.</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-px bg-white/5 border border-white/5">
             {values.map((v, i) => (
               <div key={i} className="bg-[#050505] p-12 hover:bg-[#0a0a0a] transition-all duration-500">
                  <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#0f4d42] mb-6 underline decoration-white/10">{v.title}</h4>
                  <p className="text-xl font-light leading-relaxed text-white">{v.content}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataspaceSection;
