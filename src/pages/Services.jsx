import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Services() {
  const [activeCard, setActiveCard] = useState(null);

  const handleScrollToCard = (id) => {
    setActiveCard(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Remove highlight after 2 seconds
    setTimeout(() => {
      setActiveCard(null);
    }, 2000);
  };

  const services = [
    {
      title: "ABA Therapy",
      description: "Functional assessments, individualized program design, BCBA supervision, and continuous data review across home, school, and community settings.",
      link: "/services/aba-therapy"
    },
    {
      title: "Parent Training",
      description: "Coaching and digital modules that teach reinforcement strategies, structure, and consistency within everyday routines.",
      link: "/services/parent-training"
    },
    {
      title: "Supervision & Professional Development",
      description: "Comprehensive BCBA/RBT supervision, competency assessment, and ethics guidance to ensure clinical quality.",
      link: "/services/supervision"
    },
    {
      title: "Related Services",
      description: "Integrated collaboration among Speech, OT, PT, and SETSS professionals to support academic and behavioral progress.",
      link: "/services/related-services"
    },
    {
      title: "Impartial Hearing Support",
      description: "Expert implementation of Findings of Fact and Decision (FOFD) and Impartial Hearing Officer (IHO) orders. We provide clinical documentation, expert testimony, and compliance support for families navigating the legal process to secure appropriate educational services.",
      link: "/services/impartial-hearing"
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5F0E8] to-[#EFE9E3] section-padding">
        <div className="container-custom">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 px-4 text-black">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center text-black max-w-3xl mx-auto px-4">
            Our multidisciplinary team provides Applied Behavior Analysis and related therapies designed for each child's environment—home, school, or community.
          </p>
        </div>
      </section>

      {/* What we do - clickable list that scrolls to details */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-black" >What we do:</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {(() => {
              const half = Math.ceil(services.length / 2);
              const left = services.slice(0, half);
              const right = services.slice(half);
              return (
                <>
                  <ul className="space-y-4">
                    {left.map((s, i) => (
                      <li key={s.title} className="flex items-start">
                        <span className="mr-4 text-2xl" >🧩</span>
                        <button
                          className="text-lg underline text-black hover:text-[#D4AF37] text-left"
                          onClick={() => handleScrollToCard(s.link.replace('/services/', ''))}
                        >
                          {s.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-4">
                    {right.map((s, i) => (
                      <li key={s.title} className="flex items-start">
                        <span className="mr-4 text-2xl" >🧩</span>
                        <button
                          className="text-lg underline text-black hover:text-[#D4AF37] text-left"
                          onClick={() => handleScrollToCard(s.link.replace('/services/', ''))}
                        >
                          {s.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections (anchors) - in-page only (no separate pages) */}
      <section className="section-padding bg-gradient-to-br from-[#F5F0E8] to-[#EFE9E3]">
        <div className="container-custom max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-black">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const id = service.link.replace('/services/', '');
              return (
                <div
                  key={service.title}
                  id={id}
                  className={`bg-[#F5F0E8] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-t-4 hover:scale-105 transform border border-black/10 ${
                    activeCard === id ? 'ring-4 ring-[#D4AF37] scale-105' : ''
                  }`}
                  style={{ borderTopColor: '#D4AF37' }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-3" style={{ backgroundColor: '#D4AF37' }}>
                      <span className="text-black font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-black">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-black leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link to={service.link} className="btn-secondary inline-block">Read More</Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data-Driven Note */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-[#F5F0E8] p-6 sm:p-8 rounded-lg shadow-md border border-black/10">
            <p className="text-base sm:text-lg text-black text-center italic">
              <strong className="text-black">Data-Driven:</strong> Every program includes systematic data collection, progress monitoring, and evidence-based decision making to ensure measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-black" style={{ backgroundColor: '#D4AF37' }}>
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 px-4 text-black">
            Contact us to learn more about our services
          </p>
          <Link to="/contact" className="btn-cta inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

