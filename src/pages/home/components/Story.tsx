
import { useEffect, useState } from 'react';

const Story = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('poveste');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="poveste" className="py-20 lg:py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div 
            className={`relative overflow-hidden rounded-2xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20executive%20chef%20in%20elegant%20white%20uniform%20working%20in%20modern%20fine%20dining%20restaurant%20kitchen%2C%20focused%20expression%2C%20artistic%20lighting%2C%20sophisticated%20culinary%20environment%2C%20Romanian%20chef%20portrait%2C%20premium%20kitchen%20setting%2C%20contemporary%20gastronomy&width=600&height=800&seq=chef-portrait&orientation=portrait"
              alt="Chef Atelierul de Gust"
              className="w-full h-[600px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent"></div>
          </div>

          <div 
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div>
              <h2 
                className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Respect pentru
                <span className="block text-amber-500">ingrediente.</span>
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <p 
                  className="text-lg leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  Creativitate, precizie, emoție. Din 2016 reinventăm bucătăria românească 
                  prin tehnici moderne, transformând fiecare ingredient local într-o poveste 
                  culinară autentică.
                </p>
                
                <p 
                  className="text-lg leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  Fiecare preparat este o căutare a echilibrului perfect între tradiție 
                  și inovație, unde respectul pentru ingredient se întâlnește cu viziunea 
                  contemporană.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-amber-500 pl-6">
              <p 
                className="text-sm italic text-amber-400 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                „Pentru noi, gătitul e știință și artă."
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500 mb-2">2016</div>
                <div className="text-sm text-gray-400">Înființare</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500 mb-2">100%</div>
                <div className="text-sm text-gray-400">Local</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500 mb-2">5★</div>
                <div className="text-sm text-gray-400">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
