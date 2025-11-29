import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SliderImages() {
  const images = [
    '/iStock-1357352061.jpg',
    '/iStock-487419534.jpg',
    '/iStock-1332728408.jpg',
    '/iStock-2159187467.jpg',
    '/iStock-2162383464.jpg'
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-full">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === current ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/50'} border border-black/20`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Image Slider Section */}
      <section className="relative">
        <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
          <SliderImages />
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-12 md:py-16 bg-[#EFE9E3]">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#D4AF37' }}>
              3 Pillars
            </h2>
            <p className="text-lg md:text-xl font-semibold text-black">
              Our Values
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Integrity */}
            <div className="bg-[#F5F0E8] p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-black/10">
              <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#D4AF37' }}>
                Integrity
              </h3>
              <p className="text-black text-base md:text-lg leading-relaxed">
                Ethical practice in all we do
              </p>
            </div>

            {/* Data Accuracy */}
            <div className="bg-[#F5F0E8] p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-black/10">
              <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#D4AF37' }}>
                Data Accuracy
              </h3>
              <p className="text-black text-base md:text-lg leading-relaxed">
                Evidence-based decision making
              </p>
            </div>

            {/* Cultural Competence */}
            <div className="bg-[#F5F0E8] p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-black/10">
              <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#D4AF37' }}>
                Cultural Competence
              </h3>
              <p className="text-black text-base md:text-lg leading-relaxed">
                Respectful, inclusive service delivery
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}