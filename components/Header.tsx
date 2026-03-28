"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const PhoneIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ChevronDownIcon = ({ rotated }: { rotated: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-3.5 h-3.5 transition-transform duration-200 ${rotated ? "rotate-180" : ""}`}
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const HamburgerIcon = () => (
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
    <line x1="4" y1="6"  x2="20" y2="6"  />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const CloseIcon = () => (
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
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

// ─── Nav data ─────────────────────────────────────────────────────────────────

const serviceDropdown = [
  { label: "Residential HVAC", href: "/residential" },
  { label: "Commercial HVAC",  href: "/commercial"  },
];

type NavLink =
  | { label: string; href: string; dropdown?: undefined }
  | { label: string; href: string; dropdown: typeof serviceDropdown };

const navLinks: NavLink[] = [
  { label: "Home",          href: "/"              },
  { label: "About",         href: "/about"         },
  { label: "Services",      href: "#", dropdown: serviceDropdown },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog",          href: "/blog"          },
  { label: "Contact",       href: "/contact"       },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Header() {
  const [mobileOpen,         setMobileOpen]         = useState(false);
  const [desktopDropOpen,    setDesktopDropOpen]    = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      {/* ── Floating pill nav (desktop) ─────────────────────────────────── */}
      <div
        className="fixed top-5 left-1/2 z-50 hidden lg:block"
        style={{ transform: "translateX(-50%)", width: "min(900px, calc(100vw - 3rem))" }}
      >
        <div
          className="flex items-center justify-between px-5 py-3 rounded-full"
          style={{
            background: "rgba(13, 15, 24, 0.88)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid var(--border)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center" onClick={closeAll}>
            <Image
              src="/transparent white letters.png"
              alt="North East Heating and Cooling"
              width={200}
              height={56}
              className="h-[52px] w-auto"
              priority
            />
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDesktopDropOpen((v) => !v)}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm font-semibold rounded-full transition-colors"
                    style={{ color: 'var(--text)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-light)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
                    aria-expanded={desktopDropOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDownIcon rotated={desktopDropOpen} />
                  </button>

                  {desktopDropOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-52 rounded-xl py-1.5 z-50"
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
                      }}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setDesktopDropOpen(false)}
                          className="flex items-center px-4 py-2.5 text-sm font-medium transition-colors"
                          style={{ color: 'var(--muted)' }}
                          onMouseEnter={e => {
                            e.currentTarget.style.color = 'var(--text)';
                            e.currentTarget.style.background = 'var(--surface-2)';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.color = 'var(--muted)';
                            e.currentTarget.style.background = 'transparent';
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-semibold rounded-full transition-colors"
                  style={{ color: 'var(--text)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-light)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA button */}
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2 text-sm font-bold text-white rounded-full transition-colors"
            style={{ background: 'var(--accent)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-hover)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
          >
            <PhoneIcon className="w-3.5 h-3.5" />
            Get Free Quote
          </Link>
        </div>
      </div>

      {/* ── Mobile header bar ───────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-16 lg:hidden"
        style={{
          background: "rgba(13, 15, 24, 0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* Logo */}
        <Link href="/" onClick={closeAll}>
          <Image
            src="/transparent white letters.png"
            alt="North East Heating and Cooling"
            width={160}
            height={44}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="tel:8132916146"
            className="flex items-center justify-center w-8 h-8 rounded-full text-white"
            style={{ background: 'var(--accent)' }}
            aria-label="Call (813) 291-6146"
          >
            <PhoneIcon className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex items-center justify-center w-8 h-8 rounded-full text-white"
            style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </header>

      {/* ── Mobile slide-down menu ───────────────────────────────────────── */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed top-16 left-0 right-0 bottom-0 z-40 overflow-y-auto lg:hidden"
          style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
        >
          <nav className="px-4 py-4 flex flex-col" aria-label="Mobile navigation">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between py-4 text-base font-semibold"
                    style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}
                    aria-expanded={mobileServicesOpen}
                  >
                    {link.label}
                    <ChevronDownIcon rotated={mobileServicesOpen} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 py-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeAll}
                          className="flex items-center gap-2 py-3 text-sm font-medium transition-colors"
                          style={{ color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAll}
                  className="flex items-center py-4 text-base font-semibold transition-colors"
                  style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Mobile CTA */}
            <div className="py-5">
              <Link
                href="/contact"
                onClick={closeAll}
                className="flex items-center justify-center w-full py-3.5 text-white font-bold rounded-full transition-colors text-base"
                style={{ background: 'var(--accent)' }}
              >
                Get Free Quote
              </Link>
            </div>

            {/* Contact info */}
            <div className="pb-4 pt-2 space-y-2" style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>
              <a href="tel:8132916146" className="flex items-center gap-2 hover:text-white transition-colors">
                <PhoneIcon className="w-4 h-4" />
                (813) 291-6146
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Spacer to push content below the fixed mobile header */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
      {/* Spacer for desktop floating nav */}
      <div className="hidden lg:block h-20" aria-hidden="true" />
    </>
  );
}
