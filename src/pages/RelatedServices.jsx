import { Link } from 'react-router-dom';

export default function RelatedServices() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Related Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              Integrated collaboration among Speech, OT, PT, and SETSS professionals to support academic and behavioral progress.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-primary-600">What We Provide</h2>
                <ul className="space-y-3 text-base sm:text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Speech Therapy:</strong> Collaboration with licensed speech-language pathologists to address communication needs alongside behavioral goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Occupational Therapy (OT):</strong> Integrated support for fine motor skills, sensory processing, and daily living activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Physical Therapy (PT):</strong> Coordination with physical therapists to support gross motor development and mobility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Special Education Teacher Support Services (SETSS):</strong> Collaboration with special educators to align academic and behavioral interventions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Integrated Service Planning:</strong> Unified approach ensuring all therapies work together toward common goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Cross-Disciplinary Communication:</strong> Regular team meetings and shared documentation to ensure cohesive service delivery</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-primary-600">Our Approach</h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4">
                  We recognize that children benefit most when all their service providers work together. Our related services model ensures seamless collaboration between ABA, speech, occupational, and physical therapy professionals.
                </p>
                <p className="text-base sm:text-lg text-gray-700">
                  Through integrated planning and regular communication, we create a unified approach that addresses academic, behavioral, and developmental needs holistically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Interested in Related Services?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-700 px-4">
            Contact us to learn more about our integrated service approach
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-block" style={{ backgroundColor: '#C9B59C' }}>
              Book a Consultation
            </Link>
            <Link to="/services" className="btn-secondary inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

