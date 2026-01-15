import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'A Pousada', href: '#sobre' },
    { name: 'Acomodações', href: '#acomodacoes' },
    { name: 'Experiências', href: '#experiencias' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'bg-pousada-green/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center">
            <img 
              src="https://i.imgur.com/LGf0u8v.png" 
              alt="Pousada Alto da Boa Vista"
              loading="eager"
              fetchPriority="high"
              className={`object-contain transition-all duration-500 ${scrolled ? 'h-9 md:h-10' : 'h-12 md:h-16'}`}
            />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-bold tracking-widest uppercase hover:text-pousada-gold transition-colors ${scrolled ? 'text-white' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-2 bg-pousada-gold text-pousada-green font-bold uppercase text-xs tracking-widest hover:bg-white transition-all duration-300 rounded-full"
          >
            Reservar Agora
          </a>
        </div>

        {/* Mobile Toggle - Added z-index to ensure it sits above the overlay */}
        <div className="md:hidden relative z-50">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white hover:text-pousada-gold transition-colors">
            {mobileOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Fixed background color and z-index */}
      <div className={`md:hidden fixed inset-0 bg-[#102F25] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-serif text-white hover:text-pousada-gold transition-colors"
          >
            {link.name}
          </a>
        ))}
         <a 
            href="#reservar" 
            onClick={() => setMobileOpen(false)}
            className="mt-8 px-8 py-3 bg-pousada-gold text-pousada-green font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors"
          >
            Reservar Online
          </a>
      </div>
    </nav>
  );
};

export default Navbar;