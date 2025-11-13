
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Experiences from './components/Experiences';
import Team from './components/Team';
import Reservations from './components/Reservations';
import Location from './components/Location';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-zinc-950 text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <Hero />
      <Story />
      <Menu />
      <Gallery />
      <Experiences />
      <Team />
      <Reservations />
      <Location />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default HomePage;
