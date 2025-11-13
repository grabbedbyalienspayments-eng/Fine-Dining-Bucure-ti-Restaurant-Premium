
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-zinc-950/95 backdrop-blur-md border-b border-amber-600/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <h1 className="text-2xl font-serif text-amber-500 font-light tracking-wide hover:text-amber-400 transition-colors duration-300">
              Atelierul de Gust
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Meniu', id: 'meniu' },
              { label: 'Poveste', id: 'poveste' },
              { label: 'Galerie', id: 'galerie' },
              { label: 'Rezervă', id: 'rezervari' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-amber-500 transition-colors duration-300 font-light tracking-wide relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-white hover:text-amber-500 transition-colors duration-300 w-6 h-6 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-amber-600/20 pt-4">
            <div className="flex flex-col space-y-4">
              {[
                { label: 'Meniu', id: 'meniu' },
                { label: 'Poveste', id: 'poveste' },
                { label: 'Galerie', id: 'galerie' },
                { label: 'Rezervă', id: 'rezervari' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-white hover:text-amber-500 transition-colors duration-300 font-light tracking-wide whitespace-nowrap"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
