import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero / Intro */}
      <section className="bg-gradient-to-br from-[#F5F0E8] to-[#EFE9E3] section-padding">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
            About Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-3 text-black">
            An ABA (Applied Behavioral Analysis) agency serving children, families, and schools in
            Westchester and the Bronx.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-black">
            We provide ethical, evidence-based ABA with a focus on
            collaboration, cultural humility, and strategies that work in real
            life—not just on paper.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom max-w-6xl grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-black">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-black">
              Empress Consultants exists to support children with developmental
              and behavioral needs while honoring each family’s strengths,
              culture, and goals. We aim to make ABA accessible, understandable,
              and truly supportive of a child’s daily life.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-black">
              Our Vision
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-black">
              We envision home, school, and community environments where
              children are understood and included—and where caregivers and
              professionals feel equipped, not overwhelmed, when responding to
              needs and behaviors.
            </p>
          </div>
        </div>
      </section>

      {/* What Families Can Expect */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-black">
            What Families Can Expect
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-lg border border-black/10 border-t-4 p-6"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-lg font-bold mb-2 text-black">
                Clear Communication
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-black">
                We explain recommendations in everyday language and keep you
                updated on progress, next steps, and what we’re seeing in
                session.
              </p>
            </div>

            <div
              className="bg-[#F5F0E8] rounded-xl shadow-lg border border-black/10 border-t-4 p-6"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-lg font-bold mb-2 text-black">
                Collaborative Planning
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-black">
                We work alongside caregivers, schools, and related providers so
                goals and strategies feel aligned across settings.
              </p>
            </div>

            <div
              className="bg-[#F5F0E8] rounded-xl shadow-lg border border-black/10 border-t-4 p-6"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-lg font-bold mb-2 text-black">
                Ethical, Child-Centered Care
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-black">
                We prioritize dignity, autonomy, and meaningful outcomes. ABA
                should feel respectful and sustainable for both the child and
                the family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-black text-center">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-lg border border-black/10 border-t-4 p-6"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-lg font-bold mb-2 text-black">Inclusivity</h3>
              <p className="text-sm sm:text-base leading-relaxed text-black">
                We respect each family’s culture, identity, and lived
                experience. Services are never one-size-fits-all.
              </p>
            </div>

            <div
              className="bg-[#F5F0E8] rounded-xl shadow-lg border border-black/10 border-t-4 p-6"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-lg font-bold mb-2 text-black">
                Collaboration
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-black">
                We believe the best outcomes happen when caregivers, schools,
                and clinicians work as one team.
              </p>
            </div>

            <div
              className="bg-[#F5F0E8] rounded-xl shadow-lg border border-black/10 border-t-4 p-6"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-lg font-bold mb-2 text-black">
                Evidence-Based Practice
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-black">
                Our work is grounded in ABA principles, data, and ongoing
                professional learning, while staying responsive to each child’s
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Serve */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black text-center">
            Where We Serve
          </h2>

          <div
            className="bg-[#F5F0E8] rounded-xl shadow-lg border border-black/10 border-t-4 p-6"
            style={{ borderTopColor: "#D4AF37" }}
          >
            <p className="text-base sm:text-lg mb-4 text-black">
              Empress Consultants currently provides services in:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-black">
              <li>Westchester County, NY</li>
              <li>The Bronx, NY</li>
              <li>
                Selected surrounding areas, depending on clinician availability
              </li>
            </ul>
            <p className="mt-4 text-sm sm:text-base text-black">
              Availability may vary based on caseload and staffing. We’re happy
              to discuss your location and whether we’re able to support your
              family or school at this time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding text-black"
        style={{ backgroundColor: "#D4AF37" }}
      >
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Let&apos;s Talk About What Support Could Look Like
          </h2>
          <p className="text-base sm:text-lg mb-6">
            If you&apos;re a caregiver, educator, or provider seeking ABA
            support or collaboration, we&apos;d be honored to learn more about
            your needs.
          </p>
          <Link to="/contact" className="btn-cta inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
