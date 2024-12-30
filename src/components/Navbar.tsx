import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 font-cormorant ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-light italic">MT</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg">
            <a href="#" className="hover:text-gray-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
            <a href="#gallery" className="hover:text-gray-600 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
            <div className="flex flex-col space-y-4 px-4 py-6 text-lg">
              <a href="#" className="hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#gallery" className="hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#contact" className="hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;