import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-8 italic">Let's Work Together</h2>
        <p className="mb-8 text-gray-300 text-xl">Available for assignments and collaborations worldwide</p>
        <a 
          href="mailto:contact@maheentalib.com"
          className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors text-lg"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;