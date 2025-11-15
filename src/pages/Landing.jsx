import { Link } from 'react-router-dom';

export default function Landing() {
  const scrollToPrinciples = () => {
    document.getElementById('principles')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Image Section */}
      <section className="relative">
        <div className="relative w-full">
          <img 
            src="/iStock-1357352061.jpg" 
            alt="Child learning with ABA therapy" 
            className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover"
          />
          {/* Read More Button Overlay - positioned like in the image */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <button
              onClick={scrollToPrinciples}
              className="btn-primary px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group text-sm sm:text-base"
            >
              <span>Read more</span>
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              At Empress Consultants, our mission is to deliver compassionate, evidence-based Applied Behavior Analysis and educational services that transform potential into progress.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Guided by the principles of ABA—<strong className="text-gray-900">individualization, data-driven decision making, functional assessment, reinforcement, and across settings</strong>—we design interventions that honor each child's strengths and empower families to sustain meaningful growth across all environments.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Our commitment is to <strong className="text-gray-900">ethical practice, measurable outcomes, and human dignity</strong>, ensuring that every program we build is as unique as the child it serves.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section id="principles" className="section-padding bg-[#EFE9E3]">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
              Our Core Principles
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              {/* Principle 1 */}
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-primary-600">
                  1. Individualization & Assessment
                </h3>
                <ul className="space-y-2 text-base sm:text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Each learner's program begins with a comprehensive functional assessment (FBA, ABLLS-R, Vineland, PEAK) to identify unique strengths, needs, and environmental variables that influence behavior.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Goals are observable, measurable, and socially significant, aligning with both family priorities and educational objectives.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Intervention plans (BIPs) are tailored and continuously refined through direct data analysis.</span>
                  </li>
                </ul>
              </div>

              {/* Principle 2 */}
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-primary-600">
                  2. Data-Driven Decision Making
                </h3>
                <ul className="space-y-2 text-base sm:text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Every session includes systematic data collection on skill acquisition and behavior reduction targets.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Our BCBAs make empirical decisions—modifying interventions only when data trends support change.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Progress is visualized through graphs, summary reports, and parent reviews to ensure transparency and accountability.</span>
                  </li>
                </ul>
              </div>

              {/* Principle 3 */}
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-primary-600">
                  3. Reinforcement & Skill Generalization Acquisition
                </h3>
                <ul className="space-y-2 text-base sm:text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Teaching emphasizes positive reinforcement to strengthen desired behaviors and promote intrinsic motivation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Skills are practiced across home, school, and community settings to ensure generalization and maintenance beyond therapy sessions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Caregivers are trained to provide consistent reinforcement systems at home, creating seamless continuity for the child.</span>
                  </li>
                </ul>
              </div>

              {/* Principle 4 */}
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-primary-600">
                  4. Functional Behavior Support
                </h3>
                <ul className="space-y-2 text-base sm:text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Challenging behaviors are addressed through Functional Behavior Assessments to identify root causes—not just surface-level symptoms.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Each Behavior Intervention Plan (BIP) includes function-based replacement behaviors, proactive strategies, and environmental supports.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>We focus on teaching adaptive alternatives that improve independence and quality of life.</span>
                  </li>
                </ul>
              </div>

              {/* Principle 5 */}
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-primary-600">
                  5. Family Empowerment
                </h3>
                <ul className="space-y-2 text-base sm:text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Families are partners in the process, not observers.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Through parent training, coaching, and real-time feedback, caregivers gain confidence applying ABA principles in daily routines.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Our goal is sustainable success—so children thrive even after formal services conclude.</span>
                  </li>
                </ul>
              </div>

              {/* Principle 6 */}
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-primary-600">
                  6. Collaboration & Integration
                </h3>
                <ul className="space-y-2 text-base sm:text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Our multidisciplinary model brings together BCBAs, educators, speech and occupational therapists for a unified plan of care.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Collaboration ensures that ABA strategies align with IEP goals, school supports, and family systems, enhancing consistency across settings.</span>
                  </li>
                </ul>
              </div>

              {/* Principle 7 */}
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-primary-600">
                  7. Ethical & Professional Excellence
                </h3>
                <ul className="space-y-2 text-base sm:text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Empress Consultants upholds the BACB Ethics Code and New York State LBA standards, ensuring integrity, respect, and informed consent in all services.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>We promote cultural responsiveness and linguistic accessibility, recognizing that every family's background enriches the intervention process.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Ongoing supervision and peer review maintain the highest clinical fidelity across our network.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <Link 
                to="/" 
                className="btn-primary inline-block text-lg px-8 py-4"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

