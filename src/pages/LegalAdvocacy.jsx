export default function LegalAdvocacy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5F0E8] to-[#EFE9E3] section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-black">
            Legal & Advocacy
          </h1>
          <p className="text-xl text-center text-black max-w-3xl mx-auto">
            Clinical and legal support resource for FOFD/IHO implementation, expert testimony, and documentation audits.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-black">Our Legal Services</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#F5F0E8] p-6 rounded-lg border border-black/10">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>FOFD/IHO Implementation</h3>
              <p className="text-black">
                Expert implementation of Findings of Fact and Decision (FOFD) and Impartial Hearing Officer (IHO) orders with full compliance documentation.
              </p>
            </div>
            <div className="bg-[#F5F0E8] p-6 rounded-lg border border-black/10">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>Expert Testimony</h3>
              <p className="text-black">
                Professional testimony and expert reports structured for legal proceedings, with clear timelines and evidence-based recommendations.
              </p>
            </div>
            <div className="bg-[#F5F0E8] p-6 rounded-lg border border-black/10">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>Documentation Audits</h3>
              <p className="text-black">
                Comprehensive review of service delivery documentation to ensure compliance with legal requirements and standards.
              </p>
            </div>
            <div className="bg-[#F5F0E8] p-6 rounded-lg border border-black/10">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>Progress Reporting</h3>
              <p className="text-black">
                Timely submission of progress reports and documentation for legal compliance and case support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">Review Order</h3>
                  <p className="text-black">Thorough analysis of FOFD/IHO orders and legal requirements</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">Assign Provider</h3>
                  <p className="text-black">Matching qualified BCBA and RBT providers to case requirements</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">Deliver Compensatory Hours</h3>
                  <p className="text-black">Implementation of services as specified in the order</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">Progress Report</h3>
                  <p className="text-black">Comprehensive documentation of progress and outcomes</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">Submission</h3>
                  <p className="text-black">Timely submission of all required documentation for legal compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Compliance & Standards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#F5F0E8] rounded-lg border border-black/10">
              <h3 className="font-semibold mb-2 text-black">NYSED Protocols</h3>
              <p className="text-sm text-black">Full compliance with New York State Education Department standards</p>
            </div>
            <div className="text-center p-6 bg-[#F5F0E8] rounded-lg border border-black/10">
              <h3 className="font-semibold mb-2 text-black">Medicaid Compliance</h3>
              <p className="text-sm text-black">Adherence to all Medicaid billing and documentation requirements</p>
            </div>
            <div className="text-center p-6 bg-[#F5F0E8] rounded-lg border border-black/10">
              <h3 className="font-semibold mb-2 text-black">DOE Vendor Protocols</h3>
              <p className="text-sm text-black">Authorized vendor following Department of Education guidelines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Distinctions */}
      <section className="section-padding text-black" style={{ backgroundColor: '#D4AF37' }}>
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Bilingual Capacity</h3>
              <p className="text-black/90">Services available in multiple languages</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Cultural Competence</h3>
              <p className="text-black/90">Respectful, culturally responsive service delivery</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Timely Reporting</h3>
              <p className="text-black/90">Fast turnaround on documentation and reports</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

