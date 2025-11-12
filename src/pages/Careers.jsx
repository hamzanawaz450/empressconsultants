export default function Careers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers / Contractors</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join our values-based network focused on collaboration and professional growth
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Join Empress Consultants?</h2>
            <p className="text-lg text-gray-700 mb-8">
              We're building a network of dedicated professionals who share our commitment to ethical practice, evidence-based interventions, and meaningful outcomes. Our team values collaboration, continuous learning, and making a real difference in the lives of children and families.
            </p>
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-600">BCBA (Board Certified Behavior Analyst)</h3>
              <p className="text-gray-700 mb-4">
                Lead assessment, program development, and supervision. Requires BCBA certification and NY LBA license.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Functional behavior assessments</li>
                <li>• Program design and oversight</li>
                <li>• RBT supervision</li>
                <li>• Family training and collaboration</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-600">RBT (Registered Behavior Technician)</h3>
              <p className="text-gray-700 mb-4">
                Direct service delivery under BCBA supervision. Requires RBT certification.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Direct ABA therapy sessions</li>
                <li>• Data collection</li>
                <li>• Implementation of behavior plans</li>
                <li>• Home, school, and community settings</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-600">Speech Therapist</h3>
              <p className="text-gray-700 mb-4">
                Licensed speech-language pathologist for integrated service delivery.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Communication assessment and therapy</li>
                <li>• Collaboration with ABA team</li>
                <li>• IEP goal alignment</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-600">Occupational Therapist</h3>
              <p className="text-gray-700 mb-4">
                Licensed OT for sensory and motor skill development.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Sensory integration therapy</li>
                <li>• Fine motor skill development</li>
                <li>• Collaborative programming</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
              <h3 className="text-xl font-semibold mb-3 text-primary-600">Special Educator (SETSS)</h3>
              <p className="text-gray-700 mb-4">
                Special Education Teacher Support Services provider for academic support.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Academic instruction aligned with IEP goals</li>
                <li>• Integration with behavioral supports</li>
                <li>• School-based service delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Apply Now</h2>
            <form className="space-y-6 bg-gray-50 p-8 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">License/Credential</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="e.g., BCBA, RBT, SLP, OT"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Position of Interest</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>BCBA</option>
                  <option>RBT</option>
                  <option>Speech Therapist</option>
                  <option>Occupational Therapist</option>
                  <option>Special Educator (SETSS)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                <textarea 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  rows="3"
                  placeholder="Days and times available"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Resume Upload</label>
                <input 
                  type="file" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  accept=".pdf,.doc,.docx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Compliance Notice */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-4">Compliance Notice</h2>
          <p className="text-primary-100 max-w-2xl mx-auto">
            All contractors are subject to background checks and credential verification. We maintain the highest standards of professional integrity and clinical quality.
          </p>
        </div>
      </section>
    </div>
  );
}

