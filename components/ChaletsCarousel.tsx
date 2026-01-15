import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CHALETS } from '../constants';
import { 
  Wifi, 
  Flame, 
  Users, 
  BedDouble, 
  Tv, 
  Bath, 
  Snowflake, 
  Utensils, 
  Wind,
  House,
  Mountain,
  CheckCircle,
  Armchair,
  ArrowLeft,
  ArrowRight,
  Maximize,
  Tag
} from 'lucide-react';

// Helper to get icon based on feature text
const getIconForFeature = (text: string) => {
  const lower = text.toLowerCase();
  if (lower.includes('pessoa')) return <Users size={18} />;
  if (lower.includes('m2') || lower.includes('área')) return <Maximize size={18} />;
  if (lower.includes('cama') || lower.includes('king') || lower.includes('queen')) return <BedDouble size={18} />;
  if (lower.includes('lareira')) return <Flame size={18} />;
  if (lower.includes('wi-fi') || lower.includes('internet')) return <Wifi size={18} />;
  if (lower.includes('tv')) return <Tv size={18} />;
  if (lower.includes('hidro') || lower.includes('banheira') || lower.includes('ofurô') || lower.includes('sauna')) return <Bath size={18} />;
  if (lower.includes('frigobar') || lower.includes('cozinha') || lower.includes('adega')) return <Utensils size={18} />;
  if (lower.includes('aquecedor') || lower.includes('climatizada')) return <Snowflake size={18} />;
  if (lower.includes('secador') || lower.includes('amenities')) return <Wind size={18} />;
  if (lower.includes('vista') || lower.includes('deck') || lower.includes('varanda')) return <Mountain size={18} />;
  if (lower.includes('poltrona') || lower.includes('roupões') || lower.includes('estar')) return <Armchair size={18} />;
  return <CheckCircle size={18} />;
};

