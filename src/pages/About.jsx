export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">About Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Delivering ethical, evidence-based behavioral interventions that enhance independence, dignity, and inclusion.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              At Empress Consultants, our mission is to deliver compassionate, evidence-based Applied Behavior Analysis and educational services that transform potential into progress.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              Guided by the principles of ABA—<strong>individualization, data-driven decision making, functional assessment, reinforcement, and across settings</strong>—we design interventions that honor each child's strengths and empower families to sustain meaningful growth across all environments.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              Our commitment is to <strong>ethical practice, measurable outcomes, and human dignity</strong>, ensuring that every program we build is as unique as the child it serves.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Vision Statement (ABA-Framed)</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 italic">
              To integrate the science of Applied Behavior Analysis with the art of compassionate teaching—creating a world where every learner develops independence, communication, and confidence through individualized, data-driven support.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Core Principles</h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-primary-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">1. Individualization & Assessment</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Each learner's program begins with a comprehensive functional assessment (FBA, ABLLS-R, Vineland, PEAK) to identify unique strengths, needs, and environmental variables that influence behavior.
              </p>
            </div>
            <div className="bg-primary-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">2. Data-Driven Decision Making</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Every session includes systematic data collection on skill acquisition and behavior reduction targets. Our BCBAs make empirical decisions—modifying interventions only when data trends support change.
              </p>
            </div>
            <div className="bg-primary-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">3. Reinforcement & Skill Generalization</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Teaching emphasizes positive reinforcement to strengthen desired behaviors. Skills are practiced across home, school, and community settings to ensure generalization and maintenance.
              </p>
            </div>
            <div className="bg-primary-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">4. Functional Behavior Support</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Challenging behaviors are addressed through Functional Behavior Assessments to identify root causes. Each BIP includes function-based replacement behaviors and proactive strategies.
              </p>
            </div>
            <div className="bg-primary-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">5. Family Empowerment</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Families are partners in the process. Through parent training, coaching, and real-time feedback, caregivers gain confidence applying ABA principles in daily routines.
              </p>
            </div>
            <div className="bg-primary-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">6. Collaboration & Integration</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Our multidisciplinary model brings together BCBAs, educators, speech and occupational therapists for a unified plan of care that aligns with IEP goals and family systems.
              </p>
            </div>
            <div className="bg-primary-50 p-4 sm:p-6 rounded-lg md:col-span-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">7. Ethical & Professional Excellence</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Empress Consultants upholds the BACB Ethics Code and New York State LBA standards, ensuring integrity, respect, and informed consent in all services. We promote cultural responsiveness and linguistic accessibility, recognizing that every family's background enriches the intervention process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Leadership</h2>
          <div className="max-w-2xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md mx-4 sm:mx-auto">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl sm:text-3xl font-bold">MT</span>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold">Maria Torres, BCBA, LBA-NY</h3>
                <p className="text-sm sm:text-base text-gray-600">Founder & CEO, Empress-Consultants, LLC</p>
              </div>
            </div>
            <div className="border-t pt-6">
              <p className="text-gray-700 mb-4">
                <strong>Phone:</strong> (646) 769-0706
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> info.empressconsultants@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Our Values</h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary-600 mb-2">Integrity</h3>
              <p className="text-gray-700">Ethical practice in all we do</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary-600 mb-2">Data Accuracy</h3>
              <p className="text-gray-700">Evidence-based decision making</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary-600 mb-2">Cultural Competence</h3>
              <p className="text-gray-700">Respectful, inclusive service delivery</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

