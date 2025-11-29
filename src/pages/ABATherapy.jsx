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
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Empress Consultants, we utilize <strong>Applied Behavior Analysis (ABA)</strong>—the leading, research-supported methodology shown to create meaningful, lasting behavior change for individuals with autism and related developmental needs. ABA focuses on building socially significant skills across communication, social development, academics, adaptive functioning, and daily living.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our approach incorporates evidence-based ABA methods such as <strong>Natural Environment Teaching (NET)</strong>, <strong>Discrete Trial Training (DTT)</strong>, <strong>Incidental Teaching</strong>, and individualized <strong>Behavior Management strategies</strong>. Each intervention is designed by analyzing antecedents, behaviors, and consequences to promote positive and functional behavior change.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Although all ABA programs stem from the same scientific principles and the 7 Dimensions of ABA, every child's plan is highly individualized. We consider each learner's strengths, challenges, motivation, and learning style to create a programming path tailored specifically to their needs.
            </p>

            <h2 className="text-2xl font-bold mb-6" style={{ color: '#000000' }}>
              The 7 Dimensions of ABA
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#000000' }}>Applied</h3>
                <p className="text-gray-700">
                  Goals must be socially meaningful and relevant to the child's life.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#000000' }}>Behavioral</h3>
                <p className="text-gray-700">
                  Targets focus on observable, measurable actions to ensure clarity and consistency.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#000000' }}>Analytic</h3>
                <p className="text-gray-700">
                  Data is collected continuously and used to guide decision-making during every ABA session.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#000000' }}>Effective</h3>
                <p className="text-gray-700">
                  Interventions are monitored for demonstrated improvement. If data show limited progress, strategies are revised to ensure success.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#000000' }}>Generalization</h3>
                <p className="text-gray-700">
                  Skills must transfer across people, materials, environments, and situations. Our programs prioritize generalization to ensure long-term functional use.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#000000' }}>Technological</h3>
                <p className="text-gray-700">
                  Procedures are clearly defined and replicable, allowing for consistent implementation across settings and providers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#000000' }}>Conceptually Systematic</h3>
                <p className="text-gray-700">
                  All interventions are rooted in established principles of behavior analysis and learning theory.
                </p>
              </div>
            </div>

            {/* <div className="text-center">
              <Link to="/contact" className="btn-primary inline-block text-lg px-8 py-3">
                Request ABA Services
              </Link>
            </div> */}
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



