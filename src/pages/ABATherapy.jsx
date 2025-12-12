import { Link } from "react-router-dom";

export default function ABATherapy() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Hero Section */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom max-w-5xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
            ABA Therapy
          </h1>
          <p className="text-lg md:text-xl mb-4 text-black">
            High-quality, ethical ABA services tailored to your child&apos;s
            strengths, needs, and family culture.
          </p>
          <p className="text-base md:text-lg text-black max-w-3xl mx-auto">
            We partner with families in Westchester and the Bronx to build
            skills, reduce challenging behaviors, and increase independence
            across home, school, and community settings.
          </p>
        </div>
      </section>

      {/* Who we support */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            Who we support
          </h2>
          <p className="text-base md:text-lg mb-4 text-black">
            ABA therapy at Empress Consultants is appropriate for children and
            adolescents who may experience:
          </p>
          <ul className="list-disc list-inside space-y-2 text-black text-base md:text-lg">
            <li>Autism Spectrum Disorder or related developmental differences</li>
            <li>Behavioral challenges at home or at school</li>
            <li>Difficulties with communication, social skills, or play</li>
            <li>Transitions, routines, or daily living skills that feel hard</li>
          </ul>
        </div>
      </section>

      {/* What ABA looks like with Empress – elevated cards */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black">
            What ABA looks like with Empress
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-black/10 border-t-4 hover:scale-105"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                  style={{ backgroundColor: "#D4AF37" }}
                >
                  <span className="text-black font-bold">1</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-black">
                  Assessment &amp; goal setting
                </h3>
              </div>
              <p className="text-sm md:text-base text-black leading-relaxed">
                We begin with a comprehensive assessment that may include record
                review, caregiver interview, direct observation, and
                standardized tools. Together, we identify meaningful goals that
                align with your child&apos;s strengths, your family&apos;s
                values, and school expectations.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-black/10 border-t-4 hover:scale-105"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                  style={{ backgroundColor: "#D4AF37" }}
                >
                  <span className="text-black font-bold">2</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-black">
                  Individualized treatment plan
                </h3>
              </div>
              <p className="text-sm md:text-base text-black leading-relaxed">
                Your BCBA designs a data-driven treatment plan that targets
                functional communication, social skills, self-regulation, play,
                and daily living skills, while addressing behaviors that
                interfere with learning and quality of life.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-black/10 border-t-4 hover:scale-105"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                  style={{ backgroundColor: "#D4AF37" }}
                >
                  <span className="text-black font-bold">3</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-black">
                  Direct ABA sessions
                </h3>
              </div>
              <p className="text-sm md:text-base text-black leading-relaxed">
                Sessions are delivered in natural settings—home, school, or
                community—using reinforcement, modeling, visual supports, and
                structured practice. We focus on teaching skills your child can
                use in real life, not just at the table.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-black/10 border-t-4 hover:scale-105"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                  style={{ backgroundColor: "#D4AF37" }}
                >
                  <span className="text-black font-bold">4</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-black">
                  Family coaching &amp; collaboration
                </h3>
              </div>
              <p className="text-sm md:text-base text-black leading-relaxed">
                Caregivers are key partners in treatment. We provide ongoing
                parent coaching, practical strategies for daily routines, and
                regular communication with school teams to promote consistency
                across environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where services happen – matching card style */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black">
            Where services happen
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Home */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-black/10 border-t-4 hover:scale-105"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-lg md:text-xl font-bold mb-2 text-black">
                Home
              </h3>
              <p className="text-sm md:text-base text-black leading-relaxed">
                Coaching and intervention in the home environment to build
                routines, reduce stress, and support family functioning.
              </p>
            </div>

            {/* School */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-black/10 border-t-4 hover:scale-105"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-lg md:text-xl font-bold mb-2 text-black">
                School
              </h3>
              <p className="text-sm md:text-base text-black leading-relaxed">
                Collaboration with school teams to align IEP goals, implement
                behavior support plans, and generalize skills to the classroom.
              </p>
            </div>

            {/* Community */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-black/10 border-t-4 hover:scale-105"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-lg md:text-xl font-bold mb-2 text-black">
                Community
              </h3>
              <p className="text-sm md:text-base text-black leading-relaxed">
                Support in community settings such as playgrounds, stores, or
                extracurricular activities to promote independence and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-black">
            Our process
          </h2>
          <div className="space-y-3 text-base md:text-lg text-black max-w-3xl mx-auto">
            <p>
              <strong>1. Consultation:</strong> Brief phone or virtual call to
              learn about your concerns and determine fit.
            </p>
            <p>
              <strong>2. Intake &amp; assessment:</strong> Paperwork, consent,
              and comprehensive assessment with a BCBA.
            </p>
            <p>
              <strong>3. Treatment plan:</strong> Collaborative goal setting and
              plan review with caregivers and, when appropriate, school staff.
            </p>
            <p>
              <strong>4. Ongoing services:</strong> Direct ABA sessions, parent
              training, data review, and regular progress updates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding text-black"
        style={{ backgroundColor: "#D4AF37" }}
      >
        <div className="container-custom text-center max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to talk about ABA support for your child?
          </h2>
          <p className="text-base md:text-lg mb-6">
            Share a little about your child and your concerns, and we&apos;ll
            help you explore whether ABA therapy with Empress Consultants is the
            right fit.
          </p>
          <Link to="/contact" className="btn-cta inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
