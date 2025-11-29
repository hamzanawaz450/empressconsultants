import { Link } from 'react-router-dom';

export default function ImpartialHearing() {
  return (
    <div className="min-h-screen bg-[#EFE9E3]">
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center" style={{ color: '#000000' }}>
            Impartial Hearing Support
          </h1>
          
          <div className="bg-[#F5F0E8] p-8 rounded-lg shadow-md mb-6 border border-black/10">
            <p className="text-lg text-black mb-6">
              Expert implementation of Findings of Fact and Decision (FOFD) and Impartial Hearing Officer (IHO) orders. We provide clinical documentation, expert testimony, and compliance support for families navigating the legal process to secure appropriate educational services.
            </p>
            
            <h2 className="text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>What We Offer</h2>
            <ul className="space-y-2 text-black mb-6">
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Implementation of IHO orders and compensatory services</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Expert testimony and professional reports</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Documentation audits and compliance review</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Timely progress reporting for legal proceedings</span>
              </li>
            </ul>

            <div className="text-center">
              <Link to="/contact" className="btn-primary inline-block text-lg px-8 py-3">
                Discuss Your Case
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
