import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function SliderImages() {
  const images = [
    "/iStock-1357352061.jpg",
    "/iStock-487419534.jpg",
    "/iStock-1332728408.jpg",
    "/iStock-2159187467.jpg",
    "/iStock-2162383464.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-full">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            objectFit: "cover",
            objectPosition: "center 22%",
          }}
        />
      ))}

      {/* Dots */}
      <div className="absolute left-1/2 bottom-5 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-[#D4AF37]" : "bg-[#D4AF37]/50"
            } border border-black/30`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative min-h-screen">
        {/* Background */}
        <div className="absolute inset-0">
          <SliderImages />
          <div className="absolute inset-0 bg-black/55" />
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(900px 520px at 50% 45%, rgba(212,175,55,0.22), rgba(0,0,0,0) 60%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom px-4 py-16 md:py-20 flex items-center justify-center min-h-screen">
          <div className="max-w-4xl w-full text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm border"
              style={{
                borderColor: "rgba(240,218,177,0.28)",
                color: "#f0dab1",
                backgroundColor: "rgba(0,0,0,0.35)",
                backdropFilter: "blur(6px)",
              }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: "#D4AF37" }}
              />
              Westchester &amp; the Bronx
            </div>

            {/* ✅ Smaller + not repetitive */}
            <h1
              className="mt-7 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
              style={{ color: "#f0dab1" }}
            >
              Care that feels clear.
              <br className="hidden sm:block" />
              Progress that feels real.
            </h1>

            {/* ✅ Short + premium */}
            <p className="mt-4 text-sm sm:text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
              ABA and educational support for children and families—grounded in integrity,
              precision, and cultural humility.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/home"
                className="px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-xl"
                style={{ backgroundColor: "#D4AF37", color: "black" }}
              >
                Enter Homepage
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                style={{
                  border: "1px solid rgba(240,218,177,0.28)",
                  color: "#f0dab1",
                  backgroundColor: "rgba(0,0,0,0.25)",
                }}
              >
                Book a Consultation
              </Link>
            </div>

            {/* Mini trust strip */}
            <div className="mt-10 grid sm:grid-cols-3 gap-3">
              {["Ethical care", "Data-driven", "Family-centered"].map((t) => (
                <div
                  key={t}
                  className="rounded-xl px-4 py-3 text-xs sm:text-sm md:text-base"
                  style={{
                    border: "1px solid rgba(212,175,55,0.35)",
                    backgroundColor: "rgba(0,0,0,0.25)",
                    color: "#f0dab1",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
