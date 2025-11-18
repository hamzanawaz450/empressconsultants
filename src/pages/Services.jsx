import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "ABA Therapy",
      description: "Functional assessments, individualized program design, BCBA supervision, and continuous data review across home, school, and community settings.",
      image: "/iStock-1151510733.jpg",
      link: "/services/aba-therapy"
    },
    {
      title: "Parent Training",
      description: "Coaching and digital modules that teach reinforcement strategies, structure, and consistency within everyday routines.",
      image: "/iStock-1282884529.jpg",
      link: "/services/parent-training"
    },
    {
      title: "Supervision & Professional Development",
      description: "Comprehensive BCBA/RBT supervision, competency assessment, and ethics guidance to ensure clinical quality.",
      image: "/iStock-1332728408.jpg",
      link: "/services/supervision"
    },
    {
      title: "Related Services",
      description: "Integrated collaboration among Speech, OT, PT, and SETSS professionals to support academic and behavioral progress.",
      image: "/iStock-1357352061.jpg",
      link: "/services/related-services"
    }
    ,
    {
      title: "Impartial Hearing Support",
      description: "Expert implementation of Findings of Fact and Decision (FOFD) and Impartial Hearing Officer (IHO) orders. We provide clinical documentation, expert testimony, and compliance support for families navigating the legal process to secure appropriate educational services.",
      image: "/iStock-1256025624.jpg",
      link: "/services/impartial-hearing"
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 px-4">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto px-4">
            Our multidisciplinary team provides Applied Behavior Analysis and related therapies designed for each child's environment—home, school, or community.
          </p>
        </div>
      </section>

      {/* What we do - clickable list that scrolls to details */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl font-bold mb-6" >What we do:</h2>
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
                          className="text-lg underline text-gray-700 hover:text-gray-900 text-left"
                          onClick={() => document.getElementById(s.link.replace('/services/', ''))?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
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
                          className="text-lg underline text-gray-700 hover:text-gray-900 text-left"
                          onClick={() => document.getElementById(s.link.replace('/services/', ''))?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
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
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom max-w-6xl">
          {services.map((service) => {
            const id = service.link.replace('/services/', '');
            return (
              <div key={service.title} id={id} className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="h-56 md:h-auto">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3" >{service.title}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <Link to={service.link} className="btn-secondary inline-block">Read More</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Data-Driven Note */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <p className="text-base sm:text-lg text-gray-700 text-center italic">
              <strong className="text-gray-900">Data-Driven:</strong> Every program includes systematic data collection, progress monitoring, and evidence-based decision making to ensure measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-white" style={{ backgroundColor: '#D4AF37' }}>
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 px-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Contact us to learn more about our services
          </p>
          <Link to="/contact" className="btn-secondary bg-white hover:bg-gray-100 inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

