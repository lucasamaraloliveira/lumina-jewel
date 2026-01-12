import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductsProps {
  onSelectProduct: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ onSelectProduct }) => {
  return (
    <section id="coleções" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 reveal" style={{ transform: 'translateY(30px)' }}>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-[#1a1a1a]">Coleções em Destaque</h2>
          <div className="w-32 h-[1px] bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Uma seleção curada das nossas peças mais desejadas, onde cada gema conta uma história de bilhões de anos capturada em perfeição.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer reveal"
              style={{
                transform: 'translateY(40px)',
                transitionDelay: `${index * 150}ms`
              }}
              onClick={() => onSelectProduct(product)}
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-gray-50 mb-6 rounded-sm shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center backdrop-blur-[2px]">
                  <button
                    className="bg-white text-black px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#d4af37] hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-[#d4af37] mb-2 uppercase tracking-[0.3em] font-medium">{product.category}</p>
                <h3 className="text-2xl font-serif mb-2 group-hover:text-[#d4af37] transition-colors duration-300">{product.name}</h3>
                <div className="w-8 h-[1px] bg-gray-200 mx-auto mb-3 transition-all duration-500 group-hover:w-16 group-hover:bg-[#d4af37]"></div>
                <p className="text-[#1a1a1a] font-light tracking-widest">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
