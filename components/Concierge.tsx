
import React, { useState } from 'react';
import { GeminiService } from '../services/geminiService';

const Concierge: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const gemini = new GeminiService();

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    const result = await gemini.getJewelryRecommendation(input);
    setResponse(result || null);
    setLoading(false);
  };

  return (
    <section id="concierge" className="py-24 md:py-32 bg-[#0d0d0d] text-white overflow-hidden relative">
      {/* Decorative animated blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:flex-1 text-center lg:text-left reveal" style={{ transform: 'translateY(30px)' }}>
            <span className="text-[#d4af37] text-xs sm:text-sm tracking-[0.5em] uppercase mb-6 block">Personal Shopper AI</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-8 leading-[1.1]">
              Concierge <span className="italic text-[#d4af37]">Virtual Lumina</span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-lg font-light">
              Descreva seus desejos ou a ocasião especial. Nossa inteligência artificial de alta joalheria encontrará a peça que ressoa com sua alma.
            </p>

            <form onSubmit={handleAsk} className="relative mb-10 max-w-xl mx-auto lg:mx-0 group shadow-2xl">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: Uma joia para um aniversário de 20 anos..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-5 pl-8 pr-40 focus:outline-none focus:border-[#d4af37]/50 focus:bg-white/10 transition-all text-white text-base placeholder:text-gray-600 backdrop-blur-sm"
              />
              <button 
                type="submit"
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 bg-[#d4af37] hover:bg-[#b8962d] disabled:bg-gray-700 text-white rounded-full px-8 transition-all text-xs font-bold uppercase tracking-widest flex items-center gap-2"
              >
                {loading ? (
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </span>
                ) : 'Consultar'}
              </button>
            </form>

            {response && (
              <div className="bg-white/5 border border-[#d4af37]/20 p-8 sm:p-10 rounded-3xl animate-[fadeInUp_0.8s_ease-out] text-left backdrop-blur-md relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37] opacity-50"></div>
                <p className="font-serif italic text-lg sm:text-xl leading-relaxed text-[#f7ef8a] relative z-10">
                  "{response}"
                </p>
                <div className="mt-6 flex justify-between items-center opacity-60">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#d4af37]/30"></div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">Lumina AI Advisor</span>
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:flex-1 relative reveal" style={{ transform: 'scale(0.9)' }}>
            <div className="aspect-[4/5] w-full max-w-md mx-auto relative group">
                <div className="absolute -inset-4 border border-[#d4af37]/30 rounded-full animate-[spin_20s_linear_infinite] opacity-20 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[#d4af37] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000"></div>
                <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 p-4">
                  <img 
                      src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800" 
                      alt="Jewelry Expert"
                      className="w-full h-full object-cover rounded-full grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 transform group-hover:scale-105"
                  />
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-4 -right-4 bg-[#d4af37] w-20 h-20 rounded-full flex items-center justify-center animate-bounce shadow-2xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                  </svg>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concierge;
