
import { useState, useEffect } from 'react';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('pranz');
  const [isVisible, setIsVisible] = useState(false);

  const menuData = {
    pranz: [
      {
        name: 'Amintiri de grădină',
        description: 'Legume de sezon într-o dantelă de umami și frunze proaspete',
        image: 'https://readdy.ai/api/search-image?query=Elegant%20vegetable%20dish%20with%20seasonal%20vegetables%20artistically%20plated%2C%20fine%20dining%20presentation%2C%20garden-fresh%20ingredients%2C%20modern%20culinary%20techniques%2C%20sophisticated%20food%20styling%2C%20restaurant%20quality%2C%20artistic%20garnish&width=400&height=300&seq=menu-1&orientation=landscape'
      },
      {
        name: 'Poemul mării',
        description: 'Pește de mare selvatic cu spume de alge și cristale de sare',
        image: 'https://readdy.ai/api/search-image?query=Premium%20wild%20fish%20dish%20with%20seaweed%20foam%20and%20salt%20crystals%2C%20fine%20dining%20seafood%2C%20artistic%20plating%2C%20molecular%20gastronomy%2C%20elegant%20presentation%2C%20restaurant%20quality%2C%20sophisticated%20culinary%20art&width=400&height=300&seq=menu-2&orientation=landscape'
      },
      {
        name: 'Povești din pădure',
        description: 'Ciuperci sălbatice în arome de pământ și frunze de toamnă',
        image: 'https://readdy.ai/api/search-image?query=Wild%20mushroom%20dish%20with%20autumn%20leaves%20garnish%2C%20forest%20flavors%2C%20fine%20dining%20presentation%2C%20earthy%20tones%2C%20sophisticated%20plating%2C%20restaurant%20quality%2C%20culinary%20artistry%2C%20natural%20ingredients&width=400&height=300&seq=menu-3&orientation=landscape'
      },
      {
        name: 'Simfonia cărnii',
        description: 'Vită maturată în arome de lemn și flori de câmp',
        image: 'https://readdy.ai/api/search-image?query=Aged%20beef%20dish%20with%20wood%20smoke%20flavors%20and%20field%20flower%20garnish%2C%20fine%20dining%20meat%20presentation%2C%20sophisticated%20plating%2C%20restaurant%20quality%2C%20culinary%20excellence%2C%20premium%20ingredients&width=400&height=300&seq=menu-4&orientation=landscape'
      },
      {
        name: 'Dulce melancolie',
        description: 'Desert inspirat din copilărie cu texturi moderne',
        image: 'https://readdy.ai/api/search-image?query=Modern%20dessert%20with%20childhood%20inspiration%2C%20innovative%20textures%2C%20fine%20dining%20sweet%20course%2C%20artistic%20presentation%2C%20sophisticated%20plating%2C%20restaurant%20quality%20pastry%2C%20culinary%20art&width=400&height=300&seq=menu-5&orientation=landscape'
      },
      {
        name: 'Cafeaua filosofului',
        description: 'Espresso de specialitate cu note florale și ciocolată artizanală',
        image: 'https://readdy.ai/api/search-image?query=Specialty%20coffee%20with%20floral%20notes%20and%20artisanal%20chocolate%2C%20fine%20dining%20coffee%20service%2C%20elegant%20presentation%2C%20sophisticated%20beverage%2C%20restaurant%20quality%2C%20culinary%20artistry&width=400&height=300&seq=menu-6&orientation=landscape'
      }
    ],
    cina: [
      {
        name: 'Preludiul nopții',
        description: 'Amuse-bouche cu essențe de trufe și parfum de pădure',
        image: 'https://readdy.ai/api/search-image?query=Elegant%20amuse-bouche%20with%20truffle%20essence%20and%20forest%20perfume%2C%20fine%20dining%20appetizer%2C%20sophisticated%20small%20plate%2C%20restaurant%20quality%2C%20artistic%20presentation%2C%20luxury%20ingredients&width=400&height=300&seq=menu-7&orientation=landscape'
      },
      {
        name: 'Dansul flamurilor',
        description: 'Somon flambat cu note de whisky și fum de cireș',
        image: 'https://readdy.ai/api/search-image?query=Flambeed%20salmon%20with%20whisky%20notes%20and%20cherry%20wood%20smoke%2C%20fine%20dining%20fish%20course%2C%20dramatic%20presentation%2C%20restaurant%20quality%2C%20sophisticated%20plating%2C%20culinary%20theater&width=400&height=300&seq=menu-8&orientation=landscape'
      },
      {
        name: 'Secretele munților',
        description: 'Berbecuț de munte cu ierburi sălbatice și pietre prețioase comestibile',
        image: 'https://readdy.ai/api/search-image?query=Mountain%20lamb%20with%20wild%20herbs%20and%20edible%20gems%2C%20fine%20dining%20meat%20course%2C%20sophisticated%20presentation%2C%20restaurant%20quality%2C%20luxury%20ingredients%2C%20artistic%20plating%2C%20culinary%20excellence&width=400&height=300&seq=menu-9&orientation=landscape'
      },
      {
        name: 'Visul păstorului',
        description: 'Brânzeturi artizanale cu miere de salcâm și nuci caramelizate',
        image: 'https://readdy.ai/api/search-image?query=Artisanal%20cheese%20course%20with%20acacia%20honey%20and%20caramelized%20nuts%2C%20fine%20dining%20cheese%20plate%2C%20sophisticated%20presentation%2C%20restaurant%20quality%2C%20culinary%20artistry%2C%20premium%20ingredients&width=400&height=300&seq=menu-10&orientation=landscape'
      },
      {
        name: 'Extazul îngerilor',
        description: 'Soufflé cu vanilie Madagascar și cristale de zahăr ars',
        image: 'https://readdy.ai/api/search-image?query=Madagascar%20vanilla%20souffle%20with%20burnt%20sugar%20crystals%2C%20fine%20dining%20dessert%2C%20elegant%20presentation%2C%20sophisticated%20pastry%2C%20restaurant%20quality%2C%20culinary%20artistry%2C%20luxury%20dessert&width=400&height=300&seq=menu-11&orientation=landscape'
      },
      {
        name: 'Ultimul cuvânt',
        description: 'Digestiv artizanal cu plante medicinale și miere de tei',
        image: 'https://readdy.ai/api/search-image?query=Artisanal%20digestif%20with%20medicinal%20herbs%20and%20linden%20honey%2C%20fine%20dining%20after-dinner%20drink%2C%20elegant%20glassware%2C%20sophisticated%20beverage%2C%20restaurant%20quality%2C%20culinary%20craftsmanship&width=400&height=300&seq=menu-12&orientation=landscape'
      }
    ],
    degustare: [
      {
        name: 'Călătoria gustului',
        description: '7 momente culinare într-o poveste completă a aromelor',
        image: 'https://readdy.ai/api/search-image?query=Seven-course%20tasting%20menu%20presentation%2C%20fine%20dining%20journey%2C%20multiple%20small%20plates%20artistically%20arranged%2C%20sophisticated%20culinary%20storytelling%2C%20restaurant%20quality%2C%20luxury%20dining%20experience&width=400&height=300&seq=menu-13&orientation=landscape'
      },
      {
        name: 'Acorduri de vinuri',
        description: 'Selecție de vinuri românești și internaționale pentru fiecare moment',
        image: 'https://readdy.ai/api/search-image?query=Wine%20pairing%20selection%20with%20Romanian%20and%20international%20wines%2C%20fine%20dining%20wine%20service%2C%20elegant%20wine%20glasses%2C%20sophisticated%20presentation%2C%20restaurant%20quality%2C%20sommelier%20selection&width=400&height=300&seq=menu-14&orientation=landscape'
      },
      {
        name: 'Misterele bucătăriei',
        description: 'Acces în bucătărie și interacțiune cu echipa de chefi',
        image: 'https://readdy.ai/api/search-image?query=Behind-the-scenes%20kitchen%20experience%20with%20chef%20team%20interaction%2C%20fine%20dining%20kitchen%20tour%2C%20professional%20chefs%20working%2C%20sophisticated%20culinary%20environment%2C%20restaurant%20experience&width=400&height=300&seq=menu-15&orientation=landscape'
      },
      {
        name: 'Ingrediente secrete',
        description: 'Preparate cu ingrediente rare și tehnici experimentale',
        image: 'https://readdy.ai/api/search-image?query=Experimental%20dishes%20with%20rare%20ingredients%2C%20molecular%20gastronomy%20techniques%2C%20avant-garde%20culinary%20presentation%2C%20fine%20dining%20innovation%2C%20sophisticated%20food%20art%2C%20restaurant%20quality&width=400&height=300&seq=menu-16&orientation=landscape'
      },
      {
        name: 'Arome din suflet',
        description: 'Reinterpretări moderne ale rețetelor tradiționale românești',
        image: 'https://readdy.ai/api/search-image?query=Modern%20interpretation%20of%20traditional%20Romanian%20recipes%2C%20contemporary%20plating%20of%20classic%20dishes%2C%20fine%20dining%20cultural%20cuisine%2C%20sophisticated%20presentation%2C%20restaurant%20quality%2C%20culinary%20heritage&width=400&height=300&seq=menu-17&orientation=landscape'
      },
      {
        name: 'Finala maestrului',
        description: 'Desert signature al casei cu surprize senzoriale',
        image: 'https://readdy.ai/api/search-image?query=Signature%20dessert%20with%20sensory%20surprises%2C%20fine%20dining%20finale%20course%2C%20artistic%20sweet%20presentation%2C%20innovative%20pastry%20techniques%2C%20restaurant%20quality%2C%20culinary%20masterpiece&width=400&height=300&seq=menu-18&orientation=landscape'
      }
    ]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('meniu');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="meniu" className="py-20 lg:py-32 bg-zinc-900">
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
            Meniurile noastre
          </h2>
          <p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Fiecare preparat spune o poveste, fiecare gust trezeşte o amintire.
          </p>
        </div>

        <div 
          className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-zinc-800/50 rounded-full p-1 backdrop-blur-sm">
            {[
              { key: 'pranz', label: 'Prânz' },
              { key: 'cina', label: 'Cină' },
              { key: 'degustare', label: 'Degustare' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-zinc-700/50'
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div 
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {menuData[activeTab as keyof typeof menuData].map((dish, index) => (
            <div
              key={index}
              className="group bg-zinc-800/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-zinc-700/50 hover:border-amber-500/30 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6">
                <h3 
                  className="text-xl font-serif text-white mb-3 group-hover:text-amber-500 transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {dish.name}
                </h3>
                <p 
                  className="text-gray-300 text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
