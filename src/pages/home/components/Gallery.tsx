
import { useState, useEffect } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const images = [
    {
      src: 'https://readdy.ai/api/search-image?query=Fine%20dining%20restaurant%20elegant%20interior%20with%20warm%20lighting%2C%20sophisticated%20atmosphere%2C%20luxury%20dining%20room%2C%20modern%20design%20elements%2C%20comfortable%20seating%2C%20ambient%20lighting%2C%20upscale%20environment&width=400&height=500&seq=gallery-1&orientation=portrait',
      alt: 'Interior elegant restaurant'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Gourmet%20dish%20artistic%20plating%20with%20microgreens%20and%20sauce%20dots%2C%20fine%20dining%20presentation%2C%20chef%20masterpiece%2C%20sophisticated%20food%20styling%2C%20restaurant%20quality%2C%20culinary%20art&width=400&height=300&seq=gallery-2&orientation=landscape',
      alt: 'Preparat gourmet artistic'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Professional%20chef%20hands%20delicately%20plating%20food%20with%20tweezers%2C%20fine%20dining%20kitchen%20work%2C%20culinary%20precision%2C%20artistic%20food%20presentation%2C%20restaurant%20environment%2C%20chef%20expertise&width=300&height=400&seq=gallery-3&orientation=portrait',
      alt: 'Chef la lucru'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Wine%20pairing%20with%20fine%20dining%20dish%2C%20elegant%20wine%20glass%2C%20sophisticated%20table%20setting%2C%20restaurant%20ambiance%2C%20luxury%20dining%20experience%2C%20premium%20wine%20service&width=400&height=300&seq=gallery-4&orientation=landscape',
      alt: 'Acorduri de vinuri'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Signature%20dessert%20with%20gold%20leaf%20and%20artistic%20presentation%2C%20fine%20dining%20sweet%20course%2C%20elegant%20plating%2C%20restaurant%20quality%20pastry%2C%20culinary%20masterpiece%2C%20luxury%20dessert&width=300&height=400&seq=gallery-5&orientation=portrait',
      alt: 'Desert signature'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Fresh%20local%20ingredients%20artistically%20arranged%2C%20farmers%20market%20vegetables%2C%20premium%20quality%20produce%2C%20seasonal%20ingredients%2C%20culinary%20preparation%2C%20natural%20lighting%2C%20food%20photography&width=400&height=300&seq=gallery-6&orientation=landscape',
      alt: 'Ingrediente locale fresh'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Fine%20dining%20restaurant%20bar%20area%20with%20premium%20spirits%20display%2C%20sophisticated%20cocktail%20preparation%2C%20elegant%20bar%20design%2C%20luxury%20hospitality%2C%20professional%20bartender%20workspace&width=400&height=500&seq=gallery-7&orientation=portrait',
      alt: 'Bar și cocktailuri'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Seafood%20dish%20with%20caviar%20and%20microgreens%2C%20luxury%20marine%20cuisine%2C%20fine%20dining%20ocean%20flavors%2C%20sophisticated%20plating%2C%20restaurant%20quality%2C%20premium%20ingredients%2C%20culinary%20excellence&width=400&height=300&seq=gallery-8&orientation=landscape',
      alt: 'Preparate marine'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Private%20dining%20room%20with%20intimate%20lighting%2C%20exclusive%20restaurant%20seating%2C%20luxury%20dining%20experience%2C%20elegant%20table%20setting%2C%20sophisticated%20atmosphere%2C%20fine%20dining%20privacy&width=300&height=400&seq=gallery-9&orientation=portrait',
      alt: 'Sală privată'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Tasting%20menu%20multiple%20courses%20displayed%20together%2C%20fine%20dining%20journey%2C%20sophisticated%20culinary%20progression%2C%20restaurant%20presentation%2C%20chef%20selection%2C%20gourmet%20experience&width=400&height=300&seq=gallery-10&orientation=landscape',
      alt: 'Meniu degustare'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Professional%20kitchen%20team%20working%20together%2C%20fine%20dining%20restaurant%20brigade%2C%20chefs%20collaboration%2C%20culinary%20teamwork%2C%20modern%20kitchen%20environment%2C%20restaurant%20operations&width=400&height=500&seq=gallery-11&orientation=portrait',
      alt: 'Echipa bucătărie'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Elegant%20table%20setting%20with%20premium%20tableware%2C%20fine%20dining%20service%2C%20luxury%20restaurant%20ambiance%2C%20sophisticated%20dining%20setup%2C%20quality%20linens%20and%20glassware%2C%20restaurant%20excellence&width=400&height=300&seq=gallery-12&orientation=landscape',
      alt: 'Masa elegantă'
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

    const element = document.getElementById('galerie');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="galerie" className="py-20 lg:py-32 bg-zinc-950">
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
            Galeria noastră
          </h2>
          <p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Momente captivante din universul nostru culinar.
          </p>
        </div>

        <div 
          className={`columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`break-inside-avoid cursor-pointer group transition-all duration-700 ${
                loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-zinc-800">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  onLoad={() => handleImageLoad(index)}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-12 h-12 bg-amber-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <i className="ri-eye-line text-white text-xl"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors duration-300 w-10 h-10 flex items-center justify-center"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-500 transition-colors duration-300 w-12 h-12 flex items-center justify-center"
          >
            <i className="ri-arrow-left-line text-2xl"></i>
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-500 transition-colors duration-300 w-12 h-12 flex items-center justify-center"
          >
            <i className="ri-arrow-right-line text-2xl"></i>
          </button>

          <div className="max-w-4xl max-h-full">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center">
            <p className="text-sm">
              {selectedImage + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
