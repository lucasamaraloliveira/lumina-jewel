
export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  longDescription?: string;
  story?: string;
  details?: string[];
  image: string;
  category: 'Anéis' | 'Colares' | 'Brincos' | 'Pulseiras';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}
