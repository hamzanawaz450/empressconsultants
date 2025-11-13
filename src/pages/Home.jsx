import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#EFE9E3] section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Evidence-Based ABA and Related Services for Children Across New York
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8">
                Building confidence, communication, and independence—one skill at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/contact" className="btn-primary text-center" style={{ backgroundColor: '#C9B59C' }}>
                  Book a Consult
                </Link>
                <Link to="/schools" className="btn-secondary text-center">
                  Refer a Student
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/iStock-1357352061.jpg" 
                alt="Child learning with ABA therapy" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Core Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-primary-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Home-Based ABA Therapy</h3>
              <p className="text-gray-700">
                Individualized programming for daily routines, building communication skills, and positive behavior supports in the comfort of your home.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">School Collaboration</h3>
              <p className="text-gray-700">
                In-class coaching, data-driven plans, and IEP alignment to integrate behavioral supports within instruction.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Legal Implementation</h3>
              <p className="text-gray-700">
                Impartial-hearing, FOFD, stay-put services with expert testimony and documentation for legal compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Summary */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Measurable Results</h2>
            <p className="text-lg sm:text-xl text-gray-700">95% parent satisfaction rate</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
              <p className="text-gray-700">Parent Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">4+</div>
              <p className="text-gray-700">Skill Domains Improved</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">3</div>
              <p className="text-gray-700">Months Average Progress</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <p className="text-gray-700">Data-Driven Decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Strip */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">
            <div className="flex flex-col items-center text-center max-w-xs w-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl sm:text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Call</h3>
              <p className="text-sm sm:text-base text-gray-700">Schedule your free intake consultation</p>
            </div>
            <div className="hidden md:block text-primary-600 text-4xl">→</div>
            <div className="flex flex-col items-center text-center max-w-xs w-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl sm:text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Assessment</h3>
              <p className="text-sm sm:text-base text-gray-700">Comprehensive functional assessment and goal setting</p>
            </div>
            <div className="hidden md:block text-primary-600 text-4xl">→</div>
            <div className="flex flex-col items-center text-center max-w-xs w-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl sm:text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Start Services</h3>
              <p className="text-sm sm:text-base text-gray-700">Begin your personalized ABA program</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Parent Orientation */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">60-Second Parent Orientation</h2>
              <p className="text-base sm:text-lg text-gray-700">
                Get a quick overview of our approach and what to expect
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer">
                {/* Video Placeholder - Replace with actual video embed */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                {/* Video Thumbnail Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-700/20"></div>
                {/* Play Button */}
                <div className="relative z-10 bg-white/20 hover:bg-white/30 rounded-full p-4 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                {/* Video will be embedded here - placeholder for now */}
                {/* 
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="YOUR_VIDEO_URL_HERE"
                  title="60-Second Parent Orientation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                */}
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Our evidence-based approach to ABA therapy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>What to expect in your first consultation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>How we personalize services for each child</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Our commitment to family partnership</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  <strong>Note:</strong> Video includes captions and transcripts for accessibility (WCAG 2.2 AA compliant)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="bg-primary-600 text-white py-6 sm:py-8" style={{ backgroundColor: '#C9B59C' }}>
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-center">
            <div>
              <p className="font-semibold text-sm sm:text-base">BCBA/LBA-NY</p>
              <p className="text-xs sm:text-sm text-white/80">Board Certified</p>
            </div>
            <div className="hidden sm:block w-px h-8 md:h-12 bg-white/30"></div>
            <div>
              <p className="font-semibold text-sm sm:text-base">DOE Vendor</p>
              <p className="text-xs sm:text-sm text-white/80">Authorized Provider</p>
            </div>
            <div className="hidden sm:block w-px h-8 md:h-12 bg-white/30"></div>
            <div>
              <p className="font-semibold text-sm sm:text-base">HIPAA & FERPA Compliant</p>
              <p className="text-xs sm:text-sm text-white/80">Privacy Protected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding text-white" style={{ background: 'linear-gradient(to right, #C9B59C, #b8a589)' }}>
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Schedule Your Free Intake Consultation
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 px-4">
            Take the first step towards transforming potential into progress
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 inline-block" style={{ color: '#C9B59C' }}>
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}

