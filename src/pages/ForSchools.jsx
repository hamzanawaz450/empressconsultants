import { Link } from 'react-router-dom';

export default function ForSchools() {
  const gold = "#D4AF37";

  return (
    <div className="min-h-screen bg-[#EFE9E3]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5F0E8] to-[#EFE9E3] section-padding">
        <div className="container-custom">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 px-4 text-black">
            For Schools
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center text-black max-w-3xl mx-auto px-4">
            Partnership model providing classroom coaching, staff training, data systems, and IEP alignment.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black">In-the-Moment Coaching</h2>
              <p className="text-base sm:text-lg text-black mb-4">
                Our partnership model bridges theory to practice through direct classroom support. We work alongside your team to integrate behavioral supports seamlessly into instruction.
              </p>
              <p className="text-base sm:text-lg text-black mb-4">
                Our team composition includes special-education teachers, BCBAs, OTs, and Speech therapists working collaboratively to support your students.
              </p>
              <ul className="space-y-3 text-black">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: gold }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pull-out and push-in behavioral consultation models</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: gold }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Integration with NYSED/DOE standards</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: gold }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Downloadable partnership brief</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/iStock-2159187467.jpg" 
                alt="School collaboration" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-black">What You Can Expect</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#F5F0E8] p-4 sm:p-6 rounded-lg shadow-md text-center border border-black/10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: gold }}>
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">Improved Staff Competence</h3>
              <p className="text-sm sm:text-base text-black">Enhanced skills in behavioral support strategies</p>
            </div>
            <div className="bg-[#F5F0E8] p-4 sm:p-6 rounded-lg shadow-md text-center border border-black/10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: gold }}>
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">Decreased Disruptions</h3>
              <p className="text-sm sm:text-base text-black">Reduced behavioral incidents in the classroom</p>
            </div>
            <div className="bg-[#F5F0E8] p-4 sm:p-6 rounded-lg shadow-md text-center border border-black/10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: gold }}>
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">Stronger Academic Engagement</h3>
              <p className="text-sm sm:text-base text-black">Increased student participation and learning outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-black" style={{ backgroundColor: gold }}>
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Partner?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 px-4 text-black">
            Request a partnership call to discuss how we can support your school
          </p>
          <Link to="/contact" className="btn-cta inline-block">
            Request a Partnership Call
          </Link>
        </div>
      </section>
    </div>
  );
}

