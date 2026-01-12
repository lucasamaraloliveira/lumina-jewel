
import React, { useState } from 'react';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "As joias possuem garantia vitalícia?",
            answer: "Sim, todas as peças Lumina Jewels acompanham um certificado de garantia vitalícia para a autenticidade dos materiais e assistência técnica para manutenção preventiva anual."
        },
        {
            question: "Como funciona a entrega internacional?",
            answer: "Realizamos envios segurados para mais de 50 países via FedEx Priority. Cada remessa é rastreada e possui seguro total contra perdas ou danos durante o trajeto."
        },
        {
            question: "Posso personalizar um design existente?",
            answer: "Nosso atelier permite modificações sutis em coleções vigentes ou a criação de peças Bespoke (sob medida) partindo do zero com nossos designers."
        },
        {
            question: "Qual a origem dos diamantes?",
            answer: "Trabalhamos exclusivamente com diamantes livres de conflitos, seguindo rigorosamente o Processo de Kimberley e com certificações GIA ou IGI."
        }
    ];

    return (
        <section id="faq" className="py-24 md:py-32 bg-[#faf9f6] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 reveal">
                        <span className="text-[#d4af37] text-xs tracking-[0.4em] uppercase mb-4 block font-medium">Suporte</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">Dúvidas Frequentes</h2>
                    </div>

                    <div className="space-y-4 reveal">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-100 overflow-hidden transition-all duration-500"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-lg font-serif text-[#1a1a1a]">{faq.question}</span>
                                    <span className={`transform transition-transform duration-500 ${openIndex === index ? 'rotate-45' : ''}`}>
                                        <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12M6 12h12" />
                                        </svg>
                                    </span>
                                </button>
                                <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="px-8 pb-8 text-gray-500 font-light leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
