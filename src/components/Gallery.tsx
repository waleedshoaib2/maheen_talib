import React from 'react';

// Manually list the image paths
const images = [
  '/images/image1.jpeg',
  '/images/image2.jpeg',
  '/images/image3.jpeg',
  '/images/image4.jpeg',
  '/images/image5.jpeg',
  '/images/image6.jpeg',
  '/images/image7.jpeg',
  '/images/image8.jpeg',
  '/images/image9.jpeg',
  '/images/image10.jpeg',
  '/images/image11.jpeg',
];

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="group relative overflow-hidden">
            <img 
              src={image} // Use the image path
              alt={`Gallery image ${index + 1}`}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;