
import React from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
             <Hexagon className="w-8 h-8 text-[#0f4d42] fill-[#0f4d42]/20 transition-transform duration-700 group-hover:rotate-90" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
             </div>
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-xl font-black tracking-tighter uppercase leading-none">CARL</span>
            <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-white/40">Cyber AI Research Lab</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          {['Dataspace', 'Research', 'Training', 'Ecosystem', 'Events'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-white transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0f4d42] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="px-5 py-2.5 bg-[#0f4d42] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 rounded-sm">
            Join Lab
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#050505] border-b border-white/10 p-8 flex flex-col gap-8 animate-in slide-in-from-top duration-500">
          {['Dataspace', 'Research', 'Training', 'Ecosystem', 'Events'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-2xl font-bold tracking-tighter uppercase text-white/70"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
