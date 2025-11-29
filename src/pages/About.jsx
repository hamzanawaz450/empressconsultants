import React from 'react';

export default function About() {
  const [activeCard, setActiveCard] = React.useState(null);

  const handleScrollToCard = (id) => {
    setActiveCard(id);
    document.getElementById(`principle-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Remove highlight after 2 seconds
    setTimeout(() => {
      setActiveCard(null);
    }, 2000);
  };

  const principles = [
    {
      id: "individualization",
      title: "Individualization & Assessment",
      shortDesc: "Comprehensive functional assessments tailored to each learner",
      fullDesc: "Each learner's program begins with a comprehensive functional assessment (FBA, ABLLS-R, Vineland, PEAK) to identify unique strengths, needs, and environmental variables that influence behavior."
    },
    {
      id: "data-driven",
      title: "Data-Driven Decision Making",
      shortDesc: "Systematic data collection and empirical decisions",
      fullDesc: "Every session includes systematic data collection on skill acquisition and behavior reduction targets. Our BCBAs make empirical decisions—modifying interventions only when data trends support change."
    },
    {
      id: "reinforcement",
      title: "Reinforcement & Skill Generalization",
      shortDesc: "Positive reinforcement across all settings",
      fullDesc: "Teaching emphasizes positive reinforcement to strengthen desired behaviors. Skills are practiced across home, school, and community settings to ensure generalization and maintenance."
    },
    {
      id: "functional-behavior",
      title: "Functional Behavior Support",
      shortDesc: "Root cause analysis and function-based interventions",
      fullDesc: "Challenging behaviors are addressed through Functional Behavior Assessments to identify root causes. Each BIP includes function-based replacement behaviors and proactive strategies."
    },
    {
      id: "family-empowerment",
      title: "Family Empowerment",
      shortDesc: "Parent training and coaching for daily routines",
      fullDesc: "Families are partners in the process. Through parent training, coaching, and real-time feedback, caregivers gain confidence applying ABA principles in daily routines."
    },
    {
      id: "collaboration",
      title: "Collaboration & Integration",
      shortDesc: "Multidisciplinary approach for unified care",
      fullDesc: "Our multidisciplinary model brings together BCBAs, educators, speech and occupational therapists for a unified plan of care that aligns with IEP goals and family systems."
    },
    {
      id: "ethical-excellence",
      title: "Ethical & Professional Excellence",
      shortDesc: "BACB Ethics Code and cultural responsiveness",
      fullDesc: "Empress Consultants upholds the BACB Ethics Code and New York State LBA standards, ensuring integrity, respect, and informed consent in all services. We promote cultural responsiveness and linguistic accessibility, recognizing that every family's background enriches the intervention process."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">About Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Delivering ethical, evidence-based behavioral interventions that enhance independence, dignity, and inclusion.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What defines us:</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ul className="space-y-4">
              {principles.slice(0, 4).map((principle) => (
                <li key={principle.id} className="flex items-start">
                  <span className="mr-4 text-2xl">🧩</span>
                  <button
                    className="text-lg underline text-gray-700 hover:text-gray-900 text-left"
                    onClick={() => handleScrollToCard(principle.id)}
                  >
                    {principle.title}
                  </button>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {principles.slice(4).map((principle) => (
                <li key={principle.id} className="flex items-start">
                  <span className="mr-4 text-2xl">🧩</span>
                  <button
                    className="text-lg underline text-gray-700 hover:text-gray-900 text-left"
                    onClick={() => handleScrollToCard(principle.id)}
                  >
                    {principle.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto">
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
      <section id="vision" className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Vision Statement (ABA-Framed)</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 italic">
              To integrate the science of Applied Behavior Analysis with the art of compassionate teaching—creating a world where every learner develops independence, communication, and confidence through individualized, data-driven support.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Principles Sections */}
      <section className="py-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Core Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div
                key={principle.id}
                id={`principle-${principle.id}`}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-t-4 hover:scale-105 transform ${
                  activeCard === principle.id ? 'ring-4 ring-yellow-400 scale-105' : ''
                }`}
                style={{ borderTopColor: '#D4AF37' }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-3" style={{ backgroundColor: '#D4AF37' }}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {principle.fullDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#D4AF37' }}>
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
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Our Values</h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#D4AF37' }}>Integrity</h3>
              <p className="text-gray-700">Ethical practice in all we do</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#D4AF37' }}>Data Accuracy</h3>
              <p className="text-gray-700">Evidence-based decision making</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#D4AF37' }}>Cultural Competence</h3>
              <p className="text-gray-700">Respectful, inclusive service delivery</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}