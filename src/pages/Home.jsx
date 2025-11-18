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
            className={`w-3 h-3 rounded-full ${i === current ? 'bg-white' : 'bg-white/50'} border`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Image and Welcome */}
      <section className="relative">
        <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[500px]">
          {/* Left side - Image Slider (approx 65%) */}
          <div className="relative h-[300px] md:h-auto overflow-hidden" style={{ flex: '0 0 65%' }}>
            {/* slider state and images */}
            {/* images array */}
            {/* We'll render images absolutely and fade between them */}
            <SliderImages />
          </div>
          
          {/* Right side - Welcome Message (40%) */}
          <div className="flex flex-col justify-center p-8 md:p-12 text-white" style={{ backgroundColor: '#D4AF37', flex: '0 0 35%' }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Welcome to<br />Empress Consultants
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              Contact us today to find out more!
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-center px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-block"
              style={{ color: '#D4AF37' }}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom max-w-6xl">
          <div className="max-w-4xl mx-auto mb-12">
            {/* Mission Statement - Centered */}
            <div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At Empress Consultants, it is our passion to provide extraordinary ABA and special education to our children and their families, provided by uniquely talented and exceptional behavior analysts and to empower each family to help their child reach his/her greatest potential.
              </p>
              
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#D4AF37' }}>We are committed to:</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="mr-3 mt-1" style={{ color: '#D4AF37', fontSize: '1.5rem' }}>✦</span>
                  <span className="text-gray-700">Promoting early learning and educational activities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1" style={{ color: '#D4AF37', fontSize: '1.5rem' }}>✦</span>
                  <span className="text-gray-700">Fostering social development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1" style={{ color: '#D4AF37', fontSize: '1.5rem' }}>✦</span>
                  <span className="text-gray-700">Encouraging individual growth</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1" style={{ color: '#D4AF37', fontSize: '1.5rem' }}>✦</span>
                  <span className="text-gray-700">Nurturing relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1" style={{ color: '#D4AF37', fontSize: '1.5rem' }}>✦</span>
                  <span className="text-gray-700">Partnering with parents, caregivers and the community</span>
                </li>
              </ul>
              
              <Link to="/about" className="btn-primary inline-block px-8 py-3">
                READ MORE
              </Link>
            </div>
          </div>

          {/* Sections Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* About Us - Clickable */}
            <Link to="/about" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-3" style={{ color: '#D4AF37' }}>About Us</h2>
                  <p className="text-gray-700">
                    Delivering compassionate, evidence-based ABA services that transform potential into progress.
                  </p>
                </div>
                <svg className="w-6 h-6 flex-shrink-0 ml-4 transition-transform group-hover:translate-x-1" style={{ color: '#D4AF37' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Services */}
            <Link to="/services" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold" style={{ color: '#D4AF37' }}>Services</h2>
                <svg className="w-6 h-6 flex-shrink-0 ml-4 transition-transform group-hover:translate-x-1" style={{ color: '#D4AF37' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                  <span>ABA Therapy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                  <span>Supervision (BCBA/LBA)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                  <span>Parent Training</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                  <span>Impartial Hearing Support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                  <span>Related Service Coordination</span>
                </li>
              </ul>
            </Link>

            {/* Who We Serve */}
            <Link to="/who-we-serve" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold" style={{ color: '#D4AF37' }}>Who We Serve</h2>
                <svg className="w-6 h-6 flex-shrink-0 ml-4 transition-transform group-hover:translate-x-1" style={{ color: '#D4AF37' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                  <span>Children with autism spectrum disorder</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                  <span>Families seeking home and school-based ABA</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                  <span>School districts and educational institutions</span>
                </li>
              </ul>
            </Link>

            {/* Why Families Choose Us */}
            <Link to="/why-choose-us" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold" style={{ color: '#D4AF37' }}>Why Families Choose Us</h2>
                <svg className="w-6 h-6 flex-shrink-0 ml-4 transition-transform group-hover:translate-x-1" style={{ color: '#D4AF37' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                  <span>Board Certified Behavior Analysts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                  <span>Data-driven, individualized plans</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                  <span>Family-centered approach</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                  <span>95% parent satisfaction rate</span>
                </li>
              </ul>
            </Link>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-center text-lg px-10 py-4">
              Request Services
            </Link>
            <Link to="/contact" className="btn-secondary text-center text-lg px-10 py-4">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}