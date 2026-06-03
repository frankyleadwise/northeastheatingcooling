"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How often should I service my HVAC system in Florida?",
    answer:
      "In Florida's hot, humid climate we recommend servicing your HVAC system twice a year — once in the spring before the peak cooling season begins, and once in the fall to prepare for winter heating demands. Regular tune-ups keep your system running efficiently, extend its lifespan, and help catch small issues before they turn into costly repairs. Homeowners who skip annual maintenance often see higher energy bills and shorter equipment life.",
  },
  {
    question: "How long does AC installation take?",
    answer:
      "A standard residential AC installation typically takes 4–8 hours for a single system. The exact time depends on the size of your home, the complexity of the existing ductwork, and whether any additional work — such as electrical upgrades or duct modifications — is needed. Our technicians arrive fully prepared with the right equipment so there are minimal delays. We'll give you a clear time estimate during your free consultation.",
  },
  {
    question: "What are signs my AC needs repair?",
    answer:
      "Common warning signs include warm or weak airflow from your vents, unusual noises like grinding, banging, or squealing, frequent cycling on and off, unexpectedly high energy bills, excess humidity indoors, ice buildup on the unit, or foul odors when the system runs. In Florida's heat, don't wait on any of these symptoms — they usually worsen quickly. Give us a call and we can often diagnose the problem the same day.",
  },
  {
    question: "Do you offer emergency HVAC services?",
    answer:
      "Yes — we offer 24/7 emergency HVAC services throughout the Tampa Bay area. When your system fails in the middle of a Florida summer, we understand it's not something that can wait until Monday morning. Call us any time at (813) 291-6146 and one of our certified technicians will respond as quickly as possible to restore your comfort.",
  },
  {
    question: "How much does HVAC replacement cost in Tampa?",
    answer:
      "HVAC replacement costs in the Tampa area typically range from $3,500 to $10,000+ depending on the size of the system (measured in tons), the brand and efficiency rating (SEER2), your home's square footage, and whether ductwork modifications are required. We provide free, no-obligation estimates with transparent pricing and no hidden fees. Financing options are available for qualified customers. Contact us for an accurate quote tailored to your specific situation.",
  },
  {
    question: "What areas do you serve in Tampa Bay?",
    answer:
      "North East Heating And Cooling proudly serves the entire Tampa Bay region including Tampa, Brandon, Riverview, Valrico, Plant City, Seffner, Mango, Temple Terrace, New Tampa, Lutz, Land O' Lakes, Westchase, Carrollwood, and surrounding communities. If you're not sure whether we cover your location, just give us a call — we're happy to let you know.",
  },
  {
    question: "What is the $5,000 rule for HVAC?",
    answer:
      "The $5,000 rule is a simple way to decide whether to repair or replace your system. Multiply your unit's age by the estimated repair cost — if the number exceeds $5,000, replacement is usually the smarter investment. For example, a 10-year-old unit needing a $600 repair equals $6,000, which signals it's time to replace. In Florida's climate, where systems run nearly year-round, wear accumulates faster than in northern states, so this rule is especially useful for Tampa Bay homeowners.",
  },
  {
    question: "Which AC brand lasts the longest?",
    answer:
      "Trane, Carrier, and Lennox consistently rank as the longest-lasting AC brands, with well-maintained units often reaching 15–20 years. That said, brand matters less than installation quality and regular maintenance. A premium unit installed poorly or neglected will fail faster than a mid-range unit that's properly cared for. At North East Heating And Cooling, we service all major brands and will always give you an honest assessment of whether a repair or replacement makes more sense for your specific system.",
  },
  {
    question: "How much should an HVAC service call cost?",
    answer:
      "In the Tampa Bay area, a standard HVAC service call typically runs between $75 and $150, which usually covers the diagnostic visit. Repair costs are separate and depend on what's found. Be cautious of companies offering extremely low service call fees — they often make it up with inflated parts and labor. At North East Heating And Cooling, we charge straightforward, upfront pricing with no surprises. Call us at (813) 291-6146 to get a clear estimate before any work begins.",
  },
  {
    question: "What is the most common HVAC problem?",
    answer:
      "The most common HVAC issue in Florida is a dirty or clogged air filter, which restricts airflow and causes the system to work harder — leading to frozen coils, poor cooling, and higher energy bills. Beyond that, refrigerant leaks, capacitor failures, and clogged condensate drain lines are extremely common in our humid Tampa Bay climate. Most of these issues are preventable with twice-yearly maintenance, something we strongly recommend for every home in the region.",
  },
  {
    question: "What is the average life expectancy of an HVAC system?",
    answer:
      "Most HVAC systems last 15 to 20 years under normal conditions, but in Florida that number is often closer to 12 to 15 years. The combination of heat, humidity, and near-constant use puts significantly more wear on equipment here than in cooler climates. Regular maintenance — including annual tune-ups, filter changes, and coil cleanings — is the single best way to maximize your system's lifespan and avoid premature replacement.",
  },
  {
    question: "What is the most expensive part of an HVAC system?",
    answer:
      "The compressor is the most expensive component — it's essentially the heart of your AC system, and replacement can run $1,500 to $2,500 or more depending on the unit. If your compressor fails and your system is more than 10 years old, replacement of the full unit is often more cost-effective than the repair alone. We'll always walk you through both options honestly so you can make the best decision for your budget and your home.",
  },
];

const ChevronDownIcon = () => (
  <svg
    className="w-5 h-5 shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

function FAQAccordionItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-150 ${
          isOpen
            ? "bg-[#fff6f1] text-[#0f1620]"
            : "bg-white text-gray-900 hover:bg-gray-50"
        }`}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="font-semibold text-base pr-2">{faq.question}</span>
        <span
          className={`text-[#C8330A] transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDownIcon />
        </span>
      </button>

      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-5 bg-white border-t border-gray-100">
          <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#C8330A] text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </span>
          <h2 className="font-display tracking-[-0.03em] text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 leading-[1.02]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg">
            Common questions about HVAC service and repair in the Tampa Bay area.
          </p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <FAQAccordionItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center bg-[#fff6f1] border border-[#C8330A]/15 rounded-2xl px-6 py-8">
          <h3 className="text-gray-900 font-bold text-lg mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-500 text-sm mb-5">
            Our team is happy to answer any question you have about your HVAC
            system. Reach out anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+18132916146"
              className="inline-flex items-center gap-2 bg-[#C8330A] hover:bg-[#b02c08] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
            >
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call (813) 291-6146
            </a>
            <a
              href="mailto:office@northeastheatingcooling.com"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#C8330A]/30 text-gray-700 hover:text-[#C8330A] font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
            >
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
