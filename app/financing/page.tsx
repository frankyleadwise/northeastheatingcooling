import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RevealWrapper from "@/components/RevealWrapper";
import HearthCalculator from "@/components/HearthCalculator";
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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const PhoneIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const BoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
  </svg>
);

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2.4-.6-.6-2.4 2.3-2.3z" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// ─── Data ──────────────────────────────────────────────────────────────────────

const highlights = [
  "Loan amounts up to $250,000",
  "Funding in as little as 1–3 days",
  "Affordable monthly payment options",
  "No prepayment penalties",
  "No home equity required",
  "60-second pre-qualification",
];

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
    a: "The online application takes just a few minutes, and many homeowners see their prequalified options right away. With Hearth's lending partners, approved projects can be funded in as little as 1–3 days.",
  },
  {
    q: "Can I finance repairs, or only new systems?",
    a: "Both. You can apply financing to an emergency repair, a maintenance visit, a new installation, or a full system replacement.",
  },
  {
    q: "Is there any cost or obligation to apply?",
    a: "No. Checking your options is free and comes with no obligation, no prepayment penalties, and no home equity required. You only commit if you choose to accept an offer from one of Hearth's lending partners.",
  },
  {
    q: "Who actually provides the financing?",
    a: "Financing is provided by Hearth's third-party lending partners. North East Heating And Cooling is not a lender and does not make credit decisions — we simply make it easy for you to apply and keep your home comfortable now.",
  },
];

// ─── Reusable primary CTA (button-in-button trailing icon) ──────────────────────

