
import { useState, useEffect } from 'react';

const Experiences = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: 'Maria Popescu',
      rating: 5,
      text: 'O experiență culinară de neuitat. Fiecare preparat a fost o adevărată operă de artă, iar serviciul impecabil.',
      date: 'Decembrie 2024'
    },
    {
      name: 'Alexandru Ionescu',
      rating: 5,
      text: 'Reinventarea bucătăriei românești la cel mai înalt nivel. Recomand cu încredere meniul de degustare.',
      date: 'Noiembrie 2024'
    },
    {
      name: 'Elena Gheorghiu',
      rating: 5,
      text: 'Atmosfera rafinată și preparatele excepționale fac din Atelierul de Gust un loc magic pentru evenimente speciale.',
      date: 'Octombrie 2024'
    },
    {
      name: 'Radu Marin',
      rating: 5,
      text: 'Calitatea ingredientelor locale și creativitatea echipei culinare depășesc orice așteptare. Extraordinar!',
      date: 'Septembrie 2024'
    }
  ];

  const awards = [
    { name: 'Gault & Millau', year: '2024' },
    { name: 'Horeca Awards', year: '2023' },
    { name: 'Fine Dining Romania', year: '2022' },
    { name: 'Culinary Excellence', year: '2021' }
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

    const element = document.getElementById('experiențe');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`ri-star-${i < rating ? 'fill' : 'line'} text-amber-500 text-lg animate-pulse`}
        style={{ animationDelay: `${i * 0.1}s` }}
      ></i>
    ));
  };

  return (
    <section id="experiențe" className="py-20 lg:py-32 bg-gradient-to-b from-zinc-900 to-zinc-950">
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
            Experiențe memorabile
          </h2>
          <p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Poveștile oaspeților noștri și recunoașterea internațională.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div 
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 min-h-[300px] flex flex-col justify-center">
              <div className="flex items-center mb-6">
                {renderStars(testimonials[currentSlide].rating)}
                <span className="ml-4 text-amber-500 font-medium">
                  {testimonials[currentSlide].rating}.0
                </span>
              </div>
              
              <blockquote 
                className="text-lg text-gray-300 mb-6 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                „{testimonials[currentSlide].text}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <div 
                    className="font-medium text-white"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonials[currentSlide].date}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-amber-500' : 'bg-zinc-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <div className="text-sm text-gray-400">
                Rating mediu din 247 de recenzii
              </div>
            </div>
          </div>

          <div 
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 
              className="text-2xl font-serif text-white mb-8 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Recunoaștere internațională
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50 text-center hover:border-amber-500/30 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-award-line text-white text-2xl"></i>
                  </div>
                  
                  <h4 
                    className="font-medium text-white mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {award.name}
                  </h4>
                  <p className="text-sm text-amber-500 font-medium">
                    {award.year}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-4 bg-zinc-800/30 backdrop-blur-sm rounded-full px-6 py-3 border border-zinc-700/50">
                <i className="ri-medal-line text-amber-500 text-xl"></i>
                <span 
                  className="text-white font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Premii & Distincții
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
