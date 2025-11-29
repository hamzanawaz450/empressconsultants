import { Link } from 'react-router-dom';

export default function ForParents() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5F0E8] to-[#EFE9E3] section-padding">
        <div className="container-custom">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 px-4 text-black">
            For Parents
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center text-black max-w-3xl mx-auto px-4">
            Short video library and downloadable guides covering practical strategies for home.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black">Video Library & Guides</h2>
              <p className="text-base sm:text-lg text-black mb-4">
                Educate and retain families through short media. Each clip is 60-90 seconds, captioned, and transcribed.
              </p>
              <p className="text-base sm:text-lg text-black mb-4">
                Supplement with printable PDFs like "First 30 Days of ABA" and "IEP Prep Checklist" to support your journey.
              </p>
              <ul className="space-y-3 text-black">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#D4AF37] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Getting Started with ABA</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#D4AF37] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everyday Behavior Strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#D4AF37] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Understanding Your Child's IEP</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#D4AF37] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Data Collection at Home</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#D4AF37] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Managing Transitions and Meltdowns</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/iStock-1282884529.jpg" 
                alt="Parent training and education" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-black">What You Get</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#EFE9E3] p-4 sm:p-6 rounded-lg shadow-md text-center border border-black/10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#D4AF37' }}>
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">Short Video Clips</h3>
              <p className="text-sm sm:text-base text-black">60-90 second videos, captioned and transcribed</p>
            </div>
            <div className="bg-[#EFE9E3] p-4 sm:p-6 rounded-lg shadow-md text-center border border-black/10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#D4AF37' }}>
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">Downloadable Guides</h3>
              <p className="text-sm sm:text-base text-black">Printable PDFs and practical checklists</p>
            </div>
            <div className="bg-[#EFE9E3] p-4 sm:p-6 rounded-lg shadow-md text-center border border-black/10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#D4AF37' }}>
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">Practical Strategies</h3>
              <p className="text-sm sm:text-base text-black">Easy-to-implement techniques for everyday challenges</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-black" style={{ backgroundColor: '#D4AF37' }}>
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 px-4 text-black/90">
            Access our parent resources and schedule your consultation
          </p>
          <Link to="/contact" className="btn-secondary inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}