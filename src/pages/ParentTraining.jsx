import { Link } from 'react-router-dom';

export default function ParentTraining() {
  return (
    <div className="min-h-screen bg-[#EFE9E3]">
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center" style={{ color: '#000000' }}>
            Parent Training
          </h1>
          
          <div className="bg-[#F5F0E8] p-8 rounded-lg shadow-md mb-6 border border-black/10">
            <p className="text-lg text-black mb-6">
              Hands-on coaching and digital learning modules that empower parents to implement ABA strategies at home. Learn reinforcement techniques, create structure, and build consistency within everyday routines like meals, bedtime, and transitions.
            </p>
            
            <h2 className="text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>Benefit Summary</h2>
            <ul className="space-y-2 text-black mb-6">
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Gain confidence applying evidence-based strategies</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Create sustainable behavior change at home</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Strengthen family routines and reduce stress</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#D4AF37' }}>•</span>
                <span>Support your child's progress between therapy sessions</span>
              </li>
            </ul>

            <div className="text-center">
              <Link to="/contact" className="btn inline-block text-lg px-8 py-3">
                Book Parent Training
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



