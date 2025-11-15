import { Link } from 'react-router-dom';

export default function ABATherapy() {
  return (
    <div className="min-h-screen bg-[#EFE9E3]">
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center" style={{ color: '#000000' }}>
            ABA Therapy
          </h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-6">
            <p className="text-lg text-gray-700 mb-6">
              Evidence-based Applied Behavior Analysis delivered by Board Certified Behavior Analysts. We provide individualized programming with functional assessments, data-driven interventions, and continuous progress monitoring across home, school, and community settings.
            </p>
            
            <h2 className="text-xl font-semibold mb-3" style={{ color: '#000000' }}>Who Benefits</h2>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Children with autism spectrum disorder</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Students with developmental delays or behavioral challenges</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Families seeking skill-building and behavior support</span>
              </li>
            </ul>

            <div className="text-center">
              <Link to="/contact" className="btn-primary inline-block text-lg px-8 py-3">
                Request ABA Services
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/" className="text-gray-600 transition-colors" style={{ textDecoration: 'none' }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


