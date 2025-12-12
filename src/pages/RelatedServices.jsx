import { Link } from "react-router-dom";

export default function RelatedServices() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Hero */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom max-w-5xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
            Related Services Coordination
          </h1>
          <p className="text-lg sm:text-xl text-black mb-4">
            Aligning ABA with Speech, OT, PT, and educational supports so
            children receive cohesive, whole-child care.
          </p>
          <p className="text-base sm:text-lg text-black/90 max-w-3xl mx-auto">
            Empress Consultants collaborates with school teams and community
            providers so goals, strategies, and communication feel connected—
            not fragmented across settings.
          </p>
        </div>
      </section>

      {/* How we coordinate */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-black">
            How we coordinate related services
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 1 */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-md p-6 border-t-4 border border-black/10"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                1. Shared goals &amp; plans
              </h3>
              <p className="text-base text-black leading-relaxed">
                We review IEPs, treatment plans, and school reports to identify
                shared priorities and ensure that behavior, academic, and
                therapy goals are working in the same direction.
              </p>
            </div>

            {/* 2 */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-md p-6 border-t-4 border border-black/10"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                2. Team communication
              </h3>
              <p className="text-base text-black leading-relaxed">
                With caregiver consent, we coordinate with Speech, OT, PT,
                SETSS, and school staff to share data, discuss progress, and
                problem-solve around challenges.
              </p>
            </div>

            {/* 3 */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-md p-6 border-t-4 border border-black/10"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                3. Consistent supports across settings
              </h3>
              <p className="text-base text-black leading-relaxed">
                Strategies are adapted so they make sense at home, in school,
                and in the community. We focus on practical supports that
                teachers, therapists, and families can actually use.
              </p>
            </div>

            {/* 4 */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-md p-6 border-t-4 border border-black/10"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                4. Data-informed decisions
              </h3>
              <p className="text-base text-black leading-relaxed">
                We review data from multiple providers and settings so
                adjustments to services are based on patterns—not just one
                moment or one report.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we collaborate with */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-black">
            Who we collaborate with
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-black">
                Clinical &amp; educational providers
              </h3>
              <ul className="list-disc list-inside space-y-2 text-black">
                <li>Speech-Language Pathologists</li>
                <li>Occupational &amp; Physical Therapists</li>
                <li>SETSS / special education teachers</li>
                <li>School psychologists and counselors</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-black">
                Families &amp; school teams
              </h3>
              <ul className="list-disc list-inside space-y-2 text-black">
                <li>Caregivers seeking clearer coordination of services</li>
                <li>Schools wanting ABA consultation for complex cases</li>
                <li>
                  Teams needing support aligning behavior plans with classroom
                  expectations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact note */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom max-w-4xl">
          <div className="bg-[#F5F0E8] p-6 sm:p-8 rounded-lg shadow-md border border-black/10">
            <p className="text-base sm:text-lg text-black text-center">
              <strong className="text-black">The goal:</strong> to reduce
              overwhelm for families and providers by creating one clear,
              child-centered picture of support—so services feel connected and
              sustainable over time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding text-black"
        style={{ backgroundColor: "#D4AF37" }}
      >
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Want help coordinating services?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 px-4 text-black">
            Share your child&apos;s current services and concerns, and we&apos;ll
            help you explore whether related services coordination with Empress
            Consultants is a good fit.
          </p>
          <Link to="/contact" className="btn-cta inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
