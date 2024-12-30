import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-light mb-4 italic">Maheen Talib</h1>
        <p className="text-2xl text-gray-600 italic">Visual Storyteller & Photographer</p>
      </div>
    </section>
  );
};

export default Hero;