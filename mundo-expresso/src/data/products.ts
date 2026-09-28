export type Product = {
  id: number
  name: string
  category: string
  emoji: string
  price: number
  oldPrice: number
  rating: number
  reviews: number
  tag?: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Fone Bluetooth Pro ANC com Estojo de Carga',
    category: 'Eletrônicos',
    emoji: '🎧',
    price: 199.9,
    oldPrice: 399.9,
    rating: 4.8,
    reviews: 1243,
    tag: 'Mais vendido',
  },
  {
    id: 2,
    name: 'Smartwatch Fit 7 Tela AMOLED à Prova d’Água',
    category: 'Eletrônicos',
    emoji: '⌚',
    price: 249.9,
    oldPrice: 449.9,
    rating: 4.6,
    reviews: 872,
  },
  {
    id: 3,
    name: 'Air Fryer Digital 5,5L Antiaderente 1500W',
    category: 'Casa & Cozinha',
    emoji: '🍟',
    price: 329.9,
    oldPrice: 549.9,
    rating: 4.9,
    reviews: 2310,
    tag: 'Frete grátis',
  },
  {
    id: 4,
    name: 'Kit Skincare Vitamina C + Ácido Hialurônico',
    category: 'Beleza',
    emoji: '🧴',
    price: 89.9,
    oldPrice: 169.9,
    rating: 4.7,
    reviews: 654,
  },
  {
    id: 5,
    name: 'Caixa de Som Portátil 40W à Prova d’Água',
    category: 'Eletrônicos',
    emoji: '🔊',
    price: 159.9,
    oldPrice: 279.9,
    rating: 4.5,
    reviews: 431,
  },
  {
    id: 6,
    name: 'Robô Aspirador Inteligente com Mapeamento',
    category: 'Casa & Cozinha',
    emoji: '🤖',
    price: 899.9,
    oldPrice: 1599.9,
    rating: 4.8,
    reviews: 318,
    tag: 'Importado',
  },
  {
    id: 7,
    name: 'Drone Câmera 4K com GPS e Estabilizador',
    category: 'Brinquedos',
    emoji: '🚁',
    price: 749.9,
    oldPrice: 1249.9,
    rating: 4.4,
    reviews: 205,
  },
  {
    id: 8,
    name: 'Tênis Esportivo Ultraleve Corrida Unissex',
    category: 'Moda',
    emoji: '👟',
    price: 179.9,
    oldPrice: 299.9,
    rating: 4.6,
    reviews: 1102,
  },
]

export const formatBRL = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export const discountPercent = (price: number, oldPrice: number) =>
  Math.round((1 - price / oldPrice) * 100)
