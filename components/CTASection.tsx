"use client";

import { useState, FormEvent } from "react";

const PhoneIcon = () => (
  <svg
    className="w-6 h-6 shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    className="w-12 h-12 text-green-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission — replace with real API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f1620 0%, #1a1f35 50%, #1f1215 100%)",
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-5"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="cta-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      {/* Decorative blobs */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-red-600 opacity-15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-orange-500 opacity-10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-block bg-white/10 border border-white/20 text-blue-100 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Free Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            HVAC Acting Up?{" "}
            <span className="text-blue-200">Get Your Free</span>{" "}
            Consultation Today
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Don&apos;t suffer in the Florida heat. Our expert technicians are ready
            to help — fast response times, honest pricing, and guaranteed results.
          </p>
        </div>

        {/* Phone number */}
        <div className="flex justify-center mb-8">
          <a
            href="tel:+18132916146"
            className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-extrabold text-2xl sm:text-3xl px-6 py-4 rounded-2xl transition-all duration-200 tracking-wide"
            aria-label="Call North East Heating and Cooling"
          >
            <PhoneIcon />
            (813) 291-6146
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8 max-w-md mx-auto">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-blue-200 text-sm font-medium whitespace-nowrap">
            or fill out the form below
          </span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Form / Success state */}
        {submitted ? (
          <div className="max-w-md mx-auto text-center bg-white/10 border border-white/20 rounded-2xl px-8 py-10">
            <div className="flex justify-center mb-4">
              <CheckCircleIcon />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">
              We&apos;ve Got Your Request!
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Thank you, {formData.name || "there"}! One of our technicians will
              be in touch shortly. For immediate assistance, call us directly at{" "}
              <a
                href="tel:+18132916146"
                className="font-semibold text-white underline underline-offset-2"
              >
                (813) 291-6146
              </a>
              .
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", phone: "", email: "" });
              }}
              className="text-blue-200 text-sm hover:text-white transition-colors underline underline-offset-2"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="max-w-2xl mx-auto"
            aria-label="Free consultation request form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="cta-name"
                  className="text-blue-100 text-xs font-medium sr-only"
                >
                  Your Name
                </label>
                <input
                  id="cta-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  autoComplete="name"
                  className="w-full bg-white/10 border border-white/25 hover:border-white/40 focus:border-white/60 focus:bg-white/15 text-white placeholder-blue-200 rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-150"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="cta-phone"
                  className="text-blue-100 text-xs font-medium sr-only"
                >
                  Phone Number
                </label>
                <input
                  id="cta-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                  autoComplete="tel"
                  className="w-full bg-white/10 border border-white/25 hover:border-white/40 focus:border-white/60 focus:bg-white/15 text-white placeholder-blue-200 rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-150"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="cta-email"
                  className="text-blue-100 text-xs font-medium sr-only"
                >
                  Email Address
                </label>
                <input
                  id="cta-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  autoComplete="email"
                  className="w-full bg-white/10 border border-white/25 hover:border-white/40 focus:border-white/60 focus:bg-white/15 text-white placeholder-blue-200 rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-150"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 disabled:bg-red-600/70 text-white font-bold text-base px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 mx-auto"
              >
                {loading ? (
                  <>
                    <svg
                      className="w-5 h-5 animate-spin text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Get My Free Consultation
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>

            <p className="text-blue-200 text-xs text-center mt-4 opacity-80">
              No spam. We&apos;ll only contact you about your HVAC request.
            </p>
          </form>
        )}

        {/* or call us directly */}
        <div className="mt-8 text-center">
          <p className="text-blue-200 text-sm">
            — or call us directly —
          </p>
          <a
            href="tel:+18132916146"
            className="inline-flex items-center gap-2 text-white font-bold text-xl mt-2 hover:text-blue-200 transition-colors"
          >
            <PhoneIcon />
            (813) 291-6146
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 pt-8 border-t border-white/15">
          {[
            "Licensed & Insured",
            "NATE-Certified Technicians",
            "Lifetime Workmanship Warranty",
            "5.0 Stars on Google",
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-blue-100 text-xs font-medium"
            >
              <svg
                className="w-3.5 h-3.5 text-orange-400 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
