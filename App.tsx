
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import Testimonials from './components/Testimonials';
import Journal from './components/Journal';
import FAQ from './components/FAQ';
import { Product } from './types';

import SupportPage, { VIPService, ShippingInfo, SizingGuide, WarrantyPolicy } from './components/SupportPage';

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeSupportPage, setActiveSupportPage] = useState<{ title: string, content: React.ReactNode } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);

      // Trigger initial reveal on load
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) el.classList.add('active');
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activeSupportPage || selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeSupportPage, selectedProduct]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20receber%20um%20atendimento%20exclusivo%20Lumina.', '_blank');
  };

  const supportActions = {
    vip: () => setActiveSupportPage({ title: 'Atendimento VIP', content: <VIPService /> }),
    shipping: () => setActiveSupportPage({ title: 'Envio e Seguro Especial', content: <ShippingInfo /> }),
    sizing: () => setActiveSupportPage({ title: 'Guia de Medidas', content: <SizingGuide /> }),
    warranty: () => setActiveSupportPage({ title: 'Nossa Garantia', content: <WarrantyPolicy /> })
  };

  return (
    <div className="relative min-h-screen selection:bg-[#d4af37]/30">
      <Navbar />

      <main>
        <Hero />

        <section id="sobre" className="py-20 md:py-32 bg-[#faf9f6] overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <div className="w-full lg:w-1/2 order-2 lg:order-1 reveal" style={{ transform: 'translateX(-50px)' }}>
                <div className="relative group">
                  <div className="absolute inset-0 border border-[#d4af37] translate-x-4 translate-y-4 -z-10 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                  <img
                    src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&q=80&w=800"
                    alt="Atelier Lumina"
                    className="rounded-sm shadow-2xl w-full h-auto object-cover max-h-[600px] transition-all duration-700 group-hover:brightness-110"
                  />
                  <div className="absolute -bottom-8 -right-4 sm:-bottom-12 sm:-right-8 w-40 h-40 sm:w-56 sm:h-56 bg-[#d4af37] flex items-center justify-center p-6 sm:p-10 shadow-xl transition-transform duration-500 group-hover:scale-105">
                    <p className="text-white text-center font-serif italic text-base sm:text-xl leading-snug">
                      "Relíquias modernas desde 1994"
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left reveal" style={{ transform: 'translateX(50px)' }}>
                <span className="text-[#d4af37] text-xs sm:text-sm tracking-[0.4em] uppercase mb-6 block font-medium">Nossa Herança</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-8 text-[#1a1a1a] leading-[1.1]">
                  Artesanato Elevado à Categoria de <br className="hidden md:block" />
                  <span className="italic text-[#d4af37]">Obra de Arte</span>
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed text-base sm:text-lg font-light">
                  <p>
                    Na Lumina Jewels, acreditamos que uma joia é mais do que um acessório; é um legado. Nossos mestres joalheiros dedicam centenas de horas em cada lapidação, garantindo que a luz dance em perfeita harmonia com a pedra.
                  </p>
                  <p className="hidden sm:block">
                    Trabalhamos exclusivamente com materiais de origem ética e gemas certificadas internacionalmente. Cada curva, cada encaixe e cada brilho é uma promessa de eternidade para quem a carrega.
                  </p>
                </div>
                <div className="mt-10">
                  <button className="group relative text-[#d4af37] font-semibold text-sm uppercase tracking-widest overflow-hidden py-2" onClick={() => document.getElementById('journal')?.scrollIntoView({ behavior: 'smooth' })}>
                    Conheça nossa História
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d4af37] transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Products onSelectProduct={setSelectedProduct} />

        <Journal />

        <Testimonials />

        <FAQ />
      </main>

      <Footer onSupportClick={supportActions} />

      {activeSupportPage && (
        <SupportPage
          title={activeSupportPage.title}
          content={activeSupportPage.content}
          onClose={() => setActiveSupportPage(null)}
        />
      )}

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* WhatsApp Floating Button - Safe Area aware */}
      <button
        id="whatsapp"
        onClick={openWhatsApp}
        className="fixed bottom-6 left-4 sm:bottom-8 sm:left-8 z-40 bg-[#25D366] text-white p-4 sm:p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        title="Falar com Especialista"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-700 ease-in-out whitespace-nowrap ml-0 group-hover:ml-4 text-xs font-bold uppercase tracking-widest hidden md:inline-block">
          Especialista Lumina
        </span>
      </button>

      {/* Back to Top - Optimized for Mobile */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-40 bg-white/95 backdrop-blur border border-[#d4af37] text-[#d4af37] w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#d4af37] hover:text-white transition-all duration-500 transform hover:-translate-y-2 active:scale-90 animate-[fadeIn_0.5s_ease-out]"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default App;
