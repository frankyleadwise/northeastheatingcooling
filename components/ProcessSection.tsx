const steps = [
  {
    number: 1,
    title: "Get a Free Consultation",
    description:
      "Reach out by phone or our online form and we'll schedule a time that works for you — same-day appointments often available. There's no cost and no obligation, just an honest conversation about your HVAC needs.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Receive a Diagnosis",
    description:
      "A certified techniciannician will inspect your system thoroughly, identify the root cause of any issues, and provide a clear upfront quote. We explain everything in plain language — no surprises, no hidden fees.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Guaranteed Comfort",
    description:
      "We complete the repair or installation efficiently, leave your home clean, and back every job with our lifetime workmanship warranty. Enjoy reliable comfort year-round with the confidence that we stand behind our work.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C8330A] text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </span>
          <h2 className="font-display tracking-[-0.03em] text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 leading-[1.02]">
            Our Simple Process
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Getting your HVAC system back in shape is easier than you think.
            Here&apos;s exactly what to expect when you work with us.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-[#C8330A]/10"
            style={{ left: "calc(16.666% + 2rem)", right: "calc(16.666% + 2rem)" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center lg:items-center"
              >
                {/* Mobile connector line (vertical) */}
                {index < steps.length - 1 && (
                  <div
                    className="lg:hidden absolute top-20 left-1/2 -translate-x-px w-0.5 h-10 bg-[#C8330A]/10"
                    aria-hidden="true"
                  />
                )}

                {/* Number circle with icon */}
                <div className="relative mb-6 z-10">
                  {/* Outer ring */}
                  <div className="w-20 h-20 rounded-full bg-[#fff6f1] border-2 border-[#C8330A]/15 flex items-center justify-center">
                    {/* Inner filled circle */}
                    <div className="w-14 h-14 rounded-full bg-[#C8330A] flex items-center justify-center text-white shadow-md">
                      {step.icon}
                    </div>
                  </div>
                  {/* Step number badge */}
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#0f1620] text-white text-xs font-bold flex items-center justify-center shadow">
                    {step.number}
                  </span>
                </div>

                {/* Text content */}
                <div className="max-w-xs lg:max-w-none">
                  <h3 className="text-gray-900 font-bold text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="tel:+18132916146"
            className="inline-flex items-center gap-2 bg-[#C8330A] hover:bg-[#b02c08] text-white font-bold text-base px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
          >
            <svg
              className="w-5 h-5 shrink-0"
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
            Start With a Free Call — (813) 291-6146
          </a>
        </div>
      </div>
    </section>
  );
}
