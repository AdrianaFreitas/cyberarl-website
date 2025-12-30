
import React, { useState, useRef, useEffect } from 'react';
import { getSecurityAnalysis } from '../services/gemini';
import { Message } from '../types';
import { Send, Bot, User, Loader2, Sparkles, Terminal } from 'lucide-react';

const SecurityAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Interface established. I am the CARL Core Intelligence. Query our repository for AI threat patterns or defensive strategies.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    const response = await getSecurityAnalysis(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setLoading(false);
  };

  return (
    <section id="advisor" className="py-32 px-6 border-t border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <div className="sticky top-32">
            <span className="text-[10px] font-bold text-[#0f4d42] tracking-[0.4em] uppercase mb-6 block">Intelligence Core</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-12">CARL <br/> Analyst</h2>
            <p className="text-white/40 text-lg font-light leading-relaxed mb-10">
              Direct access to our neural analysis layer for real-time threat evaluation and compliance mapping (NIS2, AI Act, DORA).
            </p>
            <div className="flex flex-col gap-5">
               {['Compliance Alignment', 'Adversarial Forensics', 'Executive Reporting'].map((tag) => (
                 <div key={tag} className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
                    <div className="h-px w-10 bg-[#0f4d42]/30"></div>
                    {tag}
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 bg-[#050505] border border-white/5 rounded-sm overflow-hidden flex flex-col h-[700px] shadow-2xl">
          <div className="bg-[#0f4d42]/5 border-b border-white/5 px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#0f4d42] animate-pulse"></div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30">Node: BRCN-01.CARL</span>
            </div>
            <Terminal className="w-4 h-4 text-white/10" />
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-10 scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-8 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-12 h-12 shrink-0 rounded-sm flex items-center justify-center border border-white/5 ${m.role === 'assistant' ? 'bg-[#0f4d42]/10 text-[#0f4d42]' : 'bg-white/5 text-white/20'}`}>
                  {m.role === 'assistant' ? <Bot size={24} /> : <User size={24} />}
                </div>
                <div className={`max-w-[85%] space-y-3 ${m.role === 'user' ? 'text-right' : ''}`}>
                  <div className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/20">
                    {m.role === 'assistant' ? 'Research Core v4.1' : 'Verified Partner'}
                  </div>
                  <div className={`text-base leading-relaxed p-6 rounded-sm border transition-all duration-500 ${m.role === 'assistant' ? 'bg-white/[0.01] border-white/5 text-white/80' : 'bg-[#0f4d42]/5 border-[#0f4d42]/10 text-white/90'} whitespace-pre-wrap`}>
                    {m.content}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-8">
                <div className="w-12 h-12 bg-[#0f4d42]/10 text-[#0f4d42] rounded-sm flex items-center justify-center animate-spin">
                  <Loader2 size={24} />
                </div>
                <div className="flex items-center gap-3 text-white/20 italic text-sm tracking-widest uppercase">
                   Accessing Dataspace...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-8 bg-[#080808] border-t border-white/5">
            <div className="relative group">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Query the research core..."
                className="w-full bg-[#050505] border border-white/5 rounded-sm px-8 py-5 pr-20 text-sm outline-none focus:border-[#0f4d42]/50 focus:bg-[#0a0a0a] transition-all duration-500 placeholder:text-white/10"
              />
              <button 
                type="submit"
                disabled={loading}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 hover:text-[#0f4d42] transition-all disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin w-6 h-6" /> : <Send className="w-6 h-6" />}
              </button>
            </div>
            <div className="mt-5 flex items-center gap-6 text-[9px] font-bold tracking-[0.3em] uppercase text-white/10">
               <span className="flex items-center gap-2 text-[#0f4d42]/60"><Sparkles size={12} /> Secure Multi-Party Computation</span>
               <div className="h-px flex-1 bg-white/5"></div>
               <span>Operational State: Nominal</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SecurityAdvisor;
