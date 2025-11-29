export default function Compliance() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5F0E8] to-[#EFE9E3] section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Compliance & Privacy</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Your privacy and data protection are our top priorities
          </p>
        </div>
      </section>

      {/* HIPAA Notice */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-black">HIPAA Notice (Plain-Language Summary)</h2>
            <div className="bg-[#F5F0E8] p-6 rounded-lg mb-6 border border-black/10">
              <p className="text-black mb-4">
                The Health Insurance Portability and Accountability Act (HIPAA) protects your health information. At Empress Consultants, we:
              </p>
              <ul className="space-y-2 text-black">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#D4AF37] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Only use and share your health information for treatment, payment, and healthcare operations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#D4AF37] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Obtain your written authorization before sharing information for other purposes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#D4AF37] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Maintain secure systems and train all staff on privacy protection</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#D4AF37] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Provide you access to your records and the right to request corrections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FERPA Notice */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-black">FERPA Notice (Plain-Language Summary)</h2>
            <div className="bg-[#EFE9E3] p-6 rounded-lg shadow-md border border-black/10">
              <p className="text-black mb-4">
                The Family Educational Rights and Privacy Act (FERPA) protects student education records. When we work with schools, we:
              </p>
              <ul className="space-y-2 text-black">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#D4AF37] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Only access education records with proper authorization from parents or schools</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#D4AF37] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Maintain confidentiality of all student information</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#D4AF37] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Follow DOE protocols for record sharing and documentation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#D4AF37] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ensure parents have access to their child's records as required by law</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-black">Accessibility Statement</h2>
            <div className="bg-[#F5F0E8] p-6 rounded-lg border border-black/10">
              <p className="text-black mb-4">
                Empress Consultants is committed to ensuring digital accessibility for people with disabilities. We strive to meet WCAG 2.2 AA standards, which means our website and digital resources:
              </p>
              <ul className="space-y-2 text-black">
                <li>• Include captions and transcripts for all video content</li>
                <li>• Use clear, readable fonts and sufficient color contrast</li>
                <li>• Are navigable using keyboard-only controls</li>
                <li>• Include alt text for images</li>
                <li>• Are compatible with screen readers</li>
              </ul>
              <p className="text-black mt-4">
                If you encounter any accessibility barriers, please contact us at info@empress-consultants.com or (646) 769-0706.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-black">Terms of Service and Data Use Policy</h2>
            <div className="bg-[#EFE9E3] p-6 rounded-lg shadow-md space-y-4 text-black border border-black/10">
              <p>
                By using our website and services, you agree to our terms of service. We collect only necessary information to provide services and do not sell your personal information to third parties.
              </p>
              <p>
                All data is stored securely and used only for the purposes of service delivery, billing, and compliance with legal requirements.
              </p>
              <p>
                You have the right to access, correct, or delete your personal information by contacting us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-[#F5F0E8] border-l-4 border-[#D4AF37] p-6 rounded-lg border border-black/10">
              <h3 className="text-xl font-semibold mb-2 text-black">Important Disclaimer</h3>
              <p className="text-black">
                The content on this website is for informational purposes only and does not constitute therapeutic advice. 
                Individual assessment and treatment planning require direct consultation with qualified professionals. 
                Please consult with a licensed BCBA or healthcare provider for personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="section-padding text-black" style={{ backgroundColor: '#D4AF37' }}>
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About Privacy or Compliance?</h2>
          <p className="text-black/90 mb-6 max-w-2xl mx-auto">
            Contact us if you have questions about our privacy practices, data use, or compliance policies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@empress-consultants.com" className="btn-secondary inline-block">
              Email Us
            </a>
            <a href="tel:6467690706" className="btn-secondary inline-block">
              Call (646) 769-0706
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

