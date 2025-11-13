
const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <h3 
              className="text-2xl font-serif text-amber-500 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Atelierul de Gust
            </h3>
            <p 
              className="text-gray-400 leading-relaxed mb-4"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Fine dining cu ingrediente locale reinterpretate. 
              O experiență culinară care îmbină tradiția cu inovația.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white transition-all duration-300"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white transition-all duration-300"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white transition-all duration-300"
              >
                <i className="ri-twitter-line"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 
              className="font-semibold text-white mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Navigare rapidă
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Meniu', href: '#meniu' },
                { label: 'Poveste', href: '#poveste' },
                { label: 'Galerie', href: '#galerie' },
                { label: 'Echipa', href: '#echipa' },
                { label: 'Rezervări', href: '#rezervari' },
                { label: 'Contact', href: '#localizare' }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 
              className="font-semibold text-white mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contact
            </h4>
            <div className="space-y-2 text-gray-400">
              <p 
                className="flex items-center"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                <i className="ri-map-pin-line mr-2 text-amber-500"></i>
                Strada Gastronomiei 15, București
              </p>
              <p 
                className="flex items-center"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                <i className="ri-phone-line mr-2 text-amber-500"></i>
                +40 21 123 4567
              </p>
              <p 
                className="flex items-center"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                <i className="ri-mail-line mr-2 text-amber-500"></i>
                rezervari@atelierdegust.ro
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p 
              className="text-gray-400 text-sm"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              © 2025 Atelierul de Gust — Gastronomie modernă românească.
            </p>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                Politici
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                GDPR
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                Termeni
              </a>
              <a 
                href="https://websiteon.ro" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                Made by WebsiteOn.ro
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
