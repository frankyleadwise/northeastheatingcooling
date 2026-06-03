import type { Metadata } from "next";
import Link from "next/link";
import RevealWrapper from "@/components/RevealWrapper";
import { HEARTH_APPLY_URL, HEARTH_DISCLOSURE } from "@/lib/financing";

export const metadata: Metadata = {
  title: "HVAC & AC Financing in Tampa | Monthly Payment Options",
  description:
    "Finance your AC repair or new HVAC system in Tampa Bay. Apply online in minutes with no impact to your credit, see flexible monthly payment options, and get approved fast. Powered by Hearth.",
  keywords: [
    "hvac financing tampa",
    "ac financing tampa",
    "air conditioner financing",
    "hvac payment plans tampa",
    "ac repair financing",
    "finance new ac unit",
    "hvac financing bad credit",
    "monthly payments air conditioning",
    "ac replacement financing tampa",
    "new hvac system financing florida",
  ],
  alternates: { canonical: "/financing" },
  openGraph: {
    title: "HVAC & AC Financing in Tampa Bay | North East Heating And Cooling",
    description:
      "Apply online in minutes, see flexible monthly payment options with no impact to your credit, and keep your home comfortable now. Financing powered by Hearth.",
    url: "/financing",
    type: "website",
  },
};

// ─── Icons ───────────────────────────────────────────────────────────────────

const ArrowIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const PhoneIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const BoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
  </svg>
);

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2.4-.6-.6-2.4 2.3-2.3z" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// ─── Data ──────────────────────────────────────────────────────────────────────

const benefits = [
  { Icon: BoltIcon, title: "Apply in minutes", desc: "A short online application — no piles of paperwork, no waiting at the bank." },
  { Icon: ShieldIcon, title: "No hit to your credit to check", desc: "Seeing your options uses a soft credit inquiry, so it won't affect your credit score." },
  { Icon: WrenchIcon, title: "Repairs or replacements", desc: "Finance anything from an emergency fix to a complete new HVAC system." },
  { Icon: UsersIcon, title: "Options for many credit profiles", desc: "Hearth works with multiple lending partners, so a range of credit backgrounds may see options." },
];

const steps = [
  { n: "1", title: "Apply online", desc: "Fill out the quick application. It only takes a few minutes, and checking won't affect your credit score." },
  { n: "2", title: "See your options", desc: "Get personalized monthly payment options from Hearth's lending partners, based on what you need." },
  { n: "3", title: "Choose what fits", desc: "Pick the option that works best for your budget. There's no obligation until you accept an offer." },
  { n: "4", title: "We get to work", desc: "Schedule your repair or installation and stay comfortable — without draining your savings." },
];

const financeable = [
  { label: "New AC & system installation", href: "/residential/hvac-installation-tampa-fl" },
  { label: "AC & system replacement", href: "/residential/ac-replacement-tampa" },
  { label: "Emergency AC repair", href: "/residential/emergency-ac-repair-tampa" },
  { label: "Heat pump systems", href: "/residential/heat-pump-tampa" },
  { label: "Ductless mini-splits", href: "/residential/ductless-mini-split-tampa" },
  { label: "Indoor air quality upgrades", href: "/residential/indoor-air-quality-tampa" },
  { label: "Smart thermostats", href: "/residential/smart-thermostat-installation-tampa" },
  { label: "Commercial HVAC", href: "/commercial" },
];

