import { Link } from "react-router-dom";

export default function ParentTraining() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Hero */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom max-w-5xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
            Parent Training
          </h1>
          <p className="text-lg sm:text-xl text-black mb-4">
            Practical, compassionate coaching so caregivers feel confident
            supporting their child at home, at school, and in the community.
          </p>
          <p className="text-base sm:text-lg text-black/90 max-w-3xl mx-auto">
            We partner with families in Westchester and the Bronx to turn
            ABA strategies into real-world routines&nbsp;— not scripts you
            have to memorize.
          </p>
        </div>
      </section>

      {/* What Parent Training Looks Like */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-black">
            What parent training looks like with Empress Consultants
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 1 */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-md p-6 border-t-4 border border-black/10"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                1. Collaborative goal-setting
              </h3>
              <p className="text-base text-black leading-relaxed">
                We start by listening: your concerns, your routines, and the
                moments that feel hardest. Together, we choose 1–3 meaningful
                goals that fit your family’s values and daily life.
              </p>
            </div>

            {/* 2 */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-md p-6 border-t-4 border border-black/10"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                2. Teaching in plain language
              </h3>
              <p className="text-base text-black leading-relaxed">
                We translate ABA concepts into clear, everyday language and
                walk you through exactly what to do&nbsp;— step by step, with
                modeling, practice, and feedback.
              </p>
            </div>

            {/* 3 */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-md p-6 border-t-4 border border-black/10"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                3. Coaching in your real routines
              </h3>
              <p className="text-base text-black leading-relaxed">
                Sessions focus on real moments&nbsp;— mealtime, homework,
                bedtime, community outings&nbsp;— so strategies feel natural and
                are easier to maintain over time.
              </p>
            </div>

            {/* 4 */}
            <div
              className="bg-[#F5F0E8] rounded-xl shadow-md p-6 border-t-4 border border-black/10"
              style={{ borderTopColor: "#D4AF37" }}
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                4. Flexible formats
              </h3>
              <p className="text-base text-black leading-relaxed">
                Training can include in-person sessions, virtual coaching, and
                digital handouts or modules so caregivers can revisit material
                in their own time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it’s for */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-black">
            Who parent training supports
          </h2>

          <p className="text-base sm:text-lg text-black text-center max-w-3xl mx-auto mb-6">
            Parent training is a good fit for caregivers who want practical,
            culturally-responsive support with:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-2 text-black">
              <li>Setting up structure and routines at home</li>
              <li>Managing challenging behavior safely and calmly</li>
              <li>Supporting communication and daily living skills</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-black">
              <li>Collaborating with school teams and providers</li>
              <li>Understanding their child’s IEP or behavioral plans</li>
              <li>Feeling more confident as their child’s advocate</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data-driven note */}
      <section className="section-padding bg-[#EFE9E3]">
        <div className="container-custom max-w-4xl">
          <div className="bg-[#F5F0E8] p-6 sm:p-8 rounded-lg shadow-md border border-black/10">
            <p className="text-base sm:text-lg text-black text-center">
              <strong className="text-black">Data-driven & relationship-based:</strong>{" "}
              We track progress, adjust plans based on data, and prioritize
              strong, respectful relationships with caregivers throughout the
              process.
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
            Ready to explore parent training?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 px-4 text-black">
            Share a little about your child and your goals, and we’ll help you
            decide whether Empress Consultants is the right fit for your family.
          </p>
          <Link to="/contact" className="btn-cta inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
