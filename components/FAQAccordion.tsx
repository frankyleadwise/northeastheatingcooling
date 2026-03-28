"use client";

import { useState } from "react";

type FAQItem = { q: string; a: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-base" style={{ color: 'var(--text)' }}>
              {faq.q}
            </span>
            <span
              className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform"
              style={{
                background: open === i ? 'var(--accent)' : 'var(--surface-2)',
                transform: open === i ? 'rotate(45deg)' : 'none',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5" style={{ color: 'var(--muted)' }}>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                {faq.a}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
