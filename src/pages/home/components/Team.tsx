
import { useState, useEffect } from 'react';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);

  const teamMembers = [
    {
      name: 'Chef Andrei Munteanu',
      role: 'Executive Chef & Fondator',
      image: 'https://readdy.ai/api/search-image?query=Professional%20executive%20chef%20portrait%20in%20elegant%20white%20uniform%2C%20confident%20expression%2C%20fine%20dining%20kitchen%20background%2C%20Romanian%20chef%2C%20sophisticated%20culinary%20leader%2C%20modern%20restaurant%20environment%2C%20chef%20expertise&width=400&height=500&seq=chef-1&orientation=portrait',
      quote: 'Gătesc cu sufletul pentru a crea amintiri de neuitat.',
      description: 'Cu peste 15 ani de experiență în bucătăriile celor mai prestigioase restaurante europene.'
    },
    {
      name: 'Chef Sofia Radu',
      role: 'Sous Chef & Pastry',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20sous%20chef%20in%20elegant%20uniform%2C%20artistic%20pastry%20background%2C%20confident%20smile%2C%20fine%20dining%20kitchen%2C%20Romanian%20chef%2C%20sophisticated%20culinary%20artist%2C%20modern%20restaurant%20setting&width=400&height=500&seq=chef-2&orientation=portrait',
      quote: 'Dulciurile sunt poezie transformată în gust.',
      description: 'Specializată în patiserie franceză și reinterpretări moderne ale deserturilor tradiționale.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('echipa');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="echipa" className="py-20 lg:py-32 bg-zinc-950">
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
            Echipa noastră
          </h2>
          <p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Maeștri culinari care transformă fiecare preparat într-o experiență unică.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200 + 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-amber-500/30 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60"></div>
                  
                  <div className="absolute inset-0 bg-zinc-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="text-center px-6">
                      <p 
                        className="text-amber-500 italic text-lg mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        „{member.quote}"
                      </p>
                      <p 
                        className="text-gray-300 text-sm leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                      >
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 
                    className="text-xl font-serif text-white mb-2 group-hover:text-amber-500 transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-amber-500 font-medium mb-4"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {member.role}
                  </p>
                  
                  <div className="flex items-center text-gray-400 text-sm">
                    <i className="ri-chef-hat-line mr-2"></i>
                    <span>Hover pentru citat personal</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center space-x-6 bg-zinc-900/50 backdrop-blur-sm rounded-2xl px-8 py-6 border border-zinc-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-500 mb-1">15+</div>
              <div className="text-sm text-gray-400">Ani experiență</div>
            </div>
            <div className="w-px h-12 bg-zinc-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-500 mb-1">8</div>
              <div className="text-sm text-gray-400">Membri echipă</div>
            </div>
            <div className="w-px h-12 bg-zinc-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-500 mb-1">100%</div>
              <div className="text-sm text-gray-400">Pasiune</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
