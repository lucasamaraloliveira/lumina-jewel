import React from 'react';
interface FooterProps {
  onSupportClick: {
    vip: () => void;
    shipping: () => void;
    sizing: () => void;
    warranty: () => void;
  };
}

const Footer: React.FC<FooterProps> = ({ onSupportClick }) => {
  const socialLinks = [
    {
      name: 'instagram',
      href: '#',
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: 'facebook',
      href: '#',
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
      )
    },
    {
      name: 'pinterest',
      href: '#',
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.259 7.929-7.259 4.164 0 7.399 2.965 7.399 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 reveal">
            <h3 className="text-2xl font-serif font-bold tracking-widest text-[#d4af37] mb-6 uppercase">Lumina</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              A excelência na joalheria artesanal. Peças que transcendem o tempo e celebram a raridade de cada momento único.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-[#d4af37]/5 transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <h4 className="font-semibold uppercase tracking-widest text-[10px] sm:text-xs mb-6 text-[#1a1a1a]">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li><a href="#coleções" className="hover:text-[#d4af37] transition-colors">Novidades Exclusivas</a></li>
              <li><a href="#coleções" className="hover:text-[#d4af37] transition-colors">Mais Vendidos</a></li>
              <li><a href="#coleções" className="hover:text-[#d4af37] transition-colors">Diamantes Certificados</a></li>
              <li><a href="#coleções" className="hover:text-[#d4af37] transition-colors">Pérolas Raras</a></li>
            </ul>
          </div>

          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <h4 className="font-semibold uppercase tracking-widest text-[10px] sm:text-xs mb-6 text-[#1a1a1a]">Suporte</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li><button onClick={onSupportClick.vip} className="hover:text-[#d4af37] transition-colors text-left">Atendimento VIP</button></li>
              <li><button onClick={onSupportClick.shipping} className="hover:text-[#d4af37] transition-colors text-left">Envio e Seguro Especial</button></li>
              <li><button onClick={onSupportClick.sizing} className="hover:text-[#d4af37] transition-colors text-left">Guia de Medidas</button></li>
              <li><button onClick={onSupportClick.warranty} className="hover:text-[#d4af37] transition-colors text-left">Nossa Garantia</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] text-gray-400 space-y-4 md:space-y-0 uppercase tracking-widest">
          <p>© 2024 Lumina Jewels Boutique Online. Crafted for perfection.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-[#d4af37] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Termos</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
