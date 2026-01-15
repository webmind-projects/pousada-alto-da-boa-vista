import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// ==================================================================================
// ÁREA DE EDIÇÃO: FOTOS DA GALERIA (FAIXA HORIZONTAL)
// ==================================================================================
// Substitua os links abaixo pelas URLs das suas fotos reais.
// Recomendação: Use fotos com proporções similares para melhor alinhamento.
// ==================================================================================
const GALLERY_IMAGES = [
  // FOTOS ORIGINAIS (Exemplos já presentes)
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/img_3023-2-scaled.webp",
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/img_6602.webp",
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/dsc09064-scaled.webp",
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/dsc01450-hdr.webp",
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/cafe-da-manha-24-scaled.webp",
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/altos-da-boa-vista-4-copia-scaled.webp",
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/salao-de-leitura-2-scaled.webp",
  
  // FOTOS DE BANCO DE IMAGENS (Exemplos para preencher 15 espaços - SUBSTITUA AQUI)
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/dsc09854-scaled.webp", // Cabana Floresta
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/drone-altos-da-boa-vista-15-scaled.webp", // Interior Luxo
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/altos-da-boa-vista-19-scaled.webp", // Vista Montanha
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/20220130_200743947_ios-scaled.webp", // Detalhe Madeira
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/whatsapp-image-2024-08-23-at-14-14-02-scaled.webp", // Piscina Resort
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/img_0367-scaled.webp", // Quarto Confortável
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/img_1185-scaled.webp", // Lareira/Aconchego
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/img_0320-scaled.webp", // Detalhe Café/Cama
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/20240619_233441730_ios-scaled.webp",
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/cai_9736-scaled.webp",
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/cai_9759-scaled.webp",
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/img_0262-scaled.webp",
  "https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/dji_0164-scaled.webp",
];

const GallerySection: React.FC = () => {
  return (
    // "Nuclear Option": Fixed height (h-24/h-32) on the section itself prevents expansion.
    <section className="bg-pousada-green border-y-4 border-pousada-gold relative z-20 shadow-2xl h-24 md:h-32 overflow-hidden">
      <div className="w-full h-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0} // Seamless film strip effect
          slidesPerView={2.5}
          loop={true}
          speed={12000} // Smooth continuous linear flow
          allowTouchMove={false} // Purely decorative
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
          }}
          breakpoints={{
            640: { slidesPerView: 3.5 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 8 },
          }}
          className="w-full h-full linear-swiper"
        >
          {GALLERY_IMAGES.map((img, index) => (
            <SwiperSlide key={index} className="!h-full">
              {/* Force image to take 100% height of the strip */}
              <div className="w-full h-full relative group border-r border-pousada-gold/40">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={img} 
                  alt={`Galeria Pousada ${index + 1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <style>{`
          .linear-swiper .swiper-wrapper {
            transition-timing-function: linear;
          }
        `}</style>
      </div>
    </section>
  );
};

export default GallerySection;