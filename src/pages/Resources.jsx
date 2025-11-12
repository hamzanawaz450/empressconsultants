export default function Resources() {
  const downloadables = [
    "IEP Checklist",
    "Parent Progress Log",
    "Data Sheet Templates",
    "ABA Glossary"
  ];

  const faqs = [
    {
      question: "What is ABA?",
      answer: "Applied Behavior Analysis (ABA) is a scientific approach to understanding behavior and how it's affected by the environment. ABA therapy applies this understanding to help individuals learn new skills and reduce challenging behaviors through evidence-based interventions."
    },
    {
      question: "How are services authorized after a hearing decision?",
      answer: "After a hearing decision (FOFD/IHO order), we review the order, assign qualified providers, and begin delivering the specified compensatory hours. We maintain detailed documentation and submit progress reports as required."
    },
    {
      question: "What should I expect in the first month of therapy?",
      answer: "The first month typically includes initial assessment, goal setting, baseline data collection, and beginning intervention. You'll receive regular communication from your BCBA and see initial data collection systems being established."
    },
    {
      question: "How do you protect confidential information?",
      answer: "We strictly adhere to HIPAA and FERPA regulations. All staff are trained in privacy protocols, and we use secure systems for documentation and communication. Your family's information is protected at all times."
    },
    {
      question: "How does supervision work for my child's team?",
      answer: "Every program is overseen by a BCBA who provides regular supervision to RBTs. Supervision includes direct observation, data review, program modifications, and ensuring treatment fidelity. Parents receive regular updates on progress and supervision activities."
    }
  ];

  const videoCategories = [
    {
      title: "Getting Started with ABA",
      description: "Learn the basics of Applied Behavior Analysis and what to expect"
    },
    {
      title: "IEP Preparation for Families",
      description: "Step-by-step guide to preparing for your child's IEP meeting"
    },
    {
      title: "Daily Behavior Support at Home",
      description: "Practical strategies for implementing behavior support in daily routines"
    },
    {
      title: "Transition Planning",
      description: "How to support your child through transitions and changes"
    },
    {
      title: "Tracking Progress Effectively",
      description: "Understanding data collection and progress monitoring"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">Resources for Parents</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Tools, guides, and information to support your journey with ABA therapy
          </p>
        </div>
      </section>

      {/* Downloadables */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Downloadable Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {downloadables.map((item, index) => (
              <div 
                key={index} 
                className="bg-primary-50 p-4 sm:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item}</h3>
                <button className="mt-4 text-primary-600 hover:text-primary-700 text-xs sm:text-sm font-medium transition-colors duration-200">
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Library */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Video Library</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 text-center max-w-3xl mx-auto px-4">
            Short, captioned videos (60-90 seconds each) to help you understand and implement ABA strategies at home. All videos are captioned and transcribed for accessibility.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {videoCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg mb-4 flex items-center justify-center group cursor-pointer">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-primary-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">{category.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{category.description}</p>
                <p className="text-xs sm:text-sm text-gray-500 mb-3">60-90 second video guide</p>
                <button className="text-primary-600 hover:text-primary-700 font-medium text-sm sm:text-base transition-colors duration-200 flex items-center group">
                  Watch Video 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 bg-primary-50 p-4 sm:p-6 rounded-lg">
            <h3 className="font-semibold mb-3 text-base sm:text-lg">Additional Resources</h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>"First 30 Days of ABA" - Printable PDF Guide</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>"IEP Prep Checklist" - Step-by-step preparation guide</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>All videos include captions and transcripts for accessibility (WCAG 2.2 AA compliant)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <details 
                key={index} 
                className="bg-gray-50 p-4 sm:p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
              >
                <summary className="font-semibold text-base sm:text-lg cursor-pointer text-primary-600 hover:text-primary-700 flex items-center justify-between [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <svg 
                    className="w-5 h-5 text-primary-600 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Future Blog */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Coming Soon</h2>
          <p className="text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto px-4">
            Educational insights, system navigation updates, and helpful articles to support families and professionals.
          </p>
        </div>
      </section>
    </div>
  );
}

