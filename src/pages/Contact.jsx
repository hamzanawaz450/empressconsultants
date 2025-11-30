import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    role: '',
    name: '',
    childAge: '',
    location: '',
    service: '',
    preferredTimes: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5F0E8] to-[#EFE9E3] section-padding">
        <div className="container-custom text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4 text-black">Contact / Book a Consult</h1>
          <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto px-4">
            Get started with a free intake consultation. We'll route your inquiry to the appropriate team.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#F5F0E8] p-6 rounded-lg mb-6 border-t-4 border border-black/10" style={{ borderTopColor: '#D4AF37' }}>
              <p className="text-xs sm:text-sm text-black">
                <strong>Secure Form:</strong> No PHI beyond initial intake required. Your information is protected and will be routed to the appropriate team (clinical, legal, or administrative).
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 bg-[#F5F0E8] border-t-4 p-4 sm:p-6 md:p-8 rounded-lg shadow-md mx-4 sm:mx-0 border border-black/10" style={{ borderTopColor: '#D4AF37' }}>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  I am a: <span className="text-[#D4AF37]">*</span>
                </label>
                <select 
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-black/20 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-[#EFE9E3] text-black"
                  required
                >
                  <option value="">Select...</option>
                  <option value="parent">Parent/Caregiver</option>
                  <option value="school">School/Educator</option>
                  <option value="attorney">Attorney/Advocate</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Full Name <span className="text-[#D4AF37]">*</span>
                </label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-black/20 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-[#EFE9E3] text-black"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Child's Age (if applicable)
                  </label>
                  <input 
                    type="text"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-black/20 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-[#EFE9E3] text-black"
                    placeholder="e.g., 5 years old"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Location <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input 
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-black/20 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-[#EFE9E3] text-black"
                    placeholder="City, State"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Service Requested <span className="text-[#D4AF37]">*</span>
                </label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-black/20 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-[#EFE9E3] text-black"
                  required
                >
                  <option value="">Select a service...</option>
                  <option value="aba-therapy">ABA Therapy</option>
                  <option value="parent-training">Parent Training</option>
                  <option value="school-consultation">School Consultation</option>
                  <option value="legal-implementation">Legal Implementation</option>
                  <option value="supervision">Supervision & Professional Development</option>
                  <option value="related-services">Related Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Preferred Contact Times
                </label>
                <textarea 
                  name="preferredTimes"
                  value={formData.preferredTimes}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-black/20 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-[#EFE9E3] text-black"
                  rows="2"
                  placeholder="e.g., Weekdays 9am-5pm"
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Email <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-black/20 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-[#EFE9E3] text-black"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Phone
                  </label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-black/20 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-[#EFE9E3] text-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Additional Message
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-black/20 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-[#EFE9E3] text-black"
                  rows="4"
                  placeholder="Tell us more about your needs..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-black">Other Ways to Reach Us</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#D4AF37' }}>
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-black">Phone</h3>
                <p className="text-black">(646) 769-0706</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#D4AF37' }}>
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-black">Email</h3>
                <p className="text-black">info@empress-consultants.com</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#D4AF37' }}>
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-black">Location</h3>
                <p className="text-black">New York, NY</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-Confirmation */}
      <section className="section-padding text-black" style={{ backgroundColor: '#D4AF37' }}>
        <div className="container-custom text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">What Happens Next?</h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto px-4 text-black/90">
            After you submit your inquiry, you'll receive an auto-confirmation message. Our team will review your request and contact you within 24-48 hours to schedule your consultation.
          </p>
        </div>
      </section>
    </div>
  );
}

