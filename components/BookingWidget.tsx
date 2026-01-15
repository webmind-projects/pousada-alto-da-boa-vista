import React, { useState } from 'react';
import { CHALETS } from '../constants';
import { Calendar } from 'lucide-react';

const BookingWidget: React.FC = () => {
  const [chaletId, setChaletId] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleBooking = () => {
    const selectedChalet = CHALETS.find(c => c.id.toString() === chaletId)?.name || "Não especificado";
    const message = `Olá! Gostaria de verificar disponibilidade na Pousada Alto da Boa Vista.\n\n🏡 *Acomodação:* ${selectedChalet}\n📅 *Check-in:* ${checkIn}\n📅 *Check-out:* ${checkOut}`;
    
    // Replace with the actual phone number
    const phoneNumber = "551236630000"; 
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="bg-[#102F25] py-20 px-4 md:px-6 relative overflow-hidden">
        {/* Background Texture Removed - Solid Green Only */}
        
        <div className="container mx-auto relative z-10">
            <div className="text-center mb-10">
                {/* CHANGED: added capitalize */}
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-2 capitalize">Garanta Seu Descanso</h2>
                <p className="text-gray-300 text-sm md:text-base font-light max-w-2xl mx-auto">
                    Selecione suas datas. Nosso sistema verifica a disponibilidade e te encaminha para confirmar a reserva via WhatsApp.
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                    
                    {/* Chalet Selector */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Acomodação</label>
                        <div className="relative">
                            <select 
                                className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-pousada-gold focus:border-pousada-gold block p-3 appearance-none cursor-pointer"
                                value={chaletId}
                                onChange={(e) => setChaletId(e.target.value)}
                            >
                                <option value="">Escolha o Chalé</option>
                                {CHALETS.map(chalet => (
                                    <option key={chalet.id} value={chalet.id}>{chalet.name}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>

                    {/* Check-in */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Check-in</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Calendar size={16} className="text-gray-400" />
                            </div>
                            <input 
                                type="date" 
                                className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-pousada-gold focus:border-pousada-gold block w-full pl-10 p-3" 
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Check-out */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Check-out</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Calendar size={16} className="text-gray-400" />
                            </div>
                            <input 
                                type="date" 
                                className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-pousada-gold focus:border-pousada-gold block w-full pl-10 p-3" 
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Submit Button - Changed rounded-lg to rounded-full */}
                    <button 
                        onClick={handleBooking}
                        className="w-full bg-pousada-gold hover:bg-white text-pousada-green font-bold py-3 px-4 rounded-full transition-colors duration-300 flex items-center justify-center gap-2 shadow-md h-[46px]"
                    >
                        {/* WhatsApp Icon */}
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Reservar
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default BookingWidget;