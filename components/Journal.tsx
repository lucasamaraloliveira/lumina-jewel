
import React from 'react';

const Journal: React.FC = () => {
    const articles = [
        {
            title: "A Arte da Lapidação Manual",
            excerpt: "Descubra como nossos mestres transformam pedras brutas em prismas de luz pura através de técnicas centenárias.",
            image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800",
            tag: "Artesanato"
        },
        {
            title: "Ouro Ético: Um Compromisso Eterno",
            excerpt: "Nossa jornada para garantir que cada grama de metal precioso em nossas joias respeite a terra e as pessoas.",
            image: "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&q=80&w=800",
            tag: "Sustentabilidade"
        }
    ];

    return (
        <section id="journal" className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
                    <div className="max-w-xl">
                        <span className="text-[#d4af37] text-xs tracking-[0.4em] uppercase mb-4 block font-medium">Lumina Journal</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">Crônicas do Atelier</h2>
                    </div>
                    <button className="hidden md:block text-[10px] uppercase tracking-[0.3em] font-bold border-b border-[#d4af37] pb-2 text-[#d4af37] hover:tracking-[0.4em] transition-all">
                        Ver todas as matérias
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {articles.map((article, index) => (
                        <div key={index} className="group cursor-pointer reveal" style={{ transitionDelay: `${index * 200}ms` }}>
                            <div className="relative overflow-hidden aspect-[16/10] mb-8">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-white/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.3em] px-4 py-2 text-[#1a1a1a] font-bold">
                                        {article.tag}
                                    </span>
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-serif mb-4 group-hover:text-[#d4af37] transition-colors duration-500">
                                {article.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed font-light text-lg mb-6">
                                {article.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-black group-hover:gap-6 transition-all">
                                Ler matéria <span className="w-10 h-[1px] bg-[#d4af37]"></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journal;
