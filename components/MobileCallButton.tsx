"use client";

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 shrink-0"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

/**
 * Sticky mobile-only call button fixed to the bottom of the viewport.
 * Hidden on md+ breakpoints so it doesn't interfere with desktop layouts.
 */
export default function MobileCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href="tel:8132916146"
        className="flex items-center justify-center gap-2.5 w-full py-4 text-white font-bold text-base transition-colors shadow-[0_-4px_16px_rgba(0,0,0,0.3)]"
        style={{ background: 'var(--accent)' }}
        aria-label="Call North East Heating And Cooling at (813) 291-6146"
      >
        <PhoneIcon />
        <span>Call (813) 291-6146</span>
      </a>
    </div>
  );
}
