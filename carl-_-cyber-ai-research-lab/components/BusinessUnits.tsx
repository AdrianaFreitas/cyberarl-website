
import React from 'react';
import { BUSINESS_UNITS } from '../constants';
import { Target, Database, GraduationCap, ShieldAlert, Users, ArrowRight } from 'lucide-react';

const icons = {
  Target: <Target size={24} />,
  Database: <Database size={24} />,
  GraduationCap: <GraduationCap size={24} />,
  ShieldAlert: <ShieldAlert size={24} />,
  Users: <Users size={24} />
};

const BusinessUnits: React.FC = () => {
  return (
    <section id="units" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div>
            <span className="text-[10px] font-bold text-[#0f4d42] tracking-[0.5em] uppercase mb-4 block underline underline-offset-8">Operations</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">Core Business <br/> Units</h2>
          </div>
          <p className="max-w-md text-white/40 text-lg font-light leading-relaxed">
            Our multi-stakeholder foundation operates across five critical strategic units to build European resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {BUSINESS_UNITS.map((unit) => (
            <div key={unit.id} className="group bg-[#050505] p-12 hover:bg-[#0a0a0a] transition-all duration-700 relative overflow-hidden flex flex-col min-h-[400px]">
              <div className="text-[#0f4d42] mb-12 transform group-hover:scale-110 transition-transform duration-500">
                {icons[unit.icon as keyof typeof icons]}
              </div>
              <div className="mb-4">
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#0f4d42] px-2 py-1 bg-[#0f4d42]/10">
                  {unit.type}
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tighter uppercase mb-6 group-hover:text-white transition-colors">
                {unit.title}
              </h3>
              <p className="text-white/30 text-sm font-light leading-relaxed mb-10">
                {unit.description}
              </p>
              <div className="mt-auto">
                <button className="text-[10px] font-bold tracking-[0.4em] uppercase flex items-center gap-3 text-white/20 group-hover:text-[#0f4d42] transition-colors">
                  Explore Unit <ArrowRight size={14} />
                </button>
              </div>
              
              {/* Vertical line accent */}
              <div className="absolute top-0 right-0 w-px h-0 bg-[#0f4d42] group-hover:h-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessUnits;
