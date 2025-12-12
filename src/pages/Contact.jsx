import { useMemo, useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: "",
    location: "",
    services: "",
    message: "",
  });

  const phoneDisplay = "(646) 769-0706";
  const phoneTel = "16467690706";
  const emailAddress = "info@empressconsultants.com";

  const servicesLabel = useMemo(() => {
    switch (formState.services) {
      case "aba":
        return "ABA Therapy";
      case "parent-training":
        return "Parent Training";
      case "supervision":
        return "Supervision & Professional Development";
      case "related-services":
        return "Related Services Coordination";
      case "not-sure":
        return "Not sure yet";
      default:
        return "";
    }
  }, [formState.services]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const buildMailto = () => {
    const subjectParts = [];
    if (servicesLabel) subjectParts.push(servicesLabel);
    if (formState.location) subjectParts.push(formState.location);
    const subject = subjectParts.length
      ? `New Inquiry — ${subjectParts.join(" | ")}`
      : "New Inquiry — Empress Consultants";

    const lines = [
      "New inquiry received via website form:",
      "",
      `Name: ${formState.name || "-"}`,
      `Email: ${formState.email || "-"}`,
      `Role: ${formState.role || "-"}`,
      `Location: ${formState.location || "-"}`,
      `Service Interest: ${servicesLabel || "-"}`,
      "",
      "Message:",
      formState.message || "-",
      "",
      "—",
      "Sent from Empress Consultants website",
    ];

    const body = lines.join("\n");
    return `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend yet: open user's email client with a pre-filled message.
    window.location.href = buildMailto();
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black">
        {/* soft glow */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(900px 500px at 50% 20%, rgba(212,175,55,0.25), transparent 60%)",
          }}
        />
        <div className="relative section-padding">
          <div className="container-custom max-w-6xl">
            <div className="max-w-3xl mx-auto text-center">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                style={{ borderColor: "rgba(240, 218, 177, 0.25)" }}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#D4AF37" }}
                />
                <span className="text-sm" style={{ color: "#f0dab1" }}>
                  Westchester County + The Bronx
                </span>
              </div>

              <h1
                className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                style={{ color: "#f0dab1" }}
              >
                Let’s talk about support that works in real life.
              </h1>

              <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
                Share what you’re looking for, and we’ll respond with clear next
                steps—whether you’re a family, a school team, or a provider.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${phoneTel}`}
                  className="btn-cta text-center"
                  aria-label="Call Empress Consultants"
                >
                  Call {phoneDisplay}
                </a>
                <a
                  href={`mailto:${emailAddress}`}
                  className="px-6 py-3 rounded-lg border text-center transition-colors duration-200 hover:bg-white/10"
                  style={{
                    borderColor: "rgba(240, 218, 177, 0.35)",
                    color: "#f0dab1",
                  }}
                >
                  Email {emailAddress}
                </a>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-white/70">
                If this is an emergency or safety concern, call 911 or your local
                crisis services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom max-w-6xl grid lg:grid-cols-3 gap-10">
          {/* FORM */}
          <div className="lg:col-span-2">
            <div
              className="rounded-2xl shadow-md p-6 sm:p-8 bg-[#EFE9E3]"
              style={{
                border: "1px solid rgba(212,175,55,0.45)", // gold border
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black">
                    Send a message
                  </h2>
                  <p className="text-sm sm:text-base text-black/80 mt-1">
                    We’ll respond within <strong>3–5 business days</strong>.
                  </p>
                </div>
                <div className="text-sm text-black/70">
                  <span className="font-semibold text-black">Tip:</span>{" "}
                  Include your location + what you’re seeking.
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-1 text-black"
                  >
                    Name<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-black/20 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white"
                    placeholder="First and last name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-1 text-black"
                  >
                    Email<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-black/20 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Role + Location */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-semibold mb-1 text-black"
                    >
                      Your role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formState.role}
                      onChange={handleChange}
                      className="w-full rounded-md border border-black/20 px-3 py-2 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    >
                      <option value="">Select an option</option>
                      <option value="caregiver">Caregiver / Family</option>
                      <option value="school">School / District Staff</option>
                      <option value="provider">Provider / Clinician</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-semibold mb-1 text-black"
                    >
                      Location
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      value={formState.location}
                      onChange={handleChange}
                      className="w-full rounded-md border border-black/20 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white"
                      placeholder="City / neighborhood (e.g., Yonkers, Bronx)"
                    />
                  </div>
                </div>

                {/* Service interest */}
                <div>
                  <label
                    htmlFor="services"
                    className="block text-sm font-semibold mb-1 text-black"
                  >
                    What are you interested in?
                  </label>
                  <select
                    id="services"
                    name="services"
                    value={formState.services}
                    onChange={handleChange}
                    className="w-full rounded-md border border-black/20 px-3 py-2 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  >
                    <option value="">Select a service</option>
                    <option value="aba">ABA Therapy</option>
                    <option value="parent-training">Parent Training</option>
                    <option value="supervision">
                      Supervision &amp; Professional Development
                    </option>
                    <option value="related-services">
                      Related Services Coordination
                    </option>
                    <option value="not-sure">I&apos;m not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-1 text-black"
                  >
                    How can we help?<span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-black/20 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white"
                    placeholder="Briefly share what support you’re seeking, any goals, and the best way to reach you."
                  />
                  <p className="mt-2 text-xs sm:text-sm text-black/70">
                    Please do not include sensitive or emergency information in
                    this form.
                  </p>
                </div>

                {/* Submit */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center">
                  <button type="submit" className="btn-cta w-full sm:w-auto">
                    Email This Inquiry
                  </button>

                  <a
                    href={`tel:${phoneTel}`}
                    className="w-full sm:w-auto text-center px-6 py-3 rounded-lg border transition-colors duration-200 hover:bg-black/5"
                    style={{
                      borderColor: "rgba(0,0,0,0.15)",
                      color: "black",
                    }}
                  >
                    Prefer to call
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-black/70 mt-3">
                  Submitting this form does not create a client–provider
                  relationship.
                </p>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <aside className="space-y-6">
            {/* What happens next */}
            <div
              className="rounded-2xl shadow-md p-5 bg-[#EFE9E3]"
              style={{ border: "1px solid rgba(212,175,55,0.35)" }}
            >
              <h3 className="text-xl font-bold text-black mb-2">
                What happens next
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-black/90">
                <li className="flex gap-3">
                  <span
                    className="mt-1 inline-block w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#D4AF37" }}
                  />
                  <span>
                    We review your message and confirm fit + service area.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-1 inline-block w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#D4AF37" }}
                  />
                  <span>
                    We follow up with questions or schedule a brief call.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-1 inline-block w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#D4AF37" }}
                  />
                  <span>
                    If we’re not the best match, we’ll recommend next steps.
                  </span>
                </li>
              </ul>
            </div>

            {/* Direct contact */}
            <div
              className="rounded-2xl shadow-md p-5 bg-[#EFE9E3]"
              style={{ border: "1px solid rgba(0,0,0,0.10)" }}
            >
              <h3 className="text-xl font-bold text-black mb-2">Direct contact</h3>
              <div className="space-y-2 text-sm sm:text-base text-black">
                <div>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a className="underline" href={`tel:${phoneTel}`}>
                    {phoneDisplay}
                  </a>
                </div>
                <div>
                  <span className="font-semibold">Email:</span>{" "}
                  <a className="underline" href={`mailto:${emailAddress}`}>
                    {emailAddress}
                  </a>
                </div>
                <div>
                  <span className="font-semibold">Location:</span> New York, NY
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-black/70">
                Availability depends on staffing and caseload.
              </p>
            </div>

            {/* Service area */}
            <div className="bg-[#EFE9E3] rounded-2xl shadow-md border border-black/10 p-5">
              <h3 className="text-xl font-bold text-black mb-2">Service area</h3>
              <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-black">
                <li>Westchester County, NY</li>
                <li>The Bronx, NY</li>
                <li>Selected surrounding areas</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
