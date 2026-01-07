import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [activeModal, setActiveModal] = useState<'politici' | 'gdpr' | 'termeni' | null>(null);

  useEffect(() => {
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear());
    };
    
    const interval = setInterval(updateYear, 60000);
    return () => clearInterval(interval);
  }, []);

  const closeModal = () => setActiveModal(null);

  const modalContent = {
    politici: {
      title: 'Politici de Confidențialitate',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">1. Colectarea Datelor</h3>
          <p className="text-gray-300">
            Colectăm informații personale precum nume, email, număr de telefon atunci când faceți o rezervare la restaurantul nostru.
          </p>
          
          <h3 className="text-lg font-semibold text-white">2. Utilizarea Datelor</h3>
          <p className="text-gray-300">
            Datele dumneavoastră sunt folosite exclusiv pentru procesarea rezervărilor și comunicarea legată de serviciile noastre.
          </p>
          
          <h3 className="text-lg font-semibold text-white">3. Protecția Datelor</h3>
          <p className="text-gray-300">
            Ne angajăm să protejăm informațiile dumneavoastră personale și să nu le împărtășim cu terțe părți fără consimțământul dumneavoastră.
          </p>
          
          <h3 className="text-lg font-semibold text-white">4. Drepturile Dumneavoastră</h3>
          <p className="text-gray-300">
            Aveți dreptul de a accesa, modifica sau șterge datele personale stocate de noi. Contactați-ne la rezervari@rezervariatelierdegust.ro pentru orice solicitare.
          </p>
        </div>
      )
    },
    gdpr: {
      title: 'Conformitate GDPR',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Protecția Datelor Conform GDPR</h3>
          <p className="text-gray-300">
            Atelierul de Gust respectă Regulamentul General privind Protecția Datelor (GDPR) și se angajează să protejeze confidențialitatea datelor personale ale clienților.
          </p>
          
          <h3 className="text-lg font-semibold text-white">Consimțământ</h3>
          <p className="text-gray-300">
            Prin completarea formularului de rezervare, vă dați consimțământul pentru procesarea datelor personale în scopul gestionării rezervării dumneavoastră.
          </p>
          
          <h3 className="text-lg font-semibold text-white">Durata Stocării</h3>
          <p className="text-gray-300">
            Păstrăm datele dumneavoastră personale doar pe perioada necesară pentru îndeplinirea scopurilor pentru care au fost colectate sau conform cerințelor legale.
          </p>
          
          <h3 className="text-lg font-semibold text-white">Drepturile GDPR</h3>
          <p className="text-gray-300">
            Aveți dreptul la acces, rectificare, ștergere, restricționare, portabilitate și opoziție cu privire la prelucrarea datelor personale.
          </p>
        </div>
      )
    },
    termeni: {
      title: 'Termeni și Condiții',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">1. Rezervări</h3>
          <p className="text-gray-300">
            Rezervările sunt confirmate prin email sau telefon. Vă rugăm să ajungeți la timp, rezervările sunt păstrate maxim 15 minute de la ora stabilită.
          </p>
          
          <h3 className="text-lg font-semibold text-white">2. Anulări</h3>
          <p className="text-gray-300">
            Anulările pot fi făcute cu cel puțin 24 de ore înainte de rezervare. Pentru grupuri mai mari de 6 persoane, anularea trebuie făcută cu 48 de ore înainte.
          </p>
          
          <h3 className="text-lg font-semibold text-white">3. Meniu și Prețuri</h3>
          <p className="text-gray-300">
            Meniul și prețurile pot fi modificate fără notificare prealabilă. Prețurile afișate pot fi diferite de cele practicate în restaurant.
          </p>
          
          <h3 className="text-lg font-semibold text-white">4. Alergii Alimentare</h3>
          <p className="text-gray-300">
            Vă rugăm să ne informați despre orice alergii alimentare la momentul rezervării. Deși luăm toate măsurile de precauție, nu putem garanta absența completă a alergenilor.
          </p>
          
          <h3 className="text-lg font-semibold text-white">5. Cod Vestimentar</h3>
          <p className="text-gray-300">
            Recomandăm o ținută smart casual pentru o experiență optimă în restaurantul nostru.
          </p>
        </div>
      )
    }
  };

  return (
    <>
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
                  href="https://atelierdegust.ro" 
                  className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white transition-all duration-300"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a 
                  href="https://atelierdegust.ro" 
                  className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white transition-all duration-300"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a 
                  href="https://atelierdegust.ro" 
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
                  Strada Gustului nr. 11, București
                </p>
                <p 
                  className="flex items-center"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  <i className="ri-phone-line mr-2 text-amber-500"></i>
                  070 000 000
                </p>
                <p 
                  className="flex items-center"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  <i className="ri-whatsapp-line mr-2 text-amber-500"></i>
                  070 000 000
                </p>
                <p 
                  className="flex items-center"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  <i className="ri-mail-line mr-2 text-amber-500"></i>
                  rezervari@rezervariatelierdegust.ro
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
                © {currentYear} Atelierul de Gust — Gastronomie modernă românească.
              </p>
              
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => setActiveModal('politici')}
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  Politici
                </button>
                <button 
                  onClick={() => setActiveModal('gdpr')}
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  GDPR
                </button>
                <button 
                  onClick={() => setActiveModal('termeni')}
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  Termeni
                </button>
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

      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-900 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden border border-zinc-700">
            <div className="sticky top-0 bg-zinc-900 border-b border-zinc-700 p-6 flex items-center justify-between">
              <h2 
                className="text-2xl font-serif text-amber-500"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {modalContent[activeModal].title}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors duration-300 w-8 h-8 flex items-center justify-center"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            
            <div 
              className="p-6 overflow-y-auto max-h-[calc(80vh-88px)]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {modalContent[activeModal].content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
