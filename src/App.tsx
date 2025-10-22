import { useState } from 'react';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import About from './components/About';
import EventFormats from './components/EventFormats';
import Speakers from './components/Speakers';
import Companies from './components/Companies';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onLoadComplete={handleLoadComplete} />}
      <div className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <About />
        <EventFormats />
        <Speakers />
        <Companies />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
