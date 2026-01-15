import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "Qual é o valor da hospedagem?",
    answer: "A precificação da hospedagem é dinâmica de acordo com o dia e disponibilidade das acomodações. Por isso, reservas feitas em períodos de alta procura e em cima da hora sofrem reajuste tarifário maior."
  },
  {
    question: "O que está incluso na hospedagem?",
    answer: "Nossas diárias se iniciam às 15:00 e terminam ao 12:00. A diária inclui: café da manhã no deck do Restaurante Pontremoli, uso de todas as áreas sociais da pousada, e claro, aproveitar muito nossas acomodações."
  },
  {
    question: "Para quem é?",
    answer: "Perfeito para casais, famílias e grupos de até 4 pessoas. Nosso chalé Family Exclusive com Cozinha aceita 4 ou mais pessoas. Não aceitamos pets."
  },
  {
    question: "Quem se hospeda na pousada tem alguma preferência no Restaurante Pontremoli?",
    answer: "Sim! Hóspedes da pousada ganham desconto de 10% no mundialmente premiado Restaurante Pontremoli, além de uma taxa rolha de cortesia. Mas é importante avisar: o restaurante trabalha somente por reservas."
  },
  {
    question: "Minha dúvida não está aqui. O que posso fazer?",
    answer: "Entre em contato com nossa equipe que teremos o maior prazer em sanar suas dúvidas e te ajudar a escolher a acomodação que mais combina com você."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-pousada-sand">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-pousada-green font-bold tracking-widest uppercase text-sm block mb-2">Dúvidas Frequentes</span>
          {/* CHANGED: uppercase -> capitalize */}
          <h2 className="text-4xl font-serif text-pousada-green capitalize tracking-wide">Perguntas & Respostas</h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-pousada-green/10 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white group"
              >
                <span className={`font-bold font-serif text-lg pr-8 transition-colors ${openIndex === index ? 'text-pousada-gold' : 'text-pousada-green'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-pousada-gold shrink-0 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="text-gray-400 shrink-0 group-hover:text-pousada-gold transition-colors duration-300" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed font-sans border-t border-gray-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;