import React from 'react';
import { MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-pousada-sand relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
               <span className="h-[1px] w-12 bg-pousada-gold"></span>
               <span className="text-pousada-green font-bold uppercase tracking-widest text-sm">Sobre Nós</span>
            </div>
            
            {/* CHANGED: uppercase -> capitalize, "BOA VISTA" -> "Boa Vista" */}
            <h2 className="text-4xl md:text-5xl font-serif text-pousada-green mb-8 leading-tight capitalize tracking-wide">
              Pousada Alto da <br/>
              <span className="text-pousada-gold italic">Boa Vista</span>
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed font-light text-lg">
              Localizada em uma área preservada da Serra da Mantiqueira, nossa pousada é o encontro perfeito entre a arquitetura alpina e o conforto contemporâneo. Cercada por um bosque nativo, cada detalhe foi pensado para proporcionar uma experiência de paz e exclusividade.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">
              Com uma pegada hípica rústica, oferecemos não apenas uma estadia, mas uma imersão na cultura da montanha, com lareiras crepitantes, gastronomia artesanal e o silêncio que você precisa para recarregar as energias.
            </p>

            <div className="bg-pousada-green/5 p-6 rounded-lg border-l-4 border-pousada-gold mb-8">
               <div className="flex items-start gap-3">
                 <MapPin className="text-pousada-gold mt-1 shrink-0" />
                 <div>
                    <h4 className="font-serif text-pousada-green font-bold text-lg mb-1">Localização Privilegiada</h4>
                    <p className="text-sm text-gray-600">Apenas 5 min da Vila Capivari, mas longe o suficiente para ouvir apenas os pássaros.</p>
                 </div>
               </div>
            </div>

            <button className="text-pousada-green font-bold border-b-2 border-pousada-gold pb-1 hover:text-pousada-gold transition-colors">
              Conheça Nossa História &rarr;
            </button>
          </div>

          {/* Image Grid */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative w-full">
            <div className="relative w-full h-[400px] lg:h-[600px]">
               {/* Main Image - Exterior/View */}
               <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-tr-[3rem] rounded-bl-[3rem] lg:rounded-tr-[4rem] lg:rounded-bl-[4rem] overflow-hidden shadow-2xl z-10">
                 <img 
                    src="https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/img_0262-scaled.webp" 
                    alt="Área Externa Pousada" 
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                 />
               </div>
               
               {/* Secondary Image - Interior/Pool - Floating */}
               <div className="absolute bottom-0 left-0 w-3/5 h-3/5 border-4 lg:border-8 border-pousada-sand rounded-tl-[2rem] rounded-br-[2rem] lg:rounded-tl-[3rem] lg:rounded-br-[3rem] overflow-hidden shadow-2xl z-20">
                 <img 
                    src="https://pousadaaltodaboavista.com.br/wp-content/uploads/2025/07/dji_0138-scaled.webp" 
                    alt="Piscina Interna e Lareira" 
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                 />
               </div>

               {/* Decorative Element */}
               <div className="absolute top-6 left-6 lg:top-10 lg:left-10 w-16 h-16 lg:w-24 lg:h-24 border-2 border-pousada-gold opacity-50 z-0"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;