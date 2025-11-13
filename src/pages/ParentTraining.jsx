import { Link } from 'react-router-dom';

export default function ParentTraining() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Parent Training
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              Coaching and digital modules that teach reinforcement strategies, structure, and consistency within everyday routines.
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
                    <span><strong>One-on-One Coaching:</strong> Personalized guidance from BCBAs to help you implement ABA strategies at home</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Digital Learning Modules:</strong> Accessible online resources covering key ABA principles and techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Reinforcement Strategies:</strong> Learn how to effectively use positive reinforcement to strengthen desired behaviors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Structure & Consistency:</strong> Guidance on creating predictable routines and maintaining consistency across environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Everyday Routine Integration:</strong> Practical strategies for applying ABA principles during daily activities like meals, bedtime, and transitions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-primary-600">Our Approach</h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4">
                  We believe that parents are the most important teachers in their child's life. Our parent training program empowers you with the knowledge and skills to support your child's growth every day.
                </p>
                <p className="text-base sm:text-lg text-gray-700">
                  Through hands-on coaching and accessible digital resources, you'll learn evidence-based strategies that create lasting positive change in your family's daily life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Parent Training?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-700 px-4">
            Contact us to learn more about our parent training programs
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

