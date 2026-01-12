
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="início" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-28 pb-20 sm:pt-32 sm:pb-32">
      {/* Background Image - Luxury Jewelry Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Jewelry Background"
          className="w-full h-full object-cover scale-105"
        />
        {/* Gradients to ensure text readability and depth */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f6] via-transparent to-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <span className="text-[#d4af37] text-[10px] sm:text-xs md:text-sm tracking-[0.5em] uppercase mb-4 block opacity-0 animate-[fadeInDown_1s_ease-out_forwards]">
          Raridade e Elegância
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-serif mb-8 leading-tight opacity-0 animate-[fadeIn_1.2s_ease-out_forwards_0.3s]">
          Onde o Brilho Encontra <br className="hidden sm:block" /> <span className="italic text-[#d4af37]">sua Essência</span>
        </h1>

        {/* Highlighted text block with refined luxury background */}
        <div className="mb-12 opacity-0 animate-[fadeIn_1.5s_ease-out_forwards_0.6s] w-full max-w-3xl">
          <div className="relative px-6 py-8 sm:px-12 sm:py-10 rounded-2xl overflow-hidden group">
            {/* Glassmorphism Luxury Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md border border-[#d4af37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-[#d4af37]/50 transition-colors duration-500"></div>

            {/* Decorative Gold Elements */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#d4af37]/60"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#d4af37]/60"></div>

            <p className="relative text-white text-lg sm:text-xl md:text-2xl font-light leading-relaxed font-serif">
              <span className="shimmer-text font-medium">Peças exclusivas</span> desenhadas para <span className="italic">momentos eternos</span>.
              <br className="hidden sm:block" />
              Sinta o toque da perfeição em cada detalhe.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center opacity-0 animate-[fadeInUp_1s_ease-out_forwards_0.9s] w-full px-4">
          <a href="#coleções" className="w-full sm:w-auto px-12 py-4 bg-[#d4af37] text-white rounded-full font-bold hover:bg-[#b8962d] transition-all duration-300 transform hover:scale-105 text-center shadow-xl shadow-black/20 tracking-widest uppercase text-xs">
            Explorar Coleção
          </a>
          <a href="#sobre" className="w-full sm:w-auto px-12 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 text-center tracking-widest uppercase text-xs shadow-xl shadow-black/10">
            Nossa Herança
          </a>
        </div>
      </div>

      {/* Subtle scroll indicator - Adjusted position */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#d4af37] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