function ApplyButton({ label = "Apply for Financing", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={HEARTH_APPLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 pl-7 pr-3 py-3 text-base font-bold text-white rounded-full bg-[#C8330A] hover:bg-[#b02c08] shadow-lg shadow-[#C8330A]/25 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${className}`}
    >
      {label}
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
        <ArrowIcon className="w-4 h-4" />
      </span>
    </a>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FinancingPage() {
  return (
    <main className="bg-white">
      {/* ── HERO (asymmetric: copy left, image right) ──────────────────────── */}
      <section
        className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
        style={{ background: "linear-gradient(180deg,#fff6f1 0%,#fdfbfa 60%,#ffffff 100%)" }}
        aria-label="HVAC and AC financing in Tampa Bay"
      >
        <div className="absolute -top-32 -right-24 w-[34rem] h-[34rem] rounded-full blur-3xl pointer-events-none" style={{ background: "#C8330A", opacity: 0.07 }} aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <RevealWrapper>
              <p className="inline-block text-[0.72rem] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-6 text-[#C8330A] bg-[#C8330A]/10 border border-[#C8330A]/15">
                HVAC &amp; AC Financing in Tampa Bay
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.04] mb-6 text-slate-900">
                Get comfortable now.<br />
                <span className="text-[#C8330A]">Pay for it over time.</span>
              </h1>
              <p className="text-lg leading-relaxed max-w-xl mb-8 text-slate-600">
                See your personalized monthly payment options within minutes — without
                affecting your credit score. Whether it&apos;s an emergency repair or a full
                system replacement, apply online, choose what fits your budget, and keep your
                Tampa Bay home comfortable today.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <ApplyButton />
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-full text-slate-800 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors"
                >
                  Get a Free Quote First
                </Link>
              </div>
              <p className="text-sm mt-6 text-slate-500">
                60-second pre-qualification · No impact to your credit score · No obligation · Powered by Hearth
              </p>
            </RevealWrapper>

            {/* Image */}
            <RevealWrapper delay={120}>
              <div className="relative">
                <div className="rounded-[2rem] bg-white/70 ring-1 ring-black/5 p-2 shadow-[0_40px_80px_-30px_rgba(200,51,10,0.3)]">
                  <div className="relative rounded-[calc(2rem-0.5rem)] overflow-hidden aspect-[4/3]">
                    <Image
                      src="/financing-hero-family.jpg"
                      alt="A relaxed, comfortable Tampa Bay family at home after financing their new HVAC system"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                {/* Floating trust chip */}
                <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl ring-1 ring-black/5 pl-3 pr-4 py-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                    <CheckIcon className="w-5 h-5" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800 leading-tight">
                    Checking won&apos;t affect<br />your credit score
                  </span>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ── SPEC BAR (Hearth-approved highlights) ──────────────────────────── */}
      <section className="py-10 bg-slate-50 border-y border-slate-200" aria-label="Financing highlights">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-5">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckIcon className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
                <span className="text-sm font-semibold leading-snug text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY FINANCE (split: image + benefits) ──────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" aria-label="Why finance your HVAC system">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <RevealWrapper className="order-2 lg:order-1">
              <div className="rounded-[2rem] bg-slate-50 ring-1 ring-black/5 p-2 shadow-[0_40px_80px_-35px_rgba(15,23,42,0.35)]">
                <div className="relative rounded-[calc(2rem-0.5rem)] overflow-hidden aspect-[4/3]">
                  <Image
                    src="/financing-comfort-family.jpg"
                    alt="A Tampa Bay family enjoying a comfortable, well-cooled home"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </RevealWrapper>

            {/* Copy + benefit list */}
            <RevealWrapper delay={100} className="order-1 lg:order-2">
              <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3 text-[#C8330A]">Why finance with us</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] leading-tight text-slate-900 mb-4">
                HVAC financing made simple
              </h2>
              <p className="text-base leading-relaxed text-slate-600 mb-8">
                A broken AC in the Florida heat can&apos;t wait — and neither should you.
                Financing lets you take care of it today and pay at a pace that works for
                your household.
              </p>
              <div className="space-y-6">
                {benefits.map(({ Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0 bg-[#C8330A]/10 text-[#C8330A]">
                      <Icon />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">{title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200" aria-label="How HVAC financing works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3 text-[#C8330A]">Four simple steps</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] leading-tight text-slate-900">
              How HVAC financing works
            </h2>
          </RevealWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(({ n, title, desc }, i) => (
              <RevealWrapper key={n} delay={i * 80}>
                <div className="relative h-full rounded-2xl p-7 bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full text-white font-extrabold text-lg mb-5 bg-[#C8330A]">
                    {n}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <div className="text-center mt-12">
            <ApplyButton label="Start Your Application" />
          </div>
        </div>
      </section>

      {/* ── PAYMENT CALCULATOR (Hearth widget) ─────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" aria-label="Estimate your monthly payment">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3 text-[#C8330A]">Try it yourself</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] leading-tight text-slate-900">
              Estimate your monthly payment
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Enter your project cost and credit range to see an estimated monthly payment,
              then click through to view your real, personalized options.
            </p>
          </RevealWrapper>

          <RevealWrapper>
            <div className="max-w-lg mx-auto rounded-3xl bg-slate-50 border border-slate-200 shadow-sm p-3 sm:p-5">
              <HearthCalculator />
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── WHAT YOU CAN FINANCE ───────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200" aria-label="What you can finance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3 text-[#C8330A]">From a quick fix to a full system</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] leading-tight text-slate-900">
              What you can finance
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Financing can be applied to just about any service we offer across Tampa Bay.
            </p>
          </RevealWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {financeable.map(({ label, href }, i) => (
              <RevealWrapper key={label} delay={i * 50}>
                <Link
                  href={href}
                  className="group flex items-center justify-between gap-2 h-full rounded-xl px-5 py-4 bg-white border border-slate-200 hover:border-[#C8330A]/40 hover:shadow-sm transition-all"
                >
                  <span className="text-sm font-semibold text-slate-800">{label}</span>
                  <span className="text-[#C8330A] transition-transform group-hover:translate-x-0.5"><ArrowIcon className="w-4 h-4" /></span>
                </Link>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── TALK TO CHRIS (local-owner trust band) ─────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" aria-label="Talk to the owner about financing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper>
            <div
              className="grid lg:grid-cols-[0.85fr_1fr] gap-8 lg:gap-12 items-center rounded-[2rem] p-6 sm:p-8 lg:p-10 border border-[#C8330A]/12"
              style={{ background: "linear-gradient(135deg,#fff6f1 0%,#fffaf8 100%)" }}
            >
              <div className="rounded-[1.5rem] bg-white/70 ring-1 ring-black/5 p-1.5 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.4)]">
                <div className="relative rounded-[calc(1.5rem-0.375rem)] overflow-hidden aspect-[4/3]">
                  <Image
                    src="/chris-owner-wide.jpg"
                    alt="Chris Grullon, owner of North East Heating And Cooling, on a Tampa Bay job site"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3 text-[#C8330A]">A local owner you can reach</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] leading-tight text-slate-900 mb-4">
                  Not sure where to start? Talk to Chris.
                </h2>
                <p className="text-base leading-relaxed text-slate-600 mb-7">
                  Financing should make your decision easier, not more confusing. Chris will
                  walk you through your options in plain English, help you figure out what your
                  project will cost, and answer any questions — no pressure, no runaround.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <a
                    href="tel:+18132916146"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white rounded-full bg-[#C8330A] hover:bg-[#b02c08] shadow-lg shadow-[#C8330A]/25 transition-colors"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    (813) 291-6146
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-full text-slate-800 bg-white border border-slate-300 hover:border-slate-400 transition-colors"
                  >
                    Send a message
                  </Link>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200" aria-label="HVAC financing FAQ">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3 text-[#C8330A]">Common questions</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] leading-tight text-slate-900">
              HVAC financing FAQ
            </h2>
          </RevealWrapper>

          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group rounded-xl overflow-hidden bg-white border border-slate-200">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 text-base font-semibold text-slate-900">
                  {q}
                  <span className="shrink-0 transition-transform duration-300 group-open:rotate-45 text-[#C8330A]" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" className="w-5 h-5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 -mt-1 text-sm leading-relaxed text-slate-600">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIG CTA ────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" aria-label="Apply for financing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper>
            <div
              className="relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 sm:py-14 text-center border border-[#C8330A]/15"
              style={{ background: "linear-gradient(135deg,#fff6f1 0%,#fffaf8 100%)" }}
            >
              <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: "#C8330A", opacity: 0.1 }} aria-hidden="true" />
              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] leading-tight mb-4 text-slate-900">
                  Ready to see your options?
                </h2>
                <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 text-slate-600">
                  Apply online in a few minutes. Checking won&apos;t affect your credit score,
                  there are no prepayment penalties, and there&apos;s no obligation to move forward.
                </p>
                <ApplyButton />
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── DISCLOSURE ─────────────────────────────────────────────────────── */}
      <section className="py-12 bg-white border-t border-slate-200" aria-label="Financing disclosure">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl px-6 py-5 bg-slate-50 border border-slate-200">
            <p className="text-[0.72rem] leading-relaxed text-slate-500">{HEARTH_DISCLOSURE}</p>
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
