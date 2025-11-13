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

      {/* Services Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 text-center px-4">
              Our multidisciplinary team provides Applied Behavior Analysis and related therapies designed for each child's environment—home, school, or community.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.link} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block"
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{service.description}</p>
                    <span className="text-primary-600 font-semibold hover:text-primary-700 text-sm sm:text-base inline-flex items-center">
                      Learn More 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
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
      <section className="section-padding text-white" style={{ backgroundColor: '#C9B59C' }}>
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 px-4">
            Contact us to learn more about our services
          </p>
          <Link to="/contact" className="btn-secondary bg-white hover:bg-gray-100 inline-block" style={{ color: '#C9B59C' }}>
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

