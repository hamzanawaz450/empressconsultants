import { Link } from 'react-router-dom';

export default function ABATherapy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              ABA Therapy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              Functional assessments, individualized program design, BCBA supervision, and continuous data review across home, school, and community settings.
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
                    <span><strong>Functional Behavior Assessments (FBA):</strong> Comprehensive analysis to identify the function of behaviors and environmental factors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Individualized Program Design:</strong> Customized intervention plans tailored to each child's unique needs, strengths, and goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>BCBA Supervision:</strong> Direct oversight by Board Certified Behavior Analysts ensuring treatment fidelity and quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Continuous Data Review:</strong> Systematic data collection and analysis to track progress and make data-driven program modifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Multi-Environment Support:</strong> Services delivered across home, school, and community settings for comprehensive support</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-primary-600">Our Approach</h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4">
                  Our ABA therapy services are grounded in evidence-based practices and delivered by qualified professionals. We focus on building functional skills, reducing challenging behaviors, and promoting independence across all environments.
                </p>
                <p className="text-base sm:text-lg text-gray-700">
                  Each program is designed with measurable goals, regular progress monitoring, and family involvement to ensure sustainable outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Begin ABA Therapy?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-700 px-4">
            Contact us to schedule your free intake consultation
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

