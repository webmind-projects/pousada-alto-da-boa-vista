import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
        style={{
          backgroundImage: "url('https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/img_1185-scaled.webp')", // Winter/Mountain vibe
        }}
      >
        {/* Base dark overlay for consistency */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Gradient: Black (Top) to Green (Bottom) for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-pousada-green/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <span className="text-pousada-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 animate-[fadeInDown_1s_ease-out]">
          Campos do Jordão • SP
        </span>
        {/* CHANGED: text-5xl -> text-3xl sm:text-4xl to prevent wrapping on mobile */}
        <h1 className="text-white font-serif text-3xl sm:text-4xl md:text-7xl lg:text-8xl mb-6 leading-tight drop-shadow-lg animate-[fadeInUp_1s_ease-out_0.3s_both] uppercase tracking-wide">
          UM REFÚGIO <br />
          DE <span className="italic text-pousada-gold">ROMANCE</span> & <br />
          <span className="italic text-pousada-gold">ELEGÂNCIA RÚSTICA</span>
        </h1>
        <p className="text-white/90 font-sans max-w-2xl text-lg md:text-xl mb-10 font-light animate-[fadeInUp_1s_ease-out_0.6s_both]">
          Desconecte-se do mundo e reconecte-se com a natureza em chalés exclusivos de alto padrão com vista para as montanhas.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 animate-[fadeInUp_1s_ease-out_0.9s_both]">
            <button className="px-8 py-4 bg-pousada-gold text-pousada-green font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl rounded-full">
            Ver Disponibilidade
            </button>
            <button className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-pousada-green transition-all duration-300 rounded-full">
            Conhecer Chalés
            </button>
        </div>
      </div>

      {/* Scroll Indicator - Use flexbox for perfect centering */}
      <div className="absolute bottom-8 w-full flex justify-center z-20 animate-bounce">
        <ChevronDown size={36} className="text-white opacity-80" />
      </div>
    </section>
  );
};

export default Hero;