const ChaletsCarousel: React.FC = () => {
  return (
    <section id="acomodacoes" className="pt-20 pb-0 bg-pousada-sand relative overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center relative z-10">
            <span className="text-pousada-green font-bold tracking-widest uppercase text-sm block mb-2">Exclusividade & Conforto</span>
            {/* CHANGED: uppercase -> capitalize */}
            <h2 className="text-4xl md:text-5xl font-serif text-pousada-green mb-6 capitalize tracking-wide">Nossos Chalés Premium</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light">
                Escolha o cenário perfeito para sua história. Acomodações desenhadas para oferecer privacidade e requinte.
            </p>
        </div>

        <div className="w-full relative py-4">
            {/* Custom Navigation Buttons - Hidden on Mobile */}
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-4 md:left-10 z-30 pointer-events-none">
                <button className="swiper-button-prev-custom bg-pousada-green/80 text-white p-3 rounded-full hover:bg-pousada-gold transition-colors pointer-events-auto shadow-lg backdrop-blur-sm">
                    <ArrowLeft size={24} />
                </button>
            </div>
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-4 md:right-10 z-30 pointer-events-none">
                <button className="swiper-button-next-custom bg-pousada-green/80 text-white p-3 rounded-full hover:bg-pousada-gold transition-colors pointer-events-auto shadow-lg backdrop-blur-sm">
                    <ArrowRight size={24} />
                </button>
            </div>

            {/* 
               STYLE INJECTION
               1. Pull pagination UP to be closer to the card bottom.
               2. Ensure container padding is large enough for shadow.
            */}
            <style>{`
                .chalet-swiper {
                    padding-bottom: 70px !important; /* Huge padding for shadow */
                    overflow: visible !important; /* Allow shadow to bleed inside the section */
                }
                .chalet-swiper .swiper-pagination {
                    bottom: 30px !important; /* Pull dots up */
                }
                /* Mobile specific tweaks if needed */
                @media (max-width: 640px) {
                    .chalet-swiper {
                        padding-bottom: 60px !important;
                    }
                    .chalet-swiper .swiper-pagination {
                        bottom: 25px !important;
                    }
                }
            `}</style>

            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                autoHeight={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1.15,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 1.8,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 2.2,
                        spaceBetween: 40,
                    },
                }}
                className="mySwiper focused-swiper chalet-swiper !px-0"
            >
                {CHALETS.map((chalet) => (
                    <SwiperSlide key={chalet.id} className="group cursor-grab active:cursor-grabbing !bg-transparent !h-auto !shadow-none">
                        <div className="flex flex-col bg-[#102F25] rounded-[2rem] overflow-hidden relative isolate shadow-2xl h-auto">
                            
                            {/* THE DARK OVERLAY for inactive slides */}
                            <div className="slide-overlay absolute inset-0 bg-[#102F25] z-50 rounded-[2rem]"></div>

                            {/* Image Section - Reduced height on mobile */}
                            <div className="h-[220px] md:h-[320px] relative overflow-hidden">
                                <img 
                                    src={chalet.image} 
                                    alt={chalet.name} 
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                                {/* Gradient Overlays */}
                                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#102F25]/50 to-transparent pointer-events-none"></div>
                                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#102F25]/50 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Info Section */}
                            <div className="p-5 md:p-8 flex flex-col">
                                {/* Header & Pricing */}
                                <div className="mb-3 md:mb-6 border-b border-white/10 pb-3 md:pb-4">
                                    <div className="flex items-start justify-between gap-4 mb-3 md:mb-4">
                                        <div className="flex items-center gap-2 md:gap-3">
                                            <House className="text-white shrink-0" strokeWidth={1.5} size={24} />
                                            <h3 className="text-xl md:text-3xl font-serif text-white font-bold tracking-wide leading-none">
                                                {chalet.name}
                                            </h3>
                                        </div>
                                    </div>
                                    
                                    {/* Pricing Block with Discount */}
                                    <div className="flex flex-col items-start space-y-1">
                                        {chalet.originalPrice && (
                                            <div className="flex items-center gap-2">
                                                <span className="bg-[#16a34a] text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider shadow-sm flex items-center gap-1">
                                                    <Tag size={10} className="fill-current" /> -20% | Melhor Preço
                                                </span>
                                            </div>
                                        )}
                                        <div className="flex flex-wrap items-baseline gap-x-2">
                                            {chalet.originalPrice && (
                                                <span className="text-white/40 text-sm line-through decoration-white/40 font-light">
                                                    {chalet.originalPrice}
                                                </span>
                                            )}
                                            <p className="text-pousada-gold text-xl md:text-2xl font-bold">
                                                {chalet.price || "R$ Consultar"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Brief Description - Reduced margin */}
                                <p className="text-gray-300 text-xs md:text-sm mb-4 md:mb-6 line-clamp-2">
                                    {chalet.description}
                                </p>

                                {/* Features Grid - Reduced margin-bottom (mb-3) to close gap to buttons */}
                                <div className="grid grid-cols-2 gap-y-2 md:gap-y-3 gap-x-4 mb-3 md:mb-8">
                                    {chalet.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-white/90 text-xs md:text-sm">
                                            <span className="text-pousada-gold shrink-0">
                                                {getIconForFeature(feature)}
                                            </span>
                                            <span className="truncate" title={feature}>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Buttons - Changed mt-auto to mt-2 to pull buttons up */}
                                <div className="mt-2 md:mt-auto flex flex-col md:flex-row gap-3">
                                    <button className="flex-1 px-4 py-2.5 md:px-6 md:py-3 bg-pousada-gold text-pousada-green font-bold uppercase text-xs md:text-sm tracking-widest hover:bg-white hover:scale-[1.02] transition-all rounded-full shadow-lg">
                                        Reservar Agora
                                    </button>
                                    <button className="flex-1 px-4 py-2.5 md:px-6 md:py-3 border border-white/30 text-white font-bold uppercase text-xs md:text-sm tracking-widest hover:bg-white hover:text-pousada-green transition-all rounded-full">
                                        Ver Detalhes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  );
};

export default ChaletsCarousel;