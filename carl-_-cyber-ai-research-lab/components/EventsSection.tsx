
import React from 'react';
import { UPCOMING_EVENTS } from '../constants';
import { MapPin, Calendar } from 'lucide-react';

const EventsSection: React.FC = () => {
  return (
    <section id="events" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div>
             <span className="text-[10px] font-bold text-[#0f4d42] tracking-[0.4em] uppercase mb-4 block">Timeline</span>
             <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Upcoming <br/> Events</h2>
          </div>
          <button className="px-8 py-4 border border-[#0f4d42] text-[#0f4d42] font-bold uppercase text-[10px] tracking-widest hover:bg-[#0f4d42] hover:text-white transition-all duration-500">
            View All Events
          </button>
        </div>

        <div className="flex flex-col gap-px bg-white/5 border border-white/5">
           {UPCOMING_EVENTS.map((event, i) => (
             <div key={i} className="group bg-[#050505] p-12 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-[#0a0a0a] transition-all duration-500 gap-8">
                <div className="flex items-center gap-12 flex-1">
                   <div className="w-24 shrink-0">
                      <span className="text-[10px] font-bold text-[#0f4d42] tracking-widest block mb-2">DATE</span>
                      <span className="text-sm font-black tracking-tighter uppercase whitespace-nowrap">{event.date.split(',')[0]}</span>
                   </div>
                   <div>
                      <span className="text-[10px] font-bold text-white/20 tracking-widest block mb-2 uppercase flex items-center gap-2">
                        <MapPin size={10} /> {event.location}
                      </span>
                      <h3 className="text-2xl font-bold tracking-tighter uppercase group-hover:text-[#0f4d42] transition-colors">{event.title}</h3>
                   </div>
                </div>
                <div className="md:max-w-xs">
                   <p className="text-white/40 text-xs leading-relaxed uppercase tracking-wider">{event.description}</p>
                </div>
                <button className="shrink-0 w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-[#0f4d42] transition-all">
                   <Calendar size={18} className="group-hover:text-[#0f4d42]" />
                </button>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
