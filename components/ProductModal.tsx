
import React, { useEffect, useState } from 'react';
import { Product } from '../types';

interface ProductModalProps {
    product: Product | null;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (product) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => setActive(true), 10);
        } else {
            setActive(false);
            document.body.style.overflow = 'unset';
        }
    }, [product]);

    if (!product) return null;

    const openWhatsApp = () => {
        const message = encodeURIComponent(`Olá, gostaria de receber um atendimento exclusivo para a joia: ${product.name}`);
        window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
    };

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 transition-all duration-700 ${active ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-[#0d0d0d]/90 backdrop-blur-md transition-opacity duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className={`relative w-full max-w-[95%] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl bg-white overflow-y-auto md:overflow-hidden shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] max-h-[90vh] md:max-h-none ${active ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-95 opacity-0'}`}>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-6 md:right-6 z-50 text-gray-400 hover:text-black transition-colors bg-white/50 backdrop-blur-md rounded-full p-1"
                >
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col md:flex-row min-h-[50vh] md:min-h-[70vh] lg:min-h-[80vh]">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 relative bg-[#faf9f6] flex items-center justify-center overflow-hidden aspect-[4/3] md:aspect-auto">
                        <img
                            src={product.image}
                            alt={product.name}
                            className={`w-full h-full object-cover transition-transform duration-[2s] ease-out ${active ? 'scale-100' : 'scale-110'}`}
                        />
                        {/* Category Tag */}
                        <div className="absolute top-6 left-6 md:top-10 md:left-10">
                            <span className="text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase text-white bg-black/20 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2">
                                {product.category}
                            </span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
                        <div className={`space-y-6 md:space-y-8 transition-all duration-1000 delay-300 ${active ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

                            <div>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-3 md:mb-4 text-[#1a1a1a] leading-tight">
                                    {product.name}
                                </h3>
                                <p className="text-[#d4af37] text-xl md:text-2xl font-light tracking-widest">
                                    {product.price}
                                </p>
                            </div>

                            <div className="w-12 md:w-16 h-[1px] bg-[#d4af37]"></div>

                            <div>
                                <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-3 md:mb-4 font-bold">A História</h4>
                                <p className="text-gray-600 font-serif italic text-base md:text-lg leading-relaxed first-letter:text-3xl md:first-letter:text-4xl first-letter:font-serif first-letter:mr-2 md:first-letter:mr-3 first-letter:float-left first-letter:text-[#d4af37]">
                                    {product.story || product.longDescription}
                                </p>
                            </div>

                            {product.details && (
                                <div className="hidden sm:block">
                                    <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-4 md:mb-6 font-bold">Especificações</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-6 md:gap-x-8">
                                        {product.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-500 font-light">
                                                <span className="w-1 h-1 bg-[#d4af37] rounded-full"></span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="pt-4 md:pt-8 flex flex-col sm:flex-row gap-4 md:gap-6">
                                <button
                                    onClick={openWhatsApp}
                                    className="flex-1 bg-[#1a1a1a] text-white px-8 md:px-10 py-4 md:py-5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-[#d4af37] transition-all duration-500 shadow-xl group flex items-center justify-center gap-2 md:gap-3"
                                >
                                    Falar com especialista
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>

                            <p className="text-[8px] md:text-[9px] text-gray-400 uppercase tracking-widest text-center md:text-left">
                                Item exclusivo • Certificado de Autenticidade Incluso
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
