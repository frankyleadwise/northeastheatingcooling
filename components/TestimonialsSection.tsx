const testimonials = [
  {
    stars: 5,
    quote:
      "Called them for an emergency and their technician Christian showed up fast — his response time was incredibly fast. He came fully prepared to assess and resolve the problem right away, discovered the issue and checked the whole system to make sure there wasn't a secondary problem. Thorough, skilled, and truly professional.",
    name: "Google Reviewer",
    location: "Tampa Bay, FL",
    service: "Emergency AC Repair",
  },
  {
    stars: 5,
    quote:
      "Had them out for an AC tune-up and some vent work. From start to finish, their work was outstanding — polished and professional in every way. They took the time to explain what they were doing and left everything cleaner than they found it. Highly recommend.",
    name: "Google Reviewer",
    location: "Gibsonton, FL",
    service: "AC Tune-Up & Vent Work",
  },
  {
    stars: 5,
    quote:
      "This is an amazing family company that truly cares about your home. They make sure you become a long-time client by ensuring your house is back to 100%. Honest, reliable, and genuinely invested in doing right by their customers. I won't use anyone else.",
    name: "Google Reviewer",
    location: "Tampa Bay, FL",
    service: "HVAC Service",
  },
];

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const QuoteIcon = () => (
  <svg
    className="w-8 h-8 text-slate-300"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const GoogleIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#C8330A] text-sm font-semibold uppercase tracking-widest mb-3">
            Customer Reviews
          </span>
          <h2 className="font-display tracking-[-0.03em] text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 leading-[1.02]">
            What Our Customers Are Saying
          </h2>
          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-3 bg-[#fff6f1] border border-[#C8330A]/15 rounded-full px-5 py-2.5">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} filled={true} />
              ))}
            </div>
            <span className="text-gray-700 text-sm font-semibold">
              5.0/5 Average Rating
            </span>
            <span className="text-gray-400 text-sm">·</span>
            <span className="text-gray-500 text-sm">30 Google Reviews</span>
            <GoogleIcon />
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden"
            >
              {/* Blue accent bar at top */}
              <div className="h-1.5 bg-gradient-to-r from-[#C8330A] to-[#F47438] w-full" />

              <div className="flex flex-col flex-1 p-6">
                {/* Quote icon */}
                <div className="mb-4">
                  <QuoteIcon />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} filled={i <= testimonial.stars} />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;
                  <span
                    dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                  />
                  &rdquo;
                </blockquote>

                {/* Reviewer info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p
                      className="font-bold text-gray-900 text-sm"
                      dangerouslySetInnerHTML={{ __html: testimonial.name }}
                    />
                    <p className="text-gray-400 text-xs mt-0.5">
                      {testimonial.location}
                    </p>
                  </div>
                  <span className="inline-block bg-[#fff6f1] text-[#C8330A] text-xs font-medium px-2.5 py-1 rounded-full border border-[#C8330A]/15">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/North+East+Heating+And+Cooling/@27.8027777,-82.3512035,17z/data=!4m6!3m5!1s0x2003b66f381708c5:0xb21d6d85ffd57b3c!8m2!3d27.8027777!4d-82.3512035!16s%2Fg%2F11ldsk9rrj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C8330A] font-semibold text-sm hover:text-[#b02c08] transition-colors"
          >
            <GoogleIcon />
            Read all 30 of our Google reviews
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
