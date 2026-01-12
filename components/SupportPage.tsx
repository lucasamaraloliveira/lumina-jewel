
import React from 'react';

interface SupportPageProps {
    title: string;
    content: React.ReactNode;
    onClose: () => void;
}

const SupportPage: React.FC<SupportPageProps> = ({ title, content, onClose }) => {
    return (
        <div className="fixed inset-0 z-[110] bg-white overflow-y-auto">
            <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
                <div className="container mx-auto px-6 py-6 flex justify-between items-center">
                    <span className="text-2xl font-serif tracking-widest text-[#d4af37] uppercase">Lumina</span>
                    <button
                        onClick={onClose}
                        className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-[#d4af37] pb-1 hover:tracking-[0.4em] transition-all"
                    >
                        Voltar ao Atelier
                    </button>
                </div>
            </nav>

            <main className="container mx-auto px-6 py-20 max-w-4xl">
                <span className="text-[#d4af37] text-xs tracking-[0.5em] uppercase mb-6 block text-center">Informativo Lumina</span>
                <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] mb-16 text-center leading-tight">{title}</h1>

                <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-8">
                    {content}
                </div>

                <div className="mt-24 pt-12 border-t border-gray-100 text-center">
                    <p className="text-gray-400 text-sm italic font-serif">"Elegância não é ser notado, mas ser lembrado."</p>
                </div>
            </main>
        </div>
    );
};

export const VIPService: React.FC = () => (
    <div className="space-y-8">
        <p>O Atendimento VIP da Lumina Jewels foi concebido para quem busca mais do que uma joia, mas uma experiência sensorial completa. Nossos consultores dedicados estão à disposição para transformar seus desejos em realidade material.</p>
        <h2 className="text-2xl font-serif text-[#1a1a1a] mt-12">O que oferecemos:</h2>
        <ul className="space-y-4 list-none pl-0">
            <li className="flex gap-4"><span className="text-[#d4af37]">01.</span> Horários exclusivos em nossos ateliers privados com total discrição.</li>
            <li className="flex gap-4"><span className="text-[#d4af37]">02.</span> Curadoria personalizada de gemas raras antes mesmo de chegarem às coleções públicas.</li>
            <li className="flex gap-4"><span className="text-[#d4af37]">03.</span> Acompanhamento de designers para criações Bespoke sob medida.</li>
            <li className="flex gap-4"><span className="text-[#d4af37]">04.</span> Concierge para entregas em ocasiões especiais, com apresentação memorável.</li>
        </ul>
        <p className="pt-8">Entre em contato para agendar sua consulta privada ou solicitar a visita de um de nossos especialistas em sua residência ou escritório.</p>
    </div>
);

export const ShippingInfo: React.FC = () => (
    <div className="space-y-8">
        <p>Entendemos que a jornada de uma joia até você deve ser tão impecável quanto a peça em si. Por isso, implementamos o protocolo de Seguro e Envio Lumina Royale.</p>
        <div className="grid md:grid-cols-2 gap-12 py-8">
            <div className="space-y-4">
                <h3 className="text-xl font-serif text-[#1a1a1a]">Embalagem Blindada</h3>
                <p className="text-sm">Cada joia é enviada em uma caixa de segurança externa discreta, protegendo o estojo de luxo interno e mantendo a confidencialidade do conteúdo.</p>
            </div>
            <div className="space-y-4">
                <h3 className="text-xl font-serif text-[#1a1a1a]">Seguro Total</h3>
                <p className="text-sm">Trabalhamos com seguradoras internacionais líderes para garantir cobertura de 100% do valor da peça contra qualquer imprevisto durante o trânsito.</p>
            </div>
        </div>
        <p>Utilizamos exclusivamente serviços prioritários como FedEx Prestige e DHL Luxury Service, com rastreamento em tempo real e exigência de assinatura pessoal no recebimento.</p>
    </div>
);

export const SizingGuide: React.FC = () => (
    <div className="space-y-8 text-center md:text-left">
        <p>A precisão é fundamental na alta joalheria. Uma peça que se ajusta perfeitamente torna-se parte de quem a usa.</p>
        <div className="bg-[#faf9f6] p-12 rounded-sm border border-gray-100">
            <h3 className="text-2xl font-serif mb-8 text-center uppercase tracking-widest">Tabela de Medidas</h3>
            <div className="grid grid-cols-3 gap-8 text-center">
                <div><p className="text-[10px] text-gray-400 uppercase">Tam. Brasil</p><p className="text-xl">12 - 14</p></div>
                <div><p className="text-[10px] text-gray-400 uppercase">Circunferência</p><p className="text-xl">52 - 54mm</p></div>
                <div><p className="text-[10px] text-gray-400 uppercase">Tam. US</p><p className="text-xl">6 - 6.5</p></div>
            </div>
        </div>
        <p className="text-sm italic">Dica Lumina: Recomendamos medir o dedo ao final do dia, quando estão mais propensos a estarem em seu tamanho natural. Em caso de dúvida, nosso Atelier enviará um medidor físico gratuito para sua residência.</p>
    </div>
);

export const WarrantyPolicy: React.FC = () => (
    <div className="space-y-8">
        <p>Uma joia Lumina é um legado passível de ser transmitido por gerações. Nossa garantia reflete esse compromisso com a longevidade.</p>
        <h3 className="text-2xl font-serif text-[#1a1a1a]">O Selo de Eternidade Lumina:</h3>
        <ul className="space-y-6">
            <li className="border-l-2 border-[#d4af37] pl-6 text-sm">
                <strong>Vitalícia de Materiais:</strong> Garantimos a autenticidade e o teor de todos os metais e a origem ética das gemas para sempre.
            </li>
            <li className="border-l-2 border-[#d4af37] pl-6 text-sm">
                <strong>Manutenção Anual:</strong> Inclui polimento, limpeza ultrassônica e verificação de garras sem custo adicional uma vez por ano.
            </li>
            <li className="border-l-2 border-[#d4af37] pl-6 text-sm">
                <strong>Assistência Técnica:</strong> Em caso de danos acidentais, oferecemos reparos com custo de materiais, executados pelos nossos mestres originais.
            </li>
        </ul>
    </div>
);

export default SupportPage;
