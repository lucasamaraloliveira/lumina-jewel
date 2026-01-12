
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Início', href: '#início' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Coleções', href: '#coleções' },
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20exclusiva%20Lumina.', '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled || isMenuOpen ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className={`text-xl sm:text-2xl font-serif font-bold tracking-widest transition-colors duration-500 ${isScrolled || isMenuOpen ? 'text-[#1a1a1a]' : 'text-[#d4af37]'}`}>
            LUMINA <span className="font-light">JEWELS</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:text-[#d4af37] relative group ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'
                }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={openWhatsApp}
            className={`hidden sm:block px-5 py-2 border transition-all duration-500 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-tighter ${isScrolled || isMenuOpen
              ? 'border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white'
              : 'border-white text-white hover:bg-white hover:text-[#1a1a1a]'
              }`}
          >
            Agendar Visita
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#d4af37]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden absolute top-full left-0 w-full glass-nav transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[400px] border-b border-[#d4af37]/20' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 space-y-4 text-center">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-medium tracking-widest uppercase text-[#1a1a1a] hover:text-[#d4af37]"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => { setIsMenuOpen(false); openWhatsApp(); }}
            className="sm:hidden w-full py-3 bg-[#d4af37] text-white rounded-full text-xs font-bold uppercase"
          >
            Agendar Visita
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
