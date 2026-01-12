
import { Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Anel Aurora Boreal',
    price: 'R$ 12.500',
    description: 'Diamantes raros com cravação em ouro branco 18k.',
    longDescription: 'Uma peça que captura a efemeridade das luzes do norte em uma estrutura eterna de platina e diamantes de pureza excepcional.',
    story: 'Inspirado por uma expedição à Lapônia, nossos mestres joalheiros buscaram replicar o movimento fluido das luzes celestiais. O diamante central de 2 quilates foi lapidado para refletir tons azulados sob luz intensa, simbolizando a aurora que dança nos céus de inverno.',
    details: [
      'Diamante central de 2ct (GIA Certified)',
      'Ouro Branco 18k com acabamento em Ródio',
      '48 diamantes laterais de lapidação brilhante',
      'Cravação manual em micro-pavé'
    ],
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600',
    category: 'Anéis'
  },
  {
    id: '2',
    name: 'Colar Gota de Orvalho',
    price: 'R$ 8.900',
    description: 'Pérola negra exclusiva e corrente de platina.',
    longDescription: 'A raridade da pérola negra do Tahiti em um design minimalista que exalta a beleza natural da gema orgânica.',
    story: 'Cada pérola deste colar é selecionada após meses de busca por uma esfera perfeita e brilho metálico. Ela representa o momento exato em que a primeira gota de orvalho toca uma pétala de flor ao amanhecer, pura e intocada.',
    details: [
      'Pérola Negra do Tahiti de 12mm',
      'Corrente de Platina 950',
      'Fecho invisível de segurança',
      'Certificado de autenticidade orgânica'
    ],
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600',
    category: 'Colares'
  },
  {
    id: '3',
    name: 'Brincos Estelares',
    price: 'R$ 5.200',
    description: 'Zircônias selecionadas com acabamento em ouro rosê.',
    longDescription: 'O brilho das constelações traduzido em duas joias que iluminam o rosto com sutileza e elegância contemporânea.',
    story: 'Desenhados para serem usados em ocasiões onde a simplicidade é o ápice do luxo. O design orgânico em ouro rosê simula a órbita de estrelas distantes, trazendo um toque de infinito para o seu cotidiano.',
    details: [
      'Ouro Rosê 18k (Solid)',
      'Zircônias Premium de Alto Brilho',
      'Design anatômico ultraleve',
      'Tarraxas de segurança lumina'
    ],
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600',
    category: 'Brincos'
  },
  {
    id: '4',
    name: 'Pulseira Eternidade',
    price: 'R$ 15.000',
    description: 'Design entrelaçado em ouro 24k maciço.',
    longDescription: 'Um bracelete imponente que simboliza ciclos sem fim através de uma trama intrincada de ouro puro.',
    story: 'Esta peça foi forjada utilizando técnicas ancestrais de ourivesaria romana, onde o metal é batido e entrelaçado sem soldas visíveis. Uma escultura para o pulso que atravessa gerações sem perder sua majestade.',
    details: [
      'Ouro 24k (Puro)',
      'Peso aproximado de 18g',
      'Trama manual exclusiva',
      'Interior polido para máximo conforto'
    ],
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600',
    category: 'Pulseiras'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Helena Montenegro',
    role: 'Colecionadora de Arte',
    content: 'As peças da Lumina não são apenas joias, são fragmentos de luz. O atendimento personalizado é impecável.',
    image: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: 2,
    name: 'Ricardo Silveira',
    role: 'Empresário',
    content: 'Encontrei o presente perfeito para o aniversário de 20 anos de casamento. A elegância é incomparável.',
    image: 'https://picsum.photos/id/65/100/100'
  }
];
