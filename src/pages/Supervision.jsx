import { Link } from 'react-router-dom';

export default function Supervision() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Supervision & Professional Development
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              Comprehensive BCBA/RBT supervision, competency assessment, and ethics guidance to ensure clinical quality.
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
                    <span><strong>BCBA Supervision:</strong> Comprehensive supervision for Board Certified Behavior Analysts pursuing certification or maintaining credentials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>RBT Supervision:</strong> Ongoing supervision and support for Registered Behavior Technicians to ensure treatment fidelity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Competency Assessment:</strong> Regular evaluation of clinical skills and knowledge to maintain high standards of practice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Ethics Guidance:</strong> Training and support on BACB Ethics Code and professional conduct standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Clinical Quality Assurance:</strong> Regular review of case management, data collection, and intervention implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Professional Development:</strong> Continuing education opportunities and skill-building workshops</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-primary-600">Our Approach</h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4">
                  We are committed to supporting the professional growth of behavior analysts and technicians. Our supervision model emphasizes ethical practice, clinical excellence, and continuous improvement.
                </p>
                <p className="text-base sm:text-lg text-gray-700">
                  Through structured supervision, competency assessments, and ongoing professional development, we ensure that all team members deliver the highest quality services to children and families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Interested in Supervision Services?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-700 px-4">
            Contact us to discuss supervision and professional development opportunities
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