const faqs = [
  {
    q: "Does checking my financing options affect my credit score?",
    a: "No. Seeing your options uses a soft credit inquiry, which does not affect your credit score. A hard inquiry would only happen later if you formally accept a loan offer from one of Hearth's lending partners.",
  },
  {
    q: "Can I get financing with less-than-perfect credit?",
    a: "Possibly. Hearth works with multiple lending partners, so homeowners across a range of credit backgrounds may see options. All financing is subject to credit approval, and the approval decision and terms are determined by the lending partners — not by North East Heating And Cooling.",
  },
  {
    q: "How fast can I get approved?",
    a: "The online application takes just a few minutes, and many homeowners see their prequalified options right away. Final approval and funding timelines are handled by the lending partner you choose.",
  },
  {
    q: "Can I finance repairs, or only new systems?",
    a: "Both. You can apply financing to an emergency repair, a maintenance visit, a new installation, or a full system replacement.",
  },
  {
    q: "Is there any cost or obligation to apply?",
    a: "No. Checking your options is free and comes with no obligation. You only commit if you choose to accept an offer from one of Hearth's lending partners.",
  },
  {
    q: "Who actually provides the financing?",
    a: "Financing is provided by Hearth's third-party lending partners. North East Heating And Cooling is not a lender and does not make credit decisions — we simply make it easy for you to apply and keep your home comfortable now.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FinancingPage() {
  return (
    <main>
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden hero-gradient pt-32 pb-20 sm:pt-40 sm:pb-28" aria-label="HVAC and AC financing in Tampa Bay">
        <div
          className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full blur-3xl pointer-events-none"
          style={{ background: "var(--accent)", opacity: 0.16 }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealWrapper>
            <p className="inline-block text-[0.72rem] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-6"
               style={{ color: "var(--accent-light)", background: "rgba(232,90,42,0.1)", border: "1px solid rgba(232,90,42,0.25)" }}>
              HVAC &amp; AC Financing in Tampa Bay
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-6" style={{ color: "var(--text)" }}>
              Get comfortable now.<br />
              <span style={{ color: "var(--accent-light)" }}>Pay for it over time.</span>
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-9" style={{ color: "var(--muted)" }}>
              Flexible HVAC and AC financing for Tampa Bay homeowners. Whether it&apos;s an
              emergency repair or a full system replacement, apply online in minutes, see
              your monthly payment options, and choose what fits your budget — with no
              impact to your credit score to check.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={HEARTH_APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-base font-bold text-white rounded-full transition-colors"
                style={{ background: "var(--accent)" }}
              >
                Apply for Financing
                <ArrowIcon />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-full transition-colors"
                style={{ color: "var(--text)", background: "var(--surface-2)", border: "1px solid var(--border)" }}
              >
                Get a Free Quote First
              </Link>
            </div>
            <p className="text-sm mt-5" style={{ color: "var(--muted)" }}>
              60-second pre-qualification · No impact to your credit score · No obligation · Powered by Hearth
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* ── SPEC BAR (Hearth-approved highlights) ──────────────────────────── */}
      <section className="py-12" style={{ background: "var(--surface-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }} aria-label="Financing highlights">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-5">
            {[
              "Loan amounts up to $250,000",
              "Funding in as little as 1–3 days",
              "Affordable monthly payment options",
              "No prepayment penalties",
              "No home equity required",
              "60-second pre-qualification",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--accent-light)" }} aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-sm font-semibold leading-snug" style={{ color: "var(--text)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ───────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24" style={{ background: "var(--bg)" }} aria-label="Why finance your HVAC system">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--accent-light)" }}>
              Why finance with us
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] leading-tight" style={{ color: "var(--text)" }}>
              HVAC financing made simple
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              A broken AC in the Florida heat can&apos;t wait — and neither should you. Financing
              lets you take care of it today and pay at a pace that works for your household.
            </p>
          </RevealWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map(({ Icon, title, desc }, i) => (
              <RevealWrapper key={title} delay={i * 80}>
                <div className="h-full rounded-2xl p-7" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                       style={{ background: "rgba(232,90,42,0.12)", color: "var(--accent-light)" }}>
                    <Icon />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text)" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24" style={{ background: "var(--surface)" }} aria-label="How HVAC financing works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--accent-light)" }}>
              Four simple steps
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] leading-tight" style={{ color: "var(--text)" }}>
              How HVAC financing works
            </h2>
          </RevealWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(({ n, title, desc }, i) => (
              <RevealWrapper key={n} delay={i * 80}>
                <div className="relative h-full rounded-2xl p-7" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full text-white font-extrabold text-lg mb-5" style={{ background: "var(--accent)" }}>
                    {n}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text)" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={HEARTH_APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white rounded-full transition-colors"
              style={{ background: "var(--accent)" }}
            >
              Start Your Application
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU CAN FINANCE ───────────────────────────────────────────── */}
      <section className="py-20 sm:py-24" style={{ background: "var(--bg)" }} aria-label="What you can finance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--accent-light)" }}>
              From a quick fix to a full system
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] leading-tight" style={{ color: "var(--text)" }}>
              What you can finance
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Financing can be applied to just about any service we offer across Tampa Bay.
            </p>
          </RevealWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {financeable.map(({ label, href }, i) => (
              <RevealWrapper key={label} delay={i * 50}>
                <Link
                  href={href}
                  className="group flex items-center justify-between gap-2 h-full rounded-xl px-5 py-4 transition-colors"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>{label}</span>
                  <span style={{ color: "var(--accent-light)" }}><ArrowIcon className="w-4 h-4" /></span>
                </Link>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIG CTA ────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24" style={{ background: "var(--surface)" }} aria-label="Apply for financing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper>
            <div className="relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 sm:py-14 text-center"
                 style={{ background: "linear-gradient(135deg, #1f1215 0%, #151720 60%, #1c1f2e 100%)", border: "1px solid var(--border)" }}>
              <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: "var(--accent)", opacity: 0.18 }} aria-hidden="true" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] leading-tight mb-4" style={{ color: "var(--text)" }}>
                  Ready to see your options?
                </h2>
                <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: "var(--muted)" }}>
                  Apply online in a few minutes. Checking won&apos;t affect your credit score,
                  and there&apos;s no obligation to move forward.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={HEARTH_APPLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-base font-bold text-white rounded-full transition-colors"
                    style={{ background: "var(--accent)" }}
                  >
                    Apply for Financing
                    <ArrowIcon />
                  </a>
                  <a
                    href="tel:+18132916146"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-full transition-colors"
                    style={{ color: "var(--text)", background: "var(--surface-2)", border: "1px solid var(--border)" }}
                  >
                    <PhoneIcon />
                    (813) 291-6146
                  </a>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24" style={{ background: "var(--bg)" }} aria-label="HVAC financing FAQ">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--accent-light)" }}>
              Common questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] leading-tight" style={{ color: "var(--text)" }}>
              HVAC financing FAQ
            </h2>
          </RevealWrapper>

          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group rounded-xl overflow-hidden" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 text-base font-semibold" style={{ color: "var(--text)" }}>
                  {q}
                  <span className="shrink-0 transition-transform duration-200 group-open:rotate-45" style={{ color: "var(--accent-light)" }} aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-5 h-5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 -mt-1 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCLOSURE ─────────────────────────────────────────────────────── */}
      <section className="pb-16" style={{ background: "var(--bg)" }} aria-label="Financing disclosure">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl px-6 py-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <p className="text-[0.72rem] leading-relaxed" style={{ color: "var(--muted)", opacity: 0.85 }}>
              {HEARTH_DISCLOSURE}
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ JSON-LD ────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </main>
  );
}
