import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Gallery from './components/Gallery';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white font-cormorant">
      <Navbar />
      <Hero />
      <About />
      <section id="gallery" className="py-20 px-4">
        <h2 className="text-3xl font-light mb-12 text-center italic">Portfolio</h2>
        <Gallery />
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;