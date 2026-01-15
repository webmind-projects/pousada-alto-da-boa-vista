import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-pousada-green text-white pt-20 pb-10 border-t border-pousada-gold/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
                {/* Logo Image */}
                <img 
                  src="https://i.imgur.com/LGf0u8v.png" 
                  alt="Pousada Alto da Boa Vista" 
                  loading="lazy"
                  className="h-16 md:h-20 mb-6 object-contain"
                />
                
                {/* Updated Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Sua experiência de luxo nas montanhas. Conforto, privacidade e alta gastronomia em harmonia com a natureza da Serra da Mantiqueira.
                </p>
                
                <div className="flex gap-4">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-pousada-gold hover:border-pousada-gold hover:text-pousada-green transition-all">
                        <Instagram size={18} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-pousada-gold hover:border-pousada-gold hover:text-pousada-green transition-all">
                        <Facebook size={18} />
                    </a>
                    {/* Added WhatsApp Icon */}
                    <a href="https://wa.me/551236630000" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-pousada-gold hover:border-pousada-gold hover:text-pousada-green transition-all">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Links */}
            <div>
                <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-pousada-gold">Navegação</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                    <li><a href="#sobre" className="hover:text-white transition-colors">A Pousada</a></li>
                    <li><a href="#acomodacoes" className="hover:text-white transition-colors">Chalés</a></li>
                    <li><a href="#experiencias" className="hover:text-white transition-colors">Gastronomia</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Política de Cancelamento</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-pousada-gold">Contato</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li className="flex items-start gap-3">
                        <MapPin className="shrink-0 text-pousada-gold" size={18} />
                        <span>Rua das Araucárias, 1200<br/>Alto Capivari - Campos do Jordão, SP</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Phone className="shrink-0 text-pousada-gold" size={18} />
                        <span>(12) 3663-0000</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Mail className="shrink-0 text-pousada-gold" size={18} />
                        <span>reservas@pousadaaltodaboavista.com.br</span>
                    </li>
                </ul>
            </div>

            {/* VIP List / Newsletter */}
            <div>
                <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-pousada-gold">Lista VIP</h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    Prioridade em reservas e ofertas personalizadas exclusivas para assinantes.
                </p>
                <form className="flex flex-col gap-3">
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        className="bg-pousada-lightGreen border border-gray-700 p-3 rounded text-sm text-white focus:outline-none focus:border-pousada-gold placeholder-gray-500"
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        className="bg-pousada-lightGreen border border-gray-700 p-3 rounded text-sm text-white focus:outline-none focus:border-pousada-gold placeholder-gray-500"
                    />
                    <input 
                        type="tel" 
                        placeholder="WhatsApp" 
                        className="bg-pousada-lightGreen border border-gray-700 p-3 rounded text-sm text-white focus:outline-none focus:border-pousada-gold placeholder-gray-500"
                    />
                    <button type="submit" className="bg-pousada-gold text-pousada-green font-bold uppercase text-xs py-3 rounded-full hover:bg-white transition-colors mt-2">
                        Entrar na Lista VIP
                    </button>
                </form>
            </div>
        </div>

        {/* --- NEW AWARDS SECTION --- */}
        <div className="flex flex-col items-center justify-center mb-10 pb-8 border-b border-gray-800">
            <span className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-6">Reconhecimento & Prêmios</span>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                {/* TripAdvisor */}
                <div className="bg-white p-2 rounded-lg shadow-lg opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 w-24 h-24 flex items-center justify-center">
                    <img 
                        src="https://pousadaaltodaboavista.com.br/wp-content/themes/maiscode_pousadaaltadaboavista/img/Tripadvisor_logo.webp" 
                        alt="TripAdvisor Travelers Choice" 
                        loading="lazy"
                        className="w-full h-full object-contain"
                    />
                </div>
                {/* Booking.com */}
                <div className="bg-white p-2 rounded-lg shadow-lg opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 w-24 h-24 flex items-center justify-center">
                    <img 
                        src="https://pousadaaltodaboavista.com.br/wp-content/themes/maiscode_pousadaaltadaboavista/img/booking_logo.webp" 
                        alt="Booking Award" 
                        loading="lazy"
                        className="w-full h-full object-contain"
                    />
                </div>
                {/* Casamentos / Gold Award */}
                <div className="bg-white p-2 rounded-lg shadow-lg opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 w-24 h-24 flex items-center justify-center">
                    <img 
                        src="https://pousadaaltodaboavista.com.br/wp-content/themes/maiscode_pousadaaltadaboavista/img/hoteis_logo.webp" 
                        alt="Casamentos.com.br Award" 
                        loading="lazy"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2024 Pousada Alto da Boa Vista. Todos os direitos reservados.</p>
            {/* Updated Developer Credits */}
            <p className="mt-2 md:mt-0">
                Desenvolvido por <a href="https://instagram.com/webmind.ai" target="_blank" rel="noreferrer" className="text-white hover:text-pousada-gold transition-colors font-bold">WebMind</a>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;