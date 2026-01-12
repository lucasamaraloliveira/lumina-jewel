
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section id="experiencias" className="py-24 md:py-32 bg-[#faf9f6] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 reveal">
                    <span className="text-[#d4af37] text-xs tracking-[0.4em] uppercase mb-4 block font-medium">Experiências</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">Vozes da Elegância</h2>
                    <div className="w-20 h-[1px] bg-[#d4af37] mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-10 md:p-14 shadow-sm border border-gray-100 flex flex-col items-center text-center reveal"
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="w-20 h-20 rounded-full overflow-hidden mb-8 border-2 border-[#d4af37]/20 p-1">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>

                            <svg className="w-10 h-10 text-[#d4af37]/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 17.7614 19.7784 20 17.017 20H14.017V21ZM5.01698 21L5.01698 18C5.01698 16.8954 5.91241 16 7.01698 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01698C5.4647 8 5.01698 8.44772 5.01698 9V12C5.01698 12.5523 4.56927 13 4.01698 13H2.01698C1.4647 13 1.01698 12.5523 1.01698 12V9C1.01698 7.34315 2.36013 6 4.01698 6H10.017C11.6738 6 13.017 7.34315 13.017 9V15C13.017 17.7614 10.7784 20 8.01698 20H5.01698V21Z" />
                            </svg>

                            <blockquote className="text-xl font-serif text-gray-700 italic leading-relaxed mb-8">
                                "{testimonial.content}"
                            </blockquote>

                            <div>
                                <cite className="not-italic text-[#1a1a1a] font-bold tracking-[0.2em] uppercase text-sm block mb-1">
                                    {testimonial.name}
                                </cite>
                                <span className="text-[10px] text-[#d4af37] tracking-widest uppercase font-medium">
                                    {testimonial.role}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
