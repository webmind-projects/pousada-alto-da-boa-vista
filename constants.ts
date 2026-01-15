import { Chalet, Amenity, Review } from './types';

export const CHALETS: Chalet[] = [
  {
    id: 1,
    name: "Chalé Duplex com Ofurô",
    description: "Charme e relaxamento em dois andares. Acomodação espaçosa de 50m² com ofurô privativo para momentos inesquecíveis.",
    capacity: "Até 3 Pessoas",
    image: "https://media.omnibees.com/Images/20415/RoomTypes/522x348/1392249.jpg",
    features: [
      "Até 3 Pessoas",
      "Área: 50 m2",
      "Ofurô Privativo",
      "Vista Variada",
      "Café da Manhã",
      "Wi-Fi Grátis",
      "Estacionamento",
      "Permite Cancelamento"
    ],
    originalPrice: "R$ 1.848,00",
    price: "R$ 1.478,40 /noite"
  },
  {
    id: 2,
    name: "Chalé Duplex com Piscina e lareira",
    description: "O cenário perfeito para o romance. Desfrute de uma piscina interna relaxante e o aconchego da lareira com vista variada de 2 varandas.",
    capacity: "Até 4 Pessoas",
    image: "https://media.omnibees.com/Images/20415/RoomTypes/522x348/1392243.jpg",
    features: [
      "Até 4 Pessoas",
      "Área: 61 m2",
      "Piscina Interna",
      "Lareira",
      "Vista Variada",
      "Café da Manhã",
      "Wi-Fi Grátis",
      "Estacionamento"
    ],
    originalPrice: "R$ 1.848,00",
    price: "R$ 1.478,40 /noite"
  },
  {
    id: 3,
    name: "Quarto Duplo Luxo com Sauna",
    description: "Exclusividade e bem-estar. Uma suíte sofisticada de 39m² equipada com sua própria sauna privativa.",
    capacity: "2 Pessoas",
    image: "https://media.omnibees.com/Images/20415/RoomTypes/522x348/1470620.jpg",
    features: [
      "2 Pessoas",
      "Área: 39 m2",
      "Sauna Privativa",
      "Decoração Alpina",
      "Vista Variada",
      "Café da Manhã",
      "Wi-Fi Grátis",
      "Estacionamento"
    ],
    originalPrice: "R$ 2.310,00",
    price: "R$ 1.848,00 /noite"
  },
  {
    id: 4,
    name: "Chalé Família Exclusivo com Cozinha",
    description: "Espaço e autonomia para toda a família. Amplo chalé de 82m² com sala de estar e cozinha completa.",
    capacity: "Até 4 Pessoas",
    image: "https://media.omnibees.com/Images/20415/RoomTypes/522x348/1391994.jpg",
    features: [
      "Até 4 Pessoas",
      "Área: 82 m2",
      "Cozinha Completa",
      "Sala de Estar",
      "Vista Variada",
      "Café da Manhã",
      "Wi-Fi Grátis",
      "Estacionamento"
    ],
    originalPrice: "R$ 1.848,00",
    price: "R$ 1.478,40 /noite"
  },
  {
    id: 5,
    name: "Duplex com Lareira",
    description: "Aconchego na medida certa. Ambiente romântico e compacto com lareira e uma vista deslumbrante para a montanha.",
    capacity: "2 Pessoas",
    image: "https://media.omnibees.com/Images/20415/RoomTypes/522x348/1392286.jpg",
    features: [
      "2 Pessoas",
      "Área: 30 m2",
      "Lareira",
      "Vista da Montanha",
      "Café da Manhã",
      "Wi-Fi Grátis",
      "Estacionamento",
      "Melhor Preço"
    ],
    originalPrice: "R$ 1.164,00",
    price: "R$ 931,20 /noite"
  },
  {
    id: 6,
    name: "Chalé Duplex com Varanda",
    description: "Conexão com a natureza. Um chalé espaçoso de 83m² com varanda privativa para apreciar o clima da serra.",
    capacity: "Até 4 Pessoas",
    image: "https://media.omnibees.com/Images/20415/RoomTypes/522x348/1392219.jpg",
    features: [
      "Até 4 Pessoas",
      "Área: 83 m2",
      "Varanda",
      "Vista Variada",
      "Sala de Estar",
      "Café da Manhã",
      "Wi-Fi Grátis",
      "Estacionamento"
    ],
    originalPrice: "R$ 1.848,00",
    price: "R$ 1.478,40 /noite"
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: 1,
    title: "Sauna Finlandesa",
    description: "Relaxe profundamente em nossa sauna úmida com essências naturais.",
    iconName: "ThermometerSun"
  },
  {
    id: 2,
    title: "Gastronomia",
    description: "Do café à janta, desfrute das melhores experiências gastronômicas.",
    iconName: "Coffee"
  },
  {
    id: 3,
    title: "Lareira & Vinho",
    description: "Carta de vinhos selecionada para noites frias ao pé da lareira.",
    iconName: "Wine"
  },
  {
    id: 4,
    title: "Trilhas & Natureza",
    description: "Acesso exclusivo a trilhas e atividades que só Campos oferece.",
    iconName: "Trees"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Ana Carla",
    location: "hace 2 meses no Google",
    text: "Pousada maravilhosa! Café da manhã incrível, quartos super limpos e aconchegantes. O atendimento de todos os funcionários é excelente. O restaurante Pontremoli que fica dentro da pousada é imperdível.",
    rating: 5
  },
  {
    id: 2,
    name: "Felipe Santos",
    location: "hace 3 semanas no Google",
    text: "Lugar de paz e tranquilidade. Chalés muito bem equipados e privativos. O ofurô é sensacional e a vista das montanhas completa a experiência. Voltaremos com certeza!",
    rating: 5
  },
  {
    id: 3,
    name: "Juliana Costa",
    location: "hace 1 mês no Google",
    text: "Simplesmente perfeito. Desde a recepção até o checkout. O café da manhã servido até as 11h é um diferencial enorme para quem quer descansar. A estrutura é impecável.",
    rating: 5
  },
  {
    id: 4,
    name: "Marcos Vinicius",
    location: "hace 4 meses no Google",
    text: "A vista é de tirar o fôlego. Ficamos no chalé com lareira e foi mágico. Recomendo muito para casais que buscam um momento romântico em Campos.",
    rating: 5
  },
  {
    id: 5,
    name: "Beatriz Oliveira",
    location: "hace 1 semana no Google",
    text: "Melhor estadia que já tive em Campos do Jordão. O staff é muito atencioso e a localização é ótima: perto do centro mas com silêncio absoluto.",
    rating: 5
  }
];