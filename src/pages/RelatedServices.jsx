import { Link } from 'react-router-dom';

export default function RelatedServices() {
  return (
    <div className="min-h-screen bg-[#EFE9E3]">
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center" style={{ color: '#000000' }}>
            Related Service Coordination (OT/PT/SLP)
          </h1>
          
          <div className="bg-[#F5F0E8] p-8 rounded-lg shadow-md mb-6 border border-black/10">
            <p className="text-lg text-black mb-6">
              Seamless collaboration between ABA and related service providers including Speech-Language Pathology, Occupational Therapy, Physical Therapy, and Special Education Teacher Support Services. We coordinate care to ensure all therapies work together toward unified goals.
            </p>
            
            <h2 className="text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>Benefits</h2>
            <ul className="space-y-2 text-black mb-6">
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Integrated service planning across disciplines</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Consistent communication between all providers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Holistic approach to child development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Alignment with IEP goals and school supports</span>
              </li>
            </ul>

            <div className="text-center">
              <Link to="/contact" className="btn-primary inline-block text-lg px-8 py-3">
                Request Services
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/" className="text-black hover:text-[#D4AF37] transition-colors" style={{ textDecoration: 'none' }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



