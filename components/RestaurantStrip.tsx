import React from 'react';

const RestaurantStrip: React.FC = () => {
  return (
    <section className="relative py-20 bg-black overflow-hidden group border-t border-pousada-gold/30">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/img_1085-scaled.webp"
          alt="Massa com Trufas - Restaurante Pontremoli"
          loading="lazy"
          className="w-full h-full object-cover opacity-50 transition-transform duration-[20s] ease-linear group-hover:scale-110"
        />
        {/* Dark Gradient Overlay for readability matching the reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        {/* Title in Pousada Gold */}
        {/* CHANGED: added capitalize */}
        <h2 className="text-3xl md:text-4xl font-serif text-pousada-gold mb-6 drop-shadow-lg tracking-wide capitalize">
          Conheça o Restaurante Pontremoli
        </h2>

        {/* Main Text - Changed to font-sans (standard) and removed font-serif */}
        <p className="text-gray-100 text-sm md:text-lg leading-relaxed mb-6 font-sans font-light drop-shadow-md">
          O 6º Restaurante mais romântico do mundo fica dentro da Pousada Alto da Boa Vista. 
          Eleito pelo <span className="italic font-serif">Best of the best</span> do Tripadvisor no ano de 2023, nosso restaurante 
          foi classificado como 4º melhor do Brasil e 6º da América do Sul na categoria alta gastronomia e 
          6º melhor do Mundo na categoria jantar a dois.
        </p>

        {/* Highlighted Benefit */}
        <p className="text-white text-lg md:text-xl font-serif mb-10">
          Nossos hóspedes ganham uma <span className="text-pousada-gold font-bold italic">taxa rolha de cortesia.</span>
        </p>

        {/* CTA Button - Changed to rounded-full */}
        <a
          href="https://restaurantepontremoli.com.br/"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-pousada-gold text-pousada-green font-bold py-4 px-10 rounded-full shadow-lg hover:bg-white hover:text-pousada-green transition-all duration-300 uppercase tracking-widest text-xs md:text-sm transform hover:-translate-y-1"
        >
          Visite o Site do Restaurante
        </a>
      </div>
    </section>
  );
};

export default RestaurantStrip;