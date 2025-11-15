import { Link } from 'react-router-dom';

export default function Supervision() {
  return (
    <div className="min-h-screen bg-[#EFE9E3]">
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center" style={{ color: '#000000' }}>
            Supervision (BCBA/LBA)
          </h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-6">
            <p className="text-lg text-gray-700 mb-6">
              Professional supervision for behavior analysts and technicians pursuing certification or maintaining credentials. We provide competency assessments, ethics guidance, and clinical quality assurance to ensure the highest standards of practice.
            </p>
            
            <h2 className="text-xl font-semibold mb-3" style={{ color: '#000000' }}>Who It Supports</h2>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>BCBA candidates pursuing certification</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Licensed Behavior Analysts (LBA-NY)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Registered Behavior Technicians (RBT)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Professionals seeking continuing education</span>
              </li>
            </ul>

            <div className="text-center">
              <Link to="/contact" className="btn-primary inline-block text-lg px-8 py-3">
                Request Supervision
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


