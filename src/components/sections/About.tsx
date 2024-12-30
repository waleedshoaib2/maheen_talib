import React from 'react';
import { Mail, Instagram } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light mb-12 text-center italic">About Me</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="images/portfolio.jpeg"
              alt="Maheen Talib"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-600 leading-relaxed text-lg">
              I am a visual artist based in the heart of the city, specializing in portrait and lifestyle photography. With over 5 years of experience, I focus on capturing authentic moments and creating timeless imagery.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              My work is characterized by a minimalist approach, emphasizing natural light and genuine emotions. Every frame tells a unique story, and I'm passionate about bringing these stories to life.
            </p>
            <div className="flex gap-4 pt-6">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:maheentalibch@gmail.com" className="text-gray-600 hover:text-black transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;