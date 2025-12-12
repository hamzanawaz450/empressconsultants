import { Link } from "react-router-dom";

export default function Home() {
  const gold = "#D4AF37";

  return (
    <div className="min-h-screen bg-[#EFE9E3]">
      {/* HERO (NO IMAGES) */}
      <section className="bg-black">
        <div className="container-custom px-4 py-12 md:py-14 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm border"
            style={{
              borderColor: "rgba(240,218,177,0.22)",
              color: "#f0dab1",
              backgroundColor: "rgba(0,0,0,0.30)",
            }}
          >
            <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: gold }} />
            Serving Westchester County + The Bronx
          </div>

          {/* ✅ Smaller + NOT same as landing */}
          <h1
            className="mt-6 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight"
            style={{ color: "#f0dab1" }}
          >
            ABA services designed for home, school, and real life.
          </h1>

          <p className="mt-4 text-sm md:text-base text-white/85 max-w-3xl mx-auto leading-relaxed">
            Clear plans. Collaborative support. Measurable growth—delivered with respect and professionalism.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-xl"
              style={{ backgroundColor: gold, color: "black" }}
            >
              Request Services
            </Link>

            <Link
              to="/services"
              className="px-8 py-3 rounded-xl font-semibold transition-all duration-200"
              style={{
                border: "1px solid rgba(240,218,177,0.22)",
                color: "#f0dab1",
                backgroundColor: "rgba(0,0,0,0.20)",
              }}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* START HERE */}
      <section className="py-12 md:py-14">
        <div className="container-custom px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black">Start here</h2>
            <p className="mt-2 text-sm md:text-base text-black/70">
              The fastest way to find what you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* About */}
            <Link
              to="/about"
              className="group rounded-2xl p-7 bg-[#F5F0E8] shadow-md hover:shadow-xl transition-all duration-300"
              style={{ border: `1px solid rgba(212,175,55,0.65)` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: gold }}>
                    About Us
                  </h3>
                  <p className="text-black/80 leading-relaxed">
                    Our approach, values, and what families can expect from day one.
                  </p>
                </div>
                <span className="text-2xl transition-transform duration-200 group-hover:translate-x-1" style={{ color: gold }}>
                  ›
                </span>
              </div>
            </Link>

            {/* Services */}
            <Link
              to="/services"
              className="group rounded-2xl p-7 bg-[#F5F0E8] shadow-md hover:shadow-xl transition-all duration-300"
              style={{ border: `1px solid rgba(212,175,55,0.65)` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: gold }}>
                    Services
                  </h3>
                  <ul className="text-black/80 space-y-2 leading-relaxed">
                    <li>• ABA Therapy</li>
                    <li>• Supervision (BCBA/LBA)</li>
                    <li>• Parent Training</li>
                    <li>• Related Service Coordination</li>
                  </ul>
                </div>
                <span className="text-2xl transition-transform duration-200 group-hover:translate-x-1" style={{ color: gold }}>
                  ›
                </span>
              </div>
            </Link>

            {/* Who We Serve */}
            <Link
              to="/about"
              className="group rounded-2xl p-7 bg-[#F5F0E8] shadow-md hover:shadow-xl transition-all duration-300"
              style={{ border: `1px solid rgba(212,175,55,0.65)` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: gold }}>
                    Who We Serve
                  </h3>
                  <ul className="text-black/80 space-y-2 leading-relaxed">
                    <li>• Children with developmental needs</li>
                    <li>• Families seeking home/school-based ABA</li>
                    <li>• Schools and educational teams</li>
                  </ul>
                </div>
                <span className="text-2xl transition-transform duration-200 group-hover:translate-x-1" style={{ color: gold }}>
                  ›
                </span>
              </div>
            </Link>

            {/* Why Choose Us */}
            <Link
              to="/about"
              className="group rounded-2xl p-7 bg-[#F5F0E8] shadow-md hover:shadow-xl transition-all duration-300"
              style={{ border: `1px solid rgba(212,175,55,0.65)` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: gold }}>
                    Why Families Choose Us
                  </h3>
                  <p className="text-black/80 leading-relaxed">
                    Warm communication, structured plans, and progress you can see.
                  </p>
                </div>
                <span className="text-2xl transition-transform duration-200 group-hover:translate-x-1" style={{ color: gold }}>
                  ›
                </span>
              </div>
            </Link>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-10 py-4 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-xl text-center"
              style={{ backgroundColor: gold, color: "black" }}
            >
              Request Services
            </Link>

            <Link
              to="/contact"
              className="px-10 py-4 rounded-xl font-semibold transition-all duration-200 text-center"
              style={{
                border: `1px solid rgba(212,175,55,0.85)`,
                backgroundColor: "#EFE9E3",
                color: "black",
              }}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
