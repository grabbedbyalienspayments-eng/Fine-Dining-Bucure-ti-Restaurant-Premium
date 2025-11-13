import { useState, useEffect } from 'react';

const Reservations = () => {
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    telefon: '',
    data: '',
    ora: '',
    persoane: '2',
    noteAlimentare: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

    const element = document.getElementById('rezervari');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'noteAlimentare' && value.length > 500) {
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.nume.trim() || !formData.email.trim() || !formData.telefon.trim() || 
        !formData.data || !formData.ora) {
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return false;
    }

    const selectedDate = new Date(formData.data + 'T' + formData.ora);
    if (selectedDate < new Date()) {
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    if (formData.noteAlimentare.length > 500) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const submitData = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4atujb62rkouuf3q570', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: submitData
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nume: '',
          email: '',
          telefon: '',
          data: '',
          ora: '',
          persoane: '2',
          noteAlimentare: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="rezervari" className="py-20 lg:py-32 bg-gradient-to-b from-zinc-950 via-red-950/10 to-amber-950/10">
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
            Rezervă masa
          </h2>
          <p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Îți rezervăm locul pentru o experiență culinară de neuitat.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form 
            id="rezervari-restaurant"
            onSubmit={handleSubmit}
            data-readdy-form
            className={`bg-zinc-900/30 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-zinc-700/50 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              background: 'linear-gradient(135deg, rgba(39, 39, 42, 0.3) 0%, rgba(63, 63, 70, 0.2) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label 
                  className="block text-sm font-medium text-gray-300 mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Nume complet *
                </label>
                <input
                  type="text"
                  name="nume"
                  value={formData.nume}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-xl text-white text-sm placeholder-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                  placeholder="Nume și prenume"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              <div>
                <label 
                  className="block text-sm font-medium text-gray-300 mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-xl text-white text-sm placeholder-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                  placeholder="adresa@email.ro"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label 
                  className="block text-sm font-medium text-gray-300 mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-xl text-white text-sm placeholder-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                  placeholder="+40 7XX XXX XXX"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              <div>
                <label 
                  className="block text-sm font-medium text-gray-300 mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Număr persoane
                </label>
                <select
                  name="persoane"
                  value={formData.persoane}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-xl text-white text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300 pr-8"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                    <option key={num} value={num.toString()}>
                      {num} {num === 1 ? 'persoană' : 'persoane'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label 
                  className="block text-sm font-medium text-gray-300 mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Data *
                </label>
                <input
                  type="date"
                  name="data"
                  value={formData.data}
                  onChange={handleInputChange}
                  min={today}
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-xl text-white text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              <div>
                <label 
                  className="block text-sm font-medium text-gray-300 mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Ora *
                </label>
                <input
                  type="time"
                  name="ora"
                  value={formData.ora}
                  onChange={handleInputChange}
                  min="12:00"
                  max="22:00"
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-xl text-white text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
            </div>

            <div className="mb-8">
              <label 
                className="block text-sm font-medium text-gray-300 mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Note alimentare sau cerințe speciale
              </label>
              <textarea
                name="noteAlimentare"
                value={formData.noteAlimentare}
                onChange={handleInputChange}
                maxLength={500}
                rows={4}
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-xl text-white text-sm placeholder-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300 resize-none"
                placeholder="Alergii, preferințe culinare sau alte cerințe speciale..."
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <div className="text-right text-xs text-gray-400 mt-1">
                {formData.noteAlimentare.length}/500
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !validateForm()}
              className="w-full group relative overflow-hidden bg-gradient-to-r from-amber-600 to-amber-500 text-white font-medium py-4 rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Se trimite...
                  </>
                ) : (
                  <>
                    Trimite rezervarea
                    <i className="ri-send-plane-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                  </>
                )}
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm text-center">
                <i className="ri-check-line mr-2"></i>
                Rezervarea a fost trimisă cu succes! Vă vom contacta în curând.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
                <i className="ri-error-warning-line mr-2"></i>
                A apărut o eroare. Verificați datele și încercați din nou.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
