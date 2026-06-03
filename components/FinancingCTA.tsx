import Link from "next/link";
import { HEARTH_APPLY_URL } from "@/lib/financing";

// ─── Icons ───────────────────────────────────────────────────────────────────

const CreditCardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 shrink-0"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

// ─── Component ─────────────────────────────────────────────────────────────────
//
// A compact, conversion-focused financing band. Server component (no hooks) so it
// can drop into any page. Copy uses general availability language only — no rates,
// payment amounts, or terms — to stay compliant with TILA / Regulation Z.

export default function FinancingCTA() {
  return (
    <section className="py-16 sm:py-20" style={{ background: "var(--surface)" }} aria-label="HVAC financing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-10 sm:px-12 sm:py-12"
          style={{
            background: "linear-gradient(135deg, #1c1f2e 0%, #151720 55%, #1f1215 100%)",
            border: "1px solid var(--border)",
          }}
        >
          {/* Accent glow */}
          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none"
            style={{ background: "var(--accent)", opacity: 0.18 }}
            aria-hidden="true"
          />

          <div className="relative z-10 grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-4"
                style={{ color: "var(--accent-light)", background: "rgba(232,90,42,0.1)", border: "1px solid rgba(232,90,42,0.25)" }}
              >
                <CreditCardIcon />
                Flexible Financing Available
              </div>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-3"
                style={{ color: "var(--text)" }}
              >
                A new system shouldn&apos;t wait for payday.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
                Spread the cost of a repair or new HVAC system into manageable monthly
                payments. Apply online in minutes and see your options — checking
                won&apos;t affect your credit score.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href={HEARTH_APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full lg:w-auto px-7 py-4 text-base font-bold text-white rounded-full transition-colors"
                style={{ background: "var(--accent)" }}
              >
                Apply for Financing
                <ArrowIcon />
              </a>
              <Link
                href="/financing"
                className="inline-flex items-center justify-center gap-1.5 w-full lg:w-auto px-7 py-3 text-sm font-semibold rounded-full transition-colors"
                style={{ color: "var(--text)", background: "var(--surface-2)", border: "1px solid var(--border)" }}
              >
                How financing works
              </Link>
              <div className="flex items-center gap-1.5 text-xs mt-1" style={{ color: "var(--muted)" }}>
                <ShieldCheckIcon />
                No impact to your credit to check · Powered by Hearth
              </div>
            </div>
          </div>
        </div>

        <p className="text-[0.7rem] leading-relaxed mt-4 max-w-3xl mx-auto text-center" style={{ color: "var(--muted)", opacity: 0.7 }}>
          Subject to credit approval. Financing provided through Hearth&apos;s lending
          partners; North East Heating And Cooling is not a lender and does not make
          credit decisions.
        </p>
      </div>
    </section>
  );
}
