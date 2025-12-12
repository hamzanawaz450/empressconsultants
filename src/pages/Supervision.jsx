import { Link } from "react-router-dom";

export default function Supervision() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Hero */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom max-w-5xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
            Supervision &amp; Professional Development
          </h1>
          <p className="text-lg sm:text-xl text-black mb-4">
            High-quality BCBA/RBT supervision and clinical coaching with a focus
            on ethics, cultural humility, and strong case conceptualization.
          </p>
          <p className="text-base sm:text-lg text-black/90 max-w-3xl mx-auto">
            Empress Consultants partners with developing clinicians to build
            confident, thoughtful practice&nbsp;— not “check-the-box” hours.
          </p>
        </div>
      </section>

      {/* What supervision includes */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-black">
            What supervision looks like with Empress
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 1 */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-md p-6 border-t-4 border border-black/10"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                1. Structured BCBA/RBT supervision
              </h3>
              <p className="text-base text-black leading-relaxed">
                Individual and small-group meetings focused on case review,
                treatment planning, data analysis, and problem-solving for
                complex behavior.
              </p>
            </div>

            {/* 2 */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-md p-6 border-t-4 border border-black/10"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                2. Applied skill-building
              </h3>
              <p className="text-base text-black leading-relaxed">
                Supervision emphasizes real-session application: conducting
                assessments, writing behavior plans, training staff, and
                coaching families in practical, trauma-sensitive ways.
              </p>
            </div>

            {/* 3 */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-md p-6 border-t-4 border border-black/10"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                3. Ethics &amp; cultural responsiveness
              </h3>
              <p className="text-base text-black leading-relaxed">
                Regular reflection on BACB ethics, boundaries, and equitable,
                culturally informed practice for children and families in New
                York communities.
              </p>
            </div>

            {/* 4 */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-md p-6 border-t-4 border border-black/10"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                4. Documentation &amp; exam readiness
              </h3>
              <p className="text-base text-black leading-relaxed">
                Support with clinical documentation, goal-writing, progress
                reports, and preparation for certification or licensing exams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it serves */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-black">
            Who we supervise
          </h2>

          <p className="text-base sm:text-lg text-black text-center max-w-3xl mx-auto mb-6">
            Supervision &amp; professional development are designed for:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-2 text-black">
              <li>BCBA/BCaBA candidates seeking supervised fieldwork</li>
              <li>
                Licensed/credentialed clinicians who want deeper ABA consultation
              </li>
              <li>RBTs looking to strengthen core behavior-analytic skills</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-black">
              <li>
                School- or agency-based providers needing case-specific support
              </li>
              <li>
                Teams wanting training on ABA, behavior support, or collaboration
                with families and schools
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom max-w-4xl">
          <div className="bg-[#F5F0E8] p-6 sm:p-8 rounded-lg shadow-md border border-black/10">
            <p className="text-base sm:text-lg text-black text-center">
              <strong className="text-black">High-accountability, high-support:</strong>{" "}
              We align supervision with BACB requirements, provide clear
              expectations and feedback, and keep the focus on ethical,
              sustainable clinical work.
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
            Interested in supervision or consultation?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 px-4 text-black">
            Tell us about your role, your setting, and what you&apos;re looking
            for, and we&apos;ll explore a supervision or training plan that fits.
          </p>
          <Link to="/contact" className="btn-cta inline-block">
            Connect with Empress
          </Link>
        </div>
      </section>
    </div>
  );
}
