
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToReservations = () => {
    const element = document.getElementById('rezervari');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20chef%20elegantly%20plating%20gourmet%20dish%20in%20slow%20motion%2C%20fine%20dining%20restaurant%20kitchen%2C%20artistic%20food%20presentation%20with%20tweezers%2C%20dramatic%20lighting%2C%20cinematic%20quality%2C%20sophisticated%20atmosphere%2C%20modern%20culinary%20techniques%2C%20luxurious%20setting&width=1920&height=1080&seq=hero-video-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-zinc-950/70"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 
          className={`text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight transition-all duration-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Gust care spune
          <span className="block text-amber-500">povești.</span>
        </h1>
        
        <p 
          className={`text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed transition-all duration-1500 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
        >
          Fine dining cu ingrediente locale reinterpretate.
        </p>
        
        <button
          onClick={scrollToReservations}
          className={`group relative inline-flex items-center px-12 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-medium rounded-full overflow-hidden transition-all duration-1500 delay-500 hover:shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 whitespace-nowrap ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10 flex items-center">
            Rezervă masă
            <i className="ri-arrow-right-line ml-2 text-lg group-hover:translate-x-1 transition-transform duration-300"></i>
          </span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-amber-300 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-2xl text-amber-500"></i>
      </div>
    </section>
  );
};

export default Hero;
