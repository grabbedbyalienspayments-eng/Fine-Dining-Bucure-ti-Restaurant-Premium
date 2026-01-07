import { useEffect, useState } from 'react';

const Location = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('localizare');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const openDirections = () => {
    window.open('https://maps.google.com/maps?q=Atelierul+de+Gust+București', '_blank');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/40700000000', '_blank');
  };

  return (
    <section id="localizare" className="py-20 lg:py-32 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 
            className="text-4xl lg:text-5xl font-serif text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Localizare
          </h2>
          <p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Ne găsiți în inima Bucureștiului, într-o locație elegantă și accesibilă.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50">
              <h3 
                className="text-2xl font-serif text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Informații contact
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-amber-500 text-xl"></i>
                  </div>
                  <div>
                    <h4 
                      className="font-medium text-white mb-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Adresă
                    </h4>
                    <p 
                      className="text-gray-300"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    >
                      Strada Gustului nr. 11<br />
                      Sector 1, București, România
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-amber-500 text-xl"></i>
                  </div>
                  <div>
                    <h4 
                      className="font-medium text-white mb-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Telefon
                    </h4>
                    <a
                      href="tel:070000000"
                      className="text-gray-300 hover:text-amber-500 transition-colors duration-300"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    >
                      070 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-whatsapp-line text-amber-500 text-xl"></i>
                  </div>
                  <div>
                    <h4 
                      className="font-medium text-white mb-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      WhatsApp
                    </h4>
                    <button
                      onClick={openWhatsApp}
                      className="text-gray-300 hover:text-amber-500 transition-colors duration-300"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    >
                      070 000 000
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-amber-500 text-xl"></i>
                  </div>
                  <div>
                    <h4 
                      className="font-medium text-white mb-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Email
                    </h4>
                    <a
                      href="mailto:rezervari@rezervariatelierdegust.ro"
                      className="text-gray-300 hover:text-amber-500 transition-colors duration-300"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    >
                      rezervari@rezervariatelierdegust.ro
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-amber-500 text-xl"></i>
                  </div>
                  <div>
                    <h4 
                      className="font-medium text-white mb-3"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Program
                    </h4>
                    <div 
                      className="space-y-1 text-gray-300 text-sm"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    >
                      <p>Marți - Joi: 12:00 - 23:00</p>
                      <p>Vineri - Sâmbătă: 12:00 - 00:00</p>
                      <p>Duminică: 12:00 - 22:00</p>
                      <p className="text-amber-500 font-medium">Luni: Închis</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <button
                  onClick={openDirections}
                  className="group bg-gradient-to-r from-amber-600 to-amber-500 text-white font-medium py-3 px-4 rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 whitespace-nowrap"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span className="flex items-center justify-center text-sm">
                    <i className="ri-navigation-line mr-2 group-hover:rotate-12 transition-transform duration-300"></i>
                    Google Maps
                  </span>
                </button>

                <button
                  onClick={openWhatsApp}
                  className="group bg-green-600 text-white font-medium py-3 px-4 rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 whitespace-nowrap"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span className="flex items-center justify-center text-sm">
                    <i className="ri-whatsapp-line mr-2 group-hover:scale-110 transition-transform duration-300"></i>
                    WhatsApp
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div 
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl border border-zinc-700/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8!2d26.1025384!3d44.4267674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzM2LjQiTiAyNsKwMDYnMDkuMSJF!5e0!3m2!1sen!2sro!4v1699123456789!5m2!1sen!2sro&theme=dark"
                width="100%"
                height="500"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atelierul de Gust Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
