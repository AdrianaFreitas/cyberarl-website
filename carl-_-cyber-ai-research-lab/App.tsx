
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DataspaceSection from './components/DataspaceSection';
import BusinessUnits from './components/BusinessUnits';
import ResearchAreas from './components/ResearchAreas';
import SecurityAdvisor from './components/SecurityAdvisor';
import EventsSection from './components/EventsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-12');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#0f4d42] selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        {/* HERO SECTION - Vision & Mission */}
        <div className="reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <Hero />
        </div>

        {/* THE PROBLEM / IMPACT - Statistical Highlight */}
        <section className="py-20 border-y border-white/5 bg-white/[0.01] overflow-hidden relative">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-20">
              <div className="reveal opacity-0 translate-y-12">
                 <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/20 mb-6">Market Problem</h3>
                 <p className="text-2xl font-black tracking-tighter uppercase leading-none mb-4">47% Attack Surge</p>
                 <p className="text-[11px] text-white/30 uppercase tracking-widest leading-relaxed">AI-driven cybercrime is outpacing traditional threat intelligence systems globally.</p>
              </div>
              <div className="reveal opacity-0 translate-y-12 delay-100">
                 <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/20 mb-6">Economic Gap</h3>
                 <p className="text-2xl font-black tracking-tighter uppercase leading-none mb-4">$193B Loss</p>
                 <p className="text-[11px] text-white/30 uppercase tracking-widest leading-relaxed">Estimated global economic impact of AI-enabled fraud and malware annually.</p>
              </div>
              <div className="reveal opacity-0 translate-y-12 delay-200">
                 <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/20 mb-6">Our Mandate</h3>
                 <p className="text-2xl font-black tracking-tighter uppercase leading-none mb-4">European Trust</p>
                 <p className="text-[11px] text-white/30 uppercase tracking-widest leading-relaxed">Creating a sovereign trust network for sharing AI crime intelligence and defense strategies.</p>
              </div>
           </div>
        </section>

        {/* DATASPACE - The Solution Clearinghouse */}
        <div className="reveal opacity-0 translate-y-12 transition-all duration-1000">
          <DataspaceSection />
        </div>

        {/* BUSINESS UNITS - The Strategy */}
        <div className="reveal opacity-0 translate-y-12 transition-all duration-1000">
          <BusinessUnits />
        </div>

        {/* RESEARCH PRIORITIES - Detailed Focus */}
        <div className="reveal opacity-0 translate-y-12 transition-all duration-1000">
          <ResearchAreas />
        </div>

        {/* TRAINING & EDUCATION */}
        <section id="training" className="py-32 px-6 bg-[#0a0a0a] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                <div className="reveal opacity-0 translate-y-12">
                   <span className="text-[10px] font-bold text-[#0f4d42] tracking-[0.5em] uppercase mb-10 block underline underline-offset-8">Capacity Building</span>
                   <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-12">Training <br/> Excellence</h2>
                   <p className="text-white/40 text-xl font-light leading-relaxed">
                     Fostering partnerships with leading European institutions and top professionals to deliver specialized security curricula.
                   </p>
                </div>
                <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/5">
                   {[
                     { title: "Professional Certificates", desc: "CRA Practitioner, NIS2 Operations, ISO/IEC 17025 AI Security alignment." },
                     { title: "Intensive Academies", desc: "Summer schools for Secure Development, Adversarial AI, and Digital Forensics." },
                     { title: "Executive Programmes", desc: "Governance, AI Security Leadership, and Regulatory compliance training (EU AI Act)." }
                   ].map((item, i) => (
                     <div key={i} className="reveal opacity-0 translate-y-12 p-10 bg-[#050505] hover:bg-[#0a0a0a] transition-all duration-500">
                        <h4 className="text-[10px] font-bold tracking-[0.5em] uppercase mb-4 text-[#0f4d42]">UNIT 0{i+1}</h4>
                        <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">{item.title}</h3>
                        <p className="text-[11px] text-white/30 uppercase tracking-widest leading-relaxed">{item.desc}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* INTERACTIVE COMPONENT - CARL ANALYST */}
        <div className="reveal opacity-0 translate-y-12 transition-all duration-1000">
          <SecurityAdvisor />
        </div>

        {/* EVENTS & NEWSLETTER */}
        <div className="reveal opacity-0 translate-y-12 transition-all duration-1000">
          <EventsSection />
        </div>
        
        {/* FINAL CTA - Joining the Network */}
        <section className="py-48 px-6 text-center relative overflow-hidden">
           <div className="max-w-4xl mx-auto reveal opacity-0 translate-y-12 z-10 relative">
              <span className="text-[10px] font-bold text-[#0f4d42] tracking-[0.6em] uppercase mb-12 block">Next Steps</span>
              <h2 className="text-5xl md:text-[7rem] font-black tracking-tighter uppercase leading-[0.85] mb-16">Defend The <br/> <span className="text-outline">Digital Future.</span></h2>
              <div className="flex flex-wrap justify-center gap-8">
                <button className="px-12 py-7 bg-white text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-[#0f4d42] hover:text-white transition-all duration-700">
                  Join The Community
                </button>
                <button className="px-12 py-7 border border-white/10 text-white font-black uppercase text-xs tracking-[0.3em] hover:bg-white/5 transition-all duration-700">
                  Request Briefing
                </button>
              </div>
           </div>
           
           {/* Background watermark */}
           <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
              <span className="text-[25rem] font-black uppercase tracking-tighter">CARL</span>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
