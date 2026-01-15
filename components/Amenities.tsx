import React from 'react';
import { AMENITIES } from '../constants';
import { ThermometerSun, Coffee, Wine, Trees } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ThermometerSun: <ThermometerSun size={40} />,
  Coffee: <Coffee size={40} />,
  Wine: <Wine size={40} />,
  Trees: <Trees size={40} />,
};

const Amenities: React.FC = () => {
  return (
    <section id="experiencias" className="py-24 bg-pousada-sand relative">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-pousada-green font-bold tracking-widest uppercase text-sm block mb-2">Diferenciais</span>
                {/* CHANGED: uppercase -> capitalize */}
                <h2 className="text-4xl md:text-5xl font-serif text-pousada-green capitalize tracking-wide">Tudo que você precisa para relaxar</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {AMENITIES.map((amenity, index) => (
                    <div 
                        key={amenity.id} 
                        className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-pousada-gold"
                    >
                        <div className="text-pousada-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                            {iconMap[amenity.iconName]}
                        </div>
                        <h3 className="font-serif text-xl font-bold text-pousada-green mb-3">{amenity.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{amenity.description}</p>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 bg-pousada-green rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-white">
                        <h3 className="font-serif text-3xl mb-2">Café da Manhã Colonial</h3>
                        <p className="text-pousada-gold">Incluso em todas as diárias. Das 08h às 11h30.</p>
                    </div>
                    <button className="px-8 py-3 bg-pousada-gold text-pousada-green font-bold uppercase rounded-full hover:bg-white transition-colors">
                        Ver Cardápio
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Amenities;